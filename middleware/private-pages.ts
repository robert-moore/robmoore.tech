export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/about") {
    return navigateTo("/");
  }
});
