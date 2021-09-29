import { createApp } from 'vue';
import App from './App.vue';

import './assets/css/styles.css';
import './assets/css/normalize.css';

import router from './router/router'; // router.js

createApp(App)
  .use(router)
  .mount('#app');
