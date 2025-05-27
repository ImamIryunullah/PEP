// import store from '@/store';

import { createRouter, createWebHistory } from 'vue-router'

import dashboardPage from '@/views/dashboardPage.vue'
import tentangPage from '@/views/tentangPage.vue'
import listPesertaPage from '@/views/listPesertaPage'
import registrasiPage from '@/views/registrasiPage'
import detailBeritaPage from '@/views/detailBeritaPage'
import beritaPage from '@/views/beritaPage'

const routes = [
  { path: "/", name: "home", component:dashboardPage},
  { path: "/aboutUs", name: "aboutUs", component:tentangPage},
  { path: "/list-peserta", name: "list Peserta", component:listPesertaPage},
  { path: "/registrasi", name: "Registrasi", component:registrasiPage},
  { path: "/detail-berita", name: "Detail", component:detailBeritaPage},
  { path: "/berita", name: "Berita", component:beritaPage},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
