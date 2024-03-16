import type { GeoQuery } from '../../types';
import { getAPIurl } from '../helpers';

export const fetchForecastWeather = async (query: GeoQuery) => {
    const response = await fetch(
        getAPIurl('/forecast', {
            ...query,
        }),
    );

    return response.json();
};
