import { useClientSettingsStore, useClientWeatherStore } from '@/store';
import { useQuery } from '@tanstack/react-query';

import { fetchForecastWeather } from '@/api/requests';

export const useForecastWeatherQuery = () => {
    const { coords } = useClientWeatherStore();
    const { units } = useClientSettingsStore();

    return useQuery({
        queryKey: ['forecast', JSON.stringify(coords), units],
        queryFn: async () => await fetchForecastWeather({ lat: coords!.lat, lon: coords!.lon, units }),
        enabled: !!coords,
    });
};
