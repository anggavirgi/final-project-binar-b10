/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "425px",
        desktop: "1024px",
        desktopfull: "1400px",
      },
      colors: {
        primary: "#6148FF",
      },
    },
  },
  plugins: [],
};
