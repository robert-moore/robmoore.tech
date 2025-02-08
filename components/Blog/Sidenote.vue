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
  /** Whether to always show the sidenote regardless of screen size */
  alwaysShow?: boolean;
  /** The reference number for the sidenote */
  number?: string | number;
  /** Whether the sidenote is currently visible (for mobile) */
  isVisible?: boolean;
}

// Define emits before props
const emit = defineEmits<{
  "update:visible": [boolean];
  show: [];
  hide: [];
}>();

const props = withDefaults(defineProps<Props>(), {
  alwaysShow: false,
  number: undefined,
  isVisible: false,
});

// Watch for visibility changes
watch(
  () => props.isVisible,
  (newVal) => {
    emit(newVal ? "show" : "hide");
  }
);

// Export the component name only
defineOptions({
  name: "Sidenote",
});
</script>

<style scoped>
.sidenote {
  margin-bottom: 1.5rem;
  position: relative;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

/* Improve performance with transform */
@media (max-width: 1023px) {
  .sidenote {
    will-change: transform, opacity;
  }
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
