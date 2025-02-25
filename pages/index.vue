<script setup lang="ts">
import { computed } from "vue";
import { usePosts } from "~/composables/usePosts";
import PostList from "~/components/Writing/PostList.vue";
import StartupCard from "~/components/Home/StartupCard.vue";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { useSiteMetadata } from "~/composables/useSiteMetadata";
import { defineWebSite, defineWebPage } from "nuxt-schema-org/schema";
import { useSchemaOrg } from "#imports";

// Blog posts
const { fetchPosts, groupByTags } = usePosts();
const { data: posts } = await fetchPosts();
const recentPosts = computed(() => (posts.value ?? []).slice(0, 5));

// SEO metadata
useSiteMetadata({
  title: "Rob Moore - Software Engineer & Founder",
  description:
    "Building products, writing about philosophy and technology, and visualizing sports data.",
}); // Uses defaults for homepage

useSchemaOrg([
  defineWebPage({
    name: "Rob Moore - Software Engineer & Founder",
    description:
      "Building products, writing about philosophy and technology, and visualizing sports data.",
  }),
]);

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="min-h-screen max-w-3xl mx-auto px-6">
    <!-- Hero Section -->
    <header class="pt-20 pb-20">
      <h1
        class="hiddend font-serif text-3xl md:text-4xl font-medium leading-tight tracking-tight mb-8"
      >
        I'm
        <a
          class="text-primary-500 hover:text-primary-600 transition-colors"
          href="https://twitter.com/robmoo_re"
          target="_blank"
          rel="me"
          >@robmoore</a
        >, a founder and software engineer focused on building great products.
      </h1>

      <p class="text-lg text-gray-600 leading-relaxed mb-8">
        I co-founded
        <a
          class="text-primary-500 hover:text-primary-600"
          href="https://churnkey.co"
          >Churnkey</a
        >
        and
        <a
          class="text-primary-500 hover:text-primary-600"
          href="https://wavve.co"
          >Wavve</a
        >, write about
        <a class="text-primary-500 hover:text-primary-600" href="/writing"
          >philosophy and technology</a
        >, and build
        <a
          class="text-primary-500 hover:text-primary-600"
          href="https://perthirtysix.com"
          >data visualizations for sports</a
        >.
      </p>

      <!-- Social Links -->
      <div class="flex items-center gap-6 text-gray-600">
        <a
          href="https://twitter.com/robmoo_re"
          target="_blank"
          rel="me"
          class="group flex items-center gap-1.5 hover:text-primary-500 transition-colors"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
          <span class="text-sm font-medium">Twitter</span>
          <ArrowTopRightOnSquareIcon
            class="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
          />
        </a>

        <a
          href="https://linkedin.com/in/rob-moore"
          target="_blank"
          rel="me"
          class="group flex items-center gap-1.5 hover:text-primary-500 transition-colors"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
            />
          </svg>
          <span class="text-sm font-medium">LinkedIn</span>
          <ArrowTopRightOnSquareIcon
            class="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
          />
        </a>

        <a
          href="https://instagram.com/robmoo.re"
          target="_blank"
          rel="me"
          class="group flex items-center gap-1.5 hover:text-primary-500 transition-colors"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
            />
          </svg>
          <span class="text-sm font-medium">Instagram</span>
          <ArrowTopRightOnSquareIcon
            class="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
          />
        </a>
      </div>
    </header>

    <!-- Companies Section -->
    <section class="py-8">
      <h2 class="text-2xl font-serif mb-10 border-b border-slate-100 py-2">
        Companies & Projects
      </h2>
      <div class="space-y-8">
        <StartupCard
          title="Churnkey"
          description="Helping SaaS companies reduce churn through smart cancellation flows and retention campaigns."
          url="https://churnkey.co"
        />
        <StartupCard
          title="Wavve"
          description="Enabling podcasters and creators to transform audio content into engaging social videos."
          url="https://wavve.co"
        />
        <StartupCard
          title="PerThirtySix"
          description="Exploring sports data visualization and statistics, making complex data accessible."
          url="https://perthirtysix.com"
        />
      </div>
    </section>

    <!-- Writing Section -->
    <section class="py-8">
      <h2 class="text-2xl font-serif mb-10 border-b border-slate-100 py-2">
        Writing
      </h2>
      <PostList :posts="recentPosts" :show-descriptions="true" />
      <p class="mt-6">
        <a href="/writing"> View all posts → </a>
      </p>
    </section>
  </div>
</template>

<style scoped>
.grid {
  --min-column-width: 280px;
}
</style>
