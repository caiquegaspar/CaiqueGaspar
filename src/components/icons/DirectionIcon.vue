<script lang="ts" setup>
defineProps<{ rotate?: number }>();
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none">
    <g :transform="`rotate(${rotate})`" style="transform-origin: center">
      <path
        d="M4 8L12 16L20 8"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>
