import {
  defineWebSite,
  definePerson,
  defineOrganization,
} from "nuxt-schema-org/schema";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/seo", "@nuxtjs/tailwindcss", "@nuxt/content"],
  css: [
    "katex/dist/katex.min.css",
    "~/assets/css/fonts.css",
    "~/assets/css/global.scss",
  ],

  // @nuxtjs/seo
  ogImage: {
    enabled: false,
  },
  sitemap: {
    enabled: true,
    urls: [], // Will be auto-populated
    exclude: ["/private/*"],
  },
  robots: {
    enabled: true,
    sitemap: "/sitemap.xml",
    disallow: ["/private/*"],
  },
  seo: {
    enabled: true,
  },
  schemaOrg: {
    enabled: true,
    identity: definePerson({
      name: "Rob Moore",
      image: "/images/profile.jpg",
      description:
        "Software engineer and founder building products at the intersection of technology and user experience.",
      url: "https://robmoore.tech",
      sameAs: [
        "https://github.com/robert-moore",
        "https://twitter.com/robmoo_re",
        "https://linkedin.com/in/rob-moore",
      ],
    }),
  },
  linkChecker: {
    enabled: true,
    excludeLinks: [
      "/rss.xml", // Exclude until we implement RSS
      "/private/*",
    ],
  },
  // end @nuxtjs/seo
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
      meta: [{ name: "theme-color", content: "#ffffff" }],
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
      transformers: ["~/transformers/word-count"],
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
    transformers: ["~/transformers/word-count"],
  },
  experimental: {
    componentIslands: true,
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://robmoore.tech",
    },
  },
  site: {
    url: "https://robmoore.tech",
    name: "Rob Moore",
    description:
      "Building products, writing about philosophy and technology, and visualizing sports data.",
    defaultLocale: "en",
  },
});
