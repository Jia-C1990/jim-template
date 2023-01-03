import { createApp } from 'vue'
import '../assets/css/reset.scss'
import App from '@/Vue.vue'
import { basePinia } from '../stores'

createApp(App).use(basePinia).mount('#app')
