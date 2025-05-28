<template>
    <NavbarDashboard />
    <section class="min-h-screen relative bg-[#F7F7F7] w-full overflow-hidden">
        <!-- Gambar background 1 -->
        <img src="/registrasi/hijau.png" alt=""
            class="absolute top-0 left-0 w-full pointer-events-none z-0" />

        <!-- Gambar background 2 -->
        <img src="/registrasi/biru.png" alt=""
            class="absolute bottom-0 right-0 w-full pointer-events-none z-0" />

        <!-- Konten utama -->
        <h1 class="text-gray-600 opacity-5 text-9xl z-10 font-bold ml-20 pt-20">REGIS</h1>
        <h1 class="text-gray-600 opacity-5 text-9xl z-10 font-bold ml-20">TRASI</h1>

        <div class="flex justify-center items-center">
            <div class="flex flex-col items-center gap-4 mt-2 z-10 w-full px-4 max-w-2xl">
                <!-- Input Field 1 -->
                <div class="flex items-center bg-[#a60000] text-white px-4 py-3    rounded-lg w-full shadow-md">
                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />

                    <input type="text" placeholder="Masukan Data"
                        class="bg-transparent w-full focus:outline-none placeholder-white" />
                </div>

                <!-- Input Field 2 -->
                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg w-full shadow-md">
                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />

                    <input type="text" placeholder="Masukan Data"
                        class="bg-transparent w-full focus:outline-none placeholder-white" />
                </div>

                <!-- Input Field 3 -->
                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg w-full shadow-md">
                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />

                    <input type="text" placeholder="Masukan Data"
                        class="bg-transparent w-full focus:outline-none placeholder-white" />
                </div>

                <!-- Tombol Submit -->
                <div class="flex justify-center mt-12">
                    <button
                        class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-full shadow-md transition duration-300 ease-in-out">
                        SUBMIT
                    </button>
                </div>

            </div>

        </div>
    </section>

    <FooterDashboard />



</template>

<script>
import FooterDashboard from '@/components/FooterDashboard.vue'
import NavbarDashboard from '@/components/NavbarDashboard.vue';
export default {
    components: {
        FooterDashboard,
        NavbarDashboard
    }
}
</script>

<style scoped></style>