/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0CC184",
        "slate-500": "#000926",
        "slate-600": "#0D0E14",
        "slate-700": "#F2F2F0",
        "slate-900": "#D9E0EC",
      },
      screens: {
        "3xl": "1786px",
        // => @media (min-width: 1786px) { ... }
      },
    },
  },
  plugins: [],
};
