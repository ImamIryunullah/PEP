    <template>
        <NavbarDashboard />
        <section class="bg-[#f7f7f7] min-h-screen pt-8 md:pt-10 fade-in-up font-sans">
            <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img src="/registrasi/hijau.png" alt=""
                    class="absolute top-0 left-0 w-full h-full sm:w-3/4 md:w-full opacity-5 object-cover" />
                <img src="/registrasi/biru.png" alt=""
                    class="absolute bottom-0 right-0 w-full h-full sm:w-3/4 md:w-full opacity-5 object-cover" />
            </div>
            <div class="relative text-center mb-8 sm:mb-12 md:mb-16 px-4">
                <h1
                    class="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] leading-none text-gray-200 font-extrabold absolute inset-0 top-0 z-0 select-none">
                    BERITA
                </h1>
                <div class="relative z-20">
                    <h3
                        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-700 py-8 sm:py-10 md:py-12 drop-shadow-md">
                        MINI OLYMPIC
                    </h3>
                </div>
                <div class="relative z-20">
                    <img src="/berita/api.png" alt="Api"
                        class="mx-auto w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 mt-[-12px] sm:mt-[-14px] md:mt-[-16px] fade-in-up"
                        style="animation-delay: 0.3s" />
                </div>
            </div>

            <div v-if="isLoading" class="bg-white shadow-xl rounded-xl p-8 max-w-7xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto">
                <div class="text-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p class="text-gray-600">Memuat berita...</p>
                </div>
            </div>

            <div v-else-if="error" class="bg-white shadow-xl rounded-xl p-8 max-w-7xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto">
                <div class="text-center">
                    <div class="text-red-500 mb-4">
                        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Gagal Memuat Berita</h3>
                    <p class="text-gray-600 mb-4">{{ error }}</p>
                    <button @click="fetchBerita" 
                            class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors">
                        Coba Lagi
                    </button>
                </div>
            </div>

            
            <div v-else class="bg-white shadow-xl rounded-xl p-4 sm:p-6 md:p-8 max-w-7xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto fade-in-up"
                style="animation-delay: 0.5s">

                <div class="mb-8 sm:mb-10 md:mb-12 text-left">
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">Berita Terbaru</h2>
                    <p class="text-sm sm:text-base text-gray-500">Kumpulan informasi terkini seputar Mini Olympic PEP 2025.</p>
                    <p class="text-xs text-gray-400 mt-1">{{ berita.length }} berita tersedia</p>
                </div>

                
                <div v-if="berita.length === 0" class="text-center py-12">
                    <div class="text-gray-400 mb-4">
                        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-600 mb-2">Belum Ada Berita</h3>
                    <p class="text-gray-500">Berita akan ditampilkan di sini setelah admin menambahkannya.</p>
                </div>

                
                <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    <div v-for="(item, index) in berita" :key="item.id"
                        class="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl group fade-in-up"
                        :style="`animation-delay: ${index * 0.1 + 0.6}s`">

                        <div class="relative">
                            <img :src="getImageUrl(item)" 
                                :alt="item.judul"
                                @error="handleImageError"
                                class="w-full h-40 sm:h-44 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                            <div class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                                {{ item.kategori || 'Berita' }}
                            </div>
                        </div>

                        <div class="p-3 sm:p-4 space-y-2 sm:space-y-3">
                            <h4 class="font-bold text-base sm:text-lg text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2">
                                {{ item.judul }}
                            </h4>
                            
                            <div v-if="item.subtitle" class="text-sm text-gray-600 line-clamp-1">
                                {{ item.subtitle }}
                            </div>

                            <div class="text-gray-500 text-xs sm:text-sm flex items-center gap-2 flex-wrap">
                                <div class="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4 text-gray-400"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M6 2a2 2 0 00-2 2v1h12V4a2 2 0 00-2-2H6zM4 7v7a2 2 0 002 2h8a2 2 0 002-2V7H4zm2 2h2v5H6V9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>{{ formatDate(item.tanggal) }}</span>
                                </div>
                                <span class="hidden sm:inline mx-1">•</span>
                                <span class="text-xs sm:text-sm">{{ item.penulis }}</span>
                            </div>
                            
                            <p class="text-gray-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                                {{ item.isi ? item.isi.substring(0, 150) + '...' : item.deskripsi || 'Tidak ada deskripsi tersedia.' }}
                            </p>
                            
                            <button @click="goToDetailBerita(item)"
                                class="inline-block text-red-600 text-xs sm:text-sm font-semibold mt-2 hover:underline hover:text-red-800 transition-colors">
                                Baca Selengkapnya →
                            </button>
                        </div>
                    </div>
                </div>

                <div v-if="berita.length > 0" class="text-center mt-8 sm:mt-10 md:mt-12">
                    <button
                        class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-sm sm:text-base">
                        Muat Berita Lainnya
                    </button>
                </div>
            </div>

            <div class="h-8 sm:h-12 md:h-16"></div>
        </section>
        <FooterDashboard />
    </template>

    <script>
    import NavbarDashboard from '@/components/NavbarDashboard.vue';
    import FooterDashboard from '@/components/FooterDashboard.vue'
    import API from '@/service/api';

    export default {
        components: {
            NavbarDashboard,
            FooterDashboard
        },
        data() {
            return {
                berita: [],
                isLoading: false,
                error: null
            };
        },
        
        async mounted() {
            await this.fetchBerita();
        },

        methods: {
            async fetchBerita() {
                this.isLoading = true;
                this.error = null;
                
                try {
                    console.log('🔄 Fetching berita data...');
                    
                    // Cek apakah API tersedia
                    if (!API) {
                        throw new Error('API service tidak tersedia');
                    }

                    // Test koneksi terlebih dahulu
                    try {
                        await API.testConnection();
                        console.log('✅ Backend connection successful');
                    } catch (connError) {
                        console.warn('⚠️ Connection test failed:', connError.message);

                    }

                    const response = await API.getAllBerita();
                    console.log('📦 Raw API response:', response);

                    if (!response) {
                        throw new Error('Tidak ada response dari server');
                    }

                    // Handle berbagai format response (sama seperti di admin)
                    let beritaData = [];

                    if (response.data) {
                        if (Array.isArray(response.data)) {
                            // Format: { data: [...] }
                            beritaData = response.data;
                            console.log('📋 Direct array format detected');
                        } else if (response.data.data && Array.isArray(response.data.data)) {
                            // Format: { data: { data: [...] } }
                            beritaData = response.data.data;
                            console.log('📋 Nested data format detected');
                        } else if (response.data.berita && Array.isArray(response.data.berita)) {
                            // Format: { data: { berita: [...] } }
                            beritaData = response.data.berita;
                            console.log('📋 Alternative nested format detected');
                        } else {
                            console.warn('⚠️ Unexpected response structure:', response.data);
                            beritaData = [];
                        }
                    } else if (Array.isArray(response)) {
                        beritaData = response;
                        console.log('📋 Direct response array format detected');
                    }

                    this.berita = beritaData;
                    console.log(`✅ Successfully loaded ${this.berita.length} berita items`);

                    if (this.berita.length > 0) {
                        console.log('📄 Sample berita item:', this.berita[0]);
                    }

                } catch (error) {
                    console.error('💥 Error fetching berita:', error);
                    
                    if (error.message.includes('tidak berjalan') || error.message.includes('ECONNREFUSED')) {
                        this.error = 'Server tidak dapat diakses. Pastikan backend berjalan di http://localhost:8080';
                    } else if (error.message.includes('tidak ditemukan') || error.response?.status === 404) {
                        this.error = 'Endpoint berita tidak ditemukan di server';
                    } else if (error.response?.status === 500) {
                        this.error = 'Terjadi kesalahan pada server: ' + (error.response.data?.error || 'Internal server error');
                    } else if (error.message.includes('Network Error')) {
                        this.error = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
                    } else {
                        this.error = error.message || 'Gagal memuat data berita';
                    }

                    this.berita = [];
                } finally {
                    this.isLoading = false;
                }
            },

            getImageUrl(item) {
                if (item.foto) {
                    if (item.foto.startsWith('http') || item.foto.startsWith('/uploads/')) {
                        return item.foto;
                    }
                    return `/uploads/${item.foto}`;
                }
                return item.gambar || '/berita/berita.jpg';
            },

            handleImageError(event) {
                event.target.src = '/berita/berita.jpg';
            },

            formatDate(dateString) {
                if (!dateString) return 'Tanggal tidak tersedia';
                
                try {
                    const options = {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        timeZone: 'Asia/Jakarta'
                    };
                    return new Date(dateString).toLocaleDateString('id-ID', options);
                } catch (error) {
                    console.error('Error formatting date:', error);
                    return dateString; 
                }
            },

            goToDetailBerita(newsItem) {
                this.$router.push({
                    name: 'DetailBerita',
                    params: { id: newsItem.id },
                    query: { category: newsItem.kategori }
                }).then(() => {
                    this.$nextTick(() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    });
                }).catch(error => {
                    console.error('Navigation error:', error);
                    alert('Gagal membuka detail berita');
                });
            }
        }
    }
    </script>

    <style>
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }

        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    .fade-in-up {
        animation: fadeInUp 0.8s ease-out both;
    }

    .zoom-in {
        animation: zoomIn 0.6s ease-out both;
    }

    .line-clamp-1 {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    @media (max-width: 640px) {
        .grid {
            gap: 1rem;
        }
    }

    @media (min-width: 1024px) {
        .max-w-7xl {
            max-width: 80rem;
        }
    }
    </style>