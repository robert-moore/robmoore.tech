import type { ContentTransformer } from "@nuxt/content/dist/runtime/types";

export default <ContentTransformer>{
  name: "word-count",
  extensions: [".md"],
  transform(content) {
    // Get text content from the markdown
    const text = JSON.stringify(content.body)
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters
      .replace(/\s+/g, " ") // Normalize whitespace
      .trim();

    // Count words
    const wordCount = text.split(" ").length;

    // Add wordCount to the content metadata
    content.wordCount = wordCount;

    return content;
  },
};
