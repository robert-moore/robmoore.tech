<template>
  <div class="min-h-screen antialiased flex flex-col">
    <Header />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/App/Header.vue";
import Footer from "~/components/App/Footer.vue";
</script>
