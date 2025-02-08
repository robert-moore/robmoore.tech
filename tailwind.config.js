/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const primary = colors.indigo;
const secondary = colors.pink;
const info = colors.sky;
const warning = colors.amber;
const success = colors.emerald;
const error = colors.red;

module.exports = {
  content: [
    "./assets/**/*.{vue,js,css}",
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./server/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        primary,
        secondary,
        info,
        warning,
        success,
        error,
        "blog-text": "#222",
        "blog-link": "#1481b8",
        "blog-meta": "#7aa0b8",
        "blog-border": "#dee9ed",
        "blog-code-bg": "#faf8f5",
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          muted: "var(--color-text-muted)",
          active: "var(--color-text-active)",
          hover: "var(--color-text-hover)",
          icon: "var(--color-text-icon)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "fill-active": "var(--color-fill-active)",
          "fill-hover": "var(--color-fill-hover)",
          "icon-fill": "var(--color-icon-fill)",
        },
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "serif"],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        crimson: ['"Crimson"', "Georgia", "serif"],
        "source-sans": ['"Source Sans Pro"', "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      typography: {
        crimson: {
          css: {
            "--tw-prose-body": "#222",
            "--tw-prose-headings": "#222",
            "--tw-prose-links": "#1481b8",
            fontFamily: '"Crimson", Georgia, serif',
            fontSize: "16px",
            lineHeight: "1.5",
            h1: {
              fontFamily: '"Crimson", Georgia, serif',
              fontSize: "48px",
              lineHeight: "48px",
              paddingTop: "109px",
              paddingBottom: "19px",
            },
            // Add other typography styles...
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: ["lg", "xl"],
      theme: {
        DEFAULT: {
          css: {
            color: colors.gray[800],
            a: {
              color: colors.blue[700],
              "&:hover": {
                color: colors.blue[800],
              },
            },
            h1: {
              color: colors.gray[900],
              fontWeight: "600",
            },
            "h2, h3, h4": {
              color: colors.gray[900],
              fontWeight: "600",
              marginTop: "2.5em",
            },
            pre: {
              backgroundColor: colors.gray[50],
              color: colors.gray[800],
            },
            code: {
              backgroundColor: colors.gray[100],
              borderRadius: "0.25rem",
              padding: "0.2em 0.4em",
              fontSize: "0.875em",
              "&::before": {
                content: '""',
              },
              "&::after": {
                content: '""',
              },
            },
            blockquote: {
              fontStyle: "italic",
              borderLeftColor: colors.gray[300],
              marginTop: "2em",
              marginBottom: "2em",
            },
          },
        },
      },
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
};
