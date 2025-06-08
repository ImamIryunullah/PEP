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
                <h1 class="text-lg font-semibold text-[#D71E28]">Kelola Fun Run</h1>
                <div class="w-8"></div>
            </header>

            <main class="px-4 sm:px-6 py-4 sm:py-8 flex-1">
                <div v-if="isLoading" class="flex justify-center items-center py-12">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D71E28]"></div>
                    <span class="ml-3 text-gray-600">Memuat data peserta Fun Run...</span>
                </div>

                <div v-else>
                    <div class="mb-6">
                        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 hidden md:block">
                            Kelola Peserta Fun Run
                        </h1>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div class="bg-white rounded-lg shadow p-4">
                                <div class="flex items-center">
                                    <div class="p-2 bg-blue-100 rounded-lg">
                                        <i class="fas fa-running text-blue-600 text-xl"></i>
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
                                        <p class="text-sm text-gray-600">Terdaftar</p>
                                        <p class="text-2xl font-bold text-green-600">{{ pesertaTerdaftar }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow p-4">
                                <div class="flex items-center">
                                    <div class="p-2 bg-yellow-100 rounded-lg">
                                        <i class="fas fa-clock text-yellow-600 text-xl"></i>
                                    </div>
                                    <div class="ml-4">
                                        <p class="text-sm text-gray-600">Menunggu</p>
                                        <p class="text-2xl font-bold text-yellow-600">{{ pesertaPending }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow p-4">
                                <div class="flex items-center">
                                    <div class="p-2 bg-red-100 rounded-lg">
                                        <i class="fas fa-times-circle text-red-600 text-xl"></i>
                                    </div>
                                    <div class="ml-4">
                                        <p class="text-sm text-gray-600">Ditolak</p>
                                        <p class="text-2xl font-bold text-red-600">{{ pesertaDitolak }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow p-4 sm:p-6 mb-6">
                        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                            <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <div class="relative">
                                    <input v-model="searchTerm" type="text"
                                        placeholder="Cari nama, email, atau kontingen..."
                                        class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent w-full sm:w-64">
                                    <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                                </div>
                                <select v-model="statusFilter"
                                    class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                    <option value="all">Semua Status</option>
                                    <option value="pending">Menunggu</option>
                                    <option value="approved">Terdaftar</option>
                                    <option value="rejected">Ditolak</option>
                                </select>
                                <select v-model="sizeFilter"
                                    class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                    <option value="all">Semua Ukuran</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </div>
                            <div class="flex gap-2 w-full sm:w-auto">
                                <button v-if="selectedPeserta.length > 0" @click="approveBulk" :disabled="isProcessing"
                                    class="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                                    <i class="fas fa-check-double"></i>
                                    <span class="hidden sm:inline">Setujui Terpilih ({{ selectedPeserta.length
                                    }})</span>
                                    <span class="sm:hidden">Setujui ({{ selectedPeserta.length }})</span>
                                </button>
                                <button @click="exportData" :disabled="isProcessing"
                                    class="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                                    <i class="fas fa-download"></i>
                                    <span class="hidden sm:inline">Export</span>
                                </button>
                                <button @click="refreshData" :disabled="isProcessing"
                                    class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                                    <i class="fas fa-sync-alt" :class="{ 'animate-spin': isProcessing }"></i>
                                    <span class="hidden sm:inline">Refresh</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Desktop Table -->
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
                                            Nama Peserta
                                        </th>
                                        <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                            Kontingen
                                        </th>
                                        <th class="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider">
                                            Ukuran Kaos
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
                                    <tr v-for="peserta in paginatedPeserta" :key="peserta.id"
                                        class="hover:bg-gray-50 transition-colors"
                                        :class="{ 'bg-blue-50': selectedPeserta.includes(peserta.id) }">
                                        <td class="px-4 py-4 whitespace-nowrap">
                                            <input type="checkbox" :value="peserta.id" v-model="selectedPeserta"
                                                class="rounded focus:ring-2 focus:ring-[#D71E28]">
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm font-medium text-gray-900">{{ peserta.nama }}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-600">{{ peserta.email }}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-600">{{ peserta.kontingen }}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span
                                                class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                                                {{ peserta.size }}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-600">{{ formatDate(peserta.created_at) }}
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span :class="getStatusClass(peserta.status)"
                                                class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                                                {{ getStatusText(peserta.status) }}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm">
                                            <div class="flex gap-2">
                                                <button v-if="peserta.status === 'pending'"
                                                    @click="approvePeserta(peserta.id)" :disabled="isProcessing"
                                                    class="bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-1 rounded text-xs transition-colors">
                                                    <i class="fas fa-check mr-1"></i>
                                                    Setujui
                                                </button>
                                                <button v-if="peserta.status === 'pending'"
                                                    @click="confirmTolakPeserta(peserta)" :disabled="isProcessing"
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
                                    Menampilkan {{ Math.min(startIndex, filteredPeserta.length) }} sampai {{
                                        Math.min(endIndex,
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

                    <!-- Mobile Cards -->
                    <div class="sm:hidden space-y-4">
                        <div v-for="peserta in paginatedPeserta" :key="peserta.id"
                            class="bg-white rounded-lg shadow p-4">
                            <div class="flex items-start justify-between mb-3">
                                <div class="flex items-center gap-3">
                                    <input type="checkbox" :value="peserta.id" v-model="selectedPeserta"
                                        class="rounded focus:ring-2 focus:ring-[#D71E28]">
                                    <div>
                                        <h3 class="font-semibold text-gray-900">{{ peserta.nama }}</h3>
                                        <p class="text-sm text-gray-600">{{ peserta.email }}</p>
                                        <p class="text-xs text-gray-500">{{ peserta.kontingen }} - Size: {{ peserta.size
                                        }}</p>
                                    </div>
                                </div>
                                <span :class="getStatusClass(peserta.status)"
                                    class="inline-flex px-2 py-1 text-xs font-semibold rounded-full">
                                    {{ getStatusText(peserta.status) }}
                                </span>
                            </div>

                            <div class="text-sm text-gray-600 mb-3">
                                <i class="fas fa-calendar mr-2"></i>
                                {{ formatDate(peserta.created_at) }}
                            </div>

                            <div class="flex gap-2">
                                <button v-if="peserta.status === 'pending'" @click="approvePeserta(peserta.id)"
                                    :disabled="isProcessing"
                                    class="flex-1 bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white px-3 py-2 rounded text-sm transition-colors">
                                    <i class="fas fa-check mr-2"></i>
                                    Setujui
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

                    <div v-if="filteredPeserta.length === 0 && !isLoading"
                        class="bg-white rounded-lg shadow p-8 text-center">
                        <i class="fas fa-running text-4xl text-gray-400 mb-4"></i>
                        <h3 class="text-lg font-medium text-gray-900 mb-2">Tidak ada peserta Fun Run ditemukan</h3>
                        <p class="text-gray-600">Coba ubah filter pencarian atau refresh data.</p>
                    </div>
                </div>
            </main>
        </div>

        <!-- Detail Modal -->
        <div v-if="showDetailModal"
            class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div class="sticky top-0 bg-white border-b p-6">
                    <div class="flex justify-between items-center">
                        <h3 class="text-lg font-semibold">Detail Peserta Fun Run</h3>
                        <button @click="closeDetailModal" class="text-gray-400 hover:text-gray-600">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <div v-if="selectedPesertaDetail" class="p-6">
                    <div class="space-y-4">
                        <div>
                            <label class="text-sm font-medium text-gray-600">Nama Lengkap</label>
                            <p class="text-gray-900 font-medium">{{ selectedPesertaDetail.nama }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-600">Email</label>
                            <p class="text-gray-900">{{ selectedPesertaDetail.email }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-600">Kontingen</label>
                            <p class="text-gray-900">{{ selectedPesertaDetail.kontingen }}</p>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-600">Ukuran Kaos</label>
                            <span
                                class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                                {{ selectedPesertaDetail.size }}
                            </span>
                        </div>
                        <div>
                            <label class="text-sm font-medium text-gray-600">Tanggal Daftar</label>
                            <p class="text-gray-900">{{ formatDate(selectedPesertaDetail.created_at) }}</p>
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

                <div class="sticky bottom-0 bg-white border-t p-6">
                    <div class="flex gap-2">
                        <button v-if="selectedPesertaDetail && selectedPesertaDetail.status === 'pending'"
                            @click="approvePeserta(selectedPesertaDetail.id); closeDetailModal()"
                            :disabled="isProcessing"
                            class="flex-1 bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white px-4 py-2 rounded">
                            <i class="fas fa-check mr-2"></i>
                            Setujui
                        </button>
                        <button v-if="selectedPesertaDetail && selectedPesertaDetail.status === 'pending'"
                            @click="confirmTolakPeserta(selectedPesertaDetail); closeDetailModal()"
                            :disabled="isProcessing"
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

        <!-- Reject Modal -->
        <div v-if="showRejectModal"
            class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-lg max-w-md w-full">
                <div class="p-6">
                    <h3 class="text-lg font-semibold mb-4">Konfirmasi Penolakan</h3>
                    <p class="text-gray-600 mb-4">
                        Apakah Anda yakin ingin menolak peserta Fun Run <strong>{{ pesertaToReject?.nama }}</strong>?
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
                        <button @click="cancelReject"
                            class="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded">
                            Batal
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Success Toast -->
        <div v-if="showToast"
            class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-opacity"
            :class="{ 'opacity-0': !showToast }">
            <div class="flex items-center gap-2">
                <i class="fas fa-check-circle"></i>
                <span>{{ toastMessage }}</span>
            </div>
        </div>

        <!-- Error Toast -->
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
    name: "FunRunManagement",
    components: { Sidebar },
    data() {
        return {
            isSidebarOpen: false,
            searchTerm: "",
            statusFilter: "all",
            sizeFilter: "all",
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
        await this.fetchFunRunData();
    },
    computed: {
        filteredPeserta() {
            let filtered = this.pesertaList;

            // Filter berdasarkan search term
            if (this.searchTerm) {
                const term = this.searchTerm.toLowerCase();
                filtered = filtered.filter(peserta =>
                    (peserta.nama && peserta.nama.toLowerCase().includes(term)) ||
                    (peserta.email && peserta.email.toLowerCase().includes(term)) ||
                    (peserta.kontingen && peserta.kontingen.toLowerCase().includes(term))
                );
            }

            // Filter berdasarkan status
            if (this.statusFilter !== "all") {
                filtered = filtered.filter(peserta => peserta.status === this.statusFilter);
            }

            // Filter berdasarkan ukuran
            if (this.sizeFilter !== "all") {
                filtered = filtered.filter(peserta => peserta.size === this.sizeFilter);
            }

            return filtered;
        },
        paginatedPeserta() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredPeserta.slice(start, end);
        },
        pesertaTerdaftar() {
            return this.pesertaList.filter(p => p.status === "approved").length;
        },
        pesertaPending() {
            return this.pesertaList.filter(p => p.status === "pending").length;
        },
        pesertaDitolak() {
            return this.pesertaList.filter(p => p.status === "rejected").length;
        },
        totalPages() {
            return Math.ceil(this.filteredPeserta.length / this.itemsPerPage);
        },
        startIndex() {
            return (this.currentPage - 1) * this.itemsPerPage + 1;
        },
        endIndex() {
            return Math.min(this.currentPage * this.itemsPerPage, this.filteredPeserta.length);
        }
    },
    methods: {
        async fetchFunRunData() {
            this.isLoading = true;
            this.error = null;

            try {
                console.log('Fetching Fun Run participants...');

                // Menggunakan getAllPesertaFunrun sesuai dengan API service
                const response = await API.getAllPesertaFunrun();

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
                        nama: peserta.nama,
                        email: peserta.email,
                        kontingen: peserta.kontingen,
                        size: peserta.size,
                        status: peserta.status || 'pending',
                        created_at: peserta.created_at,
                        updated_at: peserta.updated_at
                    }));

                    this.totalPeserta = this.pesertaList.length;
                    console.log('Fun Run participants loaded:', this.pesertaList.length);
                } else {
                    this.pesertaList = [];
                    this.totalPeserta = 0;
                }
            } catch (error) {
                console.error('Error fetching Fun Run data:', error);
                this.error = 'Gagal memuat data Fun Run';
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

        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },

        async approvePeserta(pesertaId) {
            this.isProcessing = true;

            try {
                console.log('Approving Fun Run participant:', pesertaId);

                // Menggunakan updatePesertaFunrunStatus sesuai dengan API service
                const response = await API.updatePesertaFunrunStatus(pesertaId, 'approved');

                if (response.data) {
                    const peserta = this.pesertaList.find((p) => p.id === pesertaId);
                    if (peserta) {
                        peserta.status = 'approved';
                        this.showToastNotification(`${peserta.nama} berhasil disetujui`);
                    }
                }
            } catch (error) {
                console.error('Error approving peserta:', error);

                this.showErrorToast = true;
                this.errorMessage = `Gagal menyetujui peserta: ${error.message || 'Terjadi kesalahan'}`;
                setTimeout(() => {
                    this.showErrorToast = false;
                }, 5000);
            } finally {
                this.isProcessing = false;
            }
        },

        confirmTolakPeserta(peserta) {
            this.pesertaToReject = peserta;
            this.rejectReason = '';
            this.showRejectModal = true;
        },

        async executeReject() {
            if (!this.pesertaToReject) return;

            this.isProcessing = true;

            try {
                console.log('Rejecting Fun Run participant:', this.pesertaToReject.id);

                // Menggunakan updatePesertaFunrunStatus sesuai dengan API service
                const response = await API.updatePesertaFunrunStatus(
                    this.pesertaToReject.id,
                    'rejected'
                );

                if (response.data) {
                    const peserta = this.pesertaList.find((p) => p.id === this.pesertaToReject.id);
                    if (peserta) {
                        peserta.status = 'rejected';
                        this.showToastNotification(`${peserta.nama} berhasil ditolak`);
                    }
                }

                this.cancelReject();
            } catch (error) {
                console.error('Error rejecting peserta:', error);
                this.showErrorToast = true;
                this.errorMessage = `Gagal menolak peserta: ${error.message || 'Terjadi kesalahan'}`;
                setTimeout(() => {
                    this.showErrorToast = false;
                }, 5000);
            } finally {
                this.isProcessing = false;
            }
        },

        cancelReject() {
            this.showRejectModal = false;
            this.pesertaToReject = null;
            this.rejectReason = '';
        },

        async approveBulk() {
            if (this.selectedPeserta.length === 0) return;

            this.isProcessing = true;

            try {
                console.log('Bulk approving Fun Run participants:', this.selectedPeserta);

                const promises = this.selectedPeserta.map(id =>
                    API.updatePesertaFunrunStatus(id, 'approved')
                );

                await Promise.all(promises);

                // Update status untuk semua peserta yang dipilih
                this.selectedPeserta.forEach(id => {
                    const peserta = this.pesertaList.find(p => p.id === id);
                    if (peserta) {
                        peserta.status = 'approved';
                    }
                });

                this.showToastNotification(`${this.selectedPeserta.length} peserta berhasil disetujui`);
                this.selectedPeserta = [];
                this.selectAll = false;
            } catch (error) {
                console.error('Error bulk approving:', error);
                this.showErrorToast = true;
                this.errorMessage = `Gagal menyetujui peserta: ${error.message || 'Terjadi kesalahan'}`;
                setTimeout(() => {
                    this.showErrorToast = false;
                }, 5000);
            } finally {
                this.isProcessing = false;
            }
        },

        toggleSelectAll() {
            if (this.selectAll) {
                this.selectedPeserta = this.paginatedPeserta.map(p => p.id);
            } else {
                this.selectedPeserta = [];
            }
        },

        lihatDetail(peserta) {
            this.selectedPesertaDetail = peserta;
            this.showDetailModal = true;
        },

        closeDetailModal() {
            this.showDetailModal = false;
            this.selectedPesertaDetail = null;
        },

        async refreshData() {
            await this.fetchFunRunData();
            this.showToastNotification('Data berhasil diperbarui');
        },

        async exportData() {
            this.isProcessing = true;

            try {
                console.log('Exporting Fun Run data...');

                // Prepare data for export
                const exportData = this.filteredPeserta.map(peserta => ({
                    'Nama': peserta.nama,
                    'Email': peserta.email,
                    'Kontingen': peserta.kontingen,
                    'Ukuran Kaos': peserta.size,
                    'Status': this.getStatusText(peserta.status),
                    'Tanggal Daftar': this.formatDate(peserta.created_at)
                }));

                // Convert to CSV
                const headers = Object.keys(exportData[0] || {});
                const csvContent = [
                    headers.join(','),
                    ...exportData.map(row =>
                        headers.map(header => `"${row[header] || ''}"`).join(',')
                    )
                ].join('\n');

                // Download file
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement('a');
                const url = URL.createObjectURL(blob);
                link.setAttribute('href', url);
                link.setAttribute('download', `fun-run-peserta-${new Date().toISOString().split('T')[0]}.csv`);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                this.showToastNotification('Data berhasil diekspor');
            } catch (error) {
                console.error('Error exporting data:', error);
                this.showErrorToast = true;
                this.errorMessage = 'Gagal mengekspor data';
                setTimeout(() => {
                    this.showErrorToast = false;
                }, 5000);
            } finally {
                this.isProcessing = false;
            }
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
        },

        getStatusClass(status) {
            const statusClasses = {
                pending: 'bg-yellow-100 text-yellow-800',
                approved: 'bg-green-100 text-green-800',
                rejected: 'bg-red-100 text-red-800'
            };
            return statusClasses[status] || 'bg-gray-100 text-gray-800';
        },

        getStatusText(status) {
            const statusTexts = {
                pending: 'Menunggu',
                approved: 'Terdaftar',
                rejected: 'Ditolak'
            };
            return statusTexts[status] || 'Tidak Diketahui';
        },

        formatDate(dateString) {
            if (!dateString) return '-';

            try {
                const date = new Date(dateString);
                return date.toLocaleDateString('id-ID', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
            } catch (error) {
                console.error('Error formatting date:', error);
                return dateString;
            }
        },

        showToastNotification(message) {
            this.toastMessage = message;
            this.showToast = true;
            setTimeout(() => {
                this.showToast = false;
            }, 3000);
        }
    },

    watch: {
        searchTerm() {
            this.currentPage = 1;
        },
        statusFilter() {
            this.currentPage = 1;
        },
        sizeFilter() {
            this.currentPage = 1;
        },
        selectedPeserta(newVal) {
            this.selectAll = newVal.length === this.paginatedPeserta.length && this.paginatedPeserta.length > 0;
        }
    }
};
</script>