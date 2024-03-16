import { ForecastWeatherResponse } from '@/types';
import { create } from 'zustand';

type State = { data?: ForecastWeatherResponse };

type Action = {
    setData: (data: ForecastWeatherResponse) => void;
};

const initialState = { data: undefined };

export const useForecastWeatherStore = create<State & Action>((set) => ({
    ...initialState,
    setData: (data) => set({ data }),
}));
