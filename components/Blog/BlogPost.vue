<template>
  <article
    class="relative max-w-5xl mx-auto px-4 md:px-8"
    :class="{
      'has-toc': hasToc && toc?.length,
      'has-sidenotes': hasSidenotes,
    }"
    itemscope
    itemtype="http://schema.org/BlogPosting"
  >
    <!-- Table of Contents -->
    <TableOfContents v-if="hasToc && toc?.length" :toc="toc" />

    <!-- Article Header -->
    <header class="mb-16">
      <h1
        class="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight"
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
        class="prose prose-base prose-stone max-w-none font-serif"
        :class="{
          'lg:max-w-[52rem]': hasToc || hasSidenotes,
          'lg:max-w-[45rem] lg:mx-auto': !hasToc && !hasSidenotes,
        }"
        itemprop="articleBody"
      >
        <slot />
      </main>
    </div>
  </article>
</template>

<script setup lang="ts">
import TableOfContents from "./TableOfContents.vue";

interface Props {
  title: string;
  date: string;
  wordCount?: number;
  hasSidenotes?: boolean;
  hasToc?: boolean;
  toc?: Array<{ id: string; text: string; depth: number }>;
}

const props = withDefaults(defineProps<Props>(), {
  hasSidenotes: false,
  hasToc: true,
});

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
  font-size: 1rem;
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

/* Adjust sidenote positioning */
:deep(.sidenote.lg\:sidenote-margin) {
  margin-right: -18rem;
  width: 16rem;
}

/* Base content width */
.prose {
  @apply max-w-[45rem] mx-auto;
}

/* Adjust width when TOC is present */
.has-toc .prose {
  @apply lg:max-w-[48rem] lg:ml-auto lg:mr-0;
}

/* Adjust width when sidenotes are present */
.has-sidenotes .prose {
  @apply lg:max-w-[52rem];
}

/* When both are present */
.has-toc.has-sidenotes .prose {
  @apply lg:max-w-[45rem] lg:mx-auto;
}
</style>
