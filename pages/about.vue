<script setup lang="ts">
import { useSiteMetadata } from "~/composables/useSiteMetadata";
import { definePerson } from "nuxt-schema-org/schema";
import { useSchemaOrg } from "#imports";

useSiteMetadata({
  title: "About",
  description:
    "Software engineer and founder building products at the intersection of technology and user experience.",
  type: "website",
});

useSchemaOrg([
  definePerson({
    name: "Rob Moore",
    jobTitle: "Software Engineer & Founder",
    worksFor: {
      "@type": "Organization",
      name: "Churnkey",
      url: "https://churnkey.co",
    },
    url: "https://robmoore.tech",
    sameAs: [
      "https://github.com/robert-moore",
      "https://twitter.com/robmoo_re",
      "https://linkedin.com/in/rob-moore",
    ],
  }),
]);

definePageMeta({
  layout: "default",
  middleware: ["private-pages"],
});
</script>

<template>
  <div class="max-w-3xl mx-auto px-6">
    <div class="pt-12 pb-8">
      <h1 class="font-sans text-2xl font-medium text-gray-900 mb-6">About</h1>
    </div>

    <div class="space-y-12">
      <!-- Bio Section -->
      <section class="space-y-6">
        <p class="text-gray-600 leading-relaxed">
          I'm a software engineer and entrepreneur focused on building products
          that enhance how people interact with technology. Currently, I'm
          working on making customer retention more human at
          <a
            href="https://churnkey.co"
            class="text-primary-500 hover:text-primary-600 transition-colors"
            >Churnkey</a
          >.
        </p>
        <p class="text-gray-600 leading-relaxed">
          My work spans from founding
          <a
            href="https://wavve.co"
            class="text-primary-500 hover:text-primary-600 transition-colors"
            >Wavve</a
          >
          (helping podcasters share their content visually) to exploring data
          visualization in sports through
          <a
            href="https://perthirtysix.com"
            class="text-primary-500 hover:text-primary-600 transition-colors"
            >PerThirtySix</a
          >.
        </p>
      </section>

      <!-- Experience Section -->
      <section>
        <div class="flex items-baseline gap-3 mb-6">
          <h2 class="font-mono text-xs uppercase tracking-wider text-gray-400">
            Experience
          </h2>
          <div class="h-px flex-1 bg-gray-100"></div>
        </div>

        <ul class="space-y-8">
          <li class="group">
            <div class="flex items-baseline justify-between gap-4">
              <div>
                <h3 class="font-medium text-gray-900">Churnkey</h3>
                <p class="text-gray-600">Co-founder & CTO</p>
              </div>
              <time class="text-sm font-mono text-gray-400 whitespace-nowrap">
                2021—Present
              </time>
            </div>
          </li>

          <li class="group">
            <div class="flex items-baseline justify-between gap-4">
              <div>
                <h3 class="font-medium text-gray-900">Wavve</h3>
                <p class="text-gray-600">Co-founder & Engineer</p>
              </div>
              <time class="text-sm font-mono text-gray-400 whitespace-nowrap">
                2016—2021
              </time>
            </div>
          </li>
        </ul>
      </section>

      <!-- Tech Stack Section -->
      <section>
        <div class="flex items-baseline gap-3 mb-6">
          <h2 class="font-mono text-xs uppercase tracking-wider text-gray-400">
            Tech Stack
          </h2>
          <div class="h-px flex-1 bg-gray-100"></div>
        </div>

        <ul class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li
            v-for="tech in [
              'TypeScript',
              'Vue',
              'Node.js',
              'PostgreSQL',
              'AWS',
              'Tailwind',
            ]"
            :key="tech"
            class="text-gray-600 font-mono text-sm"
          >
            {{ tech }}
          </li>
        </ul>
      </section>

      <!-- Contact Section -->
      <section>
        <div class="flex items-baseline gap-3 mb-6">
          <h2 class="font-mono text-xs uppercase tracking-wider text-gray-400">
            Connect
          </h2>
          <div class="h-px flex-1 bg-gray-100"></div>
        </div>

        <ul class="space-y-3">
          <li>
            <a
              href="https://twitter.com/robmoo_re"
              target="_blank"
              rel="me"
              class="group flex items-baseline gap-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <span class="font-medium">Twitter</span>
              <span
                class="font-mono text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                >@robmoo_re</span
              >
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="me"
              class="group flex items-baseline gap-2 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <span class="font-medium">GitHub</span>
              <span
                class="font-mono text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                >@username</span
              >
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
