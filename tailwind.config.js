module.exports = {
    theme: {
        extend: {
            colors: {
                'blue-fitu': {
                    100: '#006ecd',
                    200: '#005eb0',
                    300: '#0a445c'
                },
                'white-smoke': {
                    100: '#f7f6f8',
                    200: '#f5f6fa',
                },
                'green': {
                    100: '#44d1b3'
                }
            },
            minWidth: {
                '0': '0',
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                'full': '100%',
                'min-w-min': 'min-content',
                'min-w-max': '1000px'
            }
        }
    },
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './pages/**/*.vue',
            './pages/**/*.js',
            './components/**/*.vue',
            './components/**/*.js',
            './layouts/**/*.vue',
            './layouts/**/*.js',
            './plugins/**/*.vue',
            './plugins/**/*.js',
            './nuxt.config.js',
        ],
    },
}
