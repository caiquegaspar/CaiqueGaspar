<script lang="ts" setup>
import { onMounted, ref } from "vue";

import HomeComponent from "@components/HomeComponent.vue";
import AboutComponent from "@components/AboutComponent.vue";

const directions: { [key: string]: number } = { previous: -100, next: 100 };

const pagePos = ref<number>(0);

const changeSection = (direction: string) =>
  (pagePos.value += directions[direction]);

const debounce = (func, wait, immediate) => {
  let timeout;

  return (...args) => {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

onMounted(() => {
  const arrayPositionSection = [];

  document.querySelectorAll(".section_page").forEach((item) => {
    const objPair = {};
    objPair[item.offsetTop] = item.getAttribute("id");
    arrayPositionSection.push(objPair);
  });

  console.log(arrayPositionSection);
});
</script>

<template>
  <main :style="`transform: translateY(-${pagePos}vh)`">
    <HomeComponent class="section_page" @changeSection="changeSection" />
    <AboutComponent class="section_page" @changeSection="changeSection" />
  </main>
</template>

<style scoped>
main {
  @apply absolute h-screen w-screen font-['Raleway',sans-serif] transition-all duration-500;
}
</style>
