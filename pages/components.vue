<script setup lang="ts">
import { ref, computed } from "vue";
import type { Component } from "vue";
import PostOg from "~/components/OgImage/PostOg.vue";

// Component display state
interface ComponentProps {
  title?: string;
  [key: string]: string | number | boolean | undefined;
}

interface ComponentDisplay {
  name: string;
  component: Component; // Using Vue's Component type instead of any
  componentName: string; // For display purposes
  props: ComponentProps;
  description: string;
  dimensions?: {
    width: number;
    height: number;
    label?: string;
  };
}

// Available components to preview
const components = ref<ComponentDisplay[]>([
  {
    name: "PostOg",
    component: PostOg,
    componentName: "PostOg",
    props: {
      title: "Example Post Title",
      isPreview: true,
    },
    description: "Open Graph image for blog posts",
    dimensions: {
      width: 1200,
      height: 630,
      label: "Open Graph Image",
    },
  },
]);

// Current selected component
const selectedComponent = ref<ComponentDisplay>(components.value[0]);

// Bound values for dynamic props
const boundProps = ref<ComponentProps>({ ...selectedComponent.value.props });

// Update selected component
function selectComponent(component: ComponentDisplay) {
  selectedComponent.value = component;
  boundProps.value = { ...component.props };
}

// Reset props to defaults
function resetProps() {
  boundProps.value = { ...selectedComponent.value.props };
}

// Get prop entries for v-for loops as [string, PropValue][]
function getPropEntries() {
  return Object.entries(boundProps.value);
}

// Get dimensions display string
function getDimensionsDisplay(component: ComponentDisplay): string {
  if (!component.dimensions) return "";

  const { width, height, label } = component.dimensions;
  return `${label || "Preview"} (${width}×${height})`;
}

// Generate formatted code parts for syntax highlighting
const codeExampleParts = computed(() => {
  const componentTag = selectedComponent.value.componentName;
  const props = getPropEntries()
    .filter(([key]) => key !== "isPreview") // Filter out isPreview prop from code example
    .map(([key, value]) => ({
      key,
      value: String(value),
    }));

  return {
    componentTag,
    props,
  };
});
</script>

<template>
  <div class="py-12 md:py-16 px-4 max-w-5xl mx-auto space-y-16">
    <header class="space-y-6">
      <h1 class="font-sans text-3xl md:text-4xl font-[700] tracking-tight">
        Component Library
      </h1>
      <p class="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
        Preview and interact with UI components in isolation. Adjust properties
        to see how components respond to different configurations.
      </p>
    </header>

    <!-- Component selector -->
    <div class="space-y-8">
      <div class="flex flex-wrap gap-3">
        <button
          v-for="component in components"
          :key="component.name"
          @click="selectComponent(component)"
          class="px-3 py-1.5 font-mono text-xs transition-colors rounded-md border"
          :class="
            selectedComponent.name === component.name
              ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-transparent'
              : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'
          "
        >
          {{ component.name }}
        </button>
      </div>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Props editor -->
        <div class="w-full md:w-1/3 space-y-6">
          <div>
            <h2
              class="text-sm font-mono text-gray-600 dark:text-gray-400 flex items-center mb-4"
            >
              <span class="mr-2 text-gray-300 dark:text-gray-600 font-normal"
                >{</span
              >
              PROPERTIES
              <span class="ml-2 text-gray-300 dark:text-gray-600 font-normal"
                >}</span
              >
            </h2>

            <div class="space-y-4">
              <div
                v-for="[key, value] in getPropEntries()"
                :key="key"
                class="space-y-1.5"
              >
                <label
                  :for="key"
                  class="block text-xs font-mono text-gray-500 dark:text-gray-400"
                >
                  {{ key }}
                </label>
                <input
                  :id="key"
                  v-model="boundProps[key]"
                  type="text"
                  class="block w-full px-3 py-2 text-sm bg-white dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-800 focus:border-gray-400 dark:focus:border-gray-600 focus:ring-0 transition-colors"
                />
              </div>

              <button
                @click="resetProps"
                class="mt-4 inline-flex items-center px-3 py-1.5 border border-gray-200 dark:border-gray-800 rounded-md text-xs font-mono text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
              >
                Reset defaults
              </button>
            </div>
          </div>

          <div>
            <h3
              class="text-sm font-mono text-gray-600 dark:text-gray-400 flex items-center mb-3"
            >
              <span class="mr-2 text-gray-300 dark:text-gray-600 font-normal"
                >[</span
              >
              ABOUT
              <span class="ml-2 text-gray-300 dark:text-gray-600 font-normal"
                >]</span
              >
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ selectedComponent.description }}
            </p>
          </div>
        </div>

        <!-- Component preview -->
        <div class="w-full md:w-2/3 space-y-6">
          <h2
            class="text-sm font-mono text-gray-600 dark:text-gray-400 flex items-center mb-4"
          >
            <span class="mr-2 text-gray-300 dark:text-gray-600 font-normal"
              >&lt;</span
            >
            PREVIEW
            <span class="ml-2 text-gray-300 dark:text-gray-600 font-normal"
              >/&gt;</span
            >
          </h2>

          <div
            class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
          >
            <!-- Preview header with dimensions -->
            <div
              v-if="selectedComponent.dimensions"
              class="px-4 py-2 text-xs font-mono text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 flex items-center"
            >
              {{ getDimensionsDisplay(selectedComponent) }}
              <div class="ml-auto flex items-center space-x-1.5">
                <div
                  class="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700"
                ></div>
                <div
                  class="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700"
                ></div>
                <div
                  class="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-700"
                ></div>
              </div>
            </div>

            <!-- Preview container with fixed aspect ratio -->
            <div
              class="relative"
              :style="{
                paddingBottom: selectedComponent.dimensions
                  ? `${
                      (selectedComponent.dimensions.height /
                        selectedComponent.dimensions.width) *
                      100
                    }%`
                  : '56.25%',
              }"
            >
              <div class="absolute inset-0 flex items-center justify-center">
                <!-- Dynamic component rendering -->
                <component
                  :is="selectedComponent.component"
                  v-bind="boundProps"
                  class="w-full h-full"
                />
              </div>
            </div>
          </div>

          <!-- Code example -->
          <div>
            <h3
              class="text-sm font-mono text-gray-600 dark:text-gray-400 flex items-center mb-3"
            >
              <span class="mr-2 text-gray-300 dark:text-gray-600 font-normal"
                >$</span
              >
              USAGE
            </h3>
            <div
              class="bg-gray-950 text-gray-200 dark:text-gray-300 p-4 rounded-lg overflow-auto text-sm font-mono leading-relaxed border border-gray-900"
            >
              <pre
                class="whitespace-pre language-html"
              ><span class="text-blue-300">&lt;template&gt;</span>
  <span class="text-blue-300">&lt;{{ codeExampleParts.componentTag }}</span><template v-if="codeExampleParts.props.length > 0"><span v-for="prop in codeExampleParts.props" :key="prop.key"> <span class="text-green-400">{{ prop.key }}</span><span class="text-gray-400">=</span><span class="text-amber-300">"{{ prop.value }}"</span></span></template><span class="text-blue-300"> /&gt;</span>
<span class="text-blue-300">&lt;/template&gt;</span></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transitions and animations */
button,
input,
div {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
