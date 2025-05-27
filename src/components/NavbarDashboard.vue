<template>
  <header class="bg-[#F0282D] text-white py-3 shadow">
    <div class="container mx-auto flex items-center justify-start space-x-4 px-4">
      <button @click="toggleMenu" class="focus:outline-none bg-gray-50 rounded-full">
        <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <img src="/logo-mini-olympic-2025.png" alt="Logo" class="h-10">

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-4 text-sm md:text-base items-center relative">
        <a href="#" class="hover:underline">Jadwal & Hasil</a>
        <a href="#" class="hover:underline">Registrasi</a>

        <!-- Wrapper menangkap hover -->
        <div class="relative"
             @mouseenter="isDropdownOpen = true"
             @mouseleave="isDropdownOpen = false">
          <button class="hover:underline">List Peserta</button>
          <transition name="fade">
            <div v-if="isDropdownOpen"
                 class="absolute left-0 mt-2 bg-white text-black rounded shadow-lg z-50 min-w-max w-40">
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Tennis</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Basket</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Senam</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Tenis Meja</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Badminton</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">E-Sport</a>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100">Volley</a>
            </div>
          </transition>
        </div>

        <a href="#" class="hover:underline">Berita</a>
        <a href="#" class="hover:underline">About Us</a>
        <a href="#" class="hover:underline">Informasi Cabor</a>
        <a href="#" class="hover:underline">XXXX</a>
      </nav>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isOpen" class="md:hidden px-4 pt-2 pb-4 space-y-2 bg-orange-500 text-sm">
      <a href="#" class="block hover:underline">Jadwal & Hasil</a>
      <a href="#" class="block hover:underline">Registrasi</a>
      <div>
        <button @click="toggleDropdown" class="block w-full text-left hover:underline">List Peserta</button>
        <div v-if="showDropdown" class="pl-4 space-y-1">
          <a href="#" class="block hover:underline">Tennis</a>
          <a href="#" class="block hover:underline">Basket</a>
          <a href="#" class="block hover:underline">Senam</a>
          <a href="#" class="block hover:underline">Tenis Meja</a>
          <a href="#" class="block hover:underline">Badminton</a>
          <a href="#" class="block hover:underline">E-Sport</a>
          <a href="#" class="block hover:underline">Volley</a>
        </div>
      </div>
      <a href="#" class="block hover:underline">Berita</a>
      <a href="#" class="block hover:underline">About Us</a>
      <a href="#" class="block hover:underline">Informasi Cabor</a>
      <a href="#" class="block hover:underline">XXXX</a>
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
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
