<template>
    <div class="min-h-screen bg-[#F7F7F7]">
        <NavbarDashboard />
        <section
            class="min-h-screen relative bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15)_0%,_rgba(0,0,0,1)_45%)]">
            <img src="/listpeserta/atas.png" class="absolute bottom-[60%] right-0 w-[20%] pointer-events-none"
                alt="border1" />
            <img src="/listpeserta/bawah.png" class="absolute bottom-[20%] right-0 w-[20%] pointer-events-none"
                alt="border2" />
            <img src="/listpeserta/awan.png" alt="Gambar bawah"
                class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-[20%]" />

            <img :src="getOlahragaImage(selectedOlahraga)"
                class="absolute top-[10%] w-[400px] left-[10%] hidden md:block float delay-2" alt="Maskot" />

            <h1 class="absolute top-[30%] left-0 text-white opacity-5 text-8xl font-bold ml-16 z-0">{{
                selectedOlahraga.toUpperCase() }}</h1>

            <h1 class="absolute top-[40%] right-0 text-white text-8xl font-bold mr-16">LIST PESERTA</h1>

            <img src="/bunga/hiasan.png" alt="hiasan"
                class="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-[150px] py-12 z-10" />
        </section>
        <section class="min-h-screen relative bg-[#F7F7F7] px-8 py-6 font-sans">
            <!-- Background aesthetic -->
            <div class="absolute inset-0 z-0 pointer-events-none">
                <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full opacity-5" />
                <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full opacity-5" />
                <h1 class="absolute top-20 left-20 text-gray-600 opacity-5 text-9xl font-black">LIST</h1>
                <h1 class="absolute top-52 left-20 text-gray-600 opacity-5 text-9xl font-black">PESERTA</h1>
            </div>

            <div class="relative z-10 space-y-8 animate-fade-in">
                <!-- Kategori button group -->
                <div class="flex gap-3 justify-center flex-wrap">
                    <button
                        v-for="kategori in ['Sepak Bola', 'Volley', 'Tenis Meja', 'Badminton', 'Lari', 'Senam', 'Tenis Lapangan', 'Basket', 'Esport']"
                        :key="kategori" @click="selectedOlahraga = kategori" :class="[
                            'px-5 py-2 rounded-full font-medium transition duration-300 shadow-sm',
                            selectedOlahraga === kategori
                                ? 'bg-[#D71E28] text-white shadow-md scale-105'
                                : 'bg-white border border-[#D71E28] text-[#D71E28] hover:bg-[#D71E28] hover:text-white'
                        ]">
                        {{ kategori }}
                    </button>
                </div>

                <!-- Table -->
                <div class="overflow-x-auto animate-fade-in">
                    <table class="min-w-full bg-white rounded-xl shadow-lg overflow-hidden text-sm">
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
                                    class="hover:bg-gray-100 transition duration-200">
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
                                            'text-green-600 font-bold': pemain.verifikasi === 'Terverifikasi',
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
                'Volley': '/assets/voli.png',
                'Sepak Bola': '/assets/bola.png',
                'Tenis Meja': '/assets/tesnimeja.png',
                'Badminton': '/assets/badminton.png',
                'Lari': '/assets/lari.png',
                'Senam': '/assets/senam.png',
                'Tenis Lapangan': '/assets/tenislap.png',
                'Basket': '/assets/basket.png',
                'Esport': '/assets/esport.png'
            };
            return imgMap[olahraga] || '';
        }
    }

}

</script>

<style scoped>
.animate-fade-in {
  opacity: 0;
  transform: translateY(0.75rem); /* translate-y-3 */
  transition: all 0.5s ease-out;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
