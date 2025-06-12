import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from '@/router';
import 'font-awesome/css/font-awesome.min.css';
import store from './store';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueLazyLoad from 'vue-lazyload-next'
// Initialize the app and use the router and store
createApp(App)
  .use(store)  // Ensure Vuex store is used before mounting the app
  .use(router).use(VueSweetalert2).use(VueLazyLoad, {
  })  
  .mount('#app'); // Mount the app to the DOM
  AOS.init()
