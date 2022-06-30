import { setupLayouts } from 'layouts-generated';
import generatedRoutes from 'pages-generated';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { version } from '../package.json';
import { createPinia } from 'pinia'

console.log('version:', version);

const webHistory = createWebHistory(import.meta.env.BASE_URL);
const routes = setupLayouts(generatedRoutes);
const router = createRouter({
    history: webHistory,
    routes,
});

const app = createApp(App);
app.use(createPinia())
app.use(router);
app.mount('#app');