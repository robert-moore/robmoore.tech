<template>
  <div
    class="text-sm text-gray-600 mb-4 relative sidenote"
    :class="{ 'xl:hidden': !alwaysShow }"
  >
    <div class="xl:absolute xl:left-0 xl:w-64 xl:pl-8">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  alwaysShow?: boolean;
}

defineProps<Props>();
</script>
