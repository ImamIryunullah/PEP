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
import sepakBola from '@/views/result/sepakBola'
import registrasiRunPage from '@/views/registrasiRunPage'
import teknikalMeetingPage from '@/views/teknikalMeetingPage'
import konsepDokumenPage from '@/views/konsepDokumenPage'
import adminDashboard from '@/views/admin/adminDashboard'
import loginPage from '@/views/authPage/loginPage'
import dataPesertaPage from '@/views/admin/dataPesertaPage'
import verifikasiPesertaPage from '@/views/admin/verifikasiPesertaPage'
import kelolaBeriaPage from '@/views/admin/kelolaBeritaPage'
import adminSkorStage from '@/views/admin/adminSkorStage'
import dashboardUser from '@/views/peserta/dashboardUser'
import bolaVolly from '@/views/result/bolaVolly'
import buluTangkis from '@/views/result/buluTangkis'
import eSport from '@/views/result/eSport'
import tenisMeja from '@/views/result/tenisMeja'
import lariResults from '@/views/result/lariResults'
import tenisLapangan from '@/views/result/tenisLapangan'
import basketResult from '@/views/result/basketResult'
const routes = [
  { path: "/", name: "home", component:dashboardPage},
  { path: "/aboutUs", name: "aboutUs", component:tentangPage},
  { path: "/list-peserta", name: "listPeserta", component:listPesertaPage},
  { path: "/registrasi", name: "Registrasi", component:registrasiPage},
  { path: "/detail-berita", name: "DetailBerita", component:detailBeritaPage},
  { path: "/berita", name: "Berita", component:beritaPage},
  { path: "/contactUs", name: "kontak", component:contactUsPage},
  { path: "/informasi-tambahan", name: "Informasi", component:addInformationPage},
  { path: "/registrasi-funrun-embed", name: "registrasiRun", component:registrasiRunPage},
  { path: "/dokumen-technical-meeting", name: "dokumen1", component:teknikalMeetingPage},
  { path: "/dokumen-konsep", name: "dokumen2", component:konsepDokumenPage},
  { path: "/admin/dashboard", name: "adminDashboard", component:adminDashboard},
  { path: "/login", name: "login", component:loginPage},
  { path: "/admin/peserta", name: "adminDataPeserta", component:dataPesertaPage},
  { path: "/admin/verifikasi-peserta", name: "adminVerifikasiPeserta", component:verifikasiPesertaPage},
  { path: "/admin/kelola-berita", name: "adminKelolaBerita", component:kelolaBeriaPage},
  { path: "/admin/kelola-skor", name: "adminKelolaSkor", component:adminSkorStage},
  { path: "/peserta/dashboard", name: "pesertaDashboard", component:dashboardUser},
  { path: "/jadwal-dan-hasil/sepak-bola", name: "sepakBola", component:sepakBola},
  { path: "/jadwal-dan-hasil/bola-volly", name: "bolaVolly", component:bolaVolly},
  { path: "/jadwal-dan-hasil/badminton", name: "badminton", component:buluTangkis},
  { path: "/jadwal-dan-hasil/esport", name: "e-sport", component:eSport},
  { path: "/jadwal-dan-hasil/tenis-meja", name: "tenis-meja", component:tenisMeja},
  { path: "/jadwal-dan-hasil/lari", name: "lari", component:lariResults},
  { path: "/jadwal-dan-hasil/tenis-lapangan", name: "tenisLapangan", component:tenisLapangan},
  { path: "/jadwal-dan-hasil/basket", name: "basketResult", component:basketResult},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
