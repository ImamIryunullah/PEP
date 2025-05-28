<template>
    <div class="min-h-screen bg-[#f7f7f7] relative">
        <NavbarDashboard />

        <!-- Background Text as Watermark -->
        <div class="absolute top-10 left-20 z-0 pointer-events-none select-none">
            <h1 class="text-gray-600 opacity-5 text-9xl font-bold pt-12">ADDITIONAL</h1>
            <h1 class="text-gray-600 opacity-5 text-9xl font-bold">INFORMATION</h1>
        </div>

        <section class="relative z-10 flex items-center justify-center py-20">
            <div
                class="bg-white/30 backdrop-blur-md border border-white/50 rounded-3xl shadow-xl p-2 sm:p-4 max-w-5xl w-full transition hover:scale-105 duration-300">
                <img src="/addinfo/header.png" alt="header" class="w-full">
                <h2 class="text-3xl font-bold text-red-600 text-center">ID CARD</h2>
                <h2 class="text-3xl font-bold text-red-600 mb-4 text-center">MINI OLYMPIC PEP 2025</h2>

                <div class="rounded-xl overflow-hidden shadow-md border border-white/30">
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
                            <span class="text-xs text-gray-900 font-semibold mt-1">Warna biru</span>
                        </div>
                    </div>
                </div>


                <p class="text-sm text-center mt-4 text-orange-900 opacity-80">
                    Pastikan data ID Card sesuai saat hari pelaksanaan.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'

export default {
    components: {
        NavbarDashboard,
    },
}
</script>

<style scoped></style>