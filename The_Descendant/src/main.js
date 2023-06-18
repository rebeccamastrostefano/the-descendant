import { createApp } from 'vue'
import App from './App.vue'
import Nav from './components/Nav.vue'
import router from './router/index'
import { useRoute } from 'vue-router'


createApp(App).use(router).mount('#app')
