module.exports = {
    darkMode: ['class'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 6s linear infinite',
            },
        },
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
            "2xl": '1720px'
        },
    }
}