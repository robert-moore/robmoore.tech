<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
}

const projects: Project[] = [
  {
    title: "Shark Tank Data Vis Challenge",
    description:
      "A visual data analysis of all tech pitches on Shark Tank. All visualizations done with D3 and Vega. My report won the challenge presented by Triplebyte and its $500 reward.",
    image: "/images/projects/shark-tank.png",
    link: "https://observablehq.com/@robert-moore/shark-tank",
    linkText: "View Interactive Notebook",
  },
  {
    title: "#TwitterWrapped",
    description:
      "Create a beautiful word cloud visualization of your Tweets throughout the year with #TwitterWrapped. Your unique word cloud highlights the language that you use with an unusually high frequency.",
    image: "/images/projects/twitter-wrapped.png",
    link: "https://floom.app/service/twitter-wrapped",
    linkText: "Make Your Own",
  },
  {
    title: "START Nuclear Incident Report",
    description:
      "An overview of malicious and non-malicious breaches on nuclear facilities worldwide. Created for National Consortium for the Study of Terrorism and Responses to Terrorism.",
    image: "/images/projects/nuclear-report.png",
    link: "https://startv1.start.umd.edu/nf/",
    linkText: "See It Live",
  },
  {
    title: "The (United) State of Unemployment",
    description:
      '"A rising tide lifts all boats." A look at the nationwide rise and fall of unemployment.',
    image: "/images/projects/unemployment.png",
    link: "https://goo.gl/aiSE7S",
    linkText: "See It Live",
  },
  {
    title: "Worldwide Decline of Child Mortality Rates",
    description:
      "A 60-second overview of how far the world has come to decrease child mortality rates in the past 200 years.",
    image: "/images/projects/child-mortality.png",
    link: "https://twitter.com/robmoo_re/status/858456852413198336",
    linkText: "See The Video",
  },
  {
    title: "LiveStories Chart Redesign",
    description:
      "A rebrand and redesign of the existing LiveStories charting components.",
    image: "/images/projects/livestories.png",
    link: "https://goo.gl/n2paEg",
    linkText: "View the Redesign",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description:
      "A dashboard designed to showcase sentiment analysis on the latest tech news.",
    image: "/images/projects/sentiment.png",
    link: "https://goo.gl/GrNRNk",
    linkText: "See the Design",
  },
  {
    title: "My Year in Facebook Messages",
    description:
      "An afternoon project to visualize the Facebook messages I sent over the entire year.",
    image: "/images/projects/facebook.png",
    link: "https://goo.gl/HGXyY5",
    linkText: "Check it Out",
  },
];

// SEO metadata
useSeoMeta({
  title: "Data Visualization - Rob Moore",
  description:
    "A collection of data visualization projects exploring complex datasets through interactive and static visualizations.",
});
</script>

<template>
  <div class="max-w-3xl mx-auto px-6">
    <div class="pt-12 pb-8">
      <h1 class="font-sans text-2xl font-medium text-gray-900 mb-6">
        Data Visualization
      </h1>
      <p class="text-lg text-gray-600 leading-relaxed mb-12">
        Exploring complex datasets through interactive and static
        visualizations.
      </p>
    </div>

    <div class="space-y-24">
      <article
        v-for="project in projects"
        :key="project.title"
        class="group relative"
      >
        <div
          class="aspect-w-16 aspect-h-9 mb-8 bg-gray-50 rounded-lg overflow-hidden border border-gray-100"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div class="space-y-3">
          <h2
            class="font-sans text-xl font-medium text-gray-800 group-hover:text-gray-600 transition-colors"
          >
            {{ project.title }}
          </h2>
          <p class="text-gray-600 leading-relaxed text-[15px]">
            {{ project.description }}
          </p>
          <div class="pt-3">
            <a
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="group inline-flex items-center gap-1.5 text-gray-600 hover:text-primary-500 transition-colors"
            >
              <span class="text-sm font-medium">{{ project.linkText }}</span>
              <ArrowTopRightOnSquareIcon
                class="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
              />
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}

.aspect-w-16 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

/* Enhance image loading experience */
img {
  opacity: 0;
  transition: opacity 0.5s ease;
}

img.loaded {
  opacity: 1;
}
</style>
