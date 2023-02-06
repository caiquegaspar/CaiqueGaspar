<script lang="ts" setup>
import type { SkillsInterface } from "types/skills.interface";

import SkillCard from "components/SkillCard.vue";
import ArrowIcon from "icons/ArrowIcon.vue";
import HtmlIcon from "icons/HtmlIcon.vue";
import CssIcon from "icons/CssIcon.vue";
import JsIcon from "icons/JsIcon.vue";
import TsIcon from "icons/TsIcon.vue";
import VueIcon from "icons/VueIcon.vue";
import NodeIcon from "icons/NodeIcon.vue";
import PostGresIcon from "icons/PostGresIcon.vue";
import ExpressIcon from "icons/ExpressIcon.vue";
import GraphQlIcon from "icons/GraphQlIcon.vue";

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

        <!-- <p>
          Estou sempre atento ao mercado e lendo sobre as áreas envolvidas com
          meu dia a dia, incorporando novas tecnologias e métodos conforme as
          necessidades minhas e dos projetos.
        </p> -->

        <div class="skill-cards">
          <SkillCard v-bind="fundamentalsSkills">
            <template #card-icons>
              <CssIcon />
              <HtmlIcon />
              <JsIcon />
            </template>
          </SkillCard>

          <SkillCard v-bind="frontEndSkills">
            <template #card-icons>
              <VueIcon />
              <NodeIcon />
              <TsIcon />
            </template>
          </SkillCard>

          <SkillCard v-bind="backEndSkills">
            <template #card-icons>
              <GraphQlIcon />
              <ExpressIcon />
              <PostGresIcon />
            </template>
          </SkillCard>
        </div>

        <!-- <a
          class="fas fa-chevron-left arrow-left arrow"
          onclick="goPrevCard(event.target)"
        ></a> -->

        <!-- <div class="skill-cards slide-container">
          <div class="slide-cards slide"> -->
        <!-- <div class="html-card card">
              <div class="skill-card">
                <div class="skill-card__header">
                  <img
                    class="skill-card__icon"
                    src="./images/html5.svg"
                    alt="HTML5 Logo"
                  />
                </div>
                <section class="skill-card__body">
                  <h2 class="skill-card__title">html</h2>
                  <span class="skill-card__duration"
                    >2 anos de experiência</span
                  >
                  <ul class="skill-card__knowledge">
                    <li>HTML5</li>
                    <li>Semântica</li>
                    <li>SVG</li>
                    <li>Acessibilidade</li>
                  </ul>
                </section>
              </div>
            </div> -->
        <!-- <div class="css-card card">
              <div class="skill-card">
                <div class="skill-card__header">
                  <img
                    class="skill-card__icon"
                    src="./images/css3.svg"
                    alt="HTML5 Logo"
                  />
                </div>
                <section class="skill-card__body">
                  <h2 class="skill-card__title">css</h2>
                  <span class="skill-card__duration"
                    >2 anos de experiência</span
                  >
                  <ul class="skill-card__knowledge">
                    <li>CSS3</li>
                    <li>Semântica</li>
                    <li>Pré-processadores</li>
                    <li>Responsividade</li>
                  </ul>
                </section>
              </div>
            </div> -->
        <!-- <div class="js-card card">
              <div class="skill-card">
                <div class="skill-card__header">
                  <img
                    class="skill-card__icon"
                    src="./images/javascript.svg"
                    alt="HTML5 Logo"
                  />
                </div>
                <section class="skill-card__body">
                  <h2 class="skill-card__title">javascript</h2>
                  <span class="skill-card__duration"
                    >2 anos de experiência</span
                  >
                  <ul class="skill-card__knowledge">
                    <li>ECMAScript 6</li>
                    <li>Semântica</li>
                    <li>Vue.Js</li>
                  </ul>
                </section>
              </div>
            </div> -->
        <!-- </div>
        </div> -->

        <!-- <a
          class="fas fa-chevron-right arrow-right arrow"
          onclick="goNextCard(event.target)"
        ></a> -->
      </div>
    </div>

    <ArrowIcon class="arrow_down" />
  </section>
</template>

<style scoped>
section {
  @apply font-['Raleway',sans-serif] relative h-screen max-h-screen w-full;
  @apply bg-cover overflow-hidden flex flex-col items-center bg-about;
  @apply lg:flex-row-reverse;
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
  @apply group-hover:-translate-y-[23%];
}

[data-anime="left"] .title {
  @apply group-hover:-translate-y-[32%];
}

:is(.about_container, .skills_container) {
  @apply h-1/2 w-screen flex flex-col justify-center items-center relative;
  @apply transition-all duration-[.7s] ease-[cubic-bezier(0.55,0,0.1,1)] overflow-hidden;
  @apply hover:w-full hover:h-[150%] lg:w-1/2 lg:h-screen lg:hover:h-full;
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
  @apply absolute left-0 right-0 bottom-2 ml-auto mr-auto animate-bounce;
  @apply p-2 w-10 h-10 shadow-lg rounded-full bg-[#fff];
}

.skill-cards {
  @apply flex justify-evenly gap-4 transition-all duration-1000 opacity-0 -translate-x-[200%];
  @apply group-hover:opacity-100 group-hover:translate-x-0 w-full;
}

/* .skills_container:hover .container_content .arrow {
  opacity: 1;
  transform: translateX(0);
}

.skill-cards {
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: all 1s;
  transform: translateX(-200%);
}

.skill-cards .slide-cards {
  display: flex;
  justify-content: center;
  transition: 0.5s;
  transform: translateX(0);
}

.skill-card {
  top: 180px;
  left: 120px;
  padding: 20px;
  width: 13em;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  margin: 10px;
}

.css-card {
  left: 50%;
}

.container_content .arrow {
  position: absolute;
  font-size: 90px;
  color: #fff;
  cursor: pointer;
  z-index: 2;
  display: none !important;
  opacity: 0;
  transition: all 1s;
  transform: translateX(-500%);
}

.container_content .arrow-left {
  left: 0;
  top: 50%;
}

.container_content .arrow-right {
  right: 0;
  top: 50%;
}

.skill-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.skill-card:hover .skill-card__header {
  height: 55px;
}

.skill-card:hover .skill-card__header .skill-card__icon {
  transform: translateX(-50%) translateY(-50%) scale(3);
}

.skill-card:hover .skill-card__body {
  height: 170px;
}

.skill-card:hover .skill-card__body .skill-card__knowledge li {
  transform: translateX(0);
  transition-timing-function: cubic-bezier(0, 1.5, 1, 1);
  transition-duration: 0.5s;
}

.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(1) {
  transition-delay: 0.25s;
}

.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(2) {
  transition-delay: 0.5s;
}

.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(3) {
  transition-delay: 0.75s;
}

.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(4) {
  transition-delay: 1s;
}

.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(5) {
  transition-delay: 1.25s;
}

.skill-card:hover .skill-card__body .skill-card__knowledge li:nth-child(6) {
  transition-delay: 1.5s;
}

.skill-card .skill-card__header {
  position: relative;
  height: 170px;
  margin: -20px -20px 20px -20px;
  transition: height 0.5s;
  overflow: hidden;
}

.html-card .skill-card__header {
  background-color: #eb6c3f;
}

.css-card .skill-card__header {
  background-color: #28a4d8;
}

.js-card .skill-card__header {
  background-color: #ffe161;
}

.skill-card .skill-card__header .skill-card__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  display: block;
  width: 128px;
  height: 128px;
  transition: transform 0.5s;
}

.js-card .skill-card .skill-card__header .skill-card__icon {
  width: 105px;
  height: 105px;
}

.skill-card .skill-card__body {
  height: 28px;
  transition: height 0.5s;
  overflow: hidden;
}

.skill-card .skill-card__body .skill-card__title {
  font-size: 1.4em;
  font-weight: 600;
  text-transform: uppercase;
}

.skill-card .skill-card__body .skill-card__duration {
  color: #9e9e9e;
  font-style: italic;
}

.skill-card .skill-card__body .skill-card__knowledge {
  margin-top: 10px;
  color: #424242;
}

.skill-card .skill-card__body .skill-card__knowledge li {
  margin-top: 5px;
  transition-duration: 0;
  transition-delay: 0.5s;
  transform: translateX(-100%);
}

@media (max-width: 850px) {

  .skill-card {
    margin: 0;
  }

  .skill-cards .slide-cards {
    transform: translateX(208px);
  }

  .skill-cards {
    overflow: hidden;
    width: 208px;
  }

  .container_content .arrow-left {
    display: inline-block !important;
  }

  .container_content .arrow-right {
    display: inline-block !important;
  }
} */
</style>
