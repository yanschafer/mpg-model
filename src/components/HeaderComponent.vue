<script>
export default {
  name: "HeaderComponent"
}
</script>

<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 mobile-menu">
            <li><a href="#about">О нас</a></li>
            <li><a href="#directions">Наши векторы</a></li>
            <li><a href="#cast">Кастинг</a></li>
          </ul>
        </div>
          <a class="logo-heading text-xl">MPGroup</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="#about">О нас</a></li>
          <li><a href="#directions">Наши векторы</a></li>
          <li><a href="#cast">Кастинг</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn btn-accent btn-offer" onclick="modal.showModal()">Работать с нами</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 575.98px) {
  .navbar {
    width: 90vw!important;
  }
  .btn-offer {
    font-size: 0.6rem!important;
  }
  .mobile-menu {
    background-color: rgba(19, 19, 19, 0.9) !important;
    backdrop-filter: blur(20px)!important;
  }
}
.navbar {
  height: 2vh;
  width: 50vw;
  border-radius: 60px;
  padding-left: 1.3rem;
  padding-right: 0.5rem;
  border: 2px solid oklch(0.723603 0.176218 350.048739);
  background-color: rgba(24, 24, 24, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 11px 10px 93px 0px rgba(161,106,234,0.3),
  -44px 15px 57px -24px rgba(49,34,172,0.22);
  text-transform: uppercase;
  z-index: 9999!important;
}
.navbar-container {
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 2rem;
}
.btn-offer {
  border-radius: 30px;
}
.logo-heading {
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px #ffffff;
  text-transform: uppercase;
  z-index: -1;
}
</style>