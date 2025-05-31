<template>
  <header>
    
    <div
      class="bg-white text-gray-700 text-sm font-medium px-4 py-1 flex justify-between items-center border-b border-gray-200">
      <div>{{ currentDate }} - {{ currentTime }}</div>
      <div class="flex gap-4 text-xl">
        <a href="https://facebook.com" target="_blank" class="hover:text-blue-600" aria-label="Facebook"><i
            class="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com" target="_blank" class="hover:text-blue-400" aria-label="Twitter"><i
            class="fab fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank" class="hover:text-pink-500" aria-label="Instagram"><i
            class="fab fa-instagram"></i></a>
        <a href="https://youtube.com" target="_blank" class="hover:text-red-600" aria-label="YouTube"><i
            class="fab fa-youtube"></i></a>
      </div>
    </div>

    
    <div class="bg-[#a60000] text-white shadow-md z-50 relative">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        
        <div class="flex items-center gap-4">
          <button @click="toggleMenu" class="md:hidden focus:outline-none">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img src="/logo-mini-olympic-2025.png" alt="Logo" class="h-10" />
        </div>

        
        <nav class="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide uppercase">
          <router-link to="/" class="hover:text-yellow-300 transition duration-300">HOME</router-link>
          
          
          <div class="relative" 
               @mouseenter="showJadwalDropdown = true" 
               @mouseleave="showJadwalDropdown = false">
            <button class="hover:text-yellow-300 transition duration-300 flex items-center gap-1">
              JADWAL DAN HASIL
              <svg class="w-4 h-4 transition-transform duration-300" 
                   :class="{ 'rotate-180': showJadwalDropdown }"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="dropdown">
              <div v-if="showJadwalDropdown"
                class="absolute left-0 mt-3 bg-white text-black rounded-xl shadow-xl w-52 py-2 z-50">
                <router-link to="/jadwal-dan-hasil/sepak-bola"
                  class="block px-5 py-2 hover:bg-gray-100 rounded-t">Sepak Bola</router-link>
                <router-link to="/jadwal-dan-hasil/volley"
                  class="block px-5 py-2 hover:bg-gray-100">Volley</router-link>
                <router-link to="/jadwal-dan-hasil/tenis-meja" 
                  class="block px-5 py-2 hover:bg-gray-100">Tenis Meja</router-link>
                <router-link to="/jadwal-dan-hasil/tenis-lapangan" 
                  class="block px-5 py-2 hover:bg-gray-100">Tenis Lapangan</router-link>
                <router-link to="/jadwal-dan-hasil/esport"
                  class="block px-5 py-2 hover:bg-gray-100">Esport</router-link>
                <router-link to="/jadwal-dan-hasil/badminton"
                  class="block px-5 py-2 hover:bg-gray-100">Badminton</router-link>
                <router-link to="/jadwal-dan-hasil/lari" 
                  class="block px-5 py-2 hover:bg-gray-100">Lari</router-link>
                <router-link to="/jadwal-dan-hasil/senam"
                  class="block px-5 py-2 hover:bg-gray-100">Senam</router-link>
                <router-link to="/jadwal-dan-hasil/basket"
                  class="block px-5 py-2 hover:bg-gray-100 rounded-b">Basket</router-link>
              </div>
            </transition>
          </div>

          
          <div class="relative" 
               @mouseenter="showRegDropdown = true" 
               @mouseleave="showRegDropdown = false">
            <button class="hover:text-yellow-300 transition duration-300 flex items-center gap-1">
              REGISTRASI
              <svg class="w-4 h-4 transition-transform duration-300" 
                   :class="{ 'rotate-180': showRegDropdown }"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="dropdown">
              <div v-if="showRegDropdown"
                class="absolute left-0 mt-3 bg-white text-black rounded-xl shadow-xl w-52 py-2 z-50">
                <router-link to="/registrasi"
                  class="block px-5 py-2 hover:bg-gray-100 rounded-t">Peserta</router-link>
                <router-link to="/registrasi-funrun-embed" 
                  class="block px-5 py-2 hover:bg-gray-100 rounded-b">5K Fun Run</router-link>
              </div>
            </transition>
          </div>

          <router-link to="/list-peserta" class="hover:text-yellow-300 transition duration-300">List Peserta</router-link>
          <router-link to="/berita" class="hover:text-yellow-300 transition duration-300">Berita</router-link>
          
          
          <div class="relative" 
               @mouseenter="showAboutsDropdown = true" 
               @mouseleave="showAboutsDropdown = false">
            <button class="hover:text-yellow-300 transition duration-300 flex items-center gap-1">
              ABOUTS
              <svg class="w-4 h-4 transition-transform duration-300" 
                   :class="{ 'rotate-180': showAboutsDropdown }"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="dropdown">
              <div v-if="showAboutsDropdown"
                class="absolute left-0 mt-3 bg-white text-black rounded-xl shadow-xl w-52 py-2 z-50">
                <router-link to="/aboutUs" 
                  class="block px-5 py-2 hover:bg-gray-100 rounded-t">Tentang Kami</router-link>
                <router-link to="/dokumen-technical-meeting"
                  class="block px-5 py-2 hover:bg-gray-100">Dokumen Teknikal Meeting</router-link>
                <router-link to="/dokumen-konsep" 
                  class="block px-5 py-2 hover:bg-gray-100 rounded-b">Dokumen Konsep</router-link>
              </div>
            </transition>
          </div>
          
          <router-link to="/contactUs" class="hover:text-yellow-300 transition duration-300">Kontak</router-link>
          <router-link to="/informasi-tambahan" class="hover:text-yellow-300 transition duration-300">Additional Info</router-link>
        </nav>
      </div>

      
      <transition name="fade">
        <div v-if="isOpen" class="md:hidden bg-[#a60000] px-4 pb-4 text-sm font-semibold uppercase space-y-2">
          <router-link to="/" class="block hover:text-yellow-200" @click="closeMenu">HOME</router-link>
          
          
          <div>
            <button @click="toggleJadwalDropdown" class="w-full flex justify-between items-center hover:text-yellow-200">
              JADWAL DAN HASIL
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showMobileJadwalDropdown }" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="mobile-dropdown">
              <div v-if="showMobileJadwalDropdown" class="ml-4 mt-2 space-y-1">
                <router-link to="/jadwal-dan-hasil/sepak-bola" class="block hover:text-yellow-200" @click="closeMenu">Sepak Bola</router-link>
                <router-link to="/jadwal-dan-hasil/volley" class="block hover:text-yellow-200" @click="closeMenu">Volley</router-link>
                <router-link to="/jadwal-dan-hasil/tenis-meja" class="block hover:text-yellow-200" @click="closeMenu">Tenis Meja</router-link>
                <router-link to="/jadwal-dan-hasil/tenis-lapangan" class="block hover:text-yellow-200" @click="closeMenu">Tenis Lapangan</router-link>
                <router-link to="/jadwal-dan-hasil/esport" class="block hover:text-yellow-200" @click="closeMenu">Esport</router-link>
                <router-link to="/jadwal-dan-hasil/badminton" class="block hover:text-yellow-200" @click="closeMenu">Badminton</router-link>
                <router-link to="/jadwal-dan-hasil/lari" class="block hover:text-yellow-200" @click="closeMenu">Lari</router-link>
                <router-link to="/jadwal-dan-hasil/senam" class="block hover:text-yellow-200" @click="closeMenu">Senam</router-link>
                <router-link to="/jadwal-dan-hasil/basket" class="block hover:text-yellow-200" @click="closeMenu">Basket</router-link>
              </div>
            </transition>
          </div>

          <div>
            <button @click="toggleRegDropdown" class="w-full flex justify-between items-center hover:text-yellow-200">
              REGISTRASI
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showMobileRegDropdown }" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="mobile-dropdown">
              <div v-if="showMobileRegDropdown" class="ml-4 mt-2 space-y-1">
                <router-link to="/registrasi" class="block hover:text-yellow-200" @click="closeMenu">Peserta</router-link>
                <router-link to="/registrasi-funrun-embed" class="block hover:text-yellow-200" @click="closeMenu">5K Fun Run</router-link>
              </div>
            </transition>
          </div>

          <router-link to="/list-peserta" class="block hover:text-yellow-200" @click="closeMenu">List Peserta</router-link>
          <router-link to="/berita" class="block hover:text-yellow-200" @click="closeMenu">Berita</router-link>
          
          
          <div>
            <button @click="toggleAboutsDropdown" class="w-full flex justify-between items-center hover:text-yellow-200">
              ABOUTS
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showMobileAboutsDropdown }" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition name="mobile-dropdown">
              <div v-if="showMobileAboutsDropdown" class="ml-4 mt-2 space-y-1">
                <router-link to="/aboutUs" class="block hover:text-yellow-200" @click="closeMenu">Tentang Kami</router-link>
                <router-link to="/dokumen-technical-meeting" class="block hover:text-yellow-200" @click="closeMenu">Dokumen Teknikal Meeting</router-link>
                <router-link to="/dokumen-konsep" class="block hover:text-yellow-200" @click="closeMenu">Dokumen Konsep</router-link>
              </div>
            </transition>
          </div>
          
          <router-link to="/contactUs" class="block hover:text-yellow-200" @click="closeMenu">Kontak</router-link>
          <router-link to="/informasi-tambahan" class="block hover:text-yellow-200" @click="closeMenu">Additional Info</router-link>
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
      // Desktop dropdown states
      showJadwalDropdown: false,
      showRegDropdown: false,
      showAboutsDropdown: false,
      // Mobile dropdown states
      showMobileJadwalDropdown: false,
      showMobileRegDropdown: false,
      showMobileAboutsDropdown: false,
      currentDate: '',
      currentTime: ''
    };
  },
  mounted() {
    this.updateDateTime();
    this.interval = setInterval(this.updateDateTime, 1000);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    clearInterval(this.interval);
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      // Close all mobile dropdowns when toggling main menu
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
    toggleAboutsDropdown() {
      this.showMobileAboutsDropdown = !this.showMobileAboutsDropdown;
    },
    closeAllMobileDropdowns() {
      this.showMobileJadwalDropdown = false;
      this.showMobileRegDropdown = false;
      this.showMobileAboutsDropdown = false;
    },
    handleClickOutside(event) {
      // Close mobile menu if clicking outside
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
/* Dropdown animations */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Mobile dropdown animations */
.mobile-dropdown-enter-active,
.mobile-dropdown-leave-active {
  transition: all 0.3s ease;
}

.mobile-dropdown-enter-from {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.mobile-dropdown-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

/* Fade animation for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Ensure dropdowns appear above other content */
.relative {
  position: relative;
}

/* Smooth hover transitions */
nav a,
nav button {
  position: relative;
  overflow: hidden;
}

nav a:hover,
nav button:hover {
  transform: translateY(-1px);
}

/* Add subtle shadow to dropdown menus */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Responsive improvements */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>