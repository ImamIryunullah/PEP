<template>
  <div class="min-h-screen flex bg-gray-100 relative font-sans">

    <Sidebar :isOpen="isSidebarOpen" />

    <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"></div>

    <div :class="[
      'flex-1 flex flex-col transition-margin duration-300 ease-in-out min-h-screen',
      isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
    ]">
      <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center lg:hidden">
        <button @click="toggleSidebar"
          class="text-gray-700 text-2xl focus:outline-none hover:text-[#D71E28] transition-colors">
          <i class="fas fa-bars"></i>
        </button>
        <h1 class="text-lg font-semibold text-[#D71E28]">Verifikasi Peserta</h1>
        <div class="w-8"></div>
      </header>
      <main class="px-4 sm:px-6 py-4 sm:py-8 flex-1">
        <div v-if="isLoading" class="flex justify-center items-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D71E28]"></div>
          <span class="ml-3 text-gray-600">Memuat data peserta...</span>
        </div>

        <div v-else>
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
                  <input v-model="searchTerm" type="text" placeholder="Cari nama, email, atau telepon..."
                    class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent w-full sm:w-64">
                  <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                </div>
                <select v-model="statusFilter"
                  class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                  <option value="all">Semua Status</option>
                  <option value="verified">Terverifikasi</option>
                  <option value="unverified">Belum Verifikasi</option>
                  <option value="rejected">Ditolak</option>
                </select>
              </div>
              <div class="flex gap-2 w-full sm:w-auto">
                <button v-if="selectedPeserta.length > 0" @click="verifikasiBulk" :disabled="isProcessing"
                  class="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                  <i class="fas fa-check-double"></i>
                  <span class="hidden sm:inline">Verifikasi Terpilih ({{ selectedPeserta.length }})</span>
                  <span class="sm:hidden">Verifikasi ({{ selectedPeserta.length }})</span>
                </button>

                <button @click="refreshData" :disabled="isProcessing"
                  class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
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
                      <input type="checkbox" v-model="selectAll" @change="toggleSelectAll"
                        class="rounded focus:ring-2 focus:ring-white">
                    </th>
                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Nama Lengkap
                    </th>
                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Email / Telepon
                    </th>
                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                      Cabang Olahraga
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

                  <tr v-for="peserta in paginatedPeserta" :key="peserta.id" class="hover:bg-gray-50 transition-colors"
                    :class="{ 'bg-blue-50': selectedPeserta.includes(peserta.id) }">
                    <td class="px-4 py-4 whitespace-nowrap">
                      <input type="checkbox" :value="peserta.id" v-model="selectedPeserta"
                        class="rounded focus:ring-2 focus:ring-[#D71E28]">
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">

                      <div class="text-sm font-medium text-gray-900">{{ peserta.nama_lengkap }}</div>
                      <div class="text-sm text-gray-500">{{ peserta.jenis_peserta }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-600">{{ peserta.email || '-' }}</div>
                      <div class="text-sm text-gray-500">{{ peserta.no_telepon }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-600">{{ peserta.cabang_olahraga }}</div>
                      <div class="text-sm text-gray-500">{{ peserta.wilayah_kerja }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-600">{{ formatDate(peserta.tanggalDaftar) }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getStatusClass(peserta.status)"
                        class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                        {{ getStatusText(peserta.status) }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <div class="flex gap-2">
                        <button v-if="peserta.status === 'pending'" @click="verifikasiPeserta(peserta.id)"
                          :disabled="isProcessing"
                          class="bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-1 rounded text-xs transition-colors">
                          <i class="fas fa-check mr-1"></i>
                          Verifikasi
                        </button>

                        <button v-if="peserta.status === 'pending'" @click="confirmTolakPeserta(peserta)"
                          :disabled="isProcessing"
                          class="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-1 rounded text-xs transition-colors">
                          <i class="fas fa-times mr-1"></i>
                          Tolak
                        </button>
                        <button @click="lihatDetail(peserta)"
                          class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs transition-colors">
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

                  Menampilkan {{ Math.min(startIndex, filteredPeserta.length) }} sampai {{ Math.min(endIndex,
                    filteredPeserta.length) }} dari {{ filteredPeserta.length }} peserta
                </div>
                <div class="flex gap-2">
                  <button @click="previousPage" :disabled="currentPage === 1"
                    class="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50">
                    <i class="fas fa-chevron-left"></i>
                  </button>
                  <span class="px-3 py-1 text-sm">{{ currentPage }} / {{ totalPages }}</span>
                  <button @click="nextPage" :disabled="currentPage === totalPages"
                    class="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50">
                    <i class="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div class="sm:hidden space-y-4">

            <div v-for="peserta in paginatedPeserta" :key="peserta.id" class="bg-white rounded-lg shadow p-4">
              <div class="flex items-start justify-between mb-3">
                <div class="flex items-center gap-3">
                  <input type="checkbox" :value="peserta.id" v-model="selectedPeserta"
                    class="rounded focus:ring-2 focus:ring-[#D71E28]">
                  <div>

                    <h3 class="font-semibold text-gray-900">{{ peserta.nama_lengkap }}</h3>
                    <p class="text-sm text-gray-600">{{ peserta.email || peserta.no_telepon }}</p>
                    <p class="text-xs text-gray-500">{{ peserta.cabang_olahraga }} - {{ peserta.jenis_peserta }}</p>
                  </div>
                </div>
                <span :class="getStatusClass(peserta.status)"
                  class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                  {{ getStatusText(peserta.status) }}
                </span>
              </div>

              <div class="text-sm text-gray-600 mb-3">
                <i class="fas fa-calendar mr-2"></i>
                {{ formatDate(peserta.tanggalDaftar) }}
              </div>

              <div class="flex gap-2">
                <button v-if="peserta.status === 'pending'" @click="verifikasiPeserta(peserta.id)"
                  :disabled="isProcessing"
                  class="flex-1 bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-2 rounded text-sm transition-colors">
                  <i class="fas fa-check mr-2"></i>
                  Verifikasi
                </button>
                <button v-if="peserta.status === 'pending'" @click="confirmTolakPeserta(peserta)"
                  :disabled="isProcessing"
                  class="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-2 rounded text-sm transition-colors">
                  <i class="fas fa-times mr-2"></i>
                  Tolak
                </button>
                <button @click="lihatDetail(peserta)"
                  class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm transition-colors">
                  <i class="fas fa-eye mr-2"></i>
                  Detail
                </button>
              </div>
            </div>
          </div>

          <div v-if="filteredPeserta.length === 0 && !isLoading" class="bg-white rounded-lg shadow p-8 text-center">
            <i class="fas fa-inbox text-4xl text-gray-400 mb-4"></i>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Tidak ada peserta ditemukan</h3>
            <p class="text-gray-600">Coba ubah filter pencarian atau refresh data.</p>
          </div>
        </div>
      </main>
    </div>

    <div v-if="showDetailModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="sticky top-0 bg-white border-b p-6">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-semibold">Detail Peserta</h3>
            <button @click="closeDetailModal" class="text-gray-400 hover:text-gray-600">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div v-if="selectedPesertaDetail" class="p-6">

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label class="text-sm font-medium text-gray-600">Nama Lengkap</label>

              <p class="text-gray-900 font-medium">{{ selectedPesertaDetail.nama_lengkap }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">Jenis Peserta</label>
              <p class="text-gray-900">{{ selectedPesertaDetail.jenis_peserta }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">Email</label>
              <p class="text-gray-900">{{ selectedPesertaDetail.email || '-' }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">No. Telepon</label>
              <p class="text-gray-900">{{ selectedPesertaDetail.no_telepon }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">Cabang Olahraga</label>
              <p class="text-gray-900">{{ selectedPesertaDetail.cabang_olahraga }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">Wilayah Kerja</label>
              <p class="text-gray-900">{{ selectedPesertaDetail.wilayah_kerja }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">Tanggal Daftar</label>
              <p class="text-gray-900">{{ formatDate(selectedPesertaDetail.tanggalDaftar) }}</p>
            </div>
            <div>
              <label class="text-sm font-medium text-gray-600">Status Verifikasi</label>
              <span :class="getStatusClass(selectedPesertaDetail.status)"
                class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                {{ getStatusText(selectedPesertaDetail.status) }}
              </span>
            </div>
          </div>


          <div v-if="selectedPesertaDetail.catatan" class="mb-6">
            <label class="text-sm font-medium text-gray-600">Catatan</label>
            <p class="text-gray-900 bg-gray-50 p-3 rounded">{{ selectedPesertaDetail.catatan }}</p>
          </div>


          <div class="mb-6">
            <h4 class="text-md font-semibold text-gray-800 mb-3">Dokumen Pendukung</h4>
            <div class="grid grid-cols-2 gap-3">
              <template v-for="(doc, key) in getAvailableDocuments(selectedPesertaDetail)" :key="key">
                <a :href="getDocumentUrl(doc.file)" target="_blank"
                  class="flex items-center gap-2 p-2 border rounded hover:bg-gray-50">
                  <i :class="doc.icon" class="text-blue-600"></i>
                  <span class="text-sm">{{ doc.name }}</span>
                </a>
              </template>
            </div>
            <div v-if="getAvailableDocuments(selectedPesertaDetail).length === 0" class="text-gray-500 text-sm">
              Tidak ada dokumen yang tersedia
            </div>
          </div>
        </div>


        <div class="sticky bottom-0 bg-white border-t p-6">
          <div class="flex gap-2">
            <button v-if="selectedPesertaDetail && selectedPesertaDetail.status === 'pending'"
              @click="verifikasiPeserta(selectedPesertaDetail.id); closeDetailModal()" :disabled="isProcessing"
              class="flex-1 bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded">
              <i class="fas fa-check mr-2"></i>
              Verifikasi
            </button>
            <button v-if="selectedPesertaDetail && selectedPesertaDetail.status === 'pending'"
              @click="confirmTolakPeserta(selectedPesertaDetail); closeDetailModal()" :disabled="isProcessing"
              class="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded">
              <i class="fas fa-times mr-2"></i>
              Tolak
            </button>
            <button @click="closeDetailModal"
              class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>


    <div v-if="showRejectModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-lg max-w-md w-full">
        <div class="p-6">
          <h3 class="text-lg font-semibold mb-4">Konfirmasi Penolakan</h3>
          <p class="text-gray-600 mb-4">
            Apakah Anda yakin ingin menolak peserta <strong>{{ pesertaToReject?.nama_lengkap }}</strong>?
          </p>

          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Alasan Penolakan (Opsional)</label>
            <textarea v-model="rejectReason"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
              rows="3" placeholder="Masukkan alasan penolakan..."></textarea>
          </div>

          <div class="flex gap-3">
            <button @click="executeReject" :disabled="isProcessing"
              class="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded">
              <i class="fas fa-times mr-2"></i>
              Ya, Tolak
            </button>
            <button @click="cancelReject" class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded">
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>


    <div v-if="showToast"
      class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity"
      :class="{ 'opacity-0': !showToast }">
      <div class="flex items-center gap-2">
        <i class="fas fa-check-circle"></i>
        <span>{{ toastMessage }}</span>
      </div>
    </div>


    <div v-if="showErrorToast"
      class="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity"
      :class="{ 'opacity-0': !showErrorToast }">
      <div class="flex items-center gap-2">
        <i class="fas fa-exclamation-circle"></i>
        <span>{{ errorMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import API from "@/service/api";

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
      isLoading: false,
      showDetailModal: false,
      selectedPesertaDetail: null,
      showToast: false,
      toastMessage: "",
      showErrorToast: false,
      errorMessage: "",
      currentPage: 1,
      itemsPerPage: 10,
      pesertaList: [],
      totalPeserta: 0,
      error: null,
      showRejectModal: false,
      pesertaToReject: null,
      rejectReason: ""
    };
  },
  async mounted() {
    await this.fetchPesertaData();
  },
  computed: {
    filteredPeserta() {
      let filtered = this.pesertaList;

      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase();
        filtered = filtered.filter(peserta =>
          (peserta.nama_lengkap && peserta.nama_lengkap.toLowerCase().includes(term)) ||
          (peserta.email && peserta.email.toLowerCase().includes(term)) ||
          (peserta.no_telepon && peserta.no_telepon.toLowerCase().includes(term))
        );
      }

      if (this.statusFilter === "verified") {
        filtered = filtered.filter(peserta => peserta.status === "approved");
      } else if (this.statusFilter === "unverified") {
        filtered = filtered.filter(peserta => peserta.status === "pending");
      } else if (this.statusFilter === "rejected") {
        filtered = filtered.filter(peserta => peserta.status === "rejected");
      }

      return filtered;
    },
    paginatedPeserta() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredPeserta.slice(start, end);
    },
    pesertaTerverifikasi() {
      return this.pesertaList.filter(p => p.status === "approved").length;
    },
    pesertaBelumVerifikasi() {
      return this.pesertaList.filter(p => p.status === "pending").length;
    },
    pesertaDitolak() {
      return this.pesertaList.filter(p => p.status === "rejected").length;
    },
    persentaseVerifikasi() {
      if (this.totalPeserta === 0) return 0;
      return Math.round((this.pesertaTerverifikasi / this.totalPeserta) * 100);
    },
    totalPages() {
      return Math.ceil(this.filteredPeserta.length / this.itemsPerPage);
    },
    startIndex() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    endIndex() {
      return Math.min(this.currentPage * this.itemsPerPage, this.filteredPeserta.length);
    }
  },
  methods: {
    async fetchPesertaData() {
      this.isLoading = true;
      this.error = null;
      try {
        console.log('Fetching participants for verification...');

        const response = await API.getParticipants();

        console.log('API Response:', response);

        if (response.data) {
          let participants = [];

          if (response.data.data) {
            participants = response.data.data;
          } else if (Array.isArray(response.data)) {
            participants = response.data;
          } else {
            console.warn('Unexpected response structure:', response.data);
          }

          this.pesertaList = participants.map(peserta => ({
            id: peserta.id,
            nama_lengkap: peserta.nama_lengkap,
            email: peserta.user.email,
            no_telepon: peserta.no_telepon,
            jenis_peserta: peserta.jenis_peserta,
            cabang_olahraga: peserta.cabang_olahraga,
            wilayah_kerja: peserta.wilayah_kerja,
            catatan: peserta.catatan,
            media_sosial: peserta.media_sosial,
            status: peserta.status || 'pending',
            isVerified: peserta.status === "approved",
            tanggalDaftar: new Date(peserta.created_at || Date.now()),
            created_at: peserta.created_at,
            updated_at: peserta.updated_at,

            ktp: peserta.ktp,
            id_card: peserta.id_card,
            bpjs: peserta.bpjs,
            pas_foto: peserta.pas_foto,
            surat_pernyataan: peserta.surat_pernyataan,
            surat_layak_bertanding: peserta.surat_layak_bertanding,
            form_prq: peserta.form_prq
          }));

          this.totalPeserta = this.pesertaList.length;
          console.log('Participants loaded for verification:', this.pesertaList.length);
        } else {
          this.pesertaList = [];
          this.totalPeserta = 0;
        }
      } catch (error) {
        console.error('Error fetching peserta data:', error);
        this.error = 'Gagal memuat data peserta';
        this.pesertaList = [];
        this.totalPeserta = 0;

        if (error.response) {
          console.error('Error Response:', {
            status: error.response.status,
            data: error.response.data
          });

          switch (error.response.status) {
            case 500:
              this.error = 'Server sedang mengalami masalah. Silakan coba lagi nanti.';
              break;
            case 404:
              this.error = 'Endpoint tidak ditemukan.';
              break;
            case 403:
              this.error = 'Akses ditolak. Periksa token autentikasi.';
              break;
            default:
              this.error = `Error: ${error.response.status} - ${error.response.statusText}`;
          }
        } else if (error.request) {
          this.error = 'Tidak dapat terhubung ke server. Periksa koneksi internet.';
        }

        this.showErrorToast = true;
        this.errorMessage = this.error;
        setTimeout(() => {
          this.showErrorToast = false;
        }, 5000);
      } finally {
        this.isLoading = false;
      }
    },

    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },

    async verifikasiPeserta(pesertaId) {
      this.isProcessing = true;

      try {
        console.log('=== DEBUG VERIFIKASI ===');
        console.log('Participant ID:', pesertaId);
        console.log('API Base URL:', process.env.VUE_APP_API_BASE_URL);

        const pesertaSebelum = this.pesertaList.find(p => p.id === pesertaId);
        console.log('Peserta sebelum verifikasi:', pesertaSebelum);

        console.log('Calling API.updateParticipantStatus...');
        const response = await API.updateParticipantStatus(pesertaId, 'approved');

        console.log('API Response Status:', response.status);
        console.log('API Response Data:', response.data);
        console.log('API Response Headers:', response.headers);

        if (response.data) {
          const peserta = this.pesertaList.find((p) => p.id === pesertaId);
          if (peserta) {
            console.log('Peserta ditemukan, updating status...');
            console.log('Status sebelum:', peserta.status);

            peserta.isVerified = true;
            peserta.status = 'approved';

            console.log('Status sesudah:', peserta.status);
            this.showToastNotification(`${peserta.nama_lengkap} berhasil diverifikasi`);
          } else {
            console.error('Peserta tidak ditemukan di local data!');
          }
        } else {
          console.error('Response data is empty!');
        }
      } catch (error) {
        console.error('=== ERROR VERIFIKASI ===');
        console.error('Error object:', error);
        console.error('Error message:', error.message);

        if (error.response) {
          console.error('Error response status:', error.response.status);
          console.error('Error response data:', error.response.data);
          console.error('Error response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Error request:', error.request);
        }

        this.showErrorToast = true;
        this.errorMessage = `Gagal memverifikasi peserta: ${error.message}`;
        setTimeout(() => {
          this.showErrorToast = false;
        }, 3000);
      } finally {
        this.isProcessing = false;
      }
    },
    async verifikasiBulk() {
      if (this.selectedPeserta.length === 0) return;

      this.isProcessing = true;

      try {
        console.log('Bulk verifying participants:', this.selectedPeserta);

        const promises = this.selectedPeserta.map(pesertaId =>
          API.updateParticipantStatus(pesertaId, 'approved')
        );

        await Promise.all(promises);

        let count = 0;
        this.selectedPeserta.forEach(pesertaId => {
          const peserta = this.pesertaList.find(p => p.id === pesertaId);
          if (peserta && peserta.status === 'pending') {
            peserta.isVerified = true;
            peserta.status = 'approved';
            count++;
          }
        });

        this.selectedPeserta = [];
        this.selectAll = false;
        this.showToastNotification(`${count} peserta berhasil diverifikasi`);
      } catch (error) {
        console.error('Error bulk verifying:', error);
        this.showErrorToast = true;
        this.errorMessage = "Gagal memverifikasi beberapa peserta";
        setTimeout(() => {
          this.showErrorToast = false;
        }, 3000);
      } finally {
        this.isProcessing = false;
      }
    },

    confirmTolakPeserta(peserta) {
      this.pesertaToReject = peserta;
      this.rejectReason = '';
      this.showRejectModal = true;
    },

    cancelReject() {
      this.showRejectModal = false;
      this.pesertaToReject = null;
      this.rejectReason = '';
    },

    async executeReject() {
      if (!this.pesertaToReject) return;

      this.isProcessing = true;

      try {
        console.log('Rejecting participant:', this.pesertaToReject.id, 'Reason:', this.rejectReason);

        const response = await API.updateParticipantStatus(
          this.pesertaToReject.id,
          'rejected',
          this.rejectReason
        );

        if (response.data) {
          const peserta = this.pesertaList.find((p) => p.id === this.pesertaToReject.id);
          if (peserta) {
            peserta.status = 'rejected';
            peserta.isVerified = false;
            peserta.catatan = this.rejectReason;
            this.showToastNotification(`${peserta.nama_lengkap} ditolak`);
          }
        }

        this.showRejectModal = false;
        this.pesertaToReject = null;
        this.rejectReason = '';
      } catch (error) {
        console.error('Error rejecting peserta:', error);
        this.showErrorToast = true;
        this.errorMessage = "Gagal menolak peserta";
        setTimeout(() => {
          this.showErrorToast = false;
        }, 3000);
      } finally {
        this.isProcessing = false;
      }
    },

    toggleSelectAll() {
      if (this.selectAll) {
        this.selectedPeserta = this.paginatedPeserta
          .filter(p => p.status === 'pending')
          .map(p => p.id);
      } else {
        this.selectedPeserta = [];
      }
    },

    lihatDetail(peserta) {
      console.log('Viewing participant details:', peserta);
      this.selectedPesertaDetail = peserta;
      this.showDetailModal = true;
    },

    closeDetailModal() {
      this.showDetailModal = false;
      this.selectedPesertaDetail = null;
    },

    getAvailableDocuments(peserta) {
      if (!peserta) return [];

      const documents = [];
      const docFields = [
        { key: 'ktp', name: 'KTP', icon: 'fas fa-id-card' },
        { key: 'id_card', name: 'ID Card', icon: 'fas fa-id-badge' },
        { key: 'bpjs', name: 'BPJS', icon: 'fas fa-file-medical' },
        { key: 'pas_foto', name: 'Pas Foto', icon: 'fas fa-image' },
        { key: 'surat_pernyataan', name: 'Surat Pernyataan', icon: 'fas fa-file-contract' },
        { key: 'surat_layak_bertanding', name: 'Surat Layak Bertanding', icon: 'fas fa-file-medical-alt' },
        { key: 'form_prq', name: 'Form PRQ', icon: 'fas fa-clipboard-list' }
      ];

      docFields.forEach(doc => {
        if (peserta[doc.key]) {
          documents.push({
            ...doc,
            file: peserta[doc.key]
          });
        }
      });

      return documents;
    },

    getDocumentUrl(filename) {
      if (!filename) return '#';

      if (filename.startsWith('http')) {
        return filename;
      }

      const baseUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:8080';
      return `${baseUrl}/uploads/${filename}`;
    },

    async refreshData() {
      await this.fetchPesertaData();
      this.showToastNotification("Data berhasil diperbarui");
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
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date(date));
    },

    getStatusText(status) {
      const statusMap = {
        pending: 'Menunggu Verifikasi',
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
      const pendingPeserta = this.paginatedPeserta.filter(p => p.status === 'pending');
      this.selectAll = this.selectedPeserta.length === pendingPeserta.length && pendingPeserta.length > 0;
    },
    searchTerm() {
      this.currentPage = 1;
    },
    statusFilter() {
      this.currentPage = 1;
    }
  }
};
</script>