<script lang="ts" setup>
import { ref } from "vue";

import TerminalIcon from "icons/TerminalIcon.vue";

const expandSideBar = ref(false);
</script>

<template>
  <section :class="{ active: expandSideBar }">
    <header>
      <TerminalIcon width="25" />
      <h2 class="logo">Dev <span class="text-[#42b883]">Caíque</span></h2>
      <div
        class="hamburger_menu"
        :class="{ expanded: expandSideBar }"
        @click="expandSideBar = !expandSideBar"
      >
        <i class="bar"></i>
        <i class="bar"></i>
        <i class="bar"></i>
      </div>
    </header>

    <main>
      <div class="intro_container">
        <div class="container_content">
          <h1 class="title">
            Desenvolvimento de aplicações <span>web</span> e
            <span>mobile</span>.
          </h1>

          <p class="description">
            Aplicações completas, elegantes, com qualidade de código e
            otimimizadas para o SEO.
          </p>

          <button
            data-to="container1"
            onclick="scrollToIdOnClick(event.target)"
            class="btn"
          >
            Conheça meu trabalho
          </button>
        </div>
      </div>

      <div class="shadow one"></div>
      <div class="shadow two"></div>
    </main>

    <aside>
      <nav class="links">
        <ul>
          <li>
            <a
              data-to="container0"
              onclick="scrollToIdOnClick(event.target)"
              class="linkOption"
              style="--i: 0.05s"
              >Home</a
            >
          </li>
          <li>
            <a
              data-to="container1"
              onclick="scrollToIdOnClick(event.target)"
              class="linkOption"
              style="--i: 0.1s"
              >Sobre</a
            >
          </li>
          <li>
            <a
              data-to="container2"
              onclick="scrollToIdOnClick(event.target)"
              class="linkOption"
              style="--i: 0.15s"
              >Serviços</a
            >
          </li>
          <li>
            <a
              data-to="container3"
              onclick="scrollToIdOnClick(event.target)"
              class="linkOption"
              style="--i: 0.2s"
              >Contato</a
            >
          </li>
        </ul>
      </nav>
    </aside>
  </section>
</template>

<style scoped>
section {
  @apply font-['Raleway',sans-serif] relative h-screen max-h-screen w-full;
  @apply bg-cover overflow-hidden bg-home-gradient preserve-3d;
}

header {
  @apply absolute w-full z-10 flex justify-evenly items-center pt-6;
}

.logo {
  @apply font-[600] tracking-widest uppercase text-3xl text-[#fff];
}

.hamburger_menu {
  @apply flex flex-col cursor-pointer gap-2;
}

.bar {
  @apply w-8 h-[2px] rounded bg-[#eee] transition duration-500;
}

.hamburger_menu.expanded .bar:first-child {
  @apply translate-y-[0.6rem] rotate-[405deg];
}

.hamburger_menu.expanded .bar:nth-child(2) {
  @apply rotate-[360deg] bg-transparent;
}

.hamburger_menu.expanded .bar:last-child {
  @apply -translate-y-[0.6rem] rotate-[315deg];
}

.intro_container {
  @apply origin-left transition duration-500 min-h-screen w-full bg-home-image;
}

.container_content {
  @apply absolute flex flex-col justify-center items-center w-full h-full;
  @apply text-[#fff] top-0 left-0 bg-[#000000bf] text-center;
}

.title {
  @apply text-5xl mb-5;
}

.title span {
  @apply text-[#42b883];
}

.description {
  @apply max-w-2xl my-3 text-2xl;
}

.btn {
  @apply bg-[#42b883] mt-4 py-2 px-7 rounded-3xl uppercase font-[600];
}

section.active .intro_container {
  animation: main-animation 0.5s ease;
  cursor: pointer;
  transform: perspective(1300px) rotateY(20deg) translateY(10px)
    translateZ(310px) scale(0.5);
}

@keyframes main-animation {
  from {
    transform: translate(0);
  }

  to {
    transform: perspective(1300px) rotateY(20deg) translateY(10px)
      translateZ(310px) scale(0.5);
  }
}

.links {
  position: absolute;
  width: 30%;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 2;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
}

.links a {
  text-decoration: none;
  color: #eee;
  margin: 0.7rem 0;
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
  opacity: 0;
  transform: translateY(10px);
  animation: hide 0.5s forwards ease;
  cursor: pointer;
}

.links a.active {
  color: #e20f2f;
}

.links a:hover {
  color: #e20f2f;
}

section.active .links a {
  animation: appear 0.5s forwards ease var(--i);
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes hide {
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(10px);
  }
}

.shadow {
  position: absolute;
  width: 100%;
  height: var(--app-height);
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  transform-origin: left;
  transition: 0.5s;
  background-color: #fff;
  overflow: hidden;
}

.shadow.one {
  z-index: -1;
  opacity: 0.15;
}

.shadow.two {
  z-index: -2;
  opacity: 0.1;
}

section.active .shadow.one {
  animation: shadow-one 0.6s ease-out;
  transform: perspective(1300px) rotateY(20deg) translateY(10px)
    translateZ(215px) scale(0.5);
}

@keyframes shadow-one {
  0% {
    transform: translate(0);
  }

  5% {
    transform: perspective(1300px) rotateY(20deg) translateY(10px)
      translateZ(310px) scale(0.5);
  }

  100% {
    transform: perspective(1300px) rotateY(20deg) translateY(10px)
      translateZ(215px) scale(0.5);
  }
}

section.active .shadow.two {
  animation: shadow-two 0.6s ease-out;
  transform: perspective(1300px) rotateY(20deg) translateY(10px)
    translateZ(120px) scale(0.5);
}

@keyframes shadow-two {
  0% {
    transform: translate(0);
  }

  20% {
    transform: perspective(1300px) rotateY(20deg) translateY(10px)
      translateZ(310px) scale(0.5);
  }

  100% {
    transform: perspective(1300px) rotateY(20deg) translateY(10px)
      translateZ(120px) scale(0.5);
  }
}

section.active .intro_container:hover + .shadow.one {
  transform: perspective(1300px) rotateY(20deg) translateY(10px)
    translateZ(230px) scale(0.5);
}

section.active .intro_container:hover {
  transform: perspective(1300px) rotateY(20deg) translateY(10px)
    translateZ(340px) scale(0.5);
}

@media (max-width: 1100px) {
  .title1 {
    width: 70%;
    font-size: 2rem;
  }

  .description {
    width: 40%;
    font-size: 1rem;
  }
}

@media (max-width: 850px) {
  .links {
    width: 36%;
  }

  section.active .intro_container {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(150px) scale(0.5);
  }

  @keyframes main-animation {
    from {
      transform: translate(0);
    }

    to {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(150px) scale(0.5);
    }
  }

  section.active .intro_container:hover + .shadow.one {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(125px) scale(0.5);
  }

  section.active .intro_container:hover {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(160px) scale(0.5);
  }

  section.active .shadow.one {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(115px) scale(0.5);
  }

  @keyframes shadow-one {
    0% {
      transform: translate(0);
    }

    5% {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(150px) scale(0.5);
    }

    100% {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(115px) scale(0.5);
    }
  }

  section.active .shadow.two {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(80px) scale(0.5);
  }

  @keyframes shadow-two {
    0% {
      transform: translate(0);
    }

    20% {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(150px) scale(0.5);
    }

    100% {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(80px) scale(0.5);
    }
  }
}

@media (max-width: 480px) {
  .links {
    width: 41%;
  }

  section.active .intro_container {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(100px) scale(0.5);
  }

  @keyframes main-animation {
    from {
      transform: translate(0);
    }

    to {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(100px) scale(0.5);
    }
  }

  section.active .intro_container:hover + .shadow.one {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(80px) scale(0.5);
  }

  section.active .intro_container:hover {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(110px) scale(0.5);
  }

  section.active .shadow.one {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(70px) scale(0.5);
  }

  @keyframes shadow-one {
    0% {
      transform: translate(0);
    }

    5% {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(100px) scale(0.5);
    }

    100% {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(70px) scale(0.5);
    }
  }

  section.active .shadow.two {
    transform: perspective(1300px) rotateY(40deg) translateY(10px)
      translateZ(40px) scale(0.5);
  }

  @keyframes shadow-two {
    0% {
      transform: translate(0);
    }

    20% {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(100px) scale(0.5);
    }

    100% {
      transform: perspective(1300px) rotateY(40deg) translateY(10px)
        translateZ(40px) scale(0.5);
    }
  }
}
</style>
