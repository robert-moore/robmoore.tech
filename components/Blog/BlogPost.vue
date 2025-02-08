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
    <TableOfContents v-if="hasToc && toc?.length" :toc="toc" :title="title" />

    <!-- Article Header -->
    <header class="mb-16">
      <h1
        class="font-crimson text-[3.5rem] leading-tight mb-8 pb-4 border-b border-blog-border relative"
        itemprop="headline"
      >
        {{ title }}
        <span
          class="absolute bottom-[-2px] left-0 w-24 h-[3px] bg-blog-link"
        ></span>
      </h1>
      <div
        class="text-blog-meta font-crimson text-lg italic"
        itemprop="datePublished"
      >
        <time :datetime="date" class="publication-date">
          {{ formatDate(date) }}
        </time>
        <span
          v-if="wordCount"
          class="ml-6 word-count"
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
        class="prose prose-crimson max-w-none"
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
import { onMounted } from "vue";

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

// Add a counter for sections
let sectionCount = 0;
let subsectionCount = 0;

// Function to format section numbers
function formatSectionNumber(section: number, subsection?: number) {
  if (subsection !== undefined) {
    return `${section}.${subsection}`;
  }
  return section.toString();
}

// Watch for heading elements and add numbers
onMounted(() => {
  const mainContent = document.querySelector(".prose");
  if (!mainContent) return;

  // Select h2 and h3 elements directly within prose
  const headings = mainContent.querySelectorAll("h2, h3");
  for (const heading of headings) {
    if (heading.tagName === "H2") {
      sectionCount++;
      subsectionCount = 0;
      const small = document.createElement("small");
      small.textContent = formatSectionNumber(sectionCount);
      heading.appendChild(small);
    } else if (heading.tagName === "H3") {
      subsectionCount++;
      const small = document.createElement("small");
      small.textContent = formatSectionNumber(sectionCount, subsectionCount);
      heading.appendChild(small);
    }
  }
});
</script>

<style scoped>
/* Keep only the layout-specific styles */
.content-wrapper {
  position: relative;
  width: 576px;
  margin: 0 auto;
}

/* Initialize counters */
:deep(.prose) {
  counter-reset: section subsection;
}

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

.content-wrapper::after {
  content: "";
  display: table;
  clear: both;
}

:deep(.sidenote.lg\:sidenote-margin) {
  margin-right: -18rem;
  width: 16rem;
}
</style>
