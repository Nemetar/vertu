import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './app/router/router';
import registerComponents from './app/components/components';
import 'virtual:uno.css';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount('#app');
registerComponents(app);
