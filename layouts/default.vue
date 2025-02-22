<template>
  <div
    class="min-h-screen antialiased flex flex-col bg-[#f6f5e9] bg-no-repeat bg-gradient-to-br from-[#f6f5e9] to-[#faf8fa] dark:bg-slate-800 dark:from-slate-800 dark:to-slate-950"
  >
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
