import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './styles/font.css'
import './styles/reset.css'
import Chart from 'chart.js/auto';

createApp(App).use(router).mount('#app')
