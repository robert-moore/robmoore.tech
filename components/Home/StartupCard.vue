<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  url: string;
}>();
</script>

<template>
  <a :href="url" target="_blank" rel="noopener" class="block group">
    <div class="flex items-baseline justify-between gap-2">
      <h3
        class="text-lg font-medium group-hover:text-primary-500 transition-colors"
      >
        {{ title }}
        <span
          class="inline-block ml-1 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
          aria-hidden="true"
          >→</span
        >
      </h3>
    </div>
    <p class="mt-2 text-gray-600 group-hover:text-gray-900 transition-colors">
      {{ description }}
    </p>
  </a>
</template>
