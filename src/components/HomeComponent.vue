<script lang="ts" setup>
import { ref } from "vue";

import TerminalIcon from "@icons/TerminalIcon.vue";

const emit = defineEmits<{ (e: "changeSection", val: string): void }>();

const expandSideBar = ref(false);

const changeSection = () => emit("changeSection", "next");
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
            otimizadas para SEO.
          </p>

          <button class="intro_btn" @click="changeSection">
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
            <button style="--i: 0.05s">Home</button>
          </li>
          <li>
            <button style="--i: 0.1s">Sobre</button>
          </li>
          <li>
            <button style="--i: 0.15s">Serviços</button>
          </li>
          <li>
            <button style="--i: 0.2s">Contato</button>
          </li>
        </ul>
      </nav>
    </aside>
  </section>
</template>

<style scoped>
section {
  @apply relative h-screen w-screen bg-white bg-cover;
  @apply overflow-hidden bg-home-gradient preserve-3d;
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
  @apply w-8 h-[2px] rounded bg-[#fff] transition duration-500;
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
  @apply text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-5 w-[70%] lg:w-[80%];
}

.title span {
  @apply text-[#42b883];
}

.description {
  @apply my-3 w-2/5 lg:w-3/5 text-lg lg:text-2xl;
}

.intro_btn {
  @apply bg-[#42b883] mt-4 py-2 px-7 rounded-3xl uppercase font-[600];
}

.links {
  @apply absolute w-[41%] sm:w-[36%] md:w-[30%] h-screen flex justify-start items-center right-0 top-0;
}

.links button {
  @apply animate-[hide_.5s_forwards_ease] text-[#fff] my-3 uppercase font-[500] text-[1.8rem];
  @apply transition duration-300 translate-y-[10px] opacity-0 tracking-wider;
}

.links button.active {
  @apply text-[#42b883];
}

.links button:hover {
  @apply text-[#42b883];
}

section.active .links button {
  @apply animate-[appear_.5s_forwards_ease_var(--i)];
}

.shadow {
  @apply absolute w-full h-full top-0 left-0 origin-left;
  @apply bg-[#fff] overflow-hidden transition duration-500;
}

.shadow.one {
  @apply -z-[1] opacity-[.15];
}

.shadow.two {
  @apply -z-[2] opacity-[.1];
}

section.active .intro_container {
  @apply perspective-[1300px] rotate-y-[40deg] md:rotate-y-[20deg] translate-y-[10px] scale-[.5];
  @apply translate-z-[100px] sm:translate-z-[150px] md:translate-z-[310px];
}

section.active .shadow.one {
  @apply perspective-[1300px] rotate-y-[40deg] md:rotate-y-[20deg] translate-y-[10px] scale-[.5];
  @apply translate-z-[70px] sm:translate-z-[115px] md:translate-z-[215px] animate-[shadow-one_.6s_ease-out];
}

section.active .shadow.two {
  @apply perspective-[1300px] rotate-y-[40deg] md:rotate-y-[20deg] translate-y-[10px] scale-[.5];
  @apply translate-z-[40px] sm:translate-z-[80px] md:translate-z-[120px] animate-[shadow-two_.6s_ease-in];
}

section.active .intro_container:hover + .shadow.one {
  @apply perspective-[1300px] rotate-y-[40deg] md:rotate-y-[20deg] translate-y-[10px] scale-[.5];
  @apply translate-z-[80px] sm:translate-z-[125px] md:translate-z-[230px];
}

section.active .intro_container:hover {
  @apply perspective-[1300px] rotate-y-[40deg] md:rotate-y-[20deg] translate-y-[10px] scale-[.5];
  @apply translate-z-[110px] sm:translate-z-[160px] md:translate-z-[340px];
}

/* animations that change based on viewport */

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

@media (min-width: 640px) {
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

@media (min-width: 768px) {
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
      --tw-rotate-y: 20deg;
    }
  }
}
</style>
