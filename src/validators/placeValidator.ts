
import isValidCoordinates = require("is-valid-coordinates");

import {FieldValidation, ValidationError} from "models/domain/errors";
import {PlaceView} from "models/view";

const log = require("log")("places:validators:placeValidator");

export function validatePlaceView(model: PlaceView) {

    const fields: FieldValidation[] = [];

    if (!model.lat) {
        fields.push({field: "lat", message: "Latitude is required."});
    }

    if (!model.long) {
        fields.push({field: "lat", message: "Longitude is required."});
    }

    if (isValidCoordinates.latitude(model.lat)) {
        fields.push({ field: "lat", message: "Invalid latitude provided."});
    }

    if (isValidCoordinates.longitude(model.long)) {
        fields.push({ field: "long", message: "Invalid longitude provided."});
    }

    if (fields.length > 0) {
        throw new ValidationError("Invalid parameter(s) provided.", fields);
    }
}
