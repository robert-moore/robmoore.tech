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
  return new Date(dateString).toISOString().split("T")[0];
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4">
    <div class="mb-12">
      <h1 class="text-2xl font-normal mb-8">all writing</h1>

      <div class="flex gap-4 mb-8">
        <button
          class="text-gray-800 hover:text-gray-600"
          :class="{ 'text-gray-500': showByTags }"
          @click="showByTags = false"
        >
          sort by date posted
        </button>
        <button
          class="text-gray-500 hover:text-gray-600"
          :class="{ 'text-gray-800': showByTags }"
          @click="showByTags = true"
        >
          sort by concept
        </button>
      </div>
    </div>

    <div v-if="!posts?.length" class="text-gray-600">No posts found</div>

    <!-- Date view -->
    <div v-if="!showByTags" class="space-y-8">
      <post v-for="post in posts" :key="post.path" class="group">
        <a :href="post.path" class="block hover:no-underline">
          <div class="text-sm text-gray-500 font-mono mb-1">
            {{ formatDate(post.date) }}
          </div>

          <h2
            class="text-lg font-normal text-gray-900 group-hover:text-blue-700 mb-1"
          >
            {{ post.title }}
          </h2>

          <p v-if="post.description" class="text-gray-600 text-sm">
            {{ post.description }}
          </p>
        </a>
      </post>
    </div>

    <!-- Tags view -->
    <div v-else class="flex gap-12">
      <div class="flex-1 space-y-8">
        <div
          v-for="[tag, tagPosts] in [...postsByTag].slice(
            0,
            Math.ceil(postsByTag.size / 2)
          )"
          :key="tag"
        >
          <h3 class="font-medium mb-2">{{ tag }}</h3>
          <ul class="space-y-2">
            <li v-for="post in tagPosts" :key="post.path">
              <a :href="post.path" class="text-gray-800 hover:text-blue-700">
                {{ post.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-1 space-y-8">
        <div
          v-for="[tag, tagPosts] in [...postsByTag].slice(
            Math.ceil(postsByTag.size / 2)
          )"
          :key="tag"
        >
          <h3 class="font-medium mb-2">{{ tag }}</h3>
          <ul class="space-y-2">
            <li v-for="post in tagPosts" :key="post.path">
              <a :href="post.path" class="text-gray-800 hover:text-blue-700">
                {{ post.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Hover animations */
.group {
  transition: all 0.2s ease;
}
</style>
