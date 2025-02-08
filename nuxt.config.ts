export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: "github-light-default",
            dark: "github-dark-default",
            light: "github-light-default",
          },
          langs: ["javascript", "typescript", "php", "go", "bash", "html"],
        },
      },
    },
  },
  experimental: {
    componentIslands: true,
  },
});
