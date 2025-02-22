/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gap: {
        50: "3rem",
      },
      Mywidth: {
        800: "800px",
      },
      zIndex: {
        25000: 25000,
      },
      screens: {
        xl2: "1200px",
      },
      colors: {
        mainBlue: "#313d49",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
    },
  },
  plugins: [],
};
