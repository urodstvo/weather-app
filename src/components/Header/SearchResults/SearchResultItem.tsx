import { useClientSettingsStore, useClientWeatherStore, usePopoverStore } from '@/store';
import { GeoCodingResponseItem } from '@/types';

export const SearchResultItem = (props: GeoCodingResponseItem & { className?: string }) => {
    const { setVisible } = usePopoverStore();
    const { setData } = useClientWeatherStore();
    const { addToRecent } = useClientSettingsStore();

    const handleClick = () => {
        setData({ coords: { lat: props.lat.toString(), lon: props.lon.toString() } });
        setVisible(false);
        addToRecent({ lat: props.lat.toString(), lon: props.lon.toString() }, `${props.country}, ${props.name}`);
    };

    return (
        <div className={props.className} onClick={handleClick}>
            <p style={{ display: 'flex', gap: 5 }}>
                <span style={{ width: 24 }}>{props.country},</span>
                {props.name}
            </p>
            <p>{props.state}</p>
        </div>
    );
};
