<template>
  <aside
    :class="[
      'bg-white shadow-md w-64 p-6 fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out',
      isOpen ? 'translate-x-0' : '-translate-x-full',
      'md:translate-x-0 md:relative md:z-auto',
      'flex flex-col justify-between'
    ]"
  >
    <!-- Header dan navigasi -->
    <div>
      <h2 class="text-2xl font-bold text-[#D71E28]">Admin Panel</h2>
      <nav class="flex flex-col space-y-2 mt-8">
        <a href="/admin/dashboard" class="text-gray-700 hover:text-[#D71E28] font-medium">Dashboard</a>
        <a href="/admin/peserta" class="text-gray-700 hover:text-[#D71E28] font-medium">Peserta</a>
        <a href="/admin/verifikasi-peserta" class="text-gray-700 hover:text-[#D71E28] font-medium">Verifikasi</a>
        <a href="/admin/kelola-berita" class="text-gray-700 hover:text-[#D71E28] font-medium">Kelola Berita</a>
        <a href="/admin/kelola-skor" class="text-gray-700 hover:text-[#D71E28] font-medium">Skor Pertandingan</a>
      </nav>
    </div>

    <!-- Tombol Logout -->
    <button
      @click="handleLogout"
      class="text-red-600 hover:text-red-800 font-medium text-left"
    >
      <i class="fas fa-sign-out-alt mr-2"></i>Logout
    </button>
  </aside>
</template>

<script>
export default {
  name: "SidebarAdmin",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleLogout() {
      // Aksi logout, bisa disesuaikan dengan router atau auth method
      console.log("Logout clicked");
      // Contoh jika pakai Vue Router:
      this.$router.push("/login");
    },
  },
};
</script>
