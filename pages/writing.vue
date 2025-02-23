<script lang="ts" setup>
import { ref, computed, onMounted, watch, nextTick } from "vue";
import { useRoute, useRouter } from "#app";

const { data: posts } = await useAsyncData(() => {
  return queryCollection("post")
    .select("title", "path", "id", "date", "description", "tags")
    .order("date", "DESC")
    .all();
});

interface Post {
  title: string;
  path: string;
  id: string;
  date: string;
  description?: string;
  tags?: string[];
}

const route = useRoute();
const router = useRouter();

const showByTags = computed(() => route.query.view === "tags");
const selectedTag = computed(() => route.query.tag as string | undefined);

// Group posts by tags
const postsByTag = computed(() => {
  const grouped = new Map<string, Post[]>();
  for (const post of posts.value ?? []) {
    for (const tag of post.tags ?? []) {
      if (!grouped.has(tag)) {
        grouped.set(tag, []);
      }
      grouped.get(tag)?.push(post);
    }
  }
  return grouped;
});

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

// Handle tag view toggling
function toggleView(showTags: boolean) {
  const query = showTags ? { view: "tags" } : undefined;
  router.replace({ query });
}

// Enhance scroll handling with highlight animation
function scrollToTag(tag: string | undefined) {
  if (!tag) return;

  // Wait for DOM update and tag view to be active
  nextTick(async () => {
    // Give time for view switch if needed
    await new Promise((resolve) => setTimeout(resolve, 100));

    const tagElement = document.querySelector(`[data-tag="${tag}"]`);
    if (tagElement) {
      tagElement.scrollIntoView({ behavior: "smooth", block: "start" });

      // Add highlight animation class
      tagElement.classList.add("highlight-tag");
      // Remove class after animation
      setTimeout(() => {
        tagElement.classList.remove("highlight-tag");
      }, 2000);
    }
  });
}

// Update the watch to handle view switching properly
watch(selectedTag, (newTag) => {
  if (newTag) {
    // First switch to tags view if needed
    if (!showByTags.value) {
      toggleView(true);
    }
    // Then scroll after a brief delay
    setTimeout(() => {
      scrollToTag(newTag);
    }, 100);
  }
});

// Initial load handling
onMounted(() => {
  if (selectedTag.value) {
    scrollToTag(selectedTag.value);
  }
});
</script>

<template>
  <div class="max-w-3xl mx-auto px-6">
    <div class="pt-12 pb-8">
      <h1 class="font-sans text-2xl font-medium text-gray-900 mb-6">Writing</h1>

      <div class="flex gap-4 mb-8">
        <button
          class="text-sm font-medium transition-colors"
          :class="
            !showByTags ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
          "
          @click="toggleView(false)"
        >
          By Date
        </button>
        <button
          class="text-sm font-medium transition-colors"
          :class="
            showByTags ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
          "
          @click="toggleView(true)"
        >
          By Topic
        </button>
      </div>
    </div>

    <div v-if="!posts?.length" class="text-gray-500">No posts found</div>

    <!-- Date view -->
    <div v-if="!showByTags" class="space-y-8">
      <article v-for="post in posts" :key="post.path" class="group">
        <a :href="post.path" class="block space-y-2">
          <div class="flex items-baseline justify-between gap-4">
            <h2
              class="font-sans text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors"
            >
              {{ post.title }}
              <span
                class="inline-block ml-1 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                aria-hidden="true"
                >→</span
              >
            </h2>
            <time class="text-sm font-mono text-gray-400 whitespace-nowrap">
              {{ formatDate(post.date) }}
            </time>
          </div>

          <p
            v-if="post.description"
            class="text-gray-600 text-sm leading-relaxed"
          >
            {{ post.description }}
          </p>
        </a>
      </article>
    </div>

    <!-- Tags view -->
    <div v-else class="space-y-12">
      <div
        v-for="[tag, tagPosts] in [...postsByTag]"
        :key="tag"
        :data-tag="tag"
        class="rounded-lg"
      >
        <div class="flex items-baseline gap-3 mb-4">
          <h3 class="font-mono text-xs uppercase tracking-wider text-gray-400">
            {{ tag }}
          </h3>
          <div class="h-px flex-1 bg-gray-100"></div>
        </div>

        <ul class="space-y-3">
          <li v-for="post in tagPosts" :key="post.path" class="group">
            <a
              :href="post.path"
              class="flex items-baseline justify-between gap-4"
            >
              <span
                class="font-sans text-base font-medium text-gray-800 group-hover:text-gray-600 transition-colors"
              >
                {{ post.title }}
                <span
                  class="inline-block ml-1 text-gray-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  aria-hidden="true"
                  >→</span
                >
              </span>
              <time class="text-sm font-mono text-gray-400 whitespace-nowrap">
                {{ formatDate(post.date) }}
              </time>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group {
  transition: all 0.2s ease;
}

/* Add highlight animation */
@keyframes highlightTag {
  0% {
    box-shadow: inset 0 0 0 2px transparent;
  }
  15% {
    box-shadow: inset 0 0 0 2px rgba(17, 24, 39, 0.08);
  }
  60% {
    box-shadow: inset 0 0 0 2px rgba(17, 24, 39, 0.04);
  }
  100% {
    box-shadow: inset 0 0 0 2px transparent;
  }
}

.highlight-tag {
  animation: highlightTag 1.5s cubic-bezier(0.16, 1, 0.3, 1);
  border-radius: 0.75rem;
  transform-origin: center;
}

/* Add padding to tag sections for better highlight appearance */
[data-tag] {
  padding: 1.25rem;
  margin: -1.25rem;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  isolation: isolate;
}
</style>
