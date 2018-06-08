
import {map} from "common/mapperHelpers";
import {PlaceSearchView} from "api/models";
import {validatePlaceView} from "api/validators/placeValidator";
import {searchPlaces} from "domain/services/placeService";
import {fromViewModel} from "api/mappers/placeSearchMapper";
import {toViewModel} from "api/mappers/placeMapper";

export async function getPlaces(ctx, next) {

    const viewModel = map(ctx.request.query, PlaceSearchView);
    validatePlaceView(viewModel);

    const searchModel = fromViewModel(viewModel);

    const places = await searchPlaces(searchModel);

    const viewModels = places.map(toViewModel);

    ctx.body = viewModels;
}
