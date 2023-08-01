import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // content: [
  //   "./app/**/*.{js,ts,jsx,tsx}",
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",

  //   // Or if using `src` directory:
  //   "./src/**/*.{js,ts,jsx,tsx}",
  // ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: "rgb(var(--tw-color-primary-50) / <alpha-value>)",
          100: "rgb(var(--tw-color-primary-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-primary-200) / <alpha-value>)",
          300: "rgb(var(--tw-color-primary-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-primary-400) / <alpha-value>)",
          500: "rgb(var(--tw-color-primary-500) / <alpha-value>)",
          600: "rgb(var(--tw-color-primary-600) / <alpha-value>)",
          700: "rgb(var(--tw-color-primary-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-primary-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-primary-900) / <alpha-value>)",
          950: "rgb(var(--tw-color-primary-950) / <alpha-value>)",
        },
        dark: "#222222",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        offwhite: "#ECF2FF",
        bluish: "#B4C7ED",
        navyblue: "#13224f",
        lightwhite: "#d0d3db",
        darkblue: "#091945",
        green: "#139277",
        red: "#c92a8f",
        lightblue: "#8A9BCA",
        blue: "#0C1B44",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "2rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1.25" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1.25" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1.25rem" }],
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: "0.99",
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: "0.4",
            filter: "none",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-700px 0",
          },
          "100%": {
            backgroundPosition: "700px 0",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
