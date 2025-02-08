<template>
  <aside
    class="absolute -right-[336px] w-[288px] font-crimson text-sm leading-5 text-[#595959] border-t border-[#dee9ed] py-1"
    role="complementary"
    :aria-labelledby="`sidenote-ref-${number}`"
  >
    <!-- Number marker -->
    <span
      v-if="number"
      class="sidenote-number absolute -left-4 text-xs font-medium text-gray-500"
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
    <div class="my-5 first:mt-1 last:mb-1" :id="`sidenote-${number}`">
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
/* Mobile styles are better kept in CSS */
@media (max-width: 960px) {
  aside {
    position: relative;
    right: auto;
    width: auto;
    border-bottom: solid 1px #dee9ed;
    margin: 24px 0;
  }
}

@media (max-width: 580px) {
  aside {
    font-size: 15px;
    line-height: 22px;
  }
}

/* Code styling */
:deep(code) {
  font-size: 14px;
  border-radius: 2px;
  padding: 1px 2px;
  background: #faf8f5;
}
</style>
