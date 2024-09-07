import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import pinia from '@/store/store';
import registerLayouts from '@/components/layouts/registerLayouts';
import 'virtual:uno.css';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
registerLayouts(app);
