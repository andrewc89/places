
import {GoogleApiResponse} from "integrations/models/google/responses";
import {GooglePlace} from "integrations/models/google";

export class PlaceSearchResponse extends GoogleApiResponse<GooglePlace[]> {
    results: GooglePlace[];

    payload(): GooglePlace[] {
        return this.results;
    }
}
