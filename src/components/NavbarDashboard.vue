  <template>
    <header>
      <!-- Top bar -->
      <div class="bg-white text-gray-700 text-sm font-medium px-4 py-1 flex justify-between items-center border-b border-gray-200">
        <div>{{ currentDate }} - {{ currentTime }}</div>
        <div class="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" class="hover:text-blue-600" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank" class="hover:text-blue-400" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" class="hover:text-pink-500" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://youtube.com" target="_blank" class="hover:text-red-600" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <!-- Main navbar -->
      <div class="bg-[#a60000] text-white shadow-md z-50 relative">
        <div class="container mx-auto px-4 py-3 flex items-center justify-between">
          <!-- Logo + Hamburger -->
          <div class="flex items-center gap-4">
            <button @click="toggleMenu" class="md:hidden focus:outline-none">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
            <img src="/logo-mini-olympic-2025.png" alt="Logo" class="h-10" />
          </div>

          <!-- Desktop Menu -->
          <nav class="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide uppercase">
            <router-link to="/" class="hover:text-yellow-300 transition duration-300">HOME</router-link>
            <router-link to="/jadwal-dan-hasil" class="hover:text-yellow-300 transition duration-300">Jadwal & Hasil</router-link>

            <!-- Registrasi Dropdown -->
            <div class="relative group">
              <button class="hover:text-yellow-300 transition duration-300 flex items-center gap-1">
                REGISTRASI
                <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': isRegDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <transition name="fade">
                <div class="absolute left-0 mt-3 bg-white text-black rounded-xl shadow-xl w-52 py-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform -translate-y-3 z-50">
                  <router-link to="/registrasi" class="block px-5 py-2 hover:bg-gray-100 rounded-t">Peserta</router-link>
                  <router-link to="/registrasi-funrun-embed" class="block px-5 py-2 hover:bg-gray-100 rounded-b">5K Fun Run</router-link>
                </div>
              </transition>
            </div>

            <router-link to="/list-peserta" class="hover:text-yellow-300 transition duration-300">List Peserta</router-link>
            <router-link to="/berita" class="hover:text-yellow-300 transition duration-300">Berita</router-link>
            <div class="relative group">
              <button class="hover:text-yellow-300 transition duration-300 flex items-center gap-1">
                ABOUTS
                <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': isRegDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <transition name="fade">
                <div class="absolute left-0 mt-3 bg-white text-black rounded-xl shadow-xl w-52 py-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transform -translate-y-3 z-50">
                  <router-link to="/aboutUs" class="block px-5 py-2 hover:bg-gray-100 rounded-t">Tentang Kami</router-link>
                  <router-link to="/dokumen-technical-meeting" class="block px-5 py-2 hover:bg-gray-100 rounded-t">Dokumen Teknikal Meeting</router-link>
                  <router-link to="/dokumen-konsep" class="block px-5 py-2 hover:bg-gray-100 rounded-b">Dokumen Konsep</router-link>
                </div>
              </transition>
            </div>
            <router-link to="/contactUs" class="hover:text-yellow-300 transition duration-300">Kontak</router-link>
            <router-link to="/informasi-tambahan" class="hover:text-yellow-300 transition duration-300">Additional Info</router-link>
          </nav>
        </div>

        <!-- Mobile Menu -->
        <transition name="fade">
          <div v-if="isOpen" class="md:hidden bg-[#D71E28] px-4 pb-4 text-sm font-semibold uppercase space-y-2">
            <router-link to="/" class="block hover:text-yellow-200">HOME</router-link>
            <router-link to="/jadwal-dan-hasil" class="block hover:text-yellow-200">Jadwal & Hasil</router-link>

            <!-- Mobile Dropdown -->
            <div>
              <button @click="toggleRegDropdown" class="w-full flex justify-between items-center hover:text-yellow-200">
                REGISTRASI
                <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showRegDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-if="showRegDropdown" class="ml-4 mt-2 space-y-1">
                <router-link to="/registrasi" class="block hover:text-yellow-200">Peserta</router-link>
                <router-link to="/registrasi-funrun-embed" class="block hover:text-yellow-200">5K Fun Run</router-link>
              </div>
            </div>

            <router-link to="/list-peserta" class="block hover:text-yellow-200">List Peserta</router-link>
            <router-link to="/berita" class="block hover:text-yellow-200">Berita</router-link>
            <router-link to="/aboutUs" class="block hover:text-yellow-200">About Us</router-link>
            <router-link to="/contactUs" class="block hover:text-yellow-200">Kontak</router-link>
            <router-link to="/informasi-tambahan" class="block hover:text-yellow-200">Additional Info</router-link>
          </div>
        </transition>
      </div>
    </header>
  </template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      showDropdown: false,
      isDropdownOpen: false,
      showRegDropdown: false,
      isRegDropdownOpen: false,
      cabors: [
        "Tennis", "Basket", "Senam", "Tenis Meja", "Badminton", "E-Sport", "Volley", "Lari", "E-Sport"
      ],
      currentDate: '',
      currentTime: ''
    };
  },
  mounted() {
    this.updateDateTime();
    this.interval = setInterval(this.updateDateTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleRegDropdown() {
      this.showRegDropdown = !this.showRegDropdown;
    },
    updateDateTime() {
      const now = new Date();

      const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
      this.currentDate = now.toLocaleDateString('id-ID', options);

      this.currentTime = now.toLocaleTimeString('id-ID', { hour12: false });
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
