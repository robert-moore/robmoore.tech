<template>
  <nav aria-label="Table of Contents">
    <!-- Desktop ToC -->
    <div class="hidden lg:block">
      <div class="flex items-center gap-3 mb-4">
        <NuxtLink
          to="/writing"
          class="lg:-ml-8 text-gray-600 hover:text-gray-700 -ml-1.5 opacity-0 transform -translate-x-2 transition-all duration-300"
          :class="{ 'opacity-100 translate-x-0': isSticky }"
        >
          <svg
            class="-mt-0.5"
            width="18"
            height="18"
            stroke-width="2"
            viewBox="0 0 24 24"
            fill="none"
            color="currentColor"
          >
            <path
              d="M10.25 4.75l-3.5 3.5 3.5 3.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6.75 8.25h6a4 4 0 014 4v7"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </NuxtLink>
        <h2 class="font-sans text-lg font-semibold text-gray-900">
          {{ title?.split(":")[0] }}
        </h2>
      </div>
      <TocList :toc="toc" :active-id="activeId" @select="handleSelect" />
    </div>

    <!-- Mobile ToC -->
    <Teleport to="body">
      <button
        type="button"
        class="fixed lg:hidden bottom-6 right-6 z-[100] bg-white rounded-full shadow-lg p-3 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
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
            <h2 class="font-sans text-lg font-medium text-gray-900">
              {{ title?.split(":")[0] }}
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
import { ref, onMounted, onUnmounted } from "vue";
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
const isSticky = ref(false);

function handleSelect(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    // Close mobile menu after selection
    isOpen.value = false;
  }
}

// Handle sticky state
function handleScroll() {
  const scrollY = window.scrollY;
  isSticky.value = scrollY > 100; // Adjust this value based on when you want the arrow to appear
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
