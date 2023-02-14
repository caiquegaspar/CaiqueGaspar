<script lang="ts" setup>
import { ref } from "vue";

import HomeComponent from "components/HomeComponent.vue";
import AboutComponent from "components/AboutComponent.vue";

const test = ref<number>(0);
</script>

<template>
  <main>
    <HomeComponent
      class="section_page"
      style="--z: 4"
      :style="`transform: translateY(-${test}vh)`"
    />
    <AboutComponent class="section_page" style="--z: 3" />

    <div class="fixed flex gap-2 top-0 left-0 z-50">
      <button class="bg-white p-4" @click="test = 100">up</button>
      <button class="bg-white p-4" @click="test = 0">down</button>
    </div>
  </main>
</template>

<style scoped>
main {
  @apply relative h-screen w-screen font-['Raleway',sans-serif];
}

main .section_page {
  @apply transition-all duration-300 z-[calc(var(--z)*10)];
}
</style>
