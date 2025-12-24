/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.6 },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: 1,
          },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
