import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/typeNav/TypeNAv.vue'
import Swiper from '@/components/swiper/index.vue'

import '@/mock/mock.js'

createApp(App)
.use(router)
.use(store)
.component('TypeNav',TypeNav)
.component('Swiper',Swiper)
.mount('#app')