import { useClientWeatherStore, usePopoverStore } from '@/store';
import { PropsWithChildren } from 'react';

export const RecentSearchesItem = (
    props: PropsWithChildren<{ className?: string; coords: { lat: string; lon: string } }>,
) => {
    const { setData } = useClientWeatherStore();
    const { setVisible } = usePopoverStore();
    const handleClick = () => {
        setData({ coords: { lat: props.coords.lat, lon: props.coords.lon } });
        setVisible(false);
    };

    return (
        <div className={props.className} onClick={handleClick}>
            {props.children}
        </div>
    );
};
