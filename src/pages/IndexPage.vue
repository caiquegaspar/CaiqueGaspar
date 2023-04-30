<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useDebounce } from "@composables/useDebounce";
import { useRange } from "@composables/useRange";
import { useViewPort } from "@composables/useViewPort";

import HomeComponent from "@components/HomeComponent.vue";
import AboutComponent from "@components/AboutComponent.vue";
import ServicesComponent from "@components/ServicesComponent.vue";

const progressPercentage = computed(() => (pagePos.value / MAX) * 100);

const directions: { [key: string]: number } = { previous: -1, next: 1 };
const [MIN, MAX]: number[] = [0, 2];
const pageSections: { [key: string]: number } = {
  home: 0,
  about: 1,
  services: 2,
  contact: 3,
};

const heightValue = ref<number>(0);
const widthValue = ref<number>(0);
const pagePos = ref<number>(0);
const pageTranslate = ref<number>(0);
const startTouch = ref<TouchEvent>();
const endTouch = ref<TouchEvent>();
const hideMouseTrailer = ref(true);

const setViewPort = (): void => {
  const [vw, vh] = useViewPort();

  heightValue.value = vh;
  widthValue.value = vw;
};

const changeSection = (direction: string | boolean, target?: string) => {
  if (!direction) {
    pagePos.value = useRange(pageSections[target], MIN, MAX);
    pageTranslate.value = pagePos.value * heightValue.value;

    return;
  }

  pagePos.value = useRange(pagePos.value + directions[direction], MIN, MAX);
  pageTranslate.value = pagePos.value * heightValue.value;
};

const animateTrailer = (e: MouseEvent) => {
  hideMouseTrailer.value = false;

  const trailer = document.querySelector(".mouse_trailer");

  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = { transform: `translate(${x}px, ${y}px)` };

  trailer.animate(keyframes, { duration: 700, fill: "forwards" });
};

onMounted(() => {
  setViewPort();

  window.addEventListener(
    "resize",
    useDebounce(() => setViewPort(), 200)
  );

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
  <main @mousemove="animateTrailer">
    <div class="progress_bar">
      <span class="bar" :style="`width: ${progressPercentage}%`"></span>
    </div>

    <div class="mouse_trailer" :class="{ 'opacity-0': hideMouseTrailer }"></div>

    <div
      class="main_content"
      :style="`transform: translateY(-${pageTranslate}px); width: ${widthValue}px; height: ${heightValue}px`"
    >
      <HomeComponent
        class="section_page"
        @changeSection="changeSection"
        :isActive="pagePos === 0"
      />

      <AboutComponent
        class="section_page"
        @changeSection="changeSection"
        :isActive="pagePos === 1"
      />

      <ServicesComponent
        class="section_page"
        @changeSection="changeSection"
        :isActive="pagePos === 2"
      />
    </div>
  </main>
</template>

<style scoped>
.progress_bar {
  @apply fixed top-0 left-0 z-50 w-full h-2 bg-[#35495e];
}

.bar {
  @apply block h-full bg-[linear-gradient(90deg,#4ecf94,#2a92d9,#42b883,#025abf)];
  @apply transition-all duration-700;
}

.mouse_trailer {
  @apply hidden lg:grid fixed top-0 left-0 place-items-center w-6 h-6;
  @apply bg-transparent rounded-full border-2 border-white z-[9999] pointer-events-none;
  /* backdrop-filter: invert(100%); or tailwind "backdrop-invert" to invert colors inside trailer */
}

.main_content {
  @apply absolute font-['Raleway',sans-serif] transition-all duration-500;
}
</style>
