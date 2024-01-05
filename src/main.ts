import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(PrimeVue);
app.component('Button', Button);
app.component('InputText' , InputText)
app.use(pinia)
app.mount('#app')
