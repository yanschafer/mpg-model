import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'animate.css';
import SfVueAnimatedCursor from 'sf-vue-animated-cursor'
import AosVue from "aos-vue";
import Vue3Marquee from 'vue3-marquee'
import Tetikus from '@namchee/tetikus';
import '@namchee/tetikus/dist/tetikus.css';


createApp(App).use(Tetikus).use(Vue3Marquee).use(AosVue).mount('#app')
