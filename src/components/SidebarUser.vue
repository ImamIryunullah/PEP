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
      <router-link to="/peserta/dashboard" class="text-gray-700 hover:text-[#D71E28] font-medium">
        Dashboard
      </router-link>  
      <router-link to="/peserta/formulir-pendaftaran" class="text-gray-700 hover:text-[#D71E28] font-medium">
        Formulir Pendaftaran  
      </router-link>  
      <router-link to="/peserta/list-peserta" class="text-gray-700 hover:text-[#D71E28] font-medium">
        List Team  
      </router-link>  
      <router-link to="/peserta/rundown" class="text-gray-700 hover:text-[#D71E28] font-medium">
        Rundown (Wajib Baca)  
      </router-link>  
    </nav>

    <div class="absolute bottom-6 left-6">
      <button
        @click="handleLogout"
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
  methods: {
    handleLogout() {
      this.$emit('logout');
      this.$router.push('/login'); 
    }
  }
};
</script>
