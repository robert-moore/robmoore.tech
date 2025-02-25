<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: "Rob Moore",
  }
);
</script>

<template>
  <div
    class="h-full w-full flex items-center justify-center bg-white dark:bg-gray-950 relative overflow-hidden font-sans"
  >
    <!-- Ultra-minimal background elements -->
    <div class="absolute inset-0 opacity-[0.03]">
      <div
        class="h-px w-full bg-gray-400 dark:bg-gray-500 absolute top-[15%]"
      ></div>
      <div
        class="h-px w-full bg-gray-400 dark:bg-gray-500 absolute top-[85%]"
      ></div>
    </div>

    <!-- Main content container -->
    <div class="flex flex-col w-full h-full px-12 py-10 relative z-10">
      <div class="flex flex-col h-full justify-between">
        <div>
          <!-- Brand identifier -->
          <div
            class="font-sans font-semibold text-lg text-gray-600 dark:text-gray-400 mb-6 flex items-center"
          >
            Rob Moore
          </div>

          <!-- Main title with much larger typography for OG visibility -->
          <h1
            class="text-5xl font-[800] text-gray-900 dark:text-white leading-[1.05] tracking-tight max-w-[90%]"
          >
            {{ title }}
          </h1>
        </div>

        <!-- Footer with enhanced contrast -->
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center">
            <div class="w-8 h-px bg-gray-400 dark:bg-gray-500 mr-3"></div>
            <div
              class="text-base font-mono text-gray-600 dark:text-gray-300 font-medium"
            >
              CODE × CONSCIOUSNESS
            </div>
          </div>

          <div class="text-base font-mono text-gray-600 dark:text-gray-300">
            robmoore.tech
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
