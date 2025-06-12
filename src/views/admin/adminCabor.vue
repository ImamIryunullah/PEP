<template>
    <div class="min-h-screen flex bg-gray-50 relative">
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
                <h1 class="text-lg font-semibold text-[#D71E28]">Kelola Cabor</h1>
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
                    <h1 class="text-2xl xl:text-3xl font-bold text-gray-800">Kelola Cabang Olahraga</h1>
                    <p class="text-gray-600 mt-2">Kelola cabang olahraga dan sub-kategori yang tersedia dalam sistem</p>
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


                <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">

                    <div class="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-plus-circle text-[#D71E28] mr-2"></i>
                            Tambah Cabang Olahraga
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Nama Cabang Olahraga</label>
                                <input v-model="newCabor.nama"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                    placeholder="Contoh: Badminton, Basket, dll" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Icon (Font Awesome)</label>
                                <input v-model="newCabor.icon"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                    placeholder="Contoh: fas fa-shuttlecock" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Deskripsi (Opsional)</label>
                                <textarea v-model="newCabor.deskripsi" rows="3"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                    placeholder="Deskripsi singkat tentang cabang olahraga"></textarea>
                            </div>
                            <button @click="tambahCabor" :disabled="!newCabor.nama || saving" :class="[
                                'w-full px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all',
                                newCabor.nama && !saving
                                    ? 'bg-[#D71E28] text-white hover:bg-red-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            ]">
                                <i :class="saving ? 'fas fa-spinner fa-spin' : 'fas fa-plus'"></i>
                                {{ saving ? 'Menyimpan...' : 'Tambah Cabor' }}
                            </button>
                        </div>
                    </div>


                    <div class="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                            <i class="fas fa-list text-blue-600 mr-2"></i>
                            Tambah Sub-Kategori
                        </h3>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Pilih Cabang
                                    Olahraga</label>
                                <select v-model="newSubKategori.cabor_id"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                    <option value="">Pilih Cabor</option>
                                    <option v-for="cabor in daftarCabor" :key="cabor.id" :value="cabor.id">
                                        {{ cabor.nama }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Nama Sub-Kategori</label>
                                <input v-model="newSubKategori.nama"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                    placeholder="Contoh: MS, WS, Putra, Putri, dll" />
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Jenis Kelamin</label>
                                <select v-model="newSubKategori.jenis_kelamin"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="Putra">Putra</option>
                                    <option value="Putri">Putri</option>
                                    <option value="Campuran">Campuran</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Keterangan
                                    (Opsional)</label>
                                <input v-model="newSubKategori.keterangan"
                                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                    placeholder="Contoh: Men's Single, Double Mix, dll" />
                            </div>
                            <button @click="tambahSubKategori" :disabled="!canAddSubKategori || saving" :class="[
                                'w-full px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all',
                                canAddSubKategori && !saving
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            ]">
                                <i :class="saving ? 'fas fa-spinner fa-spin' : 'fas fa-plus'"></i>
                                {{ saving ? 'Menyimpan...' : 'Tambah Sub-Kategori' }}
                            </button>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm mb-6">
                    <div class="p-4 sm:p-6 border-b border-gray-200">
                        <div class="flex justify-between items-center">
                            <div>
                                <h2 class="text-lg font-semibold text-gray-800">Daftar Cabang Olahraga</h2>
                                <p class="text-sm text-gray-600 mt-1">{{ daftarCabor.length }} cabang olahraga</p>
                            </div>
                            <button @click="loadCabor"
                                class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                <i class="fas fa-sync-alt"></i>
                                Refresh
                            </button>
                        </div>
                    </div>

                    <div class="p-4 sm:p-6">
                        <div v-if="daftarCabor.length === 0 && !loading" class="text-center py-12">
                            <i class="fas fa-medal text-4xl text-gray-300 mb-4"></i>
                            <p class="text-gray-500 text-lg mb-2">Belum ada cabang olahraga</p>
                            <p class="text-gray-400 text-sm">Tambahkan cabang olahraga baru</p>
                        </div>

                        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div v-for="(cabor) in daftarCabor" :key="cabor.id"
                                class="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">

                                <div v-if="editCaborIndex !== index">
                                    <div class="flex items-center justify-between mb-3">
                                        <div class="flex items-center gap-3">
                                            <i :class="cabor.icon || 'fas fa-trophy'"
                                                class="text-[#D71E28] text-xl"></i>
                                            <h3 class="font-semibold text-gray-800">{{ cabor.nama }}</h3>
                                        </div>
                                        <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                            {{ cabor.sub_kategoris?.length || 0 }} sub
                                        </span>
                                    </div>
                                    <p v-if="cabor.deskripsi" class="text-sm text-gray-600 mb-3">{{ cabor.deskripsi }}
                                    </p>
                                    <div class="flex gap-2">
                                        <button @click="mulaiEditCabor(index)"
                                            class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded text-sm font-medium transition-colors flex items-center gap-1 flex-1">
                                            <i class="fas fa-edit text-xs"></i>
                                            Edit
                                        </button>
                                        <button @click="hapusCabor(cabor.id, index)" :disabled="deleting"
                                            class="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded text-sm font-medium transition-colors flex items-center gap-1 flex-1 disabled:opacity-50">
                                            <i
                                                :class="deleting ? 'fas fa-spinner fa-spin text-xs' : 'fas fa-trash text-xs'"></i>
                                            Hapus
                                        </button>
                                    </div>
                                </div>


                                <div v-else class="space-y-3">
                                    <input v-model="editCabor.nama"
                                        class="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                        placeholder="Nama Cabor" />
                                    <input v-model="editCabor.icon"
                                        class="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                        placeholder="Icon (fas fa-trophy)" />
                                    <textarea v-model="editCabor.deskripsi" rows="2"
                                        class="w-full p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                        placeholder="Deskripsi"></textarea>
                                    <div class="flex gap-2">
                                        <button @click="simpanEditCabor(cabor.id, index)" :disabled="updating"
                                            class="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center gap-1 flex-1 disabled:opacity-50">
                                            <i
                                                :class="updating ? 'fas fa-spinner fa-spin text-xs' : 'fas fa-check text-xs'"></i>
                                            Simpan
                                        </button>
                                        <button @click="batalEditCabor"
                                            class="bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors flex items-center gap-1 flex-1">
                                            <i class="fas fa-times text-xs"></i>
                                            Batal
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="bg-white rounded-lg shadow-sm">
                    <div class="p-4 sm:p-6 border-b border-gray-200">
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h2 class="text-lg font-semibold text-gray-800">Sub-Kategori</h2>
                                <p class="text-sm text-gray-600 mt-1">{{ totalSubKategori }} sub-kategori total</p>
                            </div>
                            <div class="flex gap-2">
                                <select v-model="filterCabor"
                                    class="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                    <option value="">Semua Cabor</option>
                                    <option v-for="cabor in daftarCabor" :key="cabor.id" :value="cabor.id">
                                        {{ cabor.nama }}
                                    </option>
                                </select>
                                <button @click="loadSubKategori"
                                    class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                                    <i class="fas fa-sync-alt"></i>
                                    Refresh
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 sm:p-6">
                        <div v-if="filteredSubKategori.length === 0 && !loading" class="text-center py-12">
                            <i class="fas fa-list text-4xl text-gray-300 mb-4"></i>
                            <p class="text-gray-500 text-lg mb-2">Belum ada sub-kategori</p>
                            <p class="text-gray-400 text-sm">Tambahkan sub-kategori baru</p>
                        </div>

                        <div v-else class="space-y-3">
                            <div v-for="(subKat, index) in filteredSubKategori" :key="subKat.id"
                                class="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-all duration-200">

                                <div v-if="editSubIndex !== index"
                                    class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div class="flex-1">
                                        <div class="flex flex-wrap items-center gap-2 mb-2">
                                            <span
                                                class="bg-[#D71E28] text-white text-xs px-2 py-1 rounded-full font-medium">
                                                {{ getCaborName(subKat.cabor_id) }}
                                            </span>
                                            <span :class="[
                                                'text-xs px-2 py-1 rounded-full font-medium',
                                                subKat.jenis_kelamin === 'Putra' ? 'bg-blue-100 text-blue-800' :
                                                    subKat.jenis_kelamin === 'Putri' ? 'bg-pink-100 text-pink-800' :
                                                        'bg-green-100 text-green-800'
                                            ]">
                                                {{ subKat.jenis_kelamin }}
                                            </span>
                                        </div>
                                        <div class="font-semibold text-gray-800">{{ subKat.nama }}</div>
                                        <div v-if="subKat.keterangan" class="text-sm text-gray-600 mt-1">{{
                                            subKat.keterangan }}</div>
                                    </div>
                                    <div class="flex gap-2">
                                        <button @click="mulaiEditSub(index)"
                                            class="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded text-sm font-medium transition-colors flex items-center gap-1">
                                            <i class="fas fa-edit text-xs"></i>
                                            Edit
                                        </button>
                                        <button @click="hapusSubKategori(subKat.id, index)" :disabled="deleting"
                                            class="bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded text-sm font-medium transition-colors flex items-center gap-1 disabled:opacity-50">
                                            <i
                                                :class="deleting ? 'fas fa-spinner fa-spin text-xs' : 'fas fa-trash text-xs'"></i>
                                            Hapus
                                        </button>
                                    </div>
                                </div>


                                <div v-else class="space-y-3">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <select v-model="editSub.cabor_id"
                                            class="p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                            <option v-for="cabor in daftarCabor" :key="cabor.id" :value="cabor.id">
                                                {{ cabor.nama }}
                                            </option>
                                        </select>
                                        <input v-model="editSub.nama"
                                            class="p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                            placeholder="Nama Sub-Kategori" />
                                        <select v-model="editSub.jenis_kelamin"
                                            class="p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                            <option value="Putra">Putra</option>
                                            <option value="Putri">Putri</option>
                                            <option value="Campuran">Campuran</option>
                                        </select>
                                        <input v-model="editSub.keterangan"
                                            class="p-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                            placeholder="Keterangan" />
                                    </div>
                                    <div class="flex gap-2">
                                        <button @click="simpanEditSub(subKat.id, index)" :disabled="updating"
                                            class="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors flex items-center gap-1 flex-1 disabled:opacity-50">
                                            <i
                                                :class="updating ? 'fas fa-spinner fa-spin text-xs' : 'fas fa-check text-xs'"></i>
                                            Simpan
                                        </button>
                                        <button @click="batalEditSub"
                                            class="bg-gray-500 text-white px-3 py-2 rounded text-sm hover:bg-gray-600 transition-colors flex items-center gap-1 flex-1">
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
    name: 'AdminCaborCrud',
    components: { Sidebar },
    data() {
        return {
            isSidebarOpen: false,

            // Data cabor
            daftarCabor: [],
            newCabor: {
                nama: '',
                icon: '',
                deskripsi: ''
            },
            editCaborIndex: null,
            editCabor: {
                nama: '',
                icon: '',
                deskripsi: ''
            },

            // Data sub kategori
            daftarSubKategori: [],
            newSubKategori: {
                cabor_id: '',
                nama: '',
                jenis_kelamin: '',
                keterangan: ''
            },
            editSubIndex: null,
            editSub: {
                cabor_id: '',
                nama: '',
                jenis_kelamin: '',
                keterangan: ''
            },
            filterCabor: '',

            // Loading states
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
        canAddSubKategori() {
            return this.newSubKategori.cabor_id && this.newSubKategori.nama && this.newSubKategori.jenis_kelamin;
        },
        filteredSubKategori() {
            if (!this.filterCabor) return this.daftarSubKategori;
            return this.daftarSubKategori.filter(sub => sub.cabor_id == this.filterCabor);
        },
        totalSubKategori() {
            return this.daftarSubKategori.length;
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },

        // CRUD Cabang Olahraga
        async loadCabor() {
            this.loading = true;
            this.loadingMessage = 'Memuat data cabang olahraga...';
            try {
                const response = await API.getAllCabor();
                if (response.data.success) {
                    this.daftarCabor = response.data.data || [];
                } else {
                    this.showError('Gagal memuat data cabang olahraga');
                }
            } catch (error) {
                console.error('Error loading cabor:', error);
                this.showError('Terjadi kesalahan saat memuat data cabang olahraga');
            } finally {
                this.loading = false;
            }
        },

        async tambahCabor() {
            if (!this.newCabor.nama) return;

            this.saving = true;
            try {
                const response = await API.createCabor(this.newCabor);
                if (response.data.success) {
                    this.showSuccess('Cabang olahraga berhasil ditambahkan');
                    this.resetCaborForm();
                    await this.loadCabor();
                } else {
                    this.showError(response.data.message || 'Gagal menambah cabang olahraga');
                }
            } catch (error) {
                console.error('Error creating cabor:', error);
                this.showError('Terjadi kesalahan saat menambah cabang olahraga');
            } finally {
                this.saving = false;
            }
        },

        mulaiEditCabor(index) {
            this.editCaborIndex = index;
            const cabor = this.daftarCabor[index];
            this.editCabor = {
                nama: cabor.nama,
                icon: cabor.icon,
                deskripsi: cabor.deskripsi
            };
        },

        async simpanEditCabor(id, index) {
            this.updating = true;
            try {
                const response = await API.updateCabor(id, this.editCabor);
                if (response.data.success) {
                    this.showSuccess('Cabang olahraga berhasil diupdate');
                    this.daftarCabor[index] = {
                        ...this.daftarCabor[index],
                        ...this.editCabor
                    };
                    this.batalEditCabor();
                } else {
                    this.showError(response.data.message || 'Gagal mengupdate cabang olahraga');
                }
            } catch (error) {
                console.error('Error updating cabor:', error);
                this.showError('Terjadi kesalahan saat mengupdate cabang olahraga');
            } finally {
                this.updating = false;
            }
        },

        batalEditCabor() {
            this.editCaborIndex = null;
            this.editCabor = {
                nama: '',
                icon: '',
                deskripsi: ''
            };
        },

        async hapusCabor(id, index) {
            if (!confirm('Apakah Anda yakin ingin menghapus cabang olahraga ini? Semua sub-kategori terkait juga akan terhapus.')) return;

            this.deleting = true;
            try {
                const response = await API.deleteCabor(id);
                if (response.data.success) {
                    this.showSuccess('Cabang olahraga berhasil dihapus');
                    this.daftarCabor.splice(index, 1);
                    await this.loadSubKategori(); // Refresh sub kategori
                } else {
                    this.showError(response.data.message || 'Gagal menghapus cabang olahraga');
                }
            } catch (error) {
                console.error('Error deleting cabor:', error);
                this.showError('Terjadi kesalahan saat menghapus cabang olahraga');
            } finally {
                this.deleting = false;
            }
        },

        async loadSubKategori() {
            this.loading = true;
            this.loadingMessage = 'Memuat data sub-kategori...';
            try {
                const response = await API.getAllSubKategori();
                if (response.data.success) {
                    this.daftarSubKategori = response.data.data || [];
                } else {
                    this.showError('Gagal memuat data sub-kategori');
                }
            } catch (error) {
                console.error('Error loading sub kategori:', error);
                this.showError('Terjadi kesalahan saat memuat data sub-kategori');
            } finally {
                this.loading = false;
            }
        },

        async tambahSubKategori() {
            if (!this.canAddSubKategori) return;

            this.saving = true;
            try {
                const response = await API.createSubKategori(this.newSubKategori);
                if (response.data.success) {
                    this.showSuccess('Sub-kategori berhasil ditambahkan');
                    this.resetSubKategoriForm();
                    await this.loadSubKategori();
                } else {
                    this.showError(response.data.message || 'Gagal menambah sub-kategori');
                }
            } catch (error) {
                console.error('Error creating sub kategori:', error);
                this.showError('Terjadi kesalahan saat menambah sub-kategori');
            } finally {
                this.saving = false;
            }
        },

        mulaiEditSub(index) {
            this.editSubIndex = index;
            const subKat = this.filteredSubKategori[index];
            this.editSub = {
                cabor_id: subKat.cabor_id,
                nama: subKat.nama,
                jenis_kelamin: subKat.jenis_kelamin,
                keterangan: subKat.keterangan
            };
        },

        async simpanEditSub(id) {
            this.updating = true;
            try {
                const response = await API.updateSubKategori(id, this.editSub);
                if (response.data.success) {
                    this.showSuccess('Sub-kategori berhasil diupdate');
                    // Update data di array
                    const realIndex = this.daftarSubKategori.findIndex(sub => sub.id === id);
                    if (realIndex !== -1) {
                        this.daftarSubKategori[realIndex] = {
                            ...this.daftarSubKategori[realIndex],
                            ...this.editSub
                        };
                    }
                    this.batalEditSub();
                } else {
                    this.showError(response.data.message || 'Gagal mengupdate sub-kategori');
                }
            } catch (error) {
                console.error('Error updating sub kategori:', error);
                this.showError('Terjadi kesalahan saat mengupdate sub-kategori');
            } finally {
                this.updating = false;
            }
        },

        batalEditSub() {
            this.editSubIndex = null;
            this.editSub = {
                cabor_id: '',
                nama: '',
                jenis_kelamin: '',
                keterangan: ''
            };
        },

        async hapusSubKategori(id) {
            if (!confirm('Apakah Anda yakin ingin menghapus sub-kategori ini?')) return;

            this.deleting = true;
            try {
                const response = await API.deleteSubKategori(id);
                if (response.data.success) {
                    this.showSuccess('Sub-kategori berhasil dihapus');
                    // Hapus dari array utama
                    const realIndex = this.daftarSubKategori.findIndex(sub => sub.id === id);
                    if (realIndex !== -1) {
                        this.daftarSubKategori.splice(realIndex, 1);
                    }
                } else {
                    this.showError(response.data.message || 'Gagal menghapus sub-kategori');
                }
            } catch (error) {
                console.error('Error deleting sub kategori:', error);
                this.showError('Terjadi kesalahan saat menghapus sub-kategori');
            } finally {
                this.deleting = false;
            }
        },

        // Helper methods
        getCaborName(caborId) {
            const cabor = this.daftarCabor.find(c => c.id == caborId);
            return cabor ? cabor.nama : 'Unknown';
        },

        resetCaborForm() {
            this.newCabor = {
                nama: '',
                icon: '',
                deskripsi: ''
            };
        },

        resetSubKategoriForm() {
            this.newSubKategori = {
                cabor_id: '',
                nama: '',
                jenis_kelamin: '',
                keterangan: ''
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
        }
    },

    async mounted() {
        await this.loadCabor();
        await this.loadSubKategori();
    }
};
</script>

<style scoped>
/* Custom styles jika diperlukan */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .grid-cols-1 {
        grid-template-columns: 1fr;
    }
}

/* Loading spinner animation */
@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.fa-spin {
    animation: spin 1s linear infinite;
}

/* Focus states */
input:focus,
select:focus,
textarea:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(215, 30, 40, 0.1);
}

/* Hover effects */
.hover\:shadow-md:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.hover\:shadow-sm:hover {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
</style>