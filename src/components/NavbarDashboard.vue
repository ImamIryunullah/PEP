<template>
  <header>
    <div
      class="bg-white text-gray-700 text-xs sm:text-sm font-medium px-2 sm:px-4 py-1 flex justify-between items-center border-b border-gray-200">
      <div class="text-xs sm:text-sm">{{ currentDate }} - {{ currentTime }}</div>
      <div class="flex gap-2 sm:gap-4 text-lg sm:text-xl">
        <a href="https://facebook.com" target="_blank" class="hover:text-blue-600 transition-colors duration-200"
          aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" target="_blank" class="hover:text-blue-400 transition-colors duration-200"
          aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" class="hover:text-pink-500 transition-colors duration-200"
          aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://youtube.com" target="_blank" class="hover:text-red-600 transition-colors duration-200"
          aria-label="YouTube">
          <i class="fab fa-youtube">
          </i>
        </a>
      </div>
    </div>
    <div class="bg-[#a60000] text-white shadow-md z-50 relative">
      <div class="container mx-auto px-2 sm:px-4 py-3 flex items-center justify-between">
        <a href="/"><span class="tex-white font-bold">PEP-Mini Olympic 2025</span></a>
        <div class="flex items-center gap-2 sm:gap-4">
          <button @click="toggleMenu"
            class="lg:hidden focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 rounded p-1"
            aria-label="Toggle menu">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img src="../assets/logo-mini-olympic-2025.webp" alt="Logo" class="h-8 sm:h-10 w-auto" />
        </div>
        <nav
          class="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-semibold tracking-wide uppercase">
          <router-link to="/" class="hover:text-yellow-300 transition-colors duration-300 px-2 py-1">
            HOME
          </router-link>

          <div class="relative" @mouseenter="showRegDropdown = true" @mouseleave="showRegDropdown = false">
            <button class="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1 px-2 py-1">
              REGISTRASI
              <svg class="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showRegDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="dropdown">
              <div v-if="showRegDropdown"
                class="absolute left-0 mt-3 bg-white text-black rounded-xl shadow-xl w-48 xl:w-52 py-2 z-50 border">
                <router-link to="/registrasi"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">Peserta</router-link>
                <router-link to="/registrasi-funrun-embed"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">5K Fun
                  Run</router-link>
                <router-link to="/login"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">Login</router-link>
              </div>
            </transition>
          </div>
          <div class="relative" @mouseenter="showPesDropDown = true" @mouseleave="showPesDropDown = false">
            <button class="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1 px-2 py-1">
              PESERTA
              <svg class="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showPesDropDown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="dropdown">
              <div v-if="showPesDropDown"
                class="absolute left-0 mt-3 bg-white text-black rounded-xl shadow-xl w-48 xl:w-52 py-2 z-50 border">
                <router-link to="/list-peserta"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">Peserta
                  Cabor</router-link>
                <router-link to="/peserta-fun-run"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">Peserta 5K
                  Fun
                  Run</router-link>
              </div>
            </transition>
          </div>
          <router-link to="/berita" class="hover:text-yellow-300 transition-colors duration-300 px-2 py-1">
            BERITA
          </router-link>
          <div class="relative" @mouseenter="showAboutsDropdown = true" @mouseleave="showAboutsDropdown = false">
            <button class="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1 px-2 py-1">
              ABOUTS
              <svg class="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showAboutsDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="dropdown">
              <div v-if="showAboutsDropdown"
                class="absolute left-0 mt-3 bg-white text-black rounded-xl shadow-xl w-48 xl:w-52 py-2 z-50 border">
                <router-link to="/aboutUs"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">Tentang
                  Kami</router-link>
                <router-link to="/dokumen-technical-meeting"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">Dokumen
                  Teknikal Meeting</router-link>
                <router-link to="/dokumen-konsep"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">Dokumen
                  Konsep</router-link>
              </div>
            </transition>
          </div>
          <router-link to="/contactUs" class="hover:text-yellow-300 transition-colors duration-300 px-2 py-1">
            KONTAK
          </router-link>
          <div class="relative" @mouseenter="showAdditionalDropdown = true"
            @mouseleave="showAdditionalDropdown = false">
            <button class="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1 px-2 py-1">
              <span class="hidden xl:inline">ADDITIONAL</span>
              <span class="xl:hidden">INFO</span>
              <svg class="w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showAdditionalDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="dropdown">
              <div v-if="showAdditionalDropdown"
                class="absolute left-0 mt-3 bg-white text-black rounded-xl shadow-xl w-48 xl:w-52 py-2 z-50 border">
                <router-link to="/informasi-tambahan"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">Informasi
                  Tambahan</router-link>
                <router-link to="/akomodasi-dan-hotel"
                  class="block px-4 xl:px-5 py-2 hover:bg-gray-100 text-sm transition-colors duration-200">Hotel &
                  Akomodasi</router-link>
              </div>
            </transition>
          </div>
          <router-link to="/result-pertandingan-cabang-olahraga"
            class="hover:text-yellow-300 transition-colors duration-300 px-2 py-1">
            Hasil Pertandingan
          </router-link>
        </nav>
      </div>
      <transition name="fade">
        <div v-if="isOpen"
          class="lg:hidden bg-[#a60000] px-2 sm:px-4 pb-4 text-sm font-semibold uppercase space-y-2 border-t border-red-700">
          <router-link to="/" class="block hover:text-yellow-200 py-2 px-2 rounded transition-colors duration-200"
            @click="closeMenu">
            HOME
          </router-link>
          <div>
            <button @click="toggleRegDropdown"
              class="w-full flex justify-between items-center hover:text-yellow-200 py-2 px-2 rounded transition-colors duration-200">
              REGISTRASI
              <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': showMobileRegDropdown }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="mobile-dropdown">
              <div v-if="showMobileRegDropdown" class="ml-4 mt-2 space-y-1 bg-red-800 bg-opacity-50 rounded p-2">
                <router-link to="/registrasi"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">Peserta</router-link>
                <router-link to="/registrasi-funrun-embed"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">5K Fun Run</router-link>
                <router-link to="/login"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">Login</router-link>
              </div>
            </transition>
          </div>
          <div>
            <button @click="togglePesDropdown"
              class="w-full flex justify-between items-center hover:text-yellow-200 py-2 px-2 rounded transition-colors duration-200">
              PESERTA
              <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': showMobilePesDropdown }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="mobile-dropdown">
              <div v-if="showMobilePesDropdown" class="ml-4 mt-2 space-y-1 bg-red-800 bg-opacity-50 rounded p-2">
                <router-link to="/list-peserta"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">Peserta Cabor</router-link>
                <router-link to="/peserta-fun-run"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">Peserta 5K Fun Run</router-link>
              </div>
            </transition>
          </div>
          <router-link to="/berita" class="block hover:text-yellow-200 py-2 px-2 rounded transition-colors duration-200"
            @click="closeMenu">
            BERITA
          </router-link>
          <div>
            <button @click="toggleAboutsDropdown"
              class="w-full flex justify-between items-center hover:text-yellow-200 py-2 px-2 rounded transition-colors duration-200">
              ABOUTS
              <svg class="w-4 h-4 transition-transform duration-300" :class="{ 'rotate-180': showMobileAboutsDropdown }"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="mobile-dropdown">
              <div v-if="showMobileAboutsDropdown" class="ml-4 mt-2 space-y-1 bg-red-800 bg-opacity-50 rounded p-2">
                <router-link to="/aboutUs"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">Tentang Kami</router-link>
                <router-link to="/dokumen-technical-meeting"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">Dokumen Teknikal Meeting</router-link>
                <router-link to="/dokumen-konsep"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">Dokumen Konsep</router-link>
              </div>
            </transition>
          </div>
          <router-link to="/contactUs"
            class="block hover:text-yellow-200 py-2 px-2 rounded transition-colors duration-200" @click="closeMenu">
            KONTAK
          </router-link>
          <div>
            <button @click="toggleAdditionalDropdown"
              class="w-full flex justify-between items-center hover:text-yellow-200 py-2 px-2 rounded transition-colors duration-200">
              ADDITIONAL INFO
              <svg class="w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-180': showMobileAdditionalDropdown }" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="mobile-dropdown">
              <div v-if="showMobileAdditionalDropdown" class="ml-4 mt-2 space-y-1 bg-red-800 bg-opacity-50 rounded p-2">
                <router-link to="/informasi-tambahan"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">Informasi Tambahan</router-link>
                <router-link to="/akomodasi-dan-hotel"
                  class="block hover:text-yellow-200 py-1 px-2 rounded text-sm transition-colors duration-200"
                  @click="closeMenu">Hotel & Akomodasi</router-link>
              </div>
            </transition>
          </div>
          <router-link to="/result-pertandingan-cabang-olahraga"
            class="block hover:text-yellow-200 py-2 px-2 rounded transition-colors duration-200" @click="closeMenu">
            Hasil Pertandingan
          </router-link>
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

      showJadwalDropdown: false,
      showRegDropdown: false,
      showPesDropDown: false,
      showAboutsDropdown: false,
      showAdditionalDropdown: false,

      showMobileJadwalDropdown: false,
      showMobileRegDropdown: false,
      showMobilePesDropdown: false,
      showMobileAboutsDropdown: false,
      showMobileAdditionalDropdown: false,
      currentDate: '',
      currentTime: ''
    };
  },
  mounted() {
    this.updateDateTime();
    this.interval = setInterval(this.updateDateTime, 1000);

    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    clearInterval(this.interval);
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (!this.isOpen) {
        this.closeAllMobileDropdowns();
      }
    },
    closeMenu() {
      this.isOpen = false;
      this.closeAllMobileDropdowns();
    },
    toggleJadwalDropdown() {
      this.showMobileJadwalDropdown = !this.showMobileJadwalDropdown;
    },
    toggleRegDropdown() {
      this.showMobileRegDropdown = !this.showMobileRegDropdown;
    },
    togglePesDropdown() {
      this.showMobilePesDropdown = !this.showMobilePesDropdown;
    },
    toggleAboutsDropdown() {
      this.showMobileAboutsDropdown = !this.showMobileAboutsDropdown;
    },
    toggleAdditionalDropdown() {
      this.showMobileAdditionalDropdown = !this.showMobileAdditionalDropdown;
    },
    closeAllMobileDropdowns() {
      this.showMobileJadwalDropdown = false;
      this.showMobileRegDropdown = false;
      this.showMobileAboutsDropdown = false;
      this.showMobilePesDropdown = false;
      this.showMobileAdditionalDropdown = false;
    },
    handleClickOutside(event) {
      if (!event.target.closest('header') && this.isOpen) {
        this.closeMenu();
      }
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
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
  transition: all 0.3s ease;
}

.mobile-dropdown-enter-from,
.mobile-dropdown-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.mobile-dropdown-enter-to,
.mobile-dropdown-leave-from {
  opacity: 1;
  max-height: 300px;
  transform: translateY(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(252, 211, 77, 0.5);
}

.hover\:text-yellow-300:hover,
.hover\:text-yellow-200:hover {
  transition: color 0.2s ease-in-out;
}

@media (max-width: 1023px) {
  .space-y-2>*+* {
    margin-top: 0.5rem;
  }
}

.lg\:hidden {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.lg\:hidden::-webkit-scrollbar {
  width: 4px;
}

.lg\:hidden::-webkit-scrollbar-track {
  background: transparent;
}

.lg\:hidden::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}
</style>