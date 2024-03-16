import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
    recentSearches: Array<{
        coords: {
            lat: string;
            lon: string;
        };
        name: string;
    }>;
    units?: 'metric' | 'imperial';
};

type Action = {
    addToRecent: (coords: { lat: string; lon: string }, name: string) => void;
    setUnits: (metric: 'metric' | 'imperial') => void;
    reset: () => void;
};

const initialState: State = {
    units: 'metric',
    recentSearches: [],
};

export const useClientSettingsStore = create<State & Action>()(
    persist(
        (set, get) => ({
            ...initialState,
            addToRecent: (coords: { lat: string; lon: string }, name: string) =>
                set({ recentSearches: [...get().recentSearches.slice(-2), { coords, name }] }),
            setUnits: (metric: 'metric' | 'imperial') => set({ units: metric }),
            reset: () => set({ ...initialState }),
        }),
        {
            name: 'client-settings',
        },
    ),
);
