<template>
  <nav aria-label="Table of Contents">
    <!-- Desktop ToC -->
    <div class="hidden lg:block">
      <h2 class="font-serif text-lg font-semibold text-gray-900 mb-4">
        {{ title }}
      </h2>
      <TocList :toc="toc" :active-id="activeId" @select="handleSelect" />
    </div>

    <!-- Mobile ToC -->
    <Teleport to="body">
      <button
        type="button"
        class="fixed lg:hidden bottom-6 right-6 z-[100] bg-white rounded-full shadow-lg p-3 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        @click="isOpen = !isOpen"
        aria-label="Toggle table of contents"
        :aria-expanded="isOpen"
      >
        <MenuIcon v-if="!isOpen" class="w-6 h-6" />
        <CloseIcon v-else class="w-6 h-6" />
      </button>

      <!-- Mobile drawer and backdrop -->
      <div
        v-show="isOpen"
        class="lg:hidden fixed inset-0 z-[90] bg-black/25 backdrop-blur-sm"
        @click="isOpen = false"
      />

      <div
        v-show="isOpen"
        class="lg:hidden fixed right-0 top-0 bottom-0 w-80 bg-white z-[95] overflow-y-auto shadow-xl"
      >
        <div class="p-4 border-b">
          <div class="flex justify-between items-center">
            <h2 class="font-serif text-lg font-medium text-gray-900">
              {{ title }}
            </h2>
            <button
              type="button"
              class="text-gray-500 hover:text-gray-700"
              @click="isOpen = false"
            >
              <CloseIcon class="w-6 h-6" />
            </button>
          </div>
        </div>
        <div class="p-4">
          <TocList :toc="toc" :active-id="activeId" @select="handleSelect" />
        </div>
      </div>
    </Teleport>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as CloseIcon,
} from "@heroicons/vue/24/outline";
import TocList from "./TocList.vue";

defineProps<{
  toc: Array<{ id: string; text: string; depth: number }>;
  title?: string;
  activeId?: string;
}>();

const isOpen = ref(false);

function handleSelect(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    // Close mobile menu after selection
    isOpen.value = false;
  }
}
</script>
