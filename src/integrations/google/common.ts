
import {GoogleError} from "models/domain/errors";

const log = require("log")("places:integrations:google");

export function handleGoogleResponse<T>(response, url: string) {
    log.debug("%j", response.data);
    log.debug("%s", response.status);
    log.debug("%j", response.headers);
    log.debug("%j", response.config);

    const responseBody = response.data;

    if (!responseBody) {
        throw new Error(`No response received from ${url}`);
    }

    if (responseBody.error_message) {
        log.error(`The Google API responded with an error at ${url}`, responseBody.error_message);
        throw new GoogleError(responseBody.error_message);
    }
}
