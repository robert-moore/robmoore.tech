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
        brand: {
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
        "blog-text": "#222",
        "blog-link": "#1481b8",
        "blog-meta": "#7aa0b8",
        "blog-border": "#dee9ed",
        "blog-code-bg": "#faf8f5",
        "background-color": "#ffffff",
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
        serif: "ct, sans-serif",
        sans: "'Source Sans 3', sans-serif",
        mono: "SF Mono, JetBrains Mono, sans-serif",
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
      typography: (theme) => {
        const serif = theme("fontFamily.serif");
        return {
          DEFAULT: {
            css: {
              "--tw-prose-body": "#374151",
              "--tw-prose-headings": "#222",
              "--tw-prose-links": "#1481b8",
              fontFamily: theme("fontFamily.serif"),
              // fontSize: "16px",
              // lineHeight: "32px",
              lineHeight: "1.7778",
              maxWidth: "50rem",
              strong: {
                fontFamily: theme("fontFamily.sans"),
                fontWeight: "550",
              },
              p: {
                marginTop: "1.5rem",
                marginBottom: "1.5rem",
                fontWeight: "500",
              },
              h1: {
                fontFamily: theme("fontFamily.serif"),
                fontSize: "3rem",
                lineHeight: "1.1rem",
                marginTop: "2rem",
                marginBottom: "2rem",
                paddingTop: "2rem",
                paddingBottom: "0.5rem",
              },
              h2: {
                fontFamily: `${theme("fontFamily.sans")} !important`,
                fontSize: "1.6rem",
                lineHeight: "1.5",
                fontWeight: "600 !important",
                letterSpacing: "0.0em",
                marginBottom: "1.5rem",
                marginTop: "2.5rem",
                paddingTop: "1.75rem",
                borderTop: `1px solid ${theme("colors.gray.200")}`,
                position: "relative",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1rem",
                alignItems: "baseline",
                "& small": {
                  fontFamily: theme("fontFamily.serif"),
                  fontSize: "1.375rem",
                  fontWeight: "800",
                  color: theme("colors.gray.400"),
                  whiteSpace: "nowrap",
                },
                "& .header-number": {
                  fontSize: "3rem",
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
                    top: "1.6rem",
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
              h3: {
                fontFamily: theme("fontFamily.serif"),
                fontSize: "1.5rem",
                lineHeight: "1.5",
                fontStyle: "italic",
                fontWeight: "normal",
                marginTop: "2rem",
                marginBottom: "1rem",
                color: theme("colors.gray.700"),
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1rem",
                alignItems: "baseline",
                "& small": {
                  fontFamily: theme("fontFamily.serif"),
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
                color: theme("colors.brand.500"),
                textDecoration: "none",
                borderBottom: `1px solid ${theme("colors.brand.200")}`,
                transition: "border-color 0.2s ease",
                "&:hover": {
                  borderBottomColor: theme("colors.brand.500"),
                },
              },
              blockquote: {
                position: "relative",
                margin: "29px 0 31px 0",
                padding: "0",
                border: "none",
                "& p": {
                  margin: "0 48px",
                  font: `italic 24px/36px ${serif}`,
                  color: "#5985a6",
                },
                "&::before, &::after": {
                  position: "absolute",
                  top: "-20px",
                  font: `italic 72px ${serif}`,
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
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      modifiers: ["lg", "xl"],
      theme: {
        DEFAULT: {
          css: (theme) => ({
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.brand.500"),
              "&:hover": {
                color: theme("colors.brand.600"),
              },
            },
            h1: {
              color: theme("colors.gray.900"),
              fontWeight: "600",
            },
            "h2, h3, h4": {
              color: theme("colors.gray.900"),
              fontWeight: "600",
              marginTop: "2.5em",
            },
            pre: {
              backgroundColor: theme("colors.gray.50"),
              color: theme("colors.gray.800"),
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              borderRadius: "0.25rem",
              padding: "0.2em 0.4em",
              fontSize: "0.875em",
            },
            blockquote: {
              fontStyle: "italic",
              borderLeftColor: theme("colors.gray.300"),
              marginTop: "2em",
              marginBottom: "2em",
            },
          }),
        },
      },
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
};
