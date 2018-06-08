
import {Coordinates, Platform} from "domain/models";

export class Place {
    externalId: string;
    provider: Platform;
    name: string;
    location: Coordinates;
    address: string;
}
