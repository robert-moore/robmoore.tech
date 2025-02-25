<template>
  <header class="py-6 border-b border-gray-100">
    <nav class="max-w-screen-2xl mx-auto px-6">
      <div class="flex items-center justify-between">
        <!-- Site name - modern sans-serif -->
        <NuxtLink
          to="/"
          class="no-underline font-sans text-lg font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
        >
          Rob Moore
        </NuxtLink>

        <!-- Navigation - clean and minimal -->
        <div class="flex items-center space-x-8">
          <NuxtLink
            to="/writing"
            class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Writing
          </NuxtLink>
          <NuxtLink
            to="/data-vis"
            class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Data Vis
          </NuxtLink>
          <a
            href="https://perthirtysix.com"
            target="_blank"
            rel="noopener"
            class="group text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span class="flex items-center">
              PerThirtySix
              <ArrowTopRightOnSquareIcon
                class="w-3.5 h-3.5 ml-1 -mr-4 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                aria-hidden="true"
              />
            </span>
          </a>
          <a
            href="https://churnkey.co"
            target="_blank"
            rel="noopener"
            class="group text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span class="flex items-center">
              Churnkey
              <ArrowTopRightOnSquareIcon
                class="w-3.5 h-3.5 ml-1 -mr-4 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

defineOptions({
  name: "Header",
});
</script>

<style scoped>
.router-link-active {
  @apply text-gray-900;
}
</style>
