/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontWeight: {
            hairline: 100,
            'extra-light': 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            'extra-bold': 800,
            black: 900,
        },
        screens: {
            // 'xs': '320px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1800px',
        },
        fontFamily: {
            'demo': ['Nunito', 'cursive'],
            'demo': ['Rajdhani', 'sans-serif'],
        },
        extend: {
            height: {
                '110px': '110px',
                '128': '32rem',
                'hero-w': '36.29rem',
                '90p': '90%',
                '80p': '80%',
                '70p': '70%',
                '65p': '65%',
                '60p': '60%',
                '50p': '50%',
                '45p': '45%',
                '40p': '40%',
                '30p': '30%',
                '35p': '35%',
                '30p': '30%',
                '25p': '25%',
                '20p': '20%',
            },
            width: {
                '110px': '110px',
                '90p': '90%',
                '80p': '80%',
                '70p': '70%',
                '65p': '65%',
                '60p': '60%',
                '50p': '50%',
                '40p': '40%',
                '30p': '30%',
                '35p': '35%',
                '30p': '30%',
                '20p': '20%',
                '15p': '15%',
                '10p': '10%',
                '5p': '5%',
            },
            backgroundImage: {
                'hero-pattern': "url('./Components/Hero/images/5.jpg')",
                'card-bg-1': "url('./Components/Projects/Background/bg1.jpg')",
                'card-bg-3': "url('./Components/Projects/Background/bg3.jpg')",
                'card-bg-4': "url('./Components/Projects/Background/bg4.jpg')",
                'card-bg-5': "url('./Components/Projects/Background/bg5.jpg')",
                'card-bg-6': "url('./Components/Projects/Background/bg6.jpg')",
                'card-bg-7': "url('./Components/Projects/Background/bg7.jpg')",
                'card-bg-8': "url('./Components/Projects/Background/bg8.jpg')",
                'card-bg-9': "url('./Components/Projects/Background/bg9.jpg')",
                'card-bg-10': "url('./Components/Projects/Background/bg10.jpg')",
            },
            dropShadow: {
                'white-shade': '0 35px 35px 0 rgba(255,255,255,0.5)',
            },
            colors: {
                'overlay': 'linear-gradient(180deg, rgba(29,78,216,0.5) 0%, rgba(219,39,119,0.5) 100%)',
                'bg-color': '#171717',
                'card-overlay': 'rgba(72, 84, 96, 0.9)',
            },
            transitionProperty: {
                'every': 'all',
            },
            keyframes: {
                'up-down': {
                    '0%': {
                        transform: 'translateY(10px)'
                    },
                    '100%': {
                        transform: 'translateY(-10px)'
                    },
                },
            },
            animation: {
                'up-down': 'up-down 2s ease-in-out infinite alternate-reverse both'
            }
        },
    },
    plugins: [],
}