<template>
  <article class="mx-auto px-4 md:px-8">
    <div
      class="xl:grid gap-1 md:gap-4 2xl:gap-5"
      :class="{
        'xl:grid-cols-[220px_minmax(0,720px)_220px]': showToc && showSidenotes,
        'xl:grid-cols-[220px_minmax(0,720px)_100px]': showToc && !showSidenotes,
        'xl:grid-cols-[100px_minmax(0,720px)_220px]': !showToc && showSidenotes,
        'xl:grid-cols-[minmax(0,720px)]': !showToc && !showSidenotes,
      }"
    >
      <!-- Navigation -->
      <nav
        v-if="showToc && toc?.length"
        class="hidden xl:block"
        aria-label="Table of Contents"
      >
        <div class="sticky top-4 mt-[9rem]">
          <TableOfContents
            :toc="toc"
            :title="title"
            :active-id="activeSection"
          />
        </div>
      </nav>
      <div v-else class="hidden xl:block"></div>

      <!-- Main Content -->
      <div>
        <!-- Article Header -->
        <header ref="header" class="mb-8 xl:px-6">
          <div class="space-y-4">
            <h1
              class="font-sans text-4xl md:text-5xl font-[550] tracking-tight text-gray-900"
              itemprop="headline"
            >
              {{ title }}
            </h1>

            <div class="flex flex-col gap-4 pl-2">
              <!-- Meta info -->
              <div
                class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono"
              >
                <!-- Publication date -->
                <time
                  :datetime="publishDate"
                  itemprop="datePublished"
                  class="text-gray-500"
                >
                  {{ formatDate(date) }}
                </time>

                <!-- Modified date - only show if meaningfully different -->
                <time
                  v-if="showModifiedDate && modifiedDate"
                  :datetime="modifiedDate"
                  itemprop="dateModified"
                  class="flex items-center text-gray-400 before:content-['•'] before:mr-6 before:text-gray-300"
                >
                  Updated {{ formatDate(modifiedDate) }}
                </time>

                <!-- Word count -->
                <span
                  v-if="wordCount"
                  class="flex items-center text-gray-400 before:content-['•'] before:mr-6 before:text-gray-300"
                  itemprop="wordCount"
                >
                  {{ wordCount }} words
                </span>
              </div>

              <!-- Tags -->
              <div
                v-if="tags?.length"
                class="-ml-1 mt-1 flex flex-wrap gap-2"
                itemprop="keywords"
              >
                <NuxtLink
                  v-for="tag in tags"
                  :key="tag"
                  :to="getTagUrl(tag)"
                  class="px-3 py-1 text-xs font-mono text-gray-500 bg-gray-50 rounded-full border border-gray-100 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200"
                >
                  {{ tag }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </header>

        <!-- Article Content -->
        <div
          :class="[
            'xl:px-8',
            {
              'xl:border-l': showToc,
              'xl:border-r': showSidenotes,
              'xl:border-gray-200': showToc || showSidenotes,
            },
          ]"
          itemprop="articleBody"
        >
          <main
            class="prose prose-a:no-underline prose-h2:-mx-[2rem] prose-h2:px-[2rem] hyphens-auto prose-hr:my-10 prose-hr:md:-mx-[2rem] prose-hr:md:w-[calc(100%+4rem)]"
          >
            <slot />
          </main>
        </div>
      </div>

      <!-- Complementary Content -->
      <aside
        v-if="showSidenotes"
        class="hidden xl:block"
        aria-label="Article Notes"
      >
        <div class="sticky top-2 mt-[9.5rem]">
          <!-- Sidenotes will flow here -->
        </div>
      </aside>
    </div>
  </article>
</template>

<script setup lang="ts">
import TableOfContents from "./TableOfContents.vue";
import { onMounted, ref, onUnmounted, provide, computed } from "vue";
import "./post.css";

interface Props {
  title: string;
  date: string;
  modifiedDate?: string;
  wordCount?: number;
  showSidenotes?: boolean;
  showToc?: boolean;
  showHeaderNumbers?: boolean;
  toc?: Array<{ id: string; text: string; depth: number }>;
  tags?: string[];
  description?: string;
  image?: string;
}

const props = withDefaults(defineProps<Props>(), {
  showSidenotes: false,
  showToc: true,
  showHeaderNumbers: false,
});

// Format dates for display and SEO
const publishDate = computed(() => new Date(props.date).toISOString());
const modifiedDate = computed(() =>
  props.modifiedDate ? new Date(props.modifiedDate).toISOString() : undefined
);

// Only show modified date if it's different and later than publish date
const showModifiedDate = computed(() => {
  if (!props.modifiedDate) return false;
  const modified = new Date(props.modifiedDate);
  const published = new Date(props.date);
  return modified > published;
});

// Format dates for display
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
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
const activeSection = ref<string>();

// Create refs for our observers so we can clean them up
const headerObserver = ref<IntersectionObserver>();
const sectionObserver = ref<IntersectionObserver>();

// Setup section observer
function setupIntersectionObserver() {
  sectionObserver.value = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      }
    },
    {
      // Larger top margin to trigger earlier when scrolling down
      rootMargin: "-100px 0px -80% 0px",
      threshold: [0, 1],
    }
  );

  // Only observe h2 and h3 elements that have IDs
  const headings = document.querySelectorAll("h2[id], h3[id]");
  for (const heading of headings) {
    sectionObserver.value?.observe(heading);
  }
}

onMounted(() => {
  // Setup section observer for TOC
  setupIntersectionObserver();

  // Setup header observer
  if (header.value) {
    headerObserver.value = new IntersectionObserver(
      ([entry]) => {
        isHeaderInView.value = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    headerObserver.value.observe(header.value);
  }

  // Handle section numbering if enabled
  if (props.showHeaderNumbers) {
    const mainContent = document.querySelector(".prose");
    if (!mainContent) return;

    const headings = mainContent.querySelectorAll("h2, h3");
    for (const heading of headings) {
      if (heading.tagName === "H2") {
        sectionCount++;
        subsectionCount = 0;
        const small = document.createElement("small");
        small.classList.add("header-number");
        small.textContent = ` ${formatSectionNumber(sectionCount)}`;
        heading.appendChild(small);
      }
    }
  }
});

// Cleanup observers
onUnmounted(() => {
  headerObserver.value?.disconnect();
  sectionObserver.value?.disconnect();
});

// Provide showSidenotes to child components
provide("showSidenotes", props.showSidenotes);

function getTagUrl(tag: string) {
  return `/writing?view=tags&tag=${encodeURIComponent(tag)}`;
}
</script>
