
## Getting Started

    npm i
    npm start
    curl -X GET \
    'http://localhost:3001/api/places?lat=37.63&long=-77.629&radius=5000&keyword=sushi'

If on a Windows system, use `npm run start-windows`.

## Notes

- The `externalId` is the id of the place received from the platform's API.
- The `address` field corresponds with the `vicinity` field received from the Google API. It is an approximate area or address of a place. In order to retrieve a more formal address, a request would have to be made to the [details endpoint](https://developers.google.com/places/web-service/details) for each place.
- The `uri` field suffers from the same problem - a request would have to be made to the details endpoint for each place.
- There is no `description` field returned from the Google API on the search endpoint or on the details endpoint.

## TODOs

- Extract layers into separate projects - `places.domain.models`, `places.domain.services`, `places.api.models`, etc.
- Implement classes. The first roadblock is converting the routes to controller classes. [koa-router-decorators](https://github.com/xmlking/koa-router-decorators) seems like a good solution but is not actively supported.
- Implement generic factories. For instance, to better handle scalability in `placeService`, a factory function like `(platform: Platform) => IPlaceSearcher` could be implemented. The input would specify the platform and the factory would provide an instance of an integration class that implements `IPlaceSearcher` and could `searchPlaces`. This is blocked by the implementation of classes, however.
- Add a query parameter for `/api/places` to specify the platforms with which to search places. This would probably be an optional parameter, defaulting to using all available platforms.
- Should the stack trace of a known error be logged?