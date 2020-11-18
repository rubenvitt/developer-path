import create, { State } from 'zustand';

interface PageInfo extends State {
    title: string;
    heading: string;
    setHeading: (s: string) => void;
}

export const usePageInfo = create<PageInfo>((set) => ({
    title: '',
    heading: '',
    setHeading: (s) => set((state) => ({ heading: s })),
}));
