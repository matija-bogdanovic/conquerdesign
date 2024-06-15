/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-white":
          "linear-gradient(to right, rgba(32, 201, 39, 0), rgba(255, 255, 255, 1))",
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        "loop-scroll2": "loop-scroll2 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { trasform: "translateX(0)" },
          to: { transform: "translateX(-104.8%)" },
        },
        "loop-scroll2": {
          from: { trasform: "translateX(0)" },
          to: { transform: "translateX(-105.4%)" },
        },
      },
      boxShadow: {
        cardShadow: "5px 5px 51px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        blue: {
          primary: "#000212",
        },
        white: {
          primary: "#FAF8FF",
        },
      },
      screens: {
        xsm: "320px",
      },
    },
  },
  plugins: [],
};
