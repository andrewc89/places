
import parse from "co-body";

import {PlaceView} from "models/view";
import {validatePlaceView} from "validators/placeValidator";
import { searchPlaces } from "integrations/google/places";
import { fromViewModel } from "mappers/views/placeSearchMapper";

const log = require("log")("places:routes:places");

export async function getPlaces(ctx, next) {

    const model: PlaceView = ctx.request.query;
    validatePlaceView(model);

    const mappedModel = fromViewModel(model);

    const places = await searchPlaces(mappedModel);

    ctx.body = places;
}
