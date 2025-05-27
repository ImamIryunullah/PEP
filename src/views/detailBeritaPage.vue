<template>
    <NavbarDashboard />
    <section class="min-h-screen bg-gray-100 flex items-start justify-center gap-6 p-6">
        <!-- Panel Berita -->
        <aside class="bg-white rounded-xl shadow-md w-48">
            <div class="bg-red-600 text-white text-center py-2 rounded-t-xl font-semibold">Berita Lainnya</div>
            <ul class="divide-y divide-gray-200 p-4 text-sm">
                <li class="py-2 font-semibold text-gray-700">1. Judul berita utama yang lebih panjang dan bold</li>
                <li class="py-2 text-gray-600">2. Lorem ipsum dolor sit amet</li>
                <li class="py-2 text-gray-600">3. Lorem ipsum dolor sit amet</li>
                <li class="py-2 text-gray-600">4. Lorem ipsum dolor sit amet</li>
                <li class="py-2 text-gray-600">5. Lorem ipsum dolor sit amet</li>
                <li class="py-2 text-gray-600">6. Lorem ipsum dolor sit amet</li>
                <li class="py-2 text-gray-600">7. Lorem ipsum dolor sit amet</li>
            </ul>
        </aside>

        <!-- Konten Utama -->
        <div class="relative bg-white rounded-xl shadow-lg w-[750px] min-h-[80vh] border-2 border-purple-100">
            <!-- Ornamen di sudut-sudut -->
            <img src="/path/to/corner-top-left.png" alt="corner" class="absolute top-0 left-0 w-12" />
            <img src="/path/to/corner-top-right.png" alt="corner" class="absolute top-0 right-0 w-12" />
            <img src="/path/to/corner-bottom-left.png" alt="corner" class="absolute bottom-0 left-0 w-12" />
            <img src="/path/to/corner-bottom-right.png" alt="corner" class="absolute bottom-0 right-0 w-12" />

            <!-- Konten -->
            <div class="p-8">
                <p></p>
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


<style></style>