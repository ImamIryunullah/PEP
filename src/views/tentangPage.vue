<template>
  <div class="min-h-screen bg-gradient-to-br from-[#f5f3ef] via-[#faf8f4] to-[#f0ede7]">
    <NavbarDashboard />

    <section class="relative w-full mt-12 mb-12 px-4 sm:px-6 lg:px-8">
      
      <!-- Main Content Card -->
      <div class=" backdrop-blur-sm max-w-7xl mx-auto rounded-3xl p-6 sm:p-10 shadow-2xl border border-gray-200/50 text-left transform hover:scale-[1.01] transition-all duration-500">
        
        <!-- Header Section -->
        <div class="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 mb-8 animate-fade-in">
          <div class="w-20 h-20 sm:w-24 sm:h-24 p-2 rounded-full border-4 border-[#D71E28] flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-300">
            <img src="/logo-mini-olympic-2025.png" alt="Logo" class="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-full" />
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#D71E28] text-center sm:text-left bg-gradient-to-r from-[#D71E28] to-[#ff4757] bg-clip-text text-transparent">
            About Us
          </h2>
        </div>

        <!-- Tab Navigation -->
        <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          <button
            v-for="(tab, index) in tabs"
            :key="tab"
            @click="selectTab(tab, index)"
            :class="[
              'px-4 sm:px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 relative overflow-hidden',
              selectedTab === tab
                ? 'bg-[#D71E28] text-white border-[#D71E28] shadow-lg'
                : 'text-[#D71E28] border-[#D71E28] hover:bg-[#D71E28]/10 hover:shadow-md'
            ]"
          >
            <span class="relative z-10 text-sm sm:text-base">{{ tab }}</span>
            <div 
              v-if="selectedTab === tab"
              class="absolute inset-0 bg-gradient-to-r from-[#D71E28] to-[#ff4757] animate-pulse"
            ></div>
          </button>
        </div>

        <!-- Content Section -->
        <div class="relative min-h-[300px] sm:min-h-[400px]">
          <transition name="slide-fade" mode="out-in">
            <div :key="selectedTab" class="animate-content-slide">
              
              <!-- Deskripsi Content -->
              <div v-if="selectedTab === 'Deskripsi'" class="space-y-6">
                <div class="bg-gradient-to-r from-[#D71E28]/5 to-transparent p-6 rounded-2xl border-l-4 border-[#D71E28]">
                  <p class="text-justify text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                    {{ tabContent.Deskripsi }}
                  </p>
                </div>
              </div>

              <!-- Visi Content -->
              <div v-if="selectedTab === 'Visi'" class="space-y-6">
                <div class="text-center mb-8">
                  <div class="inline-flex items-center gap-3 bg-gradient-to-r from-[#D71E28] to-[#ff4757] text-white px-6 py-3 rounded-full shadow-lg">
                    <i class="fas fa-eye text-xl"></i>
                    <span class="font-bold text-lg">VISI KAMI</span>
                  </div>
                </div>
                <div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl shadow-inner border border-blue-200/50">
                  <p class="text-center text-lg sm:text-xl font-medium text-gray-800 leading-relaxed italic">
                    "{{ tabContent.Visi }}"
                  </p>
                </div>
              </div>

              <!-- Misi Content -->
              <div v-if="selectedTab === 'Misi'" class="space-y-6">
                <div class="text-center mb-8">
                  <div class="inline-flex items-center gap-3 bg-gradient-to-r from-[#D71E28] to-[#ff4757] text-white px-6 py-3 rounded-full shadow-lg">
                    <i class="fas fa-bullseye text-xl"></i>
                    <span class="font-bold text-lg">MISI KAMI</span>
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div
                    v-for="(misi, index) in tabContent.Misi"
                    :key="index"
                    class="mission-card bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                    :style="{ animationDelay: `${index * 0.1}s` }"
                  >
                    <div class="flex items-start gap-4">
                      <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#D71E28] to-[#ff4757] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {{ index + 1 }}
                      </div>
                      <div class="flex-1">
                        <h4 class="font-bold text-[#D71E28] mb-2 text-lg">{{ misi.title }}</h4>
                        <p class="text-gray-700 text-sm sm:text-base leading-relaxed">{{ misi.description }}</p>
                        <p class="text-gray-700 text-sm sm:text-base leading-relaxed">{{ misi.description2 }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </transition>
        </div>
        
        <!-- Decorative Element -->
        <div class="mt-8 flex justify-center">
          <img src="/bunga/hiasan2.png" class="w-24 sm:w-32 opacity-80 hover:opacity-100 transition-opacity duration-300 animate-float" alt="Motif" />
        </div>
      </div>

      <!-- Social Media Section -->
      <div class="mt-12 flex justify-center">
        <div class="flex gap-4 items-center bg-gradient-to-r from-[#D71E28] to-[#ff4757] px-6 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div
            v-for="(social, index) in socialMedia"
            :key="social.name"
            class="social-icon bg-white rounded-full p-3 cursor-pointer transform hover:scale-110 transition-all duration-300 hover:shadow-lg"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="openSocialMedia(social.url)"
          >
            <i :class="social.icon + ' text-[#D71E28] text-lg hover:text-[#ff4757] transition-colors duration-300'"></i>
          </div>
        </div>
      </div>
    </section>

    <FooterDahboard />
  </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import FooterDahboard from '@/components/FooterDashboard.vue'

export default {
  name: "MiniOlympicPage",
  components: {
    NavbarDashboard,
    FooterDahboard
  },
  data() {
    return {
      selectedTab: 'Deskripsi',
      tabs: ['Deskripsi', 'Visi', 'Misi'],
      tabContent: {
        Deskripsi: 'Mini Olympic 2025 merupakan ajang kompetisi olahraga bergengsi yang menggabungkan semangat sportivitas dengan nilai-nilai persatuan dan persahabatan. Event ini dirancang khusus untuk memberikan platform bagi para atlet muda dalam mengasah kemampuan dan menunjukkan prestasi terbaik mereka. Dengan mengusung tema "Unity in Diversity", Mini Olympic 2025 tidak hanya menjadi arena kompetisi, tetapi juga momen untuk mempererat tali silaturahmi antar peserta dari berbagai latar belakang. Kami berkomitmen untuk menciptakan pengalaman yang tak terlupakan bagi setiap peserta, official, dan penonton yang hadir.',
        Visi: 'Mewujudkan kegiatan olahraga yang mengintegrasikan teknologi digital pemberdayaan sumber daya lokal dan prinsip-prinsip sustainability untuk menciptakan komunitas yang lebih sehat kuat dan berkelanjutan',
        Misi: [
          {
            title: 'Digitalisasi Olahraga',
            description: '1. Menggunakan teknologi terkini untuk meningkatkan pengalaman dan partisipasi dalam kegiatan olahraga.',
            description2: '2. Memperkenalkan parfum digital untuk pendaftaran Live Score dan sharing informasi.'
          },
          {
            title: 'Pemberdayaan Sumber Daya Lokal',
            description: 'Melibatkan dan mendukung pelaku usaha lokal dan penyediaan kebutuhan acara seperti makanan, minuman, dan peralatan olahraga',
            description2: 'Menggunakan tenaga kerja dan relawan dari komunitas lokal untuk mendukung pelaksanaan kegiatan.'
          },
          {
            title: 'Sustainability',
            description: 'Meminimalkan dampak lingkungan dari kegiatan dengan menerapkan praktik-praktik ramah lingkungan seperti pengaruh sampah plastik dan penggunaan bahan-bahan ramah lingkungan.',
            description2: 'Meningkatkan kesadaran peserta dan komunitas tentang pentingnya keberlanjutan melalui kampanye dan edukasi'
          },
          {
            title: 'Inovasi dan Pengembangan',
            description: 'Terus berinovasi dalam penyelenggaraan kegiatan olahraga untuk memastikan relevansi dan daya tarik yang tinggi Meningkatkan kesadaran peserta dan komunitas tentang pentingnya keberlanjutan melalui kampanye dan edukasi.',
            description2: 'Mengadakan evaluasi rutin dan mendapatkan masukan dari peserta untuk perbaikan berkelanjutan'
          }
        ]
      },
      socialMedia: [
        { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' },
        { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com' },
        { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://tiktok.com' },
        { name: 'Email', icon: 'fas fa-envelope', url: 'mailto:info@miniolympic2025.com' }
      ]
    }
  },
  methods: {
    selectTab(tab, index) {
      this.selectedTab = tab;
      // Add ripple effect
      this.$nextTick(() => {
        const buttons = document.querySelectorAll('button');
        const button = buttons[index + 1]; // +1 because navbar might have buttons too
        if (button) {
          button.classList.add('animate-ping');
          setTimeout(() => {
            button.classList.remove('animate-ping');
          }, 300);
        }
      });
    },
    openSocialMedia(url) {
      window.open(url, '_blank');
    }
  },
  mounted() {
    // Add entrance animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    });

    document.querySelectorAll('.mission-card').forEach((card) => {
      observer.observe(card);
    });
  }
}
</script>

<style scoped>
/* Custom Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes content-slide {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-content-slide {
  animation: content-slide 0.5s ease-out;
}

.mission-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fade-in-up 0.6s ease-out forwards;
}

.social-icon {
  animation: fade-in-up 0.6s ease-out forwards;
}

/* Transition Effects */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .mission-card {
    margin-bottom: 1rem;
  }
  
  .social-icon {
    padding: 0.75rem;
  }
}

/* Hover effects for better interactivity */
.mission-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.mission-card:hover .flex-shrink-0 {
  transform: rotate(360deg);
  transition: transform 0.6s ease-in-out;
}

/* Gradient text animation */
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-clip-text {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>