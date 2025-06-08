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

        <div class="hidden lg:flex justify-between items-center mb-8">
          <h1 class="text-3xl font-bold text-gray-800">Data Peserta</h1>
          <div class="flex gap-3">
            <button @click="showAddModal = true"
              class="bg-[#D71E28] hover:bg-[#B91C1C] text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <i class="fas fa-plus"></i>
              <span class="hidden sm:inline">Tambah Peserta</span>
            </button>
            <button @click="exportData"
              class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <i class="fas fa-download"></i>
              <span class="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        <div class="flex gap-2 mb-4 lg:hidden">
          <button @click="showAddModal = true"
            class="flex-1 bg-[#D71E28] hover:bg-[#B91C1C] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <i class="fas fa-plus"></i>
            <span>Tambah</span>
          </button>
          <button @click="exportData"
            class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <i class="fas fa-download"></i>
          </button>
        </div>


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
                <option value="Peserta  ">Peserta</option>
              </select>
              <select v-model="filterCabang"
                class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                <option value="">Semua Cabang</option>
                <option value="Badminton">Badminton</option>
                <option value="Tenis Meja">Tenis Meja</option>
                <option value="Sepak Bola">Sepak Bola</option>
                <option value="Voli">Voli</option>
              </select>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="bg-white p-4 rounded-xl shadow-sm">
            <div class="flex items-center">
              <div class="p-2 bg-blue-100 rounded-lg">
                <i class="fas fa-users text-blue-600"></i>
              </div>
              <div class="ml-3">
                <p class="text-sm text-gray-500">Total Peserta</p>
                <p class="text-xl font-semibold">{{ filteredPeserta.length }}</p>
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
                <p class="text-sm text-gray-500">Peserta</p>
                <p class="text-xl font-semibold">{{ PesertaCount }}</p>
              </div>
            </div>
          </div>
        </div>


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
                    Aset
                  </th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="peserta in paginatedPeserta" :key="peserta.email" class="hover:bg-gray-50 transition-colors">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-12 w-12">
                        <img v-if="peserta.foto" :src="peserta.foto" :alt="peserta.namaLengkap"
                          class="h-12 w-12 rounded-full object-cover border-2 border-gray-200">
                        <div v-else class="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                          <i class="fas fa-user text-gray-500"></i>
                        </div>
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{ peserta.namaLengkap }}</div>
                        <div class="text-sm text-gray-500">{{ peserta.email }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ peserta.jenisPeserta }}</div>
                    <div class="text-sm text-gray-500">{{ peserta.cabangOlahraga }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {{ peserta.aset }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div class="flex gap-2">
                      <button @click="editPeserta(peserta)" class="text-indigo-600 hover:text-indigo-900 p-1 rounded">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="deletePeserta(peserta.email)" class="text-red-600 hover:text-red-900 p-1 rounded">
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div class="lg:hidden space-y-4">
          <div v-for="peserta in paginatedPeserta" :key="peserta.email" class="bg-white rounded-xl shadow-sm p-4">
            <div class="flex items-start justify-between">
              <div class="flex items-center flex-1">
                <div class="flex-shrink-0">
                  <img v-if="peserta.foto" :src="peserta.foto" :alt="peserta.namaLengkap"
                    class="h-12 w-12 rounded-full object-cover border-2 border-gray-200">
                  <div v-else class="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <i class="fas fa-user text-gray-500"></i>
                  </div>
                </div>
                <div class="ml-3 flex-1">
                  <h3 class="font-medium text-gray-900">{{ peserta.namaLengkap }}</h3>
                  <p class="text-sm text-gray-500">{{ peserta.email }}</p>
                  <div class="flex gap-2 mt-1">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {{ peserta.jenisPeserta }}
                    </span>
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {{ peserta.cabangOlahraga }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">{{ peserta.aset }}</p>
                </div>
              </div>
              <div class="flex gap-2 ml-2">
                <button @click="editPeserta(peserta)"
                  class="text-indigo-600 hover:text-indigo-900 p-2 rounded-lg hover:bg-indigo-50">
                  <i class="fas fa-edit"></i>
                </button>
                <button @click="deletePeserta(peserta.email)"
                  class="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50">
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>


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
      </main>
    </div>


    <div v-if="showAddModal || editingPeserta"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-medium text-gray-900">
            {{ editingPeserta ? 'Edit Peserta' : 'Tambah Peserta Baru' }}
          </h3>
        </div>
        <form @submit.prevent="savePeserta" class="px-6 py-4 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input v-model="formData.namaLengkap" type="text" required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input v-model="formData.email" type="email" required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Peserta</label>
            <select v-model="formData.jenisPeserta" required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
              <option value="">Pilih Jenis</option>
              <option value="Mitra">Mitra</option>
              <option value="Karyawan">Karyawan</option>
              <option value="Umum">Umum</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Cabang Olahraga</label>
            <select v-model="formData.cabangOlahraga" required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
              <option value="">Pilih Cabang</option>
              <option value="Badminton">Badminton</option>
              <option value="Tenis Meja">Tenis Meja</option>
              <option value="Sepak Bola">Sepak Bola</option>
              <option value="Voli">Voli</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Aset</label>
            <input v-model="formData.aset" type="text" required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
          </div>
          <div class="flex justify-end gap-3 pt-4">
            <button type="button" @click="closeModal"
              class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Batal
            </button>
            <button type="submit"
              class="px-4 py-2 bg-[#D71E28] text-white rounded-lg hover:bg-[#B91C1C] transition-colors">
              {{ editingPeserta ? 'Update' : 'Simpan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "DataPeserta",
  components: { Sidebar },
  data() {
    return {
      isSidebarOpen: false,
      showAddModal: false,
      editingPeserta: null,
      searchQuery: '',
      filterJenis: '',
      filterCabang: '',
      currentPage: 1,
      itemsPerPage: 10,
      formData: {
        namaLengkap: '',
        email: '',
        jenisPeserta: '',
        cabangOlahraga: '',
        aset: '',
        foto: null
      },
      pesertaList: [],
    };
  },
  computed: {
    filteredPeserta() {
      let filtered = this.pesertaList;

      // Search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(peserta =>
          peserta.namaLengkap.toLowerCase().includes(query) ||
          peserta.email.toLowerCase().includes(query)
        );
      }

      // Jenis filter
      if (this.filterJenis) {
        filtered = filtered.filter(peserta => peserta.jenisPeserta === this.filterJenis);
      }

      // Cabang filter
      if (this.filterCabang) {
        filtered = filtered.filter(peserta => peserta.cabangOlahraga === this.filterCabang);
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
    mitraCount() {
      return this.pesertaList.filter(p => p.jenisPeserta === 'Mitra').length;
    },
    PesertaCount() {
      return this.pesertaList.filter(p => p.jenisPeserta === 'Peserta').length;
    },

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
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    savePeserta() {
      if (this.editingPeserta) {
        // Update existing peserta
        const index = this.pesertaList.findIndex(p => p.email === this.editingPeserta.email);
        if (index !== -1) {
          this.pesertaList.splice(index, 1, { ...this.formData });
        }
      } else {
        // Add new peserta
        this.pesertaList.push({ ...this.formData });
      }
      this.closeModal();
      this.showSuccessMessage(this.editingPeserta ? 'Data berhasil diupdate!' : 'Data berhasil ditambahkan!');
    },
    editPeserta(peserta) {
      this.editingPeserta = peserta;
      this.formData = { ...peserta };
    },
    deletePeserta(email) {
      if (confirm('Apakah Anda yakin ingin menghapus peserta ini?')) {
        this.pesertaList = this.pesertaList.filter(p => p.email !== email);
        this.showSuccessMessage('Data berhasil dihapus!');
      }
    },
    closeModal() {
      this.showAddModal = false;
      this.editingPeserta = null;
      this.formData = {
        namaLengkap: '',
        email: '',
        jenisPeserta: '',
        cabangOlahraga: '',
        aset: '',
        foto: null
      };
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
      const headers = ['Nama Lengkap', 'Email', 'Jenis Peserta', 'Cabang Olahraga', 'Aset'];
      const rows = this.filteredPeserta.map(peserta => [
        peserta.namaLengkap,
        peserta.email,
        peserta.jenisPeserta,
        peserta.cabangOlahraga,
        peserta.aset
      ]);

      return [headers, ...rows].map(row =>
        row.map(field => `"${field}"`).join(',')
      ).join('\n');
    },
    showSuccessMessage(message) {
      // You can implement toast notification here
      alert(message);
    }
  },
  mounted() {
    // Close sidebar on large screens by default
    if (window.innerWidth >= 1024) {
      this.isSidebarOpen = false;
    }
  }
};
</script>