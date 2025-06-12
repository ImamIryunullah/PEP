<template>
  <div class="min-h-screen flex bg-gray-50 relative">
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
        <h1 class="text-lg font-semibold text-[#D71E28]">Data Aset</h1>
        <div class="w-10"></div>
      </header>

      <main class="flex-1 p-4 lg:p-8">

        <div v-if="isLoading" class="flex justify-center items-center py-8">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D71E28]"></div>
          <span class="ml-2 text-gray-600">Memuat data...</span>
        </div>

        <div v-else>
          <div class="hidden lg:flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Data ASET</h1>
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


          <div class="bg-white rounded-xl shadow-sm p-4 mb-6">
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input v-model="searchQuery" type="text" placeholder="Cari email pengguna..."
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                </div>
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
                  <p class="text-sm text-gray-500">Total</p>
                  <p class="text-xl font-semibold">{{ totalUsers }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="flex items-center">
                <div class="p-2 bg-purple-100 rounded-lg">
                  <i class="fas fa-user text-purple-600"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">User</p>
                  <p class="text-xl font-semibold">{{ userCount }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="flex items-center">
                <div class="p-2 bg-green-100 rounded-lg">
                  <i class="fas fa-check-circle text-green-600"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">Aktif</p>
                  <p class="text-xl font-semibold">{{ activeCount }}</p>
                </div>
              </div>
            </div>
            <div class="bg-white p-4 rounded-xl shadow-sm">
              <div class="flex items-center">
                <div class="p-2 bg-red-100 rounded-lg">
                  <i class="fas fa-times-circle text-red-600"></i>
                </div>
                <div class="ml-3">
                  <p class="text-sm text-gray-500">Tidak Aktif</p>
                  <p class="text-xl font-semibold">{{ inactiveCount }}</p>
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
                      Pengguna
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Email
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Aset
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Provinsi
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Role
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Status
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Last Login
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="user in paginatedUsers" :key="user.id" class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-12 w-12">
                          <img v-if="user.foto_path" :src="getFullpath(user.foto_path)" :alt="user.email"
                            class="h-12 w-12 rounded-full object-cover border-2 border-gray-200">
                          <div v-else class="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                            <i class="fas fa-user text-gray-500"></i>
                          </div>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">{{ user.email.split('@')[0] }}</div>
                          <div class="text-sm text-gray-500">ID: {{ user.id }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ user.email }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {{ user.aset }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ formatProvinsi(user.provinsi) }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getRoleClass(user.role)">
                        {{ user.role.toUpperCase() }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getStatusClass(user.is_active)">
                        {{ user.is_active ? 'Aktif' : 'Tidak Aktif' }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {{ formatDate(user.last_login) }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div class="flex gap-2">
                        <button @click="viewUser(user)" class="text-blue-600 hover:text-blue-900 p-1 rounded">
                          <i class="fas fa-eye"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="lg:hidden space-y-4">
            <div v-for="user in paginatedUsers" :key="user.id" class="bg-white rounded-xl shadow-sm p-4">
              <div class="flex items-start justify-between">
                <div class="flex items-center flex-1">
                  <div class="flex-shrink-0">
                    <img v-if="user.foto_path" :src="getFullpath(user.foto_path)" :alt="user.email"
                      class="h-12 w-12 rounded-full object-cover border-2 border-gray-200">
                    <div v-else class="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <i class="fas fa-user text-gray-500"></i>
                    </div>
                  </div>
                  <div class="ml-3 flex-1">
                    <h3 class="font-medium text-gray-900">{{ user.email }}</h3>
                    <p class="text-sm text-gray-500">ID: {{ user.id }}</p>
                    <div class="flex gap-2 mt-1">
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {{ user.aset }}
                      </span>
                      <span :class="getRoleMobileClass(user.role)">
                        {{ user.role.toUpperCase() }}
                      </span>
                    </div>
                    <div class="flex justify-between items-center mt-2">
                      <p class="text-xs text-gray-500">{{ formatProvinsi(user.provinsi) }}</p>
                      <span :class="getStatusClass(user.is_active)">
                        {{ user.is_active ? 'Aktif' : 'Tidak Aktif' }}
                      </span>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Last login: {{ formatDate(user.last_login) }}</p>
                  </div>
                </div>
                <div class="flex gap-2 ml-2">
                  <button @click="viewUser(user)"
                    class="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50">
                    <i class="fas fa-eye"></i>
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

              <button @click="currentPage = Math.min(totalPages, currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50">
                <i class="fas fa-chevron-right"></i>
              </button>
            </nav>
          </div>
        </div>
      </main>
    </div>


    <div v-if="selectedUser"
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-screen overflow-y-auto">
        <div class="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 class="text-lg font-medium text-gray-900">Detail Pengguna</h3>
          <button @click="selectedUser = null" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        <div class="px-6 py-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-gray-800 mb-3">Informasi Pengguna</h4>
              <div class="space-y-2 text-sm">
                <p><span class="font-medium">ID:</span> {{ selectedUser.id }}</p>
                <p><span class="font-medium">Email:</span> {{ selectedUser.email }}</p>
                <p><span class="font-medium">Aset:</span> {{ selectedUser.aset }}</p>
                <p><span class="font-medium">Provinsi:</span> {{ formatProvinsi(selectedUser.provinsi) }}</p>
                <p><span class="font-medium">Role:</span> {{ selectedUser.role.toUpperCase() }}</p>
                <p><span class="font-medium">Status:</span> {{ selectedUser.is_active ? 'Aktif' : 'Tidak Aktif' }}</p>
                <p><span class="font-medium">Dibuat:</span> {{ formatDate(selectedUser.created_at) }}</p>
                <p><span class="font-medium">Diperbarui:</span> {{ formatDate(selectedUser.updated_at) }}</p>
                <p><span class="font-medium">Last Login:</span> {{ formatDate(selectedUser.last_login) }}</p>
              </div>
            </div>
            <div v-if="selectedUser.foto_path">
              <h4 class="font-semibold text-gray-800 mb-3">Foto Profil</h4>
              <img :src="getFullpath(selectedUser.foto_path)" :alt="selectedUser.email"
                class="w-full max-w-xs rounded-lg object-cover border-2 border-gray-200">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import api from "@/service/api.js";
import API from "@/service/api.js";

export default {
  name: "DataAset",
  components: { Sidebar },
  data() {
    return {
      isSidebarOpen: false,
      selectedUser: null,
      searchQuery: '',
      filterAset: '',
      currentPage: 1,
      itemsPerPage: 10,
      akunList: [],
      isLoading: false,
    };
  },
  computed: {
    filteredUsers() {

      let filtered = this.akunList.filter(user => user.role !== 'admin');

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(user =>
          user.email.toLowerCase().includes(query)
        );
      }

      if (this.filterAset) {
        filtered = filtered.filter(user => user.aset === this.filterAset);
      }

      return filtered;
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredUsers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
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
    totalUsers() {
      return this.akunList.filter(user => user.role !== 'admin').length;
    },
    adminCount() {
      return this.akunList.filter(user => user.role === 'admin').length;
    },
    userCount() {
      return this.akunList.filter(user => user.role === 'user').length;
    },
    activeCount() {
      return this.akunList.filter(user => user.is_active === true && user.role !== 'admin').length;
    },
    inactiveCount() {
      return this.akunList.filter(user => user.is_active === false && user.role !== 'admin').length;
    },
  },
  watch: {
    searchQuery() {
      this.currentPage = 1;
    },
    filterAset() {
      this.currentPage = 1;
    }
  },
  methods: {
    async fetchDataAkun() {

      this.isLoading = true;
      try {
        const response = await API.GetAllAkun();

        console.log("Response dari API:", response);

        if (response.data && response.data.success && response.data.data) {
          console.log("Data akun:", response.data.data);
          this.akunList = response.data.data;
        } else {
          console.warn("Tidak ada data akun ditemukan.");
          this.showErrorMessage('Tidak ada data yang ditemukan');
        }

      } catch (error) {
        console.error('Error fetching data:', error);
        this.showErrorMessage('Gagal memuat data akun');
      } finally {
        this.isLoading = false;
      }
    },
    async refreshData() {
      await this.fetchDataAkun();
      this.showSuccessMessage('Data berhasil diperbarui!');
    },
    exportData() {
      // Implementasi export data
      const csvContent = this.generateCSV();
      this.downloadCSV(csvContent, 'data-aset.csv');
      this.showSuccessMessage('Data berhasil diexport!');
    },
    generateCSV() {
      const headers = ['ID', 'Email', 'Aset', 'Provinsi', 'Role', 'Status', 'Created At', 'Last Login'];
      const csvRows = [headers.join(',')];

      // Only export non-admin users
      const nonAdminUsers = this.akunList.filter(user => user.role !== 'admin');

      nonAdminUsers.forEach(user => {
        const row = [
          user.id,
          user.email,
          user.aset,
          user.provinsi,
          user.role,
          user.is_active ? 'Aktif' : 'Tidak Aktif',
          this.formatDate(user.created_at),
          this.formatDate(user.last_login)
        ];
        csvRows.push(row.join(','));
      });

      return csvRows.join('\n');
    },
    downloadCSV(content, filename) {
      const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    viewUser(user) {
      this.selectedUser = user;
    },

    getFullpath(img) {
      return api.getFullpath(img);
    },
    formatDate(dateString) {
      if (!dateString) return '-';
      const date = new Date(dateString);
      return date.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    formatProvinsi(provinsi) {
      const provinsiMap = {
        'jambi_ho': 'Jambi HO',
        'pendopo': 'Pendopo',
        'ramba': 'Ramba'
      };
      return provinsiMap[provinsi] || provinsi;
    },
    getRoleClass(role) {
      return role === 'admin'
        ? 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800'
        : 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800';
    },
    getRoleMobileClass(role) {
      return role === 'admin'
        ? 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800'
        : 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800';
    },
    getStatusClass(isActive) {
      return isActive
        ? 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'
        : 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800';
    },
    showSuccessMessage(message) {
      alert(message);
    },
    showErrorMessage(message) {
      alert(message);
    }
  },
  async mounted() {
    if (window.innerWidth >= 1024) {
      this.isSidebarOpen = false;
    }

    await this.fetchDataAkun();
  }
};
</script>