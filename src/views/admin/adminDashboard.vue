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
        <button @click="toggleSidebar"
          class="text-gray-700 text-2xl focus:outline-none hover:text-[#D71E28] transition-colors">
          <i class="fas fa-bars"></i>
        </button>
        <h1 class="text-lg font-semibold text-[#D71E28]">Dashboard Admin</h1>
        <div class="w-8"></div>
      </header>

      
      <div v-if="isLoading" class="flex items-center justify-center min-h-screen">
        <div class="text-center">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#D71E28]"></div>
          <p class="mt-2 text-gray-600">Memuat data dashboard...</p>
        </div>
      </div>

      
      <div v-else-if="error" class="flex items-center justify-center min-h-screen">
        <div class="text-center">
          <i class="fas fa-exclamation-triangle text-red-500 text-4xl mb-4"></i>
          <p class="text-red-600 mb-4">{{ error }}</p>
          <button @click="fetchDashboardData" class="bg-[#D71E28] text-white px-4 py-2 rounded hover:bg-red-700">
            Coba Lagi
          </button>
        </div>
      </div>

      <main v-else class="px-4 sm:px-6 py-4 sm:py-8 flex-1">
        <div class="flex justify-between items-center mb-4 sm:mb-6">
          <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 hidden lg:block">Dashboard Admin</h1>
          <button @click="refreshDashboard" :disabled="isRefreshing"
            class="bg-[#D71E28] text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50 transition-colors">
            <i class="fas fa-sync-alt mr-2" :class="{ 'animate-spin': isRefreshing }"></i>
            {{ isRefreshing ? 'Memperbarui...' : 'Refresh Data' }}
          </button>
        </div>

        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div class="bg-red-100 text-[#D71E28] p-2 sm:p-3 rounded-full flex-shrink-0">
              <i class="fas fa-users text-lg sm:text-xl"></i>
            </div>
            <div class="min-w-0">
              <p class="text-xs sm:text-sm text-gray-500 truncate">Total Peserta</p>
              <p class="text-xl sm:text-2xl font-semibold">{{ totalPeserta }}</p>
            </div>
          </div>
          <div
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div class="bg-green-100 text-green-600 p-2 sm:p-3 rounded-full flex-shrink-0">
              <i class="fas fa-check-circle text-lg sm:text-xl"></i>
            </div>
            <div class="min-w-0">
              <p class="text-xs sm:text-sm text-gray-500 truncate">Terverifikasi</p>
              <p class="text-xl sm:text-2xl font-semibold">{{ pesertaTerverifikasi }}</p>
            </div>
          </div>
          <div
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div class="bg-yellow-100 text-yellow-600 p-2 sm:p-3 rounded-full flex-shrink-0">
              <i class="fas fa-clock text-lg sm:text-xl"></i>
            </div>
            <div class="min-w-0">
              <p class="text-xs sm:text-sm text-gray-500 truncate">Menunggu</p>
              <p class="text-xl sm:text-2xl font-semibold">{{ pesertaBelumVerifikasi }}</p>
            </div>
          </div>
          <div
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex items-center gap-3 sm:gap-4">
            <div class="bg-red-100 text-red-600 p-2 sm:p-3 rounded-full flex-shrink-0">
              <i class="fas fa-times-circle text-lg sm:text-xl"></i>
            </div>
            <div class="min-w-0">
              <p class="text-xs sm:text-sm text-gray-500 truncate">Ditolak</p>
              <p class="text-xl sm:text-2xl font-semibold">{{ pesertaDitolak }}</p>
            </div>
          </div>
        </div>

        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 sm:mb-10">
          
          <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 class="text-base sm:text-lg font-bold text-gray-800 mb-4">Status Verifikasi</h2>
            <div class="relative h-64 flex items-center justify-center">
              
              <div class="relative w-48 h-48">
                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" stroke-width="8" />
                  
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" stroke-width="8"
                    :stroke-dasharray="`${verifikasiPercentage * 2.51} 251`" stroke-linecap="round" />
                  
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#f59e0b" stroke-width="8"
                    :stroke-dasharray="`${pendingPercentage * 2.51} 251`"
                    :stroke-dashoffset="`-${verifikasiPercentage * 2.51}`" stroke-linecap="round" />
                  
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#ef4444" stroke-width="8"
                    :stroke-dasharray="`${ditolakPercentage * 2.51} 251`"
                    :stroke-dashoffset="`-${(verifikasiPercentage + pendingPercentage) * 2.51}`"
                    stroke-linecap="round" />
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                  <span class="text-2xl font-bold text-gray-800">{{ totalPeserta }}</span>
                  <span class="text-sm text-gray-500">Total</span>
                </div>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Terverifikasi ({{ pesertaTerverifikasi }})</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Pending ({{ pesertaBelumVerifikasi }})</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <span class="text-sm text-gray-600">Ditolak ({{ pesertaDitolak }})</span>
              </div>
            </div>
          </div>

          
          <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 class="text-base sm:text-lg font-bold text-gray-800 mb-4">Trend Registrasi (7 Hari Terakhir)</h2>
            <div class="relative h-64">
              <svg class="w-full h-full" viewBox="0 0 300 200">
                
                <defs>
                  <pattern id="grid" width="30" height="25" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 25" fill="none" stroke="#f3f4f6" stroke-width="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />

                
                <polyline :points="chartPoints" fill="none" stroke="#D71E28" stroke-width="3" stroke-linecap="round"
                  stroke-linejoin="round" />

                
                <circle v-for="(point, index) in registrationTrendData" :key="index" :cx="(index * 40) + 30"
                  :cy="200 - (point.value * 4)" r="4" fill="#D71E28"
                  class="hover:r-6 transition-all cursor-pointer" />
              </svg>

              
              <div class="flex justify-between mt-2 px-6">
                <span v-for="day in registrationTrendData" :key="day.day" class="text-xs text-gray-500">
                  {{ day.day }}
                </span>
              </div>
            </div>
          </div>
        </div>

        
        <div class="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-10">
          <h2 class="text-base sm:text-lg font-bold text-gray-800 mb-4">Progress Cabang Olahraga</h2>
          <div class="space-y-4">
            <div v-for="cabang in cabangOlahragaStats" :key="cabang.nama" class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-sm font-medium text-gray-700">{{ cabang.nama }}</span>
                <span class="text-sm text-gray-500">{{ cabang.peserta }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="h-2 rounded-full transition-all duration-300" :class="getProgressBarColor(cabang.peserta)"
                  :style="`width: ${getProgressPercentage(cabang.peserta)}%`"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-sm">
          <div class="p-4 sm:p-6 border-b border-gray-200">
            <div class="flex justify-between items-center">
              <h2 class="text-base sm:text-lg font-bold text-gray-800">Peserta Terbaru</h2>
              <router-link to="/admin/verifikasi-peserta" class="text-[#D71E28] hover:text-red-700 text-sm font-medium">
                Lihat Semua →
              </router-link>
            </div>
          </div>
          
          <div class="block sm:hidden">
            <div v-for="peserta in recentParticipants" :key="peserta.id"
              class="border-b border-gray-200 last:border-b-0 p-4">
              <div class="space-y-2">
                <div class="font-semibold text-gray-800">{{ peserta.nama_lengkap }}</div>
                <div class="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>
                    <span class="text-gray-500">Cabang:</span>
                    <span class="font-medium ml-1">{{ peserta.cabang_olahraga || '-' }}</span>
                  </div>
                  <div>
                    <span class="text-gray-500">Status:</span>
                    <span :class="getStatusClass(peserta.status)"
                      class="px-2 py-1 rounded-full text-xs font-medium ml-1">
                      {{ getStatusText(peserta.status) }}
                    </span>
                  </div>
                </div>
                <div class="text-xs text-gray-500">
                  Mendaftar: {{ formatDate(peserta.created_at) }}
                </div>
              </div>
            </div>
          </div>
          
          <div class="hidden sm:block overflow-x-auto">
            <table class="min-w-full table-auto text-sm text-gray-700">
              <thead class="bg-[#D71E28] text-white">
                <tr>
                  <th class="px-4 py-3 text-left font-semibold">Nama Peserta</th>
                  <th class="px-4 py-3 text-left font-semibold">Email</th>
                  <th class="px-4 py-3 text-left font-semibold">Cabang Olahraga</th>
                  <th class="px-4 py-3 text-left font-semibold">Status</th>
                  <th class="px-4 py-3 text-left font-semibold">Tanggal Daftar</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="peserta in recentParticipants" :key="peserta.id"
                  class="hover:bg-gray-50 transition-colors">
                  <td class="px-4 py-3 font-medium">{{ peserta.nama_lengkap }}</td>
                  <td class="px-4 py-3">{{ peserta.email }}</td>
                  <td class="px-4 py-3">{{ peserta.cabang_olahraga || '-' }}</td>
                  <td class="px-4 py-3">
                    <span :class="getStatusClass(peserta.status)" class="px-2 py-1 rounded-full text-xs font-medium">
                      {{ getStatusText(peserta.status) }}
                    </span>
                  </td>
                  <td class="px-4 py-3 text-gray-600">{{ formatDate(peserta.created_at) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      
      <div v-if="showToast"
        class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
        <i class="fas fa-check-circle mr-2"></i>
        {{ toastMessage }}
      </div>

      <div v-if="showErrorToast"
        class="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
        <i class="fas fa-exclamation-circle mr-2"></i>
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import API from '@/service/api';

export default {
name: "AdminDashboard",
components: { Sidebar },
data() {
  return {
    isSidebarOpen: false,
    isLoading: false,
    isRefreshing: false,
    error: null,
    showToast: false,
    toastMessage: "",
    showErrorToast: false,
    errorMessage: "",

    pesertaList: [],
    totalPeserta: 0,

    registrationTrendData: [],

    availableCabangOlahraga: [
      'Sepak Bola', 'Basket', 'Voli', 'Badminton', 'Tenis Meja', 'Tenis Lapangan',
      'Futsal', 'Lari', 'Bulutangkis'
    ]
  };
},

async mounted() {
  await this.fetchDashboardData();
},

computed: {
  pesertaTerverifikasi() {
    return this.pesertaList.filter(p => p.status === "approved").length;
  },

  pesertaBelumVerifikasi() {
    return this.pesertaList.filter(p => p.status === "pending").length;
  },

  pesertaDitolak() {
    return this.pesertaList.filter(p => p.status === "rejected").length;
  },

  verifikasiPercentage() {
    if (this.totalPeserta === 0) return 0;
    return (this.pesertaTerverifikasi / this.totalPeserta) * 100;
  },

  pendingPercentage() {
    if (this.totalPeserta === 0) return 0;
    return (this.pesertaBelumVerifikasi / this.totalPeserta) * 100;
  },

  ditolakPercentage() {
    if (this.totalPeserta === 0) return 0;
    return (this.pesertaDitolak / this.totalPeserta) * 100;
  },

  chartPoints() {
    return this.registrationTrendData.map((point, index) =>
      `${(index * 40) + 30},${200 - (point.value * 4)}`
    ).join(' ');
  },

  cabangOlahragaStats() {
    const stats = {};

    this.availableCabangOlahraga.forEach(cabang => {
      stats[cabang] = { nama: cabang, peserta: 0 };
    });

    this.pesertaList.forEach(peserta => {
      const cabang = peserta.cabang_olahraga;
      if (cabang && stats[cabang]) {
        stats[cabang].peserta++;
      }
    });

    return Object.values(stats).sort((a, b) => b.peserta - a.peserta);
  },

  recentParticipants() {
    return [...this.pesertaList]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 10);
  }
},

methods: {
  async fetchDashboardData() {
    this.isLoading = true;
    this.error = null;

    try {
      console.log('Fetching dashboard data...');

      const response = await API.getParticipants();

      if (response.data) {
        let participants = [];

        if (response.data.data) {
          participants = response.data.data;
        } else if (Array.isArray(response.data)) {
          participants = response.data;
        }

        this.pesertaList = participants.map(peserta => ({
          id: peserta.id,
          nama_lengkap: peserta.nama_lengkap,
          email: peserta.email,
          no_telepon: peserta.no_telepon,
          jenis_peserta: peserta.jenis_peserta,
          cabang_olahraga: peserta.cabang_olahraga,
          wilayah_kerja: peserta.wilayah_kerja,
          status: peserta.status || 'pending',
          created_at: peserta.created_at,
          updated_at: peserta.updated_at
        }));

        this.totalPeserta = this.pesertaList.length;

        this.generateRegistrationTrend();

        console.log('Dashboard data loaded successfully:', this.pesertaList.length, 'participants');
      } else {
        this.pesertaList = [];
        this.totalPeserta = 0;
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      this.error = 'Gagal memuat data dashboard';
      this.pesertaList = [];
      this.totalPeserta = 0;

      this.showErrorToast = true;
      this.errorMessage = this.error;
      setTimeout(() => {
        this.showErrorToast = false;
      }, 5000);
    } finally {
      this.isLoading = false;
    }
  },

  generateRegistrationTrend() {
    const today = new Date();
    const trendData = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);

      const dayStr = date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: '2-digit'
      });

      const registrationsCount = this.pesertaList.filter(peserta => {
        const pesertaDate = new Date(peserta.created_at);
        return pesertaDate.toDateString() === date.toDateString();
      }).length;

      trendData.push({
        day: dayStr,
        value: Math.max(registrationsCount, 1) 
      });
    }

    this.registrationTrendData = trendData;
  },

  async refreshDashboard() {
    this.isRefreshing = true;
    await this.fetchDashboardData();
    this.isRefreshing = false;

    this.showToastNotification("Data dashboard berhasil diperbarui");
  },

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  },

  showToastNotification(message) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  },

  formatDate(date) {
    if (!date) return '-';
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  },

  getStatusText(status) {
    const statusMap = {
      pending: 'Menunggu',
      approved: 'Terverifikasi',
      rejected: 'Ditolak'
    };
    return statusMap[status] || status;
  },

  getStatusClass(status) {
    const classMap = {
      pending: 'bg-yellow-100 text-yellow-800',
      approved: 'bg-green-100 text-green-800',
      rejected: 'bg-red-100 text-red-800'
    };
    return classMap[status] || 'bg-gray-100 text-gray-800';
  },

  getProgressBarColor(count) {
    if (count >= 30) return 'bg-green-500';
    if (count >= 15) return 'bg-yellow-500';
    return 'bg-red-500';
  },

  getProgressPercentage(count) {
    const maxExpected = 50; 
    return Math.min((count / maxExpected) * 100, 100);
  }
}
};
</script>

<style scoped>

circle,
polyline {
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

/* Loading animation */
@keyframes spin {
to {
  transform: rotate(360deg);
}
}

.animate-spin {
animation: spin 1s linear infinite;
}
</style>