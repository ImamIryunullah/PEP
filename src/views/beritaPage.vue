<template>
    <NavbarDashboard />
    <section class="bg-[#f7f7f7] min-h-screen pt-10 fade-in-up">
        <div class="absolute inset-0 z-0 pointer-events-none">

            <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full opacity-5" />

            <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full opacity-5" />
        </div>
        <div class="relative text-center mb-16 px-4">
            <h1
                class="text-[9rem] sm:text-[10rem] lg:text-[12rem] leading-none text-gray-200 font-extrabold absolute inset-0 top-0 z-0 select-none">
                BERITA
            </h1>
            <div class="relative z-20">
                <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 py-12 drop-shadow-md">
                    MINI OLYMPIC
                </h3>
            </div>
            <div class="relative z-20">
                <img src="/berita/api.png" alt="Api" class="mx-auto w-16 sm:w-20 lg:w-24 mt-[-16px] fade-in-up"
                    style="animation-delay: 0.3s" />
            </div>
        </div>
        <div class="bg-white shadow-xl rounded-xl p-6 max-w-7xl mx-auto fade-in-up" style="animation-delay: 0.5s">
            <div class="mb-12 text-left">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Berita Terbaru</h2>
                <p class="text-gray-500">Kumpulan informasi terkini seputar Mini Olympic PEP 2025.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in 6" :key="index"
                    class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl group fade-in-up"
                    :style="`animation-delay: ${index * 0.1 + 0.6}s`">

                    <div class="relative">
                        <img src="/berita/berita.jpg" alt="Berita"
                            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div
                            class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                            Twibbon
                        </div>
                    </div>

                    <div class="p-4 space-y-3">
                        <h4 class="font-bold text-lg text-gray-800 group-hover:text-red-600 transition-colors">
                            Peluncuran Twibbon Mini Olympic</h4>
                        <div class="text-gray-500 text-sm flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M6 2a2 2 0 00-2 2v1h12V4a2 2 0 00-2-2H6zM4 7v7a2 2 0 002 2h8a2 2 0 002-2V7H4zm2 2h2v5H6V9z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>12 Juli 2024</span>
                            <span class="mx-2">•</span>
                            <span>Admin PEP</span>
                        </div>
                        <p class="text-gray-600 text-sm line-clamp-3">Mini Olympic telah resmi diluncurkan dengan
                            berbagai kegiatan seru dan lomba antar kontingen. Saksikan info lengkapnya di sini!</p>
                        <router-link to="/detail-berita"
                            class="inline-block text-red-600 text-sm font-semibold mt-2 hover:underline hover:text-red-800 transition-colors">
                            Baca Selengkapnya →
                        </router-link>
                    </div>
                </div>
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
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.fade-in-up {
    animation: fadeInUp 0.8s ease-out both;
}

.zoom-in {
    animation: zoomIn 0.6s ease-out both;
}
</style>