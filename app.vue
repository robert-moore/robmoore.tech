<script setup lang="ts">
import {
  defineOrganization,
  defineWebPage,
  defineWebSite,
  useSchemaOrg,
} from "@unhead/schema-org/vue";

// we can remove a lot of boilerplate from Schema.org by providing template params
const route = useRoute();
useHead({
  templateParams: {
    schemaOrg: {
      host: "https://robmoore.tech",
      path: route.path,
      inLanguage: "en",
    },
  },
  titleTemplate: (title) => title || "Rob Moore",
});

useSchemaOrg([
  // much of the data will be inferred such as the title, description and all URLs
  defineWebPage(),
  defineWebSite({
    name: "Rob Moore",
    description:
      "Building products, writing about philosophy and technology, and visualizing sports data.",
  }),
  // choose an identity, either with definePerson or an defineOrganization
  definePerson({
    name: "Rob Moore",
  }),
]);
</script>

<template>
  <div class="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
