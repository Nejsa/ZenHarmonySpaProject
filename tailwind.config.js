/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        body: ['Lato', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          DEFAULT: '#0ea5a3', // rolig turkis/teal aksent
          dark: '#0b8482',
          light: '#e6f7f6',
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
