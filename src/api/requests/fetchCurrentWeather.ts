import type { CurrentWeatherResponse, GeoQuery } from '@/types';

import { getAPIurl } from '../helpers';

export const fetchCurrentWeather = async (query: GeoQuery) => {
    const response = await fetch(
        getAPIurl('/weather', {
            ...query,
        }),
    );

    return (await response.json()) as CurrentWeatherResponse;
};
