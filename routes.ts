export interface Route {
    label: string;
    url: string;
}

export const routes: Route[] = [
    {
        label: 'Dashboard',
        url: '/',
    },
    {
        label: 'Path Overview',
        url: '/path',
    },
];
