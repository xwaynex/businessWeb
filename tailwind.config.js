/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-light": "url('/src/assets/light-hero-bg.png')", // Light mode hero background
        "hero-pattern-dark": "url('/src/assets/herobg.png')", // Dark mode hero background
      },
      colors: {
         // Common colors for both themes
         primary: "#00040f", // Dark mode primary
         "primary-light": "#f9f9f9", // Light mode primary
         secondary: "#aaa6c3",
         tertiary: "#151030",
         "black-100": "#100d25",
         "black-200": "#090325",
         "white-100": "#f3f3f3",
         dimWhite: "rgba(255, 255, 255, 0.7)",
         dimBlue: "rgba(9, 151, 124, 0.1)",
         textDark: "#ffffff", // Text for dark mode
         textLight: "#000000", // Text for light mode
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      animation: {
        "slide-left": "slideLeft 1s ease-in-out forwards",
        "fade-up": "fadeUp 1.5s ease-out forwards",
      },
      keyframes: {
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
     
  },
  plugins: [],
}

