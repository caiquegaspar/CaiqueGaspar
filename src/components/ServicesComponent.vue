<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import {
  usePromiseTimeout,
  useAbortController,
} from "@composables/usePromiseTimeout";
import {
  useSequencer,
  useSequencerController,
} from "@composables/useSequencer";
import { useRotateElem } from "@composables/useRotateElem";

import DesignIcon from "@icons/DesignIcon.vue";
import CodeIcon from "@icons/CodeIcon.vue";
import DeployIcon from "@icons/DeployIcon.vue";

const props = defineProps<{ isActive: boolean }>();

const typewriterDelay = computed(
  () => pageDelay.value + typewriterSpeed.value * pageTitle.value.length + 700
);

const introAbortController = useAbortController();
const sequenceController = useSequencerController();

const pageContents = {
  design: `Planejamento e criação de layouts de websites, livre de erros, tendo a mesma visibilidade em diferentes sistemas operacionais e navegadores.`,
  code: `Desenvolvimento de websites e webapps responsivos, landingpages, sites dinâmicos, boas praticas de otimização, usabilidade, SEO, semântica e manutenções em geral.`,
  deploy: `Desenvolvimento de aplicações e sistemas para web desde sua concepção, integração com API, planejamento e produção até sua implantação e controle.`,
};

const pageTitle = ref<string>("Meus Serviços");
const pageDelay = ref<number>(400);
const typewriterLetters = ref<string[]>([]);
const typewriterSpeed = ref<number>(70);
const showContent = ref<boolean>(false);
const activeCard = ref("design");

const setIntro = async () => {
  setTimeout(() => startType(), pageDelay.value);

  await usePromiseTimeout({
    delay: typewriterDelay.value,
    abortController: introAbortController,
  });

  showContent.value = true;
};

const resetIntro = async () => {
  sequenceController.abort();
  introAbortController.abort();

  showContent.value = false;
  setTimeout(() => (typewriterLetters.value.length = 0), 600);
};

const startType = () => {
  const promiseMap = [];
  const letters = pageTitle.value.split("");

  letters.map((letter) => promiseMap.push(letter));

  useSequencer({
    delay: typewriterSpeed.value,
    array: promiseMap,
    andThen: (el) => typewriterLetters.value.push(el),
  });
};

const animateCards = (e: MouseEvent) => {
  const cards = document.querySelectorAll(".card_3d");
  cards.forEach((card, idx) => useRotateElem(e, card, idx));
};

watch(
  () => props.isActive,
  (newValue, oldValue) => (newValue ? setIntro() : resetIntro()),
  { immediate: true }
);
</script>

<template>
  <section class="services_container" @mousemove="animateCards">
    <div class="typewriter_text" :class="{ typewriter_focus: !showContent }">
      <p>
        <span v-for="(letter, idx) in typewriterLetters" :key="letter + idx">
          {{ letter }}
        </span>
      </p>
      <span class="typewriter_cursor">&nbsp;</span>
    </div>

    <div class="cards_container__lg_view" :class="{ hide_cards: !showContent }">
      <div class="card_3d">
        <div class="card_wrapper">
          <div class="wrapper_content">
            <DesignIcon width="2.5rem" />
            <span>Design</span>
          </div>
        </div>

        <div class="card_content">
          <p>{{ pageContents.design }}</p>
        </div>
      </div>

      <div class="card_3d">
        <div class="card_wrapper">
          <div class="wrapper_content">
            <CodeIcon width="2.5rem" />
            <span>Code</span>
          </div>
        </div>

        <div class="card_content">
          <p>{{ pageContents.code }}</p>
        </div>
      </div>

      <div class="card_3d">
        <div class="card_wrapper">
          <div class="wrapper_content">
            <DeployIcon width="2.5rem" />
            <span>Deploy</span>
          </div>
        </div>

        <div class="card_content">
          <p>{{ pageContents.deploy }}</p>
        </div>
      </div>
    </div>

    <div class="cards_container__sm_view" :class="{ hide_cards: !showContent }">
      <div
        class="card_3d"
        :class="{ active_card: activeCard === 'design' }"
        @click="activeCard = 'design'"
      >
        <div class="card_wrapper">
          <div class="wrapper_content">
            <DesignIcon class="card_icon" width="2.5rem" />
            <div class="indicator"></div>
          </div>
        </div>

        <div class="card_content">
          <span>Design</span>
          <p>{{ pageContents.design }}</p>
        </div>
      </div>

      <div
        class="card_3d"
        :class="{ active_card: activeCard === 'code' }"
        @click="activeCard = 'code'"
      >
        <div class="card_wrapper">
          <div class="wrapper_content">
            <CodeIcon class="card_icon" width="2.5rem" />
            <div class="indicator"></div>
          </div>
        </div>

        <div class="card_content">
          <span>Code</span>
          <p>{{ pageContents.code }}</p>
        </div>
      </div>

      <div
        class="card_3d"
        :class="{ active_card: activeCard === 'deploy' }"
        @click="activeCard = 'deploy'"
      >
        <div class="card_wrapper">
          <div class="wrapper_content">
            <DeployIcon class="card_icon" width="2.5rem" />
            <div class="indicator"></div>
          </div>
        </div>

        <div class="card_content">
          <span>Deploy</span>
          <p>{{ pageContents.deploy }}</p>
        </div>
      </div>
    </div>

    <div class="services_background">
      <span>Design</span>
      <span>Code</span>
      <span>Deploy</span>
    </div>
  </section>
</template>

<style scoped>
section {
  @apply relative h-screen w-screen bg-white overflow-hidden;
  @apply flex flex-col justify-center items-center bg-services;
}

.typewriter_text {
  @apply absolute top-14 flex gap-[.3rem] text-3xl text-white scale-[1];
  @apply transition-all duration-300;
}

.typewriter_focus {
  @apply top-1/2 scale-[2] md:scale-[3] xl:scale-[4] 2xl:scale-[5];
}

.typewriter_cursor {
  @apply w-[.01rem] bg-white animate-[blink_.8s_ease-in-out_infinite];
}

.cards_container__lg_view {
  @apply hidden lg:grid w-[85%] h-full grid-cols-3 gap-14 place-items-center;
  @apply text-white z-10 transition-transform duration-300;
}

.hide_cards {
  @apply translate-y-[100%];
}

.cards_container__lg_view .card_3d {
  @apply p-4 relative w-full 2xl:w-[85%];
}

.cards_container__lg_view .card_wrapper {
  @apply flex justify-center items-center relative -z-[1] pointer-events-none;
  @apply text-white text-[2.5rem] xl:text-[3.5rem] leading-normal;
  @apply font-bold p-8 rounded-2xl bg-[#0a0f1acc] preserve-3d;
  @apply card-3d-[5000px_0_0_0_var(--rotateX)_var(--rotateY)] text-shadow-[0_0_0.3em_currentColor];

  /* shadow */
  @apply before:content-[""] before:absolute  before:rounded-[inherit];
  @apply before:opacity-50 before:bg-black -z-[1] before:inset-3 before:-layer-pos-[50px] before:blur-lg;

  /* gradient thingy */
  @apply after:content-[""] after:absolute after:rounded-[inherit] after:-inset-4 after:-z-[2];
  @apply after:-layer-pos-[50px] after:bg-[linear-gradient(120deg,#42b883,#35495e)];
}

.cards_container__lg_view .wrapper_content {
  @apply flex justify-center items-center gap-2 relative;
}

.cards_container__lg_view .card_3d:hover .card_wrapper {
  @apply transition-[transform] duration-200 card-3d-[5000px_0_50px_0_0_45deg];
}

.cards_container__lg_view .card_content {
  @apply pointer-events-none overflow-hidden opacity-0 absolute left-0 -z-[1] w-full;
  @apply transition-all duration-300 text-white text-xs xl:text-sm 2xl:text-base font-bold rounded-2xl;
  @apply p-5 bg-[#fff3] backdrop-blur -translate-x-2/4 card-3d-[5000px_0_0_0_0_80deg];
}

.cards_container__lg_view .card_3d:hover .card_content {
  @apply opacity-100 card-3d-[5000px_0_-105%_1000px_0_0];
}

.cards_container__sm_view {
  @apply flex lg:hidden relative w-full h-full;
  @apply items-end justify-evenly text-white z-10 transition-transform duration-300;
}

.cards_container__sm_view .card_3d {
  @apply mb-4;
}

.cards_container__sm_view .card_wrapper {
  @apply flex justify-center items-center relative -z-[1] pointer-events-none;
  @apply text-white text-[1.5rem] leading-normal;
  @apply font-bold p-0 rounded-2xl bg-transparent text-shadow-[0_0_0.3em_currentColor];
}

.cards_container__sm_view .wrapper_content {
  @apply flex justify-center items-center gap-2 bg-[#0a0f1acc];
  @apply rounded-full p-2 relative transition-all duration-300;
}

.cards_container__sm_view .card_3d:hover .card_wrapper {
  @apply transition-[transform] duration-200 lg:card-3d-[5000px_0_50px_0_0_45deg];
}

.cards_container__sm_view .card_content {
  @apply pointer-events-none  opacity-100 absolute top-[50%] left-[50%] -z-[1] w-80 sm:w-96;
  @apply transition-all duration-300 text-white text-[1.3rem] sm:text-[1.5rem] leading-normal rounded-2xl preserve-3d;
  @apply p-6 bg-[#fff6] card-3d-[5000px_100%_100%_0_25deg_20deg] flex flex-col gap-3;

  /* shadow */
  @apply before:content-[""] before:absolute  before:rounded-[inherit] before:card-3d-[5000px_0_0_-80px_0_0];
  @apply before:opacity-50 before:bg-black -z-[1] before:inset-3 before:blur-lg;

  /* gradient thingy */
  @apply after:content-[""] after:absolute after:rounded-[inherit] after:-inset-4 after:-z-[2] after:transition-all after:duration-300;
  @apply after:bg-[linear-gradient(120deg,#42b883,#35495e)] after:card-3d-[5000px_-300%_-300%_-80px_0_0];
}

.cards_container__sm_view .card_3d.active_card .card_content {
  @apply opacity-100 card-3d-[5000px_-45%_-55%_0_25deg_20deg] after:card-3d-[5000px_0_0_-80px_0_0];
}

.cards_container__sm_view .card_content span {
  @apply text-5xl sm:text-6xl text-shadow-[0_0_0.1em_currentColor];
}

.cards_container__sm_view .indicator {
  @apply absolute -bottom-[.69rem] rounded-full w-[2rem] border-b-8 border-[#fff] opacity-0;
}

.cards_container__sm_view .card_3d.active_card .indicator {
  @apply opacity-100;
}

.services_background {
  @apply absolute left-0 flex flex-col text-[10rem] text-white font-extrabold opacity-5;
}
</style>
