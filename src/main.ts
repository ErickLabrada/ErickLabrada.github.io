import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
import '@shoelace-style/shoelace/dist/themes/dark.css'
import '@shoelace-style/shoelace/dist/shoelace.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
