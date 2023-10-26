import { createApp } from 'vue'
import App from '../view/popup.vue'
import { store } from '@/store/store'

createApp(App).use(store).mount('#app')
