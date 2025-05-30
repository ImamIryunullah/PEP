<template>
    <div class="min-h-screen flex bg-gray-100 relative">
      <!-- Sidebar -->
      <Sidebar :isOpen="isSidebarOpen" />
  
      <!-- Overlay ketika sidebar terbuka di mobile -->
      <div
        v-if="isSidebarOpen"
        @click="isSidebarOpen = false"
        class="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
      ></div>
  
      <!-- Konten utama -->
      <div :class="[
        'flex-1 flex flex-col transition-margin duration-300 ease-in-out min-h-screen',
        isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
      ]">
        <!-- Top bar mobile -->
        <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
          <button @click="toggleSidebar" class="text-gray-700 text-2xl focus:outline-none">
            <i class="fas fa-bars"></i>
          </button>
          <h1 class="text-lg font-semibold text-[#D71E28]">Verifikasi Peserta</h1>
        </header>
  
        <main class="px-6 py-8">
          <h1 class="text-3xl font-bold text-gray-800 mb-6 hidden md:block">Verifikasi Peserta</h1>
  
          <div class="bg-white rounded-xl shadow p-6 overflow-x-auto">
            <table class="min-w-full table-auto text-sm text-gray-700">
              <thead class="bg-[#D71E28] text-white">
                <tr>
                  <th class="px-4 py-2 text-left">Nama Lengkap</th>
                  <th class="px-4 py-2 text-left">Email</th>
                  <th class="px-4 py-2 text-left">Status Verifikasi</th>
                  <th class="px-4 py-2 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="peserta in pesertaList" :key="peserta.email">
                  <td class="px-4 py-2">{{ peserta.namaLengkap }}</td>
                  <td class="px-4 py-2">{{ peserta.email }}</td>
                  <td class="px-4 py-2">
                    <span
                      :class="{
                        'text-green-600 font-semibold': peserta.isVerified,
                        'text-red-600 font-semibold': !peserta.isVerified,
                      }"
                    >
                      {{ peserta.isVerified ? "Terverifikasi" : "Belum Verifikasi" }}
                    </span>
                  </td>
                  <td class="px-4 py-2">
                    <button
                      v-if="!peserta.isVerified"
                      @click="verifikasiPeserta(peserta.email)"
                      class="bg-[#D71E28] hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Verifikasi
                    </button>
                    <span v-else class="text-gray-500 italic">Sudah diverifikasi</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "@/components/Sidebar.vue";
  
  export default {
    name: "VerifikasiPeserta",
    components: { Sidebar },
    data() {
      return {
        isSidebarOpen: false,
        pesertaList: [
          {
            namaLengkap: "Andi Wijaya",
            email: "andi@example.com",
            isVerified: false,
          },
          {
            namaLengkap: "Siti Nurhaliza",
            email: "siti@example.com",
            isVerified: true,
          },
          {
            namaLengkap: "Budi Santoso",
            email: "budi@example.com",
            isVerified: false,
          },
        ],
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      verifikasiPeserta(email) {
        const peserta = this.pesertaList.find((p) => p.email === email);
        if (peserta) {
          peserta.isVerified = true;
        }
      },
    },
  };
  </script>
  