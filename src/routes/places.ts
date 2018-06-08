
import parse from "co-body";

import {PlaceView} from "models/view";
import {validatePlaceView} from "validators/placeValidator";

const log = require("log")("places:routes:places");

export async function getPlaces(ctx, next) {

    const model: PlaceView = ctx.request.query;
    validatePlaceView(model);

}
