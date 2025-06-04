// import store from '@/store';

import { createRouter, createWebHistory } from 'vue-router'

const dashboardPage =() => import( '@/views/dashboardPage.vue')
const tentangPage = () => import( '@/views/tentangPage.vue')
const listPesertaPage = () => import( '@/views/listPesertaPage')
const registrasiPage = () => import( '@/views/registrasiPage')
const detailBeritaPage = () => import( '@/views/detailBeritaPage')
const beritaPage = () => import( '@/views/beritaPage')
const contactUsPage = () => import( '@/views/contactUsPage')
const addInformationPage = () => import( '@/views/addInformationPage')
const sepakBola = () => import( '@/views/result/sepakBola')
const registrasiRunPage = () => import( '@/views/registrasiRunPage')
const teknikalMeetingPage = () => import( '@/views/teknikalMeetingPage')
const konsepDokumenPage = () => import( '@/views/konsepDokumenPage')
const adminDashboard = () => import( '@/views/admin/adminDashboard')
const loginPage = () => import( '@/views/authPage/loginPage')
const dataPesertaPage = () => import( '@/views/admin/dataPesertaPage')
const verifikasiPesertaPage = () => import( '@/views/admin/verifikasiPesertaPage')
const kelolaBeriaPage = () => import( '@/views/admin/kelolaBeritaPage')
const adminSkorStage = () => import( '@/views/admin/adminSkorStage')
const dashboardUser = () => import( '@/views/peserta/dashboardUser')
const bolaVolly = () => import( '@/views/result/bolaVolly')
const buluTangkis = () => import( '@/views/result/buluTangkis')
const eSport = () => import( '@/views/result/eSport')
const tenisMeja = () => import( '@/views/result/tenisMeja')
const lariResults = () => import( '@/views/result/lariResults')
const tenisLapangan = () => import( '@/views/result/tenisLapangan')
const basketResult = () => import( '@/views/result/basketResult')
const syaratPendaftaran = () => import( '@/views/syaratPendaftaran')

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
  { path: "/syarat-pendaftaran", name: "syaratPendaftaran", component:syaratPendaftaran},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
