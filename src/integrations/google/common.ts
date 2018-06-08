
import {AxiosResponse} from "axios";

import {map} from "common/mapperHelpers";
import {GoogleApiError} from "domain/models/errors";
import {GoogleApiResponse, GoogleApiStatus} from "integrations/models/google/responses";

const log = require("log")("places:integrations:google");

export function handleGoogleResponse<ResultType, ResponseType extends GoogleApiResponse<ResultType>>(response: AxiosResponse, url: string, responseType: { new (): ResponseType; }): ResultType {

    const responseBody: ResponseType = map<ResponseType>(response.data, responseType);

    if (!responseBody) {
        throw new Error(`No response received from ${url}`);
    }

    if (responseBody.error_message) {
        log.error(`The Google API responded with an error at ${url}: ${responseBody.error_message}`);
        throw new GoogleApiError(responseBody.error_message);
    }

    if ([GoogleApiStatus.OK, GoogleApiStatus.ZeroResults].indexOf(responseBody.status) === -1) {
        log.error(`The Google API responded a non-OK status at ${url}: ${responseBody.status}`);
        throw new GoogleApiError(responseBody.status);
    }

    return responseBody.payload();
}
