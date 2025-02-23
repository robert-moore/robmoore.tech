<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  url: string;
}

defineProps<Props>();
</script>

<template>
  <div class="flex-1 flex-grow lg:max-w-[21rem]">
    <h2 class="font-[550] text-xl mb-2">{{ title }}</h2>
    <p class="mt-0 text-[1rem] text-gray-700 dark:text-gray-300">
      {{ description }}
    </p>
    <a
      :href="url"
      class="inline-block text-blog-link font-semibold hover:text-blog-link/80 transition-colors mt-2"
    >
      Visit {{ title }} →
    </a>
  </div>
</template>
