<script lang="ts" setup>
const route = useRoute();
const { data: post } = await useAsyncData(() => {
  return queryCollection("blog").path(route.path).first();
});
</script>

<template>
  <BlogPost :title="post.title" :date="post.date">
    <ContentRenderer :value="post" />
  </BlogPost>
</template>
