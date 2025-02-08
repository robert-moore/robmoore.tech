<template>
  <ul class="space-y-2">
    <li
      v-for="link in toc"
      :key="link.id"
      :class="{
        'pl-0': link.depth === 2,
        'pl-4': link.depth === 3,
        'pl-6': link.depth === 4,
      }"
    >
      <a
        :href="`#${link.id}`"
        class="block py-1 text-gray-600 hover:text-gray-900 transition-colors relative pl-4"
        :class="{
          'text-sm': link.depth === 2,
          'text-[13px]': link.depth === 3,
          'text-xs': link.depth === 4,
          'text-blue-600 before:h-4': activeId === link.id,
        }"
        @click.prevent="$emit('select', link.id)"
      >
        <span
          class="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 bg-blue-600 transition-all"
          :class="{ 'h-4': activeId === link.id }"
        />
        {{ link.text }}
      </a>

      <TocList
        v-if="link.children?.length"
        :toc="link.children"
        :active-id="activeId"
        @select="$emit('select', $event)"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
interface TocLink {
  id: string;
  text: string;
  depth: number;
  children?: TocLink[];
}

defineProps<{
  toc: TocLink[];
  activeId?: string;
}>();

defineEmits<{
  select: [id: string];
}>();
</script>

<style scoped>
.toc-link {
  position: relative;
  padding-left: 1rem;
}

.toc-link::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 0;
  background-color: theme("colors.blue.600");
  transition: height 0.2s ease;
}

.is-active .toc-link {
  color: theme("colors.blue.600");
}

.is-active .toc-link::before {
  height: 1rem;
}
</style>
