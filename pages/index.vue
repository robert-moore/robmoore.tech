<script setup lang="ts">
import { computed } from "vue";
import { usePosts } from "~/composables/usePosts";
import PostList from "~/components/Writing/PostList.vue";
import StartupCard from "~/components/Home/StartupCard.vue";

// Blog posts
const { fetchPosts, groupByTags } = usePosts();
const { data: posts } = await fetchPosts();

// Filter posts by category
const postsByTag = computed(() => groupByTags(posts.value ?? []));
const philosophyPosts = computed(() =>
  (postsByTag.value.get("philosophy") ?? []).slice(0, 5)
);
const techPosts = computed(() =>
  (postsByTag.value.get("tech") ?? []).slice(0, 5)
);

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
            class="font-sans font-semibold no-fancy-underline text-primary-500"
            href="https://twitter.com/robmoo_re"
            target="_blank"
            rel="me"
            >@<span class="underline underline-offset-4 mr-1">robmoore</span></a
          >, a founder and software engineer focused on building great products.
        </p>
        <p
          class="antialiased mx-auto max-w-[740px] mt-10 font-sans font-medium leading-relaxed text-xl"
        >
          I co-founded
          <a class="fancy-underline" href="https://churnkey.co">Churnkey</a> and
          <a class="fancy-underline" href="https://wavve.co">Wavve</a>, write
          about
          <a class="fancy-underline" href="/posts">philosophy and technology</a
          >, and build
          <a class="fancy-underline" href="https://perthirtysix.com"
            >data visualizations for sports</a
          >.
        </p>
      </div>
    </div>

    <!-- Startups Section -->
    <div class="border-b px-12 py-8 dark:border-slate-700 md:px-20 lg:px-28">
      <div
        class="flex flex-col gap-4 justify-center md:flex-row md:gap-10 lg:gap-16"
      >
        <StartupCard
          title="Churnkey"
          description="Churnkey helps SaaS companies reduce churn through smart cancellation flows and automated retention campaigns."
          url="https://churnkey.co"
        />

        <StartupCard
          title="Wavve"
          description="Wavve helps podcasters and content creators turn their audio content into engaging social videos."
          url="https://wavve.co"
        />

        <StartupCard
          title="PerThirtySix"
          description="A side project exploring sports data visualization and statistics, focusing on making complex data accessible and engaging."
          url="https://perthirtysix.com"
        />
      </div>
    </div>

    <!-- Writing Section -->
    <div class="border-b px-12 py-16 dark:border-slate-700 md:px-20 lg:px-28">
      <div class="hyphens-auto max-w-none">
        <h2 class="font-serif text-2xl mb-8 text-center">Recent Writing</h2>
        <div
          class="flex flex-col gap-4 justify-center md:flex-row md:gap-10 lg:gap-16"
        >
          <PostList
            title="Philosophy"
            :posts="philosophyPosts"
            :show-descriptions="true"
          />
          <PostList title="Technology" :posts="techPosts" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Add any component-specific styles here */
</style>
