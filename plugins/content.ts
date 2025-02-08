import { defineNuxtPlugin } from "#app";
import Sidenote from "~/components/Blog/Sidenote.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Sidenote", Sidenote);
});
