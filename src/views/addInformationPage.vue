<template>
    <div class="min-h-screen bg-[#f7f7f7] relative">
        <NavbarDashboard />

        <!-- Background Text as Watermark -->
        <div class="absolute top-10 left-20 z-0 pointer-events-none select-none">
            <h1 class="text-gray-600 opacity-5 text-9xl font-bold pt-12">ADDITIONAL</h1>
            <h1 class="text-gray-600 opacity-5 text-9xl font-bold">INFORMATION</h1>
        </div>

        <!-- SECTION 1: ID CARD -->
        <section class="relative z-10 flex items-center justify-center py-20">
            <div class="bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-4 sm:p-6 max-w-5xl w-full transition hover:scale-105 duration-300"
                v-intersect="'fade-slide-up'">
                <img src="/addinfo/header.png" alt="header" class="w-full" />
                <h2 class="text-3xl font-bold text-red-600 text-center">ID CARD</h2>
                <h2 class="text-3xl font-bold text-red-600 mb-6 text-center">MINI OLYMPIC PEP 2025</h2>

                <div class="rounded-xl overflow-hidden">
                    <img src="/addinfo/idcard.png" alt="ID Card Peserta" class="w-full object-contain" />

                    <div class="flex justify-between px-4 mt-4 relative">
                        <div class="flex flex-col items-center">
                            <div class="w-px h-6 bg-black"></div>
                            <span class="text-xs text-gray-900 font-semibold mt-1">Warna Gold</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="w-px h-6 bg-black"></div>
                            <span class="text-xs text-gray-900 font-semibold mt-1">Warna Merah</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="w-px h-6 bg-black"></div>
                            <span class="text-xs text-gray-900 font-semibold mt-1">Warna Hijau</span>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="w-px h-6 bg-black"></div>
                            <span class="text-xs text-gray-900 font-semibold mt-1">Warna Biru</span>
                        </div>
                    </div>
                </div>

                <p class="text-sm text-center mt-4 text-orange-900 opacity-80">
                    Pastikan data ID Card sesuai saat hari pelaksanaan.
                </p>
            </div>
        </section>

        <section class="relative z-10 flex items-center justify-center py-20">
            <div class="absolute top-10 left-20 z-0 pointer-events-none select-none">
                <h1 class="text-gray-600 opacity-5 text-9xl font-bold pt-12">ID CARD</h1>
                <h1 class="text-gray-600 opacity-5 text-9xl font-bold">SYSTEM</h1>
            </div>
            <div class="bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-4 sm:p-6 max-w-5xl w-full transition hover:scale-105 duration-300"
                v-intersect="'fade-slide-up'">
                <img src="/addinfo/header.png" alt="header" class="w-full" />
                <h2 class="text-3xl font-bold text-red-600 text-center">SYSTEM SCAN QR</h2>
                <h3 class="text-3xl font-bold text-red-600 mb-6 text-center">PESERTA CABOR</h3>

                <div class="rounded-xl overflow-hidden">
                    <img src="/addinfo/systemscan.png" alt="Contoh QR Scan" class="w-full object-contain" />
                </div>

                <div class="text-sm text-center mt-4 text-orange-900 opacity-80 px-4">
                    <p class="mb-3">
                        QR Code digunakan untuk keperluan verifikasi peserta saat pertandingan.
                    </p>
                    <ul class="list-disc list-inside space-y-1 text-left sm:text-center sm:list-none">
                        <li>Setiap peserta wajib menunjukkan QR ID saat scan masuk area pertandingan.</li>
                        <li>Panitia akan memverifikasi data langsung dari sistem.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="relative z-10 py-16">

            <div class="overflow-hidden whitespace-nowrap">
                <div class="inline-block animate-marquee space-x-24 px-4">
                    <img src="/addinfo/asean.png" alt="Sponsor 1" class="inline h-16 object-contain" />
                    <img src="/addinfo/skkmigas.png" alt="Sponsor 2" class="inline h-16 object-contain" />
                    <img src="/addinfo/iog.png" alt="Sponsor 3" class="inline h-16 object-contain" />
                    <img src="/addinfo/pertaminaEP.png" alt="Sponsor 4" class="inline h-20 object-contain" />
                    <img src="/addinfo/pertamedika.png" alt="Sponsor 5" class="inline h-16 object-contain" />
                </div>
            </div>
        </section>

        <section class="relative z-10 flex items-center justify-center py-20">
            <div class="absolute top-10 left-20 z-0 pointer-events-none select-none">
                <h1 class="text-gray-600 opacity-5 text-9xl font-bold pt-12">TRANSPORT</h1>
                <h1 class="text-gray-600 opacity-5 text-9xl font-bold">ATION</h1>
            </div>
            <div class="bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-4 sm:p-6 max-w-5xl w-full transition hover:scale-105 duration-300"
                v-intersect="'fade-slide-up'">
                <img src="/addinfo/header.png" alt="header" class="w-full" />
                <h2 class="text-3xl font-bold text-red-600 text-center mb-6">TRANSPORTASI</h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div class="rounded-xl overflow-hidden" v-intersect="'fade-left'">
                        <img src="/addinfo/mobil.png" alt="Transportasi 1" class="w-full h-64 object-cover" />
                    </div>
                    <div class="rounded-xl overflow-hidden" v-intersect="'fade-right'">
                        <img src="/addinfo/mobil2.png" alt="Transportasi 2" class="w-full h-64 object-cover" />
                    </div>
                </div>


                <div class="text-sm text-gray-900 opacity-80 text-center px-4">
                    <p class="mb-2 text-orange-900">
                        • Masing masing kontingen akan diprovide 1 bus 44-45 seater dan 3unit HiAce untuk mobilisasi

                    </p>
                    <p class="text-orange-900">
                        • Koordinasi driver dengan kontingen diserahkan kepada Ketua Kontingen atau wakil yang ditunjuk

                    </p>
                </div>
            </div>
        </section>
        <section class="relative z-10 flex items-center justify-center py-20">
            <!-- Large Floating Title -->
            <div class="absolute top-10 left-20 z-0 pointer-events-none select-none">
                <h1 class="text-gray-600 opacity-5 text-9xl font-bold pt-12">VENUE</h1>
                <h1 class="text-gray-600 opacity-5 text-9xl font-bold">LOKASI</h1>
            </div>

            <!-- Main Card Container -->
            <div class="bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-4 sm:p-6 max-w-5xl w-full transition hover:scale-105 duration-300"
                v-intersect="'fade-slide-up'">

                <img src="/addinfo/header.png" alt="header" class="w-full mb-4" />
                <h2 class="text-3xl font-bold text-red-600 text-center mb-8">VENUE PERTANDINGAN</h2>

                <!-- Venue Images -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                    <div class="rounded-xl overflow-hidden group" v-intersect="'fade-left'">
                        <img src="/informasicabor/overviewvenue.png" alt="Venue 1"
                            class="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500" />
                    </div>
                    <div class="rounded-xl overflow-hidden group" v-intersect="'fade-right'">
                        <img src="/informasicabor/overviewvenue2.png" alt="Venue 2"
                            class="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500" />
                    </div>
                </div>

                <!-- Optional Descriptions -->
                <div class="text-sm text-gray-900 opacity-80 text-center px-4">
                    <p class="text-orange-900">
                        Venue pertandingan Mini Olympic tersebar di beberapa lokasi strategis yang sudah disiapkan untuk
                        mendukung kenyamanan dan kelancaran seluruh cabang olahraga.
                    </p>
                </div>
            </div>
        </section>

        <FooterDashboard />
    </div>
</template>

<script>
import FooterDashboard from '@/components/FooterDashboard.vue';
import NavbarDashboard from '@/components/NavbarDashboard.vue'

export default {
    components: {
        NavbarDashboard,
        FooterDashboard
    },
    directives: {
        intersect: {
            mounted(el, binding) {
                const callback = (entries) => {
                    if (entries[0].isIntersecting) {
                        el.classList.add(binding.value);
                    }
                };

                const observer = new IntersectionObserver(callback, {
                    threshold: 0.1,
                });

                observer.observe(el);
            },
        },
    },
}
</script>

<style scoped>
@keyframes fadeSlideUp {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-slide-up {
    opacity: 0;
    animation: fadeSlideUp 0.8s ease-out forwards;
}

@keyframes fadeLeft {
    0% {
        opacity: 0;
        transform: translateX(-40px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeRight {
    0% {
        opacity: 0;
        transform: translateX(40px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.fade-left {
    opacity: 0;
    animation: fadeLeft 0.8s ease-out forwards;
}

.fade-right {
    opacity: 0;
    animation: fadeRight 0.8s ease-out forwards;
}

@keyframes marquee {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

.animate-marquee {
    display: inline-block;
    animation: marquee 20s linear infinite;
}
</style>