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
            fontSize: "18px",
            lineHeight: "1.5",
            maxWidth: "42rem",
            p: {
              marginTop: "1.25rem",
              marginBottom: "1.25rem",
            },
            h1: {
              fontFamily: '"Crimson", Georgia, serif',
              fontSize: "3rem",
              lineHeight: "1.1",
              marginTop: "2rem",
              marginBottom: "2rem",
              paddingTop: "2rem",
              paddingBottom: "0.5rem",
            },
            h2: {
              fontFamily: '"Crimson", Georgia, serif',
              fontSize: "1.875rem",
              lineHeight: "1.5",
              fontWeight: "600",
              marginTop: "2.5rem",
              marginBottom: "1rem",
              paddingBottom: "0.2rem",
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              alignItems: "baseline",
              "& small": {
                fontFamily: '"Crimson", Georgia, serif',
                fontSize: "1.375rem",
                fontWeight: "800",
                color: "#222",
                whiteSpace: "nowrap",
              },
              "& a": {
                color: "#222",
                textDecoration: "none",
                borderBottom: "none",
                "&:hover": {
                  color: "inherit",
                  borderBottom: "none",
                },
                "&::before": {
                  position: "absolute",
                  left: "-3rem",
                  width: "3rem",
                  content: '"§"',
                  color: "#fff",
                  transition: "color 0.2s ease",
                  textAlign: "center",
                },
                "&:hover::before": {
                  color: "#ddd",
                },
              },
            },
            h3: {
              fontFamily: '"Crimson", Georgia, serif',
              fontSize: "1.5rem",
              lineHeight: "1.5",
              fontStyle: "italic",
              fontWeight: "normal",
              marginTop: "2rem",
              marginBottom: "0.75rem",
              color: "#222",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              alignItems: "baseline",
              "& small": {
                fontFamily: '"Crimson", Georgia, serif',
                fontSize: "1rem",
                fontWeight: "600",
                fontStyle: "normal",
                color: "#222",
                whiteSpace: "nowrap",
              },
              "& a": {
                color: "#222",
                textDecoration: "none",
                borderBottom: "none",
                "&:hover": {
                  color: "inherit",
                  borderBottom: "none",
                },
                "&::before": {
                  position: "absolute",
                  left: "-3rem",
                  width: "3rem",
                  content: '"§"',
                  color: "#fff",
                  transition: "color 0.2s ease",
                  textAlign: "center",
                },
                "&:hover::before": {
                  color: "#ddd",
                },
              },
            },
            a: {
              color: "#1481b8",
              textDecoration: "none",
              borderBottom: "1px solid rgba(20, 129, 184, 0.2)",
              transition: "border-color 0.2s ease",
              "&:hover": {
                borderBottomColor: "#1481b8",
              },
            },
            blockquote: {
              position: "relative",
              margin: "29px 0 31px 0",
              padding: "0",
              border: "none",
              "& p": {
                margin: "0 48px",
                font: 'italic 24px/36px "Crimson", Georgia, serif',
                color: "#5985a6",
              },
              "&::before, &::after": {
                position: "absolute",
                top: "-20px",
                font: 'italic 72px "Crimson", Georgia, serif',
                color: "#dee9ed",
              },
              "&::before": {
                content: '"\\201C"',
                left: "-7px",
              },
              "&::after": {
                content: '"\\201D"',
                right: "8px",
              },
            },
            pre: {
              font: 'normal 13px/20px "Source Code Pro", Menlo, Consolas, Monaco, monospace',
              background: "#faf8f5",
              borderRadius: "3px",
              padding: "12px",
              margin: "24px -12px",
              color: "#595959",
            },
            code: {
              fontFamily:
                '"Source Code Pro", Menlo, Consolas, Monaco, monospace',
              fontSize: "0.9em",
              background: "#faf8f5",
              padding: "1px 4px",
              borderRadius: "2px",
              color: "#595959",
            },
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
