<template>
    <div class="min-h-screen flex bg-gray-100 relative font-sans">
        
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
                            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D71E28] mx-auto mb-4"></div>
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
                        <button @click="fetchUserData" class="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                            Coba Lagi
                        </button>
                    </div>

                    <div v-else>
                        <div class="mb-8">
                            <h1 class="text-3xl font-bold text-gray-800 mb-2">Selamat Datang, {{ userData.namaLengkap || 'Pengguna' }}</h1>
                            <p class="text-gray-600">Dashboard Peserta - Kelola informasi dan aktivitas Anda</p>
                        </div>

                        <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                            <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                                        <img v-if="userData.foto" :src="userData.foto" alt="Foto Profil" class="w-full h-full object-cover">
                                        <div v-else class="w-full h-full bg-[#D71E28] flex items-center justify-center text-white text-2xl font-bold">
                                            {{ getInitials(userData.namaLengkap || 'U') }}
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h2 class="text-2xl font-bold text-gray-800 mb-1">{{ userData.namaLengkap || '-' }}</h2>
                                    <p class="text-gray-600 mb-2">{{ userData.email || '-' }}</p>
                                    <div class="flex items-center gap-4">
                                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                            {{ userData.jenisPeserta || 'Peserta' }}
                                        </span>
                                        <span :class="getStatusClass(userData.status || 'pending')">
                                            {{ getStatusText(userData.status || 'pending') }}
                                        </span>
                                    </div>
                                </div>
                                <div class="flex-shrink-0">
                                    <button @click="refreshData" class="px-4 py-2 bg-[#D71E28] text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                                        <i class="fas fa-sync-alt" :class="{ 'animate-spin': refreshing }"></i>
                                        Refresh
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        
                            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 bg-[#D71E28] bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                                        <i class="fas fa-running text-[#D71E28] text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-800">Cabang Olahraga</h3>
                                        <p class="text-sm text-gray-600">Kategori yang diikuti</p>
                                    </div>
                                </div>
                                <p class="text-2xl font-bold text-[#D71E28]">{{ userData.cabangOlahraga || '-' }}</p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <i class="fas fa-check-circle text-green-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-800">Status Verifikasi</h3>
                                        <p class="text-sm text-gray-600">Status akun Anda</p>
                                    </div>
                                </div>
                                <p :class="[
                                    'text-2xl font-bold',
                                    getStatusColor(userData.status || 'pending')
                                ]">
                                    {{ getStatusText(userData.status || 'pending') }}
                                </p>
                            </div>

                            <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                        <i class="fas fa-building text-purple-600 text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-800">Aset Terdaftar</h3>
                                        <p class="text-sm text-gray-600">Lokasi aset</p>
                                    </div>
                                </div>
                                <p class="text-2xl font-bold text-purple-600">{{ userData.aset || 'Head Office PEP' }}</p>
                            </div>

                        </div>
                       
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            
                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <i class="fas fa-user-circle text-[#D71E28] mr-2"></i>
                                    Informasi Pribadi
                                </h3>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Nama Lengkap:</span>
                                        <span class="text-gray-800">{{ userData.namaLengkap || '-' }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Email:</span>
                                        <span class="text-gray-800">{{ userData.email || '-' }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Jenis Peserta:</span>
                                        <span class="text-gray-800">{{ userData.jenisPeserta || userData.jenis_peserta || '-' }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2">
                                        <span class="text-gray-600 font-medium">Tanggal Daftar:</span>
                                        <span class="text-gray-800">{{ formatDate(userData.tanggalDaftar || userData.created_at) }}</span>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white rounded-xl shadow-lg p-6">
                                <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                    <i class="fas fa-chart-line text-[#D71E28] mr-2"></i>
                                    Ringkasan Aktivitas
                                </h3>
                                <div class="space-y-4">
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Total Kegiatan:</span>
                                        <span class="text-gray-800 font-bold">{{ userData.totalKegiatan || 0 }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Kegiatan Aktif:</span>
                                        <span class="text-green-600 font-bold">{{ userData.kegiatanAktif || 0 }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span class="text-gray-600 font-medium">Prestasi:</span>
                                        <span class="text-blue-600 font-bold">{{ userData.prestasi || 0 }}</span>
                                    </div>
                                    <div class="flex justify-between items-center py-2">
                                        <span class="text-gray-600 font-medium">Poin Total:</span>
                                        <span class="text-[#D71E28] font-bold">{{ userData.poinTotal || 0 }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
       
                        <!-- <div class="bg-white rounded-xl shadow-lg p-6">
                            <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                <i class="fas fa-bolt text-[#D71E28] mr-2"></i>
                                Aksi Cepat
                            </h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            
                                <button @click="daftarKegiatan" class="flex items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group">
                                    <div class="text-center">
                                        <i class="fas fa-calendar-plus text-green-600 text-2xl mb-2 group-hover:scale-110 transition-transform"></i>
                                        <p class="text-green-800 font-medium">Daftar Kegiatan</p>
                                    </div>
                                </button>
                                <button @click="lihatPrestasi" class="flex items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group">
                                    <div class="text-center">
                                        <i class="fas fa-trophy text-purple-600 text-2xl mb-2 group-hover:scale-110 transition-transform"></i>
                                        <p class="text-purple-800 font-medium">Lihat Prestasi</p>
                                    </div>
                                </button>
                                <button @click="unduhSertifikat" class="flex items-center justify-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group">
                                    <div class="text-center">
                                        <i class="fas fa-file-download text-orange-600 text-2xl mb-2 group-hover:scale-110 transition-transform"></i>
                                        <p class="text-orange-800 font-medium">Unduh Sertifikat</p>
                                    </div>
                                </button>
                            </div>
                        </div> -->
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
            userData: {
                namaLengkap: '',
                email: '',
                jenisPeserta: '',
                cabangOlahraga: '',
                aset: '',
                status: '',
                tanggalDaftar: '',
                foto: null,
                totalKegiatan: 0,
                kegiatanAktif: 0,
                prestasi: 0,
                poinTotal: 0
            }
        };
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
                
                let response;
                
                try {
                    response = await API.getCurrentUser();
                } catch (apiError) {

                    console.warn('getCurrentUser not available, trying alternative method...');
                    const participantsResponse = await API.getParticipants();
                    
                    if (participantsResponse?.data?.data && participantsResponse.data.data.length > 0) {
                        response = { data: participantsResponse.data.data[0] };
                    } else {
                        throw new Error('No user data available');
                    }
                }
                
                console.log('User data response:', response);

                if (response && response.data) {
     
                    const apiData = response.data;
                    
                    this.userData = {
                        namaLengkap: apiData.nama_lengkap || apiData.namaLengkap || 'Nama Pengguna',
                        email: apiData.email || 'email@example.com',
                        jenisPeserta: apiData.jenis_peserta || apiData.jenisPeserta || 'Peserta',
                        cabangOlahraga: apiData.cabang_olahraga || apiData.cabangOlahraga || 'Belum Ditentukan',
                        aset: apiData.aset || 'Head Office PEP',
                        status: apiData.status || apiData.statusVerifikasi || 'pending',
                        tanggalDaftar: apiData.created_at || apiData.tanggalDaftar || null,
                        foto: apiData.foto || apiData.profile_picture || null,

                        totalKegiatan: apiData.total_kegiatan || apiData.totalKegiatan || 0,
                        kegiatanAktif: apiData.kegiatan_aktif || apiData.kegiatanAktif || 0,
                        prestasi: apiData.prestasi || 0,
                        poinTotal: apiData.poin_total || apiData.poinTotal || 0
                    };
                } else {
                    throw new Error('Invalid response format');
                }
                
                console.log('User data loaded:', this.userData);
                
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
                case 'Terverifikasi':
                    return 'px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium';
                case 'rejected':
                case 'Ditolak':
                    return 'px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium';
                case 'pending':
                case 'Menunggu':
                default:
                    return 'px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium';
            }
        },

        getStatusColor(status) {
            switch (status) {
                case 'approved':
                case 'Terverifikasi':
                    return 'text-green-600';
                case 'rejected':
                case 'Ditolak':
                    return 'text-red-600';
                case 'pending':
                case 'Menunggu':
                default:
                    return 'text-yellow-600';
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

        formatDate(dateString) {
            if (!dateString) return '-';
            const date = new Date(dateString);
            return date.toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },

        daftarKegiatan() {
            this.$router.push('/kegiatan');
        },

        lihatPrestasi() {
            this.$router.push('/prestasi');
        },

        unduhSertifikat() {
            alert('Fitur unduh sertifikat akan segera tersedia!');
        }
    }
};
</script>