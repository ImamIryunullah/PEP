<template>
    <NavbarDashboard />
    <section class="min-h-screen relative bg-[#F7F7F7] w-full overflow-hidden">

        
        <div class="absolute inset-0 z-0 pointer-events-none">
            
            <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full" />

            
            <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full" />

            
            <h1 class="absolute top-20 left-20 text-gray-600 opacity-5 text-9xl font-bold">REGIS</h1>
            <h1 class="absolute top-52 left-20 text-gray-600 opacity-5 text-9xl font-bold">TRASI</h1>
        </div>

        <div class="relative z-10">
            <div class="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="w-full max-w-3xl space-y-6 bg-white p-8 rounded-lg shadow-md">
                    <h2 class="text-2xl font-bold text-center text-gray-800">Formulir Pendaftaran</h2>

                    <form class="space-y-6">
                        <div>
                            <label class="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
                            <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                <input type="text" placeholder="Nama Lengkap"
                                    class="bg-transparent w-full focus:outline-none placeholder-white" />
                            </div>
                        </div>

                        <div>
                            <label class="block text-gray-700 font-medium mb-1">Email</label>
                            <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                <input type="email" placeholder="Email (harus valid)"
                                    class="bg-transparent w-full focus:outline-none placeholder-white" required />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Jenis Peserta</label>
                                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                    <input type="text" placeholder="Mitra"
                                        class="bg-transparent w-full focus:outline-none placeholder-white" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Cabang Olahraga</label>
                                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                    <input type="text" placeholder="Badminton"
                                        class="bg-transparent w-full focus:outline-none placeholder-white" />
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Aset</label>
                                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                    <input type="text" placeholder="Head Office PEP"
                                        class="bg-transparent w-full focus:outline-none placeholder-white" />
                                </div>
                            </div>

                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Upload Foto</label>
                                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                    <input type="file"
                                        class="text-white file:bg-white file:text-[#a60000] file:rounded-full file:px-4 file:py-1 file:border-0 file:mr-2 bg-transparent w-full focus:outline-none" />
                                </div>
                            </div>
                        </div>

                        
                        <div class="flex justify-center pt-6">
                            <button type="submit"
                                class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full shadow-md transition duration-300 ease-in-out">
                                SUBMIT
                            </button>
                        </div>
                    </form>
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