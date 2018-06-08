import {GooglePlace} from "integrations/models/google";
import {Place, Platform, Address, Coordinates} from "domain/models";

export function fromGooglePlace(googlePlace: GooglePlace): Place {
    const place = new Place();

    place.externalId = googlePlace.id;
    place.provider = Platform.Google;
    place.name = googlePlace.name;
    place.location = new Coordinates(googlePlace.geometry.location.lat, googlePlace.geometry.location.lng);
    place.address = googlePlace.vicinity;
    require("log")("places").debug("i-d: %j", place);
    return place;
}
