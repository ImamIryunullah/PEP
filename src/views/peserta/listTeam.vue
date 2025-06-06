<template>
    <div class="min-h-screen flex bg-gray-100 relative">
        
        <SidebarUser :isOpen="isSidebarOpen" @logout="handleLogout" />
        
        <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
            class="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"></div>
      
        <div :class="[
            'flex-1 flex flex-col transition-margin duration-300 ease-in-out min-h-screen',
            isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
        ]">
            <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
                <button @click="toggleSidebar" class="text-gray-700 text-2xl focus:outline-none">
                    <i class="fas fa-bars"></i>
                </button>
                <h1 class="text-lg font-semibold text-[#D71E28]">Daftar Peserta</h1>
            </header>
            
            <main class="px-6 py-8">
                <section class="min-h-screen p-6 bg-gray-100">
                    <div class="max-w-7xl mx-auto">    
                        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h2 class="text-2xl font-bold text-gray-800">Daftar Peserta Terdaftar</h2>
                                    <p class="text-gray-600 mt-1">Kelola dan pantau peserta yang telah mendaftar</p>
                                </div>
                                
                                
                                <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                    <div class="relative">
                                        <input 
                                            type="text" 
                                            v-model="searchQuery"
                                            placeholder="Cari nama atau email..."
                                            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent w-full sm:w-64"
                                        >
                                        <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                                    </div>                                   
                                    <select 
                                        v-model="filterJenisPeserta"
                                        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                    >
                                        <option value="">Semua Jenis</option>
                                        <option value="Pekerja">Pekerja</option>
                                        <option value="Mitra">Mitra Kerja</option>
                                    </select>
     
                                    <select 
                                        v-model="filterCabangOlahraga"
                                        class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                    >
                                        <option value="">Semua Cabang</option>
                                        <option value="Sepak Bola">Sepak Bola</option>
                                        <option value="Badminton">Badminton</option>
                                        <option value="Basket">Basket</option>
                                        <option value="Voli">Voli</option>
                                        <option value="Tenis Meja">Tenis Meja</option>
                                        <option value="Catur">Catur</option>
                                        <option value="Atletik">Atletik</option>
                                    </select>
                                </div>
                            </div>
            
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                                <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                    <div class="flex items-center">
                                        <i class="fas fa-users text-blue-600 text-xl mr-3"></i>
                                        <div>
                                            <p class="text-sm text-blue-600 font-medium">Total Peserta</p>
                                            <p class="text-2xl font-bold text-blue-800">{{ totalPeserta }}</p>
                                        </div>
                                    </div>
                                </div>                            
                                <div class="bg-green-50 p-4 rounded-lg border border-green-200">
                                    <div class="flex items-center">
                                        <i class="fas fa-briefcase text-green-600 text-xl mr-3"></i>
                                        <div>
                                            <p class="text-sm text-green-600 font-medium">Pekerja</p>
                                            <p class="text-2xl font-bold text-green-800">{{ totalPekerja }}</p>
                                        </div>
                                    </div>
                                </div>
          
                                <div class="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                    <div class="flex items-center">
                                        <i class="fas fa-handshake text-purple-600 text-xl mr-3"></i>
                                        <div>
                                            <p class="text-sm text-purple-600 font-medium">Mitra Kerja</p>
                                            <p class="text-2xl font-bold text-purple-800">{{ totalMitra }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
               
                        <div v-if="loading" class="bg-white rounded-lg shadow-md p-12">
                            <div class="text-center">
                                <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#D71E28]"></div>
                                <p class="mt-4 text-gray-600">Memuat data peserta...</p>
                            </div>
                        </div>
   
                        <div v-else-if="participants.length === 0 && !loading" class="bg-white rounded-lg shadow-md p-12">
                            <div class="text-center">
                                <div class="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                                    <i class="fas fa-users text-4xl text-gray-400"></i>
                                </div>
                                <h3 class="text-xl font-semibold text-gray-800 mb-2">Belum Ada Peserta Terdaftar</h3>
                                <p class="text-gray-600 mb-6">Belum ada peserta yang mendaftarkan diri untuk kegiatan ini.</p>
                                <router-link 
                                    to="/peserta/formulir-pendaftaran" 
                                    class="inline-flex items-center bg-[#D71E28] hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                                >
                                    <i class="fas fa-plus mr-2"></i>
                                    Daftar Peserta Baru
                                </router-link>
                            </div>
                        </div>
                  
                        <div v-else class="bg-white rounded-lg shadow-md overflow-hidden">
                            
                            <div class="hidden lg:block">
                                <div class="overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    No
                                                </th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Peserta
                                                </th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Jenis
                                                </th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Cabang Olahraga
                                                </th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Wilayah Kerja
                                                </th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Aksi
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr v-for="(participant, index) in filteredParticipants" :key="participant.id" class="hover:bg-gray-50">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {{ index + 1 }}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <div class="flex-shrink-0 h-10 w-10">
                                                            <div class="h-10 w-10 rounded-full bg-[#D71E28] flex items-center justify-center">
                                                                <span class="text-white font-medium text-sm">
                                                                    {{ getInitials(participant.nama_lengkap) }}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">
                                                                {{ participant.nama_lengkap }}
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                                {{ participant.email }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span :class="[
                                                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                                                        participant.jenis_peserta === 'Pekerja' 
                                                            ? 'bg-green-100 text-green-800' 
                                                            : 'bg-purple-100 text-purple-800'
                                                    ]">
                                                        {{ participant.jenis_peserta }}
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {{ participant.cabang_olahraga }}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {{ participant.wilayah_kerja }}
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap">
                                                    <span :class="[
                                                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                                                        getStatusClass(participant.status)
                                                    ]">
                                                        {{ getStatusText(participant.status) }}
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <button 
                                                        @click="viewDetails(participant)"
                                                        class="text-[#D71E28] hover:text-red-700 mr-3"
                                                        title="Lihat Detail"
                                                    >
                                                        <i class="fas fa-eye"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="lg:hidden">
                                <div class="p-4 space-y-4">
                                    <div v-for="(participant, index) in filteredParticipants" :key="participant.id" 
                                         class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                        <div class="flex items-start justify-between mb-3">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-12 w-12 bg-[#D71E28] rounded-full flex items-center justify-center mr-3">
                                                    <span class="text-white font-medium">
                                                        {{ getInitials(participant.nama_lengkap) }}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 class="font-medium text-gray-900">{{ participant.nama_lengkap }}</h3>
                                                    <p class="text-sm text-gray-500">{{ participant.email }}</p>
                                                </div>
                                            </div>
                                            <span class="text-sm text-gray-500">#{{ index + 1 }}</span>
                                        </div>
                                        
                                        <div class="grid grid-cols-2 gap-3 text-sm mb-3">
                                            <div>
                                                <span class="text-gray-500">Jenis:</span>
                                                <span :class="[
                                                    'ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                                                    participant.jenis_peserta === 'Pekerja' 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-purple-100 text-purple-800'
                                                ]">
                                                    {{ participant.jenis_peserta }}
                                                </span>
                                            </div>
                                            <div>
                                                <span class="text-gray-500">Status:</span>
                                                <span :class="[
                                                    'ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                                                    getStatusClass(participant.status)
                                                ]">
                                                    {{ getStatusText(participant.status) }}
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div class="text-sm text-gray-700 mb-3">
                                            <p><span class="font-medium">Cabang:</span> {{ participant.cabang_olahraga }}</p>
                                            <p><span class="font-medium">Wilayah:</span> {{ participant.wilayah_kerja }}</p>
                                        </div>
                                        
                                        <div class="flex justify-end">
                                            <button 
                                                @click="viewDetails(participant)"
                                                class="text-[#D71E28] hover:text-red-700 text-sm flex items-center"
                                            >
                                                <i class="fas fa-eye mr-1"></i>
                                                Lihat Detail
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div v-if="filteredParticipants.length > 0" class="bg-white px-4 py-3 mt-6 rounded-lg shadow-md flex items-center justify-between border-t border-gray-200">
                            <div class="flex-1 flex justify-between sm:hidden">
                                <button 
                                    @click="previousPage"
                                    :disabled="currentPage === 1"
                                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Sebelumnya
                                </button>
                                <button 
                                    @click="nextPage"
                                    :disabled="currentPage === totalPages"
                                    class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Selanjutnya
                                </button>
                            </div>
                            <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p class="text-sm text-gray-700">
                                        Menampilkan 
                                        <span class="font-medium">{{ startIndex }}</span>
                                        sampai
                                        <span class="font-medium">{{ endIndex }}</span>
                                        dari
                                        <span class="font-medium">{{ filteredParticipants.length }}</span>
                                        hasil
                                    </p>
                                </div>
                                <div>
                                    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                        <button 
                                            @click="previousPage"
                                            :disabled="currentPage === 1"
                                            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                        >
                                            <i class="fas fa-chevron-left"></i>
                                        </button>
                                        
                                        <button 
                                            v-for="page in visiblePages" 
                                            :key="page"
                                            @click="goToPage(page)"
                                            :class="[
                                                'relative inline-flex items-center px-4 py-2 border text-sm font-medium',
                                                page === currentPage 
                                                    ? 'z-10 bg-[#D71E28] border-[#D71E28] text-white' 
                                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                            ]"
                                        >
                                            {{ page }}
                                        </button>
                                        
                                        <button 
                                            @click="nextPage"
                                            :disabled="currentPage === totalPages"
                                            class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                        >
                                            <i class="fas fa-chevron-right"></i>
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

        
        <div v-if="showDetailModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
                <div class="mt-3">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-medium text-gray-900">Detail Peserta</h3>
                        <button @click="closeDetailModal" class="text-gray-400 hover:text-gray-600">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    <div v-if="selectedParticipant" class="space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                                <p class="mt-1 text-sm text-gray-900">{{ selectedParticipant.nama_lengkap }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Email</label>
                                <p class="mt-1 text-sm text-gray-900">{{ selectedParticipant.email }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">No. Telepon</label>
                                <p class="mt-1 text-sm text-gray-900">{{ selectedParticipant.no_telepon }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Jenis Peserta</label>
                                <p class="mt-1 text-sm text-gray-900">{{ selectedParticipant.jenis_peserta }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Cabang Olahraga</label>
                                <p class="mt-1 text-sm text-gray-900">{{ selectedParticipant.cabang_olahraga }}</p>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Wilayah Kerja</label>
                                <p class="mt-1 text-sm text-gray-900">{{ selectedParticipant.wilayah_kerja }}</p>
                            </div>
                        </div>
                        
                        <div v-if="selectedParticipant.media_sosial">
                            <label class="block text-sm font-medium text-gray-700">Media Sosial</label>
                            <a :href="selectedParticipant.media_sosial" target="_blank" class="mt-1 text-sm text-[#D71E28] hover:underline">
                                {{ selectedParticipant.media_sosial }}
                            </a>
                        </div>
                        
                        <div v-if="selectedParticipant.catatan">
                            <label class="block text-sm font-medium text-gray-700">Catatan</label>
                            <p class="mt-1 text-sm text-gray-900">{{ selectedParticipant.catatan }}</p>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Tanggal Pendaftaran</label>
                            <p class="mt-1 text-sm text-gray-900">{{ formatDate(selectedParticipant.created_at) }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SidebarUser from '@/components/SidebarUser.vue';
import API from "@/service/api";

export default {
    components: { SidebarUser },
    data() {
        return {
            isSidebarOpen: false,
            loading: true,
            participants: [],
            searchQuery: '',
            filterJenisPeserta: '',
            filterCabangOlahraga: '',
            currentPage: 1,
            itemsPerPage: 10,
            showDetailModal: false,
            selectedParticipant: null
        };
    },
    computed: {
        filteredParticipants() {
            let filtered = this.participants;

            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                filtered = filtered.filter(participant => 
                    participant.nama_lengkap.toLowerCase().includes(query) ||
                    participant.email.toLowerCase().includes(query)
                );
            }

            if (this.filterJenisPeserta) {
                filtered = filtered.filter(participant => 
                    participant.jenis_peserta === this.filterJenisPeserta
                );
            }

            if (this.filterCabangOlahraga) {
                filtered = filtered.filter(participant => 
                    participant.cabang_olahraga === this.filterCabangOlahraga
                );
            }

            return filtered;
        },
        
        totalPeserta() {
            return this.participants.length;
        },
        
        totalPekerja() {
            return this.participants.filter(p => p.jenis_peserta === 'Pekerja').length;
        },
        
        totalMitra() {
            return this.participants.filter(p => p.jenis_peserta === 'Mitra').length;
        },
        
        totalPages() {
            return Math.ceil(this.filteredParticipants.length / this.itemsPerPage);
        },
        
        startIndex() {
            return (this.currentPage - 1) * this.itemsPerPage + 1;
        },
        
        endIndex() {
            return Math.min(this.currentPage * this.itemsPerPage, this.filteredParticipants.length);
        },
        
        visiblePages() {
            const pages = [];
            const total = this.totalPages;
            const current = this.currentPage;
            
            if (total <= 7) {
                for (let i = 1; i <= total; i++) {
                    pages.push(i);
                }
            } else {
                if (current <= 4) {
                    for (let i = 1; i <= 5; i++) {
                        pages.push(i);
                    }
                    pages.push('...');
                    pages.push(total);
                } else if (current >= total - 3) {
                    pages.push(1);
                    pages.push('...');
                    for (let i = total - 4; i <= total; i++) {
                        pages.push(i);
                    }
                } else {
                    pages.push(1);
                    pages.push('...');
                    for (let i = current - 1; i <= current + 1; i++) {
                        pages.push(i);
                    }
                    pages.push('...');
                    pages.push(total);
                }
            }
            
            return pages;
        }
    },
    async mounted() {
        await this.fetchParticipants();
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },

        handleLogout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        },

        async fetchParticipants() {
            try {
                this.loading = true;
                const response = await API.getParticipants();
                this.participants = response.data || [];
            } catch (error) {
                console.error('Error fetching participants:', error);
                this.participants = [];
            } finally {
                this.loading = false;
            }
        },

        getInitials(name) {
            return name
                .split(' ')
                .map(word => word.charAt(0))
                .join('')
                .toUpperCase()
                .slice(0, 2);
        },

        getStatusClass(status) {
            switch (status) {
                case 'approved':
                    return 'bg-green-100 text-green-800';
                case 'rejected':
                    return 'bg-red-100 text-red-800';
                case 'pending':
                default:
                    return 'bg-yellow-100 text-yellow-800';
            }
        },

        getStatusText(status) {
            switch (status) {
                case 'approved':
                    return 'Disetujui';
                case 'rejected':
                    return 'Ditolak';
                case 'pending':
                default:
                    return 'Menunggu';
            }
        },

        viewDetails(participant) {
            this.selectedParticipant = participant;
            this.showDetailModal = true;
        },

        closeDetailModal() {
            this.showDetailModal = false;
            this.selectedParticipant = null;
        },

        formatDate(dateString) {
            if (!dateString) return '-';
            const date = new Date(dateString);
            return date.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        },

        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },

        goToPage(page) {
            if (page !== '...' && page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        }
    },
    
    watch: {
        searchQuery() {
            this.currentPage = 1;
        },
        filterJenisPeserta() {
            this.currentPage = 1;
        },
        filterCabangOlahraga() {
            this.currentPage = 1;
        }
    }
};
</script>

<style scoped>

.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #D71E28;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #b71c1c;
}


.fixed.inset-0 {
    backdrop-filter: blur(2px);
}

.relative.top-20 {
    animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hover\\:shadow-md:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.focus\\:ring-2:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.focus\\:ring-\\[\\#D71E28\\]:focus {
    --tw-ring-color: #D71E28;
}


@media (max-width: 1024px) {
    .overflow-x-auto {
        -webkit-overflow-scrolling: touch;
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}

</style>