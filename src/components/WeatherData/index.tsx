import { useCurrentWeatherQuery, useForecastWeatherQuery } from '@/api';
import { useClientWeatherStore, useCurrentWeatherStore, useForecastWeatherStore } from '@/store';
import { useEffect } from 'react';

import { Loader } from '../Loader';
import { DateTabsSection } from './DateTabsSection';
import { ExtendentInfoSection } from './ExtendentInfoSection';
import { TemperatureSection } from './TemperatureSection';
import { TimeTabsSection } from './TimeTabsSection';
import styles from './weatherdata.module.css';

const useSetCurrentWeactherDataEffect = () => {
    const { data: currentData, isLoading } = useCurrentWeatherQuery();
    const { setData: setCurrentData } = useCurrentWeatherStore();

    useEffect(() => {
        if (currentData) setCurrentData(currentData);
    }, [currentData, setCurrentData]);

    return { isLoading };
};

const useSetForecastWeactherDataEffect = () => {
    const { setData: setForecastData } = useForecastWeatherStore();
    const { data: forecastData, isLoading } = useForecastWeatherQuery();

    useEffect(() => {
        if (forecastData) setForecastData(forecastData);
    }, [forecastData, setForecastData]);

    return { isLoading };
};

export const WeatherData = () => {
    const { isLoading: isCurrentLoading } = useSetCurrentWeactherDataEffect();
    const { isLoading: isForecastLoading } = useSetForecastWeactherDataEffect();

    const { selectedTime, coords } = useClientWeatherStore();

    if (isCurrentLoading || isForecastLoading)
        return (
            <main className={styles.weatherData}>
                <Loader />
            </main>
        );

    if (!coords)
        return (
            <main className={styles.weatherData}>
                <h1 style={{ fontSize: 32 }}>To check the weather, select a city</h1>
            </main>
        );

    return (
        <main className={styles.weatherData}>
            <DateTabsSection />
            {selectedTime !== undefined && (
                <>
                    <TemperatureSection />
                    <ExtendentInfoSection />
                </>
            )}
            <TimeTabsSection />
        </main>
    );
};
