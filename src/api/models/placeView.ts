
export class PlaceView {
    id: string;
    provider: string;
    name: string;
    description: string;
    location: {
        lat: string;
        long: string;
    };
    address: string;
    uri: string;
}
