/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{jsx,tsx,js,ts}",
    "./contexts/**/*.{jsx,js,tsx,ts}",
    "./layouts/**/*.{jsx,js,tsx,ts}",
    "./**/.{jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: true,
      },
      colors: {
        blue: "#194761",
        primary: "#FABB18",
        danger: "#FF434E",
        success: "#15C666",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
