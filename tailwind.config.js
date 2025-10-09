/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Fira Sans', 'sans-serif'], // Endret her
      },
      colors: {
        brand: {
          DEFAULT: '#d4b58f', // Korrigert gullfarge
          dark: '#b99d7a',    // En mørkere gullfarge
          light: '#e9d8c4',   // En lysere gullfarge
        },
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        card: '16px',
      },
    },
  },
  plugins: [],
}
