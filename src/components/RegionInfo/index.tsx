import { useLocationByCoordsQuery } from '@/api';
import { useState } from 'react';

import styles from './regioninfo.module.css';

const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
};

export const RegionInfo = () => {
    const { data, isSuccess } = useLocationByCoordsQuery();
    const [time] = useState(Date.now());
    if (!isSuccess) return null;

    return (
        <div className={styles.container}>
            <h4 className={styles.regionName}>
                {data[0].name}, {data[0].country}
            </h4>
            <p className={styles.updatedAt}>Updated at {new Intl.DateTimeFormat('ru-RU', options).format(time)}</p>
        </div>
    );
};
