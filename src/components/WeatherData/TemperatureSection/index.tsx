import {
    useClientSettingsStore,
    useClientWeatherStore,
    useCurrentWeatherStore,
    useForecastWeatherStore,
} from '@/store';
import getDefaultTime from '@/util/helpers/getDefaultTime';
import { useEffect, useState } from 'react';

import styles from './tempsection.module.css';

export const TemperatureSection = () => {
    const { selectedDate, selectedTime } = useClientWeatherStore();
    const { setUnits, units } = useClientSettingsStore();
    const { data: currentWeather } = useCurrentWeatherStore();
    const { data: forecastWeather } = useForecastWeatherStore();
    const [data, setData] = useState<{ temp: number; desc: string; icon: string }>({ temp: 0, desc: '', icon: '' });

    useEffect(() => {
        let source;
        if (selectedDate === 0 && selectedTime === getDefaultTime()) source = currentWeather;
        else source = forecastWeather!.list[selectedDate! * 8 + selectedTime!];

        setData({
            temp: Math.round(source!.main.temp),
            desc: source!.weather[0].description,
            icon: source!.weather[0].icon,
        });
    }, [selectedDate, selectedTime, currentWeather, forecastWeather]);

    return (
        <section className={styles.container}>
            <div className={styles.value}>
                <div className={styles.leftSection}>
                    <div className={styles.temperature}>
                        <p>{data.temp}</p>
                        {units === 'metric' ? (
                            <>
                                <span className={styles.unit}>°C</span>
                                <button className={styles.alternativeUnit} onClick={() => setUnits('imperial')}>
                                    °F
                                </button>
                            </>
                        ) : (
                            <>
                                <span className={styles.unit}>°F</span>
                                <button className={styles.alternativeUnit} onClick={() => setUnits('metric')}>
                                    °C
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <img src={import.meta.env.VITE_IMAGE_URL + `${data.icon}@4x.png`} loading="lazy" />
                </div>
            </div>
            <p className={styles.description}>{data.desc}</p>
        </section>
    );
};
