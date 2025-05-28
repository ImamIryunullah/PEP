<template>
  <header class="bg-[#a60000] text-white shadow-md z-50">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <div class="flex items-center gap-4">
        <button @click="toggleMenu" class="md:hidden focus:outline-none">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <img src="/logo-mini-olympic-2025.png" alt="Logo" class="h-10" />
      </div>

      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide uppercase">
        <router-link to="/" class="hover:text-yellow-300 transition">Jadwal & Hasil</router-link>

        <div class="relative" @mouseenter="isRegDropdownOpen = true" @mouseleave="isRegDropdownOpen = false">
          <button class="hover:text-yellow-300 transition flex items-center gap-1">
            Registrasi
            <svg class="w-4 h-4 transform" :class="{ 'rotate-180': isRegDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <transition name="fade">
            <div v-if="isRegDropdownOpen" class="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-50 w-48">
              <router-link to="/registrasi" class="block px-4 py-2 hover:bg-gray-100">Peserta</router-link>
              <router-link to="/registrasi" class="block px-4 py-2 hover:bg-gray-100">5K Fun Run</router-link>
            </div>
          </transition>
        </div>

        <div class="relative" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
          <button class="hover:text-yellow-300 transition flex items-center gap-1">
            List Peserta
            <svg class="w-4 h-4 transform" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <transition name="fade">
            <div v-if="isDropdownOpen" class="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-50 w-48">
              <router-link v-for="cabor in cabors" :key="cabor" to="/list-peserta" class="block px-4 py-2 hover:bg-gray-100">
                {{ cabor }}
              </router-link>
            </div>
          </transition>
        </div>

        <router-link to="/berita" class="hover:text-yellow-300 transition">Berita</router-link>
        <router-link to="/aboutUs" class="hover:text-yellow-300 transition">About Us</router-link>
        <router-link to="/informasi-cabang-olahraga" class="hover:text-yellow-300 transition">Informasi Cabor</router-link>
        <router-link to="/contactUs" class="hover:text-yellow-300 transition">Kontak</router-link>
        <router-link to="/informasi-tambahan" class="hover:text-yellow-300 transition">Additional Information</router-link>
      </nav>
    </div>

    <transition name="fade">
      <div v-if="isOpen" class="md:hidden px-4 pb-4 bg-[#D71E28] space-y-2 text-sm font-semibold uppercase">
        <router-link to="/" class="block hover:text-yellow-200">Jadwal & Hasil</router-link>
        <div>
          <button @click="toggleRegDropdown" class="w-full text-left hover:text-yellow-200 flex items-center gap-1">
            Registrasi
            <svg class="w-4 h-4 transform" :class="{ 'rotate-180': showRegDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="showRegDropdown" class="pl-4 space-y-1 mt-1">
            <router-link to="/registrasi" class="block hover:text-yellow-200">Peserta</router-link>
            <router-link to="/registrasi" class="block hover:text-yellow-200">5K Fun Run</router-link>
          </div>
        </div>
        <div>
          <button @click="toggleDropdown" class="w-full text-left hover:text-yellow-200 flex items-center gap-1">
            List Peserta
            <svg class="w-4 h-4 transform" :class="{ 'rotate-180': showDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="showDropdown" class="pl-4 space-y-1 mt-1">
            <router-link v-for="cabor in cabors" :key="cabor" to="/list-peserta" class="block hover:text-yellow-200">
              {{ cabor }}
            </router-link>
          </div>
        </div>
        <router-link to="/berita" class="block hover:text-yellow-200">Berita</router-link>
        <router-link to="/aboutUs" class="block hover:text-yellow-200">About Us</router-link>
        <router-link to="/informasi-cabang-olahraga" class="block hover:text-yellow-200">Informasi Cabor</router-link>
        <router-link to="/contactUs" class="block hover:text-yellow-200">Kontak</router-link>
        <router-link to="/informasi-tambahan" class="block hover:text-yellow-200">Additional Information</router-link>
        
      </div>
    </transition>
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
      ]
    };
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
