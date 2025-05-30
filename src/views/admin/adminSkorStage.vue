<template>
    <div class="min-h-screen flex bg-gray-100 relative">
        <!-- Sidebar -->
        <Sidebar :isOpen="isSidebarOpen" />

        <!-- Overlay untuk mobile -->
        <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
            class="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"></div>

        <!-- Konten utama -->
        <div :class="[
            'flex-1 flex flex-col transition-margin duration-300 ease-in-out min-h-screen',
            isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
        ]">
            <!-- Topbar mobile -->
            <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
                <button @click="toggleSidebar" class="text-gray-700 text-2xl focus:outline-none">
                    <i class="fas fa-bars"></i>
                </button>
                <h1 class="text-lg font-semibold text-[#D71E28]">Knockout Stage</h1>
            </header>

            <main class="px-6 py-8">
                <h1 class="text-3xl font-bold text-gray-800 mb-6 hidden md:block">Kelola Knockout Stage</h1>

                <!-- Form atau Konten Knockout -->
                <div class="bg-white rounded-xl shadow p-6">
                    <p class="text-gray-600 mb-4">
                        Tambahkan atau ubah hasil pertandingan Knockout Stage Mini Olympic PEP 2025.
                    </p>

                    <!-- Placeholder: Form input knockout -->
                    <div class="grid md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Tim 1</label>
                            <input v-model="match.tim1" class="w-full p-2 border rounded" placeholder="Nama Tim 1" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Tim 2</label>
                            <input v-model="match.tim2" class="w-full p-2 border rounded" placeholder="Nama Tim 2" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Skor</label>
                            <input v-model="match.hasil" class="w-full p-2 border rounded"
                                placeholder="Skor, contoh: 2 - 1" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Pertandingan</label>
                            <select v-model="match.tahap" class="w-full p-2 border rounded">
                                <option>Perempat Final</option>
                                <option>Semifinal</option>
                                <option>Final</option>
                                <option>Perebutan Tempat Ketiga</option>
                            </select>
                        </div>
                    </div>

                    <button @click="simpanHasil"
                        class="mt-6 bg-[#D71E28] text-white px-6 py-2 rounded hover:bg-red-700">
                        Simpan Hasil
                    </button>

                    <!-- List hasil -->
                    <!-- List hasil -->
                    <div class="mt-8">
                        <h2 class="text-lg font-semibold mb-3">Daftar Pertandingan</h2>
                        <ul class="space-y-2">
                            <li v-for="(item, index) in daftarHasil" :key="index"
                                class="bg-gray-100 p-3 rounded flex justify-between items-center">
                                <div v-if="editIndex !== index">
                                    {{ item.tahap }}: {{ item.tim1 }} {{ item.hasil }} {{ item.tim2 }}
                                </div>
                                <div v-else class="flex flex-wrap gap-2 w-full">
                                    <input v-model="editMatch.tim1" class="p-1 border rounded" />
                                    <input v-model="editMatch.hasil" class="p-1 border rounded w-20" />
                                    <input v-model="editMatch.tim2" class="p-1 border rounded" />
                                    <select v-model="editMatch.tahap" class="p-1 border rounded">
                                        <option>Perempat Final</option>
                                        <option>Semifinal</option>
                                        <option>Final</option>
                                        <option>Perebutan Tempat Ketiga</option>
                                    </select>
                                    <button @click="simpanEdit(index)"
                                        class="text-sm text-green-600 hover:underline">Simpan</button>
                                    <button @click="batalEdit"
                                        class="text-sm text-gray-600 hover:underline">Batal</button>
                                </div>

                                <div v-if="editIndex !== index" class="space-x-2">
                                    <button @click="mulaiEdit(index)"
                                        class="text-sm text-blue-600 hover:underline">Edit</button>
                                    <button @click="hapusHasil(index)"
                                        class="text-sm text-red-600 hover:underline">Hapus</button>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
    name: 'KelolaKnockoutStage',
    components: { Sidebar },
    data() {
        return {
            isSidebarOpen: false,
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
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        simpanHasil() {
            if (this.match.tim1 && this.match.tim2 && this.match.hasil) {
                this.daftarHasil.push({ ...this.match });
                this.match = {
                    tim1: '',
                    tim2: '',
                    hasil: '',
                    tahap: 'Perempat Final',
                };
            }
        },
        hapusHasil(index) {
            this.daftarHasil.splice(index, 1);
        },
        mulaiEdit(index) {
            this.editIndex = index;
            this.editMatch = { ...this.daftarHasil[index] };
        },
        simpanEdit(index) {
            this.$set(this.daftarHasil, index, { ...this.editMatch });
            this.editIndex = null;
            this.editMatch = {
                tim1: '',
                tim2: '',
                hasil: '',
                tahap: '',
            };
        },
        batalEdit() {
            this.editIndex = null;
        },
    },

};
</script>