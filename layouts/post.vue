<template>
  <div
    class="min-h-screen flex flex-col bg-[#fbfaf2] bg-no-repeat bg-gradient-to-br from-[#fbfaf2] to-[#faf8fa] dark:bg-slate-800 dark:from-slate-800 dark:to-slate-950"
  >
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
