import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

import './styles/font.css'
import './styles/reset.css'

createApp(App)
    .use(PrimeVue)
    .use(router)
    .mount('#app')
