import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from "@/store/store";
import i18n from "@/i18n/i18n";

createApp(App).use(store).use(router).use(i18n).mount('#app');
