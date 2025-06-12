<template>
    <NavbarDashboard />
    <div class="min-h-screen bg-gray-100 p-4 sm:p-6">
        <div class="max-w-7xl mx-auto">
            
            <div v-if="isLoading" class="flex justify-center items-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span class="ml-3 text-gray-600">Memuat data peserta...</span>
            </div>

            <div v-else>

                <div class="mb-6">
                    <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                        Daftar Peserta
                    </h1>
                </div>

                
                <div class="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
                    <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            
                            <div class="relative">
                                <input v-model="searchTerm" type="text" placeholder="Cari nama..."
                                    class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64">
                                <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                            </div>

                            
                            <select v-model="statusFilter"
                                class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="all">Semua Status</option>
                                <option value="verified">Terverifikasi</option>
                                <option value="unverified">Menunggu Verifikasi</option>
                                <option value="rejected">Ditolak</option>
                            </select>

                            
                            <select v-model="sportFilter"
                                class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="all">Semua Cabang Olahraga</option>
                                <option v-for="sport in uniqueSports" :key="sport" :value="sport">
                                    {{ sport }}
                                </option>
                            </select>
                        </div>

                        <div class="flex gap-2 w-full sm:w-auto">
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
                            <thead class="bg-red-700 text-white">
                                <tr>
                                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                        No
                                    </th>
                                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                        Nama Lengkap
                                    </th>
                                 
                                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                        Cabang Olahraga
                                    </th>
                                             
                                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                        Aset
                                    </th>
                                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                        Tanggal Daftar
                                    </th>
                                    <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="(peserta, index) in paginatedPeserta" :key="peserta.id"
                                    class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {{ startIndex + index + 1 }}
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm font-medium text-gray-900">{{ peserta.nama_lengkap }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-600">{{ peserta.cabang_olahraga }}</div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-600">{{ peserta.aset }}</div>
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
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
                    <div class="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                        <div class="flex items-center justify-between">
                            <div class="text-sm text-gray-700">
                                Menampilkan {{ Math.min(startIndex + 1, filteredPeserta.length) }} sampai {{
                                    Math.min(endIndex, filteredPeserta.length) }} dari {{ filteredPeserta.length }} peserta
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
                    <div v-for="(peserta, index) in paginatedPeserta" :key="peserta.id"
                        class="bg-white rounded-lg shadow p-4">
                        <div class="flex items-start justify-between mb-3">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                    <span class="text-xs font-semibold text-blue-600">{{ startIndex + index + 1
                                    }}</span>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">{{ peserta.nama_lengkap }}</h3>
                                    <p class="text-xs text-gray-500">{{ peserta.cabang_olahraga }} - {{
                                        peserta.jenis_peserta }}</p>
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

                       
                    </div>
                </div>

                
                <div v-if="filteredPeserta.length === 0 && !isLoading"
                    class="bg-white rounded-lg shadow p-8 text-center">
                    <i class="fas fa-inbox text-4xl text-gray-400 mb-4"></i>
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Tidak ada peserta ditemukan</h3>
                    <p class="text-gray-600">Coba ubah filter pencarian atau refresh data.</p>
                </div>
            </div>
        </div>

        
        <div v-if="showDetailModal"
            class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
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
                            <label class="text-sm font-medium text-gray-600">Status</label>
                            <span :class="getStatusClass(selectedPesertaDetail.status)"
                                class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                                {{ getStatusText(selectedPesertaDetail.status) }}
                            </span>
                        </div>
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
    <FooterDashboard />
</template>

<script>
import FooterDashboard from "@/components/FooterDashboard.vue";
import NavbarDashboard from "@/components/NavbarDashboard.vue";
import API from "@/service/api";

export default {
    components: {
        NavbarDashboard,
        FooterDashboard
    },
    name: "DaftarPeserta",
    data() {
        return {
            searchTerm: "",
            statusFilter: "all",
            sportFilter: "all",
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
        };
    },
    async mounted() {
        await this.fetchPesertaData();
    },
    computed: {
        filteredPeserta() {
            let filtered = this.pesertaList;

            // Filter by search term
            if (this.searchTerm) {
                const term = this.searchTerm.toLowerCase();
                filtered = filtered.filter(peserta =>
                    (peserta.nama_lengkap && peserta.nama_lengkap.toLowerCase().includes(term))
                 
                );
            }

            // Filter by status
            if (this.statusFilter === "verified") {
                filtered = filtered.filter(peserta => peserta.status === "approved");
            } else if (this.statusFilter === "unverified") {
                filtered = filtered.filter(peserta => peserta.status === "pending");
            } else if (this.statusFilter === "rejected") {
                filtered = filtered.filter(peserta => peserta.status === "rejected");
            }

            // Filter by sport
            if (this.sportFilter !== "all") {
                filtered = filtered.filter(peserta => peserta.cabang_olahraga === this.sportFilter);
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
        totalPages() {
            return Math.ceil(this.filteredPeserta.length / this.itemsPerPage);
        },
        startIndex() {
            return (this.currentPage - 1) * this.itemsPerPage;
        },
        endIndex() {
            return Math.min(this.currentPage * this.itemsPerPage, this.filteredPeserta.length);
        },
        uniqueSports() {
            const sports = [...new Set(this.pesertaList.map(p => p.cabang_olahraga).filter(Boolean))];
            return sports.sort();
        }
    },
    methods: {
        async fetchPesertaData() {
            this.isLoading = true;
            this.error = null;
            try {
                console.log('Fetching participants data...');

                const response = await API.getParticipantlist();

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
                   
                        jenis_peserta: peserta.jenis_peserta,
                        cabang_olahraga: peserta.cabang_olahraga,
                        wilayah_kerja: peserta.wilayah_kerja,
                        catatan: peserta.catatan,
                        aset: peserta.user.aset,
                        status: peserta.status || 'pending',
                        tanggalDaftar: new Date(peserta.created_at || Date.now()),
                        created_at: peserta.created_at,
                        updated_at: peserta.updated_at,
                    }));

                    this.totalPeserta = this.pesertaList.length;
                    console.log('Participants loaded:', this.pesertaList.length);
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


        closeDetailModal() {
            this.showDetailModal = false;
            this.selectedPesertaDetail = null;
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
        searchTerm() {
            this.currentPage = 1;
        },
        statusFilter() {
            this.currentPage = 1;
        },
        sportFilter() {
            this.currentPage = 1;
        }
    }
};
</script>