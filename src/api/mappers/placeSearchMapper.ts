
import * as DomainModels from "domain/models";
import * as ViewModels from "api/models";

export function fromViewModel(viewModel: ViewModels.PlaceSearchView): DomainModels.PlaceSearch {
    const domainModel = new DomainModels.PlaceSearch();

    domainModel.coordinates = new DomainModels.Coordinates(viewModel.lat, viewModel.long);
    domainModel.radius = viewModel.radius;
    domainModel.keyword = viewModel.keyword;

    return domainModel;
}
