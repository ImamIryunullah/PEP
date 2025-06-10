<template>
    <div class="min-h-screen flex bg-gray-50 relative font-sans">
        <Sidebar :isOpen="isSidebarOpen" />
        <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
            class="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"></div>
        <div :class="[
            'flex-1 flex flex-col transition-all duration-300 ease-in-out min-h-screen',
            isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
        ]">
            <header class="bg-white shadow-sm px-4 py-3 flex justify-between items-center lg:hidden border-b">
                <button @click="toggleSidebar"
                    class="text-gray-700 text-xl focus:outline-none hover:text-[#D71E28] transition-colors">
                    <i class="fas fa-bars"></i>
                </button>
                <h1 class="text-lg font-semibold text-[#D71E28]">Knockout Stage</h1>
                <div class="w-6"></div>
            </header>

            <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                
                <div v-if="loading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div class="bg-white p-6 rounded-lg flex items-center gap-3">
                        <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-[#D71E28]"></div>
                        <span class="text-gray-700">{{ loadingMessage }}</span>
                    </div>
                </div>

                <div class="hidden lg:block mb-6">
                    <h1 class="text-2xl xl:text-3xl font-bold text-gray-800">Kelola Knockout Stage</h1>
                    <p class="text-gray-600 mt-2">Kelola hasil pertandingan knockout stage berdasarkan kategori dan
                        sub-kategori olahraga</p>
                </div>

                
                <div v-if="successMessage"
                    class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center justify-between">
                    <div class="flex items-center">
                        <i class="fas fa-check-circle mr-2"></i>
                        {{ successMessage }}
                    </div>
                    <button @click="successMessage = ''" class="text-green-700 hover:text-green-900">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div v-if="errorMessage"
                    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center justify-between">
                    <div class="flex items-center">
                        <i class="fas fa-exclamation-triangle mr-2"></i>
                        {{ errorMessage }}
                    </div>
                    <button @click="errorMessage = ''" class="text-red-700 hover:text-red-900">
                        <i class="fas fa-times"></i>
                    </button>
                </div>

                <div class="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">Pilih Kategori Olahraga</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        <button v-for="kategori in Object.keys(sportCategories)" :key="kategori"
                            @click="selectKategori(kategori)" :class="[
                                'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border',
                                selectedKategori === kategori
                                    ? 'bg-[#D71E28] text-white shadow-md border-[#D71E28]'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-200'
                            ]">
                            <i :class="sportIcons[kategori]" class="mr-2"></i>
                            {{ kategori }}
                        </button>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold text-gray-800">Sub-Kategori {{ selectedKategori }}</h3>
                        <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {{ sportCategories[selectedKategori]?.length || 0 }} kategori
                        </span>
                    </div>

                    <div v-if="sportCategories[selectedKategori]"
                        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                        <button v-for="subKategori in sportCategories[selectedKategori]" :key="subKategori"
                            @click="selectSubKategori(subKategori)" :class="[
                                'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                                selectedSubKategori === subKategori
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            ]">
                            {{ subKategori }}
                        </button>
                    </div>
                </div>

                
                <div class="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                    <div class="flex items-center justify-between mb-4">
                        <h2 class="text-lg font-semibold text-gray-800">Tambah Pertandingan</h2>
                        <div class="flex gap-2">
                            <span class="text-sm text-white bg-[#D71E28] px-3 py-1 rounded-full">{{ selectedKategori
                                }}</span>
                            <span class="text-sm text-white bg-blue-600 px-3 py-1 rounded-full">{{ selectedSubKategori
                                }}</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div class="sm:col-span-2 lg:col-span-1">
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                {{ getParticipantLabel(selectedKategori, 'tim1') }}
                            </label>
                            <input v-model="match.tim1"
                                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent transition-all"
                                :placeholder="getParticipantPlaceholder(selectedKategori, 'tim1')" />
                        </div>
                        <div class="sm:col-span-2 lg:col-span-1">
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                {{ getParticipantLabel(selectedKategori, 'tim2') }}
                            </label>
                            <input v-model="match.tim2"
                                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent transition-all"
                                :placeholder="getParticipantPlaceholder(selectedKategori, 'tim2')" />
                        </div>
                        <div class="col-span-1">
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                {{ getScoreLabel(selectedKategori) }}
                            </label>
                            <input v-model="match.hasil"
                                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent transition-all"
                                :placeholder="getScorePlaceholder(selectedKategori)" />
                        </div>
                        <div class="col-span-1">
                            <label class="block text-sm font-medium text-gray-700 mb-2">Tahap</label>
                            <select v-model="match.tahap"
                                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent transition-all">
                                <option value="Perempat Final">Perempat Final</option>
                                <option value="Semifinal">Semifinal</option>
                                <option value="Final">Final</option>
                                <option value="Perebutan Tempat Ketiga">Perebutan Tempat Ketiga</option>
                            </select>
                        </div>
                    </div>

                    <button @click="simpanHasil" :disabled="!canSaveMatch || saving" :class="[
                        'mt-6 w-full sm:w-auto px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all',
                        canSaveMatch && !saving
                            ? 'bg-[#D71E28] text-white hover:bg-red-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    ]">
                        <i :class="saving ? 'fas fa-spinner fa-spin' : 'fas fa-save'"></i>
                        {{ saving ? 'Menyimpan...' : 'Simpan Hasil' }}
                    </button>
                </div>

                
                <div class="bg-white rounded-lg shadow-sm">
                    <div class="p-4 sm:p-6 border-b border-gray-200">
                        <div class="flex justify-between items-center">
                            <div>
                                <h2 class="text-lg font-semibold text-gray-800">
                                    Daftar Pertandingan - {{ selectedKategori }} ({{ selectedSubKategori }})
                                </h2>
                                <p class="text-sm text-gray-600 mt-1">{{ daftarHasil.length }} pertandingan</p>
                            </div>
                            <button @click="loadMatches"
                                class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                <i class="fas fa-sync-alt"></i>
                                Refresh
                            </button>
                        </div>
                    </div>

                    <div class="p-4 sm:p-6">
                        <div v-if="daftarHasil.length === 0 && !loading" class="text-center py-12">
                            <i class="fas fa-trophy text-4xl text-gray-300 mb-4"></i>
                            <p class="text-gray-500 text-lg mb-2">Belum ada pertandingan</p>
                            <p class="text-gray-400 text-sm">untuk {{ selectedKategori }} - {{ selectedSubKategori }}
                            </p>
                        </div>

                        <div v-else-if="loading" class="text-center py-12">
                            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#D71E28] mx-auto mb-4">
                            </div>
                            <p class="text-gray-500">Memuat data pertandingan...</p>
                        </div>

                        <div v-else class="space-y-4">
                            <div v-for="(item, index) in daftarHasil" :key="item.id"
                                class="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                                
                                <div v-if="editIndex !== index"
                                    class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                    <div class="flex-1">
                                        <div class="flex flex-wrap items-center gap-2 mb-3">
                                            <span
                                                class="bg-[#D71E28] text-white text-xs px-2 py-1 rounded-full font-medium">
                                                {{ item.tahap }}
                                            </span>
                                            <span
                                                class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                                                {{ item.kategori }}
                                            </span>
                                            <span
                                                class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                                {{ item.sub_kategori }}
                                            </span>
                                        </div>
                                        <div class="text-base lg:text-lg font-semibold text-gray-800">
                                            <span class="text-blue-700">{{ item.tim1 }}</span>
                                            <span class="mx-3 text-[#D71E28] font-bold text-lg">{{ item.hasil }}</span>
                                            <span class="text-blue-700">{{ item.tim2 }}</span>
                                        </div>
                                    </div>
                                    <div class="flex gap-2">
                                        <button @click="mulaiEdit(index)"
                                            class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1">
                                            <i class="fas fa-edit text-xs"></i>
                                            Edit
                                        </button>
                                        <button @click="hapusHasil(item.id, index)" :disabled="deleting"
                                            class="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 disabled:opacity-50">
                                            <i
                                                :class="deleting ? 'fas fa-spinner fa-spin text-xs' : 'fas fa-trash text-xs'"></i>
                                            {{ deleting ? 'Menghapus...' : 'Hapus' }}
                                        </button>
                                    </div>
                                </div>

                                
                                <div v-else class="space-y-4">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <input v-model="editMatch.tim1"
                                            class="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                            :placeholder="getParticipantPlaceholder(item.kategori, 'tim1')" />
                                        <input v-model="editMatch.hasil"
                                            class="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                            :placeholder="getScorePlaceholder(item.kategori)" />
                                        <input v-model="editMatch.tim2"
                                            class="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                            :placeholder="getParticipantPlaceholder(item.kategori, 'tim2')" />
                                        <select v-model="editMatch.tahap"
                                            class="p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                            <option value="Perempat Final">Perempat Final</option>
                                            <option value="Semifinal">Semifinal</option>
                                            <option value="Final">Final</option>
                                            <option value="Perebutan Tempat Ketiga">Perebutan Tempat Ketiga</option>
                                        </select>
                                    </div>
                                    <div class="flex gap-2 justify-end">
                                        <button @click="simpanEdit(item.id, index)" :disabled="updating"
                                            class="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center gap-2 disabled:opacity-50">
                                            <i
                                                :class="updating ? 'fas fa-spinner fa-spin text-xs' : 'fas fa-check text-xs'"></i>
                                            {{ updating ? 'Menyimpan...' : 'Simpan' }}
                                        </button>
                                        <button @click="batalEdit"
                                            class="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors flex items-center gap-2">
                                            <i class="fas fa-times text-xs"></i>
                                            Batal
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import API from '@/service/api';

export default {
    name: 'KelolaKnockoutStage',
    components: { Sidebar },
    data() {
        return {
            isSidebarOpen: false,
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
            match: {
                tim1: '',
                tim2: '',
                hasil: '',
                tahap: 'Perempat Final',
            },
            daftarHasil: [],
            editIndex: null,
            editMatch: {
                tim1: '',
                tim2: '',
                hasil: '',
                tahap: '',
            },
            // API related states
            loading: false,
            saving: false,
            updating: false,
            deleting: false,
            loadingMessage: '',
            successMessage: '',
            errorMessage: ''
        };
    },
    computed: {
        canSaveMatch() {
            return this.match.tim1 && this.match.tim2 && this.match.hasil && this.selectedSubKategori;
        }
    },
    watch: {
        selectedKategori(newVal) {
            // Auto select first sub-category when sport changes
            if (this.sportCategories[newVal] && this.sportCategories[newVal].length > 0) {
                this.selectedSubKategori = this.sportCategories[newVal][0];
            }
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },

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
            this.loadingMessage = 'Memuat data pertandingan...';
            try {
                const response = await API.getAllKnockoutMatches({
                    kategori: this.selectedKategori,
                    sub_kategori: this.selectedSubKategori
                });

                if (response.data.success) {
                    this.daftarHasil = response.data.data || [];
                } else {
                    this.showError('Gagal memuat data pertandingan');
                }
            } catch (error) {
                console.error('Error loading matches:', error);

                if (error.code === 'NETWORK_ERROR') {
                    this.showError('Tidak dapat terhubung ke server');
                } else if (error.response?.status === 404) {
                    this.showError('Data tidak ditemukan');
                } else if (error.response?.status >= 500) {
                    this.showError('Terjadi kesalahan pada server');
                } else {
                    this.showError('Terjadi kesalahan saat memuat data');
                }
            } finally {
                this.loading = false;
            }
        },

        async simpanHasil() {
            if (!this.canSaveMatch) return;

            this.saving = true;
            try {
                const payload = {
                    kategori: this.selectedKategori,
                    sub_kategori: this.selectedSubKategori,
                    tim1: this.match.tim1,
                    tim2: this.match.tim2,
                    hasil: this.match.hasil,
                    tahap: this.match.tahap
                };

                const response = await API.createKnockoutMatch(payload);

                if (response.data.success) {
                    this.showSuccess('Pertandingan berhasil ditambahkan');
                    this.resetMatchForm();
                    await this.loadMatches();
                } else {
                    this.showError(response.data.message || 'Gagal menyimpan pertandingan');
                }
            } catch (error) {
                console.error('Error saving match:', error);
                this.showError('Terjadi kesalahan saat menyimpan data');
            } finally {
                this.saving = false;
            }
        },

        async hapusHasil(id, index) {
            if (!confirm('Apakah Anda yakin ingin menghapus pertandingan ini?')) return;

            this.deleting = true;
            try {
                const response = await API.deleteKnockoutMatch(id);

                if (response.data.success) {
                    this.showSuccess('Pertandingan berhasil dihapus');
                    this.daftarHasil.splice(index, 1);
                } else {
                    this.showError(response.data.message || 'Gagal menghapus pertandingan');
                }
            } catch (error) {
                console.error('Error deleting match:', error);
                this.showError('Terjadi kesalahan saat menghapus data');
            } finally {
                this.deleting = false;
            }
        },

        mulaiEdit(index) {
            this.editIndex = index;
            const item = this.daftarHasil[index];
            this.editMatch = {
                tim1: item.tim1,
                tim2: item.tim2,
                hasil: item.hasil,
                tahap: item.tahap
            };
        },

        async simpanEdit(id, index) {
            this.updating = true;
            try {
                const response = await API.updateKnockoutMatch(id, this.editMatch);

                if (response.data.success) {
                    this.showSuccess('Pertandingan berhasil diupdate');
                    this.daftarHasil[index] = {
                        ...this.daftarHasil[index],
                        ...this.editMatch
                    };
                    this.batalEdit();
                } else {
                    this.showError(response.data.message || 'Gagal mengupdate pertandingan');
                }
            } catch (error) {
                console.error('Error updating match:', error);
                this.showError('Terjadi kesalahan saat mengupdate data');
            } finally {
                this.updating = false;
            }
        },

        batalEdit() {
            this.editIndex = null;
            this.editMatch = {
                tim1: '',
                tim2: '',
                hasil: '',
                tahap: '',
            };
        },

        resetMatchForm() {
            this.match = {
                tim1: '',
                tim2: '',
                hasil: '',
                tahap: 'Perempat Final',
            };
        },

        showSuccess(message) {
            this.successMessage = message;
            this.errorMessage = '';
            setTimeout(() => {
                this.successMessage = '';
            }, 5000);
        },

        showError(message) {
            this.errorMessage = message;
            this.successMessage = '';
            setTimeout(() => {
                this.errorMessage = '';
            }, 5000);
        },

        getParticipantLabel(kategori, position) {
            const teamSports = ['Volley', 'Sepak Bola', 'Basket'];
            if (teamSports.includes(kategori)) {
                return position === 'tim1' ? 'Tim 1' : 'Tim 2';
            }
            return position === 'tim1' ? 'Peserta 1' : 'Peserta 2';
        },

        getParticipantPlaceholder(kategori, position) {
            const teamSports = ['Volley', 'Sepak Bola', 'Basket'];
            if (teamSports.includes(kategori)) {
                return position === 'tim1' ? 'Nama Tim 1' : 'Nama Tim 2';
            }
            return position === 'tim1' ? 'Nama Peserta 1' : 'Nama Peserta 2';
        },

        getScoreLabel(kategori) {
            if (kategori === 'Lari') return 'Waktu';
            if (kategori === 'Senam') return 'Skor';
            return 'Skor';
        },

        getScorePlaceholder(kategori) {
            if (kategori === 'Lari') return '10.25 - 10.48';
            if (kategori === 'Senam') return '9.5 - 9.2';
            if (['Badminton', 'Tenis Meja', 'Tenis Lapangan'].includes(kategori)) return '21-15, 21-18';
            return '2 - 1';
        }
    },

    async mounted() {
        // Set initial sub-category
        if (this.sportCategories[this.selectedKategori]) {
            this.selectedSubKategori = this.sportCategories[this.selectedKategori][0];
        }

        // Load initial data
        await this.loadMatches();
    }
};
</script>