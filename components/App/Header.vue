<template>
  <header class="py-6 border-b border-gray-100 dark:border-gray-800">
    <nav class="max-w-screen-2xl mx-auto px-6">
      <div class="flex items-center justify-between">
        <!-- Site name - modern sans-serif -->
        <NuxtLink
          to="/"
          class="no-underline font-sans text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 hover:text-gray-600 transition-colors"
        >
          Rob Moore
        </NuxtLink>

        <!-- Navigation - clean and minimal -->
        <div class="flex items-center space-x-8">
          <NuxtLink
            to="/writing"
            class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Writing
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            About
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: "Header",
});
</script>

<style scoped>
.router-link-active {
  @apply text-gray-900 dark:text-gray-100;
}
</style>
