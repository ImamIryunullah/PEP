<template>
  <div class="min-h-screen flex bg-gray-100 relative font-sans">
    <Sidebar :isOpen="isSidebarOpen" />
    <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"></div>
    <div :class="[
      'flex-1 flex flex-col transition-all duration-300 ease-in-out min-h-screen',
      isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
    ]">

      <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center lg:hidden">
        <button @click="toggleSidebar" class="text-gray-700 text-2xl focus:outline-none hover:text-[#D71E28] transition-colors">
          <i class="fas fa-bars"></i>
        </button>
        <h1 class="text-lg font-semibold text-[#D71E28]">Dashboard Admin</h1>
        <div class="w-8"></div> 
      </header>

      <main class="px-4 sm:px-6 py-4 sm:py-8 flex-1">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 hidden lg:block">Dashboard Admin</h1>
        
        <!-- Stats Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div class="bg-red-100 text-[#D71E28] p-2 sm:p-3 rounded-full flex-shrink-0">
              <i class="fas fa-users text-lg sm:text-xl"></i>
            </div>
            <div class="min-w-0">
              <p class="text-xs sm:text-sm text-gray-500 truncate">Total Peserta</p>
              <p class="text-xl sm:text-2xl font-semibold">{{ totalPeserta }}</p>
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
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 sm:mb-10">
          <!-- Status Verifikasi Chart -->
          <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 class="text-base sm:text-lg font-bold text-gray-800 mb-4">Status Verifikasi</h2>
            <div class="relative h-64 flex items-center justify-center">
              <!-- Donut Chart -->
              <div class="relative w-48 h-48">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <!-- Background circle -->
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" stroke-width="8"/>
                  <!-- Terverifikasi -->
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" stroke-width="8" 
                    :stroke-dasharray="`${verifikasiPercentage * 2.51} 251`" stroke-linecap="round"/>
                  <!-- Pending -->
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" stroke-width="8" 
                    :stroke-dasharray="`${pendingPercentage * 2.51} 251`" 
                    :stroke-dashoffset="`-${verifikasiPercentage * 2.51}`" stroke-linecap="round"/>
                  <!-- Ditolak -->
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" stroke-width="8" 
                    :stroke-dasharray="`${ditolakPercentage * 2.51} 251`" 
                    :stroke-dashoffset="`-${(verifikasiPercentage + pendingPercentage) * 2.51}`" stroke-linecap="round"/>
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="text-2xl font-bold text-gray-800">{{ totalPeserta }}</span>
                  <span class="text-sm text-gray-500">Total</span>
                </div>
              </div>
            </div>
            <!-- Legend -->
            <div class="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Terverifikasi ({{ verifikasiData.terverifikasi }})</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Pending ({{ verifikasiData.pending }})</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Ditolak ({{ verifikasiData.ditolak }})</span>
              </div>
            </div>
          </div>

          <!-- Registrasi Trend Chart -->
          <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 class="text-base sm:text-lg font-bold text-gray-800 mb-4">Trend Registrasi (7 Hari Terakhir)</h2>
            <div class="relative h-64">
              <svg class="w-full h-full" viewBox="0 0 300 200">
                <!-- Grid lines -->
                <defs>
                  <pattern id="grid" width="30" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 25" fill="none" stroke="#f3f4f6" stroke-width="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5"/>
                
                <!-- Line chart -->
                <polyline
                  :points="chartPoints"
                  fill="none"
                  stroke="#D71E28"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                
                <!-- Data points -->
                <circle
                  v-for="(point, index) in registrationData"
                  :key="index"
                  :cx="(index * 40) + 30"
                  :cy="200 - (point.value * 4)"
                  r="4"
                  fill="#D71E28"
                  class="hover:r-6 transition-all cursor-pointer"
                />
              </svg>
              
              <!-- X-axis labels -->
              <div class="flex justify-between mt-2 px-6">
                <span v-for="day in registrationData" :key="day.day" class="text-xs text-gray-500">
                  {{ day.day }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Bars Section -->
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-10">
          <h2 class="text-base sm:text-lg font-bold text-gray-800 mb-4">Progress Cabang Olahraga</h2>
          <div class="space-y-4">
            <div v-for="cabang in cabangOlahraga" :key="cabang.nama" class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-gray-700">{{ cabang.nama }}</span>
                <span class="text-sm text-gray-500">{{ cabang.peserta }}/{{ cabang.target }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div 
                  class="h-2 rounded-full transition-all duration-300"
                  :class="cabang.progress >= 80 ? 'bg-green-500' : cabang.progress >= 50 ? 'bg-yellow-500' : 'bg-red-500'"
                  :style="`width: ${cabang.progress}%`"
                ></div>
              </div>
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
      verifikasiData: {
        terverifikasi: 150,
        pending: 45,
        ditolak: 23
      },
      registrationData: [
        { day: '24/05', value: 12 },
        { day: '25/05', value: 19 },
        { day: '26/05', value: 8 },
        { day: '27/05', value: 27 },
        { day: '28/05', value: 35 },
        { day: '29/05', value: 42 },
        { day: '30/05', value: 38 }
      ],
      cabangOlahraga: [
        { nama: 'Sepak Bola', peserta: 45, target: 50, progress: 90 },
        { nama: 'Basket', peserta: 28, target: 40, progress: 70 },
        { nama: 'Voli', peserta: 32, target: 45, progress: 71 },
        { nama: 'Badminton', peserta: 18, target: 30, progress: 60 },
        { nama: 'Tenis Meja', peserta: 22, target: 25, progress: 88 },
        { nama: 'Futsal', peserta: 35, target: 40, progress: 87 }
      ],
      kontingen: [
        { nama: "RU IV Cilacap", peserta: 24, verifikasi: "20", updated: "30 Mei 2025" },
        { nama: "Pertamina Hulu Rokan", peserta: 18, verifikasi: "18", updated: "29 Mei 2025" },
        { nama: "PT KPI", peserta: 21, verifikasi: "21", updated: "29 Mei 2025" }
      ]
    };
  },
  computed: {
    totalPeserta() {
      return this.verifikasiData.terverifikasi + this.verifikasiData.pending + this.verifikasiData.ditolak;
    },
    verifikasiPercentage() {
      return (this.verifikasiData.terverifikasi / this.totalPeserta) * 100;
    },
    pendingPercentage() {
      return (this.verifikasiData.pending / this.totalPeserta) * 100;
    },
    ditolakPercentage() {
      return (this.verifikasiData.ditolak / this.totalPeserta) * 100;
    },
    chartPoints() {
      return this.registrationData.map((point, index) => 
        `${(index * 40) + 30},${200 - (point.value * 4)}`
      ).join(' ');
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>

<style scoped>
/* Smooth animations for charts */
circle, polyline {
  transition: all 0.3s ease;
}

.progress-bar {
  animation: progressAnimation 1s ease-out;
}

@keyframes progressAnimation {
  from {
    width: 0%;
  }
}

/* Hover effects for interactive elements */
.hover\:r-6:hover {
  r: 6;
}
</style>