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
                    <div class="mb-8">
                        <h1 class="text-3xl font-bold text-gray-800 mb-2">Selamat Datang, {{ userData.namaLengkap }}</h1>
                        <p class="text-gray-600">Dashboard Peserta - Kelola informasi dan aktivitas Anda</p>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6 mb-8">
                        <div class="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div class="flex-shrink-0">
                                <div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                                    <img v-if="userData.foto" :src="userData.foto" alt="Foto Profil" class="w-full h-full object-cover">
                                    <i v-else class="fas fa-user text-gray-400 text-3xl"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h2 class="text-2xl font-bold text-gray-800 mb-1">{{ userData.namaLengkap }}</h2>
                                <p class="text-gray-600 mb-2">{{ userData.email }}</p>
                                <div class="flex items-center gap-4">
                                    <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        {{ userData.jenisPeserta }}
                                    </span>
                                    <span :class="[
                                        'px-3 py-1 rounded-full text-sm font-medium',
                                        userData.statusVerifikasi === 'Terverifikasi' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-yellow-100 text-yellow-800'
                                    ]">
                                        {{ userData.statusVerifikasi }}
                                    </span>
                                </div>
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
                            <p class="text-2xl font-bold text-[#D71E28]">{{ userData.cabangOlahraga }}</p>
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
                                userData.statusVerifikasi === 'Terverifikasi' ? 'text-green-600' : 'text-yellow-600'
                            ]">
                                {{ userData.statusVerifikasi }}
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
                            <p class="text-2xl font-bold text-purple-600">{{ userData.aset }}</p>
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
                                    <span class="text-gray-800">{{ userData.namaLengkap }}</span>
                                </div>
                                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span class="text-gray-600 font-medium">Email:</span>
                                    <span class="text-gray-800">{{ userData.email }}</span>
                                </div>
                                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span class="text-gray-600 font-medium">Jenis Peserta:</span>
                                    <span class="text-gray-800">{{ userData.jenisPeserta }}</span>
                                </div>
                                <div class="flex justify-between items-center py-2">
                                    <span class="text-gray-600 font-medium">Tanggal Daftar:</span>
                                    <span class="text-gray-800">{{ userData.tanggalDaftar }}</span>
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
                                    <span class="text-gray-800 font-bold">{{ userData.totalKegiatan }}</span>
                                </div>
                                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span class="text-gray-600 font-medium">Kegiatan Aktif:</span>
                                    <span class="text-green-600 font-bold">{{ userData.kegiatanAktif }}</span>
                                </div>
                                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span class="text-gray-600 font-medium">Prestasi:</span>
                                    <span class="text-blue-600 font-bold">{{ userData.prestasi }}</span>
                                </div>
                                <div class="flex justify-between items-center py-2">
                                    <span class="text-gray-600 font-medium">Poin Total:</span>
                                    <span class="text-[#D71E28] font-bold">{{ userData.poinTotal }}</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6">
                        <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-bolt text-[#D71E28] mr-2"></i>
                            Aksi Cepat
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        
                            <button class="flex items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group">
                                <div class="text-center">
                                    <i class="fas fa-calendar-plus text-green-600 text-2xl mb-2 group-hover:scale-110 transition-transform"></i>
                                    <p class="text-green-800 font-medium">Daftar Kegiatan</p>
                                </div>
                            </button>
                            <button class="flex items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors group">
                                <div class="text-center">
                                    <i class="fas fa-trophy text-purple-600 text-2xl mb-2 group-hover:scale-110 transition-transform"></i>
                                    <p class="text-purple-800 font-medium">Lihat Prestasi</p>
                                </div>
                            </button>
                            <button class="flex items-center justify-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group">
                                <div class="text-center">
                                    <i class="fas fa-file-download text-orange-600 text-2xl mb-2 group-hover:scale-110 transition-transform"></i>
                                    <p class="text-orange-800 font-medium">Unduh Sertifikat</p>
                                </div>
                            </button>
                        </div>
                    </div>

                </section>
            </main>
        </div>
    </div>
</template>

<script>
import SidebarUser from '@/components/SidebarUser.vue';

export default {
    components: { SidebarUser },
    data() {
        return {
            isSidebarOpen: false,
            userData: {
                namaLengkap: 'Andi Wijaya',
                email: 'andi.wijaya@email.com',
                jenisPeserta: 'Peserta',
                cabangOlahraga: 'Badminton',
                aset: 'Head Office PEP',
                statusVerifikasi: 'Terverifikasi',
                tanggalDaftar: '15 Januari 2024',
                foto: null, 
                totalKegiatan: 12,
                kegiatanAktif: 3,
                prestasi: 5,
                poinTotal: 1250
            }
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        handleLogout() {
            alert('Logout berhasil!');
        },
    },
};
</script>