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
    class="h-full w-full flex items-center justify-center bg-gray-900 relative overflow-hidden"
  >
    <!-- Minimal grid background -->
    <div class="absolute inset-0 opacity-5">
      <div
        class="w-full h-full border-t border-l border-gray-400 grid grid-cols-12 grid-rows-6"
      >
        <div
          v-for="i in 72"
          :key="i"
          class="border-b border-r border-gray-400"
        ></div>
      </div>
    </div>

    <!-- Content container -->
    <div class="flex flex-col w-full h-full p-16 relative z-10">
      <!-- Main content area -->
      <div class="flex flex-col h-full justify-between">
        <div>
          <!-- Monospace tag in minimal style -->
          <div class="text-blue-400 font-mono text-lg mb-6 tracking-wider">
            [rəb mo:r]
          </div>

          <!-- Clean, minimal title -->
          <h1 class="text-[80px] font-black text-white leading-tight mb-4">
            {{ title }}
          </h1>

          <!-- Minimal accent line -->
          <div class="w-24 h-1 bg-blue-500 mt-8"></div>
        </div>

        <!-- Bottom area -->
        <div class="flex justify-between items-end w-full">
          <p class="text-lg font-mono text-gray-400">robmoore.tech</p>

          <!-- Minimal tech identifier -->
          <div class="text-blue-400 font-mono text-sm">
            Code × consciousness
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
