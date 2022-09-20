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
            </div>
            <div class="css-card card">
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
            </div>
            <div class="js-card card">
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
