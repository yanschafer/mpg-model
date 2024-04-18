<script>
export default {
  name: "StepsComponent"
}
</script>

<template>
  <ul class="steps steps-vertical lg:steps-horizontal">
    <li class="step step-accent">
      <h1 class="heading">Консультация</h1>
      <br>
      <p>Знакомство, анкетирование, собеседование на выбранную вакансию</p>
    </li>
    <li class="step step-accent">
      <h1 class="heading">Кастинг</h1>
      <br>
      <p>Подготовка аккаунта и проведение кастинга на стриминговой платформе</p>
    </li>
    <li class="step step-accent">
      <h1 class="heading">Обучение</h1>
      <br>
      <p>После прохождения кастинга проводим вводный брифинг и 2 раза в месяц тренинг и вебинар на выбранную вами вакансию в нашем агентстве</p>
    </li>
  </ul>
</template>

<style scoped>
.heading {
  font-size: 2rem;
}
.step {
  font-size: 2rem;
}
</style>