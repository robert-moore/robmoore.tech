import { defineTransformer } from "@nuxt/content";

export default defineTransformer({
  name: "word-count",
  extensions: [".md"],
  transform(content) {
    const text = JSON.stringify(content.body)
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters
      .replace(/\s+/g, " ") // Normalize whitespace
      .trim();

    return {
      ...content,
      wordCount: text.split(" ").length,
    };
  },
});
