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