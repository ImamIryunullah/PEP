<template>
    <div class="min-h-screen bg-[#F7F7F7]">
        <NavbarDashboard />
        <section
            class="min-h-screen relative bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15)_0%,_rgba(0,0,0,1)_45%)]">
            <!-- Gambar-gambar border -->
            <img src="/listpeserta/atas.png" class="absolute bottom-[60%] right-0 w-[20%] pointer-events-none"
                alt="border1" />
            <img src="/listpeserta/bawah.png" class="absolute bottom-[20%] right-0 w-[20%] pointer-events-none"
                alt="border2" />
            <img src="/listpeserta/awan.png" alt="Gambar bawah"
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[20%]" />

            <div class="flex items-center justify-end pr-10">
                <h1 class="text-white text-2xl font-bold z-10">LIST PESERTA</h1>
            </div>
            <img src="/assets/voli.png"
            class="absolute top-[15%] w-[400px] left-[10%] hidden md:block float delay-2" alt="Maskot Kiri" />
            <h1 class="justify-start text-white opacity-5 text-8xl z-10 font-bold ml-16">VOLLY</h1>
            <!-- Gambar hiasan di bawah tengah -->
            <img src="/bunga/hiasan.png" alt="hiasan"
                class="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-[150px] py-12 z-10" />
        </section>


        <section class="min-h-screen relative bg-[#F7F7F7]">

        </section>

    </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue';

export default {
    components: {
        NavbarDashboard
    }
}
</script>