<script setup lang="ts">
import type { Post } from "~/types/post";

interface Props {
  posts: Post[];
  showDescriptions?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showDescriptions: false,
});

// Date formatting
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <ul class="space-y-8">
    <li v-for="post in posts" :key="post.path">
      <article>
        <div class="flex items-baseline justify-between gap-2">
          <a
            :href="post.path"
            class="text-lg font-medium hover:text-primary-500 transition-colors"
          >
            {{ post.title }}
          </a>
          <time
            :datetime="post.date"
            class="text-sm tabular-nums text-slate-500 dark:text-slate-400"
          >
            {{ formatDate(post.date) }}
          </time>
        </div>
        <p
          v-if="showDescriptions"
          class="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed"
        >
          {{ post.description }}
        </p>
      </article>
    </li>
  </ul>
</template>
