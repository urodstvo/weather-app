import { useClientWeatherStore } from '@/store';
import { IconLocation } from '@tabler/icons-react';
import { useCallback } from 'react';

import styles from './geolocation.module.css';

export const GeoLocationButton = () => {
    const { setData, reset } = useClientWeatherStore();

    const handleClick = useCallback(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setData({
                    coords: {
                        lat: position.coords.latitude.toString(),
                        lon: position.coords.longitude.toString(),
                    },
                });
            },
            () => reset(),
        );
    }, [setData, reset]);
    return (
        <button className={styles.button} onClick={handleClick}>
            <div className={styles.buttonGradient} />
            <div className={styles.icon}>
                <IconLocation strokeWidth={1.5} size={20} />
            </div>
        </button>
    );
};
