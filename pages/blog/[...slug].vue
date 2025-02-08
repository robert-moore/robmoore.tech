<script lang="ts" setup>
const route = useRoute();
const { data: post } = await useAsyncData(() => {
  return queryCollection("blog").path(route.path).first();
});

interface Post {
  title: string;
  date: string;
  description?: string;
  body: any; // This is the parsed MDC content type from Nuxt Content
}
</script>

<template>
  <BlogPost :title="post.title" :date="post.date">
    <ContentRenderer :value="post" />
  </BlogPost>
</template>
