import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Router from './router/index.ts'
import './style.css';

const app = createApp(App)

app.use(createPinia())
app.use(Router.router)

app.mount('#app')
