<template>
    <div class="min-h-screen">
        <NavbarDashboard />
        
        <!-- Knockout Stage Section -->
        <section class="relative py-8 md:py-16 px-4 bg-[#f5f5ed] overflow-hidden">
            <div class="absolute inset-0">
                <img src="/jadwaldanhasil/bg.webp" alt="Background" class="w-full h-full object-cover opacity-5" />
            </div>
            <div class="max-w-7xl mx-auto z-10 relative">
                <h2 class="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-gray-800">Knockout Stage</h2>
                
                <!-- Mobile Tournament Bracket -->
                <div class="block lg:hidden">
                    <div class="space-y-6">
                        <!-- Round of 16 -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4 text-gray-700 text-center">Round of 16</h3>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">3 <span class="text-green-600">FT</span> 1</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">1 <span class="text-green-600">FT</span> 0</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">2 <span class="text-green-600">FT</span> 1</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">0 <span class="text-green-600">FT</span> 0 (3-0)</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">1 <span class="text-green-600">FT</span> 1</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">6 <span class="text-green-600">FT</span> 1</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">4 <span class="text-green-600">FT</span> 1</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">1 <span class="text-green-600">FT</span> 1</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Quarter Finals -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4 text-gray-700 text-center">Quarter Finals</h3>
                            <div class="grid grid-cols-2 gap-3 max-w-md mx-auto">
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">2 <span class="text-green-600">FT</span> 2 (p)</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">1 <span class="text-green-600">FT</span> 2</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">1 <span class="text-green-600">FT</span> 1 (e)</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">3 <span class="text-green-600">FT</span> 1</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Semi Finals -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4 text-gray-700 text-center">Semi Finals</h3>
                            <div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">3 <span class="text-green-600">FT</span> 0</div>
                                </div>
                                <div class="bg-white p-3 rounded shadow text-center">
                                    <div class="text-sm">2 <span class="text-green-600">FT</span> 0</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Finals -->
                        <div>
                            <h3 class="text-lg font-semibold mb-4 text-gray-700 text-center">Finals</h3>
                            <div class="space-y-3 max-w-xs mx-auto">
                                <div class="bg-blue-600 text-white p-4 rounded shadow text-center font-bold">
                                    <div class="text-xs mb-1">Final</div>
                                    <div class="text-sm">3 <span class="text-white">FT</span> 3 (4-2)</div>
                                </div>
                                <div class="bg-green-500 text-white p-4 rounded shadow text-center font-bold">
                                    <div class="text-xs mb-1">Peringkat 3</div>
                                    <div class="text-sm">2 <span class="text-white">FT</span> 1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Desktop Tournament Bracket -->
                <div class="hidden lg:block overflow-x-auto">
                    <div class="flex justify-center gap-8 xl:gap-12 text-sm text-center text-gray-800 min-w-[900px]">
                        <!-- Round of 16 Left -->
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
                        
                        <!-- Quarter Finals Left -->
                        <div class="space-y-16 md:space-y-24 pt-12">
                            <div class="bg-white p-4 rounded shadow w-32">
                                <div>2 <span class="text-green-600">FT</span> 2 (p)</div>
                            </div>
                            <div class="bg-white p-4 rounded shadow w-32">
                                <div>1 <span class="text-green-600">FT</span> 1 (e)</div>
                            </div>
                        </div>
                        
                        <!-- Semi Finals Left -->
                        <div class="space-y-24 md:space-y-36 pt-24">
                            <div class="bg-white p-4 rounded shadow w-32">
                                <div>3 <span class="text-green-600">FT</span> 0</div>
                            </div>
                        </div>
                        
                        <!-- Finals -->
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
                        
                        <!-- Semi Finals Right -->
                        <div class="space-y-24 md:space-y-36 pt-24">
                            <div class="bg-white p-4 rounded shadow w-32">
                                <div>2 <span class="text-green-600">FT</span> 0</div>
                            </div>
                        </div>
                        
                        <!-- Quarter Finals Right -->
                        <div class="space-y-16 md:space-y-24 pt-12">
                            <div class="bg-white p-4 rounded shadow w-32">
                                <div>1 <span class="text-green-600">FT</span> 2</div>
                            </div>
                            <div class="bg-white p-4 rounded shadow w-32">
                                <div>3 <span class="text-green-600">FT</span> 1</div>
                            </div>
                        </div>
                        
                        <!-- Round of 16 Right -->
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
            </div>
        </section>
        
        <!-- Results Section -->
        <section class="bg-[#F7f7f7] py-8 md:py-12 px-4 relative">
            <h1 class="absolute top-[15%] md:top-[20%] left-1/2 transform -translate-x-1/2 text-gray-600 opacity-5 text-6xl md:text-9xl font-bold whitespace-nowrap">
                RESULT
            </h1>
            <div class="max-w-6xl mx-auto relative z-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                    <!-- Result Card 1 -->
                    <div class="space-y-6 w-full max-w-sm">
                        <div class="bg-white border rounded-lg shadow p-4">
                            <div class="text-xs md:text-sm text-gray-500 mb-2">Final · 18 Des 2022</div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 2</span>
                                <span class="text-lg md:text-xl font-bold">3</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 1</span>
                                <span class="text-lg md:text-xl font-bold">3</span>
                            </div>
                        </div>
                        <div class="bg-white border rounded-lg shadow p-4">
                            <div class="text-xs md:text-sm text-gray-500 mb-2">Perebutan tempat ketiga · 17 Des 2022</div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 3</span>
                                <span class="text-lg md:text-xl font-bold">2</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 4</span>
                                <span class="text-lg md:text-xl font-bold">1</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Result Card 2 -->
                    <div class="space-y-6 w-full max-w-sm">
                        <div class="bg-white border rounded-lg shadow p-4">
                            <div class="text-xs md:text-sm text-gray-500 mb-2">Final · 18 Des 2022</div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 1</span>
                                <span class="text-lg md:text-xl font-bold">3</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 2</span>
                                <span class="text-lg md:text-xl font-bold">3</span>
                            </div>
                        </div>
                        <div class="bg-white border rounded-lg shadow p-4">
                            <div class="text-xs md:text-sm text-gray-500 mb-2">Perebutan tempat ketiga · 17 Des 2022</div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 3</span>
                                <span class="text-lg md:text-xl font-bold">2</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 4</span>
                                <span class="text-lg md:text-xl font-bold">1</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Result Card 3 -->
                    <div class="space-y-6 w-full max-w-sm md:col-span-2 lg:col-span-1">
                        <div class="bg-white border rounded-lg shadow p-4">
                            <div class="text-xs md:text-sm text-gray-500 mb-2">Final · 18 Des 2022</div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 1</span>
                                <span class="text-lg md:text-xl font-bold">3</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 2</span>
                                <span class="text-lg md:text-xl font-bold">3</span>
                            </div>
                        </div>
                        <div class="bg-white border rounded-lg shadow p-4">
                            <div class="text-xs md:text-sm text-gray-500 mb-2">Perebutan tempat ketiga · 17 Des 2022</div>
                            <div class="flex justify-between items-center mb-1">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 3</span>
                                <span class="text-lg md:text-xl font-bold">2</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-gray-800 text-sm md:text-base">TIM 4</span>
                                <span class="text-lg md:text-xl font-bold">1</span>
                            </div>
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
/* Optional: Add smooth scrolling for horizontal scroll on mobile if needed */
.overflow-x-auto {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 #f7fafc;
}

.overflow-x-auto::-webkit-scrollbar {
    height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
    background: #f7fafc;
    border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: #a0aec0;
}
</style>