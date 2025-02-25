<script setup lang="ts">
import { computed } from "vue";
import { usePosts } from "~/composables/usePosts";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { useSiteMetadata } from "~/composables/useSiteMetadata";
import { defineWebSite, defineWebPage } from "nuxt-schema-org/schema";
import { useSchemaOrg, useHead } from "#imports";

// Blog posts
const { fetchPosts } = usePosts();
const { data: posts } = await fetchPosts();
const recentPosts = computed(() => (posts.value ?? []).slice(0, 3));

// SEO metadata
useSiteMetadata({
  title: "Rob Moore - Software Engineer & Founder",
  description:
    "Building products, writing about philosophy and technology, and visualizing sports data.",
}); // Uses defaults for homepage

useSchemaOrg([
  defineWebSite({
    name: "Rob Moore",
  }),
  defineWebPage({
    name: "Home",
  }),
]);

useHead({
  title: "Rob Moore",
  meta: [
    {
      name: "description",
      content:
        "Building thoughtful products at the intersection of philosophy, technology, and human behavior.",
    },
  ],
});

definePageMeta({
  layout: "default",
});

defineOgImageComponent("NuxtSeo");
</script>

<template>
  <div class="py-12 md:py-16 px-4 max-w-2xl mx-auto space-y-20">
    <!-- Hero Section -->
    <header class="space-y-6">
      <h1
        class="font-sans text-3xl md:text-4xl font-[700] relative inline-block tracking-tight"
      >
        Rob Moore
        <span
          class="hidden md:inline-block absolute -top-1 -right-8 text-sm font-mono text-gray-500 rotate-12"
        >
          [rɒb mɔː]
        </span>
      </h1>

      <div
        class="space-y-4 font-normal text-base text-gray-800 dark:text-gray-200"
      >
        <p>
          Code × consciousness. At the intersection of how we
          <span class="font-medium italic">think</span> and what we
          <span class="font-medium italic">create</span>.
        </p>

        <p class="text-sm">
          Co-founder/CTO
          <a
            href="https://churnkey.co"
            target="_blank"
            class="no-fancy-underline font-medium border-b border-dashed border-gray-400 hover:text-gray-500 dark:hover:text-gray-400 transition duration-200 group inline-flex items-center"
            >Churnkey</a
          >. Previously
          <a
            href="https://wavve.co"
            target="_blank"
            class="no-fancy-underline font-medium border-b border-dashed border-gray-400 hover:text-gray-500 dark:hover:text-gray-400 transition duration-200 group inline-flex items-center"
            >Wavve</a
          >
          (acquired).
        </p>
      </div>

      <!-- Social Links -->
      <div class="flex flex-wrap gap-5 text-gray-600 dark:text-gray-400">
        <a
          href="https://twitter.com/robjama"
          target="_blank"
          rel="me"
          class="group flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
          <span class="text-xs font-medium">Twitter</span>
          <ArrowTopRightOnSquareIcon
            class="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
          />
        </a>

        <a
          href="https://github.com/robMoore"
          target="_blank"
          rel="me"
          class="group flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
            />
          </svg>
          <span class="text-xs font-medium">GitHub</span>
          <ArrowTopRightOnSquareIcon
            class="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/robertjmoore/"
          target="_blank"
          rel="me"
          class="group flex items-center gap-1.5 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
            />
          </svg>
          <span class="text-xs font-medium">LinkedIn</span>
          <ArrowTopRightOnSquareIcon
            class="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
          />
        </a>
      </div>
    </header>

    <!-- Projects Section -->
    <section class="space-y-6">
      <h2
        class="text-sm font-mono text-gray-600 dark:text-gray-400 flex items-center"
      >
        <span class="mr-2 text-gray-300 dark:text-gray-600 font-normal">{</span>
        VENTURES + PROJECTS
        <span class="ml-2 text-gray-300 dark:text-gray-600 font-normal">}</span>
      </h2>

      <div class="grid gap-6 md:grid-cols-2">
        <!-- Churnkey -->
        <div class="space-y-2 group">
          <div class="font-mono text-xs text-gray-500 dark:text-gray-500">
            RETENTION
          </div>
          <h3 class="font-sans text-base font-medium">
            <a
              href="https://churnkey.co"
              target="_blank"
              class="hover:text-gray-600 dark:hover:text-gray-300 transition duration-200 inline-flex items-center"
            >
              Churnkey
              <ArrowTopRightOnSquareIcon
                class="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
              />
            </a>
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Automate customer retention at scale to help companies build
            healthier subscription businesses.
          </p>
        </div>

        <!-- Wavve -->
        <div class="space-y-2 group">
          <div class="font-mono text-xs text-gray-500 dark:text-gray-500">
            AUDIO
          </div>
          <h3 class="font-sans text-base font-medium">
            <a
              href="https://wavve.co"
              target="_blank"
              class="hover:text-gray-600 dark:hover:text-gray-300 transition duration-200 inline-flex items-center"
            >
              Wavve
              <ArrowTopRightOnSquareIcon
                class="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
              />
            </a>
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Audio visualization for podcasters. Acquired in 2021.
          </p>
        </div>

        <!-- PerThirtySix -->
        <div class="space-y-2 group">
          <div class="font-mono text-xs text-gray-500 dark:text-gray-500">
            DATA
          </div>
          <h3 class="font-sans text-base font-medium">
            <a
              href="https://perthirtysix.com"
              target="_blank"
              class="hover:text-gray-600 dark:hover:text-gray-300 transition duration-200 inline-flex items-center"
            >
              PerThirtySix
              <ArrowTopRightOnSquareIcon
                class="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
              />
            </a>
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Advanced sports analytics and data visualization.
          </p>
        </div>

        <!-- Practical Philosophy -->
        <div class="space-y-2 group">
          <div class="font-mono text-xs text-gray-500 dark:text-gray-500">
            IDEAS
          </div>
          <h3 class="font-sans text-base font-medium">
            <NuxtLink
              to="/writing"
              class="hover:text-gray-600 dark:hover:text-gray-300 transition duration-200"
            >
              Philosophy
              <span
                class="inline-block ml-1 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                aria-hidden="true"
                >→</span
              >
            </NuxtLink>
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Stoic principles applied to modern technology challenges.
          </p>
        </div>
      </div>
    </section>

    <!-- Writing Section -->
    <section class="space-y-6">
      <div class="flex items-center justify-between">
        <h2
          class="text-sm font-mono text-gray-600 dark:text-gray-400 flex items-center"
        >
          <span class="mr-2 text-gray-300 dark:text-gray-600 font-normal"
            >[</span
          >
          WRITING
          <span class="ml-2 text-gray-300 dark:text-gray-600 font-normal"
            >]</span
          >
        </h2>
        <NuxtLink
          to="/writing"
          class="group text-xs font-mono hover:text-gray-700 dark:hover:text-gray-300 transition duration-200"
        >
          View All
          <span
            class="inline-block ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            aria-hidden="true"
            >→</span
          >
        </NuxtLink>
      </div>

      <div class="space-y-4">
        <div v-for="post in recentPosts" :key="post.path" class="group">
          <NuxtLink :to="post.path" class="block space-y-1">
            <div class="text-xs font-mono text-gray-500 dark:text-gray-500">
              {{
                new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })
              }}
            </div>
            <h3
              class="font-sans text-base font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition duration-200"
            >
              {{ post.title }}
              <span
                class="inline-block ml-1 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                aria-hidden="true"
                >→</span
              >
            </h3>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.group {
  transition: all 0.2s ease;
}

/* Optimize animations */
a,
span {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
