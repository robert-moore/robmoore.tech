import { defineNuxtPlugin } from "#app";
import Sidenote from "~/components/Blog/Sidenote.vue";
import SidenoteRef from "~/components/Blog/SidenoteRef.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Sidenote", Sidenote);
  nuxtApp.vueApp.component("SidenoteRef", SidenoteRef);
});
