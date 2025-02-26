<template>
  <ul class="space-y-2 font-sans pt-2 pr-2 antialiased">
    <li
      v-for="link in toc"
      :key="link.id"
      :class="{
        'pl-0': link.depth === 2,
        'pl-2': link.depth === 3,
        'pl-4': link.depth === 4,
      }"
    >
      <a
        :href="`#${link.id}`"
        class="block pl-2 relative font-[450] transition-colors tracking-[0.005em] text-[13px] leading-4"
        :style="{
          paddingTop: '0.1rem',
          paddingBottom: '0.1rem',
        }"
        :class="{
          'text-primary-500': activeId === link.id,
          'text-gray-700 hover:text-gray-900': activeId !== link.id,
        }"
        @click.prevent="$emit('select', link.id)"
      >
        <div
          class="absolute left-0 top-[0.2em] bottom-[0.2em] w-[2px] bg-primary-500 transition-transform duration-200"
          :style="{
            transform: activeId === link.id ? 'none' : 'translateX(-100%)',
            opacity: activeId === link.id ? 0.8 : 0,
          }"
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
  background-color: theme("colors.primary.500");
  transition: height 0.2s ease;
}

.is-active .toc-link {
  color: theme("colors.primary.500");
}

.is-active .toc-link::before {
  height: 1rem;
}
</style>
