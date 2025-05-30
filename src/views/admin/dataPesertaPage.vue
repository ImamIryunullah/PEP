<template>
    <div class="min-h-screen flex bg-gray-100 relative">

        <Sidebar :isOpen="isSidebarOpen" />

        <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
            class="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"></div>

        <div :class="[
            'flex-1 flex flex-col transition-margin duration-300 ease-in-out min-h-screen',
            isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
        ]">
            <!-- Top bar mobile -->
            <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
                <button @click="toggleSidebar" class="text-gray-700 text-2xl focus:outline-none">
                    <i class="fas fa-bars"></i>
                </button>
                <h1 class="text-lg font-semibold text-[#D71E28]">Data Peserta</h1>
            </header>

            <main class="px-6 py-8">
                <h1 class="text-3xl font-bold text-gray-800 mb-6 hidden md:block">Data Peserta</h1>

                <div class="bg-white rounded-xl shadow p-6 overflow-x-auto">
                    <table class="min-w-full table-auto text-sm text-gray-700">
                        <thead class="bg-[#D71E28] text-white">
                            <tr>
                                <th class="px-4 py-2 text-left">Nama Lengkap</th>
                                <th class="px-4 py-2 text-left">Email</th>
                                <th class="px-4 py-2 text-left">Jenis Peserta</th>
                                <th class="px-4 py-2 text-left">Cabang Olahraga</th>
                                <th class="px-4 py-2 text-left">Aset</th>
                                <th class="px-4 py-2 text-left">Foto</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="peserta in pesertaList" :key="peserta.email">
                                <td class="px-4 py-2">{{ peserta.namaLengkap }}</td>
                                <td class="px-4 py-2">{{ peserta.email }}</td>
                                <td class="px-4 py-2">{{ peserta.jenisPeserta }}</td>
                                <td class="px-4 py-2">{{ peserta.cabangOlahraga }}</td>
                                <td class="px-4 py-2">{{ peserta.aset }}</td>
                                <td class="px-4 py-2">
                                    <img v-if="peserta.foto" :src="peserta.foto" alt="Foto Peserta"
                                        class="w-12 h-12 object-cover rounded-full" />
                                    <span v-else>-</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
    name: "DataPeserta",
    components: { Sidebar },
    data() {
        return {
            isSidebarOpen: false,
            pesertaList: [
                {
                    namaLengkap: "Andi Wijaya",
                    email: "andi@example.com",
                    jenisPeserta: "Mitra",
                    cabangOlahraga: "Badminton",
                    aset: "Head Office PEP",
                    foto: "/registrasi/foto1.jpg",
                },
                {
                    namaLengkap: "Siti Nurhaliza",
                    email: "siti@example.com",
                    jenisPeserta: "Mitra",
                    cabangOlahraga: "Badminton",
                    aset: "Head Office PEP",
                    foto: null,
                },
            ],
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
};
</script>