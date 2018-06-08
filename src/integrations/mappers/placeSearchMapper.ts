
import * as DomainModels from "domain/models";
import * as GoogleModels from "integrations/models/google";

export function toGoogleSearchModel(domainModel: DomainModels.PlaceSearch): GoogleModels.PlaceSearch {

    const googlePlaceSearch = new GoogleModels.PlaceSearch();

    googlePlaceSearch.location = `${domainModel.coordinates.lat},${domainModel.coordinates.long}`;
    googlePlaceSearch.radius = domainModel.radius;
    googlePlaceSearch.keyword = domainModel.keyword;

    return googlePlaceSearch;
}
