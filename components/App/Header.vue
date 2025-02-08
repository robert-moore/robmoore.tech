<template>
  <header class="border-b border-gray-200 py-6">
    <nav class="max-w-6xl mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Left side - Site name -->
        <NuxtLink
          to="/"
          class="text-xl font-serif text-gray-800 hover:text-gray-600 transition-colors"
        >
          Rob Moore
        </NuxtLink>

        <!-- Right side - Navigation -->
        <div class="space-x-8 font-serif text-gray-700">
          <NuxtLink to="/blog" class="hover:text-gray-900 transition-colors">
            Essays
          </NuxtLink>
          <NuxtLink to="/about" class="hover:text-gray-900 transition-colors">
            About
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
// No reactive logic needed for this minimal header
</script>

<style scoped>
.router-link-active {
  @apply text-gray-900 font-medium;
}
</style>
