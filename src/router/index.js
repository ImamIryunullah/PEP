// import store from '@/store';

import { createRouter, createWebHistory } from 'vue-router'

import dashboardPage from '@/views/dashboardPage.vue'
import tentangPage from '@/views/tentangPage.vue'
import listPesertaPage from '@/views/listPesertaPage'
import registrasiPage from '@/views/registrasiPage'
import detailBeritaPage from '@/views/detailBeritaPage'
import beritaPage from '@/views/beritaPage'
import informasiCaborPage from '@/views/informasiCaborPage'
import contactUsPage from '@/views/contactUsPage'

const routes = [
  { path: "/", name: "home", component:dashboardPage},
  { path: "/aboutUs", name: "aboutUs", component:tentangPage},
  { path: "/list-peserta", name: "listPeserta", component:listPesertaPage},
  { path: "/registrasi", name: "Registrasi", component:registrasiPage},
  { path: "/detail-berita", name: "Detail", component:detailBeritaPage},
  { path: "/berita", name: "Berita", component:beritaPage},
  { path: "/informasi-cabang-olahraga", name: "CabangOlahraga", component:informasiCaborPage},
  { path: "/contactUs", name: "kontak", component:contactUsPage}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
