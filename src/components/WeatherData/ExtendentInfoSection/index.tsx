import {
    useClientSettingsStore,
    useClientWeatherStore,
    useCurrentWeatherStore,
    useForecastWeatherStore,
} from '@/store';
import getDefaultTime from '@/util/helpers/getDefaultTime';
import { IconBrandSpeedtest, IconWind } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

import styles from './extendedinfo.module.css';

export const ExtendentInfoSection = () => {
    const { selectedDate, selectedTime } = useClientWeatherStore();
    const { data: currentWeather } = useCurrentWeatherStore();
    const { data: forecastWeather } = useForecastWeatherStore();
    const { units } = useClientSettingsStore();

    const [data, setData] = useState<{
        feels: number;
        wind: number;
        pressure: number;
        humidity: number;
        visibility: number;
    }>({ feels: 0, wind: 0, pressure: 0, humidity: 0, visibility: 0 });

    useEffect(() => {
        let source;
        if (selectedDate === 0 && selectedTime === getDefaultTime()) source = currentWeather;
        else source = forecastWeather!.list[selectedDate! * 8 + selectedTime!];

        setData({
            feels: Math.round(source!.main.feels_like),
            wind: Math.round(source!.wind.speed),
            pressure: Math.round(source!.main.pressure),
            humidity: Math.round(source!.main.humidity),
            visibility: Math.round(source!.visibility),
        });
    }, [selectedDate, selectedTime, currentWeather, forecastWeather]);

    return (
        <section className={styles.table}>
            <table>
                <tbody>
                    <tr>
                        <td>Feels like</td>
                        <td>
                            {data.feels}
                            <span>{units === 'metric' ? '°C' : '°F'}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <IconWind strokeWidth={1.25} size={20} transform="rotate(180)" />
                            <p>Wind</p>
                        </td>
                        <td>
                            {data.wind}
                            <span>{units === 'metric' ? 'meter/sec' : 'miles/hour'}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <IconBrandSpeedtest strokeWidth={1.25} size={20} />
                            <p>Pressure</p>
                        </td>
                        <td>
                            {data.pressure}
                            <span>hPa</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>
                            {data.humidity}
                            <span>%</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Visibility</td>
                        <td>
                            {data.visibility}
                            <span>m</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};
