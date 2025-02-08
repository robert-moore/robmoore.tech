<template>
  <aside
    class="sidenote"
    role="complementary"
    :aria-labelledby="`sidenote-ref-${number}`"
    :class="{
      'border-l-4 border-gray-200 pl-4 py-2 bg-gray-50': true,
      'lg:sidenote-margin': !alwaysShow,
    }"
  >
    <!-- Number marker -->
    <span
      v-if="number"
      class="sidenote-number text-xs font-medium text-gray-500 lg:absolute lg:-left-4"
      aria-hidden="true"
    >
      <a
        :href="`#sidenote-ref-${number}`"
        class="no-underline hover:text-gray-700"
      >
        [{{ number }}]
      </a>
    </span>

    <!-- Content -->
    <div
      class="sidenote-content text-sm text-gray-600"
      :id="`sidenote-${number}`"
    >
      <slot />
    </div>
  </aside>
</template>

<script setup lang="ts">
interface Props {
  alwaysShow?: boolean;
  number?: string | number;
}

withDefaults(defineProps<Props>(), {
  alwaysShow: false,
  number: undefined,
});
</script>

<style scoped>
.sidenote {
  margin-bottom: 1.5rem;
  position: relative;
}

.sidenote-number {
  display: inline-block;
  margin-right: 0.5rem;
  vertical-align: baseline;
}

.sidenote-content {
  display: inline;
}

.sidenote :deep(p) {
  margin-bottom: 0.75em;
  display: inline;
}

.sidenote :deep(p:last-child) {
  margin-bottom: 0;
}

/* Desktop layout */
@media (min-width: 1024px) {
  .sidenote.lg\:sidenote-margin {
    float: right;
    clear: right;
    width: 14rem;
    margin-right: -16rem;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    border: none;
    background: none;
    font-size: 0.875rem;
    line-height: 1.4;
    vertical-align: baseline;
  }

  .sidenote-content {
    display: block;
  }

  .sidenote :deep(p) {
    display: block;
  }
}
</style>
