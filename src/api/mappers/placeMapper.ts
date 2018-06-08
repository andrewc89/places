import {Place} from "domain/models";
import {PlaceView} from "api/models";

export function toViewModel(place: Place): PlaceView {
    const view = new PlaceView();

    view.externalId = place.externalId;
    view.provider = place.provider;
    view.name = place.name;
    view.location = {
        lat: place.location.lat,
        long: place.location.long,
    };
    view.address = place.address;

    return view;
}
