
import {Coordinates, Platform} from "domain/models";

export class Place {
    id: string;
    provider: Platform;
    name: string;
    description: string;
    location: Coordinates;
    address: string;
    uri: string;
}
