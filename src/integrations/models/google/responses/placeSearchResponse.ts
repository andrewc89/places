
import {GoogleApiStatus} from "integrations/models/google/responses/googleApiStatus";
import {GooglePlace} from "integrations/models/google";

/* tslint:disable:variable-name */

export class PlaceSearchResponse {
    status: GoogleApiStatus;
    error_message?: string;
    results: GooglePlace[];

    // TODO: Type
    html_attributions: any[];
}
