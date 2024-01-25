import { createApp } from 'vue'
import App from './App.vue'
import i18n from "./i18n/i18n";
import router from "./router/router.ts";
import {createPinia} from "pinia";
const pinia = createPinia();

createApp(App).use(i18n).use(router).use(pinia).mount('#app');