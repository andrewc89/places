
## Getting Started

    npm i
    npm start
    curl -X GET \
    'http://localhost:3001/api/places?lat=37.63&long=-77.629&radius=5000&keyword=sushi'


## TODOs

- Extract layers into separate projects - `places.domain.models`, `places.domain.services`, `places.api.models`, etc.
- Implement classes. The first roadblock is converting the routes to controller classes. [koa-router-decorators](https://github.com/xmlking/koa-router-decorators) seems like a good solution but is not actively supported.
- Implement generic factories. For instance, to better handle scalability in `placeService`, a factory function like `(platform: Platform): IPlaceSearcher` could be implemented. The input would specify the platform and the factory would provide an instance of an integration class that implements `IPlaceSearcher` and could `searchPlaces`. This is blocked by the implementation of classes, however.
- Should the stack trace of a known error be logged?