// import store from '@/store';

import { createRouter, createWebHistory } from 'vue-router'

import dashboardPage from '@/views/dashboardPage.vue'
import tentangPage from '@/views/tentangPage.vue'
import listPesertaPage from '@/views/listPesertaPage'
import registrasiPage from '@/views/registrasiPage'
import detailBeritaPage from '@/views/detailBeritaPage'
import beritaPage from '@/views/beritaPage'
import contactUsPage from '@/views/contactUsPage'
import addInformationPage from '@/views/addInformationPage'
import jadwalDanHasilPage from '@/views/jadwalDanHasilPage'
import registrasiRunPage from '@/views/registrasiRunPage'
import teknikalMeetingPage from '@/views/teknikalMeetingPage'
import konsepDokumenPage from '@/views/konsepDokumenPage'
import adminDashboard from '@/views/admin/adminDashboard'
import loginPage from '@/views/authPage/loginPage'

const routes = [
  { path: "/", name: "home", component:dashboardPage},
  { path: "/aboutUs", name: "aboutUs", component:tentangPage},
  { path: "/list-peserta", name: "listPeserta", component:listPesertaPage},
  { path: "/registrasi", name: "Registrasi", component:registrasiPage},
  { path: "/detail-berita", name: "Detail", component:detailBeritaPage},
  { path: "/berita", name: "Berita", component:beritaPage},
  { path: "/contactUs", name: "kontak", component:contactUsPage},
  { path: "/informasi-tambahan", name: "Informasi", component:addInformationPage},
  { path: "/jadwal-dan-hasil", name: "jadwalHasil", component:jadwalDanHasilPage},
  { path: "/registrasi-funrun-embed", name: "registrasiRun", component:registrasiRunPage},
  { path: "/dokumen-technical-meeting", name: "dokumen1", component:teknikalMeetingPage},
  { path: "/dokumen-konsep", name: "dokumen2", component:konsepDokumenPage},
  { path: "/dashboard-admin", name: "adminDashboard", component:adminDashboard},
  { path: "/login", name: "login", component:loginPage},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
