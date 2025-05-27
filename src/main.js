import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from '@/router';
import 'font-awesome/css/font-awesome.min.css';
import store from './store';
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize the app and use the router and store
createApp(App)
  .use(store)  // Ensure Vuex store is used before mounting the app
  .use(router) // Then use the router
  .mount('#app'); // Mount the app to the DOM
  AOS.init()
