<template>
    <div class="min-h-screen bg-[#f7f7f7] relative">
        <NavbarDashboard />

        
        <div class="absolute top-10 left-4 md:left-20 z-0 pointer-events-none select-none hidden lg:block">
            <h1 class="text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-9xl font-bold pt-12">HOTEL</h1>
            <h1 class="text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-9xl font-bold">AKOMODASI</h1>
        </div>

        
        <section class="relative z-10 flex items-center justify-center py-10 md:py-20 px-4">
            <div class="bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl md:rounded-3xl shadow-xl p-3 sm:p-4 md:p-6 max-w-6xl w-full transition hover:scale-105 duration-300"
                v-intersect="'fade-slide-up'">
                <img src="/addinfo/header.webp" alt="header" class="w-full mb-4" />
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 text-center">PEMBAGIAN HOTEL</h2>
                <h3 class="text-lg sm:text-xl md:text-2xl font-bold text-red-600 mb-6 md:mb-8 text-center">MINI OLYMPIC PEP 2025</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
                    
                    <div class="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-4 sm:p-6 shadow-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-left'">
                        <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                            
                            <div class="w-full h-32 mb-4 rounded-lg overflow-hidden">
                                <img src="../assets/hotel/arista.webp" alt="Arista Hotel" 
                                     class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div class="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl">👑</span>
                            </div>
                            <h4 class="text-lg font-bold text-white mb-2">VIP (MANAGEMENT)</h4>
                            <h5 class="text-xl font-extrabold text-white bg-white/20 rounded-lg py-2">ARISTA HOTEL</h5>
                        </div>
                    </div>

                    
                    <div class="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-4 sm:p-6 shadow-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-up'">
                        <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                            
                            <div class="w-full h-32 mb-4 rounded-lg overflow-hidden">
                                <img src="../assets/hotel/thezuri.webp" alt="The Zuri Hotel" 
                                     class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div class="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl">🏢</span>
                            </div>
                            <h4 class="text-lg font-bold text-white mb-2">KANTOR PUSAT</h4>
                            <h4 class="text-sm font-bold text-white mb-2">REGIONAL II</h4>
                            <h5 class="text-xl font-extrabold text-white bg-white/20 rounded-lg py-2">THE ZURI</h5>
                        </div>
                    </div>
                    <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-4 sm:p-6 shadow-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-right'">
                        <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                            
                            <div class="w-full h-32 mb-4 rounded-lg overflow-hidden">
                                <img src="../assets/hotel/harper.webp" alt="Harper Hotel" 
                                     class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div class="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl">🏨</span>
                            </div>
                            <h4 class="text-lg font-bold text-white mb-2">ASSET 1</h4>
                            <h5 class="text-xl font-extrabold text-white bg-white/20 rounded-lg py-2">HARPER HOTEL</h5>
                        </div>
                    </div>

                    
                    <div class="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-4 sm:p-6 shadow-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-left'">
                        <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                            
                            <div class="w-full h-32 mb-4 rounded-lg overflow-hidden">
                                <img src="../assets/hotel/wyndham.webp" alt="Wyndham Hotel" 
                                     class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div class="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl">🏨</span>
                            </div>
                            <h4 class="text-lg font-bold text-white mb-2">ASSET 2</h4>
                            <h5 class="text-xl font-extrabold text-white bg-white/20 rounded-lg py-2">WYNDHAM HOTEL</h5>
                        </div>
                    </div>

                    
                    <div class="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-4 sm:p-6 shadow-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-up'">
                        <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                            
                            <div class="w-full h-32 mb-4 rounded-lg overflow-hidden">
                                <img src="../assets/hotel/aryaduta.webp" alt="Aryaduta Hotel" 
                                     class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div class="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl">🏨</span>
                            </div>
                            <h4 class="text-lg font-bold text-white mb-2">ASSET 3</h4>
                            <h5 class="text-xl font-extrabold text-white bg-white/20 rounded-lg py-2">ARYADUTA HOTEL</h5>
                        </div>
                    </div>

                    
                    <div class="bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-4 sm:p-6 shadow-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-right'">
                        <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                            
                            <div class="w-full h-32 mb-4 rounded-lg overflow-hidden">
                                <img src="../assets/hotel/novotel.webp" alt="Novotel Hotel" 
                                     class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div class="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl">🏨</span>
                            </div>
                            <h4 class="text-lg font-bold text-white mb-2">ASSET 4</h4>
                            <h5 class="text-xl font-extrabold text-white bg-white/20 rounded-lg py-2">NOVOTEL HOTEL</h5>
                        </div>
                    </div>

                    
                    <div class="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-4 sm:p-6 shadow-lg transform hover:scale-105 transition duration-300 md:col-span-2 lg:col-span-1"
                        v-intersect="'fade-up'">
                        <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                            
                            <div class="w-full h-32 mb-4 rounded-lg overflow-hidden">
                                <img src="../assets/hotel/excelton.webp" alt="Excelton Hotel" 
                                     class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div class="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span class="text-2xl">🏨</span>
                            </div>
                            <h4 class="text-lg font-bold text-white mb-2">ASSET 5</h4>
                            <h5 class="text-xl font-extrabold text-white bg-white/20 rounded-lg py-2">EXCELTON HOTEL</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section class="relative z-10 flex items-center justify-center py-10 md:py-20 px-4">
            <div class="absolute top-10 left-4 md:left-20 z-0 pointer-events-none select-none hidden lg:block">
                <h1 class="text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-9xl font-bold pt-12">BOOKING</h1>
                <h1 class="text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-9xl font-bold">INFO</h1>
            </div>
            <div class="bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl md:rounded-3xl shadow-xl p-3 sm:p-4 md:p-6 max-w-5xl w-full transition hover:scale-105 duration-300"
                v-intersect="'fade-slide-up'">
                <img src="/addinfo/header.webp" alt="header" class="w-full mb-4" />
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 text-center mb-6">INFORMASI PENTING</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    
                    <div class="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-4 sm:p-6"
                        v-intersect="'fade-left'">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                <span class="text-white text-sm font-bold">!</span>
                            </div>
                            <h3 class="text-lg font-bold text-red-700">AKOMODASI ARISTA ARYADUTA</h3>
                        </div>
                        <p class="text-sm text-red-600 leading-relaxed">
                            Panitia hanya membantu hold booking hingga <strong>25 Juli 2024</strong>
                        </p>
                    </div>

                    
                    <div class="bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-lg p-4 sm:p-6"
                        v-intersect="'fade-right'">
                        <div class="flex items-center mb-3">
                            <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                                <span class="text-white text-sm font-bold">⚠</span>
                            </div>
                            <h3 class="text-lg font-bold text-orange-700">NOVOTEL EXCELTON</h3>
                        </div>
                        <p class="text-sm text-orange-600 leading-relaxed">
                            Panitia tidak bertanggung jawab apabila hingga tanggal <strong>25 Juli 2024</strong> GS Aset belum menerbitkan GL
                        </p>
                    </div>
                </div>

                
                <div class="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 sm:p-6 mb-6"
                    v-intersect="'fade-up'">
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                            <span class="text-white text-lg">📅</span>
                        </div>
                        <h3 class="text-lg font-bold text-blue-700 ml-3">BATAS WAKTU BOOKING</h3>
                    </div>
                    <div class="text-center">
                        <div class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg">
                            25 JULI 2024
                        </div>
                        <p class="text-sm text-blue-600 mt-2">Pastikan booking dikonfirmasi sebelum tanggal ini</p>
                    </div>
                </div>

                
                <div class="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4"
                    v-intersect="'fade-up'">
                    <p class="text-sm text-gray-600 font-medium">
                        Purposed By: <strong class="text-gray-800">PT. Portal Indonesia Group</strong>
                    </p>
                </div>
            </div>
        </section>

        
        <section class="relative z-10 py-8 md:py-16">
            <div class="overflow-hidden whitespace-nowrap">
                <div class="inline-block animate-marquee space-x-8 sm:space-x-12 md:space-x-24 px-4">
                    <img src="/addinfo/asean.webp" alt="Sponsor 1" class="inline h-12 sm:h-14 md:h-16 object-contain" />
                    <img src="/addinfo/skkmigas.webp" alt="Sponsor 2" class="inline h-12 sm:h-14 md:h-16 object-contain" />
                    <img src="/addinfo/iog.webp" alt="Sponsor 3" class="inline h-12 sm:h-14 md:h-16 object-contain" />
                    <img src="/addinfo/pertaminaEP.webp" alt="Sponsor 4" class="inline h-14 sm:h-16 md:h-20 object-contain" />
                    <img src="/addinfo/pertamedika.webp" alt="Sponsor 5" class="inline h-12 sm:h-14 md:h-16 object-contain" />
                </div>
            </div>
        </section>

        
        <section class="relative z-10 flex items-center justify-center py-10 md:py-20 px-4">
            <div class="absolute top-10 left-4 md:left-20 z-0 pointer-events-none select-none hidden lg:block">
                <h1 class="text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-9xl font-bold pt-12">HOTEL</h1>
                <h1 class="text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-9xl font-bold">FACILITIES</h1>
            </div>
            <div class="bg-white/30 backdrop-blur-md border border-white/50 rounded-2xl md:rounded-3xl shadow-xl p-3 sm:p-4 md:p-6 max-w-5xl w-full transition hover:scale-105 duration-300"
                v-intersect="'fade-slide-up'">
                <img src="/addinfo/header.webp" alt="header" class="w-full mb-4" />
                <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 text-center mb-6">FASILITAS HOTEL</h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div class="text-center p-4 bg-white/50 rounded-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-left'">
                        <div class="text-3xl mb-2">🛏️</div>
                        <p class="text-sm font-semibold text-gray-700">Kamar Nyaman</p>
                    </div>
                    <div class="text-center p-4 bg-white/50 rounded-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-up'">
                        <div class="text-3xl mb-2">🍽️</div>
                        <p class="text-sm font-semibold text-gray-700">Restaurant</p>
                    </div>
                    <div class="text-center p-4 bg-white/50 rounded-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-up'">
                        <div class="text-3xl mb-2">📶</div>
                        <p class="text-sm font-semibold text-gray-700">WiFi Gratis</p>
                    </div>
                    <div class="text-center p-4 bg-white/50 rounded-lg transform hover:scale-105 transition duration-300"
                        v-intersect="'fade-right'">
                        <div class="text-3xl mb-2">🏊</div>
                        <p class="text-sm font-semibold text-gray-700">Kolam Renang</p>
                    </div>
                </div>

                <div class="text-xs sm:text-sm text-center text-orange-900 opacity-80 px-2 sm:px-4">
                    <p class="leading-relaxed">
                        Semua hotel yang disediakan telah memiliki fasilitas lengkap untuk mendukung kenyamanan peserta selama acara Mini Olympic PEP 2025.
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

@keyframes fadeUp {
    0% {
        opacity: 0;
        transform: translateY(40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
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

.fade-up {
    opacity: 0;
    animation: fadeUp 0.8s ease-out forwards;
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