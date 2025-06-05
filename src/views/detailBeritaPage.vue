<template>
    <NavbarDashboard />
    <section class="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-start justify-center gap-6 p-4 lg:p-6">
        
        <aside class="bg-white rounded-xl shadow-md w-full lg:w-64 order-2 lg:order-1">
            <div class="bg-red-600 text-white text-center py-3 rounded-t-xl font-semibold">
                <i class="fas fa-newspaper mr-2"></i>Berita Lainnya
            </div>
            <ul class="divide-y divide-gray-200 p-4 text-sm max-h-96 overflow-y-auto">
                <li v-for="(news, index) in otherNews" :key="index" 
                    class="py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                    @click="loadNews(news)">
                    <div class="flex items-start gap-3">
                        <span class="text-red-600 font-bold text-xs">{{ index + 1 }}.</span>
                        <div>
                            <p class="font-semibold text-gray-700 line-clamp-2 hover:text-red-600 transition-colors">
                                {{ news.title }}
                            </p>
                            <p class="text-xs text-gray-500 mt-1">
                                <i class="far fa-calendar mr-1"></i>{{ formatDate(news.date) }}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </aside>

        
        <div class="relative bg-white rounded-xl shadow-lg w-full lg:w-[750px] xl:w-[850px] min-h-[80vh] border-2 border-purple-100 order-1 lg:order-2">        
            <div v-if="loading" class="p-8 text-center">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                <p class="text-gray-600">Memuat berita...</p>
            </div>
            <div v-else class="p-6 lg:p-8">
                
                <div class="mb-6">
                    
                    <div class="mb-4">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                              :class="getCategoryColor(currentNews.category)">
                            <i :class="getCategoryIcon(currentNews.category)" class="mr-2"></i>
                            {{ currentNews.category }}
                        </span>
                    </div>

                    
                    <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                        {{ currentNews.title }}
                    </h1>

                    
                    <h2 class="text-lg lg:text-xl text-gray-600 mb-4 font-medium">
                        {{ currentNews.subtitle }}
                    </h2>

                    
                    <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-4">
                        <div class="flex items-center">
                            <i class="far fa-user mr-2 text-red-600"></i>
                            <span class="font-medium">{{ currentNews.author }}</span>
                        </div>
                        <div class="flex items-center">
                            <i class="far fa-calendar mr-2 text-red-600"></i>
                            <span>{{ formatDate(currentNews.date) }}</span>
                        </div>
                        <div class="flex items-center">
                            <i class="far fa-clock mr-2 text-red-600"></i>
                            <span>{{ getReadingTime(currentNews.content) }} min baca</span>
                        </div>
                    </div>
                </div>

                
                <div class="mb-6 overflow-hidden rounded-xl shadow-md">
                    <img :src="currentNews.image" 
                         :alt="currentNews.title" 
                         class="w-full h-48 lg:h-64 object-cover hover:scale-105 transition-transform duration-300">
                    <div class="bg-gray-50 px-4 py-2 text-sm text-gray-600">
                        <i class="far fa-image mr-2"></i>{{ currentNews.imageCaption }}
                    </div>
                </div>       
                <div class="prose prose-lg max-w-none">
                    <div v-html="formatContent(currentNews.content)" class="text-gray-800 leading-relaxed"></div>
                </div>
          
                <!-- <div v-if="currentNews.gallery && currentNews.gallery.length > 0" class="mt-8">
                    <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <i class="fas fa-images mr-2 text-red-600"></i>Galeri Foto
                    </h3>
                    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        <div v-for="(photo, index) in currentNews.gallery" :key="index" 
                             class="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                             @click="openGallery(index)">
                            <img :src="photo.url" :alt="photo.caption" 
                                 class="w-full h-32 object-cover hover:scale-105 transition-transform duration-300">
                        </div>
                    </div>
                </div> -->
                
                <div class="mt-8 pt-6 border-t border-gray-200">
                    <h4 class="text-sm font-semibold text-gray-700 mb-3">Tags:</h4>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="tag in currentNews.tags" :key="tag" 
                              class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-red-100 hover:text-red-700 cursor-pointer transition-colors">
                            #{{ tag }}
                        </span>
                    </div>
                </div>

                
                <div class="mt-6 pt-6 border-t border-gray-200">
                    <h4 class="text-sm font-semibold text-gray-700 mb-3">Bagikan:</h4>
                    <div class="flex gap-3">
                        <button @click="shareToFacebook" 
                                class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <i class="fab fa-facebook-f mr-2"></i>Facebook
                        </button>
                        <button @click="shareToTwitter" 
                                class="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                            <i class="fab fa-twitter mr-2"></i>Twitter
                        </button>
                        <button @click="shareToWhatsApp" 
                                class="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            <i class="fab fa-whatsapp mr-2"></i>WhatsApp
                        </button>
                        <button @click="copyLink" 
                                class="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                            <i class="fas fa-link mr-2"></i>{{ linkCopied ? 'Tersalin!' : 'Copy Link' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- <div v-if="galleryOpen" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" @click="closeGallery">
        <div class="max-w-4xl max-h-full">
            <img :src="currentNews.gallery[currentGalleryIndex].url" 
                 :alt="currentNews.gallery[currentGalleryIndex].caption"
                 class="max-w-full max-h-full object-contain">
            <div class="text-white text-center mt-4">
                <p>{{ currentNews.gallery[currentGalleryIndex].caption }}</p>
                <div class="flex justify-center gap-4 mt-2">
                    <button @click.stop="prevGalleryImage" class="text-white hover:text-gray-300">
                        <i class="fas fa-chevron-left"></i> Sebelumnya
                    </button>
                    <span>{{ currentGalleryIndex + 1 }} / {{ currentNews.gallery.length }}</span>
                    <button @click.stop="nextGalleryImage" class="text-white hover:text-gray-300">
                        Selanjutnya <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div> -->

    <FooterDashboard />
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import FooterDashboard from '@/components/FooterDashboard.vue'

export default {
    components: {
        NavbarDashboard,
        FooterDashboard
    },
    data() {
        return {
            loading: false,
            linkCopied: false,
            // galleryOpen: false,
            // currentGalleryIndex: 0,
            currentNews: {
                id: 1,
                title: "Tim Volley Putra Raih Medali Emas dalam Mini Olympic 2025",
                subtitle: "Pertandingan sengit melawan tim favorit berakhir dengan kemenangan gemilang 3-1",
                category: "Volley",
                author: "Ahmad Rizki",
                date: "2025-05-30",
                content: `
                    <p>Dalam pertandingan final yang berlangsung sangat sengit di Gedung Olahraga Universitas, tim volley putra berhasil meraih medali emas setelah mengalahkan tim favorit dengan skor 3-1. Pertandingan yang berlangsung selama hampir 2 jam ini menjadi sorotan utama Mini Olympic 2025.</p>
                    
                    <p>Kapten tim, Budi Santoso, mengungkapkan bahwa kemenangan ini adalah hasil dari latihan keras selama berbulan-bulan. "Kami sudah mempersiapkan diri sejak 6 bulan yang lalu, dengan latihan intensif 5 kali seminggu," ujarnya setelah pertandingan.</p>
                    
                    <p>Set pertama dimulai dengan keunggulan lawan 10-5, namun tim volley putra mampu bangkit dan memenangkan set dengan skor 25-23. Momentum ini terus berlanjut hingga set kedua dan ketiga, meskipun sempat tertinggal di set ketiga.</p>
                    
                    <p>Pelatih tim, Pak Joko Widodo, memuji semangat juang para pemain. "Mereka menunjukkan mental juara sejati. Bahkan saat tertinggal, mereka tidak pernah menyerah," katanya dengan bangga.</p>
                    
                    <p>Kemenangan ini sekaligus memecahkan rekor, karena ini adalah kali pertama tim volley putra meraih medali emas dalam ajang Mini Olympic. Sebelumnya, prestasi terbaik mereka adalah medali perak pada tahun 2023.</p>
                    
                    <p>Para pemain akan mendapat bonus khusus dari pihak universitas sebagai apresiasi atas pencapaian luar biasa ini. Selain itu, mereka juga akan mewakili universitas dalam kejuaraan antar universitas tingkat nasional.</p>
                `,
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
                imageCaption: "Tim volley putra saat melakukan selebrasi setelah memenangkan pertandingan final",
                // gallery: [
                //     {
                //         url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                //         caption: "Momen spike menentukan di set terakhir"
                //     },
                //     {
                //         url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
                //         caption: "Selebrasi tim setelah memenangkan pertandingan"
                //     },
                //     {
                //         url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
                //         caption: "Penyerahan medali emas kepada para juara"
                //     }
                // ],
                tags: ["volley", "medali-emas", "mini-olympic", "olahraga", "universitas", "final"]
            },
            otherNews: [
                {
                    id: 2,
                    title: "Atlet Badminton Putri Sabet Juara Ganda dalam Turnamen Bergengsi",
                    category: "Badminton",
                    date: "2025-05-29",
                    content: "Pasangan ganda putri berhasil mengalahkan unggulan pertama...",
                    image: "https://images.unsplash.com/photo-1594736797933-d0fce9728659?w=400&h=200&fit=crop"
                },
                {
                    id: 3,
                    title: "Rekor Baru Diciptakan dalam Kategori Lari 100 Meter Putra",
                    category: "Lari",
                    date: "2025-05-28",
                    content: "Pelari muda berusia 20 tahun berhasil memecahkan rekor lama...",
                    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=200&fit=crop"
                },
                {
                    id: 4,
                    title: "Tim Basket Putra Melaju ke Semifinal dengan Kemenangan Telak",
                    category: "Basket",
                    date: "2025-05-27",
                    content: "Dengan skor akhir 85-62, tim basket putra berhasil mengamankan...",
                    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=200&fit=crop"
                },
                {
                    id: 5,
                    title: "Kejuaraan Esport Mobile Legends Memasuki Babak Final",
                    category: "Esport",
                    date: "2025-05-26",
                    content: "Dua tim terbaik akan bertarung dalam grand final yang ditunggu-tunggu...",
                    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop"
                },
                {
                    id: 6,
                    title: "Senam Artistik Putri Tampil Memukau dengan Rutinitas Sempurna",
                    category: "Senam",
                    date: "2025-05-25",
                    content: "Penampilan yang memukau berhasil meraih standing ovation dari penonton...",
                    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop"
                },
                {
                    id: 7,
                    title: "Turnamen Tenis Meja Berlangsung Sengit hingga Set Kelima",
                    category: "Tenis Meja",
                    date: "2025-05-24",
                    content: "Pertarungan marathon antara dua pemain terbaik berakhir dramatis...",
                    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"
                }
            ]
        }
    },
    methods: {
        formatDate(dateString) {
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                timeZone: 'Asia/Jakarta'
            };
            return new Date(dateString).toLocaleDateString('id-ID', options);
        },
        
        getReadingTime(content) {
            const wordsPerMinute = 200;
            const textLength = content.replace(/<[^>]*>/g, '').split(' ').length;
            return Math.ceil(textLength / wordsPerMinute);
        },
        
        getCategoryColor(category) {
            const colors = {
                'Volley': 'bg-blue-100 text-blue-800',
                'Sepak Bola': 'bg-green-100 text-green-800',
                'Tenis Meja': 'bg-orange-100 text-orange-800',
                'Badminton': 'bg-red-100 text-red-800',
                'Lari': 'bg-purple-100 text-purple-800',
                'Senam': 'bg-pink-100 text-pink-800',
                'Tenis Lapangan': 'bg-yellow-100 text-yellow-800',
                'Basket': 'bg-indigo-100 text-indigo-800',
                'Esport': 'bg-gray-100 text-gray-800'
            };
            return colors[category] || 'bg-gray-100 text-gray-800';
        },
        
        getCategoryIcon(category) {
            const icons = {
                'Volley': 'fas fa-volleyball-ball',
                'Sepak Bola': 'fas fa-futbol',
                'Tenis Meja': 'fas fa-table-tennis',
                'Badminton': 'fas fa-shuttlecock',
                'Lari': 'fas fa-running',
                'Senam': 'fas fa-gymnastics',
                'Tenis Lapangan': 'fas fa-tennis-ball',
                'Basket': 'fas fa-basketball-ball', 
                'Esport': 'fas fa-gamepad'
            };
            return icons[category] || 'fas fa-newspaper';
        },
        
        formatContent(content) {
            return content.replace(/\n/g, '<br>');
        },
        
        loadNews(news) {
            this.loading = true;
            // Simulate loading delay
            setTimeout(() => {
                this.currentNews = {
                    ...news,
                    subtitle: `Berita terkini tentang ${news.category} dalam Mini Olympic 2025`,
                    author: "Tim Redaksi",
                    content: news.content + ` <p>Berita ini merupakan bagian dari liputan komprehensif Mini Olympic 2025 yang diselenggarakan di kampus universitas. Event ini melibatkan ratusan atlet dari berbagai fakultas yang berkompetisi dalam 9 cabang olahraga utama.</p>`,
                    imageCaption: `Dokumentasi kegiatan ${news.category} dalam Mini Olympic 2025`,
                    gallery: [
                        {
                            url: news.image,
                            caption: `Momen terbaik dalam pertandingan ${news.category}`
                        }
                    ],
                    tags: [news.category.toLowerCase().replace(' ', '-'), 'mini-olympic', 'olahraga', 'kompetisi']
                };
                this.loading = false;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 800);
        },
        
        shareToFacebook() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(this.currentNews.title);
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank');
        },
        
        shareToTwitter() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(this.currentNews.title);
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        },
        
        shareToWhatsApp() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(this.currentNews.title);
            window.open(`https://wa.me/?text=${title} ${url}`, '_blank');
        },
        
        copyLink() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.linkCopied = true;
                setTimeout(() => {
                    this.linkCopied = false;
                }, 2000);
            });
        },
        
        // openGallery(index) {
        //     this.currentGalleryIndex = index;
        //     this.galleryOpen = true;
        // },
        
        // closeGallery() {
        //     this.galleryOpen = false;
        // },
        
        // nextGalleryImage() {
        //     if (this.currentGalleryIndex < this.currentNews.gallery.length - 1) {
        //         this.currentGalleryIndex++;
        //     } else {
        //         this.currentGalleryIndex = 0;
        //     }
        // },
        
        // prevGalleryImage() {
        //     if (this.currentGalleryIndex > 0) {
        //         this.currentGalleryIndex--;
        //     } else {
        //         this.currentGalleryIndex = this.currentNews.gallery.length - 1;
        //     }
        // }
    }
}
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.prose p {
    margin-bottom: 1rem;
    text-align: justify;
    line-height: 1.8;
}

.prose p:last-child {
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .prose {
        font-size: 0.95rem;
    }
}
</style>