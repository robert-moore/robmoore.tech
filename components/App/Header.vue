<template>
  <header class="border-b border-blog-border py-6">
    <nav class="max-w-screen-2xl mx-auto px-4 md:px-8">
      <div class="flex items-center justify-between">
        <!-- Site name - more prominent and refined -->
        <NuxtLink
          to="/"
          class="font-crimson text-2xl text-blog-text hover:text-blog-link transition-colors tracking-tight"
        >
          Rob Moore
        </NuxtLink>

        <!-- Navigation - simplified and elegant -->
        <div class="space-x-12 font-crimson text-lg">
          <NuxtLink
            to="/writing"
            class="text-blog-meta hover:text-blog-link transition-colors"
          >
            Writing
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-blog-meta hover:text-blog-link transition-colors"
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
  @apply text-blog-text;
  position: relative;
}

/* Subtle underline for active link */
.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: theme("colors.blog-link");
  opacity: 0.3;
}
</style>
