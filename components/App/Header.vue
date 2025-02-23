<template>
  <header class="py-6">
    <nav class="max-w-screen-2xl mx-auto px-4 md:px-8">
      <div class="flex items-center justify-between">
        <!-- Site name - more prominent and refined -->
        <NuxtLink
          to="/"
          class="no-underline font-crimson text-2xl transition-colors tracking-tight"
        >
          Rob Moore
        </NuxtLink>

        <!-- Navigation - simplified and elegant -->
        <div class="space-x-12 font-crimson text-lg">
          <NuxtLink to="/writing" class="no-underline transition-colors">
            Writing
          </NuxtLink>
          <NuxtLink to="/about" class="transition-colors"> About </NuxtLink>
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
  @apply relative;
}

/* Subtle underline for active link */
.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
}
</style>
