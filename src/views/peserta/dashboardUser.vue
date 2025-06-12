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
                <h1 class="text-lg font-semibold text-[#D71E28]">Dashboard</h1>
            </header>

            <main class="px-6 py-8">
                <section class="min-h-screen p-6 bg-gray-100">

                    <div v-if="loading" class="flex justify-center items-center min-h-64">
                        <div class="text-center">
                            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D71E28] mx-auto mb-4">
                            </div>
                            <p class="text-gray-600">Memuat data...</p>
                        </div>
                    </div>

                    <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <div class="flex items-center">
                            <i class="fas fa-exclamation-triangle text-red-500 mr-3"></i>
                            <div>
                                <h3 class="text-red-800 font-medium">Terjadi Kesalahan</h3>
                                <p class="text-red-600 text-sm">{{ error }}</p>
                            </div>
                        </div>
                        <button @click="fetchUserData"
                            class="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                            Coba Lagi
                        </button>
                    </div>

                    <div v-else>
                        <div class="mb-8">
                            <h1 class="text-3xl font-bold text-gray-800 mb-2">Selamat Datang, {{ userData.namaLengkap }}!</h1>
                            <p class="text-gray-600">Dashboard Peserta - Kelola informasi dan aktivitas Anda</p>
                        </div>

                        <!-- User Profile Card -->
                        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                            <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                                        <img v-if="userData.foto" :src="getFullpath(userData.foto)" alt="Foto Profil"
                                        class="w-full h-full object-cover">
                                        <div v-else
                                            class="w-full h-full bg-[#D71E28] flex items-center justify-center text-white text-2xl font-bold">
                                            {{ getInitials(userData.namaLengkap || 'U') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-1">{{ userData.namaLengkap }}</h2>
                                    <p class="text-gray-600 mb-2">{{ userData.email || '-' }}</p>
                                    <div class="flex items-center gap-4">
                                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                            {{ userData.aset || 'Aset' }}
                                        </span>
                                        <span class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                                            {{ userData.provinsi || 'Provinsi' }}
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <button @click="refreshData"
                                        class="px-4 py-2 bg-[#D71E28] text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                                        <i class="fas fa-sync-alt" :class="{ 'animate-spin': refreshing }"></i>
                                        Refresh
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Statistics Cards -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 bg-[#D71E28] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                                        <i class="fas fa-user-check text-[#D71E28] text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-800">Total Pendaftaran</h3>
                                        <p class="text-sm text-gray-600">Jumlah pendaftaran</p>
                                    </div>
                                </div>
                                <p class="text-2xl font-bold text-[#D71E28]">{{ participantData.length }}</p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <i class="fas fa-check-circle text-green-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-800">Terverifikasi</h3>
                                        <p class="text-sm text-gray-600">Status approved</p>
                                    </div>
                                </div>
                                <p class="text-2xl font-bold text-green-600">{{ approvedCount }}</p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                                        <i class="fas fa-clock text-yellow-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-800">Menunggu</h3>
                                        <p class="text-sm text-gray-600">Status pending</p>
                                    </div>
                                </div>
                                <p class="text-2xl font-bold text-yellow-600">{{ pendingCount }}</p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                        <i class="fas fa-running text-purple-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-800">Cabang Olahraga</h3>
                                        <p class="text-sm text-gray-600">Total cabang</p>
                                    </div>
                                </div>
                                <p class="text-2xl font-bold text-purple-600">{{ uniqueSports.length }}</p>
                            </div>
                        </div>

                        <!-- Account Information and Recent Activities -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <i class="fas fa-user-circle text-[#D71E28] mr-2"></i>
                                    Informasi Akun
                                </h3>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Email:</span>
                                        <span class="text-gray-800">{{ userData.email || '-' }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Aset:</span>
                                        <span class="text-gray-800">{{ userData.aset || '-' }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Wilayah:</span>
                                        <span class="text-gray-800">{{ userData.provinsi || '-' }}</span>
                                    </div>
                                    <!-- <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Role:</span>
                                        <span class="text-gray-800">{{ userData.role || '-' }}</span>
                                    </div> -->
                                    <div class="flex justify-between items-center py-2">
                                        <span class="text-gray-600 font-medium">Last Login:</span>
                                        <span class="text-gray-800">{{ formatDate(userData.last_login) }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <i class="fas fa-trophy text-[#D71E28] mr-2"></i>
                                    Cabang Olahraga Terdaftar
                                </h3>
                                <div class="space-y-3">
                                    <div v-for="sport in uniqueSports" :key="sport" 
                                         class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <div class="flex items-center">
                                            <i class="fas fa-medal text-[#D71E28] mr-3"></i>
                                            <span class="font-medium text-gray-800">{{ sport }}</span>
                                        </div>
                                        <span class="px-2 py-1 bg-[#D71E28] text-white text-xs rounded-full">
                                            {{ getSportCount(sport) }}
                                        </span>
                                    </div>
                                    <div v-if="uniqueSports.length === 0" class="text-center py-4 text-gray-500">
                                        Belum ada cabang olahraga terdaftar
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Participant Registrations List -->
                        <div class="bg-white rounded-xl shadow-lg p-6">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <i class="fas fa-list text-[#D71E28] mr-2"></i>
                                Daftar Pendaftaran Anda
                            </h3>
                            <div class="overflow-x-auto">
                                <table class="w-full table-auto">
                                    <thead>
                                        <tr class="bg-gray-50 border-b">
                                            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">No</th>
                                            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Nama</th>
                                            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Cabang Olahraga</th>
                                            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Jenis Peserta</th>
                                            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Wilayah Kerja</th>
                                            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                                            <th class="px-4 py-3 text-left text-sm font-medium text-gray-700">Tanggal Daftar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(participant, index) in participantData" :key="participant.id" 
                                            class="border-b hover:bg-gray-50 transition-colors">
                                            <td class="px-4 py-3 text-sm text-gray-800">{{ index + 1 }}</td>
                                            <td class="px-4 py-3 text-sm text-gray-800 font-medium">{{ participant.nama_lengkap }}</td>
                                            <td class="px-4 py-3 text-sm text-gray-800">{{ participant.cabang_olahraga }}</td>
                                            <td class="px-4 py-3 text-sm text-gray-800">{{ participant.jenis_peserta }}</td>
                                            <td class="px-4 py-3 text-sm text-gray-800">{{ participant.wilayah_kerja }}</td>
                                            <td class="px-4 py-3">
                                                <span :class="getStatusClass(participant.status)">
                                                    {{ getStatusText(participant.status) }}
                                                </span>
                                            </td>
                                            <td class="px-4 py-3 text-sm text-gray-800">{{ formatDate(participant.created_at) }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div v-if="participantData.length === 0" class="text-center py-8 text-gray-500">
                                    Belum ada data pendaftaran
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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
            refreshing: false,
            error: null,
            participantData: [],
            userData: {
                namaLengkap: '',
                email: '',
                aset: '',
                provinsi: '',
                last_login: '',
                role: '',
                foto: null,
                foto_path: ''
            }
        };
    },
    computed: {
        approvedCount() {
            return this.participantData.filter(p => p.status === 'approved').length;
        },
        pendingCount() {
            return this.participantData.filter(p => p.status === 'pending').length;
        },
        rejectedCount() {
            return this.participantData.filter(p => p.status === 'rejected').length;
        },
        uniqueSports() {
            const sports = this.participantData.map(p => p.cabang_olahraga);
            return [...new Set(sports)].filter(sport => sport);
        }
    },
    async mounted() {
        await this.fetchUserData();
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },

        handleLogout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        },

        async fetchUserData() {
            try {
                this.loading = true;
                this.error = null;

                console.log('Fetching user data from API...');

                const response = await API.getParticipants();
                console.log('API Response:', response);

                if (response?.data?.data && Array.isArray(response.data.data)) {
                    this.participantData = response.data.data;
                    
                    // Get user data from the first participant record
                    if (this.participantData.length > 0) {
                        const firstParticipant = this.participantData[0];
                        this.userData = {
                            namaLengkap: firstParticipant.nama_lengkap || 'Nama Pengguna',
                            email: firstParticipant.user?.email || firstParticipant.email || 'email@example.com',
                            aset: firstParticipant.user?.aset || 'Head Office PEP',
                            provinsi: firstParticipant.user?.provinsi || 'Provinsi Tidak Ditemukan',
                            last_login: firstParticipant.user?.last_login || null,
                            role: firstParticipant.user?.role || 'user',
                            foto: firstParticipant.user?.foto || null,
                            foto_path: firstParticipant.user?.foto_path || null
                        };
                    } else {
                        // Handle case where no participant data exists
                        this.userData = {
                            namaLengkap: 'Nama Pengguna',
                            email: 'email@example.com',
                            aset: 'Head Office PEP',
                            provinsi: 'Provinsi Tidak Ditemukan',
                            last_login: null,
                            role: 'user',
                            foto: null,
                            foto_path: null
                        };
                    }
                } else {
                    throw new Error('Invalid response format');
                }

                console.log('User data loaded:', this.userData);
                console.log('Participant data loaded:', this.participantData);

            } catch (error) {
                console.error('Error fetching user data:', error);
                this.handleApiError(error);
            } finally {
                this.loading = false;
            }
        },

        async refreshData() {
            this.refreshing = true;
            await this.fetchUserData();
            this.refreshing = false;
        },

        handleApiError(error) {
            if (error.response) {
                console.error('Error Response:', {
                    status: error.response.status,
                    data: error.response.data,
                    headers: error.response.headers
                });

                switch (error.response.status) {
                    case 500:
                        this.error = 'Server sedang mengalami masalah. Silakan coba lagi nanti.';
                        break;
                    case 404:
                        this.error = 'Data pengguna tidak ditemukan.';
                        break;
                    case 403:
                        this.error = 'Akses ditolak. Silakan login ulang.';
                        setTimeout(() => {
                            this.handleLogout();
                        }, 2000);
                        break;
                    case 401:
                        this.error = 'Sesi Anda telah berakhir. Silakan login ulang.';
                        setTimeout(() => {
                            this.handleLogout();
                        }, 2000);
                        break;
                    default:
                        this.error = `Error: ${error.response.status} - ${error.response.statusText}`;
                }
            } else if (error.request) {
                console.error('Network Error:', error.request);
                this.error = 'Tidak dapat terhubung ke server. Periksa koneksi internet.';
            } else {
                console.error('Error:', error.message);
                this.error = error.message || 'Terjadi kesalahan yang tidak diketahui.';
            }
        },

        getInitials(name) {
            if (!name) return 'U';
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
                    return 'px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium';
                case 'rejected':
                    return 'px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium';
                case 'pending':
                default:
                    return 'px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium';
            }
        },

        getStatusText(status) {
            switch (status) {
                case 'approved':
                    return 'Terverifikasi';
                case 'rejected':
                    return 'Ditolak';
                case 'pending':
                default:
                    return 'Menunggu Verifikasi';
            }
        },

        getSportCount(sport) {
            return this.participantData.filter(p => p.cabang_olahraga === sport).length;
        },

        formatDate(dateString) {
            if (!dateString) return '-';
            const date = new Date(dateString);
            return date.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },

        getFullpath(img) {
            return API.getFullpath(`uploads/${img}`);
        }
    }
};
</script>