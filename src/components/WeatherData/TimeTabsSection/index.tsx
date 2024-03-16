import { useClientWeatherStore, useForecastWeatherStore } from '@/store';

import styles from './timetabs.module.css';

const times = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

export const TimeTabsSection = () => {
    const { selectedDate, selectedTime, setData } = useClientWeatherStore();
    const { data } = useForecastWeatherStore();

    return (
        <section className={styles.container}>
            {times.map((time, ind) => (
                <div
                    key={time}
                    className={[
                        styles.tab,
                        selectedTime === ind && styles.selected,
                        selectedTime && ind === selectedTime - 1 ? styles.leftNeighbor : '',
                        selectedTime && ind === selectedTime + 1 ? styles.rightNeighbor : '',
                    ].join(' ')}
                    onClick={() => setData({ selectedTime: ind })}
                >
                    {selectedTime !== ind && (
                        <img
                            className={styles.icon}
                            src={
                                import.meta.env.VITE_IMAGE_URL +
                                `/${data?.list[selectedDate! * 8 + ind].weather[0].icon}@2x.png`
                            }
                        />
                    )}
                    {time}
                </div>
            ))}
        </section>
    );
};
