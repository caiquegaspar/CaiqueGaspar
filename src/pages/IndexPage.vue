<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useDebounce } from "@composables/useDebounce";
import { useRange } from "@composables/useRange";

import HomeComponent from "@components/HomeComponent.vue";
import AboutComponent from "@components/AboutComponent.vue";
import ServicesComponent from "@components/ServicesComponent.vue";

const progressPercentage = computed(() => (pagePos.value / MAX) * 100);

const directions: { [key: string]: number } = { previous: -100, next: 100 };
const [MIN, MAX]: number[] = [0, 200];

const pagePos = ref<number>(0);
const startTouch = ref<TouchEvent>();
const endTouch = ref<TouchEvent>();

const changeSection = (direction: string) =>
  (pagePos.value = useRange(pagePos.value + directions[direction], MIN, MAX));

onMounted(() => {
  window.addEventListener(
    "wheel",
    useDebounce((event) => {
      if (event.deltaY < 0) changeSection("previous");
      else if (event.deltaY > 0) changeSection("next");
    }, 200)
  );

  window.addEventListener(
    "touchstart",
    (event) => (startTouch.value = event.changedTouches[0])
  );

  window.addEventListener("touchend", (event) => {
    endTouch.value = event.changedTouches[0];

    const touchDirection = endTouch.value.screenY - startTouch.value.screenY;

    if (touchDirection > 0) changeSection("previous");
    else if (touchDirection < 0) changeSection("next");
  });
});
</script>

<template>
  <main>
    <div class="progress_bar">
      <span class="bar" :style="`width: ${progressPercentage}%`"></span>
    </div>

    <div class="main_content" :style="`transform: translateY(-${pagePos}vh)`">
      <HomeComponent
        class="section_page"
        @changeSection="changeSection"
        :isActive="pagePos === 0"
      />

      <AboutComponent
        class="section_page"
        @changeSection="changeSection"
        :isActive="pagePos === 100"
      />

      <ServicesComponent
        class="section_page"
        @changeSection="changeSection"
        :isActive="pagePos === 200"
      />
    </div>
  </main>
</template>

<style scoped>
.progress_bar {
  @apply fixed top-0 left-0 z-50 w-full h-1 bg-[#35495e];
}
.bar {
  @apply block h-full bg-[linear-gradient(90deg,#33ffbb,#31acff,#2ad39f,#0170f0)];
  @apply transition-all duration-700;
}

.main_content {
  @apply absolute h-screen w-screen font-['Raleway',sans-serif] transition-all duration-500;
}
</style>
