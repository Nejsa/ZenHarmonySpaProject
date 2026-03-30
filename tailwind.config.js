/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Fira Sans", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#c9a96e", // Hovedgull
          light: "#e8d5aa", // Lys gull
          dark: "#8a7248", // Dempet gull
        },
        bg: {
          primary: "#1a1812", // Mørk brun bakgrunn
          card: "#221f18", // Card bakgrunn
        },
        text: {
          primary: "#d4c9b0", // Beige tekst
          dim: "#7a7060", // Dempet tekst
        },
        warm: {
          white: "#f0e8d8", // Varm hvit
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "bounce-slow": "bounceSlow 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceSlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
