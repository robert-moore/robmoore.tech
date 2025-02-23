<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  url: string;
}>();
</script>

<template>
  <a :href="url" target="_blank" rel="noopener" class="block group">
    <h3
      class="text-lg font-medium mb-2 group-hover:text-primary-500 transition-colors"
    >
      {{ title }} →
    </h3>
    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
      {{ description }}
    </p>
  </a>
</template>
