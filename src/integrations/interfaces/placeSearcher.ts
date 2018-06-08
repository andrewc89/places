
import {PlaceSearch, Place} from "domain/models";

// TODO: Implement classes and use this to retrieve integration layers from
// a factory? i.e. (platform: Platform) => IPlaceSearcher
export interface IPlaceSearcher {
    searchPlaces(searchParams: PlaceSearch): Promise<Place[]>;
}
