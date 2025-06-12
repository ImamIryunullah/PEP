import stores from '@/store';

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
const formulirPendaftaran = () => import( '@/views/peserta/formulirPendaftaran')
const listTeam = () => import( '@/views/peserta/listTeam')
const funRunPage = () => import( '@/views/admin/funRunPage')
const funrunListPage = () => import( '@/views/funrunListPage')
const adminCabor = () => import( '@/views/admin/adminCabor')
const akomodasiHotelPage = () => import( '@/views/akomodasiHotelPage')
const infoJadwalUser = () => import('@/views/peserta/infoJadwalUser')
const resultTanding = () =>  import( '@/views/result/resultTanding')

  

const routes = [
  { path: "/login", name: "login", component: loginPage },
  { path: "/registrasi", name: "Registrasi", component:registrasiPage},
  { path: "/", name: "home", component:dashboardPage},
  { path: "/aboutUs", name: "aboutUs", component:tentangPage},
  { path: "/list-peserta", name: "listPeserta", component:listPesertaPage},
  { path: "/detail-berita/:id", name: "DetailBerita", component: detailBeritaPage },
  { path: "/berita", name: "Berita", component:beritaPage},
  { path: "/contactUs", name: "kontak", component:contactUsPage},
  { path: "/informasi-tambahan", name: "Informasi", component:addInformationPage},
  { path: "/registrasi-funrun-embed", name: "registrasiRun", component:registrasiRunPage},
  { path: "/dokumen-technical-meeting", name: "dokumen1", component:teknikalMeetingPage},
  { path: "/dokumen-konsep", name: "dokumen2", component: konsepDokumenPage },
  { path: "/jadwal-dan-hasil/sepak-bola", name: "sepakBola", component:sepakBola},
  { path: "/jadwal-dan-hasil/bola-volly", name: "bolaVolly", component:bolaVolly},
  { path: "/jadwal-dan-hasil/badminton", name: "badminton", component:buluTangkis},
  { path: "/jadwal-dan-hasil/esport", name: "e-sport", component:eSport},
  { path: "/jadwal-dan-hasil/tenis-meja", name: "tenis-meja", component:tenisMeja},
  { path: "/jadwal-dan-hasil/lari", name: "lari", component:lariResults},
  { path: "/jadwal-dan-hasil/tenis-lapangan", name: "tenisLapangan", component: tenisLapangan },
  { path: "/result-pertandingan-cabang-olahraga", name: "resultPertandingan", component:resultTanding},
  { path: "/jadwal-dan-hasil/basket", name: "basketResult", component:basketResult},
  { path: "/syarat-pendaftaran", name: "syaratPendaftaran", component: syaratPendaftaran },
  { path: "/akomodasi-dan-hotel", name: "akomodasiHotel", component: akomodasiHotelPage },
  { path: "/peserta-fun-run", name: "PesertaFunRun", component: funrunListPage },
/*====================================ADMIN======================= */
  {
    path: "/admin/dashboard", name: "adminDashboard", component: adminDashboard,
    meta: {
      requiresAuth: true,
      requiredRole: "admin",
      title: "adminDashboard",
    },
  },
  {
    path: "/admin/peserta", name: "adminDataPeserta", component: dataPesertaPage,
    meta: {
      requiresAuth: true,
      requiredRole: "admin",
      title: "adminDataPeserta",
    },
  },
  {
    path: "/admin/verifikasi-peserta", name: "adminVerifikasiPeserta", component: verifikasiPesertaPage,
    meta: {
      requiresAuth: true,
      requiredRole: "admin",
      title: "adminVerifikasiPeserta",
    },
  },
  {
    path: "/admin/kelola-berita", name: "adminKelolaBerita", component: kelolaBeriaPage,
    meta: {
      requiresAuth: true,
      requiredRole: "admin",
      title: "adminKelolaBerita",
    },
  },
  {
    path: "/admin/kelola-skor", name: "adminKelolaSkor", component: adminSkorStage,
    meta: {
      requiresAuth: true,
      requiredRole: "admin",
      title: "adminKelolaSkor",
    },
  },
  {
    path: "/admin/funrun", name: "FunRun", component: funRunPage,
    meta: {
      requiresAuth: true,
      requiredRole: "admin",
      title: "FunRun",
    },
  },
  {
    path: "/admin/kelola-cabang-olahraga", name: "adminCabor", component: adminCabor,
    meta: {
      requiresAuth: true,
      requiredRole: "admin",
      title: "adminCabor",
    },
   },
  

 
  /*====================================Peserta======================= */
  {
    path: "/peserta/formulir-pendaftaran", name: "formulirPendaftaran", component: formulirPendaftaran,
    meta: {
      requiresAuth: true,
      requiredRole: "user",
      title: "formulirPendaftaran",
    },
  },
  {
    path: "/peserta/dashboard", name: "pesertaDashboard", component: dashboardUser,
    meta: {
      requiresAuth: true,
      requiredRole: "user",
      title: "pesertaDashboard",
    },
  },
  {
    path: "/peserta/list-peserta", name: "listTeam", component: listTeam,
    meta: {
      requiresAuth: true,
      requiredRole: "user",
      title: "listTeam",
    },
  },
  {
    path: "/peserta/rundown", name: "pesertaRundown", component: infoJadwalUser,
    meta: {
      requiresAuth: true,
      requiredRole: "user",
      title: "pesertaRundown",
    },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {
  let isAuthenticated = false;
  let userRole = null;

  if (to.meta.requiresAuth) {
    // Panggil updateStore dari modul 'stores'
    await stores.dispatch("stores/updateStore");

    // Ambil dari modul 'stores'
    isAuthenticated = stores.state.stores.UserIsLoggedIn;
    userRole = stores.state.stores.userRole;
  }

  console.log("Auth:", isAuthenticated);
  console.log("Role:", userRole);

  if (to.meta.requiresAuth && !isAuthenticated) {
    alert("Sesi Anda Habis!");
    next({ path: "/login" });
  } else if (
    to.meta.requiresAuth &&
    to.meta.requiredRole &&
    to.meta.requiredRole !== userRole
  ) {
    alert("Tidak Memiliki Hak Akses!");
    next(false);
    window.history.back();
  } else {
    next();
  }
});


router.afterEach((to) => {
  document.title = to.meta.title || "PEP Official";
});

export default router
