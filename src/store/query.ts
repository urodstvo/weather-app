import { create } from 'zustand';

type State = {
    query: string;
};

type Action = {
    setQuery: (query: string) => void;
    reset: () => void;
};

const initialState = {
    query: '',
};

export const useClientGeoLocationStore = create<State & Action>((set) => ({
    ...initialState,
    setQuery: (query: string) => set({ query }),
    reset: () => set({ ...initialState }),
}));
