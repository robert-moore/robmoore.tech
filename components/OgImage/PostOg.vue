<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    isPreview?: boolean;
  }>(),
  {
    title: "Rob Moore",
    isPreview: false,
  }
);
</script>

<template>
  <div
    class="flex items-center justify-center"
    :style="
      isPreview
        ? {}
        : {
            width: '1200px',
            height: '630px',
          }
    "
  >
    <div
      class="flex items-center justify-center bg-white dark:bg-gray-950"
      :style="{
        width: isPreview ? '100%' : '1200px',
        height: isPreview ? '100%' : '630px',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'Source Sans 3, system-ui, -apple-system, sans-serif',
      }"
    >
      <!-- Ultra-minimal background grid -->
      <div
        :style="{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
        }"
      >
        <div
          :style="{
            position: 'absolute',
            height: '1px',
            width: '100%',
            backgroundColor: '#888',
            top: '15%',
          }"
        ></div>
        <div
          :style="{
            position: 'absolute',
            height: '1px',
            width: '100%',
            backgroundColor: '#888',
            top: '85%',
          }"
        ></div>
      </div>

      <!-- Main content container -->
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          padding: '60px 80px',
          position: 'relative',
          zIndex: 10,
        }"
      >
        <div
          :style="{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
          }"
        >
          <div>
            <!-- Brand identifier -->
            <div
              :style="{
                fontFamily:
                  'Source Sans 3, system-ui, -apple-system, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                color: '#666',
                marginBottom: '32px',
                display: 'flex',
                alignItems: 'center',
              }"
            >
              Rob Moore
            </div>

            <!-- Main title with larger typography for OG visibility -->
            <h1
              :style="{
                fontFamily:
                  'Source Sans 3, system-ui, -apple-system, sans-serif',
                fontSize: '88px',
                fontWeight: 800,
                color: '#111',
                lineHeight: 1.05,
                letterSpacing: '-1px',
                maxWidth: '90%',
                margin: 0,
                padding: 0,
              }"
              class="dark:text-white"
            >
              {{ title }}
            </h1>
          </div>

          <!-- Footer with enhanced contrast -->
          <div
            :style="{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }"
          >
            <div
              :style="{
                display: 'flex',
                alignItems: 'center',
              }"
            >
              <div
                :style="{
                  width: '32px',
                  height: '1px',
                  backgroundColor: '#888',
                  marginRight: '12px',
                }"
              ></div>
              <div
                :style="{
                  fontSize: '18px',
                  fontFamily: 'ui-monospace, monospace',
                  color: '#666',
                  fontWeight: 500,
                }"
              >
                CODE × CONSCIOUSNESS
              </div>
            </div>

            <div
              :style="{
                fontSize: '18px',
                fontFamily: 'ui-monospace, monospace',
                color: '#666',
              }"
            >
              robmoore.tech
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
