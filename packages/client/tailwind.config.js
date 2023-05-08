/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "576px",
        desktop: "1024px",
      },
      fontFamily: {
        lato: ["lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
