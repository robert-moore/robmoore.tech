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
        modifiedDate: z.string().optional(),
        image: z.string().optional(),
        showSidenotes: z.boolean().optional(),
        showToc: z.boolean().optional(),
        showHeaderNumbers: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
        wordCount: z.number().optional(),
      }),
    }),
  },
});
