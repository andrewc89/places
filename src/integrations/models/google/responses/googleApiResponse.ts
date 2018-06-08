import {GoogleApiStatus} from "integrations/models/google/responses";

/* tslint:disable:variable-name */

export abstract class GoogleApiResponse<PayloadType> {

    status: GoogleApiStatus;
    error_message?: string;

    // TODO: Type
    html_attributions: any[];

    abstract payload(): PayloadType;
}
