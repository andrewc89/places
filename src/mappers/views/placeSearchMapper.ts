
import * as DomainModels from "models/domain";
import * as ViewModels from "models/view";

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
