import {Place} from "domain/models";
import {PlaceView} from "api/models";

export function toViewModel(place: Place): PlaceView {
    const view = new PlaceView();

    view.id = place.id;
    view.provider = place.provider;
    view.name = place.name;
    view.description = place.description;
    view.location = {
        lat: place.location.lat,
        long: place.location.long,
    };
    view.address = place.address;
    view.uri = place.uri;

    return view;
}
