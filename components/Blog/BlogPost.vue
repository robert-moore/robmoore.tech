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
    <header class="mb-12">
      <h1
        class="font-crimson text-5xl mb-6 leading-tight pt-12 pb-5"
        itemprop="headline"
      >
        {{ title }}
      </h1>
      <div
        class="text-[#7aa0b8] font-source-sans text-sm"
        itemprop="datePublished"
      >
        <time :datetime="date" class="publication-date">
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
        class="prose prose-crimson max-w-none text-[#222]"
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
/* These styles are better kept in CSS since they deal with layout structure */
.content-wrapper {
  position: relative;
  width: 576px;
  margin: 0 auto;
}

/* Responsive adjustments */
@media (max-width: 1344px) {
  .content-wrapper {
    width: inherit;
    margin-right: 336px;
  }
}

@media (max-width: 960px) {
  .content-wrapper {
    margin: 0;
  }
}

/* Base content styles that can't be easily done with Tailwind */
:deep(.prose) {
  --tw-prose-body: #222;
  --tw-prose-headings: #222;
  --tw-prose-links: #1481b8;
  font-family: "Crimson", Georgia, serif;
  line-height: 1.5;
  font-size: 16px;
}

/* Float behavior needs to stay in CSS */
.content-wrapper::after {
  content: "";
  display: table;
  clear: both;
}

/* Complex selectors better kept in CSS */
:deep(.sidenote.lg\:sidenote-margin) {
  margin-right: -18rem;
  width: 16rem;
}
</style>
