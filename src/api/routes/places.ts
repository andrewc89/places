
import parse from "co-body";

import {PlaceView} from "api/models";
import {validatePlaceView} from "api/validators/placeValidator";
import {searchPlaces} from "domain/services/placeService";
import {fromViewModel} from "api/mappers/placeSearchMapper";

const log = require("log")("places:routes:places");

export async function getPlaces(ctx, next) {

    const model: PlaceView = ctx.request.query;
    validatePlaceView(model);

    const mappedModel = fromViewModel(model);

    const places = await searchPlaces(mappedModel);

    ctx.body = places;
}
