<script>
export default {
  name: "FooterComponent"
}
</script>

<template>
  <section class="section flex flex-row">
    <div class="flex flex-row justify-between footer-row">
      <span>
        <h1 class="logo-heading">MP Group</h1>©MPGroup 2023
      </span>
      <a class="text-accent" href="https://rhizomedev.com" target="_blank">🤖 by RhizomeDev</a>
    </div>
  </section>
</template>

<style scoped>
.section {
  background-color: #151515;
  border-top: 2px solid #383838;
  height: 5rem;
  padding: 2rem;
}
.footer-row {
  width: 100%;
  align-self: center;
  align-items: center;
  color: #bdbdbd;
}
.logo-heading {
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px #8c8c8c;
  text-transform: uppercase;
  z-index: -1;
}
</style>