<script lang="ts" setup>
const { data: posts } = await useAsyncData(() => {
  return queryCollection("blog")
    .select("title", "description", "path", "id", "date")
    .order("date", "DESC")
    .all();
});
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="font-serif text-4xl mb-12">Essays</h1>

    <!-- Debug info -->
    <pre class="mb-4 text-xs">{{ posts }}</pre>

    <div v-if="!posts?.length" class="text-gray-600">No posts found</div>

    <div v-else class="space-y-12">
      <article
        v-for="post in posts"
        :key="post.path"
        class="border-b border-gray-200 pb-12 last:border-0"
      >
        <h2 class="font-serif text-2xl mb-4">
          <NuxtLink :to="post.path">
            {{ post.title }}
          </NuxtLink>
        </h2>

        <div class="text-gray-600 font-serif text-sm mb-4">
          <time :datetime="post.date">
            {{ new Date(post.date).toLocaleDateString() }}
          </time>
        </div>

        <p v-if="post.description" class="text-gray-700 font-serif">
          {{ post.description }}
        </p>
      </article>
    </div>
  </div>
</template>
