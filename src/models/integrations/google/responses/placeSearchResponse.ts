
import {GoogleApiStatus} from "models/integrations/google/responses/googleApiStatus";
import {GooglePlace} from "models/integrations/google";

/* tslint:disable:variable-name */

export class PlaceSearchResponse {
    status: GoogleApiStatus;
    error_message?: string;
    results: GooglePlace[];

    // TODO: Type
    html_attributions: any[];
}
