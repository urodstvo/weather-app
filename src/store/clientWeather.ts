import getDefaultTime from '@/util/helpers/getDefaultTime';
import { create } from 'zustand';

type State = {
    coords?: {
        lat: string;
        lon: string;
    };
    selectedDate?: number;
    selectedTime?: number;
};

type Action = {
    setData: (data: State) => void;
    reset: () => void;
};

const initialState: State = {
    selectedDate: 0,
    selectedTime: getDefaultTime(),
    coords: undefined,
};

export const useClientWeatherStore = create<State & Action>((set) => ({
    ...initialState,
    setData: (data: State) => set({ ...data }),
    reset: () => set({ ...initialState }),
}));
