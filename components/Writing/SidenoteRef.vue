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
      <!-- Only render sidenote content if sidenotes are enabled -->
      <aside
        v-if="showSidenotes"
        :id="`sidenote-${number}`"
        class="sidenote"
        :class="{ 'is-active': isActive }"
        role="note"
        :aria-labelledby="`sidenote-ref-${number}`"
      >
        <span class="sidenote-number" aria-hidden="true">[{{ number }}]</span>
        <div
          class="sidenote-content text-gray-600 font-sans text-[0.85rem] tracking-[0.01em] font-[450]"
        >
          <slot />
        </div>
      </aside>
    </ClientOnly>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted, useSSRContext, watch, inject } from "vue";

interface Props {
  number: string | number;
  initialActive?: boolean;
  /** Whether to show the sidenote in mobile view */
  mobileView?: boolean;
}

// Inject showSidenotes from parent Post component
const showSidenotes = inject("showSidenotes", false);

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
  color: theme("colors.gray.600");
  font-size: 0.9em;
  line-height: 1;
  transition: all 0.2s ease;
}

.reference-marker:hover {
  color: theme("colors.gray.800");
}

.reference-marker:focus-visible {
  outline: 1px solid theme("colors.gray.600");
  outline-offset: 2px;
  border-radius: 1px;
}

.reference-marker sup {
  font-size: 0.75em;
  font-weight: 400;
  vertical-align: baseline;
  position: relative;
  top: -0.4em;
}

/* Sidenote styles */
.sidenote {
  /* Mobile styles */
  display: none;
  margin: 0.75rem 0;
  padding: 0.75rem;
  background: theme("colors.gray.50");
  border-left: 1px solid theme("colors.gray.200");
  font-size: 0.875rem;
  line-height: 1.6;
  color: theme("colors.gray.500");

  /* Animation properties */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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
  @apply font-sans;
  color: theme("colors.gray.600");
  font-weight: 400;
  font-size: 0.875rem;
}

.sidenote-content {
  display: inline;
}

/* Desktop layout */
@media (min-width: 1280px) {
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
    width: 16rem;
    margin-right: -20rem;
    font-size: 0.8rem;
    color: theme("colors.gray.400");
    transition: color 0.2s ease;
  }

  .sidenote:hover {
    color: theme("colors.gray.600");
  }

  .sidenote-number {
    position: absolute;
    left: -1.25rem;
    font-size: 0.75rem;
  }

  .sidenote-content {
    display: block;
  }
}
</style>
