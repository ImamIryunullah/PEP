<template>
  <div class="min-h-screen flex bg-gray-50 relative font-sans">
    <Sidebar :isOpen="isSidebarOpen" />

    <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"></div>

    <div :class="[
      'flex-1 flex flex-col transition-all duration-300 ease-in-out min-h-screen',
      isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
    ]">

      <header class="bg-white shadow-sm px-4 py-3 flex justify-between items-center lg:hidden border-b">
        <button @click="toggleSidebar"
          class="text-gray-700 hover:text-[#D71E28] p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <i class="fas fa-bars text-xl"></i>
        </button>
        <h1 class="text-lg font-semibold text-[#D71E28]">Data Peserta</h1>
        <div class="w-10"></div>
      </header>

      <main class="flex-1 p-4 lg:p-8">
        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-center items-center py-8">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D71E28]"></div>
          <span class="ml-2 text-gray-600">Memuat data...</span>
        </div>

        <div v-else>
          <div class="hidden lg:flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Data Peserta</h1>
            <div class="flex gap-3">
              <button @click="refreshData"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <i class="fas fa-sync-alt"></i>
                <span class="hidden sm:inline">Refresh</span>
              </button>
              <button @click="exportData"
                class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <i class="fas fa-download"></i>
                <span class="hidden sm:inline">Export</span>
              </button>
            </div>
          </div>

          <div class="flex gap-2 mb-4 lg:hidden">
            <button @click="refreshData"
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
              <i class="fas fa-sync-alt"></i>
              <span>Refresh</span>
            </button>
            <button @click="exportData"
              class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <i class="fas fa-download"></i>
            </button>
          </div>

          <!-- Search and Filter -->
          <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input v-model="searchQuery" type="text" placeholder="Cari nama atau email peserta..."
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                </div>
              </div>
              <div class="flex gap-2">
                <select v-model="filterJenis"
                  class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                  <option value="">Semua Jenis</option>
                  <option value="Mitra">Mitra</option>
                  <option value="Pekerja">Pekerja</option>
                </select>
                <select v-model="filterCabang"
                  class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                  <option value="">Semua Cabang</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Tenis Meja">Tenis Meja</option>
                  <option value="Sepak Bola">Sepak Bola</option>
                  <option value="Voli">Voli</option>
                </select>
                <select v-model="filterStatus"
                  class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                  <option value="">Semua Status</option>
                  <option value="approved">Disetujui</option>
                  <option value="rejected">Ditolak</option>
                  <option value="pending">Menunggu</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Statistics Cards -->
          <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="flex items-center">
                <div class="p-2 bg-blue-100 rounded-lg">
                  <i class="fas fa-users text-blue-600"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">Total</p>
                  <p class="text-xl font-semibold">{{ totalPeserta }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="flex items-center">
                <div class="p-2 bg-green-100 rounded-lg">
                  <i class="fas fa-handshake text-green-600"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">Mitra</p>
                  <p class="text-xl font-semibold">{{ mitraCount }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="flex items-center">
                <div class="p-2 bg-purple-100 rounded-lg">
                  <i class="fas fa-id-badge text-purple-600"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">Pekerja</p>
                  <p class="text-xl font-semibold">{{ pekerjaCount }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="flex items-center">
                <div class="p-2 bg-green-100 rounded-lg">
                  <i class="fas fa-check-circle text-green-600"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">Disetujui</p>
                  <p class="text-xl font-semibold">{{ approvedCount }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="flex items-center">
                <div class="p-2 bg-red-100 rounded-lg">
                  <i class="fas fa-times-circle text-red-600"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">Ditolak</p>
                  <p class="text-xl font-semibold">{{ rejectedCount }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Desktop Table -->
          <div class="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-[#D71E28]">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Peserta
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Jenis & Cabang
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Wilayah Kerja
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Status
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Tanggal Daftar
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="peserta in paginatedPeserta" :key="peserta.id" class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-12 w-12">
                          <img v-if="peserta.pas_foto" :src="getImageUrl(peserta.pas_foto)" :alt="peserta.nama_lengkap"
                            class="h-12 w-12 rounded-full object-cover border-2 border-gray-200">
                          <div v-else class="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                            <i class="fas fa-user text-gray-500"></i>
                          </div>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">{{ peserta.nama_lengkap }}</div>
                          <div class="text-sm text-gray-500">{{ peserta.email || peserta.no_telepon }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ peserta.jenis_peserta }}</div>
                      <div class="text-sm text-gray-500">{{ peserta.cabang_olahraga }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ peserta.wilayah_kerja }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getStatusClass(peserta.status)">
                        {{ getStatusText(peserta.status) }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ formatDate(peserta.waktu_daftar) }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div class="flex gap-2">
                        <button @click="viewPeserta(peserta)" class="text-blue-600 hover:text-blue-900 p-1 rounded">
                          <i class="fas fa-eye"></i>
                        </button>
                        <button @click="downloadDocuments(peserta)" class="text-green-600 hover:text-green-900 p-1 rounded">
                          <i class="fas fa-download"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Mobile Cards -->
          <div class="lg:hidden space-y-4">
            <div v-for="peserta in paginatedPeserta" :key="peserta.id" class="bg-white rounded-xl shadow-sm p-4">
              <div class="flex items-start justify-between">
                <div class="flex items-center flex-1">
                  <div class="flex-shrink-0">
                    <img v-if="peserta.pas_foto" :src="getImageUrl(peserta.pas_foto)" :alt="peserta.nama_lengkap"
                      class="h-12 w-12 rounded-full object-cover border-2 border-gray-200">
                    <div v-else class="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <i class="fas fa-user text-gray-500"></i>
                    </div>
                  </div>
                  <div class="ml-3 flex-1">
                    <h3 class="font-medium text-gray-900">{{ peserta.nama_lengkap }}</h3>
                    <p class="text-sm text-gray-500">{{ peserta.email || peserta.no_telepon }}</p>
                    <div class="flex gap-2 mt-1">
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {{ peserta.jenis_peserta }}
                      </span>
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {{ peserta.cabang_olahraga }}
                      </span>
                    </div>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-xs text-gray-500">{{ peserta.wilayah_kerja }}</p>
                      <span :class="getStatusClass(peserta.status)">
                        {{ getStatusText(peserta.status) }}
                      </span>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">{{ formatDate(peserta.waktu_daftar) }}</p>
                  </div>
                </div>
                <div class="flex gap-2 ml-2">
                  <button @click="viewPeserta(peserta)"
                    class="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button @click="downloadDocuments(peserta)"
                    class="text-green-600 hover:text-green-900 p-2 rounded-lg hover:bg-green-50">
                    <i class="fas fa-download"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="mt-6 flex justify-center">
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              <button @click="currentPage = Math.max(1, currentPage - 1)" :disabled="currentPage === 1"
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                <i class="fas fa-chevron-left"></i>
              </button>

              <button v-for="page in visiblePages" :key="page" @click="currentPage = page" :class="[
                'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                page === currentPage
                  ? 'z-10 bg-[#D71E28] border-[#D71E28] text-white'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
              ]">
                {{ page }}
              </button>

              <button @click="currentPage = Math.min(totalPages, currentPage + 1)" :disabled="currentPage === totalPages"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                <i class="fas fa-chevron-right"></i>
              </button>
            </nav>
          </div>
        </div>
      </main>
    </div>

    <!-- Detail Modal -->
    <div v-if="selectedPeserta"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-screen overflow-y-auto">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-900">Detail Peserta</h3>
          <button @click="selectedPeserta = null" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        <div class="px-6 py-4">
          <!-- Detail content here -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Informasi Peserta</h4>
              <div class="space-y-2 text-sm">
                <p><span class="font-medium">Nama:</span> {{ selectedPeserta.nama_lengkap }}</p>
                <p><span class="font-medium">Email:</span> {{ selectedPeserta.email || '-' }}</p>
                <p><span class="font-medium">No. Telepon:</span> {{ selectedPeserta.no_telepon }}</p>
                <p><span class="font-medium">Jenis:</span> {{ selectedPeserta.jenis_peserta }}</p>
                <p><span class="font-medium">Cabang:</span> {{ selectedPeserta.cabang_olahraga }}</p>
                <p><span class="font-medium">Wilayah:</span> {{ selectedPeserta.wilayah_kerja }}</p>
                <p><span class="font-medium">Status:</span> 
                  <span :class="getStatusClass(selectedPeserta.status)">
                    {{ getStatusText(selectedPeserta.status) }}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Dokumen</h4>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div v-if="selectedPeserta.ktp" class="flex items-center p-2 bg-gray-50 rounded">
                  <i class="fas fa-file-image text-blue-500 mr-2"></i>
                  <span>KTP</span>
                </div>
                <div v-if="selectedPeserta.id_card" class="flex items-center p-2 bg-gray-50 rounded">
                  <i class="fas fa-file-image text-blue-500 mr-2"></i>
                  <span>ID Card</span>
                </div>
                <div v-if="selectedPeserta.bpjs" class="flex items-center p-2 bg-gray-50 rounded">
                  <i class="fas fa-file-image text-blue-500 mr-2"></i>
                  <span>BPJS</span>
                </div>
                <div v-if="selectedPeserta.pas_foto" class="flex items-center p-2 bg-gray-50 rounded">
                  <i class="fas fa-file-image text-blue-500 mr-2"></i>
                  <span>Pas Foto</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedPeserta.catatan" class="mt-4">
            <h4 class="font-semibold text-gray-800 mb-2">Catatan</h4>
            <p class="text-sm text-gray-600 bg-gray-50 p-3 rounded">{{ selectedPeserta.catatan }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import API from "@/service/api.js"; 

export default {
  name: "DataPeserta",
  components: { Sidebar },
  data() {
    return {
      isSidebarOpen: false,
      selectedPeserta: null,
      searchQuery: '',
      filterJenis: '',
      filterCabang: '',
      filterStatus: '',
      currentPage: 1,
      itemsPerPage: 10,
      pesertaList: [],
      isLoading: false,
      userId: null, // Set this based on your authentication system
    };
  },
  computed: {
    filteredPeserta() {
      let filtered = this.pesertaList;

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(peserta =>
          peserta.nama_lengkap.toLowerCase().includes(query) ||
          (peserta.email && peserta.email.toLowerCase().includes(query)) ||
          peserta.no_telepon.includes(query)
        );
      }

      if (this.filterJenis) {
        filtered = filtered.filter(peserta => peserta.jenis_peserta === this.filterJenis);
      }

      if (this.filterCabang) {
        filtered = filtered.filter(peserta => peserta.cabang_olahraga === this.filterCabang);
      }

      if (this.filterStatus) {
        filtered = filtered.filter(peserta => peserta.status === this.filterStatus);
      }

      return filtered;
    },
    paginatedPeserta() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPeserta.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredPeserta.length / this.itemsPerPage);
    },
    visiblePages() {
      const pages = [];
      const start = Math.max(1, this.currentPage - 2);
      const end = Math.min(this.totalPages, this.currentPage + 2);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    },
    totalPeserta() {
      return this.pesertaList.length;
    },
    mitraCount() {
      return this.pesertaList.filter(p => p.jenis_peserta === 'Mitra').length;
    },
    pekerjaCount() {
      return this.pesertaList.filter(p => p.jenis_peserta === 'Pekerja').length;
    },
    approvedCount() {
      return this.pesertaList.filter(p => p.status === 'approved').length;
    },
    rejectedCount() {
      return this.pesertaList.filter(p => p.status === 'rejected').length;
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1;
    },
    filterJenis() {
      this.currentPage = 1;
    },
    filterCabang() {
      this.currentPage = 1;
    },
    filterStatus() {
      this.currentPage = 1;
    }
  },
  methods: {
    async fetchRegistrations() {
      if (!this.userId) {
        console.error('User ID not set');
        return;
      }

      this.isLoading = true;
      try {
        const response = await API.getRegistrationsByUserId(this.userId);
        if (response.data && response.data.data) {
          this.pesertaList = response.data.data;
        }
      } catch (error) {
        console.error('Error fetching registrations:', error);
        this.showErrorMessage('Gagal memuat data peserta');
      } finally {
        this.isLoading = false;
      }
    },
    async refreshData() {
      await this.fetchRegistrations();
      this.showSuccessMessage('Data berhasil diperbarui!');
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    viewPeserta(peserta) {
      this.selectedPeserta = peserta;
    },
    downloadDocuments(peserta) {
      // Implement document download logic
      console.log('Downloading documents for:', peserta.nama_lengkap);
      this.showSuccessMessage('Download dimulai!');
    },
    getImageUrl(filename) {
      // Adjust this URL based on your backend setup
      return `${process.env.VUE_APP_API_BASE_URL}/uploads/${filename}`;
    },
    getStatusClass(status) {
      const classes = {
        'approved': 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800',
        'rejected': 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800',
        'pending': 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800'
      };
      return classes[status] || classes['pending'];
    },
    getStatusText(status) {
      const texts = {
        'approved': 'Disetujui',
        'rejected': 'Ditolak',
        'pending': 'Menunggu'
      };
      return texts[status] || 'Menunggu';
    },
    formatDate(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },
    exportData() {
      const csvContent = this.generateCSV();
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `data-peserta-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.showSuccessMessage('Data berhasil diekspor!');
    },
    generateCSV() {
      const headers = ['ID', 'Nama Lengkap', 'Email', 'No. Telepon', 'Jenis Peserta', 'Cabang Olahraga', 'Wilayah Kerja', 'Status', 'Tanggal Daftar'];
      const rows = this.filteredPeserta.map(peserta => [
        peserta.id,
        peserta.nama_lengkap,
        peserta.email || '',
        peserta.no_telepon,
        peserta.jenis_peserta,
        peserta.cabang_olahraga,
        peserta.wilayah_kerja,
        this.getStatusText(peserta.status),
        this.formatDate(peserta.waktu_daftar)
      ]);

      return [headers, ...rows].map(row =>
        row.map(field => `"${field}"`).join(',')
      ).join('\n');
    },
    showSuccessMessage(message) {
      // Implement toast notification here
      alert(message);
    },
    showErrorMessage(message) {
      // Implement error toast notification here
      alert(message);
    }
  },
  async mounted() {
    // Set userId from your authentication system
    // this.userId = this.$store.state.auth.user.id; // Example with Vuex
    // or
    // this.userId = localStorage.getItem('userId'); // Example with localStorage
    
    // For now, set it manually or get from route params
    this.userId = this.$route.params.userId || 1; // Example

    if (window.innerWidth >= 1024) {
      this.isSidebarOpen = false;
    }

    await this.fetchRegistrations();
  }
};
</script>