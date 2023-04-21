<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { usePromiseTimeout } from "@composables/usePromiseTimeout";
import { useSequencer } from "@composables/useSequencer";

const pageTitle = ref<string>("Meus Serviços");
const pageDelay = ref<number>(500);
const typewriterLetters = ref<string[]>([]);
const typewriterSpeed = ref<number>(80);
const showContent = ref<boolean>(false);

const startType = () => {
  const promiseMap = [];
  const letters = pageTitle.value.split("");

  letters.map((letter) =>
    promiseMap.push(
      async () => await usePromiseTimeout(typewriterSpeed.value, letter)
    )
  );

  useSequencer(promiseMap, (el) => typewriterLetters.value.push(el));
};

const rotateElement = (event, element, idx) => {
  const rotateLimit = 25; // 45
  // get mouse position
  const x = event.clientX;
  const y = event.clientY;

  const elemCoordinates = element.getBoundingClientRect();

  // find the middle based on the element
  const middleX = elemCoordinates.x + elemCoordinates.width / 2; // window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // get offset from middle as a percentage
  // and tone it down a little
  const offsetX = ((x - middleX) / (middleX / (idx + 1))) * rotateLimit;
  const offsetY = ((y - middleY) / middleY) * rotateLimit;

  const xVal = Math.min(Math.max(offsetX, -rotateLimit), rotateLimit);
  const yVal = Math.min(Math.max(offsetY, -rotateLimit), rotateLimit);

  // set rotation
  element.style.setProperty("--rotateX", xVal + "deg");
  element.style.setProperty("--rotateY", -1 * yVal + "deg");
};

onMounted(async () => {
  const cards = document.querySelectorAll(".card_3d");
  const servicesContainer = document.querySelector(".services_container");
  const typewriterDelay =
    pageDelay.value + typewriterSpeed.value * pageTitle.value.length + 700;

  servicesContainer.addEventListener("mousemove", (e) =>
    cards.forEach((card, idx) => rotateElement(e, card, idx))
  );

  setTimeout(() => startType(), pageDelay.value);
  await usePromiseTimeout(typewriterDelay);

  showContent.value = true;
});
</script>

<template>
  <section class="services_container">
    <div class="typewriter_text" :class="{ typewriter_focus: !showContent }">
      <p>
        <span v-for="(letter, idx) in typewriterLetters" :key="letter + idx">
          {{ letter }}
        </span>
      </p>
      <span class="typewriter_cursor">&nbsp;</span>
    </div>

    <div class="cards_container" :class="{ hide_cards: !showContent }">
      <div class="card_3d">
        <div class="card_wrapper">
          <span>Design</span>
        </div>

        <div class="card_content">
          <p>
            Planejamento e criação de layouts de websites, livre de erros, tendo
            a mesma visibilidade em diferentes sistemas operacionais e
            navegadores.
          </p>
        </div>
      </div>

      <div class="card_3d">
        <div class="card_wrapper">
          <span>Code</span>
        </div>

        <div class="card_content">
          <p>
            Desenvolvimento de websites e webapps responsivos, landingpages,
            sites dinâmicos, boas praticas de otimização, usabilidade, SEO,
            semântica e manutenções em geral.
          </p>
        </div>
      </div>

      <div class="card_3d">
        <div class="card_wrapper">
          <span>Deploy</span>
        </div>

        <div class="card_content">
          <p>
            Desenvolvimento de aplicações e sistemas para web desde sua
            concepção, integração com API, planejamento e produção até sua
            implantação e controle.
          </p>
        </div>
      </div>
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
  @apply top-1/2 scale-[5];
}

.typewriter_cursor {
  @apply w-[.01rem] bg-white animate-[blink_.8s_ease-in-out_infinite];
}

.cards_container {
  @apply w-3/4 h-full grid grid-cols-3 gap-24 place-items-center text-white z-10;
  @apply transition-transform duration-300;
}

.hide_cards {
  @apply translate-y-[100%];
}

.card_3d {
  @apply p-4 relative w-full;
}

.card_wrapper {
  @apply relative -z-[1] text-white pointer-events-none text-[4rem] leading-normal;
  @apply font-bold p-8 rounded-2xl bg-[#0a0f1acc] preserve-3d;
  @apply card-3d-[5000px_0_0_var(--rotateX)_var(--rotateY)] text-shadow-[0_0_0.3em_currentColor];

  /* shadow */
  @apply before:content-[""] before:absolute  before:rounded-[inherit] before:opacity-50;
  @apply before:bg-black -z-[1] before:inset-3 before:-layer-pos-[50px] before:blur-lg;

  /* gradient thingy */
  @apply after:content-[""] after:absolute after:rounded-[inherit] after:-inset-4 after:-z-[2];
  @apply after:-layer-pos-[50px] after:bg-[linear-gradient(120deg,#42b883,#35495e)];
}

.card_wrapper span {
  @apply flex justify-center;
}

.card_3d:hover .card_wrapper {
  @apply transition-[transform] duration-200 card-3d-[5000px_50px_0_0_45deg];
}

.card_content {
  @apply pointer-events-none overflow-hidden opacity-0 absolute -left-[10%] -z-[1];
  @apply transition-all duration-300 text-white text-base font-bold rounded-2xl;
  @apply p-6 min-w-[120%] max-h-[100%] bg-[#fff3] backdrop-blur card-3d-[5000px_0_0_0_80deg];
}

.card_3d:hover .card_content {
  @apply opacity-100 card-3d-[5000px_-125%_1000px_0_0];
}
</style>
