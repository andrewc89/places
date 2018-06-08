import {GoogleApiStatus} from "integrations/models/google/responses";

/* tslint:disable:variable-name */

export abstract class GoogleApiResponse<PayloadType> {

    status: GoogleApiStatus;
    error_message?: string;

    // TODO: Type
    html_attributions: any[];

    // Because the Google API doesn't return the actual response payload as a
    // consistent property on the response data object, this function is
    // necessary to have a consistent way to get the payload from the response.
    abstract payload(): PayloadType;
}
