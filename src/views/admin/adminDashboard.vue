<template>
  <div class="min-h-screen flex bg-gray-100 relative">
    <Sidebar :isOpen="isSidebarOpen" />
    <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"></div>
    <div :class="[
      'flex-1 flex flex-col transition-all duration-300 ease-in-out min-h-screen',
      isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
    ]">

      <!-- Mobile Header -->
      <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center lg:hidden">
        <button @click="toggleSidebar" class="text-gray-700 text-2xl focus:outline-none hover:text-[#D71E28] transition-colors">
          <i class="fas fa-bars"></i>
        </button>
        <h1 class="text-lg font-semibold text-[#D71E28]">Dashboard Admin</h1>
        <div class="w-8"></div> <!-- Spacer for center alignment -->
      </header>

      <!-- Main Content -->
      <main class="px-4 sm:px-6 py-4 sm:py-8 flex-1">
        <!-- Desktop Title -->
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 hidden lg:block">Dashboard Admin</h1>
        
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div class="bg-red-100 text-[#D71E28] p-2 sm:p-3 rounded-full flex-shrink-0">
              <i class="fas fa-users text-lg sm:text-xl"></i>
            </div>
            <div class="min-w-0">
              <p class="text-xs sm:text-sm text-gray-500 truncate">Total Peserta</p>
              <p class="text-xl sm:text-2xl font-semibold">218</p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div class="bg-red-100 text-[#D71E28] p-2 sm:p-3 rounded-full flex-shrink-0">
              <i class="fas fa-dumbbell text-lg sm:text-xl"></i>
            </div>
            <div class="min-w-0">
              <p class="text-xs sm:text-sm text-gray-500 truncate">Cabang Olahraga</p>
              <p class="text-xl sm:text-2xl font-semibold">9</p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
            <div class="bg-red-100 text-[#D71E28] p-2 sm:p-3 rounded-full flex-shrink-0">
              <i class="fas fa-running text-lg sm:text-xl"></i>
            </div>
            <div class="min-w-0">
              <p class="text-xs sm:text-sm text-gray-500 truncate">Fun Run Registrasi</p>
              <p class="text-xl sm:text-2xl font-semibold">64</p>
            </div>
          </div>
        </div>

        <!-- Chart Section -->
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-10">
          <h2 class="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">Status Verifikasi</h2>
          <div class="flex gap-4 sm:gap-6">
            <div class="w-full h-32 sm:h-48 bg-red-50 rounded-lg flex items-center justify-center text-[#D71E28] text-xs sm:text-sm font-medium text-center px-4">
              [Placeholder untuk Chart/Diagram]
            </div>
          </div>
        </div>

        <!-- Table Section -->
        <div class="bg-white rounded-xl shadow-sm">
          <div class="p-4 sm:p-6 border-b border-gray-200">
            <h2 class="text-base sm:text-lg font-bold text-gray-800">Kontingen Terbaru</h2>
          </div>
          
          <!-- Mobile Card View -->
          <div class="block sm:hidden">
            <div v-for="item in kontingen" :key="item.nama" class="border-b border-gray-200 last:border-b-0 p-4">
              <div class="space-y-2">
                <div class="font-semibold text-gray-800">{{ item.nama }}</div>
                <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>
                    <span class="text-gray-500">Peserta:</span>
                    <span class="font-medium ml-1">{{ item.peserta }}</span>
                  </div>
                  <div>
                    <span class="text-gray-500">Verifikasi:</span>
                    <span class="font-medium ml-1">{{ item.verifikasi }}</span>
                  </div>
                </div>
                <div class="text-xs text-gray-500">
                  Terakhir update: {{ item.updated }}
                </div>
              </div>
            </div>
          </div>

          <!-- Desktop Table View -->
          <div class="hidden sm:block overflow-x-auto">
            <table class="min-w-full table-auto text-sm text-gray-700">
              <thead class="bg-[#D71E28] text-white">
                <tr>
                  <th class="px-4 py-3 text-left font-semibold">Kontingen</th>
                  <th class="px-4 py-3 text-left font-semibold">Jumlah Peserta</th>
                  <th class="px-4 py-3 text-left font-semibold">Terverifikasi</th>
                  <th class="px-4 py-3 text-left font-semibold">Terakhir Update</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="item in kontingen" :key="item.nama" class="hover:bg-gray-50 transition-colors">
                  <td class="px-4 py-3 font-medium">{{ item.nama }}</td>
                  <td class="px-4 py-3">{{ item.peserta }}</td>
                  <td class="px-4 py-3">{{ item.verifikasi }}</td>
                  <td class="px-4 py-3 text-gray-600">{{ item.updated }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: "AdminDashboard",
  components: { Sidebar },
  data() {
    return {
      isSidebarOpen: false,
      kontingen: [
        { nama: "RU IV Cilacap", peserta: 24, verifikasi: "20", updated: "30 Mei 2025" },
        { nama: "Pertamina Hulu Rokan", peserta: 18, verifikasi: "18", updated: "29 Mei 2025" },
        { nama: "PT KPI", peserta: 21, verifikasi: "21", updated: "29 Mei 2025" }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>