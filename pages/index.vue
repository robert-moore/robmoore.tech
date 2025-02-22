<script setup lang="ts">
import { useBlogPosts } from "~/composables/useBlogPosts";
import { computed } from "vue";
import BlogPostSection from "~/components/BlogPostSection.vue";

// Blog posts
const { fetchPosts, groupByTags } = useBlogPosts();
const { data: posts } = await fetchPosts();

// Filter posts by category
const postsByTag = computed(() => groupByTags(posts.value ?? []));
const philosophyPosts = computed(() =>
  (postsByTag.value.get("philosophy") ?? []).slice(0, 5)
);
const techPosts = computed(() =>
  (postsByTag.value.get("tech") ?? []).slice(0, 5)
);

console.log(philosophyPosts.value);

// SEO metadata
useSeoMeta({
  title: "Rob Moore - Founder & Engineer",
  description:
    "Building products, writing about philosophy and technology, and visualizing sports data.",
});

// Date formatting
function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="">
    <div class="border-b px-12 py-20 dark:border-slate-700">
      <div class="mx-auto">
        <p
          class="font-semibold italic leading-snug font-serif max-w-[960px] mx-auto text-center text-[2.5rem] tracking-tight"
        >
          I'm
          <a
            class="text-blog-link font-sans font-semibold border-b-4 border-blog-link"
            href="https://twitter.com/yourusername"
            rel="me"
            >@robmoore</a
          >, a founder and software engineer focused on building great products.
        </p>
        <p
          class="prose antialiased mx-auto max-w-[740px] mt-10 font-sans font-medium leading-relaxed text-xl"
        >
          I co-founded <a href="https://churnkey.co">Churnkey</a> and
          <a href="https://wavve.co">Wavve</a>, write about
          <a href="/blog">philosophy and technology</a>, and build
          <a href="https://perthirtysix.com">data visualizations for sports</a>.
        </p>
      </div>
    </div>

    <!-- Startups Section -->
    <div class="border-b px-12 py-8 dark:border-slate-700 md:px-20 lg:px-28">
      <div
        class="hyphens-auto max-w-none dark:prose-invert prose-a:border-b prose-a:border-slate-500 prose-a:font-sans prose-a:leading-tight prose-a:no-underline prose-a:text-[0.92rem] hover:prose-a:border-b-slate-200"
      >
        <div
          class="flex flex-col gap-4 justify-center md:flex-row md:gap-10 lg:gap-16"
        >
          <!-- Churnkey -->
          <div class="flex-1 flex-grow pb-12 md:pb-0 lg:max-w-[21rem]">
            <h2 class="font-serif mt-0 text-xl mb-4">Churnkey</h2>
            <p
              class="font-sans mt-0 text-[1rem] text-gray-700 dark:text-gray-300"
            >
              Churnkey helps SaaS companies reduce churn through smart
              cancellation flows and automated retention campaigns.
            </p>
            <a
              href="https://churnkey.co"
              class="inline-block text-blog-link font-semibold hover:text-blog-link/80 transition-colors"
            >
              Visit Churnkey →
            </a>
          </div>

          <!-- Wavve -->
          <div class="flex-1 flex-grow pb-12 md:pb-0 lg:max-w-[21rem]">
            <h2 class="font-serif mt-0 text-xl mb-4">Wavve</h2>
            <p
              class="font-sans mt-0 text-[1rem] text-gray-700 dark:text-gray-300"
            >
              Wavve helps podcasters and content creators turn their audio
              content into engaging social videos.
            </p>
            <a
              href="https://wavve.co"
              class="inline-block text-blog-link font-semibold hover:text-blog-link/80 transition-colors"
            >
              Visit Wavve →
            </a>
          </div>

          <!-- PerThirtySix -->
          <div class="flex-1 flex-grow lg:max-w-[21rem]">
            <h2 class="font-serif mt-0 text-xl mb-4">PerThirtySix</h2>
            <p
              class="font-sans mt-0 text-[1rem] text-gray-700 dark:text-gray-300"
            >
              A side project exploring sports data visualization and statistics,
              focusing on making complex data accessible and engaging.
            </p>
            <a
              href="https://perthirtysix.com"
              class="inline-block text-blog-link font-semibold hover:text-blog-link/80 transition-colors"
            >
              Visit PerThirtySix →
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Writing Section -->
    <div class="border-b px-12 py-16 dark:border-slate-700 md:px-20 lg:px-28">
      <div class="hyphens-auto max-w-none">
        <h2 class="font-serif text-2xl mb-8 text-center">Recent Writing</h2>
        <div
          class="flex flex-col gap-4 justify-center md:flex-row md:gap-10 lg:gap-16"
        >
          <BlogPostSection
            title="Philosophy"
            :posts="philosophyPosts"
            :show-descriptions="true"
          />
          <BlogPostSection title="Technology" :posts="techPosts" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Add any component-specific styles here */
</style>
