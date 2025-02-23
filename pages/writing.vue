<script lang="ts" setup>
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

const showByTags = ref(false);

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
          @click="showByTags = false"
        >
          By Date
        </button>
        <button
          class="text-sm font-medium transition-colors"
          :class="
            showByTags ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
          "
          @click="showByTags = true"
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
      <div v-for="[tag, tagPosts] in [...postsByTag]" :key="tag">
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
</style>
