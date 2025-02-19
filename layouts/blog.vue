<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="w-full flex-grow py-8 max-w-screen-2xl container">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/App/Header.vue";
import Footer from "~/components/App/Footer.vue";
</script>
