<template>
    <NavbarDashboard />
    <section class="bg-[#f7f7f7] py-16 px-6">
 
        <div class="text-center mb-10 relative">
 
            <h1 class="text-9xl text-gray-200 font-bold absolute inset-0 top-0 z-0">BERITA</h1>
            <img src="/path/to/logo-api.png" alt="Api" class="mx-auto w-20 relative z-10 mb-2" />

            <h2 class="text-3xl font-bold text-black relative z-10">BERITA</h2>
            <h3 class="text-2xl font-semibold text-gray-700 relative z-10">MINI OLYMPIC</h3>
        </div>

        <div class=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-lg shadow-md border border-red-500 overflow-hidden">
                <div class="relative">
                    <img src="/berita/berita.jpg" alt="Twibbon" class="w-full h-48 object-cover" />
                    <div class="absolute bottom-0 text-white px-4 py-2">
                        <h4 class="font-bold">Twibbon</h4>
                        <span class="text-sm">12 Juli 2024</span>
                    </div>
                </div>
                <div class="p-4 bg-red-600 text-white text-sm h-[120px] flex flex-col justify-between">
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button
                        class="bg-white text-red-600 font-semibold text-sm mt-2 px-4 py-1 rounded hover:bg-gray-200 self-end">
                        See More
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md border border-red-500 overflow-hidden">
                <div class="relative">
                    <img src="/berita/berita.jpg" alt="Twibbon" class="w-full h-48 object-cover" />
                    <div class="absolute bottom-0 text-white px-4 py-2">
                        <h4 class="font-bold">Twibbon</h4>
                        <span class="text-sm">12 Juli 2024</span>
                    </div>
                </div>
                <div class="p-4 bg-red-600 text-white text-sm h-[120px] flex flex-col justify-between">
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button
                        class="bg-white text-red-600 font-semibold text-sm mt-2 px-4 py-1 rounded hover:bg-gray-200 self-end">
                        See More
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md border border-red-500 overflow-hidden">
                <div class="relative">
                    <img src="/berita/berita.jpg" alt="Twibbon" class="w-full h-48 object-cover" />
                    <div class="absolute bottom-0 text-white px-4 py-2">
                        <h4 class="font-bold">Twibbon</h4>
                        <span class="text-sm">12 Juli 2024</span>
                    </div>
                </div>
                <div class="p-4 bg-red-600 text-white text-sm h-[120px] flex flex-col justify-between">
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button
                        class="bg-white text-red-600 font-semibold text-sm mt-2 px-4 py-1 rounded hover:bg-gray-200 self-end">
                        See More
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md border border-red-500 overflow-hidden">
                <div class="relative">
                    <img src="/berita/berita.jpg" alt="Twibbon" class="w-full h-48 object-cover" />
                    <div class="absolute bottom-0 text-white px-4 py-2">
                        <h4 class="font-bold">Twibbon</h4>
                        <span class="text-sm">12 Juli 2024</span>
                    </div>
                </div>
                <div class="p-4 bg-red-600 text-white text-sm h-[120px] flex flex-col justify-between">
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button
                        class="bg-white text-red-600 font-semibold text-sm mt-2 px-4 py-1 rounded hover:bg-gray-200 self-end">
                        See More
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md border border-red-500 overflow-hidden">
                <div class="relative">
                    <img src="/berita/berita.jpg" alt="Twibbon" class="w-full h-48 object-cover" />
                    <div class="absolute bottom-0 text-white px-4 py-2">
                        <h4 class="font-bold">Twibbon</h4>
                        <span class="text-sm">12 Juli 2024</span>
                    </div>
                </div>
                <div class="p-4 bg-red-600 text-white text-sm h-[120px] flex flex-col justify-between">
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button
                        class="bg-white text-red-600 font-semibold text-sm mt-2 px-4 py-1 rounded hover:bg-gray-200 self-end">
                        See More
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md border border-red-500 overflow-hidden">
                <div class="relative">
                    <img src="/berita/berita.jpg" alt="Twibbon" class="w-full h-48 object-cover" />
                    <div class="absolute bottom-0 text-white px-4 py-2">
                        <h4 class="font-bold">Twibbon</h4>
                        <span class="text-sm">12 Juli 2024</span>
                    </div>
                </div>
                <div class="p-4 bg-red-600 text-white text-sm h-[120px] flex flex-col justify-between">
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button
                        class="bg-white text-red-600 font-semibold text-sm mt-2 px-4 py-1 rounded hover:bg-gray-200 self-end">
                        See More
                    </button>
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

</style>