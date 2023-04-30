<script lang="ts" setup>
import { ref } from "vue";

import type { SkillsInterface } from "@types/skills.interface";

import SkillCard from "@components/SkillCard.vue";
import ArrowIcon from "@icons/ArrowIcon.vue";
import HtmlIcon from "@icons/HtmlIcon.vue";
import CssIcon from "@icons/CssIcon.vue";
import JsIcon from "@icons/JsIcon.vue";
import TsIcon from "@icons/TsIcon.vue";
import VueIcon from "@icons/VueIcon.vue";
import NodeIcon from "@icons/NodeIcon.vue";
import PostGresIcon from "@icons/PostGresIcon.vue";
import ExpressIcon from "@icons/ExpressIcon.vue";
import GraphQlIcon from "@icons/GraphQlIcon.vue";
import DirectionIcon from "@icons/DirectionIcon.vue";

const fundamentalsSkills: SkillsInterface = {
  title: "Fundamentos",
  skills: [
    { name: "html5", xp: "3 anos", color: "#ff6d00" },
    { name: "css3", xp: "3 anos", color: "#039be5" },
    { name: "javascript", xp: "3 anos", color: "#fdd83c" },
  ],
};
const frontEndSkills: SkillsInterface = {
  title: "Front End",
  skills: [
    { name: "node", xp: "2 anos", color: "#83cd29" },
    { name: "vue", xp: "2 anos e meio", color: "#41b883" },
    { name: "typescript", xp: "2 anos", color: "#3178c6" },
  ],
};
const backEndSkills: SkillsInterface = {
  title: "Back End",
  skills: [
    { name: "express", xp: "1 ano e meio", color: "#000" },
    { name: "graphql", xp: "1 ano e meio", color: "#E535AB" },
    { name: "postgressql", xp: "1 ano", color: "#336791" },
  ],
};

const activeCard = ref<number>(0);

const goToPrevious = () =>
  (activeCard.value = Math.min(Math.max(--activeCard.value, 0), 2));

const goToNext = () =>
  (activeCard.value = Math.min(Math.max(++activeCard.value, 0), 2));
</script>

<template>
  <section>
    <div class="about_container group">
      <div class="container_content" data-anime="right">
        <h2 class="title">Sobre Mim</h2>

        <p>
          Meu nome é Caíque Gaspar, sou um Programador Front-End (web e mobile)
          situado na capital de São Paulo. Trabalho desde 2020 no
          desenvolvimento para internet me focando na construção de interfaces.
          <br />
          Estou sempre atento ao mercado e lendo sobre as áreas envolvidas com
          meu dia a dia, incorporando novas tecnologias e métodos conforme as
          necessidades minhas e dos projetos.
          <br />
          Atualmente realizo trabalhos de construção de sites para agências de
          internet.
          <br />
          Gosto de usar boas práticas de código, SEO, UI/UX design nas minhas
          aplicações.
        </p>
      </div>
    </div>

    <div class="skills_container group">
      <div class="container_content" id="container_content" data-anime="left">
        <h2 class="title">Conhecimento</h2>

        <div class="carousel_cards">
          <div class="skill-cards">
            <SkillCard
              v-bind="fundamentalsSkills"
              :class="{ active_card: activeCard === 0 }"
            >
              <template #card-icons>
                <CssIcon />
                <HtmlIcon />
                <JsIcon />
              </template>
            </SkillCard>

            <SkillCard
              v-bind="frontEndSkills"
              :class="{ active_card: activeCard === 1 }"
            >
              <template #card-icons>
                <VueIcon />
                <NodeIcon />
                <TsIcon />
              </template>
            </SkillCard>

            <SkillCard
              v-bind="backEndSkills"
              :class="{ active_card: activeCard === 2 }"
            >
              <template #card-icons>
                <GraphQlIcon />
                <ExpressIcon />
                <PostGresIcon />
              </template>
            </SkillCard>
          </div>

          <div class="carousel_arrows">
            <button class="arrow_left">
              <DirectionIcon width="120" :rotate="90" @click="goToPrevious" />
            </button>
            <button class="arrow_right">
              <DirectionIcon width="120" :rotate="270" @click="goToNext" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <ArrowIcon class="arrow_down" />
  </section>
</template>

<style scoped>
section {
  @apply relative h-screen w-screen bg-white overflow-hidden;
  @apply flex flex-col items-center bg-about xl:flex-row-reverse;
}

p {
  @apply opacity-0 text-[#fff] transition-all duration-[.75s] text-base;
  @apply font-semibold group-hover:opacity-100;
}

.title {
  @apply w-full h-full text-[#fff] transition-all duration-[.75s];
  @apply text-5xl absolute flex justify-center items-center;
  @apply group-hover:text-4xl;
}

[data-anime="right"] .title {
  @apply group-hover:-translate-y-[33%] xl:group-hover:-translate-y-[25%];
}

[data-anime="left"] .title {
  @apply group-hover:-translate-y-[41%] xl:group-hover:-translate-y-[33%];
}

:is(.about_container, .skills_container) {
  @apply h-1/2 w-screen flex flex-col justify-center items-center relative;
  @apply transition-all duration-[.7s] ease-[cubic-bezier(0.55,0,0.1,1)] overflow-hidden;
  @apply hover:w-[100%] hover:h-[300%] xl:w-1/2 xl:h-screen xl:hover:h-full;
}

.about_container {
  @apply bg-[rgba(66,184,131,0.6)] text-right;
}

.skills_container {
  @apply bg-[rgba(0,0,0,0.5)];
}

.container_content {
  @apply w-full flex flex-col justify-evenly items-center;
}

.container_content p {
  @apply w-80 sm:w-96 md:w-[40rem];
}

.arrow_down {
  @apply absolute left-auto xl:left-0 right-3 xl:right-0 bottom-2 ml-auto;
  @apply mr-auto animate-bounce p-2 w-10 h-10 shadow-lg rounded-full bg-[#fff];
}

.carousel_cards {
  @apply relative w-[280px] xl:w-full;
}

.skill-cards {
  @apply grid grid-flow-col auto-cols-[100%] xl:auto-cols-auto w-full;
  @apply transition-all duration-700 opacity-0 xl:justify-evenly;
  @apply -translate-x-[200%] group-hover:opacity-100 group-hover:translate-x-0;
}

.skill-cards > * {
  @apply scale-75 opacity-50 pointer-events-none transition-all duration-300;
  @apply xl:scale-100 xl:opacity-100 xl:pointer-events-auto;
  @apply -translate-x-[calc(v-bind(activeCard)*280px)] xl:-translate-x-[0];
}

.active_card {
  @apply scale-100 opacity-100 pointer-events-auto;
}

.carousel_arrows :is(.arrow_left, .arrow_right) {
  @apply absolute top-0 bottom-0 xl:hidden opacity-0;
  @apply transition-all duration-300 group-hover:opacity-100;
}

.arrow_left {
  @apply -left-28;
}

.arrow_right {
  @apply -right-28;
}
</style>
