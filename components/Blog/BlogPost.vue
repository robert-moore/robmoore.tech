<template>
  <article class="max-w-screen-2xl mx-auto px-4 md:px-8">
    <div class="lg:grid lg:grid-cols-[220px_minmax(0,840px)_220px] lg:gap-12">
      <!-- ToC -->
      <aside v-if="hasToc && toc?.length" class="hidden lg:block">
        <div class="sticky top-2 mt-[9.5rem]">
          <TableOfContents :toc="toc" :title="title" />
        </div>
      </aside>
      <div v-else class="lg:block" />

      <div>
        <!-- Article Header -->
        <header ref="header" class="mb-16">
          <h1
            class="font-crimson text-[3.5rem] leading-tight mb-8 pb-4 border-b border-blog-border relative"
            itemprop="headline"
          >
            {{ title }}
            <span
              class="absolute bottom-[-2px] left-0 w-24 h-[3px] bg-blog-link"
            ></span>
          </h1>
          <div class="text-blog-meta font-crimson text-lg italic">
            <time :datetime="date">{{ formatDate(date) }}</time>
            <span v-if="wordCount" class="ml-6"> {{ wordCount }} words </span>
          </div>
        </header>

        <!-- Main Content -->
        <main class="prose prose-crimson max-w-none" itemprop="articleBody">
          <slot />
        </main>
      </div>

      <!-- Sidenotes -->
      <aside v-if="hasSidenotes" class="hidden lg:block">
        <div class="sticky top-2 mt-[9.5rem]">
          <!-- Sidenotes will flow here -->
        </div>
      </aside>
      <div v-else class="lg:block" />
    </div>
  </article>
</template>

<script setup lang="ts">
import TableOfContents from "./TableOfContents.vue";
import { onMounted, ref } from "vue";

interface Props {
  title: string;
  date: string;
  wordCount?: number;
  hasSidenotes?: boolean;
  hasToc?: boolean;
  showNumbers?: boolean;
  toc?: Array<{ id: string; text: string; depth: number }>;
}

const props = withDefaults(defineProps<Props>(), {
  hasSidenotes: false,
  hasToc: true,
  showNumbers: false,
});

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Add a counter for sections
let sectionCount = 0;
let subsectionCount = 0;

// Function to format section numbers
function formatSectionNumber(section: number, subsection?: number) {
  if (subsection !== undefined) {
    return `${section}.${subsection}`;
  }
  return section.toString();
}

const header = ref<HTMLElement | null>(null);
const isHeaderInView = ref(true);

// Watch for heading elements and add numbers
onMounted(() => {
  if (!props.showNumbers) return;

  const mainContent = document.querySelector(".prose");
  if (!mainContent) return;

  const headings = mainContent.querySelectorAll("h2, h3");
  for (const heading of headings) {
    if (heading.tagName === "H2") {
      sectionCount++;
      subsectionCount = 0;
      const small = document.createElement("small");
      small.textContent = formatSectionNumber(sectionCount);
      heading.appendChild(small);
    } else if (heading.tagName === "H3") {
      subsectionCount++;
      const small = document.createElement("small");
      small.textContent = formatSectionNumber(sectionCount, subsectionCount);
      heading.appendChild(small);
    }
  }

  // Header visibility observer
  if (header.value) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isHeaderInView.value = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(header.value);
  }
});
</script>

<style scoped>
:deep(.prose) {
  counter-reset: section subsection;
}

:deep(.sidenote.lg\:sidenote-margin) {
  width: 280px;
  margin-right: 0;
}

/* Mobile styles */
@media (max-width: 1344px) {
  :deep(.sidenote.lg\:sidenote-margin) {
    margin-right: -18rem;
    width: 16rem;
  }
}
</style>
