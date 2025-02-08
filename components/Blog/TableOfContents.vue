<template>
  <nav aria-label="Table of Contents">
    <!-- Desktop ToC -->
    <div
      class="hidden lg:block fixed"
      :style="{
        width: '16rem',
        left: 'calc(50% - 36rem)',
        top: isSticky ? '2rem' : 'auto',
      }"
    >
      <h2 class="font-serif text-lg font-medium text-gray-900 mb-4 lg:pt-16">
        {{ title }}
      </h2>
      <TocList :toc="toc" :active-id="activeId" @select="scrollToHeading" />
    </div>

    <!-- Mobile ToC -->
    <Teleport to="body">
      <!-- Toggle Button -->
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

      <!-- Backdrop -->
      <Transition
        enter-active-class="transition-opacity duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="isOpen"
          class="lg:hidden fixed inset-0 z-[90] bg-black/25 backdrop-blur-sm"
          @click="isOpen = false"
          aria-hidden="true"
        />
      </Transition>

      <!-- Drawer -->
      <Transition
        enter-active-class="transition-transform duration-200 ease-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition-transform duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <div
          v-show="isOpen"
          class="lg:hidden fixed right-0 top-0 bottom-0 w-80 bg-white z-[95] overflow-y-auto shadow-xl transform"
        >
          <div class="sticky top-0 bg-white p-4 border-b">
            <div class="flex justify-between items-center">
              <h2 class="font-serif text-lg font-medium text-gray-900">
                {{ title }}
              </h2>
              <button
                type="button"
                class="text-gray-500 hover:text-gray-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                @click="isOpen = false"
                aria-label="Close table of contents"
              >
                <CloseIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div class="p-4">
            <TocList
              :toc="toc"
              :active-id="activeId"
              @select="scrollToHeading"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as CloseIcon,
} from "@heroicons/vue/24/outline/index.js";
import TocList from "./TocList.vue";

interface TocLink {
  id: string;
  text: string;
  depth: number;
  children?: TocLink[];
}

const props = defineProps<{
  toc: TocLink[];
  activeId?: string;
  title: string;
}>();

const isOpen = ref(false);
const isSticky = ref(false);

function scrollToHeading(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth" });
  isOpen.value = false;
}

onMounted(() => {
  // Track active section
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          props.activeId = entry.target.id;
        }
      }
    },
    { rootMargin: "-10% 0px -80% 0px" }
  );

  // Observe all headings
  document.querySelectorAll("h2, h3").forEach((heading) => {
    observer.observe(heading);
  });

  // Track scroll position for sticky behavior
  const header = document.querySelector("header");
  if (header) {
    const stickyObserver = new IntersectionObserver(
      ([entry]) => {
        isSticky.value = !entry.isIntersecting;
      },
      { threshold: 1 }
    );
    stickyObserver.observe(header);
  }
});
</script>
