<template>
    <div class="min-h-screen bg-[#f5f3ef]">
        <NavbarDashboard />
        <section class="relative text-center w-full">
            <div class="flex items-center justify-start gap-4 mb-6">
                <div class="w-20 h-20 p-2 rounded-full border-4 border-orange-600 flex items-center justify-center">
                    <img src="/logo-mini-olympic-2025.png" alt="Logo" class="w-16 h-16 object-contain rounded-full" />
                </div>

                <h2 class="text-3xl sm:text-4xl font-bold text-orange-600">About Us</h2>
            </div>
            <div class="bg-white max-w-7xl mx-auto rounded-xl p-6 sm:p-10 shadow-md border border-gray-200">
                <!-- Tabs -->
                <div class="flex justify-center gap-4 mb-6">
                    <button v-for="tab in ['Deskripsi', 'Visi', 'Misi']" :key="tab" @click="selectedTab = tab" :class="[
                        'px-5 py-2 rounded-full font-semibold border transition',
                        selectedTab === tab
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'text-orange-500 border-orange-500 hover:bg-orange-100'
                    ]">
                        {{ tab }}
                    </button>
                </div>
                <p class="text-justify text-sm sm:text-base text-gray-700">
                    {{ tabContent[selectedTab] }}
                </p>
                <div class="mt-6">
                    <img src="/bunga/hiasan2.png" class="mx-auto w-32" alt="Motif" />
                </div>
            </div>
            <div class="mt-10 flex justify-center gap-6 items-center">
                <img src="/bunga/Group.svg" class="h-14 hidden sm:block" />

                <!-- Bungkus ikon dengan latar belakang coklat -->
                <div class="flex gap-4 items-center bg-[#8B4513] px-5 py-2 rounded-full">
                    <div class="bg-white rounded-full p-3">
                        <i class="fab fa-instagram text-orange-500 text-sm"></i>
                    </div>
                    <div class="bg-white rounded-full p-3">
                        <i class="fab fa-youtube text-orange-500 text-sm"></i>
                    </div>
                    <div class="bg-white rounded-full p-3">
                        <i class="fab fa-tiktok text-orange-500 text-sm"></i>
                    </div>
                    <div class="bg-white rounded-full p-3">
                        <i class="fas fa-envelope text-orange-500 text-sm"></i>
                    </div>
                </div>

                <img src="/bunga/Group2.svg" class="h-14 rotate-180 hidden sm:block" />
            </div>


        </section>

    </div>
    <FooterDahboard />
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import FooterDahboard from '@/components/FooterDashboard.vue'

export default {
    name: "MiniOlympicPage",
    components: {
        NavbarDashboard,
        FooterDahboard
    },
    data() {
        return {
            selectedTab: 'Deskripsi',
            tabContent: {
                Deskripsi: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dapibus dui ultrices, leo class neque fames dis senectus malesuada viverra litora. Lacinia leo ultrices justo dignissim id neque, nisi volutpat orci class proin, ornare integer etiam maecenas varius. Parturient pellentesque tempor ullamcorper platea cursus nunc turpis auctor, ut elementum aenean faucibus ultrices nam tellus bibendum, quam mattis dapibus senectus hac sollicitudin nisi varius, augue etiam placerat sociis commodo non risus. Tempus feugiat mauris hac varius magnis duis massa, aenean suspendisse eros neque bibendum orci, ante commodo proin cum natoque semper. Sociis tristique urna vestibulum taciti gravida nisi fusce sed, placerat porttitor consequat dignissim dictum aliquam sagittis. Risus fermentum nam hendrerit lectus blandit ultrices platea ut, vestibulum conubia quis libero feugiat vivamus proin, scelerisque nullam parturient tincidunt gravida condimentum ligula. ',
                Visi: 'Visi kami adalah...',
                Misi: 'Misi kami adalah...',
            }
        }
    }
}
</script>
