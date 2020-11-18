module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    500: '#c80000',
                    800: '#750000',
                },
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/ui')],
};
