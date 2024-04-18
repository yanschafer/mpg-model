<script>
export default {
  name: "DirectionsComponent",
  data() {
    return {
      selectedContent: 'streams', // Переменная для хранения идентификатора выбранного контента
    };
  },
  methods: {
    selectContent(contentId) {
      this.selectedContent = contentId; // Метод для выбора контента
    },
  },
}
</script>

<template>
  <section id="directions" class="section">
    <aos-vue animation="fade-right" placement="top-bottom">
      <div class="divider divider-accent block-devider"><h1 class="block-heading">Векторы</h1></div>
    </aos-vue>
    <div class="flex flex-row justify-evenly tabs-names">
      <aos-vue animation="fade-right" placement="top-bottom">
        <a class="tab-name" :class="{ 'active-tab': selectedContent === 'streams' }" @click="selectContent('streams')">
          Стримы
        </a>
      </aos-vue>
      <aos-vue animation="fade-left" placement="top-bottom">
        <a class="tab-name" :class="{ 'active-tab': selectedContent === 'models' }" @click="selectContent('models')">
          Модели
        </a>
      </aos-vue>
    </div>
<section class="section-text">
  <div v-if="selectedContent === 'streams'">
    <div class="flex flex-row p-10 tabs-content">
      <div class="basis-1/2 flex flex-col justify-center p-10 streaming-col">
        <p class="animate__animated animate__fadeInDown">
          Мы обладаем восьмилетним опытом в области организации и управления потоковыми онлайн-трансляциями на стриминговых платформах. В процессе работы мы всесторонне подходим к выполнению всех задач на каждом этапе. Для каждого ведущего и партнера мы создаем персонализированный план действий. <br>
        </p>
        <div class="divider divider-accent divider-center animate__animated animate__fadeInDown">Структура плана работы предполагает<br></div>
        <ul class="animate__animated animate__fadeInDown">
          <li>
            <i class="fa-regular fa-circle-dot"></i> <b>Для стримеров и ведущих:</b> проведение тренингов, вебинаров, мероприятий и обеспечение поддержки;<br>
          </li>
          <li>
            <i class="fa-regular fa-circle-dot"></i> <b>Для скаутов и рекрутеров:</b> предоставление детальных инструкций, документации и бонусных программ;<br>
          </li>
          <li>
            <i class="fa-regular fa-circle-dot"></i> <b>Для агентов и партнеров:</b> организация тренингов, содействие в брендировании и предоставление консультационных услуг.
          </li>
        </ul>

        <button class="btn btn-outline btn-accent btn-offer" onclick="modal.showModal()">Работать с нами</button>
      </div>
      <div class="basis-1/2 flex flex-col justify-center">
        <img class="animate__animated animate__fadeInUp" src="../assets/images/streaming.png" height="580" width="897"/>
      </div>
    </div>
  </div>
  <div v-if="selectedContent === 'models'">
    <div class="flex flex-row p-10 tabs-models-content">
      <div class="basis-1/2 flex flex-col justify-center">
        <img class="animate__animated animate__fadeInDown models-img" src="../assets/images/models.png" height="580" width="897"/>
      </div>
      <div class="basis-1/2 flex flex-col justify-center p-10 animate__animated animate__fadeInUp models-col">
        <p class="animate__animated animate__fadeIn">
          Агентство MPGroup предлагает моделей различного возраста и роста, отличающихся своей красотой.<br><br>

          Эти модели часто выбирают для участия в коммерческих фото и видеосессиях, съемках музыкальных клипов и развлекательных шоу.
        </p>
        <div class="divider divider-accent divider-center animate__animated animate__fadeInDown">Обязанности<br></div>
        <ul class="animate__animated animate__fadeIn">
          <li>
            <i class="fa-regular fa-circle-dot"></i> Выполнение позирования в соответствии с инструкциями режиссера съемки.
          </li>
        </ul>
        <button class="btn btn-outline btn-accent btn-offer" onclick="modal.showModal()">Записаться на кастинг</button>
      </div>
    </div>
  </div>
</section>
  </section>
</template>

<style scoped>
@media (max-width: 575.98px) {
  .block-heading {
  font-size: 1.6rem!important;
}
  .tabs-names {
    flex-direction: column!important;
    justify-content: center!important;
    align-items: center!important;
  }
  .tab-name {
    font-size: 2rem!important;
    margin-bottom: 0.3rem!important;
  }
  .streaming-col {
    padding: 0!important;
    text-align: center!important;
  }
  .tabs-content {
    flex-direction: column-reverse!important;
  }
  .tabs-models-content {
    flex-direction: column!important;
  }
  .models-col {
    padding: 0!important;
    flex-direction: column!important;
    text-align: center!important;
  }
;
}
.tab-name {
  font-size: 4rem;
  background: transparent;
  font-family: "Manifold Extended", sans-serif;
  font-weight: 900;
  margin-bottom: 3rem;
  color: transparent;
  -webkit-text-stroke: 1px #838383;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}
.tab-name:hover {
  cursor: pointer;
  -webkit-text-stroke: 1px #ffffff;
  color: white;
}
.active-tab {
  -webkit-text-stroke: 1px #ffffff;
  color: white;
}
.section {
  padding-top: 7rem;
}
.block-heading {
  font-size: 3rem;
  text-transform: uppercase;
}
.accent {
  color: oklch(0.723603 0.176218 350.048739);
}
.btn-offer {
  text-transform: uppercase;
  border-radius: 30px;
  margin-top: 2rem;
  background: transparent;
  box-shadow: 11px 10px 93px 0px rgba(161,106,234,0.3),
  -44px 15px 57px -24px rgba(49,34,172,0.22);
}
.block-devider {
  margin-bottom: 6rem;
}
.models-img {
}
.section-text {
  background-color: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(15px) saturate(120%);
}
</style>