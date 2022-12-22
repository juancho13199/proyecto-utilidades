import { createApp } from 'vue'
import { createPinia } from 'pinia'
import JsonCSV from 'vue-json-csv'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('downloadCsv',JsonCSV)
app.use(createPinia())
app.use(router)

app.mount('#app')
