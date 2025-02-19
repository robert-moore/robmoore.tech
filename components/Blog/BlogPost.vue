<template>
  <article class="mx-auto px-4 md:px-8">
    <div
      class="xl:grid xl:gap-12"
      :class="{
        'xl:grid-cols-[240px_minmax(0,880px)_220px]': hasToc && hasSidenotes,
        'xl:grid-cols-[240px_minmax(0,880px)]': hasToc && !hasSidenotes,
        'xl:grid-cols-[100px_minmax(0,880px)_220px]': !hasToc && hasSidenotes,
        'xl:grid-cols-[minmax(0,880px)]': !hasToc && !hasSidenotes,
      }"
    >
      <!-- ToC -->
      <aside v-if="hasToc && toc?.length" class="hidden xl:block">
        <div class="sticky top-2 mt-[9.5rem]">
          <TableOfContents
            :toc="toc"
            :title="title"
            :active-id="activeSection"
          />
        </div>
      </aside>
      <div v-else class="hidden xl:block"></div>

      <!-- Main Content -->
      <div>
        <!-- Article Header -->
        <header ref="header" class="mb-10 px-8">
          <h1
            class="font-serif text-[3.5rem] leading-tight mb-8 pb-4 border-b border-blog-border relative"
            itemprop="headline"
          >
            {{ title }}
            <span
              class="absolute bottom-[-2px] left-0 w-24 h-[3px] bg-blog-link"
            ></span>
          </h1>
          <div class="text-blog-meta font-serif text-lg italic">
            <time :datetime="date">{{ formatDate(date) }}</time>
            <span v-if="wordCount" class="ml-6"> {{ wordCount }} words </span>
          </div>
        </header>

        <!-- Main Content -->
        <main
          class="xl:px-8 xl:border-x prose-h2:-mx-[2rem] prose-h2:px-[2rem] xl:border-gray-200 hyphens-auto prose-orange prose prose-hr:my-10 prose-hr:md:-mx-[2rem] prose-hr:md:w-[calc(100%+4rem)] dark:prose-hr:border-slate-700 prose-p:font-serif prose-pre:leading-[1.15rem] prose-pre:text-[0.9rem]"
          itemprop="articleBody"
        >
          <slot />
        </main>
      </div>

      <!-- Sidenotes -->
      <aside v-if="hasSidenotes" class="hidden xl:block">
        <div class="sticky top-2 mt-[9.5rem]">
          <!-- Sidenotes will flow here -->
        </div>
      </aside>
    </div>
  </article>
</template>

<script setup lang="ts">
import TableOfContents from "./TableOfContents.vue";
import { onMounted, ref, onUnmounted, provide } from "vue";
// Import the article-specific CSS reset
import "../blog-post.css";

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
  if (props.showNumbers) {
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

// Provide hasSidenotes to child components
provide("hasSidenotes", props.hasSidenotes);
</script>
