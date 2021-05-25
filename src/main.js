import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

createApp(App).use(store).use(router).use(VueAwesomeSwiper).mount('#app')


