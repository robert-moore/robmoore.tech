<script lang="ts" setup>
const route = useRoute();
const config = useRuntimeConfig();
const { data: post } = await useAsyncData(() => {
  return queryCollection("blog").path(route.path).first();
});

// Check if the post content includes any sidenotes
const hasSidenotes = computed(() => {
  if (!post.value?.body) {
    console.log("No post body found");
    return false;
  }

  // Log the full content structure
  console.log("Full post content:", JSON.stringify(post.value, null, 2));

  // Try to find sidenotes at any level of nesting
  const findSidenotes = (node: any): boolean => {
    if (!node) return false;

    // Check if current node is a sidenote
    if (node.tag === "SidenoteRef") {
      console.log("Found SidenoteRef:", node);
      return true;
    }

    // Check children array
    if (Array.isArray(node.children)) {
      return node.children.some(findSidenotes);
    }

    // Check if node is an object with nested content
    if (typeof node === "object") {
      return Object.values(node).some(
        (value) => typeof value === "object" && findSidenotes(value)
      );
    }

    return false;
  };

  const hasNotes = findSidenotes(post.value.body);
  console.log("Has sidenotes:", hasNotes);
  return hasNotes;
});

// Add visual debug info
const debugInfo = computed(() => ({
  path: route.path,
  postExists: !!post.value,
  bodyExists: !!post.value?.body,
  contentType: post.value?.body ? typeof post.value.body : "undefined",
  bodyStructure: post.value?.body ? Object.keys(post.value.body) : [],
  hasSidenotes: hasSidenotes.value,
}));

interface Post {
  title: string;
  date: string;
  description?: string;
  hasSidenotes?: boolean;
  body: any;
}
</script>

<template>
  <!-- Add debug info that's only visible in development -->
  <div
    v-if="config.public.dev"
    class="bg-gray-100 p-4 mb-8 rounded text-sm font-mono"
  >
    <pre>{{ debugInfo }}</pre>
  </div>

  <BlogPost
    :title="post.title"
    :date="post.date"
    :hasSidenotes="post.hasSidenotes"
  >
    <ContentRenderer :value="post" />
  </BlogPost>
</template>
