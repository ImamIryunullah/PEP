<template>
    <div class="min-h-screen">
        <NavbarDashboard />
        <section class="relative py-16 px-4 bg-[#f5f5ed] overflow-hidden">
            <div class="absolute inset-0">
                <img src="/jadwaldanhasil/bg.png" alt="Background" class="w-full h-full object-cover opacity-5" />
            </div>

            <div class="max-w-7xl mx-auto overflow-x-auto z-10">
                <h2 class="text-3xl font-bold text-center mb-10 text-gray-800">Knockout Stage</h2>
                <div class="flex justify-center gap-12 text-sm text-center text-gray-800 min-w-[1000px]">
                    <div class="space-y-8">
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>3 <span class="text-green-600">FT</span> 1</div>
                        </div>
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>2 <span class="text-green-600">FT</span> 1</div>
                        </div>
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>1 <span class="text-green-600">FT</span> 1</div>
                        </div>
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>4 <span class="text-green-600">FT</span> 1</div>
                        </div>
                    </div>
                    <div class="space-y-24 pt-12">
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>2 <span class="text-green-600">FT</span> 2 (p)</div>
                        </div>
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>1 <span class="text-green-600">FT</span> 1 (e)</div>
                        </div>
                    </div>

                    <!-- Semi Final -->
                    <div class="space-y-36 pt-24">
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>3 <span class="text-green-600">FT</span> 0</div>
                        </div>
                    </div>

                    <!-- Final -->
                    <div class="space-y-8 pt-12">
                        <div class="bg-blue-600 text-white p-4 rounded shadow w-32 font-bold">
                            Final<br />
                            3 <span class="text-white">FT</span> 3 (4-2)
                        </div>
                        <div class="bg-green-500 text-white p-4 rounded shadow w-32 font-bold">
                            Peringkat 3<br />
                            2 <span class="text-white">FT</span> 1
                        </div>
                    </div>

                    <!-- Mirror Semi Final -->
                    <div class="space-y-36 pt-24">
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>2 <span class="text-green-600">FT</span> 0</div>
                        </div>
                    </div>

                    <!-- Mirror Quarter Final -->
                    <div class="space-y-24 pt-12">
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>1 <span class="text-green-600">FT</span> 2</div>
                        </div>
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>3 <span class="text-green-600">FT</span> 1</div>
                        </div>
                    </div>
                    <div class="space-y-8">
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>1 <span class="text-green-600">FT</span> 0</div>
                        </div>
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>0 <span class="text-green-600">FT</span> 0 (3-0)</div>
                        </div>
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>6 <span class="text-green-600">FT</span> 1</div>
                        </div>
                        <div class="bg-white p-4 rounded shadow w-32">
                            <div>1 <span class="text-green-600">FT</span> 1</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section class="bg-white py-12 px-4">
            <div class="max-w-6xl mx-auto">
                <div class="flex gap-4 justify-center mb-8">
                    <button class="bg-[#D71E28] text-white px-4 py-2 rounded-full font-semibold">Sepak Bola</button>
                    <button
                        class="border border-[#D71E28] text-[#D71E28] px-4 py-2 rounded-full font-semibold">Volley</button>
                    <button class="border border-[#D71E28] text-[#D71E28] px-4 py-2 rounded-full font-semibold">Tenis
                        Meja</button>
                    <button class="border border-[#D71E28] text-[#D71E28] px-4 py-2 rounded-full font-semibold">Tenis
                        Lapangan</button>
                    <button class="border border-[#D71E28] text-[#D71E28] px-4 py-2 rounded-full font-semibold">Esport</button>
                    <button class="border border-[#D71E28] text-[#D71E28] px-4 py-2 rounded-full font-semibold">Badminton</button>
                    <button class="border border-[#D71E28] text-[#D71E28] px-4 py-2 rounded-full font-semibold">Lari</button>
                    <button class="border border-[#D71E28] text-[#D71E28] px-4 py-2 rounded-full font-semibold">Senam</button>
                    <button class="border border-[#D71E28] text-[#D71E28] px-4 py-2 rounded-full font-semibold">Basket</button>
                </div>
                <div class="grid grid-cols-3 gap-8 justify-items-center">
                    <div class="space-y-6">
                        <div class="bg-white border rounded-lg shadow p-4 w-72">
                            <div class="text-sm text-gray-500 mb-1">Final · 18 Des 2022</div>
                            <div class="font-bold text-gray-800">TIM 2 <span
                                    class="float-right text-xl font-bold">3</span></div>
                            <div class="font-bold text-gray-800">TIM 1 <span
                                    class="float-right text-xl font-bold">3</span></div>
                        </div>
                        <div class="bg-white border rounded-lg shadow p-4 w-72">
                            <div class="text-sm text-gray-500 mb-1">Perebutan tempat ketiga · 17 Des 2022</div>
                            <div class="font-bold text-gray-800">TIM 3 <span
                                    class="float-right text-xl font-bold">2</span></div>
                            <div class="font-bold text-gray-800">TIM 4 <span
                                    class="float-right text-xl font-bold">1</span></div>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="bg-white border rounded-lg shadow p-4 w-72">
                            <div class="text-sm text-gray-500 mb-1">Final · 18 Des 2022</div>
                            <div class="font-bold text-gray-800">TIM 1 <span
                                    class="float-right text-xl font-bold">3</span></div>
                            <div class="font-bold text-gray-800">TIM 2 <span
                                    class="float-right text-xl font-bold">3</span></div>
                        </div>
                        <div class="bg-white border rounded-lg shadow p-4 w-72">
                            <div class="text-sm text-gray-500 mb-1">Perebutan tempat ketiga · 17 Des 2022</div>
                            <div class="font-bold text-gray-800">TIM 3 <span
                                    class="float-right text-xl font-bold">2</span></div>
                            <div class="font-bold text-gray-800">TIM 4 <span
                                    class="float-right text-xl font-bold">1</span></div>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="bg-white border rounded-lg shadow p-4 w-72">
                            <div class="text-sm text-gray-500 mb-1">Final · 18 Des 2022</div>
                            <div class="font-bold text-gray-800">TIM 1 <span
                                    class="float-right text-xl font-bold">3</span></div>
                            <div class="font-bold text-gray-800">TIM 2 <span
                                    class="float-right text-xl font-bold">3</span></div>
                        </div>
                        <div class="bg-white border rounded-lg shadow p-4 w-72">
                            <div class="text-sm text-gray-500 mb-1">Perebutan tempat ketiga · 17 Des 2022</div>
                            <div class="font-bold text-gray-800">TIM 3 <span
                                    class="float-right text-xl font-bold">2</span></div>
                            <div class="font-bold text-gray-800">TIM 4 <span
                                    class="float-right text-xl font-bold">1</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterDashboard />
    </div>
</template>
<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import FooterDashboard from '@/components/FooterDashboard.vue';
export default {
    components: {
        NavbarDashboard,
        FooterDashboard
    }
}
</script>
<style>

</style>