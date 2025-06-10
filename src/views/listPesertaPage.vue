<template>
    <div class="min-h-screen bg-[#F7F7F7]">
        <NavbarDashboard />
        <section
            class="min-h-[60vh] sm:min-h-screen relative bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15)_0%,_rgba(0,0,0,1)_45%)] overflow-hidden">
            
            <img src="/listpeserta/atas.png" loading="lazy"
                class="absolute bottom-[60%] right-0 w-[15%] sm:w-[20%] pointer-events-none hidden sm:block"
                alt="border1" />
            <img src="/listpeserta/bawah.png" loading="lazy"
                class="absolute bottom-[20%] right-0 w-[15%] sm:w-[20%] pointer-events-none hidden sm:block"
                alt="border2" />
            <img src="/listpeserta/awan.png" alt="Gambar bawah" loading="lazy"
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[15%] sm:h-[20%]" />
            
            <img :src="getOlahragaImage(selectedOlahraga)"
                class="absolute top-[5%] sm:top-[10%] w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] left-[5%] sm:left-[10%] float delay-2 opacity-70 sm:opacity-80 lg:opacity-100 z-5"
                alt="Maskot" />
            <h1
                class="absolute top-[20%] sm:top-[30%] left-0 text-white opacity-5 text-4xl sm:text-6xl lg:text-8xl font-bold ml-4 sm:ml-8 lg:ml-16 z-0 hidden sm:block">
                {{ selectedOlahraga.toUpperCase() }}
            </h1>  
            <div
                class="absolute inset-0 flex flex-col justify-center items-center sm:items-end sm:justify-center text-center sm:text-right px-4 sm:px-8 lg:px-16">
                <h1 class="text-white text-3xl sm:text-5xl lg:text-8xl font-bold leading-tight">
                    LIST PESERTA
                </h1>
                <p class="text-white/80 text-sm sm:text-base mt-2 sm:mt-4 max-w-md sm:hidden">
                    Daftar peserta {{ selectedOlahraga }}
                </p>
            </div>
            <img src="/bunga/hiasan.png" alt="hiasan"
                class="absolute bottom-[10%] sm:bottom-[20%] left-1/2 transform -translate-x-1/2 w-[100px] sm:w-[150px] py-6 sm:py-12 z-10" />
        </section>

        <section class="min-h-screen relative bg-[#F7F7F7] px-4 sm:px-6 lg:px-8 py-6 font-sans">
            
            <div class="absolute inset-0 z-0 pointer-events-none">
                <img src="/registrasi/hijau.png" alt=""
                    class="absolute top-0 left-0 w-full opacity-5 hidden lg:block" />
                <img src="/registrasi/biru.png" alt=""
                    class="absolute bottom-0 right-0 w-full opacity-5 hidden lg:block" />
                <h1
                    class="absolute top-10 sm:top-20 left-4 sm:left-20 text-gray-600 opacity-5 text-4xl sm:text-7xl lg:text-9xl font-black hidden sm:block">
                    LIST</h1>
                <h1
                    class="absolute top-20 sm:top-52 left-4 sm:left-20 text-gray-600 opacity-5 text-4xl sm:text-7xl lg:text-9xl font-black hidden sm:block">
                    PESERTA</h1>
            </div>

            <div class="relative z-10 space-y-6 sm:space-y-8 animate-fade-in animate-stagger">
                
                <div class="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 justify-center">
                    <button
                        v-for="kategori in ['Sepak Bola', 'Volley', 'Tenis Meja', 'Badminton', 'Lari', 'Senam', 'Tenis Lapangan', 'Basket', 'Esport']"
                        :key="kategori" @click="selectedOlahraga = kategori" :class="[
                            'px-3 sm:px-5 py-2 rounded-lg font-medium transition duration-300 shadow-sm text-xs sm:text-sm',
                            selectedOlahraga === kategori
                                ? 'bg-[#D71E28] text-white shadow-md scale-105'
                                : 'bg-white border border-[#D71E28] text-[#D71E28] hover:bg-[#D71E28] hover:text-white'
                        ]">
                        {{ kategori }}
                    </button>
                </div>

                
                <div class="block lg:hidden space-y-4">
                    <template v-for="(kontingen, i) in filteredPeserta" :key="kontingen.kontingen">
                        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div class="bg-[#D71E28] text-white px-4 py-3">
                                <h3 class="font-bold text-lg">{{ kontingen.kontingen }}</h3>
                            </div>
                            <div class="divide-y divide-gray-200">
                                <div v-for="(pemain, j) in kontingen.peserta" :key="pemain.nama"
                                    class="p-4 hover:bg-gray-50 transition duration-200">
                                    <div class="space-y-2">
                                        <div class="flex justify-between items-start">
                                            <h4 class="font-semibold text-gray-800">{{ pemain.nama }}</h4>
                                            <span class="text-xs bg-gray-100 px-2 py-1 rounded">
                                                #{{ i + j + 1 }}
                                            </span>
                                        </div>
                                        <div class="grid grid-cols-2 gap-2 text-sm">
                                            <div>
                                                <span class="text-gray-500">Status:</span>
                                                <span class="ml-1 font-medium">{{ pemain.status }}</span>
                                            </div>
                                            <div>
                                                <span class="text-gray-500">Peran:</span>
                                                <span class="ml-1 font-medium">{{ pemain.peran }}</span>
                                            </div>
                                        </div>
                                        <div class="flex justify-between items-center pt-2">
                                            <span class="text-sm text-gray-500">Verifikasi:</span>
                                            <span :class="{
                                                'text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full text-xs': pemain.verifikasi === 'Terverifikasi' || pemain.verifikasi === 'Lulus',
                                                'text-yellow-600 bg-yellow-50 px-2 py-1 rounded-full text-xs': pemain.verifikasi === 'Menunggu',
                                                'text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-full text-xs': pemain.verifikasi === 'Ditolak'
                                            }">
                                                {{ pemain.verifikasi }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                
                <div class="hidden lg:block overflow-x-auto">
                    <table
                        class="min-w-full bg-white rounded-xl shadow-xl overflow-hidden text-sm transform transition duration-500 hover:scale-[1.01]">
                        <thead class="bg-[#D71E28] text-white uppercase text-xs">
                            <tr>
                                <th class="px-6 py-4 text-left font-bold">No</th>
                                <th class="px-6 py-4 text-left font-bold">Kontingen</th>
                                <th class="px-6 py-4 text-left font-bold">Nama</th>
                                <th class="px-6 py-4 text-left font-bold">Status</th>
                                <th class="px-6 py-4 text-left font-bold">Pemain/Official</th>
                                <th class="px-6 py-4 text-left font-bold">Verifikasi</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-800 divide-y divide-gray-200">
                            <template v-for="(kontingen, i) in filteredPeserta" :key="kontingen.kontingen">
                                <tr v-for="(pemain, j) in kontingen.peserta" :key="pemain.nama"
                                    class="hover:bg-gray-100 transition duration-200 animate-fade-in">
                                    <td class="px-6 py-4 whitespace-nowrap">{{ i + j + 1 }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap" v-if="j === 0"
                                        :rowspan="kontingen.peserta.length">
                                        <span class="font-semibold">{{ kontingen.kontingen }}</span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ pemain.nama }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ pemain.status }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{ pemain.peran }}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <span :class="{
                                            'text-green-600 font-bold': pemain.verifikasi === 'Terverifikasi' || pemain.verifikasi === 'Lulus',
                                            'text-yellow-600': pemain.verifikasi === 'Menunggu',
                                            'text-red-600 font-semibold': pemain.verifikasi === 'Ditolak'
                                        }">
                                            {{ pemain.verifikasi }}
                                        </span>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>

                
                <div v-if="filteredPeserta.length === 0" class="text-center py-12">
                    <div class="text-gray-400 text-6xl mb-4">🏆</div>
                    <h3 class="text-lg font-semibold text-gray-600 mb-2">Belum Ada Peserta</h3>
                    <p class="text-gray-500">Peserta untuk kategori {{ selectedOlahraga }} belum tersedia.</p>
                </div>
            </div>
        </section>

        <FooterDashboard />
    </div>
</template>

<script>
import FooterDashboard from '@/components/FooterDashboard.vue';
import NavbarDashboard from '@/components/NavbarDashboard.vue';


export default {
    components: {
        NavbarDashboard,
        FooterDashboard
    },
    data() {
        return {

            selectedOlahraga: 'Volley',
            pesertaData: [
                {
                    olahraga: 'Volley',
                    kontingen: 'Asset 1',
                    peserta: [
                        { nama: 'Dimas Realdi', status: 'Pekerja', peran: 'Pemain', verifikasi: 'Lulus' },
                        { nama: 'Ahmad Yusuf', status: 'Pekerja', peran: 'Pemain', verifikasi: 'Lulus' }
                    ]
                },
                {
                    olahraga: 'Sepak Bola',
                    kontingen: 'Asset 2',
                    peserta: [
                        { nama: 'Budi Santoso', status: 'Pekerja', peran: 'Official', verifikasi: 'Lulus' }
                    ]
                }
            ]
        };
    },
    computed: {
        filteredPeserta() {
            return this.pesertaData.filter(p => p.olahraga === this.selectedOlahraga);
        }
    },
    methods: {
        getOlahragaImage(olahraga) {
            const imgMap = {
                'Volley': 'voli.png',
                'Sepak Bola': 'bola.png',
                'Tenis Meja': 'tenismeja.png',
                'Badminton': 'bulutangkis.png',
                'Lari': 'lari.png',
                'Senam': 'senam.png',
                'Tenis Lapangan': 'tenislap.png',
                'Basket': 'basket.png',
                'Esport': 'esport.png'
            };

            const filename = imgMap[olahraga];
            return filename ? require(`@/assets/kategori/${filename}`) : '';
        }
    }

}
</script>

<style scoped>
/* Animations */
.animate-fade-in {
    opacity: 0;
    transform: translateY(0.75rem);
    transition: all 0.5s ease-out;
    animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeInUp 0.8s ease-out both;
}

.animate-stagger>* {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
}

.animate-stagger>*:nth-child(1) {
    animation-delay: 0.1s;
}

.animate-stagger>*:nth-child(2) {
    animation-delay: 0.2s;
}

.animate-stagger>*:nth-child(3) {
    animation-delay: 0.3s;
}

/* Float animation for sport image */
@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

.float {
    animation: float 6s ease-in-out infinite;
}

.delay-2 {
    animation-delay: 2s;
}

/* Responsive utilities */
@media (max-width: 640px) {
    .grid-cols-2>button {
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

/* Smooth transitions */
* {
    transition-property: transform, opacity, background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>