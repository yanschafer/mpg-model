<script>
import DirectionsComponent from "./DirectionsComponent.vue";
export default {
  name: "AboutComponent",
  components: {DirectionsComponent},
}
</script>

<template>
  <section class="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] section-bg flex flex-col">
    <div class="container mx-auto">
      <div class="flex flex-wrap items-center justify-between -mx-4">
        <div class="w-full px-4 lg:w-6/12">
          <div class="flex items-center -mx-3 sm:-mx-4">
            <div class="w-full px-3 sm:px-4 xl:w-1/2">
              <aos-vue animation="fade-right" placement="top-bottom">
                <div class="py-3 sm:py-4">
                  <img
                      src="../assets/images/model2.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                  />
                </div>
              </aos-vue>
              <aos-vue animation="fade-right" placement="top-bottom">
                <div class="py-3 sm:py-4">
                  <img
                      src="../assets/images/model4.jpg"
                      alt=""
                      class="w-full rounded-2xl"
                  />
                </div>
              </aos-vue>
            </div>

            <div class="w-full px-3 sm:px-4 xl:w-1/2">
              <aos-vue animation="fade-right" placement="top-bottom">
                <img
                    src="../assets/images/model3.jpg"
                    alt=""
                    class="w-full rounded-2xl"
                />
            </aos-vue>
            </div>
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div class="mt-10 lg:mt-0 text-area">
            <aos-vue animation="fade-left">
              <h1 class="logo-heading text-accent">MP Group</h1>
            </aos-vue>
            <aos-vue animation="fade-left">
              <h1 class="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Об агентстве
              </h1>
            </aos-vue>
            <aos-vue animation="fade-left" >
              <p class="mb-5 text-base text-body-color dark:text-dark-6">
                <b>MP Group</b> известно как одно из самых успешных и узнаваемых стриминговых агентств в России.
              </p>
              <p class="mb-8 text-base text-body-color dark:text-dark-6">
                Основной принцип агентства — подчеркивать индивидуальность каждого творца контента. <b>MP Group</b> направлено на раскрытие и развитие потенциала каждого стримера, давая возможность заявить о себе на международной арене стриминговой индустрии.
              </p>
              <p class="mb-8 text-base text-body-color dark:text-dark-6">
                Агентство ценит свою команду профессиональных менеджеров, которые разрабатывают уникальные стратегии развития для каждого стримера, внимательно отслеживая прогресс их карьеры. В партнерстве с ведущими глобальными платформами, стримеры <b>MP Group</b> сотрудничают с известными брендами и рекламодателями. Отметим, что <b>MP Group</b> не только сфокусировано на стриминге, но и развивает направление фотомоделей как один из своих векторов деятельности, при этом агентство не занимается продажей портфолио и не взимает плату за обучение.
                <br><br>
                Это подход позволяет <b>MP Group</b> оставаться на переднем крае инноваций в стриминговой индустрии, одновременно расширяя свои горизонты и предоставляя моделям платформу для реализации их творческого потенциала.
                </p>
            </aos-vue>
            <button class="btn btn-outline btn-accent btn-offer animate__animated animate__fadeIn" onclick="modal.showModal()">Работать с нами</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-around w-100 pl-10 mt-10 counters">
      <aos-vue animation="fade-up" placement="top-bottom">
        <div class="basis-1/4 justify-center">
          <div class="blob blob-viol"></div>
          <h1 class="number">85%</h1>
          <p>Стримеров начали без предыдущего<br>опыта и портфолио</p>
        </div>
      </aos-vue>
      <aos-vue animation="fade-up" placement="top-bottom">
        <div class="basis-1/4">
          <div class="blob blob-magenta"></div>
          <h1 class="number">150</h1>
          <p>Стримеров в базе</p>
        </div>
      </aos-vue>
      <aos-vue animation="fade-up" placement="top-bottom">
        <div class="basis-1/4">
          <div class="blob blob-blue"></div>
          <h1 class="number">300</h1>
          <p>Стримов в месяц</p>
        </div>
      </aos-vue>
    </div>
    <DirectionsComponent />
  </section>
</template>

<style scoped>
@media (max-width: 575.98px) {
  .text-area {
  padding: 1rem!important;
}
  .counters {
    flex-direction: column!important;
    padding: 1rem!important;
  }
}
.logo-heading {
  font-weight: 900;
  font-size: 2rem;
  color: transparent;
  -webkit-text-stroke: 1px oklch(0.723603 0.176218 350.048739);
  text-transform: uppercase;
  z-index: -1;
}
.btn-offer {
  text-transform: uppercase;
  border-radius: 30px;
  box-shadow: 11px 10px 93px 0px rgba(161,106,234,0.3),
  -44px 15px 57px -24px rgba(49,34,172,0.22);
}
.accent {
  color: oklch(0.723603 0.176218 350.048739);
}
.section-bg {
  background-color: #131313;
  background-image: url("../assets/images/bg2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.number {
  font-weight: 900;
  font-size: 5rem;
}
.comp {
  z-index: 999999999;
}
.blob {
  width: 2rem;
  top: 30px;
  z-index: -1;
  position: relative;
}
@keyframes morphShadowBlue {
  0% {
    box-shadow: 0px 0px 105px 45px rgba(119, 46, 255, 0.9);
    border-radius: 20%;
  }
  25% {
    box-shadow: 0px 0px 150px 60px rgba(119, 46, 255, 0.8);
    border-radius: 50%;
  }
  50% {
    box-shadow: 0px 0px 120px 50px rgba(119, 46, 255, 0.85);
    border-radius: 30%;
  }
  75% {
    box-shadow: 0px 0px 135px 55px rgba(119, 46, 255, 0.75);
    border-radius: 45%;
  }
  100% {
    box-shadow: 0px 0px 105px 45px rgba(119, 46, 255, 0.9);
    border-radius: 20%;
  }
}
@keyframes morphShadowMagenta {
  0% {
    box-shadow: 0px 0px 105px 45px rgba(255,46,126,0.9);
    border-radius: 20%;
  }
  25% {
    box-shadow: 0px 0px 105px 45px rgba(255,46,126,0.9);
    border-radius: 50%;
  }
  50% {
    box-shadow: 0px 0px 105px 45px rgba(255,46,126,0.9);
    border-radius: 30%;
  }
  75% {
    box-shadow: 0px 0px 105px 45px rgba(255,46,126,0.9);
    border-radius: 45%;
  }
  100% {
    box-shadow: 0px 0px 105px 45px rgba(255,46,126,0.9);
    border-radius: 20%;
  }
}
.blob-magenta {
  -webkit-animation: morphShadowMagenta 5s infinite ease-in-out;
  -moz-animation: morphShadowMagenta 5s infinite ease-in-out;
  animation: morphShadowMagenta 5s infinite ease-in-out;
}
.blob-viol {
  -webkit-box-shadow:0px 0px 105px 45px rgba(252,46,255,0.9);
  -moz-box-shadow: 0px 0px 105px 45px rgba(252,46,255,0.9);
  box-shadow: 0px 0px 105px 45px rgba(252,46,255,0.9);
}
.blob-blue {
  -webkit-animation: morphShadowBlue 5s infinite ease-in-out;
  -moz-animation: morphShadowBlue 5s infinite ease-in-out;
  animation: morphShadowBlue 5s infinite ease-in-out;
}
</style>