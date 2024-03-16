import { create } from 'zustand';

type State = {
    visible: boolean;
};

type Action = {
    setVisible: (visible: boolean) => void;
    reset: () => void;
};

const initialState = {
    visible: false,
};

const createPopoverStore = () =>
    create<State & Action>((set) => ({
        ...initialState,
        setVisible: (visible) => set({ visible }),
        reset: () => set({ ...initialState }),
    }));

export const usePopoverStore = createPopoverStore();
