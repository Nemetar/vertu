import { createApp } from 'vue';
import App from './App.vue';
import router from './app/router/router';
import pinia from './app/store/store';
import registerComponents from './app/components/components';
import 'virtual:uno.css';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
registerComponents(app);
