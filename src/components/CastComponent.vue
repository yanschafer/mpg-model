<script>
export default {
  name: "CastComponent"
}
</script>

<template>
  <section class="section p-20">
    <div class="divider divider-accent divider-start animate__animated animate__fadeInDown"><h1 class="heading"><span class="text-accent">//</span> КАСТИНГ</h1><br></div>
    <div class="flex flex-row align-middle justify-center p-10 container-cast">
      <div class="basis-1/2">
        <img class="mail-icon" src="../assets/images/Mail.png"/>
      </div>
      <div class="basis-1/2 flex flex-col justify-center">
        <p>
          Если ты считаешь себя талантливым, уникальным и обладаешь харизмой, не упусти свой шанс — заполняй нашу анкету для участия в кастинге прямо сейчас!<br><br> Мы на поиске новых звезд для стриминга и моделинга, и ты можешь стать одной из них. Забудь о сравнениях и стереотипах красоты или популярности — нас интересует именно твоя индивидуальность!<br><br> Ждем тебя на кастинге, где ты сможешь показать себя и проявить свой талант!
        </p>
        <button class="btn btn-accent btn-offer" onclick="modal.showModal()">ЗАПИСАТЬСЯ</button>
      </div>
    </div>
    <div class="flex flex-row justify-center align-middle row-text">
      <h1 class="logo-heading-hor">MPGroup</h1>
    </div>
    <Vue3Marquee
        :clone=true
        class="marquee-text"
    >
      <h1> МЕЖДУНАРОДНОЕ МОДЕЛЬНОЕ АГЕНТСТВО <span class="text-white">//</span> </h1>
      <h1> ВЕДЕНИЕ СТРИМОВ <span class="text-white">//</span> </h1>
    </Vue3Marquee>
  </section>
</template>

<style scoped>
@media (max-width: 575.98px) {
  .container-cast {
    flex-direction: column!important;
    text-align: center!important;
  }
  .logo-heading-hor {
    font-size: 3rem!important;
  }
  .section {
    padding-bottom: 0!important;
  }
  .heading {
    font-size: 2rem!important;
  }
}
.mail-icon {
  animation: yoyoFlight 2s ease-in-out infinite;
}
.heading {
  font-size: 3rem;
}
.section {
  background-color: #0a0a0a;
  width: 100%!important;
  padding-left: 0;
  padding-right: 0;
}
@keyframes yoyoFlight {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); /* Измените это значение для большей амплитуды */
  }
}
.btn-offer {
  text-transform: uppercase;
  border-radius: 30px;
  box-shadow: 11px 10px 93px 0px rgba(161,106,234,0.3),
  -44px 15px 57px -24px rgba(49,34,172,0.22);
  margin-top: 2rem;
}
.logo-heading {
  font-weight: 900;
  font-size: 8rem;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.32);
  transform:rotate(-90deg);
  position: relative;
  z-index: 2;
  left: -40rem;
  top: 10rem;
  text-transform: uppercase;
}
.logo-heading-hor {
  font-weight: 900;
  font-size: 8rem;
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
  position: relative;
  z-index: 2;
  text-transform: uppercase;
}
.row-text {
  align-items: center;
  width: 100%;
}
.marquee-text {
  margin-right: 2rem;
  font-size: 1rem;
  padding: 1rem;
  color: oklch(0.723603 0.176218 350.048739);
  overflow: hidden;
  width: 100vw;
}
</style>