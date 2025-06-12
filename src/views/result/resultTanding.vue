<template>
    <div>
        <NavbarDashboard />
        <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
            <div class="absolute inset-0 z-0 pointer-events-none">
                <div class="hidden lg:block">
                    <h1
                        class="absolute top-20 xl:top-20 left-12 xl:left-20 text-gray-600 opacity-5 text-7xl xl:text-9xl font-bold">
                        HASIL</h1>
                    <h1
                        class="absolute top-40 xl:top-52 left-12 xl:left-20 text-gray-600 opacity-5 text-7xl xl:text-9xl font-bold">
                        PERTANDINGAN</h1>
                </div>

                <div class="block lg:hidden">
                    <h1 class="absolute top-8 left-4 text-gray-600 opacity-5 text-4xl sm:text-5xl font-bold">LOG IN</h1>
                </div>
            </div>
            <!-- <div class="bg-white shadow-lg border-b-4 border-[#D71E28]">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div class="text-center">
                        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            🏆 Hasil Knockout Stage
                        </h1>
                        <p class="text-gray-600 text-lg">
                            Ikuti perkembangan pertandingan knockout stage dari berbagai kategori olahraga
                        </p>
                    </div>
                </div>
            </div>
 -->

            <div v-if="loading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white p-8 rounded-xl shadow-2xl flex items-center gap-4">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D71E28]"></div>
                    <span class="text-gray-700 text-lg">{{ loadingMessage }}</span>
                </div>
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div class="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
                    <h2 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <i class="fas fa-filter text-[#D71E28]"></i>
                        Filter Kategori
                    </h2>


                    <div class="mb-6">
                        <h3 class="text-lg font-semibold text-gray-700 mb-4">Pilih Olahraga</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                            <button v-for="kategori in Object.keys(sportCategories)" :key="kategori"
                                @click="selectKategori(kategori)" :class="[
                                    'px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 border-2 transform hover:scale-105',
                                    selectedKategori === kategori
                                        ? 'bg-gradient-to-r from-[#D71E28] to-red-600 text-white shadow-lg border-[#D71E28]'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200 hover:border-[#D71E28]'
                                ]">
                                <i :class="sportIcons[kategori]" class="mr-2"></i>
                                {{ kategori }}
                            </button>
                        </div>
                    </div>


                    <div v-if="selectedKategori && sportCategories[selectedKategori]">
                        <h3 class="text-lg font-semibold text-gray-700 mb-4">Sub-Kategori {{ selectedKategori }}</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                            <button v-for="subKategori in sportCategories[selectedKategori]" :key="subKategori"
                                @click="selectSubKategori(subKategori)" :class="[
                                    'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                                    selectedSubKategori === subKategori
                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                                ]">
                                {{ subKategori }}
                            </button>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div class="bg-gradient-to-r from-[#D71E28] to-red-600 p-6 text-white">
                        <div class="flex items-center justify-between">
                            <div>
                                <h2 class="text-2xl font-bold mb-2">
                                    {{ selectedKategori }} - {{ selectedSubKategori }}
                                </h2>
                                <p class="text-red-100">
                                    {{ daftarHasil.length }} pertandingan tercatat
                                </p>
                            </div>
                            <button @click="loadMatches"
                                class="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-white font-medium transition-all flex items-center gap-2">
                                <i class="fas fa-sync-alt"></i>
                                Refresh
                            </button>
                        </div>
                    </div>

                    <div class="p-6">

                        <div v-if="daftarHasil.length === 0 && !loading" class="text-center py-16">
                            <div class="mb-6">
                                <i class="fas fa-trophy text-6xl text-gray-300"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-gray-600 mb-2">Belum Ada Pertandingan</h3>
                            <p class="text-gray-500 text-lg">
                                Hasil pertandingan untuk {{ selectedKategori }} - {{ selectedSubKategori }} akan
                                ditampilkan di sini
                            </p>
                        </div>


                        <div v-else-if="loading" class="text-center py-16">
                            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D71E28] mx-auto mb-6">
                            </div>
                            <p class="text-gray-600 text-lg">Memuat hasil pertandingan...</p>
                        </div>


                        <div v-else class="space-y-8">
                            <div v-for="tahap in ['Final', 'Perebutan Tempat Ketiga', 'Semifinal', 'Perempat Final']"
                                :key="tahap">
                                <div v-if="getMatchesByStage(tahap).length > 0">
                                    <div class="flex items-center gap-3 mb-6">
                                        <div :class="[
                                            'px-4 py-2 rounded-full text-white font-bold text-lg',
                                            getStageColor(tahap)
                                        ]">
                                            {{ getStageIcon(tahap) }} {{ tahap }}
                                        </div>
                                        <div class="flex-1 h-1 bg-gray-200 rounded"></div>
                                    </div>

                                    <div class="grid gap-4 md:gap-6">
                                        <div v-for="match in getMatchesByStage(tahap)" :key="match.id"
                                            class="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#D71E28]">

                                            <div
                                                class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

                                                <div class="flex-1">
                                                    <div class="flex flex-wrap items-center gap-2 mb-4">
                                                        <span
                                                            class="bg-[#D71E28] text-white text-xs px-3 py-1 rounded-full font-medium">
                                                            {{ match.tahap }}
                                                        </span>
                                                        <span
                                                            class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                                                            {{ match.kategori }}
                                                        </span>
                                                        <span
                                                            class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
                                                            {{ match.sub_kategori }}
                                                        </span>
                                                    </div>


                                                    <div class="bg-white rounded-lg p-4 border border-gray-200">
                                                        <div class="flex items-center justify-center gap-4 text-center">
                                                            <div class="flex-1">
                                                                <div class="text-lg font-bold text-blue-700 mb-1">
                                                                    {{ match.tim1 }}
                                                                </div>
                                                                <div class="text-sm text-gray-600">
                                                                    {{ getParticipantLabel(match.kategori, 'tim1') }}
                                                                </div>
                                                            </div>

                                                            <div
                                                                class="px-6 py-3 bg-gradient-to-r from-[#D71E28] to-red-600 rounded-lg">
                                                                <div class="text-white font-bold text-xl">
                                                                    {{ match.hasil }}
                                                                </div>
                                                                <div class="text-red-100 text-xs">
                                                                    {{ getScoreLabel(match.kategori) }}
                                                                </div>
                                                            </div>

                                                            <div class="flex-1">
                                                                <div class="text-lg font-bold text-blue-700 mb-1">
                                                                    {{ match.tim2 }}
                                                                </div>
                                                                <div class="text-sm text-gray-600">
                                                                    {{ getParticipantLabel(match.kategori, 'tim2') }}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div v-if="daftarHasil.length > 0" class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div class="flex items-center gap-3">
                            <div class="bg-blue-100 p-3 rounded-lg">
                                <i class="fas fa-trophy text-blue-600 text-xl"></i>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-gray-800">{{ daftarHasil.length }}</div>
                                <div class="text-gray-600">Total Pertandingan</div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div class="flex items-center gap-3">
                            <div class="bg-green-100 p-3 rounded-lg">
                                <i class="fas fa-medal text-green-600 text-xl"></i>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-gray-800">{{ getUniqueStages().length }}</div>
                                <div class="text-gray-600">Tahap Berbeda</div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div class="flex items-center gap-3">
                            <div class="bg-purple-100 p-3 rounded-lg">
                                <i class="fas fa-users text-purple-600 text-xl"></i>
                            </div>
                            <div>
                                <div class="text-2xl font-bold text-gray-800">{{ getUniqueParticipants().length }}</div>
                                <div class="text-gray-600">Total Peserta</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    name: 'KnockoutStageResults',
    data() {
        return {
            selectedKategori: 'Badminton',
            selectedSubKategori: 'MS',
            sportCategories: {
                'Badminton': ['MS', 'WS', 'MD', 'WD', 'XD'],
                'Tenis Meja': ['MS', 'WS', 'MD', 'WD', 'XD'],
                'Tenis Lapangan': ['MS', 'WS', 'MD', 'WD', 'XD'],
                'Volley': ['Putra', 'Putri'],
                'Sepak Bola': ['Putra', 'Putri'],
                'Basket': ['Putra', 'Putri'],
                'Lari': ['100m Putra', '100m Putri', '200m Putra', '200m Putri', '400m Putra', '400m Putri', 'Estafet Putra', 'Estafet Putri'],
                'Senam': ['Artistik Putra', 'Artistik Putri', 'Ritmik Putri'],
                'Esport': ['Mobile Legends', 'PUBG Mobile', 'Free Fire', 'Valorant', 'FIFA']
            },
            sportIcons: {
                'Badminton': 'fas fa-shuttlecock',
                'Tenis Meja': 'fas fa-table-tennis',
                'Tenis Lapangan': 'fas fa-tennis-ball',
                'Volley': 'fas fa-volleyball-ball',
                'Sepak Bola': 'fas fa-futbol',
                'Basket': 'fas fa-basketball-ball',
                'Lari': 'fas fa-running',
                'Senam': 'fas fa-gymnastics',
                'Esport': 'fas fa-gamepad'
            },
            daftarHasil: [],
            loading: false,
            loadingMessage: ''
        };
    },
    watch: {
        selectedKategori(newVal) {
            if (this.sportCategories[newVal] && this.sportCategories[newVal].length > 0) {
                this.selectedSubKategori = this.sportCategories[newVal][0];
            }
        }
    },
    methods: {
        async selectKategori(kategori) {
            this.selectedKategori = kategori;
            await this.loadMatches();
        },

        async selectSubKategori(subKategori) {
            this.selectedSubKategori = subKategori;
            await this.loadMatches();
        },

        async loadMatches() {
            this.loading = true;
            this.loadingMessage = 'Memuat hasil pertandingan...';
            try {
                const response = await API.getAllKnockoutMatches({
                    kategori: this.selectedKategori,
                    sub_kategori: this.selectedSubKategori,
                    page: 1,
                    limit: 100
                });

                if (response.data.success) {
                    this.daftarHasil = response.data.data || [];
                }
            } catch (error) {
                console.error('Error loading matches:', error);
                this.daftarHasil = [];
            } finally {
                this.loading = false;
            }
        },

        getMatchesByStage(tahap) {
            return this.daftarHasil.filter(match => match.tahap === tahap);
        },

        getStageColor(tahap) {
            const colors = {
                'Final': 'bg-gradient-to-r from-yellow-500 to-yellow-600',
                'Perebutan Tempat Ketiga': 'bg-gradient-to-r from-orange-500 to-orange-600',
                'Semifinal': 'bg-gradient-to-r from-purple-500 to-purple-600',
                'Perempat Final': 'bg-gradient-to-r from-blue-500 to-blue-600'
            };
            return colors[tahap] || 'bg-gray-500';
        },

        getStageIcon(tahap) {
            const icons = {
                'Final': '🏆',
                'Perebutan Tempat Ketiga': '🥉',
                'Semifinal': '🥈',
                'Perempat Final': '🎯'
            };
            return icons[tahap] || '🏅';
        },

        getParticipantLabel(kategori, position) {
            const teamSports = ['Volley', 'Sepak Bola', 'Basket'];
            if (teamSports.includes(kategori)) {
                return position === 'tim1' ? 'Tim 1' : 'Tim 2';
            }
            return position === 'tim1' ? 'Peserta 1' : 'Peserta 2';
        },

        getScoreLabel(kategori) {
            if (kategori === 'Lari') return 'Waktu';
            if (kategori === 'Senam') return 'Skor';
            return 'Skor';
        },

        getUniqueStages() {
            return [...new Set(this.daftarHasil.map(match => match.tahap))];
        },

        getUniqueParticipants() {
            const participants = new Set();
            this.daftarHasil.forEach(match => {
                participants.add(match.tim1);
                participants.add(match.tim2);
            });
            return Array.from(participants);
        }
    },

    async mounted() {
        if (this.sportCategories[this.selectedKategori]) {
            this.selectedSubKategori = this.sportCategories[this.selectedKategori][0];
        }
        await this.loadMatches();
    }
};
</script>