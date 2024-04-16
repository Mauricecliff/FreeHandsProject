/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        mobile: "200px",
        // => @media (min-width: 200px) { ... }

        tablet: "768px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1024px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },

  plugins: [],
};
