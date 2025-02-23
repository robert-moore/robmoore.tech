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
    <a :href="url" class="fancy-underline mt-3 inline-block">
      Visit {{ title }} →
    </a>
  </div>
</template>
