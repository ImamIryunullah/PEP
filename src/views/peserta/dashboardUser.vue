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
                    <h1 class="text-3xl font-bold text-gray-800 mb-4">Selamat Datang, {{ namaPeserta }}</h1>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-white p-4 rounded-xl shadow">
                            <h2 class="text-xl font-semibold mb-2 text-[#D71E28]">Cabang yang Diikuti</h2>
                            <p>{{ cabangOlahraga }}</p>
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow">
                            <h2 class="text-xl font-semibold mb-2 text-[#D71E28]">Status Verifikasi</h2>
                            <p :class="statusVerifikasi === 'Terverifikasi' ? 'text-green-600' : 'text-yellow-600'">
                                {{ statusVerifikasi }}
                            </p>
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
            namaPeserta: 'Andi Wijaya',
            cabangOlahraga: 'Badminton',
            statusVerifikasi: 'Terverifikasi',
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        handleLogout() {
            // Lakukan logout, misalnya: this.$router.push('/login')
            alert('Logout berhasil!');
        },
    },
};
</script>