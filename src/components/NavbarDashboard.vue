<template>
    <div class="bg-white py-2"></div>
    <header class="bg-[#F0282D] text-white py-3 shadow">
      <div class="container mx-auto flex items-center justify-start space-x-4 px-4">

        <button @click="toggleMenu" class="focus:outline-none bg-gray-50 rounded-full">
          <svg class="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>  
        </button>
  
        <img src="/logo-mini-olympic-2025.png" alt="Logo" class="h-10">
  
        <nav class="hidden md:flex space-x-4 text-sm md:text-base">
          <a href="#" class="hover:underline">Jadwal & Hasil</a>
          <a href="#" class="hover:underline">Registrasi</a>
          <a href="#" class="hover:underline">List Peserta</a>
          <a href="#" class="hover:underline">Berita</a>
          <a href="#" class="hover:underline">About Us</a>
          <a href="#" class="hover:underline">Informasi Cabor</a>
          <a href="#" class="hover:underline">XXXX</a>
        </nav>
      </div>
  
      <div v-if="isOpen" class="md:hidden px-4 pt-2 pb-4 space-y-2 bg-orange-500 text-sm">
        <a href="#" class="block hover:underline">Jadwal & Hasil</a>
        <a href="#" class="block hover:underline">Registrasi</a>
        <a href="#" class="block hover:underline">List Peserta</a>
        <a href="#" class="block hover:underline">Berita</a>
        <a href="#" class="block hover:underline">AboutUs</a>
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
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  