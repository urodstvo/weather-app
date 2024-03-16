import { useClientWeatherStore } from '@/store';
import getDefaultTime from '@/util/helpers/getDefaultTime';
import { HTMLProps } from 'react';

import styles from './datetabs.module.css';

const day = 24 * 60 * 60 * 1000;

const tabs = [
    'current',
    'tommorow',
    new Intl.DateTimeFormat('ru', { dateStyle: 'short' }).format(Date.now() + 1 * day).slice(0, -5),
    new Intl.DateTimeFormat('ru', { dateStyle: 'short' }).format(Date.now() + 2 * day).slice(0, -5),
    new Intl.DateTimeFormat('ru', { dateStyle: 'short' }).format(Date.now() + 3 * day).slice(0, -5),
];

const Tab = ({ children, ...props }: HTMLProps<HTMLDivElement>) => {
    return (
        <div {...props} className={[styles.tab, props.className].join(' ')}>
            {children}
        </div>
    );
};

export const DateTabsSection = () => {
    const { selectedDate, setData } = useClientWeatherStore();

    return (
        <nav className={styles.tabs}>
            {tabs.map((tab, ind) => (
                <Tab
                    key={tab}
                    className={selectedDate === ind ? styles.selected : ''}
                    onClick={() =>
                        setData({
                            selectedDate: ind,
                            selectedTime: ind === 0 ? getDefaultTime() : undefined,
                        })
                    }
                >
                    {tab}
                </Tab>
            ))}
        </nav>
    );
};
