<script lang="ts" setup></script>

<template>
  <section
    class="section container1 info-section"
    id="container1"
    data-anchor="1"
  >
    <div class="about">
      <div class="about-texts" data-anime="right">
        <h2 class="about-title">Sobre Mim</h2>
        <p>
          Meu nome é Caíque Gaspar, sou um Programador Front-End (web e mobile)
          situado na capital de São Paulo. Trabalho desde 2019 no
          desenvolvimento para internet me focando na construção de interfaces.
          <br />
          Atualmente realizo trabalhos de construção de sites para agências de
          internet.
          <br />
          Gosto de usar boas práticas de código, SEO, UI/UX design nas minhas
          aplicações.
        </p>
      </div>
    </div>
    <div class="skills">
      <div class="skills-info" id="skills-info" data-anime="left">
        <h2 class="skills-title">Conhecimento</h2>
        <p>
          Estou sempre atento ao mercado e lendo sobre as áreas envolvidas com
          meu dia a dia, incorporando novas tecnologias e métodos conforme as
          necessidades minhas e dos projetos.
        </p>
        <a
          class="fas fa-chevron-left arrow-left arrow"
          onclick="goPrevCard(event.target)"
        ></a>
        <div class="skill-cards slide-container">
          <div class="slide-cards slide">
            <div class="html-card card">
              <div class="skill-card">
                <div class="skill-card__header">
                  <!-- <img
                    class="skill-card__icon"
                    src="./images/html5.svg"
                    alt="HTML5 Logo"
                  /> -->
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
            </div>
            <div class="css-card card">
              <div class="skill-card">
                <div class="skill-card__header">
                  <!-- <img
                    class="skill-card__icon"
                    src="./images/css3.svg"
                    alt="HTML5 Logo"
                  /> -->
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
            </div>
            <div class="js-card card">
              <div class="skill-card">
                <div class="skill-card__header">
                  <!-- <img
                    class="skill-card__icon"
                    src="./images/javascript.svg"
                    alt="HTML5 Logo"
                  /> -->
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
            </div>
          </div>
        </div>
        <a
          class="fas fa-chevron-right arrow-right arrow"
          onclick="goNextCard(event.target)"
        ></a>
      </div>
    </div>
    <div class="arrow-pulse-down"><i class="fas fa-arrow-down"></i></div>
  </section>
</template>

<style scoped>
.container1 {
  /* background: url("../images/5.png") bottom center no-repeat fixed; */
  background-size: cover;
  height: 100vh;
  flex-direction: row-reverse;
  align-items: center;
}

.container1 p {
  opacity: 0;
  transition: all 0.75s;
  color: #fff;
  margin: 0 0 5px 0;
}

.skills-title,
.about-title {
  font-family: "Raleway", sans-serif;
  width: 100%;
  height: 100%;
  font-size: 3em;
  transition: all 0.75s;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: 0;
}

.about {
  text-align: right;
  flex-direction: column;
  display: flex;
  background-color: rgba(255, 0, 0, 0.6);
  height: 100vh;
  width: 50%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.7s cubic-bezier(0.55, 0, 0.1, 1);
}

.skills {
  flex-direction: column;
  display: flex;
  background-color: rgba(0, 0, 1, 0.5);
  height: 100vh;
  width: 50%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.7s cubic-bezier(0.55, 0, 0.1, 1);
}

.about:hover,
.skills:hover {
  width: 100%;
  height: 100%;
}

.about:hover p,
.skills:hover p {
  opacity: 1;
}

.skills:hover .skills-title {
  font-size: 2em;
  top: -60%;
}

.about:hover .about-title {
  font-size: 2em;
  top: -70%;
}

.skills:hover .skill-cards {
  opacity: 1;
  transform: translateX(0);
}

.skills:hover .skills-info .arrow {
  opacity: 1;
  transform: translateX(0);
}

.skills-info,
.about-texts {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.skills-info .arrow {
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

.skills-info .arrow-left {
  left: 0;
  top: 50%;
}

.skills-info .arrow-right {
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

.container1 .arrow-pulse-down {
  left: 50%;
}

@media (max-width: 1100px) {
  .container1 {
    flex-direction: column;
  }

  .skills,
  .about {
    height: 50%;
    width: 100vw;
  }

  .about:hover,
  .skills:hover {
    height: 150%;
  }
}

@media (max-width: 850px) {
  .skills-info,
  .about-texts {
    width: 380px;
  }

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

  .skills-info .arrow-left {
    display: inline-block !important;
  }

  .skills-info .arrow-right {
    display: inline-block !important;
  }
}

@media (max-width: 480px) {
  .skills-info,
  .about-texts {
    width: 320px;
  }
}
</style>
