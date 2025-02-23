import { defineNuxtPlugin } from "#app";
import Sidenote from "~/components/Writing/Sidenote.vue";
import SidenoteRef from "~/components/Writing/SidenoteRef.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Sidenote", Sidenote);
  nuxtApp.vueApp.component("SidenoteRef", SidenoteRef);
});
