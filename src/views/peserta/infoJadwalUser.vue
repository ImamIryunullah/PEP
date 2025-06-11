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
                <h1 class="text-lg font-semibold text-[#D71E28]">Rundown Acara</h1>
            </header>
            
            <main class="px-3 sm:px-4 md:px-6 py-4 md:py-8">
                <section class="min-h-screen p-3 sm:p-4 md:p-6 bg-gray-100">
                    <div class="max-w-7xl mx-auto">
                        
                        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
                            <div class="text-center">
                                <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">RUNDOWN ACARA OLAHRAGA</h1>
                                <p class="text-base sm:text-lg text-gray-600">29 - 31 Agustus 2025</p>
                                <div class="flex justify-center mt-4">
                                    <div class="w-16 sm:w-20 md:w-24 h-1 bg-[#D71E28] rounded"></div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 sm:mb-6">
                            <div class="flex flex-col sm:flex-row justify-center gap-2 sm:gap-2">
                                <button 
                                    v-for="day in days" 
                                    :key="day.id"
                                    @click="selectedDay = day.id"
                                    :class="[
                                        'px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base',
                                        selectedDay === day.id 
                                            ? 'bg-[#D71E28] text-white shadow-lg' 
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    ]"
                                >
                                    <i :class="day.icon" class="mr-1 sm:mr-2"></i>
                                    <span class="hidden xs:inline">{{ day.title }}</span>
                                    <span class="xs:hidden">{{ day.shortTitle || day.title }}</span>
                                </button>
                            </div>
                        </div>

                        
                        <div class="bg-white rounded-lg shadow-md overflow-hidden">
                            
                            <div v-if="selectedDay === 1" class="p-3 sm:p-4 md:p-6">
                                <div class="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#D71E28] rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                                        <i class="fas fa-calendar-day text-white text-lg sm:text-xl"></i>
                                    </div>
                                    <div class="text-center sm:text-left">
                                        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">DAY 1 - Opening Ceremony</h2>
                                        <p class="text-sm sm:text-base text-gray-600">29 Agustus 2025</p>
                                    </div>
                                </div>

                                
                                <div class="block sm:hidden space-y-3">
                                    <div v-for="(event, index) in day1Events" :key="index" 
                                         class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                        <div class="flex justify-between items-start mb-2">
                                            <div class="flex items-center">
                                                <i class="fas fa-clock text-[#D71E28] mr-2 text-sm"></i>
                                                <span class="text-sm font-medium text-gray-900">{{ event.time }}</span>
                                            </div>
                                            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {{ event.duration }}
                                            </span>
                                        </div>
                                        <div class="text-sm font-medium text-gray-900 mb-1">{{ event.activity }}</div>
                                        <div class="text-xs text-gray-700">{{ event.remarks }}</div>
                                    </div>
                                </div>

                                
                                <div class="hidden sm:block overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
                                                <th class="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durasi</th>
                                                <th class="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kegiatan</th>
                                                <th class="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr v-for="(event, index) in day1Events" :key="index" class="hover:bg-gray-50">
                                                <td class="px-3 md:px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <i class="fas fa-clock text-[#D71E28] mr-2"></i>
                                                        <span class="text-sm font-medium text-gray-900">{{ event.time }}</span>
                                                    </div>
                                                </td>
                                                <td class="px-3 md:px-6 py-4 whitespace-nowrap">
                                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        {{ event.duration }}
                                                    </span>
                                                </td>
                                                <td class="px-3 md:px-6 py-4">
                                                    <div class="text-sm font-medium text-gray-900">{{ event.activity }}</div>
                                                </td>
                                                <td class="px-3 md:px-6 py-4">
                                                    <div class="text-sm text-gray-700">{{ event.remarks }}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            
                            <div v-if="selectedDay === 2" class="p-3 sm:p-4 md:p-6">
                                <div class="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#D71E28] rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                                        <i class="fas fa-trophy text-white text-lg sm:text-xl"></i>
                                    </div>
                                    <div class="text-center sm:text-left">
                                        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">DAY 2 - Pertandingan Penyisihan</h2>
                                        <p class="text-sm sm:text-base text-gray-600">30 Agustus 2025</p>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                                    
                                    <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 sm:p-6 rounded-lg border border-green-200">
                                        <div class="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                                            <i class="fas fa-running text-green-600 text-xl sm:text-2xl mb-2 sm:mb-0 sm:mr-3 text-center"></i>
                                            <div class="text-center sm:text-left">
                                                <h3 class="text-base sm:text-lg font-semibold text-green-800">5K Fun Run</h3>
                                                <p class="text-xs sm:text-sm text-green-600">05:30 - 06:30</p>
                                            </div>
                                        </div>
                                        <p class="text-sm sm:text-base text-green-700 text-center sm:text-left">Jakabaring Sport Center & Sarapan Pagi</p>
                                    </div>

                                    
                                    <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 sm:p-6 rounded-lg border border-blue-200">
                                        <div class="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                                            <i class="fas fa-medal text-blue-600 text-xl sm:text-2xl mb-2 sm:mb-0 sm:mr-3 text-center"></i>
                                            <div class="text-center sm:text-left">
                                                <h3 class="text-base sm:text-lg font-semibold text-blue-800">Pertandingan Penyisihan</h3>
                                                <p class="text-xs sm:text-sm text-blue-600">07:00 - 18:00</p>
                                            </div>
                                        </div>
                                        <p class="text-sm sm:text-base text-blue-700 text-center sm:text-left">Semua cabang olahraga di berbagai venue</p>
                                    </div>
                                </div>

                                
                                <div class="bg-gray-50 p-4 sm:p-6 rounded-lg">
                                    <h3 class="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left">
                                        <i class="fas fa-map-marker-alt text-[#D71E28] mr-2"></i>
                                        Venue Pertandingan
                                    </h3>
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                        <div v-for="venue in venues" :key="venue.sport" class="bg-white p-3 sm:p-4 rounded-lg shadow-sm border">
                                            <div class="flex flex-col sm:flex-row sm:items-center mb-2">
                                                <i :class="venue.icon" class="text-[#D71E28] mr-0 sm:mr-2 mb-1 sm:mb-0 text-center"></i>
                                                <span class="font-medium text-gray-800 text-sm sm:text-base text-center sm:text-left">{{ venue.sport }}</span>
                                            </div>
                                            <p class="text-xs sm:text-sm text-gray-600 text-center sm:text-left">{{ venue.location }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div v-if="selectedDay === 3" class="p-3 sm:p-4 md:p-6">
                                <div class="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                                    <div class="w-10 h-10 sm:w-12 sm:h-12 bg-[#D71E28] rounded-full flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 mx-auto sm:mx-0">
                                        <i class="fas fa-crown text-white text-lg sm:text-xl"></i>
                                    </div>
                                    <div class="text-center sm:text-left">
                                        <h2 class="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">DAY 3 - Final & Closing Ceremony</h2>
                                        <p class="text-sm sm:text-base text-gray-600">31 Agustus 2025</p>
                                    </div>
                                </div>

                                
                                <div class="block sm:hidden space-y-3">
                                    <div v-for="(event, index) in day3Events" :key="index" 
                                         class="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                        <div class="flex justify-between items-start mb-2">
                                            <div class="flex items-center">
                                                <i class="fas fa-clock text-[#D71E28] mr-2 text-sm"></i>
                                                <span class="text-sm font-medium text-gray-900">{{ event.time }}</span>
                                            </div>
                                            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                {{ event.duration }}
                                            </span>
                                        </div>
                                        <div class="text-sm font-medium text-gray-900 mb-1">{{ event.activity }}</div>
                                        <div class="text-xs text-gray-700">{{ event.remarks }}</div>
                                    </div>
                                </div>

                                
                                <div class="hidden sm:block overflow-x-auto">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th class="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waktu</th>
                                                <th class="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durasi</th>
                                                <th class="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kegiatan</th>
                                                <th class="px-3 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            <tr v-for="(event, index) in day3Events" :key="index" class="hover:bg-gray-50">
                                                <td class="px-3 md:px-6 py-4 whitespace-nowrap">
                                                    <div class="flex items-center">
                                                        <i class="fas fa-clock text-[#D71E28] mr-2"></i>
                                                        <span class="text-sm font-medium text-gray-900">{{ event.time }}</span>
                                                    </div>
                                                </td>
                                                <td class="px-3 md:px-6 py-4 whitespace-nowrap">
                                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                                        {{ event.duration }}
                                                    </span>
                                                </td>
                                                <td class="px-3 md:px-6 py-4">
                                                    <div class="text-sm font-medium text-gray-900">{{ event.activity }}</div>
                                                </td>
                                                <td class="px-3 md:px-6 py-4">
                                                    <div class="text-sm text-gray-700">{{ event.remarks }}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                
                                <div class="mt-4 sm:mt-6 bg-gradient-to-r from-red-50 to-pink-50 p-4 sm:p-6 rounded-lg border border-red-200">
                                    <div class="flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-4">
                                        <i class="fas fa-fire text-red-600 text-xl sm:text-2xl mb-2 sm:mb-0 sm:mr-3 text-center"></i>
                                        <h3 class="text-base sm:text-lg font-semibold text-red-800 text-center sm:text-left">Penutupan Acara</h3>
                                    </div>
                                    <p class="text-sm sm:text-base text-red-700 text-center sm:text-left">Pemadaman Api Obor disertai Flashmob Artis Ibukota - Penutupan resmi acara olahraga</p>
                                </div>
                            </div>
                        </div>

                        
                        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
                            <div class="flex flex-col sm:flex-row sm:items-start">
                                <i class="fas fa-exclamation-triangle text-yellow-600 text-lg sm:text-xl mb-2 sm:mb-0 sm:mr-3 sm:mt-1 text-center"></i>
                                <div>
                                    <h3 class="text-base sm:text-lg font-semibold text-yellow-800 mb-2 text-center sm:text-left">Catatan Penting:</h3>
                                    <ul class="text-sm sm:text-base text-yellow-700 space-y-1">
                                        <li>• Peserta dimohon hadir 30 menit sebelum acara dimulai</li>
                                        <li>• Bawa kartu identitas dan bukti registrasi</li>
                                        <li>• Patuhi protokol kesehatan yang berlaku</li>
                                        <li>• Hubungi panitia jika ada perubahan mendadak</li>
                                    </ul>
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

export default {
    components: { SidebarUser },
    data() {
        return {
            isSidebarOpen: false,
            selectedDay: 1,
            days: [
                { id: 1, title: 'Day 1', icon: 'fas fa-calendar-day' },
                { id: 2, title: 'Day 2', icon: 'fas fa-trophy' },
                { id: 3, title: 'Day 3', icon: 'fas fa-crown' }
            ],
            day1Events: [
                { time: '18:00 - 19:30', duration: '1:30', activity: 'Periode Kedatangan', remarks: 'Registrasi di Meja Panitia dengan scan barcode' },
                { time: '19:30 - 19:35', duration: '0:05', activity: 'Stall Food Open', remarks: '' },
                { time: '19:35 - 19:40', duration: '0:05', activity: 'Registrasi Peserta (PIC Only)', remarks: '' },
                { time: '19:40 - 19:45', duration: '0:05', activity: 'Voice Over', remarks: 'Acara akan segera dimulai' },
                { time: '19:45 - 19:50', duration: '0:05', activity: 'Menyanyikan Lagu Indonesia Raya & Mars Pertamina', remarks: 'Blackout & Lighting Show' },
                { time: '19:50 - 20:00', duration: '0:10', activity: 'Pembacaan Doa', remarks: '' },
                { time: '20:00 - 20:10', duration: '0:10', activity: 'Opening Act Tari Tanggai/Gending Sriwijaya', remarks: 'Marching Band feat Tari Kolosal' },
                { time: '20:10 - 20:17', duration: '0:07', activity: 'Showband Performance/Dance', remarks: '' },
                { time: '20:17 - 20:22', duration: '0:05', activity: 'Yel Yel Kontingen', remarks: '2 Kontingen (masing-masing 3 menit)' },
                { time: '20:22 - 20:29', duration: '0:07', activity: 'Laporan Pelaksanaan', remarks: 'Ketua Panitia' },
                { time: '20:29 - 20:34', duration: '0:05', activity: 'Yel Yel Kontingen', remarks: '2 Kontingen (masing-masing 3 menit)' },
                { time: '20:34 - 20:41', duration: '0:07', activity: 'Welcome Speech', remarks: 'Ketua BAPORA Set 2' },
                { time: '20:41 - 20:56', duration: '0:15', activity: 'Yel Yel Kontingen', remarks: '2 Kontingen (masing-masing 3 menit)' },
                { time: '20:56 - 21:06', duration: '0:10', activity: 'Management Speech', remarks: 'GMZ4, DUReg2 & DUReg2(PEP)' },
                { time: '21:06 - 21:30', duration: '0:24', activity: 'Opening Ceremony', remarks: 'Penyalaan Api Obor oleh Pejabat' },
                { time: '21:30', duration: '', activity: 'Foto Bersama, Perkenalan Wasit & Tanda Tangan Fakta Integritas', remarks: 'Makan Malam Bersama, Kembali ke hotel' }
            ],
            day3Events: [
                { time: '06:00 - 10:00', duration: '4:00', activity: 'Semi Final dan Final', remarks: 'Masing-masing venue' },
                { time: '09:30 - 10:00', duration: '0:30', activity: 'Band Performance', remarks: 'Session 1 (Para peserta yang sudah selesai dapat merapat ke venue closing)' },
                { time: '10:00 - 10:30', duration: '0:30', activity: 'Pengumuman Pemenang Masing-masing CABOR', remarks: 'By Internal band Pertamina' },
                { time: '10:30 - 11:00', duration: '0:30', activity: 'Pengumuman Juara Umum dan Tuan Rumah Tahun Depan', remarks: 'Podium / Panggung Pemenang' },
                { time: '11:00 - 11:10', duration: '0:10', activity: 'Pembagian Hadiah & Door Prize', remarks: '' },
                { time: '11:10 - 11:20', duration: '0:10', activity: 'Management Closing Speech', remarks: '' },
                { time: '11:20 - 11:25', duration: '0:05', activity: 'Menyanyikan Lagu Indonesia Raya & Mars Pertamina', remarks: '' },
                { time: '11:25 - 11:30', duration: '0:05', activity: 'Pembacaan Doa', remarks: '' },
                { time: '11:30 - 12:00', duration: '0:30', activity: 'Closing Ceremony dan Foto Bersama', remarks: '' },
                { time: '12:00', duration: '', activity: 'Band Performance & End Program', remarks: 'GMZ4, DUReg 4 & DUReg 2 - Pemadaman Api Obor disertai Flashmob Artis Ibukota' }
            ],
            venues: [
                { sport: 'Basket', location: 'GOR Aneka RU 3 Plaju', icon: 'fas fa-basketball-ball' },
                { sport: 'Badminton', location: 'GOR Dempo Jakabaring', icon: 'fas fa-table-tennis' },
                { sport: 'Tennis', location: 'GOR Tenis Jakabaring', icon: 'fas fa-table-tennis' },
                { sport: 'Tennis Meja', location: 'GOR Ranau Jakabaring', icon: 'fas fa-table-tennis' },
                { sport: 'Sepak Bola', location: 'Stadion Panahan dan Glora Sriwijaya Jakabaring', icon: 'fas fa-futbol' },
                { sport: 'E-Sport', location: 'Ballroom Hotel Wyndam Opi Jakabring', icon: 'fas fa-gamepad' },
                { sport: 'Volley', location: 'GOR Aneka RU3 Plaju', icon: 'fas fa-volleyball-ball' },
                { sport: 'Senam', location: 'GOR Ranau Jakabaring', icon: 'fas fa-running' },
                { sport: 'Lari/Atletik', location: 'Stadion Atletik Jakabring', icon: 'fas fa-running' }
            ]
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        handleLogout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
.transition-margin {
    transition: margin-left 0.3s ease-in-out;
}

.hover\:bg-gray-50:hover {
    background-color: #f9fafb;
}

.focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.focus\:ring-2:focus {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

@media (max-width: 768px) {
    .overflow-x-auto {
        -webkit-overflow-scrolling: touch;
    }
}

.bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>