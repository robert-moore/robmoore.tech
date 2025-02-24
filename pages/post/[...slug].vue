<script lang="ts" setup>
import Post from "~/components/Writing/Post.vue";
const route = useRoute();

const { data: post } = await useAsyncData(`post-${route.path}`, () => {
  return queryCollection("post").path(route.path).first();
});

definePageMeta({
  layout: "post",
});
</script>

<template>
  <Post
    v-if="post"
    :title="post.title"
    :date="post.date"
    :modifiedDate="post.modifiedDate"
    :tags="post.tags"
    :description="post.description"
    :image="post.image"
    :showSidenotes="post.showSidenotes"
    :showToc="post.showToc ?? true"
    :showHeaderNumbers="post.showHeaderNumbers"
    :toc="post.body?.toc?.links ?? []"
    :wordCount="post.wordCount"
  >
    <ContentRenderer :value="post" />
  </Post>
</template>
