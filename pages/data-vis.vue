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
    image: "/images/datavis/shark-tank-challenge.png",
    link: "https://observablehq.com/@robert-moore/shark-tank",
    linkText: "View Interactive Notebook",
  },
  {
    title: "#TwitterWrapped",
    description:
      "Create a beautiful word cloud visualization of your Tweets throughout the year with #TwitterWrapped. Your unique word cloud highlights the language that you use with an unusually high frequency.",
    image: "/images/datavis/twitter-wrapped.png",
    link: "https://floom.app/service/twitter-wrapped",
    linkText: "Make Your Own",
  },
  {
    title: "START Nuclear Incident Report",
    description:
      "An overview of malicious and non-malicious breaches on nuclear facilities worldwide. Created for National Consortium for the Study of Terrorism and Responses to Terrorism.",
    image: "/images/datavis/nuclear-incident-report.png",
    link: "https://startv1.start.umd.edu/nf/",
    linkText: "See It Live",
  },
  {
    title: "The (United) State of Unemployment",
    description:
      '"A rising tide lifts all boats." A look at the nationwide rise and fall of unemployment.',
    image: "/images/datavis/united-state-of-unemployment.png",
    link: "https://goo.gl/aiSE7S",
    linkText: "See It Live",
  },
  {
    title: "Worldwide Decline of Child Mortality Rates",
    description:
      "A 60-second overview of how far the world has come to decrease child mortality rates in the past 200 years.",
    image: "/images/datavis/child-mortality-rates.png",
    link: "https://twitter.com/robmoo_re/status/858456852413198336",
    linkText: "See The Video",
  },
  {
    title: "LiveStories Chart Redesign",
    description:
      "A rebrand and redesign of the existing LiveStories charting components.",
    image: "/images/datavis/livestories-redesign.png",
    link: "https://goo.gl/n2paEg",
    linkText: "View the Redesign",
  },
  {
    title: "Sentiment Analysis Dashboard",
    description:
      "A dashboard designed to showcase sentiment analysis on the latest tech news.",
    image: "/images/datavis/sentiment-dashboard.png",
    link: "https://goo.gl/GrNRNk",
    linkText: "See the Design",
  },
  {
    title: "My Year in Facebook Messages",
    description:
      "An afternoon project to visualize the Facebook messages I sent over the entire year.",
    image: "/images/datavis/facebook-messages.png",
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

const imageLoaded = (event: Event) => {
  const img = event.target as HTMLImageElement;
  if (img) {
    img.classList.add("loaded");
  }
};
</script>

<template>
  <div class="max-w-3xl mx-auto px-6">
    <div class="pt-12 pb-8">
      <h1 class="font-sans text-2xl font-medium text-gray-900 mb-2">
        Data Visualization
      </h1>
      <p class="text-lg text-gray-600 leading-relaxed mb-12">
        Exploring complex datasets through interactive and static
        visualizations.
      </p>
    </div>

    <div class="space-y-16">
      <article v-for="project in projects" :key="project.title" class="group">
        <div class="flex items-start gap-8">
          <div class="w-1/2">
            <div class="bg-gray-50 rounded-lg overflow-hidden">
              <NuxtImg
                :src="project.image"
                :alt="project.title"
                class="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          <div class="w-1/2 space-y-3">
            <h2
              class="font-sans text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors"
            >
              {{ project.title }}
            </h2>
            <p class="text-gray-600 text-sm leading-relaxed">
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
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.group {
  transition: all 0.2s ease;
}
</style>
