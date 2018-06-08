import {GooglePlace} from "integrations/models/google";
import {Place, Provider, Address} from "domain/models";

export function fromGooglePlace(place: GooglePlace): Place {
    return {
        id: "",
        provider: Provider.Google,
        name: place.name,
        description: "",
        location: {
            lat: place.geometry.location.lat,
            long: place.geometry.location.long,
        },
        address: place.vicinity,
        uri: "",
    };
}
