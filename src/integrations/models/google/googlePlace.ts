
/* tslint:disable:variable-name */

export class GooglePlace {
    geometry: {
        location: {
            lat: string;
            long: string;
        };
    };
    icon: string;
    id: string;
    name: string;

    opening_hours: {
        open_now: boolean;
    };

    photos: Photo[];
    place_id: string;
    price_level: number;
    rating: number;
    scope: string;

    // TODO: Type
    alt_ids?: any;

    reference: string;
    types: string[];
    vicinity: string;
}

class Photo {
    height: number;
    width: number;
    photo_reference: string;

    // TODO: Type
    html_attributions: any[];
}
