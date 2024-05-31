/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customNeutral: {
          100: "hsl(var(--clr-neutral-100))",
          200: "hsl(var(--clr-neutral-200))",
          300: "hsl(var(--clr-neutral-300))",
          400: "hsl(var(--clr-neutral-400))",
        },

        customBlue: "hsl(var(--clr-blue))",
        customPurple: "hsl(var(--clr-purple))",
      },
    },
  },
  plugins: [],
};
