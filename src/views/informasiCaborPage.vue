<template>
    <NavbarDashboard />

    <section class="min-h-screen flex items-center justify-center relative overflow-hidden px-2 xs:px-4 sm:px-6 py-8 sm:py-12 bg-gray-100">

        <!-- Ornamen Latar - Responsif -->
        <img src="/bunga/bungakiri.png" alt=""
            class="absolute left-2 xs:left-3 sm:left-5 top-3 xs:top-4 sm:top-5 w-16 xs:w-20 sm:w-24 md:w-32 opacity-30 pointer-events-none animate-fade-in-up" />
        <img src="/bunga/bungakanan.png" alt=""
            class="absolute right-2 xs:right-3 sm:right-5 bottom-3 xs:bottom-4 sm:bottom-5 w-16 xs:w-20 sm:w-24 md:w-32 opacity-30 pointer-events-none animate-fade-in-up" />

        <div
            class="relative w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-200">
            <div class="p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10">
                <!-- Title - Responsif -->
                <h2
                    class="text-xl xs:text-2xl sm:text-3xl font-bold sm:font-extrabold text-center mb-4 sm:mb-6 leading-tight text-black">
                    Informasi Cabang Olahraga
                </h2>

                <!-- Image Container - Responsif -->
                <div class="overflow-hidden rounded-lg sm:rounded-xl shadow-sm sm:shadow-md">
                    <img src="/informasicabor/cabor.png" alt="Informasi Cabor"
                        class="w-full h-auto transition duration-300 sm:duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg sm:hover:shadow-xl" />
                </div>

                <!-- Keterangan tambahan - Responsif -->
                <div class="mt-4 sm:mt-6">
                    <p class="text-center text-gray-600 text-xs xs:text-sm sm:text-base leading-relaxed px-2 sm:px-4">
                        Gambar di atas berisi informasi lengkap mengenai jadwal dan lokasi pertandingan cabang olahraga
                        dalam Mini Olympic.
                    </p>
                </div>
            </div>
        </div>
    </section>
<!-- Wave Transition -->
<div class="overflow-hidden leading-none rotate-180">
  <svg viewBox="0 0 1440 320" preserveAspectRatio="none"
    class="w-full h-16 sm:h-24 md:h-28 fill-[#f3f4f6]"> <!-- tailwind gray-100 -->
    <path d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,101.3C672,85,768,107,864,138.7C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96V320H0Z"></path>
  </svg>
</div>

    <!-- Section Venue Split -->
    <section class="bg-gradient-to-b from-white to-gray-50 py-10 sm:py-16 px-4 sm:px-8">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-bold text-center text-black mb-10">
                Venue Pertandingan Mini Olympic
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Gambar Venue 1 -->
                <div
                    class="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-500">
                    <img src="/informasicabor/overviewvenue.png" alt="Venue 1"
                        class="w-full h-64 sm:h-80 object-cover transform transition-transform duration-500 group-hover:scale-105" />
                    <div
                        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                        <h3 class="text-white font-semibold text-lg">Stadion Utama</h3>
                    </div>
                </div>

                <!-- Gambar Venue 2 -->
                <div
                    class="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-500">
                    <img src="/informasicabor/overviewvenue2.png" alt="Venue 2"
                        class="w-full h-64 sm:h-80 object-cover transform transition-transform duration-500 group-hover:scale-105" />
                    <div
                        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                        <h3 class="text-white font-semibold text-lg">VENUE BASKET DAN VOLLY
                            (AREA KOMPERTA RU3 PLAJU)
                        </h3>
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
    },
    mounted() {
        // Lazy loading untuk gambar besar
        this.lazyLoadImages();
    },
    methods: {
        lazyLoadImages() {
            const images = document.querySelectorAll('img[src^="/informasicabor/"]');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('loaded');
                        observer.unobserve(entry.target);
                    }
                });
            });

            images.forEach(img => observer.observe(img));
        }
    }
}
</script>

<style scoped>
/* Animasi */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
}

/* Optimasi untuk gambar */
img {
    max-width: 100%;
    height: auto;
}

/* Loading state untuk gambar */
img:not(.loaded) {
    opacity: 0;
    transition: opacity 0.3s ease;
}

img.loaded {
    opacity: 1;
}

/* Media queries tambahan untuk penyesuaian lebih detail */
@media (max-width: 320px) {

    /* Untuk layar sangat kecil */
    .text-xl {
        font-size: 1.125rem;
    }

    .p-4 {
        padding: 0.75rem;
    }
}

@media (min-width: 321px) and (max-width: 480px) {

    /* Untuk layar small mobile */
    .hover\:scale-105:hover {
        transform: scale(1.02);
        /* Sedikit mengurangi scale pada mobile */
    }
}

@media (min-width: 481px) and (max-width: 768px) {

    /* Untuk layar tablet portrait */
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {

    /* Untuk layar tablet landscape */
    .max-w-4xl {
        max-width: 56rem;
    }
}

@media (min-width: 1025px) {

    /* Untuk layar desktop */
    .hover\:scale-105:hover {
        transform: scale(1.05);
    }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {

    .animate-fade-in-up,
    .transition,
    .transform {
        animation: none !important;
        transition: none !important;
        transform: none !important;
    }
}

/* Print styles */
@media print {
    .bg-gradient-to-br {
        background: white !important;
    }

    .shadow-xl,
    .shadow-2xl {
        box-shadow: none !important;
    }

    button {
        display: none !important;
    }
}

/* Dark mode support (opsional) */
@media (prefers-color-scheme: dark) {
    .bg-white {
        background-color: white;
        color: white;
    }

    .text-gray-800 {
        color: #f9fafb;
    }

    .text-gray-600 {
        color: #d1d5db;
    }

    .border-gray-200 {
        border-color: #374151;
    }
}
</style>