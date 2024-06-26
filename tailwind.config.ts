import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStopPositions: {
        51: '51%',
      },
      fontSize: {
        xxs: "0.5rem",
        xxsPlus: "0.6rem",
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        button: "rgb(var(--color-button) / <alpha-value>)",
        colorContrast: "rgb(var(--color-contrast) / <alpha-value>)",
        buttonIcon: "rgb(var(--color-button-icon) / <alpha-value>)",
        buttonText: "rgb(var(--color-button-text) / <alpha-value>)",
        buttonTextHover: "rgb(var(--color-button-text-hover) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        group: "rgb(var(--color-group) / <alpha-value>)",
        linkedin: "rgb(var(--color-linkedin) / <alpha-value>)",
        github: "rgb(var(--color-github) / <alpha-value>)",
        contact: "rgb(var(--color-contact) / <alpha-value>)",
        darkmode: "rgb(var(--color-darkmode) / <alpha-value>)",
        themeOpposite: "rgb(var(--color-theme-opposite) / <alpha-value>)",
        transparentBlack: "rgb(var(--color-transparent-black) / 0.5)",
        colorBackground: "rgb(var(--color-background) / <alpha-value>)",
      },
    },
    animation: {
      crazyColors: "crazyColors 4s ease-in-out infinite",
    },
    keyframes: {
      crazyColors: {
        '0%': {
          "border-color": "#11E2FF"
        },
        "50%": {
          "border-color": "#6C11FF"
        },
        "100%": {
          "border-color": "#11E2FF"
        },
      }
    }
  },
  plugins: [],
};
export default config;
