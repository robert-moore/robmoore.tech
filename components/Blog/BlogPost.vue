<template>
  <article
    class="relative max-w-4xl mx-auto px-4 md:px-8"
    itemscope
    itemtype="http://schema.org/BlogPosting"
  >
    <!-- Article Header -->
    <header class="mb-16">
      <h1
        class="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight"
        itemprop="headline"
      >
        {{ title }}
      </h1>
      <div class="meta text-gray-600 font-serif text-lg">
        <time
          :datetime="date"
          itemprop="datePublished"
          class="publication-date"
        >
          {{ formatDate(date) }}
        </time>
        <span
          v-if="wordCount"
          class="ml-4 word-count"
          itemprop="wordCount"
          aria-label="Article length"
        >
          {{ wordCount }} words
        </span>
      </div>
    </header>

    <!-- Main content -->
    <div class="content-wrapper">
      <main
        class="prose prose-lg prose-stone max-w-none font-serif lg:max-w-[calc(100%-16rem)]"
        itemprop="articleBody"
      >
        <slot />
      </main>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  date: string;
  wordCount?: number;
}

const props = defineProps<Props>();

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<style scoped>
.content-wrapper {
  position: relative;
}

:deep(.prose) {
  --tw-prose-body: theme("colors.gray.800");
  --tw-prose-headings: theme("colors.gray.900");
  --tw-prose-links: theme("colors.blue.700");
  font-family: theme("fontFamily.serif");
  line-height: 1.7;
  font-size: 1.125rem;
}

/* Add clearfix to ensure proper float behavior */
.content-wrapper::after {
  content: "";
  display: table;
  clear: both;
}

/* Ensure paragraphs clear sidenotes properly */
:deep(.prose p) {
  margin-bottom: 1.5em;
  hyphens: auto;
  clear: both;
}

:deep(.prose h2) {
  font-size: 1.75em;
  margin-top: 2.5em;
  margin-bottom: 1em;
  font-weight: 600;
}

:deep(.prose h3) {
  font-size: 1.5em;
  margin-top: 2em;
  font-weight: 600;
}

:deep(.prose a) {
  text-decoration: none;
  border-bottom: 1px solid theme("colors.gray.300");
  transition: border-color 0.2s ease;
}

:deep(.prose a:hover) {
  border-color: theme("colors.blue.700");
}

:deep(.prose blockquote) {
  font-style: italic;
  border-left-color: theme("colors.gray.300");
  margin: 2em 0;
}
</style>
