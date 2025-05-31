<template>
    <div class="min-h-screen bg-gradient-to-br from-[#f5f3ef] via-[#faf8f4] to-[#f0ede7]">
      <NavbarDashboard />
      
      <section class="relative w-full mt-8 sm:mt-12 mb-8 sm:mb-12 px-3 sm:px-4 md:px-6 lg:px-8">
        
        <div class="absolute inset-0 z-0 pointer-events-none">

        <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full opacity-5" />


        <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full opacity-5    " />
        </div>
        <!-- Background Text -->
        <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <h1 class="absolute top-12 sm:top-16 md:top-20 left-4 sm:left-8 md:left-12 lg:left-20 text-gray-600 opacity-5 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">RESULT</h1>
          <h1 class="absolute top-24 sm:top-32 md:top-40 lg:top-52 left-4 sm:left-8 md:left-12 lg:left-20 text-gray-600 opacity-5 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">LARI</h1>
        </div>
        
        <!-- Main Content Container -->
        <div class="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 text-left relative z-10">
  
          <!-- Header Section -->
          
          <!-- Category Navigation -->
          <div class="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
            <button 
              v-for="(category, index) in categories" 
              :key="category" 
              @click="selectCategory(category, index)"
              class="category-button px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold border-2 transition-all duration-300 transform hover:scale-105 relative overflow-hidden min-w-0 flex-shrink-0"
              :class="[
                selectedCategory === category
                  ? 'bg-[#D71E28] text-white border-[#D71E28] shadow-lg'
                  : 'text-[#D71E28] border-[#D71E28] hover:bg-[#D71E28]/10 hover:shadow-md'
              ]">
              <span class="relative z-10 text-xs sm:text-sm md:text-base whitespace-nowrap">{{ category }}</span>
              <div v-if="selectedCategory === category"
                class="absolute inset-0 bg-gradient-to-r from-[#D71E28] to-[#ff4757] animate-pulse"></div>
            </button>
          </div>
          
          <!-- Results Content -->
          <div class="relative min-h-[400px]">
            <transition name="slide-fade" mode="out-in">
              <div :key="selectedCategory" class="animate-content-slide">
                
                <!-- Podium Section -->
                <div class="mb-8 sm:mb-12">
                  <div class="text-center mb-6 sm:mb-8">
                    <div class="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#D71E28] to-[#ff4757] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg">
                      <i class="fas fa-trophy text-base sm:text-xl"></i>
                      <span class="font-bold text-sm sm:text-lg">PODIUM {{ selectedCategory.toUpperCase() }}</span>
                    </div>
                  </div>
                  
                  <!-- Podium Visual -->
                  <div class="flex justify-center items-end gap-2 sm:gap-4 md:gap-6 mb-6">
                    <!-- 2nd Place -->
                    <div class="podium-item text-center transform hover:scale-105 transition-all duration-300" style="animation-delay: 0.1s">
                      <div class="bg-gradient-to-b from-gray-300 to-gray-500 rounded-t-lg p-3 sm:p-4 md:p-6 shadow-lg">
                        <div class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-silver rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl shadow-inner">
                          2
                        </div>
                        <h3 class="font-bold text-xs sm:text-sm md:text-base text-gray-800 mb-1">{{ getCurrentResults()[1]?.name }}</h3>
                        <p class="text-xs sm:text-sm text-gray-600 mb-1">{{ getCurrentResults()[1]?.team }}</p>
                        <p class="text-xs sm:text-sm font-bold text-[#D71E28]">{{ getCurrentResults()[1]?.time }}</p>
                      </div>
                      <div class="bg-gradient-to-b from-gray-400 to-gray-600 h-16 sm:h-20 md:h-24 rounded-b-lg shadow-lg"></div>
                    </div>
                    
                    <!-- 1st Place -->
                    <div class="podium-item text-center transform hover:scale-105 transition-all duration-300">
                      <div class="bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-t-lg p-3 sm:p-4 md:p-6 shadow-lg">
                        <div class="w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-gold rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center text-white font-bold text-xl sm:text-2xl md:text-3xl shadow-inner">
                          1
                        </div>
                        <h3 class="font-bold text-sm sm:text-base md:text-lg text-gray-800 mb-1">{{ getCurrentResults()[0]?.name }}</h3>
                        <p class="text-xs sm:text-sm md:text-base text-gray-600 mb-1">{{ getCurrentResults()[0]?.team }}</p>
                        <p class="text-sm sm:text-base font-bold text-[#D71E28]">{{ getCurrentResults()[0]?.time }}</p>
                        <div class="flex justify-center mt-2">
                          <i class="fas fa-crown text-yellow-500 text-lg sm:text-xl animate-bounce"></i>
                        </div>
                      </div>
                      <div class="bg-gradient-to-b from-yellow-400 to-yellow-600 h-20 sm:h-24 md:h-32 rounded-b-lg shadow-lg"></div>
                    </div>
                    
                    <!-- 3rd Place -->
                    <div class="podium-item text-center transform hover:scale-105 transition-all duration-300" style="animation-delay: 0.2s">
                      <div class="bg-gradient-to-b from-orange-300 to-orange-500 rounded-t-lg p-3 sm:p-4 md:p-6 shadow-lg">
                        <div class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-bronze rounded-full mx-auto mb-2 sm:mb-3 flex items-center justify-center text-white font-bold text-lg sm:text-xl md:text-2xl shadow-inner">
                          3
                        </div>
                        <h3 class="font-bold text-xs sm:text-sm md:text-base text-gray-800 mb-1">{{ getCurrentResults()[2]?.name }}</h3>
                        <p class="text-xs sm:text-sm text-gray-600 mb-1">{{ getCurrentResults()[2]?.team }}</p>
                        <p class="text-xs sm:text-sm font-bold text-[#D71E28]">{{ getCurrentResults()[2]?.time }}</p>
                      </div>
                      <div class="bg-gradient-to-b from-orange-400 to-orange-600 h-12 sm:h-16 md:h-20 rounded-b-lg shadow-lg"></div>
                    </div>
                  </div>
                </div>
                
                <!-- Complete Results Table -->
                <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
                  <div class="bg-gradient-to-r from-[#D71E28] to-[#ff4757] p-4 sm:p-6">
                    <h3 class="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <i class="fas fa-list-ol"></i>
                      Hasil Lengkap {{ selectedCategory }}
                    </h3>
                  </div>
                  
                  <!-- Mobile Card View -->
                  <div class="block sm:hidden">
                    <div v-for="(result, index) in getCurrentResults()" :key="index" 
                      class="border-b border-gray-200 last:border-b-0 p-4"
                      :class="[
                        index === 0 ? 'bg-gradient-to-r from-yellow-50 to-yellow-100' :
                        index === 1 ? 'bg-gradient-to-r from-gray-50 to-gray-100' :
                        index === 2 ? 'bg-gradient-to-r from-orange-50 to-orange-100' : 'bg-white'
                      ]">
                      <div class="flex items-center gap-3">
                        <div class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                          :class="[
                            index === 0 ? 'bg-gold' :
                            index === 1 ? 'bg-silver' :
                            index === 2 ? 'bg-bronze' : 'bg-gray-500'
                          ]">
                          {{ index + 1 }}
                        </div>
                        <div class="flex-1 min-w-0">
                          <div class="font-bold text-gray-800 text-lg">{{ result.name }}</div>
                          <div class="text-sm text-gray-600">{{ result.team }}</div>
                          <div class="text-lg font-bold text-[#D71E28] mt-1">{{ result.time }}</div>
                        </div>
                        <div v-if="index < 3" class="flex-shrink-0">
                          <i class="fas fa-medal text-2xl"
                            :class="[
                              index === 0 ? 'text-yellow-500' :
                              index === 1 ? 'text-gray-400' :
                              'text-orange-500'
                            ]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Desktop Table View -->
                  <div class="hidden sm:block overflow-x-auto">
                    <table class="min-w-full">
                      <thead class="bg-gray-50">
                        <tr>
                          <th class="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Posisi</th>
                          <th class="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Nama Atlet</th>
                          <th class="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Tim/Kontingen</th>
                          <th class="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Waktu</th>
                          <th class="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">Medali</th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200">
                        <tr v-for="(result, index) in getCurrentResults()" :key="index" 
                          class="hover:bg-gray-50 transition-colors"
                          :class="[
                            index === 0 ? 'bg-gradient-to-r from-yellow-50 to-transparent' :
                            index === 1 ? 'bg-gradient-to-r from-gray-50 to-transparent' :
                            index === 2 ? 'bg-gradient-to-r from-orange-50 to-transparent' : ''
                          ]">
                          <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <span class="inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold"
                                :class="[
                                  index === 0 ? 'bg-gold' :
                                  index === 1 ? 'bg-silver' :
                                  index === 2 ? 'bg-bronze' : 'bg-gray-500'
                                ]">
                                {{ index + 1 }}
                              </span>
                            </div>
                          </td>
                          <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                            <div class="text-sm sm:text-base font-medium text-gray-900">{{ result.name }}</div>
                          </td>
                          <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                            <div class="text-sm sm:text-base text-gray-600">{{ result.team }}</div>
                          </td>
                          <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                            <div class="text-sm sm:text-base font-bold text-[#D71E28]">{{ result.time }}</div>
                          </td>
                          <td class="px-4 sm:px-6 py-4 whitespace-nowrap">
                            <div v-if="index < 3" class="flex items-center">
                              <i class="fas fa-medal text-xl sm:text-2xl mr-2"
                                :class="[
                                  index === 0 ? 'text-yellow-500' :
                                  index === 1 ? 'text-gray-400' :
                                  'text-orange-500'
                                ]"></i>
                              <span class="text-xs sm:text-sm font-medium"
                                :class="[
                                  index === 0 ? 'text-yellow-600' :
                                  index === 1 ? 'text-gray-600' :
                                  'text-orange-600'
                                ]">
                                {{ index === 0 ? 'Emas' : index === 1 ? 'Perak' : 'Perunggu' }}
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
              </div>
            </transition>
          </div>
          
          <!-- Decorative Image -->
          <!-- <div class="mt-8 sm:mt-12 flex justify-center">
            <img src="/bunga/hiasan2.png"
              class="w-16 sm:w-20 md:w-24 lg:w-32 opacity-80 hover:opacity-100 transition-opacity duration-300" alt="Motif" />
          </div> -->
        </div>
      </section>
      
      <FooterDashboard />
    </div>
  </template>
  
  <script>
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import FooterDashboard from '@/components/FooterDashboard.vue';
  export default {
    components:{
        NavbarDashboard,
        FooterDashboard
    },
    name: "ResultLariPage",
    data() {
      return {
        selectedCategory: '100m Putra',
        categories: [
          '100m Putra',
          '100m Putri', 
          '200m Putra',
          '200m Putri',
          '400m Putra', 
          '400m Putri',
          'Estafet Putra',
          'Estafet Putri'
        ],
        results: {
          '100m Putra': [
            { name: 'Ahmad Fadli', team: 'RU IV Cilacap', time: '10.25s' },
            { name: 'Budi Santoso', team: 'Pertamina Hulu Rokan', time: '10.31s' },
            { name: 'Candra Wijaya', team: 'PT KPI', time: '10.42s' },
            { name: 'Doni Prakoso', team: 'RU III Plaju', time: '10.55s' },
            { name: 'Eko Saputra', team: 'Pertamina EP', time: '10.67s' },
            { name: 'Fajar Nugroho', team: 'PHR Riau', time: '10.73s' }
          ],
          '100m Putri': [
            { name: 'Sari Dewi', team: 'RU IV Cilacap', time: '11.85s' },
            { name: 'Maya Sinta', team: 'Pertamina Hulu Rokan', time: '11.92s' },
            { name: 'Rina Kartika', team: 'PT KPI', time: '12.05s' },
            { name: 'Diah Permata', team: 'RU III Plaju', time: '12.18s' },
            { name: 'Fitri Handayani', team: 'Pertamina EP', time: '12.25s' },
            { name: 'Gita Maharani', team: 'PHR Riau', time: '12.33s' }
          ],
          '200m Putra': [
            { name: 'Rahman Hakim', team: 'Pertamina Hulu Rokan', time: '21.45s' },
            { name: 'Surya Buana', team: 'RU IV Cilacap', time: '21.67s' },
            { name: 'Teguh Wibowo', team: 'PT KPI', time: '21.89s' },
            { name: 'Umar Bakri', team: 'RU III Plaju', time: '22.12s' },
            { name: 'Wahyu Ramadan', team: 'Pertamina EP', time: '22.35s' },
            { name: 'Yogi Pratama', team: 'PHR Riau', time: '22.48s' }
          ],
          '200m Putri': [
            { name: 'Indira Sari', team: 'PT KPI', time: '24.32s' },
            { name: 'Kartika Dewi', team: 'RU IV Cilacap', time: '24.55s' },
            { name: 'Lestari Wati', team: 'Pertamina Hulu Rokan', time: '24.78s' },
            { name: 'Melati Putri', team: 'RU III Plaju', time: '25.01s' },
            { name: 'Novi Anggraini', team: 'Pertamina EP', time: '25.24s' },
            { name: 'Oktavia Rani', team: 'PHR Riau', time: '25.47s' }
          ],
          '400m Putra': [
            { name: 'Bayu Aji', team: 'RU III Plaju', time: '48.92s' },
            { name: 'Arief Budiman', team: 'Pertamina Hulu Rokan', time: '49.15s' },
            { name: 'Chandra Kusuma', team: 'RU IV Cilacap', time: '49.38s' },
            { name: 'Dedy Firmansyah', team: 'PT KPI', time: '49.61s' },
            { name: 'Eri Setiawan', team: 'Pertamina EP', time: '49.84s' },
            { name: 'Ferry Gunawan', team: 'PHR Riau', time: '50.07s' }
          ],
          '400m Putri': [
            { name: 'Ratna Sari', team: 'Pertamina EP', time: '55.67s' },
            { name: 'Sinta Maharani', team: 'RU IV Cilacap', time: '55.89s' },
            { name: 'Tari Kusumawati', team: 'PT KPI', time: '56.12s' },
            { name: 'Umi Kalsum', team: 'Pertamina Hulu Rokan', time: '56.35s' },
            { name: 'Vina Aprilia', team: 'RU III Plaju', time: '56.58s' },
            { name: 'Wulan Dari', team: 'PHR Riau', time: '56.81s' }
          ],
          'Estafet Putra': [
            { name: 'Tim RU IV Cilacap', team: 'RU IV Cilacap', time: '39.85s' },
            { name: 'Tim Pertamina Hulu Rokan', team: 'Pertamina Hulu Rokan', time: '40.12s' },
            { name: 'Tim PT KPI', team: 'PT KPI', time: '40.35s' },
            { name: 'Tim RU III Plaju', team: 'RU III Plaju', time: '40.58s' },
            { name: 'Tim Pertamina EP', team: 'Pertamina EP', time: '40.81s' },
            { name: 'Tim PHR Riau', team: 'PHR Riau', time: '41.04s' }
          ],
          'Estafet Putri': [
            { name: 'Tim PT KPI', team: 'PT KPI', time: '45.23s' },
            { name: 'Tim RU IV Cilacap', team: 'RU IV Cilacap', time: '45.46s' },
            { name: 'Tim Pertamina Hulu Rokan', team: 'Pertamina Hulu Rokan', time: '45.69s' },
            { name: 'Tim Pertamina EP', team: 'Pertamina EP', time: '45.92s' },
            { name: 'Tim RU III Plaju', team: 'RU III Plaju', time: '46.15s' },
            { name: 'Tim PHR Riau', team: 'PHR Riau', time: '46.38s' }
          ]
        }
      };
    },
    methods: {
      selectCategory(category) {
        this.selectedCategory = category;
      },
      getCurrentResults() {
        return this.results[this.selectedCategory] || [];
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom colors for medals */
  .bg-gold {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
  }
  
  .bg-silver {
    background: linear-gradient(135deg, #c0c0c0, #e5e5e5);
  }
  
  .bg-bronze {
    background: linear-gradient(135deg, #cd7f32, #d4905a);
  }
  
  /* Animations */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }
  
  .animate-content-slide {
    animation: slideUp 0.5s ease-out;
  }
  
  .podium-item {
    animation: slideInUp 0.6s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Transition effects */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  
  .slide-fade-enter-from {
    transform: translateX(10px);
    opacity: 0;
  }
  
  .slide-fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
  
  /* Responsive adjustments */
  @media (max-width: 640px) {
    .category-button {
      min-height: 44px;
    }
  }
  </style>