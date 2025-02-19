<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="max-w-3xl mx-auto px-4 py-8 flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/App/Header.vue";
import Footer from "~/components/App/Footer.vue";
</script>
