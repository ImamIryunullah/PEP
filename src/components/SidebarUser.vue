<!-- src/components/SidebarUser.vue -->
<template>
    <aside
      :class="[ 
        'bg-white shadow-md w-64 p-6 space-y-6 fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0 md:relative md:z-auto'
      ]"
    >
      <h2 class="text-2xl font-bold text-[#D71E28]">Mini Olympic</h2>
      
      <nav class="flex flex-col space-y-2 mt-8">
        <router-link to="/user/dashboard" class="text-gray-700 hover:text-[#D71E28] font-medium">
          Dashboard
        </router-link>
        <router-link to="/user/profil" class="text-gray-700 hover:text-[#D71E28] font-medium">
          Profil Saya
        </router-link>
        <router-link to="/user/jadwal" class="text-gray-700 hover:text-[#D71E28] font-medium">
          Jadwal Pertandingan
        </router-link>
        <router-link to="/user/berita" class="text-gray-700 hover:text-[#D71E28] font-medium">
          Berita
        </router-link>
        <router-link to="/user/hasil" class="text-gray-700 hover:text-[#D71E28] font-medium">
          Hasil Pertandingan
        </router-link>
      </nav>
  
      <div class="absolute bottom-6 left-6">
        <button
          @click="$emit('logout')"
          class="text-sm text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'SidebarUser',
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  