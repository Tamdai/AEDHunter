/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        red1: "#751814",
        red2: "#902622",
        mainbg: "#e0e0e0",
      },
    },
  },
  plugins: [require("daisyui")],
};
