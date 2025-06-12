<template>
    <div class="min-h-screen bg-[#F7F7F7]">
        <NavbarDashboard />
        <section
            class="min-h-[60vh] sm:min-h-screen relative bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15)_0%,_rgba(0,0,0,1)_45%)] overflow-hidden">
            
            <img src="/listpeserta/atas.webp" loading="lazy"
                class="absolute bottom-[60%] right-0 w-[15%] sm:w-[20%] pointer-events-none hidden sm:block"
                alt="border1" />
            <img src="/listpeserta/bawah.webp" loading="lazy"
                class="absolute bottom-[20%] right-0 w-[15%] sm:w-[20%] pointer-events-none hidden sm:block"
                alt="border2" />
            <img src="/listpeserta/awan.webp" alt="Gambar bawah" loading="lazy"
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[15%] sm:h-[20%]" />
            
            <h1
                class="absolute top-[20%] sm:top-[30%] left-0 text-white opacity-5 text-4xl sm:text-6xl lg:text-8xl font-bold ml-4 sm:ml-8 lg:ml-16 z-0 hidden sm:block">
                FUN RUN
            </h1>  
            <div
                class="absolute inset-0 flex flex-col justify-center items-center sm:items-end sm:justify-center text-center sm:text-right px-4 sm:px-8 lg:px-16">
                <h1 class="text-white text-3xl sm:text-5xl lg:text-8xl font-bold leading-tight">
                    LIST FUN RUN
                </h1>
                <p class="text-white/80 text-sm sm:text-base mt-2 sm:mt-4 max-w-md sm:hidden">
                    Daftar peserta Fun Run
                </p>
            </div>
            <img src="/bunga/hiasan.webp" alt="hiasan"
                class="absolute bottom-[10%] sm:bottom-[20%] left-1/2 transform -translate-x-1/2 w-[100px] sm:w-[150px] py-6 sm:py-12 z-10" />
        </section>

        <section class="min-h-screen relative bg-[#F7F7F7] px-4 sm:px-6 lg:px-8 py-6 font-sans">
            
            <div class="absolute inset-0 z-0 pointer-events-none">
                <img src="/registrasi/hijau.webp" alt=""
                    class="absolute top-0 left-0 w-full opacity-5 hidden lg:block" />
                <img src="/registrasi/biru.webp" alt=""
                    class="absolute bottom-0 right-0 w-full opacity-5 hidden lg:block" />
                <h1
                    class="absolute top-10 sm:top-20 left-4 sm:left-20 text-gray-600 opacity-5 text-4xl sm:text-7xl lg:text-9xl font-black hidden sm:block">
                    FUN</h1>
                <h1
                    class="absolute top-20 sm:top-52 left-4 sm:left-20 text-gray-600 opacity-5 text-4xl sm:text-7xl lg:text-9xl font-black hidden sm:block">
                    RUN</h1>
            </div>

            <!-- Loading State -->
            <div v-if="isLoading" class="relative z-10 flex justify-center items-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D71E28]"></div>
                <span class="ml-3 text-gray-600">Memuat data peserta Fun Run...</span>
            </div>

            <!-- Error State -->
            <div v-else-if="error" class="relative z-10 text-center py-12">
                <div class="text-red-400 text-6xl mb-4">⚠️</div>
                <h3 class="text-lg font-semibold text-red-600 mb-2">Gagal Memuat Data</h3>
                <p class="text-gray-500 mb-4">{{ error }}</p>
                <button @click="fetchFunRunData" 
                    class="bg-[#D71E28] hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <i class="fas fa-sync-alt mr-2"></i>
                    Coba Lagi
                </button>
            </div>

            <div v-else class="relative z-10 space-y-6 sm:space-y-8 animate-fade-in animate-stagger">
                
                <!-- Search and Filter -->
                <div class="bg-white rounded-xl shadow-lg p-4 sm:p-6">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <div class="relative flex-1">
                            <input v-model="searchTerm" type="text"
                                placeholder="Cari nama, atau kontingen..."
                                class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent w-full">
                            <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                        </div>
                        <select v-model="statusFilter"
                            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                            <option value="all">Semua Status</option>
                            <option value="approved">Disetujui</option>
                            <option value="pending">Menunggu</option>
                            <option value="rejected">Ditolak</option>
                        </select>
                        <select v-model="kontingenFilter"
                            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                            <option value="all">Semua Kontingen</option>
                            <option v-for="kontingen in uniqueKontingen" :key="kontingen" :value="kontingen">
                                {{ kontingen }}
                            </option>
                        </select>
                    </div>
                </div>

                <!-- Mobile Card View -->
                <div class="block lg:hidden space-y-4">
                    <div v-for="(peserta, i) in paginatedData" :key="peserta.id"
                        class="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div class="bg-[#D71E28] text-white px-4 py-3">
                            <h3 class="font-bold text-lg">{{ peserta.nama }}</h3>
                        </div>
                        <div class="p-4 space-y-3">
                            <div class="flex justify-between items-start">
                                <span class="text-xs bg-gray-100 px-2 py-1 rounded">
                                    #{{ getDisplayIndex(i) }}
                                </span>
                                <span :class="getStatusClass(peserta.status)">
                                    {{ getStatusText(peserta.status) }}
                                </span>
                            </div>
                            <div class="space-y-2 text-sm">
                                <div>
                                    <span class="text-gray-500">Kontingen:</span>
                                    <span class="ml-1 font-medium">{{ peserta.kontingen }}</span>
                                </div>
                                <div>
                                    <span class="text-gray-500">Size:</span>
                                    <span class="ml-1 font-medium text-[#D71E28]">{{ peserta.size }}</span>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Desktop Table View -->
                <div class="hidden lg:block overflow-x-auto">
                    <table
                        class="min-w-full bg-white rounded-xl shadow-xl overflow-hidden text-sm transform transition duration-500 hover:scale-[1.01]">
                        <thead class="bg-[#D71E28] text-white uppercase text-xs">
                            <tr>
                                <th class="px-6 py-4 text-left font-bold">No</th>
                                <th class="px-6 py-4 text-left font-bold">Nama</th>
                                <th class="px-6 py-4 text-left font-bold">Kontingen</th>
                                <th class="px-6 py-4 text-left font-bold">Size</th>
                               
                                <th class="px-6 py-4 text-left font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-800 divide-y divide-gray-200">
                            <tr v-for="(peserta, i) in paginatedData" :key="peserta.id"
                                class="hover:bg-gray-100 transition duration-200 animate-fade-in">
                                <td class="px-6 py-4 whitespace-nowrap">{{ getDisplayIndex(i) }}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="font-semibold">{{ peserta.nama }}</span>
                                </td>
                    
                                <td class="px-6 py-4 whitespace-nowrap">{{ peserta.kontingen }}</td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span class="font-medium text-[#D71E28]">{{ peserta.size }}</span>
                                </td>
                                
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <span :class="getStatusClass(peserta.status)">
                                        {{ getStatusText(peserta.status) }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div v-if="totalPages > 1" class="bg-white rounded-lg shadow-md p-4">
                    <div class="flex items-center justify-between">
                        <div class="text-sm text-gray-700">
                            Menampilkan {{ startIndex }} sampai {{ endIndex }} dari {{ filteredData.length }} peserta
                        </div>
                        <div class="flex gap-2">
                            <button @click="previousPage" :disabled="currentPage === 1"
                                class="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50 transition-colors">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <span class="px-3 py-1 text-sm">{{ currentPage }} / {{ totalPages }}</span>
                            <button @click="nextPage" :disabled="currentPage === totalPages"
                                class="px-3 py-1 border border-gray-300 rounded disabled:opacity-50 hover:bg-gray-50 transition-colors">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <div v-if="filteredData.length === 0 && !isLoading" class="text-center py-12">
                    <div class="text-gray-400 text-6xl mb-4">🏃‍♀️</div>
                    <h3 class="text-lg font-semibold text-gray-600 mb-2">
                        {{ funRunData.length === 0 ? 'Belum Ada Peserta' : 'Tidak Ada Hasil' }}
                    </h3>
                    <p class="text-gray-500">
                        {{ funRunData.length === 0 ? 'Peserta Fun Run belum tersedia.' : 'Coba ubah filter pencarian.' }}
                    </p>
                    <button v-if="searchTerm || statusFilter !== 'all' || kontingenFilter !== 'all'" 
                        @click="clearFilters"
                        class="mt-4 bg-[#D71E28] hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                        <i class="fas fa-times mr-2"></i>
                        Hapus Filter
                    </button>
                </div>

                <!-- Summary Statistics -->
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                    <div class="bg-white rounded-lg shadow-md p-4 text-center">
                        <div class="text-2xl font-bold text-[#D71E28]">{{ funRunData.length }}</div>
                        <div class="text-sm text-gray-600">Total Peserta</div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-4 text-center">
                        <div class="text-2xl font-bold text-green-600">{{ getStatusCount('approved') }}</div>
                        <div class="text-sm text-gray-600">Disetujui</div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-4 text-center">
                        <div class="text-2xl font-bold text-yellow-600">{{ getStatusCount('pending') }}</div>
                        <div class="text-sm text-gray-600">Menunggu</div>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-4 text-center">
                        <div class="text-2xl font-bold text-red-600">{{ getStatusCount('rejected') }}</div>
                        <div class="text-sm text-gray-600">Ditolak</div>
                    </div>
                </div>

                <!-- Refresh Button -->
                <div class="text-center">
                    <button @click="fetchFunRunData" :disabled="isLoading"
                        class="bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors">
                        <i class="fas fa-sync-alt mr-2" :class="{ 'animate-spin': isLoading }"></i>
                        Refresh Data
                    </button>
                </div>
            </div>
        </section>

        <FooterDashboard />
    </div>
</template>

<script>
import FooterDashboard from '@/components/FooterDashboard.vue';
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import API from '@/service/api';

export default {
    components: {
        NavbarDashboard,
        FooterDashboard
    },
    data() {
        return {
            funRunData: [],
            isLoading: false,
            error: null,
            searchTerm: '',
            statusFilter: 'all',
            kontingenFilter: 'all',
            currentPage: 1,
            itemsPerPage: 10
        };
    },
    async mounted() {
        await this.fetchFunRunData();
    },
    computed: {
        filteredData() {
            let filtered = this.funRunData;

            // Filter berdasarkan search term
            if (this.searchTerm) {
                const term = this.searchTerm.toLowerCase();
                filtered = filtered.filter(peserta =>
                    (peserta.nama && peserta.nama.toLowerCase().includes(term)) ||
                    (peserta.kontingen && peserta.kontingen.toLowerCase().includes(term))
                );
            }

            // Filter berdasarkan status
            if (this.statusFilter !== 'all') {
                filtered = filtered.filter(peserta => peserta.status === this.statusFilter);
            }

            // Filter berdasarkan kontingen
            if (this.kontingenFilter !== 'all') {
                filtered = filtered.filter(peserta => peserta.kontingen === this.kontingenFilter);
            }

            return filtered;
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredData.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredData.length / this.itemsPerPage);
        },
        startIndex() {
            return (this.currentPage - 1) * this.itemsPerPage + 1;
        },
        endIndex() {
            return Math.min(this.currentPage * this.itemsPerPage, this.filteredData.length);
        },
        uniqueKontingen() {
            const kontingen = [...new Set(this.funRunData.map(p => p.kontingen).filter(Boolean))];
            return kontingen.sort();
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

                    this.funRunData = participants.map(peserta => ({
                        id: peserta.id,
                        nama: peserta.nama || 'Tidak Diketahui',
                      
                        kontingen: peserta.kontingen || 'Tidak Diketahui',
                        size: peserta.size || 'Tidak Diketahui',
                        status: peserta.status || 'pending',
                        created_at: peserta.created_at,
                        updated_at: peserta.updated_at
                    }));

                    console.log('Fun Run participants loaded:', this.funRunData.length);
                } else {
                    this.funRunData = [];
                }
            } catch (error) {
                console.error('Error fetching Fun Run data:', error);
                this.error = 'Gagal memuat data Fun Run. Silakan coba lagi.';
                this.funRunData = [];
            } finally {
                this.isLoading = false;
            }
        },
        getStatusText(status) {
            const statusMap = {
                'pending': 'Menunggu',
                'approved': 'Disetujui',
                'rejected': 'Ditolak'
            };
            return statusMap[status] || 'Tidak Diketahui';
        },
        getStatusClass(status) {
            const statusClasses = {
                'pending': 'text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full text-xs',
                'approved': 'text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full text-xs',
                'rejected': 'text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-full text-xs'
            };
            return statusClasses[status] || 'text-gray-600 bg-gray-50 px-2 py-1 rounded-full text-xs';
        },
        getStatusCount(status) {
            return this.funRunData.filter(peserta => peserta.status === status).length;
        },
       
        getDisplayIndex(index) {
            return (this.currentPage - 1) * this.itemsPerPage + index + 1;
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
        clearFilters() {
            this.searchTerm = '';
            this.statusFilter = 'all';
            this.kontingenFilter = 'all';
            this.currentPage = 1;
        }
    },
    watch: {
        searchTerm() {
            this.currentPage = 1;
        },
        statusFilter() {
            this.currentPage = 1;
        },
        kontingenFilter() {
            this.currentPage = 1;
        }
    }
}
</script>

<style scoped>
/* Animations */
.animate-fade-in {
    opacity: 0;
    transform: translateY(0.75rem);
    transition: all 0.5s ease-out;
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeInUp 0.8s ease-out both;
}

.animate-stagger>* {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
}

.animate-stagger>*:nth-child(1) {
    animation-delay: 0.1s;
}

.animate-stagger>*:nth-child(2) {
    animation-delay: 0.2s;
}

.animate-stagger>*:nth-child(3) {
    animation-delay: 0.3s;
}

.animate-stagger>*:nth-child(4) {
    animation-delay: 0.4s;
}

/* Float animation for sport image */
@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
}

.float {
    animation: float 6s ease-in-out infinite;
}

.delay-2 {
    animation-delay: 2s;
}

/* Responsive utilities */
@media (max-width: 640px) {
    .grid-cols-2>div {
        min-height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}

/* Smooth transitions */
* {
    transition-property: transform, opacity, background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>