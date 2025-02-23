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
        hasSidenotes: z.boolean().optional(),
        hasToc: z.boolean().optional(),
        showNumbers: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
      }),
    }),
  },
});
