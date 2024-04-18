<script>
import '@mjakupi/vue-marquee/dist/style.css'
import Vue3Marquee from "vue3-marquee";

export default {
  name: 'HeroComponent',
  components: Vue3Marquee,
  data() {
    return {
      isTooltipOpen: false,
    };
  },
  methods: {
    toggleTooltip() {
      this.isTooltipOpen = !this.isTooltipOpen;
    },
  },
}
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col align- lg:flex-row-reverse">
      <h1 class="logo-heading-reversed">MP Group</h1>
      <img src="../assets/images/model.jpg" class="animate__animated animate__fadeIn max-w-sm rounded-lg shadow-2xl hero-img" />
      <div>
        <div class="row-auto">
          <h1 class="logo-heading">MP Group</h1>
          <h1 class="animate__animated animate__fadeIn text-left text-5xl font-bold hero-heading"><span class="accent">/// </span>МЕЖДУНАРОДНОЕ СТРИМИНГОВОЕ И МОДЕЛЬНОЕ АГЕНТСТВО</h1>
          <p class="py-6 animate__animated animate__fadeIn offers">ВАКАНСИИ: Стример <span class="accent"> / </span>Скаут<span class="accent"> / </span>Рекрутер<span class="accent"> / </span>Агент<span class="accent"> / </span> Модель</p>
          <button class="btn btn-outline btn-accent btn-offer animate__animated animate__fadeIn" onclick="modal.showModal()">Записаться на собеседование</button>
          <div class="tooltip tooltip-accent tooltip-left" data-tip="Мы ищем новые лица! Заполняй анкету и становись частью чего-то большего! До встречи на собеседовании!">
            <button class="btn btn-accent btn-question" @click="toggleTooltip">?</button>
          </div>
        </div>
      </div>
    </div>
    <Vue3Marquee
        :clone=true
        class="marquee-text"
    >
      <h1> МЕЖДУНАРОДНОЕ МОДЕЛЬНОЕ АГЕНТСТВО <span class="text-white">//</span> </h1>
      <h1> ВЕДЕНИЕ СТРИМОВ <span class="text-white">//</span> </h1>
    </Vue3Marquee>
  </div>
<!--  <div class="lightleak">-->
<!--    <img class="lightleak-image" src="../assets/images/lightleak.png" height="168" width="600"/>-->
<!--  </div>-->
</template>

<style scoped>
@media (max-width: 575.98px) {
  .hero-heading {
    font-size: 1.6rem!important;
  }
  .hero {
    padding-bottom: 5rem!important;
  }
  .hero-img {
    width: 70%!important;
    margin-top: 8rem!important;
  }
}
.hero-heading {
  text-transform: uppercase;
}
.hero {
  background-image: url("../assets/images/bg.png");
  background-color: #131313;
  z-index: 1;
  position: relative;
}
.lightleak {
  position: absolute;
  z-index: 2;
  bottom: -9vh;
  width: 100%;
}
.lightleak-image {
  width: 30%;
  animation: yoyoMove 10s ease-in-out infinite;
  opacity: 20%;
}
@keyframes yoyoMove {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-30vw); /* Меняйте это значение, чтобы контролировать дальность движения */
  }
}
.marquee-text {
  margin-right: 2rem;
  font-size: 1rem;
  background-color: oklch(0.723603 0.176218 350.048739);
  padding: 1rem;
  color: black;
  overflow: hidden;
  left: 0;
  position: absolute;
  bottom: 0;
}
.btn-offer {
  text-transform: uppercase;
  border-radius: 30px;
  background-color: #131313;
  box-shadow: 11px 10px 93px 0px rgba(161,106,234,0.3),
  -44px 15px 57px -24px rgba(49,34,172,0.22);
}
.accent {
  color: oklch(0.723603 0.176218 350.048739);
}
.offers {
  text-transform: uppercase;
}
.logo-heading {
  font-weight: 900;
  font-size: 4rem;
  color: transparent;
  -webkit-text-stroke: 1px #797979;
  transform:rotate(-90deg);
  top: 13rem;
  position: absolute;
  left: -12rem;
  text-transform: uppercase;
  z-index: -1;
}
.logo-heading-reversed {
  font-weight: 900;
  font-size: 4rem;
  color: transparent;
  -webkit-text-stroke: 1px #797979;
  transform:rotate(90deg);
  bottom: 17rem;
  position: absolute;
  right: -12rem;
  text-transform: uppercase;
  z-index: -1;
}
.btn-question {
  border-radius: 50%;
  color: white;
  padding: 1.15rem;
  margin-left: 1rem;
}
.tooltip-accent {
  border-radius: 16px!important;
  color: white;
}
</style>