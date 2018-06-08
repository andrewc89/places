
import {PlaceSearch, Place} from "domain/models";
import * as GoogleIntegration from "integrations/google/places";

export async function searchPlaces(searchParams: PlaceSearch): Promise<Place[]> {
    const places = await GoogleIntegration.searchPlaces(searchParams);
    return places;
}
