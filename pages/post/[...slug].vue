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
    :hasSidenotes="post.hasSidenotes"
    :hasToc="post.hasToc ?? true"
    :showNumbers="post.showNumbers"
    :toc="post.body?.toc?.links ?? []"
  >
    <ContentRenderer :value="post" />
  </Post>
</template>
