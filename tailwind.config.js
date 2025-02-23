/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

// Define semantic color palette
const themeColors = {
  primary: {
    50: "#e1eff7",
    100: "#b3d4e8",
    200: "#80b7d7",
    300: "#4d9ac6",
    400: "#2683b8",
    500: "#1481b8",
    600: "#1270a2",
    700: "#10608b",
    800: "#0d5074",
    900: "#083d55",
  },
  secondary: colors.pink,
  info: colors.sky,
  warning: colors.amber,
  success: colors.emerald,
  error: colors.red,
};

// Define semantic text colors
const textColors = {
  primary: colors.gray[900],
  secondary: colors.gray[600],
  muted: "#7aa0b8",
  link: themeColors.primary[500],
};

// Define semantic background colors
const backgroundColors = {
  primary: colors.white,
  secondary: colors.gray[50],
  code: "#faf8f5",
};

// Define border colors
const borderColors = {
  primary: colors.gray[200],
  secondary: "#dee9ed",
};

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
        ...themeColors,
      },
      fontFamily: {
        serif: "ct, sans-serif",
        sans: "'Source Sans 3', sans-serif",
        mono: "SF Mono, JetBrains Mono, monospace",
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: textColors.primary,
            maxWidth: "46rem",
            lineHeight: "1.7778",
            fontFamily: theme("fontFamily.serif"),
            // Text elements
            strong: {
              fontFamily: theme("fontFamily.sans"),
              fontWeight: "550",
              color: textColors.primary,
            },
            p: {
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              fontWeight: "500",
              color: textColors.primary,
            },

            // Headings
            h1: {
              fontFamily: theme("fontFamily.serif"),
              fontSize: "3rem",
              lineHeight: "1.1",
              marginBlock: "2rem",
              paddingBlock: "2rem 0.5rem",
            },
            h2: {
              fontFamily: theme("fontFamily.sans"),
              fontSize: "1.6rem",
              lineHeight: "1.5",
              fontWeight: "600",
              letterSpacing: "0",
              marginBlock: "2.5rem 1.5rem",
              paddingTop: "1.75rem",
              borderTop: `1px solid ${borderColors.primary}`,
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              alignItems: "baseline",

              "& small": {
                fontFamily: theme("fontFamily.serif"),
                fontSize: "1.375rem",
                fontWeight: "800",
                color: textColors.secondary,
                whiteSpace: "nowrap",
              },

              "& .header-number": {
                fontSize: "2.5rem",
                fontWeight: "800",
                color: theme("colors.gray.300"),
                whiteSpace: "nowrap",
                lineHeight: "1rem",
                paddingRight: "1rem",
                paddingTop: "0.5rem",
                zIndex: "0",
              },
              "& a": {
                color: theme("colors.gray.700"),
                textDecoration: "none",
                borderBottom: "none",
                fontWeight: "inherit",
                "&:hover": {
                  color: "inherit",
                  borderBottom: "none",
                },
                "&::before": {
                  position: "absolute",
                  left: "0.5rem",
                  top: "2rem",
                  width: "1rem",
                  content: '"§"',
                  color: "transparent",
                  transition: "color 0.2s ease",
                  textAlign: "center",
                },
                "&:hover::before": {
                  color: theme("colors.gray.200"),
                },
              },
            },
            "h1, h2, h3, h4": {
              color: textColors.primary,
              fontWeight: "600",
              marginTop: "2.5em",
            },

            // Links within paragraphs
            "p > a": {
              color: themeColors.primary[500],
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
