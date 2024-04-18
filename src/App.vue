<script setup>
import HeroComponent from "./components/HeroComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Lenis from '@studio-freight/lenis'
import SfVueAnimatedCursor from 'sf-vue-animated-cursor'
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import AboutComponent from "./components/AboutComponent.vue";
import DirectionsComponent from "./components/DirectionsComponent.vue";
import StepsComponent from "./components/StepsComponent.vue";
import CastComponent from "./components/CastComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ScrollProgressComponent from "./components/ScrollProgressComponent.vue";
import CursorComponent from "./components/CursorComponent.vue";
import PreloaderComponent from "./components/PreloaderComponent.vue";
import ModalComponent from "./components/ModalComponent.vue";



const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

<template>
  <div id="222">
    <ModalComponent />
    <PreloaderComponent />
    <CursorComponent id="cursor" />
    <ScrollProgressComponent />
    <HeaderComponent class="header" />
    <HeroComponent id="hero" />
    <AboutComponent id="about" />
    <CastComponent id="cast" />
    <FooterComponent id="footer" />
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 999999999;
}
</style>
<style>
html, body {
  overflow-x: hidden;
}
*::-webkit-scrollbar {
  height: 10px;
  width: 5px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #1a1a1a;
}

*::-webkit-scrollbar-track:hover {
  background-color: #1a1a1a;
}

*::-webkit-scrollbar-track:active {
  background-color: #1a1a1a;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: oklch(0.723603 0.176218 350.048739);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: oklch(0.723603 0.176218 350.048739);
}

*::-webkit-scrollbar-thumb:active {
  background-color: oklch(0.723603 0.176218 350.048739);
}
</style>