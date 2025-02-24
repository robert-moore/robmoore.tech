import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    post: defineCollection({
      type: "page",
      source: "post/**",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        showSidenotes: z.boolean().optional(),
        showToc: z.boolean().optional(),
        showHeaderNumbers: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
      }),
    }),
  },
});
