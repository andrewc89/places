
import {AxiosResponse} from "axios";

import {map} from "common/mapperHelpers";
import {Platform} from "domain/models";
import {IntegrationError} from "domain/models/errors";
import {GoogleApiResponse, GoogleApiStatus} from "integrations/models/google/responses";

/**
 * Handle a response from the Google API. The two types provided are necessary
 * because the Google API returns some metadata along with the expected payload
 * object(s). This metadata is included in the ResponseType.
 *
 * @type {PayloadType} - The type of object expected to return from the endpoint.
 * @type {ResponseType extends GoogleApiResponse<PayloadType>} - The type of
 * response expected from the endpoint (including the payload and metadata).
 * @param {AxiosResponse} response - The axios response object.
 * @param {string} url - The url to which a request was made.
 * @param {{ new (): ResponseType; }} responseType - The type of response
 * expected from the endpoint (including the payload and metadata). This must
 * be passed as a parameter as well so the response data can be mapped to it.
 * @throws {IntegrationError} - If the Google API returns a failed status, an
 * integration error is thrown. Google doesn't provide any user-friendly
 * messages.
 * @returns {PayloadType} - The payload.
 */
export function handleGoogleResponse<PayloadType, ResponseType extends GoogleApiResponse<PayloadType>>(response: AxiosResponse, url: string, responseType: { new (): ResponseType; }): PayloadType {

    const responseBody: ResponseType = map<ResponseType>(response.data, responseType);

    if (!responseBody) {
        throw new IntegrationError(`No response received from ${url}`, Platform.Google);
    }

    if (responseBody.error_message) {
        throw new IntegrationError(`The Google API responded with an error at ${url}: ${responseBody.error_message}`, Platform.Google);
    }

    if ([GoogleApiStatus.OK, GoogleApiStatus.ZeroResults].indexOf(responseBody.status) === -1) {
        throw new IntegrationError(`The Google API responded a non-OK status at ${url}: ${responseBody.status}`, Platform.Google);
    }

    return responseBody.payload();
}
