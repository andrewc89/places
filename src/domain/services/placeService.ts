
import {PlaceSearch, Place, Platform} from "domain/models";
import * as GooglePlacesIntegration from "integrations/google/places";

/**
 * Search the specified platforms for places using the specified search
 * parameters.
 * @param {PlaceSearch} searchParams - The search parameters.
 * @param {Platform[]} platforms - The platforms the search.
 * @returns {Promise<Place[]>} - The places retrieved from the specified
 * platforms.
 */
export async function searchPlaces(searchParams: PlaceSearch, platforms: Platform[]): Promise<Place[]> {
    const places: Place[] = [];

    if (platforms.includes(Platform.Google)) {
        const googlePlaces = await GooglePlacesIntegration.searchPlaces(searchParams);
        places.push.apply(places, googlePlaces);
    }

    return places;
}
