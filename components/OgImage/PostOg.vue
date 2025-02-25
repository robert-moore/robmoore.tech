<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    title?: string;
    bgColor?: string;
  }>(),
  {
    title: "Rob Moore",
    bgColor: "#0f0f0f",
  }
);

const background = computed(() => props.bgColor || "#0f0f0f");
</script>

<template>
  <div
    :style="{
      fontFamily: 'Source Sans 3, system-ui, sans-serif',
      width: '100%',
      height: '100%',
      backgroundColor: background,
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '60px 80px',
      position: 'relative',
      overflow: 'hidden',
    }"
  >
    <!-- Ultra-minimal lines for aesthetic -->
    <div
      :style="{
        position: 'absolute',
        height: '1px',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        top: '15%',
        left: 0,
      }"
    ></div>
    <div
      :style="{
        position: 'absolute',
        height: '1px',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        top: '85%',
        left: 0,
      }"
    ></div>

    <!-- Brand identifier (absolutely positioned) -->
    <div
      :style="{
        position: 'absolute',
        top: '60px',
        left: '80px',
        fontSize: '24px',
        fontWeight: 600,
        color: '#666',
      }"
    >
      Rob Moore
    </div>

    <!-- Main content -->
    <div
      :style="{
        marginTop: '100px',
        marginBottom: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }"
    >
      <h1
        :style="{
          fontSize: '88px',
          fontWeight: 800,
          color: '#fff',
          lineHeight: '1.05',
          letterSpacing: '-1px',
          maxWidth: '90%',
          margin: 0,
        }"
      >
        {{ title }}
      </h1>
    </div>

    <!-- Footer -->
    <div
      :style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }"
    >
      <div :style="{ display: 'flex', alignItems: 'center' }">
        <div
          :style="{
            width: '32px',
            height: '1px',
            backgroundColor: '#666',
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
</template>
