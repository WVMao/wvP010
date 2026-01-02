/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0066FF',
                    green: '#00CC88',
                },
                dark: {
                    bg: '#0F172A',
                }
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                outfit: ['"Outfit"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
