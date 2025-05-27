<template>
  <header class="bg-gradient-to-r from-[#D71E28] to-[#FF7A59] text-white shadow-md z-50">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <!-- Logo dan toggle -->
      <div class="flex items-center gap-4">
        <button @click="toggleMenu" class="md:hidden focus:outline-none">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <img src="/logo-mini-olympic-2025.png" alt="Logo" class="h-10" />
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide uppercase">
        <a href="#" class="hover:text-yellow-300 transition">Jadwal & Hasil</a>
        <a href="#" class="hover:text-yellow-300 transition">Registrasi</a>

        <!-- Dropdown -->
        <div class="relative"
             @mouseenter="isDropdownOpen = true"
             @mouseleave="isDropdownOpen = false">
          <button class="hover:text-yellow-300 transition flex items-center gap-1">
            List Peserta
            <svg class="w-4 h-4 transform" :class="{ 'rotate-180': isDropdownOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <transition name="fade">
            <div v-if="isDropdownOpen"
                 class="absolute left-0 mt-2 bg-white text-black rounded-md shadow-lg z-50 w-48">
              <a v-for="cabor in cabors" :key="cabor" href="#" class="block px-4 py-2 hover:bg-gray-100">
                {{ cabor }}
              </a>
            </div>
          </transition>
        </div>

        <a href="#" class="hover:text-yellow-300 transition">Berita</a>
        <a href="#" class="hover:text-yellow-300 transition">About Us</a>
        <a href="#" class="hover:text-yellow-300 transition">Informasi Cabor</a>
        <a href="#" class="hover:text-yellow-300 transition">Kontak</a>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden px-4 pb-4 bg-[#D71E28] space-y-2 text-sm font-semibold uppercase">
        <a href="#" class="block hover:text-yellow-200">Jadwal & Hasil</a>
        <a href="#" class="block hover:text-yellow-200">Registrasi</a>
        <div>
          <button @click="toggleDropdown" class="w-full text-left hover:text-yellow-200 flex items-center gap-1">
            List Peserta
            <svg class="w-4 h-4 transform" :class="{ 'rotate-180': showDropdown }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="showDropdown" class="pl-4 space-y-1 mt-1">
            <a v-for="cabor in cabors" :key="cabor" href="#" class="block hover:text-yellow-200">
              {{ cabor }}
            </a>
          </div>
        </div>
        <a href="#" class="block hover:text-yellow-200">Berita</a>
        <a href="#" class="block hover:text-yellow-200">About Us</a>
        <a href="#" class="block hover:text-yellow-200">Informasi Cabor</a>
        <a href="#" class="block hover:text-yellow-200">Kontak</a>
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
      cabors: [
        "Tennis", "Basket", "Senam", "Tenis Meja", "Badminton", "E-Sport", "Volley"
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
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
