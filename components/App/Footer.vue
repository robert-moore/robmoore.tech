<template>
  <footer class="border-t border-gray-200 py-8 mt-16">
    <div class="max-w-3xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left side - Copyright and links -->
        <div class="font-serif text-sm text-gray-600">
          <p class="mb-2">© {{ currentYear }} Robert Moore</p>
          <div class="space-x-4">
            <NuxtLink
              to="/rss.xml"
              class="hover:text-gray-900 transition-colors"
            >
              RSS
            </NuxtLink>
            <NuxtLink
              to="/sitemap.xml"
              class="hover:text-gray-900 transition-colors"
            >
              Sitemap
            </NuxtLink>
          </div>
        </div>

        <!-- Right side - Contact info -->
        <div class="font-serif text-sm text-gray-600 md:text-right">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <span class="mx-2">•</span>
          <a
            href="mailto:your@email.com"
            class="hover:text-gray-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear());
</script>
