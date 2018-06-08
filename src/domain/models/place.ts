
import {Address, Coordinates} from "domain/models";

export class Place {
    id: string;
    provider: Provider;
    name: string;
    description: string;
    location: Coordinates;
    address: Address;
    uri: string;
}

export enum Provider {
    Google = "google",
    Yelp = "yelp",
    Foursquare = "foursquare",
}
