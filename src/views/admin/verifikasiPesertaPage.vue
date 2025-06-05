<template>
    <div class="min-h-screen flex bg-gray-100 relative font-sans">
      
      <Sidebar :isOpen="isSidebarOpen" />
  
      
      <div
        v-if="isSidebarOpen"
        @click="isSidebarOpen = false"
        class="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
      ></div>
  
      
      <div :class="[
        'flex-1 flex flex-col transition-margin duration-300 ease-in-out min-h-screen',
        isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
      ]">
   <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center lg:hidden">
        <button @click="toggleSidebar" class="text-gray-700 text-2xl focus:outline-none hover:text-[#D71E28] transition-colors">
          <i class="fas fa-bars"></i>
        </button>
        <h1 class="text-lg font-semibold text-[#D71E28]">Verifikasi Peserta</h1>
        <div class="w-8"></div> 
      </header>

        <main class="px-4 sm:px-6 py-4 sm:py-8 flex-1">
          
          <div class="mb-6">
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 hidden md:block">
              Verifikasi Peserta
            </h1>
            
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center">
                  <div class="p-2 bg-blue-100 rounded-lg">
                    <i class="fas fa-users text-blue-600 text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-600">Total Peserta</p>
                    <p class="text-2xl font-bold text-gray-800">{{ totalPeserta }}</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center">
                  <div class="p-2 bg-green-100 rounded-lg">
                    <i class="fas fa-check-circle text-green-600 text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-600">Terverifikasi</p>
                    <p class="text-2xl font-bold text-green-600">{{ pesertaTerverifikasi }}</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center">
                  <div class="p-2 bg-red-100 rounded-lg">
                    <i class="fas fa-clock text-red-600 text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-600">Belum Verifikasi</p>
                    <p class="text-2xl font-bold text-red-600">{{ pesertaBelumVerifikasi }}</p>
                  </div>
                </div>
              </div>
              
              <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center">
                  <div class="p-2 bg-yellow-100 rounded-lg">
                    <i class="fas fa-percentage text-yellow-600 text-xl"></i>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm text-gray-600">Persentase</p>
                    <p class="text-2xl font-bold text-yellow-600">{{ persentaseVerifikasi }}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          
          <div class="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
            <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                
                <div class="relative">
                  <input
                    v-model="searchTerm"
                    type="text"
                    placeholder="Cari nama atau email..."
                    class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent w-full sm:w-64"
                  >
                  <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                </div>
                
                
                <select
                  v-model="statusFilter"
                  class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                >
                  <option value="all">Semua Status</option>
                  <option value="verified">Terverifikasi</option>
                  <option value="unverified">Belum Verifikasi</option>
                </select>
              </div>
              
              
              <div class="flex gap-2 w-full sm:w-auto">
                <button
                  v-if="selectedPeserta.length > 0"
                  @click="verifikasiBulk"
                  :disabled="isProcessing"
                  class="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <i class="fas fa-check-double"></i>
                  <span class="hidden sm:inline">Verifikasi Terpilih ({{ selectedPeserta.length }})</span>
                  <span class="sm:hidden">Verifikasi ({{ selectedPeserta.length }})</span>
                </button>
                
                <button
                  @click="refreshData"
                  :disabled="isProcessing"
                  class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                >
                  <i class="fas fa-sync-alt" :class="{ 'animate-spin': isProcessing }"></i>
                  <span class="hidden sm:inline">Refresh</span>
                </button>
              </div>
            </div>
          </div>
  
          
          <div class="bg-white rounded-lg shadow overflow-hidden hidden sm:block">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="bg-[#D71E28] text-white">
                  <tr>
                    <th class="px-4 py-3 text-left">
                      <input
                        type="checkbox"
                        v-model="selectAll"
                        @change="toggleSelectAll"
                        class="rounded focus:ring-2 focus:ring-white"
                      >
                    </th>
                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Nama Lengkap
                    </th>
                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Email
                    </th>
                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Tanggal Daftar
                    </th>
                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Status
                    </th>
                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="peserta in filteredPeserta"
                    :key="peserta.email"
                    class="hover:bg-gray-50 transition-colors"
                    :class="{ 'bg-blue-50': selectedPeserta.includes(peserta.email) }"
                  >
                    <td class="px-4 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        :value="peserta.email"
                        v-model="selectedPeserta"
                        class="rounded focus:ring-2 focus:ring-[#D71E28]"
                      >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">{{ peserta.namaLengkap }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-600">{{ peserta.email }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-600">{{ formatDate(peserta.tanggalDaftar) }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        :class="{
                          'inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800': peserta.isVerified,
                          'inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800': !peserta.isVerified,
                        }"
                      >
                        {{ peserta.isVerified ? "Terverifikasi" : "Belum Verifikasi" }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <div class="flex gap-2">
                        <button
                          v-if="!peserta.isVerified"
                          @click="verifikasiPeserta(peserta.email)"
                          :disabled="isProcessing"
                          class="bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-1 rounded text-xs transition-colors"
                        >
                          <i class="fas fa-check mr-1"></i>
                          Verifikasi
                        </button>
                        <button
                          @click="lihatDetail(peserta)"
                          class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition-colors"
                        >
                          <i class="fas fa-eye mr-1"></i>
                          Detail
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            
            <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-700">
                  Menampilkan {{ startIndex + 1 }} sampai {{ endIndex }} dari {{ filteredPeserta.length }} peserta
                </div>
                <div class="flex gap-2">
                  <button
                    @click="previousPage"
                    :disabled="currentPage === 1"
                    class="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50"
                  >
                    <i class="fas fa-chevron-left"></i>
                  </button>
                  <span class="px-3 py-1 text-sm">{{ currentPage }} / {{ totalPages }}</span>
                  <button
                    @click="nextPage"
                    :disabled="currentPage === totalPages"
                    class="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50"
                  >
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          
          <div class="sm:hidden space-y-4">
            <div
              v-for="peserta in filteredPeserta"
              :key="peserta.email"
              class="bg-white rounded-lg shadow p-4"
            >
              <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-3">
                  <input
                    type="checkbox"
                    :value="peserta.email"
                    v-model="selectedPeserta"
                    class="rounded focus:ring-2 focus:ring-[#D71E28]"
                  >
                  <div>
                    <h3 class="font-semibold text-gray-900">{{ peserta.namaLengkap }}</h3>
                    <p class="text-sm text-gray-600">{{ peserta.email }}</p>
                  </div>
                </div>
                <span
                  :class="{
                    'inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800': peserta.isVerified,
                    'inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800': !peserta.isVerified,
                  }"
                >
                  {{ peserta.isVerified ? "Verified" : "Pending" }}
                </span>
              </div>
              
              <div class="text-sm text-gray-600 mb-3">
                <i class="fas fa-calendar mr-2"></i>
                {{ formatDate(peserta.tanggalDaftar) }}
              </div>
              
              <div class="flex gap-2">
                <button
                  v-if="!peserta.isVerified"
                  @click="verifikasiPeserta(peserta.email)"
                  :disabled="isProcessing"
                  class="flex-1 bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-2 rounded text-sm transition-colors"
                >
                  <i class="fas fa-check mr-2"></i>
                  Verifikasi
                </button>
                <button
                  @click="lihatDetail(peserta)"
                  class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm transition-colors"
                >
                  <i class="fas fa-eye mr-2"></i>
                  Detail
                </button>
              </div>
            </div>
          </div>
  
          
          <div v-if="filteredPeserta.length === 0" class="bg-white rounded-lg shadow p-8 text-center">
            <i class="fas fa-inbox text-4xl text-gray-400 mb-4"></i>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Tidak ada peserta ditemukan</h3>
            <p class="text-gray-600">Coba ubah filter pencarian atau tambah peserta baru.</p>
          </div>
        </main>
      </div>
  
      
      <div v-if="showDetailModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg max-w-md w-full p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-semibold">Detail Peserta</h3>
            <button @click="showDetailModal = false" class="text-gray-400 hover:text-gray-600">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <div v-if="selectedPesertaDetail" class="space-y-3">
            <div>
              <label class="text-sm font-medium text-gray-600">Nama Lengkap</label>
              <p class="text-gray-900">{{ selectedPesertaDetail.namaLengkap }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">Email</label>
              <p class="text-gray-900">{{ selectedPesertaDetail.email }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">Tanggal Daftar</label>
              <p class="text-gray-900">{{ formatDate(selectedPesertaDetail.tanggalDaftar) }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">Status Verifikasi</label>
              <p :class="selectedPesertaDetail.isVerified ? 'text-green-600' : 'text-red-600'">
                {{ selectedPesertaDetail.isVerified ? "Terverifikasi" : "Belum Verifikasi" }}
              </p>
            </div>
          </div>
          
          <div class="flex gap-2 mt-6">
            <button
              v-if="selectedPesertaDetail && !selectedPesertaDetail.isVerified"
              @click="verifikasiPeserta(selectedPesertaDetail.email); showDetailModal = false"
              class="flex-1 bg-[#D71E28] hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Verifikasi
            </button>
            <button
              @click="showDetailModal = false"
              class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
  
      
      <div
        v-if="showToast"
        class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity"
        :class="{ 'opacity-0': !showToast }"
      >
        <div class="flex items-center gap-2">
          <i class="fas fa-check-circle"></i>
          <span>{{ toastMessage }}</span>
        </div>
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
        searchTerm: "",
        statusFilter: "all",
        selectedPeserta: [],
        selectAll: false,
        isProcessing: false,
        showDetailModal: false,
        selectedPesertaDetail: null,
        showToast: false,
        toastMessage: "",
        currentPage: 1,
        itemsPerPage: 10,
        pesertaList: [
          {
            namaLengkap: "Andi Wijaya",
            email: "andi@example.com",
            isVerified: false,
            tanggalDaftar: new Date("2024-01-15"),
          },
          {
            namaLengkap: "Siti Nurhaliza",
            email: "siti@example.com",
            isVerified: true,
            tanggalDaftar: new Date("2024-01-12"),
          },
          {
            namaLengkap: "Budi Santoso",
            email: "budi@example.com",
            isVerified: false,
            tanggalDaftar: new Date("2024-01-18"),
          },
          {
            namaLengkap: "Maya Sari",
            email: "maya@example.com",
            isVerified: true,
            tanggalDaftar: new Date("2024-01-10"),
          },
          {
            namaLengkap: "Rizki Pratama",
            email: "rizki@example.com",
            isVerified: false,
            tanggalDaftar: new Date("2024-01-20"),
          },
          {
            namaLengkap: "Dewi Lestari",
            email: "dewi@example.com",
            isVerified: true,
            tanggalDaftar: new Date("2024-01-08"),
          },
        ],
      };
    },
    computed: {
      filteredPeserta() {
        let filtered = this.pesertaList;
        
        // Filter berdasarkan search term
        if (this.searchTerm) {
          filtered = filtered.filter(peserta =>
            peserta.namaLengkap.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            peserta.email.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        }
        
        // Filter berdasarkan status
        if (this.statusFilter === "verified") {
          filtered = filtered.filter(peserta => peserta.isVerified);
        } else if (this.statusFilter === "unverified") {
          filtered = filtered.filter(peserta => !peserta.isVerified);
        }
        
        // Pagination
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return filtered.slice(start, end);
      },
      totalPeserta() {
        return this.pesertaList.length;
      },
      pesertaTerverifikasi() {
        return this.pesertaList.filter(p => p.isVerified).length;
      },
      pesertaBelumVerifikasi() {
        return this.pesertaList.filter(p => !p.isVerified).length;
      },
      persentaseVerifikasi() {
        if (this.totalPeserta === 0) return 0;
        return Math.round((this.pesertaTerverifikasi / this.totalPeserta) * 100);
      },
      totalPages() {
        return Math.ceil(this.pesertaList.length / this.itemsPerPage);
      },
      startIndex() {
        return (this.currentPage - 1) * this.itemsPerPage;
      },
      endIndex() {
        return Math.min(this.startIndex + this.itemsPerPage, this.pesertaList.length);
      }
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      verifikasiPeserta(email) {
        this.isProcessing = true;
        
        // Simulasi delay API
        setTimeout(() => {
          const peserta = this.pesertaList.find((p) => p.email === email);
          if (peserta && !peserta.isVerified) {
            peserta.isVerified = true;
            this.showToastNotification(`${peserta.namaLengkap} berhasil diverifikasi`);
          }
          this.isProcessing = false;
        }, 1000);
      },
      verifikasiBulk() {
        if (this.selectedPeserta.length === 0) return;
        
        this.isProcessing = true;
        
        setTimeout(() => {
          let count = 0;
          this.selectedPeserta.forEach(email => {
            const peserta = this.pesertaList.find(p => p.email === email);
            if (peserta && !peserta.isVerified) {
              peserta.isVerified = true;
              count++;
            }
          });
          
          this.selectedPeserta = [];
          this.selectAll = false;
          this.showToastNotification(`${count} peserta berhasil diverifikasi`);
          this.isProcessing = false;
        }, 1500);
      },
      toggleSelectAll() {
        if (this.selectAll) {
          this.selectedPeserta = this.filteredPeserta.map(p => p.email);
        } else {
          this.selectedPeserta = [];
        }
      },
      lihatDetail(peserta) {
        this.selectedPesertaDetail = peserta;
        this.showDetailModal = true;
      },
      refreshData() {
        this.isProcessing = true;
        
        setTimeout(() => {
          // Simulasi refresh data
          this.showToastNotification("Data berhasil diperbarui");
          this.isProcessing = false;
        }, 1000);
      },
      showToastNotification(message) {
        this.toastMessage = message;
        this.showToast = true;
        
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      },
      formatDate(date) {
        return new Intl.DateTimeFormat('id-ID', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(date);
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
    },
    watch: {
      selectedPeserta() {
        this.selectAll = this.selectedPeserta.length === this.filteredPeserta.length && this.filteredPeserta.length > 0;
      },
      searchTerm() {
        this.currentPage = 1; // Reset ke halaman pertama saat search
      },
      statusFilter() {
        this.currentPage = 1; // Reset ke halaman pertama saat filter
      }
    }
  };
  </script>