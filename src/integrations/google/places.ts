
// Places API

import axios from "axios";

import * as DomainModels from "domain/models";
import {PlaceSearch, GooglePlace} from "integrations/models/google";
import {PlaceSearchResponse} from "integrations/models/google/responses";
import {toGoogleSearchModel} from "integrations/mappers/placeSearchMapper";
import {handleGoogleResponse} from "integrations/google/common";

import config from "./config";
import { fromGooglePlace } from "integrations/mappers/placeMapper";

export async function searchPlaces(searchParams: DomainModels.PlaceSearch): Promise<DomainModels.Place[]> {

    const url = config.placeSearchUrl;

    const mappedSearchParams = toGoogleSearchModel(searchParams);

    const params: any = mappedSearchParams;
    params.key = config.apiKey;

    const response = await axios.get(url, {params, validateStatus: null});

    const body = handleGoogleResponse<GooglePlace[], PlaceSearchResponse>(response, url, PlaceSearchResponse);

    const mappedResults = body.map(fromGooglePlace);

    return mappedResults;
}
