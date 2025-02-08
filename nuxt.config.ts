export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
  css: ["katex/dist/katex.min.css"],
  content: {
    renderer: {
      alias: {
        SidenoteRef: "SidenoteRef",
        Sidenote: "Sidenote",
      },
    },
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
        remarkPlugins: {
          "remark-math": {
            singleDollarTextMath: true,
          },
        },
        rehypePlugins: {
          "rehype-katex": {
            singleDollarTextMath: true,
            output: "mathml",
            strict: false,
          },
        },
      },
    },
  },
  experimental: {
    componentIslands: true,
  },
});
