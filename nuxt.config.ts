export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/fonts"],
  css: [
    "katex/dist/katex.min.css",
    "~/assets/css/fonts.css",
    "~/assets/css/global.scss",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap",
        },
      ],
    },
  },
  content: {
    renderer: {
      alias: {
        SidenoteRef: "SidenoteRef",
        Sidenote: "Sidenote",
      },
    },
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
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
