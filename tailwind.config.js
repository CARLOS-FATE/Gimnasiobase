/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./features/**/*.{js,ts,jsx,tsx,mdx}", // <--- ESTA ES CRUCIAL
    ],
    theme: {
        extend: {
            colors: {
                gym: {
                    bg: "#050505",
                    card: "#121212",
                    border: "#2A2A2A",
                    accent: "#FF9900",
                    primary: "#FF5500",
                    text: "#E0E0E0",
                    muted: "#888888",
                },
            },
            fontFamily: {
                heading: ['var(--font-oswald)', 'sans-serif'],
            }
        },
    },
    plugins: [],
}