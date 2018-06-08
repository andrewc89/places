
import * as DomainModels from "domain/models";
import * as ViewModels from "api/models";

export function fromViewModel(viewModel: ViewModels.PlaceView): DomainModels.PlaceSearch {
    return {
        coordinates: {
            lat: viewModel.lat,
            long: viewModel.long,
        },
        radius: viewModel.radius,
        keyword: viewModel.keyword,
    };
}
