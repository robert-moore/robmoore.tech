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
      <a :href="post.path" class="block group">
        <article>
          <div class="flex items-baseline justify-between gap-2">
            <h3
              class="text-lg font-medium group-hover:text-primary-500 transition-colors"
            >
              {{ post.title }}
              <span
                class="inline-block ml-1 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                aria-hidden="true"
                >→</span
              >
            </h3>
            <time
              :datetime="post.date"
              class="text-sm tabular-nums text-gray-500 group-hover:text-gray-900 transition-colors"
            >
              {{ formatDate(post.date) }}
            </time>
          </div>
          <p
            class="mt-2 text-gray-600 group-hover:text-gray-900 transition-colors"
          >
            {{ post.description }}
          </p>
        </article>
      </a>
    </li>
  </ul>
</template>
