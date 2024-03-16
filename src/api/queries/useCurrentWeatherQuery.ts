import { useClientSettingsStore, useClientWeatherStore } from '@/store';
import { useQuery } from '@tanstack/react-query';

import { fetchCurrentWeather } from '@/api/requests';

export const useCurrentWeatherQuery = () => {
    const { coords } = useClientWeatherStore();
    const { units } = useClientSettingsStore();

    return useQuery({
        queryKey: ['current', JSON.stringify(coords), units],
        queryFn: async () => await fetchCurrentWeather({ lat: coords!.lat, lon: coords!.lon, units }),
        enabled: !!coords,
    });
};
