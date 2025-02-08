<script lang="ts" setup>
const route = useRoute();
const config = useRuntimeConfig();

const { data: post } = await useAsyncData(`post-${route.path}`, () => {
  return queryCollection("blog").path(route.path).first();
});

interface Post {
  title: string;
  date: string;
  description?: string;
  hasSidenotes?: boolean;
  body: any;
}
</script>

<template>
  <div
    v-if="config.public.dev"
    class="bg-gray-100 p-4 mb-8 rounded text-sm font-mono"
  >
    <pre>{{ post }}</pre>
  </div>

  <BlogPost
    v-if="post"
    :title="post.title"
    :date="post.date"
    :hasSidenotes="post.hasSidenotes"
  >
    <ContentRenderer :value="post" />
  </BlogPost>
</template>
