
import {AxiosResponse} from "axios";

import {map} from "common/mapperHelpers";
import {Platform} from "domain/models";
import {IntegrationError} from "domain/models/errors";
import {GoogleApiResponse, GoogleApiStatus} from "integrations/models/google/responses";

export function handleGoogleResponse<ResultType, ResponseType extends GoogleApiResponse<ResultType>>(response: AxiosResponse, url: string, responseType: { new (): ResponseType; }): ResultType {

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
