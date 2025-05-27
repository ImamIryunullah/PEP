<template>
    <NavbarDashboard />

    <section
        class="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative overflow-hidden px-4 py-12">
        <!-- Ornamen Latar -->
        <img src="/bunga/bungakiri.png" alt=""
            class="absolute left-5 top-5 w-32 opacity-3 pointer-events-none animate-fade-in-up" />
        <img src="/bunga/bungakanan.png" alt=""
            class="absolute right-5 bottom-5 w-32 opacity-3 pointer-events-none animate-fade-in-up" />

        <div class="relative max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div class="p-6 md:p-10">
                <h2 class="text-3xl font-extrabold text-center text-gray-800 mb-6">Informasi Cabang Olahraga</h2>
                <div class="overflow-hidden rounded-xl shadow-md">
                    <img src="/informasicabor/cabor.png" alt="Informasi Cabor"
                        class="w-full h-auto transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl" />

                </div>

                <!-- Keterangan tambahan jika perlu -->
                <p class="mt-6 text-center text-gray-600 text-sm md:text-base">
                    Gambar di atas berisi informasi lengkap mengenai jadwal dan lokasi pertandingan cabang olahraga
                    dalam Mini Olympic.
                </p>
            </div>
        </div>
    </section>

    <FooterDashboard />
</template>


<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import FooterDashboard from '@/components/FooterDashboard.vue'
export default {
    components: {
        NavbarDashboard,
        FooterDashboard
    }
}

</script>


<style>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
}
</style>