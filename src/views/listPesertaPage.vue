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

        <section class="min-h-screen relative bg-[#F7F7F7] px-8 py-6">
            <!-- BACKGROUND -->
            <div class="absolute inset-0 z-0 pointer-events-none">
                <!-- Gambar background atas -->
                <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full opacity-5" />

                <!-- Gambar background bawah -->
                <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full opacity-5" />

                <!-- Heading besar sebagai latar -->
                <h1 class="absolute top-20 left-20 text-gray-600 opacity-5 text-9xl font-bold">LIST</h1>
                <h1 class="absolute top-52 left-20 text-gray-600 opacity-5 text-9xl font-bold">PESERTA</h1>
            </div>

            <!-- KONTEN UTAMA -->
            <div class="relative z-10">
                <!-- Tombol kategori -->
                <div class="flex gap-4 justify-center mb-8 flex-wrap">
                    <button
                        v-for="kategori in ['Sepak Bola', 'Volley', 'Tenis Meja', 'Badminton', 'Lari', 'Senam', 'Tenis Lapangan', 'Basket', 'Esport']"
                        :key="kategori" @click="selectedOlahraga = kategori" :class="[
                            'px-4 py-2 rounded-full font-semibold',
                            selectedOlahraga === kategori
                                ? 'bg-[#D71E28] text-white'
                                : 'border border-[#D71E28] text-[#D71E28]'
                        ]">
                        {{ kategori }}
                    </button>
                </div>

                <!-- Tabel -->
                <div class="overflow-x-auto">
                    <table class="min-w-full table-auto bg-white rounded-xl shadow-md overflow-hidden">
                        <thead class="bg-[#D71E28] text-white text-sm">
                            <tr>
                                <th class="px-6 py-3 text-left font-semibold">No</th>
                                <th class="px-6 py-3 text-left font-semibold">Kontingen</th>
                                <th class="px-6 py-3 text-left font-semibold">Nama</th>
                                <th class="px-6 py-3 text-left font-semibold">Status</th>
                                <th class="px-6 py-3 text-left font-semibold">Pemain/Official</th>
                                <th class="px-6 py-3 text-left font-semibold">Hasil Verifikasi</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700 divide-y divide-gray-200 text-sm">
                            <template v-for="(kontingen, i) in filteredPeserta" :key="kontingen.kontingen">
                                <tr v-for="(pemain, j) in kontingen.peserta" :key="pemain.nama">
                                    <td class="px-6 py-4">{{ i + j + 1 }}</td>
                                    <td class="px-6 py-4" v-if="j === 0" :rowspan="kontingen.peserta.length">
                                        {{ kontingen.kontingen }}
                                    </td>
                                    <td class="px-6 py-4">{{ pemain.nama }}</td>
                                    <td class="px-6 py-4">{{ pemain.status }}</td>
                                    <td class="px-6 py-4">{{ pemain.peran }}</td>
                                    <td class="px-6 py-4">{{ pemain.verifikasi }}</td>
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