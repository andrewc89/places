
import {map} from "common/mapperHelpers";
import {PlaceSearchView} from "api/models";
import {validatePlaceView} from "api/validators/placeValidator";
import {Platform} from "domain/models";
import * as PlaceService from "domain/services/placeService";
import {fromViewModel} from "api/mappers/placeSearchMapper";
import {toViewModel} from "api/mappers/placeMapper";

/**
 * Retrieve places using the specified parameters.
 *
 * @route - /api/places
 * @query - {lat, long, radius, keyword}
 * @returns {PlaceView[]} - The places.
 */
export async function getPlaces(ctx, next) {

    const viewModel = map(ctx.request.query, PlaceSearchView);
    validatePlaceView(viewModel);

    const searchModel = fromViewModel(viewModel);

    const places = await PlaceService.searchPlaces(searchModel, [Platform.Google]);

    const viewModels = places.map(toViewModel);

    ctx.body = viewModels;
}
