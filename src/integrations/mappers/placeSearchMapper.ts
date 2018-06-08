
import * as DomainModels from "domain/models";
import * as GoogleModels from "integrations/models/google";

export function toGoogleSearchModel(domainModel: DomainModels.PlaceSearch): GoogleModels.PlaceSearch {
    return {
        location: `${domainModel.coordinates.lat},${domainModel.coordinates.long}`,
        radius: domainModel.radius,
        keyword: domainModel.keyword,
    };
}
