<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  const pre = document.querySelector("pre");

  document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
  });

  function rotateElement(event, element) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
    // console.log(x, y)

    // find the middle
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;
    // console.log(middleX, middleY)

    // get offset from middle as a percentage
    // and tone it down a little
    const offsetX = ((x - middleX) / middleX) * 45;
    const offsetY = ((y - middleY) / middleY) * 45;
    // console.log(offsetX, offsetY);

    // set rotation
    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", -1 * offsetY + "deg");
  }
});
</script>

<template>
  <section>
    <h1 class="text_services"></h1>
    <div class="container_services" id="container_services" data-anime="bottom">
      <a
        class="fas fa-chevron-left arrow-left arrow"
        onclick="goPrevCard(event.target)"
      ></a>
      <div class="cards_services slide-container">
        <div class="slide-cards slide">
          <div class="card_services card">
            <div class="face face1">
              <div class="content_services">
                <img src="./images/design_128.png" />
                <h3>Design</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Planejamento e criação de layouts de websites, livre de erros,
                  tendo a mesma visibilidade em diferentes sistemas operacionais
                  e navegadores.
                </p>
              </div>
            </div>
          </div>

          <div class="card_services card">
            <div class="face face1">
              <div class="content_services">
                <img src="./images/code_128.png" />
                <h3>Código</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Desenvolvimento de websites e webapps com HTML, CSS e
                  JavaScript responsivos, landingpages, sites dinâmicos, boas
                  praticas de otimização, usabilidade, SEO, semântica e
                  manutenções em geral.
                </p>
              </div>
            </div>
          </div>

          <div class="card_services card">
            <div class="face face1">
              <div class="content_services">
                <img src="./images/launch_128.png" />
                <h3>Lançamento</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  Desenvolvimento de aplicações e sistemas para web desde sua
                  concepção, integração com API, planejamento e produção até sua
                  implantação e controle.
                </p>
              </div>
            </div>
          </div>
          <div class="pre-container">
            <pre
              contenteditable
              class="language-css"
              tabindex="0"
            ><code class="language-css"><span class="token selector">.awesome-layouts</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span></code></pre>
          </div>
        </div>
      </div>
      <a
        class="fas fa-chevron-right arrow-right arrow"
        onclick="goNextCard(event.target)"
      ></a>
    </div>
    <div class="arrow-pulse-down"><i class="fas fa-arrow-down"></i></div>
  </section>
</template>

<style scoped>
section {
  @apply relative h-screen w-screen bg-white overflow-hidden;
  @apply flex flex-col justify-center;
  background: linear-gradient(135deg, transparent 0%, #131414 80%, #000000 100%),
    url("../images/7.jpg") center center no-repeat;
  background-size: cover;
  align-items: center !important;
}

.container_services {
  align-items: center;
  font-family: "Raleway", sans-serif;
  width: 70vw;
  position: relative;
  display: flex;
  justify-content: space-around;
}

.cards_services {
  display: flex;
  justify-content: center;
}

.cards_services .slide-cards {
  display: flex;
  justify-content: center;
  transition: 0.5s;
  transform: translateX(0);
}

.card_services {
  position: relative;
  cursor: pointer;
  margin: 0.4%;
}

.container_services .arrow {
  position: absolute;
  font-size: 90px;
  color: #fff;
  cursor: pointer;
  z-index: 2;
  display: none !important;
}

.container_services .arrow-left {
  left: -55px;
}

.container_services .arrow-right {
  right: -55px;
}

.card_services .face {
  width: 300px;
  height: 200px;
  transition: 0.5s;
}

.card_services .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.card_services:hover .face.face1 {
  background: #e20f2f;
  transform: translateY(0);
}

.card_services .face.face1 .content {
  opacity: 0.2;
  transition: 0.5s;
}

.card_services:hover .face.face1 .content {
  opacity: 1;
}

.card_services .face.face1 .content img {
  max-width: 100px;
}

.card_services .face.face1 .content_services h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.3em;
}

.card_services .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
}

.card_services:hover .face.face2 {
  transform: translateY(0);
}

.card_services .face.face2 .content p {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  color: #000;
  font-size: 15px;
}

.text_services {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 40px;
  max-width: 480px;
  text-align: center;
  margin: 15px 0 60px 0;
  color: #fff;
  opacity: 1;
  height: 0;
}

.letterHidden {
  opacity: 0;
  visibility: hidden;
}

.letterVisible {
  visibility: visible;
  transition: 1s;
}

@media (max-width: 1100px) {
  .card_services .face {
    width: 250px;
  }

  .card_services {
    margin: 0;
  }

  .cards_services .slide-cards {
    transform: translateX(250px);
  }

  .cards_services {
    overflow: hidden;
    width: 250px;
  }

  .container_services .arrow-left {
    display: inline-block !important;
  }

  .container_services .arrow-right {
    display: inline-block !important;
  }
}

:root {
  --pink: hsl(338, 70%, 55%);
  --teal: hsl(183, 70%, 62%);
  --white: hsl(334, 7%, 95%);
}

pre {
  --selector: var(--pink);
  --property: var(--teal);
  --punctuation: var(--white);
  --undefined: var(--white);
  font-size: 3rem;
  font-weight: bold;
  color: var(--undefined);
  background: #0a0f1a;
  padding: 2rem;
  border-radius: 1rem;
  position: relative;
  transform-style: preserve-3d;
  transform: perspective(5000px) rotateY(var(--rotateX)) rotateX(var(--rotateY));
}

pre > * {
  text-shadow: 0 0 0.3em currentColor;
}

pre::before,
pre::after {
  content: "";
  position: absolute;
  border-radius: inherit;
}

/* shadow */
pre::before {
  inset: 0.75rem;
  border-radius: inherit;
  background: black;
  z-index: -1;
  transform: translateZ(-50px);
  filter: blur(15px);
  opacity: 0.5;
}

/* gradient thingy */
pre::after {
  z-index: -2;
  inset: -1rem;
  background: linear-gradient(-45deg, red, blue);
  transform: translateZ(-50px);
}

.selector {
  color: var(--selector);
}

.property {
  color: var(--property);
}

.punctuation {
  color: var(--punctuation);
}

.property + .punctuation {
  color: var(--property);
}

.pre-container {
  /* position: relative;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr); */
  color: #fff;
}
</style>
