import { Header } from '@/components/Header';

import { RegionInfo } from './components/RegionInfo';
import { WeatherData } from './components/WeatherData';

export const App = () => {
    return (
        <>
            <RegionInfo />
            <Header />
            <WeatherData />
        </>
    );
};
