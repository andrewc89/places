import {GooglePlace} from "integrations/models/google";
import {Place, Platform, Address, Coordinates} from "domain/models";

export function fromGooglePlace(googlePlace: GooglePlace): Place {
    const place = new Place();

    place.id = "";
    place.provider = Platform.Google;
    place.name = googlePlace.name;
    place.description = "";
    place.location = new Coordinates(googlePlace.geometry.location.lat, googlePlace.geometry.location.long);
    place.address = googlePlace.vicinity;
    place.uri = "";

    return place;
}
