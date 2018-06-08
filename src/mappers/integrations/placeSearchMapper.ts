
import * as DomainModels from "models/domain";
import * as GoogleModels from "models/integrations/google";

export function toGoogleSearchModel(domainModel: DomainModels.PlaceSearch): GoogleModels.PlaceSearch {
    return {
        location: `${domainModel.coordinates.lat}/${domainModel.coordinates.long}`,
        radius: domainModel.radius,
        keyword: domainModel.keyword,
    };
}
