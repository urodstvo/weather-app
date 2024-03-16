import { CurrentWeatherResponse } from '@/types';
import { create } from 'zustand';

type State = { data?: CurrentWeatherResponse };

type Action = {
    setData: (data: CurrentWeatherResponse) => void;
};

const initialState = { data: undefined };

export const useCurrentWeatherStore = create<State & Action>((set) => ({
    ...initialState,
    setData: (data) => set({ data }),
}));
