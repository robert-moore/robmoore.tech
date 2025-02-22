<script setup lang="ts">
import type { BlogPost } from "~/types/blog";

interface Props {
  title: string;
  posts: BlogPost[];
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
  <div class="flex-1 flex-grow pb-12 md:pb-0 lg:max-w-[21rem]">
    <h3 class="font-serif mt-0 text-xl mb-4">{{ title }}</h3>
    <ul class="mb-0 list-none">
      <li v-for="post in posts" :key="post.path" class="last:mb-0 list-none">
        <a :href="post.path">{{ post.title }}</a>
        <span
          class="font-sans italic pl-2 text-[#6b7280] text-[0.7rem] dark:text-[#9ca3af]"
          >{{ formatDate(post.date) }}</span
        >
        <p
          v-if="showDescriptions"
          class="font-sans mt-0.5 text-gray-600 text-base"
        >
          {{ post.description }}
        </p>
      </li>
    </ul>
  </div>
</template>
