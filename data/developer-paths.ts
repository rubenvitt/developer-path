export interface Link {
    label: string;
    url: string;
}

export interface PathStep {
    description: string;
    id: number;
    state?: 'resolved' | 'open';
    name: string;
    links: Link[];
    img: string;
}

export interface DeveloperPath {
    name: string;
    steps: PathStep[];
}

export const BackendDeveloper: DeveloperPath = {
    name: 'Backend Developer',
    steps: [
        {
            id: 0,
            name: 'Computational Essentials',
            description: 'Knowledge about how to calculate 1+1',
            links: [{ label: 'Tutorial', url: 'https://fme.de' }],
            img: 'https://unsplash.com/photos/WiONHd_zYI4/download?force=true&w=640',
        },
        {
            id: 0,
            name: 'Computational Essentials',
            description: 'Knowledge about how to calculate 1+1',
            links: [{ label: 'Tutorial', url: 'https://fme.de' }],
            img: 'https://unsplash.com/photos/WiONHd_zYI4/download?force=true&w=640',
        },
        {
            id: 0,
            name: 'Computational Essentials',
            description: 'Knowledge about how to calculate 1+1',
            links: [{ label: 'Tutorial', url: 'https://fme.de' }],
            img: 'https://unsplash.com/photos/WiONHd_zYI4/download?force=true&w=640',
        },
        {
            id: 0,
            name: 'Computational Essentials',
            description: 'Knowledge about how to calculate 1+1',
            links: [{ label: 'Tutorial', url: 'https://fme.de' }],
            img: 'https://unsplash.com/photos/WiONHd_zYI4/download?force=true&w=640',
        },
    ],
};
