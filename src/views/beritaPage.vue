<template>
    <NavbarDashboard />
    <section class="bg-[#f7f7f7] min-h-screen pt-8 md:pt-10 fade-in-up">
        
        <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full h-full sm:w-3/4 md:w-full opacity-5 object-cover" />
            <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full h-full sm:w-3/4 md:w-full opacity-5 object-cover" />
        </div>

        
        <div class="relative text-center mb-8 sm:mb-12 md:mb-16 px-4">
            
            <h1 class="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-none text-gray-200 font-extrabold absolute inset-0 top-0 z-0 select-none">
                BERITA
            </h1>
            
            
            <div class="relative z-20">
                <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 py-8 sm:py-10 md:py-12 drop-shadow-md">
                    MINI OLYMPIC
                </h3>
            </div>
            <div class="relative z-20">
                <img src="/berita/api.png" alt="Api" class="mx-auto w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 mt-[-12px] sm:mt-[-14px] md:mt-[-16px] fade-in-up"
                    style="animation-delay: 0.3s" />
            </div>
        </div> 
        <div class="bg-white shadow-xl rounded-xl p-4 sm:p-6 md:p-8 max-w-7xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto fade-in-up" style="animation-delay: 0.5s">
            
            <div class="mb-8 sm:mb-10 md:mb-12 text-left">
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Berita Terbaru</h2>
                <p class="text-sm sm:text-base text-gray-500">Kumpulan informasi terkini seputar Mini Olympic PEP 2025.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                <div v-for="(item, index) in 6" :key="index"
                    class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl group fade-in-up"
                    :style="`animation-delay: ${index * 0.1 + 0.6}s`"> 
                    <div class="relative">
                        <img src="/berita/berita.jpg" alt="Berita"
                            class="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                            Twibbon
                        </div>
                    </div>    
                    <div class="p-3 sm:p-4 space-y-2 sm:space-y-3">
                        
                        <h4 class="font-bold text-base sm:text-lg text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2">
                            Peluncuran Twibbon Mini Olympic PEP 2025
                        </h4>
                        
                        
                        <div class="text-gray-500 text-xs sm:text-sm flex items-center gap-2 flex-wrap">
                            <div class="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M6 2a2 2 0 00-2 2v1h12V4a2 2 0 00-2-2H6zM4 7v7a2 2 0 002 2h8a2 2 0 002-2V7H4zm2 2h2v5H6V9z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span>12 Juli 2024</span>
                            </div>
                            <span class="hidden sm:inline mx-1">•</span>
                            <span class="text-xs sm:text-sm">Admin PEP</span>
                        </div>
                        
                        
                        <p class="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                            Mini Olympic telah resmi diluncurkan dengan berbagai kegiatan seru dan lomba antar kontingen. Saksikan info lengkapnya di sini!
                        </p>
                        
                        
                        <router-link to="/detail-berita"
                            class="inline-block text-red-600 text-xs sm:text-sm font-semibold mt-2 hover:underline hover:text-red-800 transition-colors">
                            Baca Selengkapnya →
                        </router-link>
                    </div>
                </div>
            </div>

            
            <div class="text-center mt-8 sm:mt-10 md:mt-12">
                <button class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                    Muat Berita Lainnya
                </button>
            </div>
        </div>

        
        <div class="h-8 sm:h-12 md:h-16"></div>
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
    },
    methods: {
        goToDetailBerita(newsItem) {
      // Navigasi ke detail berita
      this.$router.push({
        name: 'DetailBerita', // atau path yang sesuai
        params: { id: newsItem.id },
        query: { 
          // Bisa tambah parameter lain jika diperlukan
          category: newsItem.category 
        }
      }).then(() => {
        // Pastikan scroll ke atas setelah navigasi
        this.$nextTick(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        });
      });
    }
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

/* Line Clamp Utility */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Responsive improvements */
@media (max-width: 640px) {
    .grid {
        gap: 1rem;
    }
}

@media (min-width: 1024px) {
    .max-w-7xl {
        max-width: 80rem;
    }
}
</style>