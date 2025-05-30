<template>
    <NavbarDashboard />
    <section class="bg-[#f7f7f7] min-h-screen pt-10 fade-in-up">
        <div class="absolute inset-0 z-0 pointer-events-none">
            <!-- Gambar background atas -->
            <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full opacity-5" />

            <!-- Gambar background bawah -->
            <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full opacity-5" />
        </div>

        <div class="relative text-center mb-16 px-4">
            <!-- Background Judul Besar -->
            <h1
                class="text-[9rem] sm:text-[10rem] lg:text-[12rem] leading-none text-gray-200 font-extrabold absolute inset-0 top-0 z-0 select-none">
                BERITA
            </h1>

            <!-- Ornamen SVG Kiri -->
            <!-- <img src="/berita/svg.png" alt="Ornamen"
                class="absolute top-1/3 left-0 w-28 sm:w-36 lg:w-44 pointer-events-none z-10 opacity-80" /> -->

            <!-- Judul Utama -->
            <div class="relative z-20">
                <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 py-12 drop-shadow-md">
                    MINI OLYMPIC
                </h3>
            </div>

            <!-- Api Icon -->
            <div class="relative z-20">
                <img src="/berita/api.png" alt="Api" class="mx-auto w-16 sm:w-20 lg:w-24 mt-[-16px] fade-in-up"
                    style="animation-delay: 0.3s" />
            </div>
        </div>


        <div class="bg-white shadow-xl rounded-xl p-6 max-w-7xl mx-auto fade-in-up" style="animation-delay: 0.5s">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div v-for="(item, index) in 6" :key="index"
                    class="bg-white rounded-xl shadow-md border border-red-500 overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl zoom-in"
                    :style="`animation-delay: ${index * 0.1 + 0.6}s`">
                    <div class="relative">
                        <img src="/berita/berita.jpg" alt="Berita" class="w-full h-48 object-cover" />
                        <div
                            class="absolute bottom-0 text-white px-4 py-2 bg-gradient-to-t from-black/70 to-transparent w-full">
                            <h4 class="font-bold text-lg">Twibbon</h4>
                            <span class="text-sm">12 Juli 2024</span>
                        </div>
                    </div>
                    <div class="p-4 bg-red-600 text-white text-sm h-[120px] flex flex-col justify-between">
                        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <router-link to="/detail-berita"
                            class="bg-white text-red-600 font-semibold text-sm mt-2 px-4 py-1 rounded hover:bg-gray-200 self-end text-center">
                            See More
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