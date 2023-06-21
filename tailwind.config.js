/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        appBlack: "#121212",
        appWhiteHigh: "rgba(255, 255, 255, 0.87)",
        appWhiteMd: "rgba(255, 255, 255, 0.60)",
        appWhiteDis: "rgba(255, 255, 255, 0.38)",
      },
      fontFamily: {
        serif: ["Ubuntu", "sans-serif"],
      },
      animation: {
        bounce200: "bounce 1s infinite 100ms",
        bounce400: "bounce 1s infinite 200ms",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
