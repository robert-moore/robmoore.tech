<script lang="ts" setup>
import Post from "~/components/Writing/Post.vue";
import { defineArticle } from "nuxt-schema-org/schema";
import { useSchemaOrg } from "#imports";
import { useSiteMetadata } from "~/composables/useSiteMetadata";
import { computed } from "vue";

const route = useRoute();

const { data: post } = await useAsyncData(`post-${route.path}`, () => {
  return queryCollection("post").path(route.path).first();
});

definePageMeta({
  layout: "post",
});

// Only proceed with metadata if we have a post
if (post.value) {
  // Format dates for SEO
  const publishDate = computed(() =>
    post.value?.date ? new Date(post.value.date).toISOString() : undefined
  );

  const modifiedDate = computed(() =>
    post.value?.modifiedDate
      ? new Date(post.value.modifiedDate).toISOString()
      : undefined
  );

  // Use the site metadata composable for SEO
  useSiteMetadata({
    title: post.value.title,
    description: post.value.description,
    image: post.value.image,
    path: route.path,
    type: "article",
    publishedTime: publishDate.value,
    modifiedTime: modifiedDate.value,
    tags: post.value.tags,
  });

  // Use schema.org
  useSchemaOrg([
    defineArticle({
      headline: post.value.title,
      description: post.value.description,
      image: post.value.image,
      datePublished: publishDate.value,
      dateModified: modifiedDate.value,
      wordCount: post.value.wordCount,
      keywords: post.value.tags,
    }),
  ]);
}
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
