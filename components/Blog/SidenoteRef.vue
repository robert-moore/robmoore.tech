<template>
  <span class="sidenote-wrapper">
    <!-- Reference marker with proper ARIA relationship -->
    <button
      type="button"
      :id="`sidenote-ref-${number}`"
      :aria-controls="`sidenote-${number}`"
      :aria-expanded="isActive"
      class="reference-marker"
      @click="toggleSidenote"
    >
      <sup>[{{ number }}]</sup>
    </button>

    <ClientOnly>
      <!-- Sidenote content with consistent rendering -->
      <aside
        :id="`sidenote-${number}`"
        class="sidenote"
        :class="{ 'is-active': isActive }"
        role="note"
        :aria-labelledby="`sidenote-ref-${number}`"
      >
        <span class="sidenote-number" aria-hidden="true">[{{ number }}]</span>
        <div class="sidenote-content">
          <slot />
        </div>
      </aside>
    </ClientOnly>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, useSSRContext, watch } from "vue";

interface Props {
  number: string | number;
  initialActive?: boolean;
  /** Whether to show the sidenote in mobile view */
  mobileView?: boolean;
}

// Define emits before props for better organization
const emit = defineEmits<{
  "update:active": [boolean];
  toggle: [boolean];
}>();

const props = withDefaults(defineProps<Props>(), {
  initialActive: false,
  mobileView: false,
});

// Use computed for derived state
const isActive = ref(props.initialActive);

// Implement v-model support
watch(
  () => props.initialActive,
  (newVal) => {
    if (newVal !== isActive.value) {
      isActive.value = newVal;
    }
  }
);

function toggleSidenote(event: Event) {
  event.preventDefault();
  isActive.value = !isActive.value;
  emit("update:active", isActive.value);
  emit("toggle", isActive.value);
}

// Ensure SSR-friendly component name
defineOptions({
  name: "SidenoteRef",
  inheritAttrs: false,
});
</script>

<style scoped>
/* Base wrapper styles */
.sidenote-wrapper {
  position: relative;
  display: inline;
  margin: 0 0.1em;
}

/* Reference marker styles */
.reference-marker {
  /* Reset button styles */
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;

  /* Custom styles */
  color: theme("colors.blue.600");
  font-size: 1em;
  line-height: 1;
  transition: color 0.2s ease;
}

.reference-marker:hover {
  color: theme("colors.blue.700");
}

.reference-marker:focus-visible {
  outline: 2px solid theme("colors.blue.500");
  outline-offset: 2px;
  border-radius: 2px;
}

.reference-marker sup {
  font-size: 0.75em;
  font-weight: 500;
  vertical-align: baseline;
  position: relative;
  top: -0.4em;
}

/* Sidenote styles */
.sidenote {
  /* Mobile styles */
  display: none;
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  background: theme("colors.gray.50");
  border-left: 3px solid theme("colors.gray.200");
  font-size: 0.875rem;
  line-height: 1.5;
  color: theme("colors.gray.600");

  /* Animation properties */
  transition: opacity 0.2s ease, transform 0.2s ease;
  opacity: 0;
  transform: translateY(-0.25rem);
}

.sidenote.is-active {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.sidenote-number {
  display: inline-block;
  margin-right: 0.5rem;
  color: theme("colors.blue.600");
  font-weight: 500;
}

.sidenote-content {
  display: inline;
}

/* Desktop layout */
@media (min-width: 1024px) {
  .reference-marker {
    cursor: default;
  }

  .sidenote {
    /* Reset mobile styles */
    display: block !important;
    opacity: 1 !important;
    transform: none !important;
    background: none;
    border: none;
    padding: 0;
    margin: 0;

    /* Desktop positioning */
    position: relative;
    float: right;
    clear: right;
    width: 14rem;
    margin-right: -16rem;
  }

  .sidenote-number {
    position: absolute;
    left: -1.5rem;
  }

  .sidenote-content {
    display: block;
  }
}
</style>
