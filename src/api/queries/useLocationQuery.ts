import { useClientGeoLocationStore, useClientWeatherStore } from '@/store';
import { useQuery } from '@tanstack/react-query';

import { fetchLocationByCoords, fetchLocationByName } from '@/api/requests';

export const useLocationByNameQuery = () => {
    const { query } = useClientGeoLocationStore();
    return useQuery({
        queryKey: ['location', query],
        queryFn: async () => await fetchLocationByName(query),
        enabled: query.length > 0,
    });
};

export const useLocationByCoordsQuery = () => {
    const { coords } = useClientWeatherStore();
    return useQuery({
        queryKey: ['location', JSON.stringify(coords)],
        queryFn: async () => await fetchLocationByCoords(coords!.lat, coords!.lon),
        enabled: coords !== undefined,
    });
};
