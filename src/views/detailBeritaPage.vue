<template>
    <NavbarDashboard />
    <section
        class="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-start justify-center gap-6 p-4 lg:p-6 font-montserrat">

        <aside class="bg-white rounded-xl shadow-md w-full lg:w-64 order-2 lg:order-1">
            <div class="bg-red-600 text-white text-center py-3 rounded-t-xl font-semibold">
                <i class="fas fa-newspaper mr-2"></i>Berita Lainnya
            </div>
            <ul class="divide-y divide-gray-200 p-4 text-sm max-h-96 overflow-y-auto">
                <li v-for="(news, index) in otherNews" :key="news.id"
                    class="py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                    @click="loadNewsById(news.id)">
                    <div class="flex items-start gap-3">
                        <span class="text-red-600 font-bold text-xs">{{ index + 1 }}.</span>
                        <div>
                            <p class="font-semibold text-gray-700 line-clamp-2 hover:text-red-600 transition-colors">
                                {{ news.judul }}
                            </p>
                            <p class="text-xs text-gray-500 mt-1">
                                <i class="far fa-calendar mr-1"></i>{{ formatDate(news.tanggal) }}
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </aside>


        <div
            class="relative bg-white rounded-xl shadow-lg w-full lg:w-[750px] xl:w-[850px] min-h-[80vh] border-2 border-purple-100 order-1 lg:order-2">
            <div v-if="loading" class="p-8 text-center">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                <p class="text-gray-600">Memuat berita...</p>
            </div>

            <div v-else-if="error" class="p-8 text-center">
                <div class="text-red-500 mb-4">
                    <i class="fas fa-exclamation-triangle text-4xl mb-2"></i>
                    <p class="text-lg font-semibold">Gagal memuat berita</p>
                    <p class="text-sm text-gray-600 mt-2">{{ error }}</p>
                </div>
                <button @click="loadCurrentNews"
                    class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <i class="fas fa-redo mr-2"></i>Coba Lagi
                </button>
            </div>

            <div v-else-if="currentNews" class="p-6 lg:p-8">

                <div class="mb-6">

                    <div class="mb-4">
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                            <i class="fas fa-newspaper mr-2"></i>
                            Berita
                        </span>
                    </div>


                    <h1 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                        {{ currentNews.judul }}
                    </h1>


                    <h2 v-if="currentNews.subtitle" class="text-lg lg:text-xl text-gray-600 mb-4 font-medium">
                        {{ currentNews.subtitle }}
                    </h2>


                    <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-4">
                        <div class="flex items-center">
                            <i class="far fa-user mr-2 text-red-600"></i>
                            <span class="font-medium">{{ currentNews.penulis }}</span>
                        </div>
                        <div class="flex items-center">
                            <i class="far fa-calendar mr-2 text-red-600"></i>
                            <span>{{ formatDate(currentNews.tanggal) }}</span>
                        </div>
                        <div class="flex items-center">
                            <i class="far fa-clock mr-2 text-red-600"></i>
                            <span>{{ getReadingTime(currentNews.isi) }} min baca</span>
                        </div>
                    </div>
                </div>


                <div v-if="currentNews.foto" class="mb-6 overflow-hidden rounded-xl shadow-md">
                    <img :src="getImageUrl(currentNews.foto)" :alt="currentNews.judul"
                        class="w-full h-48 lg:h-64 object-cover hover:scale-105 transition-transform duration-300"
                        @error="handleImageError">
                    <div class="bg-gray-50 px-4 py-2 text-sm text-gray-600">
                        <i class="far fa-image mr-2"></i>{{ currentNews.judul }}
                    </div>
                </div>

                <div class="prose prose-lg max-w-none">
                    <div v-html="formatContent(currentNews.isi)" class="text-gray-800 leading-relaxed"></div>
                </div>


                <div class="mt-8 pt-6 border-t border-gray-200">
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

    <FooterDashboard />
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import FooterDashboard from '@/components/FooterDashboard.vue';
import API from '@/service/api';

export default {
    components: {
        NavbarDashboard,
        FooterDashboard
    },
    data() {
        return {
            loading: true,
            error: null,
            linkCopied: false,
            currentNews: null,
            otherNews: []
        }
    },
    async mounted() {
        await this.loadCurrentNews();
        await this.loadOtherNews();
    },
    methods: {
        async loadCurrentNews() {
            try {
                this.loading = true;
                this.error = null;

                const newsId = this.$route.params.id;

                if (!newsId) {
                    throw new Error('ID berita tidak ditemukan');
                }

                const response = await API.getBeritaByID(newsId);
                this.currentNews = response.data.data;


            } catch (error) {
                console.error('Error loading news:', error);
                this.error = error.response?.data?.message || error.message || 'Gagal memuat berita';
            } finally {
                this.loading = false;
            }
        },

        async loadOtherNews() {
            try {
                const response = await API.getAllBerita();
                const allNews = response.data.data;
                const currentId = parseInt(this.$route.params.id);

                this.otherNews = allNews
                    .filter(news => news.id !== currentId)
                    .slice(0, 6);

                console.log('Other News:', this.otherNews);
            } catch (error) {
                console.error('Gagal load berita lainnya:', error);
            }
        },


        async loadNewsById(id) {
            try {
                this.loading = true;
                this.error = null;

                const response = await API.getBeritaByID(id);
                this.currentNews = response.data;

                this.$router.push({ name: 'DetailBerita', params: { id: id } });

                window.scrollTo({ top: 0, behavior: 'smooth' });

                await this.loadOtherNews();

            } catch (error) {
                console.error('Error loading news by ID:', error);
                this.error = error.response?.data?.message || error.message || 'Gagal memuat berita';
            } finally {
                this.loading = false;
            }
        },

        formatDate(dateString) {
            try {
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    timeZone: 'Asia/Jakarta'
                };
                return new Date(dateString).toLocaleDateString('id-ID', options);
            } catch (error) {
                return dateString;
            }
        },

        getReadingTime(content) {
            if (!content) return 1;
            const wordsPerMinute = 200;
            const textLength = content.replace(/<[^>]*>/g, '').split(' ').length;
            return Math.ceil(textLength / wordsPerMinute);
        },

        formatContent(content) {
            if (!content) return '';
            return content.replace(/\n/g, '<br>');
        },
        getImageUrl(foto) {
            if (!foto) return '';
            if (foto.startsWith('http')) {
                return foto;
            }
            const finalPath = foto.startsWith('/uploads/')
                ? foto
                : `/uploads/${foto}`;

            return `http://localhost:8080${finalPath}`;
        },

        handleImageError(event) {
            event.target.src = 'https://via.placeholder.com/800x400/e2e8f0/64748b?text=Gambar+Tidak+Tersedia';
        },

        shareToFacebook() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(this.currentNews.judul);
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank');
        },

        shareToTwitter() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(this.currentNews.judul);
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        },

        shareToWhatsApp() {
            const url = encodeURIComponent(window.location.href);
            const title = encodeURIComponent(this.currentNews.judul);
            window.open(`https://wa.me/?text=${title} ${url}`, '_blank');
        },

        copyLink() {
            navigator.clipboard.writeText(window.location.href).then(() => {
                this.linkCopied = true;
                setTimeout(() => {
                    this.linkCopied = false;
                }, 2000);
            });
        }
    },

    watch: {
        '$route.params.id': {
            handler(newId) {
                if (newId) {
                    this.loadCurrentNews();
                }
            },
            immediate: false
        }
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