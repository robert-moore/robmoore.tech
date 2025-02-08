<template>
  <article class="relative max-w-3xl mx-auto">
    <!-- Article Header -->
    <header class="mb-12">
      <h1 class="font-serif text-4xl mb-4">{{ title }}</h1>
      <div class="text-gray-600 font-serif">
        <time :datetime="date">{{ formatDate(date) }}</time>
        <span v-if="wordCount" class="ml-4">{{ wordCount }} words</span>
      </div>
    </header>

    <!-- Main content with sidenotes container -->
    <div class="relative">
      <!-- Main content -->
      <div class="prose prose-lg prose-stone max-w-none font-serif">
        <slot />
      </div>

      <!-- Sidenotes container -->
      <div class="absolute top-0 left-full w-64 pl-8 hidden xl:block">
        <slot name="sidenotes" />
      </div>
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
:deep(.prose) {
  --tw-prose-body: theme("colors.gray.700");
  --tw-prose-headings: theme("colors.gray.900");
  --tw-prose-links: theme("colors.blue.700");
  line-height: 1.7;
}

:deep(.prose p) {
  margin-bottom: 1.5em;
}

:deep(.prose h2) {
  font-size: 1.5em;
  margin-top: 2em;
  margin-bottom: 1em;
}
</style>
