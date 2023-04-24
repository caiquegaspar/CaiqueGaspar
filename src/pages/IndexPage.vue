<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useDebounce } from "@composables/useDebounce";
import { useRange } from "@composables/useRange";

import HomeComponent from "@components/HomeComponent.vue";
import AboutComponent from "@components/AboutComponent.vue";
import ServicesComponent from "@components/ServicesComponent.vue";

const directions: { [key: string]: number } = { previous: -100, next: 100 };
const [MIN, MAX]: number[] = [0, 200];

const pagePos = ref<number>(200);
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
  <main :style="`transform: translateY(-${pagePos}vh)`">
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
  </main>
</template>

<style scoped>
main {
  @apply absolute h-screen w-screen font-['Raleway',sans-serif] transition-all duration-500;
}
</style>
