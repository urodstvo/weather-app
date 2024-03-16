import type { GeoCodingResponse } from '@/types';

import { getGeocodingAPIurl } from '../helpers';

export const fetchLocationByName = async (q: string) => {
    const response = await fetch(getGeocodingAPIurl('/direct', { q }));

    return (await response.json()) as GeoCodingResponse;
};

export const fetchLocationByCoords = async (lat: string, lon: string) => {
    const response = await fetch(getGeocodingAPIurl('/reverse', { lat, lon }));

    return (await response.json()) as GeoCodingResponse;
};
