/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
