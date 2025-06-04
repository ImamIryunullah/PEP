<template>
  <div class="min-h-screen bg-[#f5f3ef]">
    <NavbarDashboard />
    <section class="relative w-full h-screen min-h-[400px] overflow-hidden">

      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
        <source src="../assets/PERTAMINAep.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="absolute inset-0 bg-black bg-opacity-20"></div>

      <div class="absolute inset-0 flex items-center justify-center z-10 p-4">
        <img src="/logo-mini-olympic-2025.png" alt="Mini Olympic 2025"
          class="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 max-w-full h-auto mx-auto drop-shadow-lg">
      </div>
    </section>
    <section class="relative py-8 sm:py-12 lg:py-16 px-4 bg-[#f5f3ef] w-full min-h-screen overflow-hidden">


      <img src="../assets/kategori/voli.png"
        class="absolute bottom-[20%] left-[2%] w-[350px] lg:w-[450px] xl:w-[550px] hidden md:block float delay-1 z-0"
        alt="Maskot Voli" />
      <img src="../assets/kategori/lari.png"
        class="absolute top-[47%] left-[25%] lg:left-[30%] w-[180px] lg:w-[220px] xl:w-[260px] hidden md:block animate-float delay-3 z-0"
        alt="Maskot Lari" />
      <img src="../assets/kategori/basket.png"
        class="absolute top-[43%] left-[12%] lg:left-[15%] w-[180px] lg:w-[220px] xl:w-[260px] hidden md:block animate-float delay-2 z-0"
        alt="Maskot Basket" />
      <img src="../assets/kategori/bulutangkis.png"
        class="absolute top-[48%] left-0 w-[250px] lg:w-[300px] xl:w-[350px] hidden md:block animate-float delay-1 z-0"
        alt="Maskot Bulutangkis" />

      <img src="../assets/kategori/esport.png"
        class="absolute bottom-[25%] right-[2%] w-[280px] lg:w-[350px] xl:w-[400px] hidden md:block animate-float delay-1 z-0"
        alt="Maskot Esport" />
      <img src="../assets/kategori/bola.png"
        class="absolute top-[47%] right-[12%] lg:right-[14%] w-[180px] lg:w-[220px] xl:w-[250px] hidden md:block animate-float delay-2 z-0"
        alt="Maskot Bola" />
      <img src="../assets/kategori/tenislap.png"
        class="absolute top-[47%] right-[22%] lg:right-[25%] w-[180px] lg:w-[220px] xl:w-[250px] hidden md:block animate-float delay-3 z-0"
        alt="Maskot Tenis" />
      <img src="../assets/kategori/senam.png"
        class="absolute top-[47%] right-0 w-[180px] lg:w-[220px] xl:w-[250px] hidden md:block animate-float delay-4 z-0"
        alt="Maskot Senam" />
      <div class="block md:hidden absolute inset-0 pointer-events-none">

        <img src="../assets/kategori/bulutangkis.png"
          class="absolute top-[15%] left-[5%] w-[80px] sm:w-[100px] animate-float delay-1 opacity-60"
          alt="Maskot Bulutangkis" />
        <img src="../assets/kategori/basket.png"
          class="absolute top-[12%] right-[5%] w-[70px] sm:w-[90px] animate-float delay-2 opacity-60"
          alt="Maskot Basket" />

        <img src="../assets/kategori/voli.png"
          class="absolute bottom-[15%] left-[2%] w-[120px] sm:w-[150px] animate-float delay-1 opacity-60"
          alt="Maskot Voli" />
        <img src="../assets/kategori/esport.png"
          class="absolute bottom-[18%] right-[2%] w-[100px] sm:w-[130px] animate-float delay-3 opacity-60"
          alt="Maskot Esport" />

        <img src="../assets/kategori/lari.png"
          class="absolute top-[25%] left-[15%] w-[60px] sm:w-[80px] animate-float delay-4 opacity-50"
          alt="Maskot Lari" />
        <img src="../assets/kategori/bola.png"
          class="absolute top-[30%] right-[15%] w-[60px] sm:w-[80px] animate-float delay-5 opacity-50"
          alt="Maskot Bola" />
        <img src="../assets/kategori/tenislap.png"
          class="absolute bottom-[35%] left-[25%] w-[55px] sm:w-[75px] animate-float delay-6 opacity-50"
          alt="Maskot Tenis" />
        <img src="../assets/kategori/senam.png"
          class="absolute bottom-[40%] right-[25%] w-[55px] sm:w-[75px] animate-float delay-7 opacity-50"
          alt="Maskot Senam" />
      </div>

      <div class="relative z-10 flex flex-col items-center justify-center min-h-screen py-8">

        <div class="max-w-sm sm:max-w-md w-full mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 
                opacity-0 animate-fade-in-up animation-delay-500">
          <div class="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
            <span class="font-medium">Final</span>
            <span>18 Des 2024</span>
          </div>
          <div class="text-xs sm:text-sm text-gray-600 mb-3">Lusail Stadium</div>

          <div class="space-y-2 sm:space-y-3">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-gray-900 text-sm sm:text-base">TIM 1</span>
              <div class="text-center leading-tight">
                <span class="text-lg sm:text-xl font-bold text-gray-900">3</span>
                <div class="text-xs text-gray-700">(4)</div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-semibold text-gray-900 text-sm sm:text-base">TIM 2</span>
              <div class="text-center leading-tight">
                <span class="text-lg sm:text-xl font-bold text-gray-900">3</span>
                <div class="text-xs text-gray-700">(2)</div>
              </div>
            </div>
          </div>

          <div class="mt-3 sm:mt-4">
            <span class="inline-block px-3 py-1 bg-purple-900 text-white text-xs rounded-full font-medium">FT</span>
          </div>
        </div>

        <div class="max-w-sm sm:max-w-md w-full mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 
                opacity-0 animate-fade-in-up animation-delay-[700ms]">
          <div class="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
            <span class="font-medium">Play-Off Peringkat 3</span>
            <span>Stadion Panahan</span>
          </div>

          <div class="space-y-2 sm:space-y-3 mt-3">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-gray-900 text-sm sm:text-base">TIM 3</span>
              <div class="text-center leading-tight">
                <span class="text-lg sm:text-xl font-bold text-gray-900">3</span>
                <div class="text-xs text-gray-700">(4)</div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-semibold text-gray-900 text-sm sm:text-base">TIM 4</span>
              <div class="text-center leading-tight">
                <span class="text-lg sm:text-xl font-bold text-gray-900">3</span>
                <div class="text-xs text-gray-700">(2)</div>
              </div>
            </div>
          </div>

          <div class="mt-3 sm:mt-4">
            <span class="inline-block px-3 py-1 bg-purple-900 text-white text-xs rounded-full font-medium">FT</span>
          </div>
        </div>

        <div class="block sm:hidden max-w-sm w-full mx-auto bg-white rounded-xl shadow-lg p-4 mb-6 
                opacity-0 animate-fade-in-up animation-delay-[900ms]">
          <div class="flex justify-between text-xs text-gray-600 mb-2">
            <span class="font-medium">Semi Final</span>
            <span>19 Des 2024</span>
          </div>
          <div class="text-xs text-gray-600 mb-3">Arena Olahraga</div>

          <div class="space-y-2">
            <div class="flex justify-between items-center">
              <span class="font-semibold text-gray-900 text-sm">TIM A</span>
              <div class="text-center leading-tight">
                <span class="text-lg font-bold text-gray-900">2</span>
                <div class="text-xs text-gray-700">(3)</div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <span class="font-semibold text-gray-900 text-sm">TIM B</span>
              <div class="text-center leading-tight">
                <span class="text-lg font-bold text-gray-900">1</span>
                <div class="text-xs text-gray-700">(1)</div>
              </div>
            </div>
          </div>

          <div class="mt-3">
            <span class="inline-block px-3 py-1 bg-green-600 text-white text-xs rounded-full font-medium">LIVE</span>
          </div>
        </div>
      </div>
    </section>
    <section
      class="relative py-8 sm:py-12 lg:py-16 px-4 bg-cover bg-center bg-no-repeat w-full min-h-screen overflow-hidden"
      style="background-image: url('/bg-gambar.png');" data-aos="fade-up" data-aos-duration="1500">

      <!-- Decorative SVG Wave -->
      <svg class="absolute top-0 left-0 w-full h-12 sm:h-16 z-10" viewBox="0 0 1440 150" preserveAspectRatio="none">
        <path fill="#f5f3ef" d="M0,150 C480,50 960,50 1440,150 L1440,0 L0,0 Z" />
      </svg>


      <img src="../assets/assets/obor.png"
        class="absolute bottom-[5%] sm:bottom-[8%] lg:bottom-[10%] left-[0%] w-[300px] sm:w-[400px] lg:w-[500px] xl:w-[600px] hidden md:block float animate-float delay-1 z-0"
        alt="Maskot Kiri" />

      <div
        class="relative z-10 flex flex-col justify-center lg:justify-end items-center lg:items-end h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-32">

        <h1
          class="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center lg:text-right w-full lg:max-w-[70%] xl:max-w-[60%] lg:pr-4 xl:pr-12 mb-6 sm:mb-8 leading-tight"
          data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200">
          PENGENALAN MINI OLYMPIC
        </h1>

        <div class="w-full lg:max-w-[70%] xl:max-w-[60%] lg:pr-4 xl:pr-12">
          <p class="text-xs sm:text-sm md:text-base lg:text-base leading-relaxed sm:leading-loose text-white text-center lg:text-right"
            data-aos="fade-left" data-aos-delay="600" data-aos-duration="1200">
            Selamat datang di halaman resmi Mini Olympic Pertamina EP! Sebagai acara yang dinamis dan penuh semangat,
            Mini Olympic Pertamina EP didedikasikan untuk memupuk kebersamaan, mempromosikan kesehatan, dan merayakan
            semangat sportivitas di antara Pekerja dan Mitra Kerja.
          </p>

          <p class="text-xs sm:text-sm md:text-base lg:text-base leading-relaxed sm:leading-loose text-white text-center lg:text-right mt-4 sm:mt-6"
            data-aos="fade-left" data-aos-delay="800" data-aos-duration="1200">
            Melalui serangkaian kompetisi olahraga dan kegiatan yang menarik, Mini Olympics PEP bertujuan untuk
            memperkuat ikatan dalam keluarga besar Pertamina EP sekaligus sebagai sarana internalisasi nilai-nilai inti
            AKHLAK (Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif). Mari bersama sama kita wujudkan
            perjalanan menuju komunitas yang lebih sehat, lebih terhubung, dan lebih berkelanjutan.
          </p>
        </div>

        <div class="mt-8 sm:mt-10 lg:hidden">
          <button
            class="bg-white bg-opacity-20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-30 transition-all duration-300 border border-white border-opacity-30"
            data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1200">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>

      <div class="absolute inset-0 bg-black bg-opacity-20 lg:bg-opacity-0 z-5"></div>
    </section>
    <section class="relative w-full min-h-screen overflow-hidden">
      <div class="flex flex-col lg:flex-row min-h-screen w-full">


        <div class="w-full lg:w-1/2 h-auto relative overflow-hidden bg-[#C1CF35] min-h-[60vh] lg:min-h-screen">

          <img src="/bunga/svg.png" alt="Background Pattern"
            class="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" />


          <div
            class="relative z-10 w-full max-w-2xl mx-auto pt-8 sm:pt-12 lg:pt-20 px-4 sm:px-6 lg:px-10 pb-8 sm:pb-12 timeline-container">


            <div class="text-center mb-8 sm:mb-12 lg:mb-16 animate-slide-left">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
                Timeline Kegiatan
              </h2>
              <div class="w-20 sm:w-24 h-1 bg-black mx-auto rounded-full"></div>
            </div>


            <div class="space-y-4 sm:space-y-6 lg:space-y-8">


              <div class="timeline-item flex items-start gap-4 sm:gap-6 animate-fade-up delay-100">
                <div
                  class="number-circle w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white font-bold text-sm sm:text-base flex-shrink-0">
                  1
                </div>
                <div class="flex-1 border-l-4 border-black pl-4 sm:pl-6 pb-6">
                  <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-2 sm:mb-3">
                    OPEN REGISTRATION
                  </h3>
                  <div
                    class="date-badge text-xs sm:text-sm lg:text-base text-white inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
                    14 – 18 Juli 2025
                  </div>
                </div>
              </div>


              <div class="timeline-item flex items-start gap-4 sm:gap-6 animate-fade-up delay-200">
                <div
                  class="number-circle w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white font-bold text-sm sm:text-base flex-shrink-0">
                  2
                </div>
                <div class="flex-1 border-l-4 border-black pl-4 sm:pl-6 pb-6">
                  <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-2 sm:mb-3">
                    VERIFIKASI
                  </h3>
                  <div class="space-y-2">
                    <div
                      class="date-badge text-xs sm:text-sm lg:text-base text-white inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
                      21 Juli – 04 Agustus 2025 – Verifikasi
                    </div>
                    <br class="block sm:hidden" />
                    <div
                      class="date-badge text-xs sm:text-sm lg:text-base text-white inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-lg mt-2 sm:mt-0 sm:ml-2">
                      08 Agustus 2025 – Pengumuman Final Peserta
                    </div>
                  </div>
                </div>
              </div>

              <div class="timeline-item flex items-start gap-4 sm:gap-6 animate-fade-up delay-300">
                <div
                  class="number-circle w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white font-bold text-sm sm:text-base flex-shrink-0">
                  3
                </div>
                <div class="flex-1 border-l-4 border-black pl-4 sm:pl-6">
                  <h3 class="text-lg sm:text-xl lg:text-2xl font-semibold text-black mb-2 sm:mb-3">
                    MINI OLYMPIC
                  </h3>
                  <div class="space-y-2">
                    <div
                      class="date-badge text-xs sm:text-sm lg:text-base text-white inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
                      29 – 31 Agustus 2025
                    </div>
                    <br class="block sm:hidden" />
                    <div
                      class="date-badge text-xs sm:text-sm lg:text-base text-white inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-lg mt-2 sm:mt-0 sm:ml-2">
                      31 Agustus 2025 – Fun Run 5K
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full lg:w-1/2 bg-[#f5f3ef] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden min-h-[40vh] lg:min-h-screen">
          <img src="/bunga/timeline.png" alt="Background Decoration" class="absolute top-[15%] sm:top-[20%] left-[50%] sm:left-[60%] transform -translate-x-1/2 -translate-y-1/2 
                              w-[200px] sm:w-[300px] lg:w-[400px] opacity-40 pointer-events-none animate-float" />
          <div class="w-full max-w-xs sm:max-w-sm lg:max-w-lg mb-6 sm:mb-8 lg:mb-12 animate-slide-right delay-200">
            <img src="/kategori/jsc.png" alt="Maskot JSC" class="w-[300px] h-auto animate-pulse-scale" />
          </div>
          <div
            class="w-full overflow-hidden whitespace-nowrap bg-white/50 rounded-2xl py-3 sm:py-4 lg:py-6 animate-slide-right delay-400">
            <div class="inline-block animate-marquee space-x-8 sm:space-x-12 lg:space-x-24 px-4">
              <img src="../assets/addinfo/asean.png" alt="ASEAN" class="inline h-10 sm:h-12 lg:h-16 object-contain" />
              <img src="../assets/addinfo/skkmigas.png" alt="SKK Migas" class="inline h-10 sm:h-12 lg:h-16 object-contain" />
              <img src="../assets/addinfo/iog.png" alt="IOG" class="inline h-10 sm:h-12 lg:h-16 object-contain" />
              <img src="../assets/addinfo/pertaminaEP.png" alt="Pertamina EP"
                class="inline h-12 sm:h-16 lg:h-20 object-contain" />
              <img src="../assets/addinfo/pertamedika.png" alt="Pertamedika"
                class="inline h-10 sm:h-12 lg:h-16 object-contain" />


              <img src="../assets/addinfo/asean.png" alt="ASEAN" class="inline h-10 sm:h-12 lg:h-16 object-contain" />
              <img src="../assets/addinfo/skkmigas.png" alt="SKK Migas" class="inline h-10 sm:h-12 lg:h-16 object-contain" />
              <img src="../assets/addinfo/iog.png" alt="IOG" class="inline h-10 sm:h-12 lg:h-16 object-contain" />
              <img src="../assets/addinfo/pertaminaEP.png" alt="Pertamina EP"
                class="inline h-12 sm:h-16 lg:h-20 object-contain" />
              <img src="../assets/addinfo/pertamedika.png" alt="Pertamedika"
                class="inline h-10 sm:h-12 lg:h-16 object-contain" />
            </div>
          </div>
          <div class="mt-4 sm:mt-6 lg:mt-8 text-center animate-fade-up delay-500">
            <p class="text-xs sm:text-sm text-gray-600 font-medium">
              Didukung oleh Partner Terpercaya
            </p>
          </div>
        </div>
      </div>
    </section>
    <div id="scroll-container" class="h-screen snap-y snap-mandatory">
      <section id="horizontal-scroll" ref="horizontalSection"
        class="relative w-full h-screen snap-start overflow-hidden">
        <div class="h-screen overflow-hidden">
          <div id="horizontal-wrapper" ref="horizontalWrapper"
            class="flex h-screen will-change-transform transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentSlide * 100}vw)` }">
            <div class="w-screen flex-shrink-0 bg-cover bg-center bg-no-repeat relative"
              style="background-image: url('Hero.png');">
              <h1
                class="absolute top-8 sm:top-12 md:top-20 left-4 sm:left-8 md:left-20 text-gray-400 opacity-25 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold select-none">
                VOLLY</h1>
              <h1
                class="absolute top-16 sm:top-24 md:top-52 left-4 sm:left-8 md:left-20 text-gray-400 opacity-25 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold select-none">
                BALL</h1>

              <div
                class="flex flex-col items-center justify-start h-full text-white px-4 pt-16 sm:pt-20 md:pt-24 gap-6 sm:gap-8 md:gap-12">
                <div class="flex flex-row gap-2">
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-300">Cabang</h1>
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Olahraga</h1>
                </div>
                <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mt-6 sm:mt-8 md:mt-12">Volly
                  Ball</h1>
                <div class="flex flex-col items-center">
                  <router-link to="/registrasi">
                    <button
                      class="text-white border border-red-700 bg-red-700 rounded-lg text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 mt-2 hover:bg-red-800 transition-colors">
                      Registrasi
                    </button>
                  </router-link>
                  <img src="../assets/bunga/hiasan.png" alt="hiasan" class="w-24 sm:w-32 md:w-[150px] py-6 sm:py-8 md:py-12" />
                </div>
                <img src="../assets/listpeserta/awan.png" alt="awan" class="absolute bottom-0 left-0 w-full z-0" />
              </div>
              <img src="../assets/assets/voli.png"
                class="absolute bottom-[15%] sm:bottom-[18%] md:bottom-[20%] left-[2%] w-48 sm:w-64 md:w-80 lg:w-[400px] transition-transform hover:scale-105"
                alt="Maskot" />
            </div>

            <!-- Football Slide -->
            <div class="relative w-screen flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style="background-image: url('../assets/Hero.png');">
              <div
                class="flex flex-col items-center justify-start h-full text-white px-4 pt-16 sm:pt-20 md:pt-24 gap-4 sm:gap-6">
                <div class="flex flex-row gap-2">
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-200">Cabang</h1>
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Olahraga</h1>
                </div>
                <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mt-6 sm:mt-8 md:mt-12">
                  Football</h1>
                <div class="flex flex-col items-center">
                  <router-link to="/registrasi">
                    <button
                      class="text-white border border-red-700 bg-red-700 rounded-lg text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 mt-2 hover:bg-red-800 transition-colors">
                      Registrasi
                    </button>
                  </router-link>
                  <img src="/bunga/hiasan.png" alt="hiasan" class="w-24 sm:w-32 md:w-[150px] py-6 sm:py-8 md:py-12">
                </div>
              </div>
              <img src="/listpeserta/awan.png" alt="awan" class="absolute bottom-0 left-0 w-full z-0" />
              <img src="/assets/bola.png"
                class="absolute bottom-[15%] sm:bottom-[18%] md:bottom-[20%] left-[2%] w-44 sm:w-56 md:w-72 lg:w-[350px] transition-transform hover:scale-105"
                alt="Maskot" />
            </div>

            <!-- Basketball Slide -->
            <div class="relative w-screen flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style="background-image: url('/Hero.png');">
              <div
                class="flex flex-col items-center justify-start h-full text-white px-4 pt-16 sm:pt-20 md:pt-24 gap-4 sm:gap-6">
                <div class="flex flex-row gap-2">
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-200">Cabang</h1>
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Olahraga</h1>
                </div>
                <h1 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-6 sm:mt-8 md:mt-12">
                  Basket Ball</h1>
                <div class="flex flex-col items-center">
                  <router-link to="/registrasi">
                    <button
                      class="text-white border border-red-700 bg-red-700 rounded-lg text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 mt-2 hover:bg-red-800 transition-colors">
                      Registrasi
                    </button>
                  </router-link>
                  <img src="/bunga/hiasan.png" alt="hiasan" class="w-24 sm:w-32 md:w-[150px] py-6 sm:py-8 md:py-12">
                </div>
              </div>
              <img src="/listpeserta/awan.png" alt="awan" class="absolute bottom-0 left-0 w-full z-0" />
              <img src="/assets/basket.png"
                class="absolute bottom-[15%] sm:bottom-[18%] md:bottom-[20%] left-[2%] w-52 sm:w-72 md:w-80 lg:w-[450px] transition-transform hover:scale-105"
                alt="Maskot" />
            </div>

            <!-- Running Slide -->
            <div class="relative w-screen flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style="background-image: url('/Hero.png');">
              <div
                class="flex flex-col items-center justify-start h-full text-white px-4 pt-16 sm:pt-20 md:pt-24 gap-4 sm:gap-6">
                <div class="flex flex-row gap-2">
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-200">Cabang</h1>
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Olahraga</h1>
                </div>
                <h1 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-6 sm:mt-8 md:mt-12">
                  Running</h1>
                <div class="flex flex-col items-center">
                  <router-link to="/registrasi">
                    <button
                      class="text-white border border-red-700 bg-red-700 rounded-lg text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 mt-2 hover:bg-red-800 transition-colors">
                      Registrasi
                    </button>
                  </router-link>
                  <img src="/bunga/hiasan.png" alt="hiasan" class="w-24 sm:w-32 md:w-[150px] py-6 sm:py-8 md:py-12">
                </div>
              </div>
              <img src="/listpeserta/awan.png" alt="awan" class="absolute bottom-0 left-0 w-full z-0" />
              <img src="/assets/lari.png"
                class="absolute bottom-[15%] sm:bottom-[18%] md:bottom-[20%] left-[2%] w-52 sm:w-72 md:w-80 lg:w-[450px] transition-transform hover:scale-105"
                alt="Maskot" />
            </div>

            <!-- Badminton Slide -->
            <div class="relative w-screen flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style="background-image: url('/Hero.png');">
              <div
                class="flex flex-col items-center justify-start h-full text-white px-4 pt-16 sm:pt-20 md:pt-24 gap-4 sm:gap-6">
                <div class="flex flex-row gap-2">
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-200">Cabang</h1>
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Olahraga</h1>
                </div>
                <h1 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-6 sm:mt-8 md:mt-12">
                  Badminton</h1>
                <div class="flex flex-col items-center">
                  <router-link to="/registrasi">
                    <button
                      class="text-white border border-red-700 bg-red-700 rounded-lg text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 mt-2 hover:bg-red-800 transition-colors">
                      Registrasi
                    </button>
                  </router-link>
                  <img src="/bunga/hiasan.png" alt="hiasan" class="w-24 sm:w-32 md:w-[150px] py-6 sm:py-8 md:py-12">
                </div>
              </div>
              <img src="/listpeserta/awan.png" alt="awan" class="absolute bottom-0 left-0 w-full z-0" />
              <img src="/assets/badminton.png"
                class="absolute bottom-[15%] sm:bottom-[18%] md:bottom-[20%] left-[2%] w-48 sm:w-64 md:w-80 lg:w-[400px] transition-transform hover:scale-105"
                alt="Maskot" />
            </div>

            <!-- Tenis Meja Slide -->
            <div class="relative w-screen flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style="background-image: url('/Hero.png');">
              <div
                class="flex flex-col items-center justify-start h-full text-white px-4 pt-16 sm:pt-20 md:pt-24 gap-4 sm:gap-6">
                <div class="flex flex-row gap-2">
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-200">Cabang</h1>
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Olahraga</h1>
                </div>
                <h1 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-6 sm:mt-8 md:mt-12">Tenis
                  Meja</h1>
                <div class="flex flex-col items-center">
                  <router-link to="/registrasi">
                    <button
                      class="text-white border border-red-700 bg-red-700 rounded-lg text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 mt-2 hover:bg-red-800 transition-colors">
                      Registrasi
                    </button>
                  </router-link>
                  <img src="/bunga/hiasan.png" alt="hiasan" class="w-24 sm:w-32 md:w-[150px] py-6 sm:py-8 md:py-12">
                </div>
              </div>
              <img src="/listpeserta/awan.png" alt="awan" class="absolute bottom-0 left-0 w-full z-0" />
              <img src="/assets/tesnimeja.png"
                class="absolute bottom-[15%] sm:bottom-[18%] md:bottom-[20%] left-[2%] w-52 sm:w-72 md:w-80 lg:w-[450px] transition-transform hover:scale-105"
                alt="Maskot" />
            </div>

            <!-- Senam Slide -->
            <div class="relative w-screen flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style="background-image: url('/Hero.png');">
              <div
                class="flex flex-col items-center justify-start h-full text-white px-4 pt-16 sm:pt-20 md:pt-24 gap-4 sm:gap-6">
                <div class="flex flex-row gap-2">
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-200">Cabang</h1>
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Olahraga</h1>
                </div>
                <h1 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-6 sm:mt-8 md:mt-12">Senam
                </h1>
                <div class="flex flex-col items-center">
                  <router-link to="/registrasi">
                    <button
                      class="text-white border border-red-700 bg-red-700 rounded-lg text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 mt-2 hover:bg-red-800 transition-colors">
                      Registrasi
                    </button>
                  </router-link>
                  <img src="/bunga/hiasan.png" alt="hiasan" class="w-24 sm:w-32 md:w-[150px] py-6 sm:py-8 md:py-12">
                </div>
              </div>
              <img src="/listpeserta/awan.png" alt="awan" class="absolute bottom-0 left-0 w-full z-0" />
              <img src="/assets/senam.png"
                class="absolute bottom-[35%] sm:bottom-[40%] md:bottom-[50%] left-[2%] w-52 sm:w-72 md:w-80 lg:w-[450px] transition-transform hover:scale-105"
                alt="Maskot" />
            </div>
            <!-- Esport Slide -->
            <div class="relative w-screen flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style="background-image: url('/Hero.png');">
              <div
                class="flex flex-col items-center justify-start h-full text-white px-4 pt-16 sm:pt-20 md:pt-24 gap-4 sm:gap-6">
                <div class="flex flex-row gap-2">
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-yellow-200">Cabang</h1>
                  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white">Olahraga</h1>
                </div>
                <h1 class="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-6 sm:mt-8 md:mt-12">
                  Esport</h1>
                <div class="flex flex-col items-center">
                  <router-link to="/registrasi">
                    <button
                      class="text-white border border-red-700 bg-red-700 rounded-lg text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 mt-2 hover:bg-red-800 transition-colors">
                      Registrasi
                    </button>
                  </router-link>
                  <img src="/bunga/hiasan.png" alt="hiasan" class="w-24 sm:w-32 md:w-[150px] py-6 sm:py-8 md:py-12">
                </div>
              </div>
              <img src="/listpeserta/awan.png" alt="awan" class="absolute bottom-0 left-0 w-full z-0" />
              <img src="/assets/esport.png"
                class="absolute bottom-[15%] sm:bottom-[20%] md:bottom-[20%] left-[2%] w-52 sm:w-72 md:w-80 lg:w-[450px] transition-transform hover:scale-105"
                alt="Maskot" />
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          <div v-for="(_, index) in slideCount" :key="index"
            class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-110"
            :class="[currentSlide === index ? 'bg-white scale-125' : 'bg-white/50']" @click="goToSlide(index)"></div>
        </div>

        <!-- Navigation Arrows -->
        <button v-if="currentSlide > 0" @click="previousSlide"
          class="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 transition-colors z-10">
          <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button v-if="currentSlide < slideCount - 1" @click="nextSlide"
          class="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 transition-colors z-10">
          <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Scroll Down Indicator -->
        <div v-if="currentSlide === slideCount - 1"
          class="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
          <div class="text-white flex flex-col items-center cursor-pointer" @click="scrollToNext">
            <span class="mb-1 text-sm sm:text-base">Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        <div class="absolute top-4 left-0 right-0 px-4 z-10">
          <div class="w-full bg-white/20 rounded-full h-1">
            <div class="bg-white h-1 rounded-full transition-all duration-500 ease-out"
              :style="{ width: `${((currentSlide + 1) / slideCount) * 100}%` }"></div>
          </div>
        </div>
      </section>
    </div>

    <section class="bg-[#f5f3ef] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto w-full">
        <div class="text-center mb-16 lg:mb-20">
          <div
            class="inline-flex items-center justify-center w-16 h-16 bg-[#E91717] rounded-full mb-6 animate-pulse-border">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3l14 9-14 9V3z"></path>
            </svg>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            <span class="bg-gradient-to-r from-[#E91717] to-red-600 bg-clip-text text-transparent animate-slide-up">
              Opening Ceremony
            </span>
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-[#E91717] to-red-600 mx-auto rounded-full animate-slide-up"></div>
        </div>


        <div class="mb-16 lg:mb-20 animate-slide-up">
          <div class="relative group max-w-5xl mx-auto">
            <div
              class="absolute -inset-4 bg-gradient-to-r from-[#E91717] to-red-600 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            </div>
            <div class="relative overflow-hidden rounded-3xl shadow-2xl">
              <img src="../assets/opening/obor.png" alt="Obor Ceremony"
                class="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                <div class="glass-effect bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 animate-float">
                    🔥 Obor Ceremony
                  </h3>
                  <p class="text-white/90 text-sm sm:text-base lg:text-lg max-w-2xl">
                    The grand../assets opening torch ceremony that lights up the spirit of our celebration
                  </p>
                  <div class="flex items-center mt-4">
                    <div class="w-2 h-2 bg-[#E91717] rounded-full animate-pulse"></div>
                    <div class="w-2 h-2 bg-[#E91717] rounded-full animate-pulse mx-1" style="animation-delay: 0.2s;">
                    </div>
                    <div class="w-2 h-2 bg-[#E91717] rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div class="group card-hover animate-slide-left">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <div class="relative h-64 sm:h-72 overflow-hidden">
                <img src="../assets/opening/kopraljono.png" alt="Kopral Jono"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
                <div class="absolute top-4 right-4">
                  <div class="bg-[#E91717] text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#E91717] transition-colors duration-300">
                    🎭 Kopral Jono
                  </h3>
                  <div class="w-3 h-3 bg-[#E91717] rounded-full animate-pulse"></div>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  Traditional Indonesian comedy performance bringing laughter and joy to the ceremony
                </p>
                <div class="w-full bg-gray-200 rounded-full h-1 mb-4">
                  <div
                    class="bg-gradient-to-r from-[#E91717] to-red-600 h-1 rounded-full transition-all duration-1000 group-hover:w-full"
                    style="width: 60%"></div>
                </div>

              </div>
            </div>
          </div>
          <div class="group card-hover animate-slide-up" style="animation-delay: 0.2s;">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <div class="relative h-64 sm:h-72 overflow-hidden">
                <img src="../assets/opening/marchingband.png" alt="Marching Band"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
                <div class="absolute top-4 right-4">
                  <div class="bg-[#E91717] text-white px-3 py-1 rounded-full text-xs font-bold">
                    LIVE
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#E91717] transition-colors duration-300">
                    🎺 Marching Band
                  </h3>
                  <div class="w-3 h-3 bg-[#E91717] rounded-full animate-pulse"></div>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  Spectacular musical performance with synchronized movements and powerful melodies
                </p>
                <div class="w-full bg-gray-200 rounded-full h-1 mb-4">
                  <div
                    class="bg-gradient-to-r from-[#E91717] to-red-600 h-1 rounded-full transition-all duration-1000 group-hover:w-full"
                    style="width: 80%"></div>
                </div>

              </div>
            </div>
          </div>
          <div class="group card-hover animate-slide-right md:col-span-2 lg:col-span-1" style="animation-delay: 0.4s;">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-xl">
              <div class="relative h-64 sm:h-72 overflow-hidden">
                <img src="../assets/opening/tarikolosal.png" alt="Tari Kolosal"
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                </div>
                <div class="absolute top-4 right-4">
                  <div class="bg-[#E91717] text-white px-3 py-1 rounded-full text-xs font-bold">
                    GRAND
                  </div>
                </div>
              </div>

              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-xl font-bold text-gray-900 group-hover:text-[#E91717] transition-colors duration-300">
                    💃 Tari Kolosal
                  </h3>
                  <div class="w-3 h-3 bg-[#E91717] rounded-full animate-pulse"></div>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  Massive traditional dance performance showcasing Indonesian cultural heritage
                </p>


                <div class="w-full bg-gray-200 rounded-full h-1 mb-4">
                  <div
                    class="bg-gradient-to-r from-[#E91717] to-red-600 h-1 rounded-full transition-all duration-1000 group-hover:w-full"
                    style="width: 90%"></div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-16 lg:mt-20">
          <div
            class="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span class="text-gray-700 font-medium">Experience the Grand Opening</span>
            <div class="w-2 h-2 bg-[#E91717] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

  </div>
  <FooterDashboard />
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import FooterDashboard from '@/components/FooterDashboard.vue';

export default {
  name: "MiniOlympicPage",
  components: {
    NavbarDashboard,
    FooterDashboard,
  },
  setup() {
    const horizontalSection = ref(null);
    const horizontalWrapper = ref(null);
    const currentSlide = ref(0);
    const isTransitioning = ref(false);
    const slideCount = 8;
    const wheelAccumulator = ref(0);
    const wheelThreshold = 30;
    const lastWheelTime = ref(0);
    const debounceTimeout = ref(null);

    const showAll = ref(false);
    const olahragaList = [
      { nama: 'Badminton', gambar: '../assets/assets/bulutangkis.png', grid: 'col-span-2 row-span-1' },
      { nama: 'Basket', gambar: '../assets/assets/berita/basket.jpg', grid: 'col-span-1 row-span-1' },
      { nama: 'E-Sport', gambar: '../assets/assets/berita/esport.jpg', grid: 'col-span-1 row-span-1' },
      { nama: 'Lari', gambar: '../assets/assets/berita/lari.jpg', grid: 'col-span-2 row-span-2' },
      { nama: 'Senam', gambar: '../assets/assets/berita/senam.jpg', grid: 'col-span-1 row-span-1' },
      { nama: 'Tenis Lapangan', gambar: '../assets/assets/berita/tenislap.jpg', grid: 'col-span-1 row-span-1' },
    ];

    const isInHorizontalSection = () => {
      const section = horizontalSection.value;
      if (!section) return false;

      const rect = section.getBoundingClientRect();
      return rect.top <= 0 && rect.bottom >= window.innerHeight;
    };

    const changeSlide = (newSlide, smooth = true) => {
      if (isTransitioning.value || newSlide === currentSlide.value) return;
      if (newSlide < 0 || newSlide >= slideCount) return;

      isTransitioning.value = true;
      currentSlide.value = newSlide;

      if (horizontalWrapper.value) {
        horizontalWrapper.value.style.transition = smooth ? 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
        horizontalWrapper.value.style.transform = `translateX(-${currentSlide.value * 100}vw)`;
      }

      setTimeout(() => {
        isTransitioning.value = false;
      }, smooth ? 400 : 50);
    };

    const goToSlide = (index) => changeSlide(index);
    const nextSlide = () => changeSlide(currentSlide.value + 1);
    const previousSlide = () => changeSlide(currentSlide.value - 1);

    const handleWheel = (e) => {
      if (!isInHorizontalSection()) return;

      const now = Date.now();
      const deltaY = e.deltaY;

      if (debounceTimeout.value) {
        clearTimeout(debounceTimeout.value);
      }

      if (now - lastWheelTime.value > 100) {
        wheelAccumulator.value = 0;
      }

      lastWheelTime.value = now;
      wheelAccumulator.value += Math.abs(deltaY);

      const direction = deltaY > 0 ? 1 : -1;
      const canScrollHorizontally =
        (direction > 0 && currentSlide.value < slideCount - 1) ||
        (direction < 0 && currentSlide.value > 0);

      if (wheelAccumulator.value >= wheelThreshold && !isTransitioning.value) {
        if (canScrollHorizontally) {
          e.preventDefault();
          e.stopPropagation();

          if (direction > 0) {
            nextSlide();
          } else {
            previousSlide();
          }

          wheelAccumulator.value = 0;

          debounceTimeout.value = setTimeout(() => {
            wheelAccumulator.value = 0;
          }, 100);
        } else {

          wheelAccumulator.value = 0;

          debounceTimeout.value = setTimeout(() => {
            if (direction > 0 && currentSlide.value === slideCount - 1) {

              const section = horizontalSection.value;
              if (section) {
                window.scrollTo({
                  top: section.offsetTop + window.innerHeight,
                  behavior: 'smooth'
                });
              }
            } else if (direction < 0 && currentSlide.value === 0) {

              const section = horizontalSection.value;
              if (section) {
                window.scrollTo({
                  top: Math.max(0, section.offsetTop - window.innerHeight),
                  behavior: 'smooth'
                });
              }
            }
          }, 50);
        }
      }
    };

    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      if (!isInHorizontalSection()) return;

      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      if (!isInHorizontalSection()) return;

      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
        diffX > 0 ? nextSlide() : previousSlide();
      }
    };

    const handleKeyDown = (e) => {
      if (!isInHorizontalSection()) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    };

    const scrollToNext = () => {
      const section = horizontalSection.value;
      if (section) {
        window.scrollTo({
          top: section.offsetTop + window.innerHeight,
          behavior: 'smooth'
        });
      }
    };

    const autoPlay = ref(false);
    const autoPlayInterval = ref(null);

    const startAutoPlay = () => {
      if (autoPlayInterval.value) return;
      autoPlayInterval.value = setInterval(() => {
        if (currentSlide.value < slideCount - 1) {
          nextSlide();
        } else {
          changeSlide(0);
        }
      }, 5000);
    };

    const stopAutoPlay = () => {
      if (autoPlayInterval.value) {
        clearInterval(autoPlayInterval.value);
        autoPlayInterval.value = null;
      }
    };

    onMounted(() => {
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('touchstart', handleTouchStart, { passive: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: true });
      document.addEventListener('keydown', handleKeyDown);

      const section = horizontalSection.value;
      if (section) {
        section.addEventListener('mouseenter', stopAutoPlay);
        section.addEventListener('mouseleave', () => {
          if (autoPlay.value) startAutoPlay();
        });
      }
    });

    onUnmounted(() => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('keydown', handleKeyDown);

      if (debounceTimeout.value) {
        clearTimeout(debounceTimeout.value);
      }

      stopAutoPlay();
    });

    return {
      horizontalSection,
      horizontalWrapper,
      currentSlide,
      slideCount,
      showAll,
      olahragaList,
      goToSlide,
      nextSlide,
      previousSlide,
      scrollToNext,
      autoPlay,
      startAutoPlay,
      stopAutoPlay
    };
  }
};
</script>


<style>
body {
  @apply font-montserrat;
  margin: 0;
  padding: 0;
}

#horizontal-wrapper {
  transition: transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.snap-y {
  scroll-snap-type: y mandatory;
}

.snap-start {
  scroll-snap-align: start;
}

.snap-mandatory {
  --tw-scroll-snap-strictness: mandatory;
}

#scroll-container::-webkit-scrollbar {
  display: none;
}

#scroll-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
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

.shadow-gold {
  box-shadow: 0 4px 12px rgba(255, 215, 0, 0.6);
  /* gold shadow */
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.float {
  animation: float 3s ease-in-out infinite;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.zoom-in {
  animation: zoomIn 0.6s ease-out forwards;
}

.delay-1 {
  animation-delay: 0.3s;
}

.delay-2 {
  animation-delay: 0.6s;
}

.delay-3 {
  animation-delay: 0.9s;
}

.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* ini style punya lokasi venue */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.rotate-left {
  transform: rotateY(20deg);
}

.rotate-right {
  transform: rotateY(-20deg);
}

.rotate-left {
  transform: perspective(1000px) rotateY(20deg);
}

.rotate-right {
  transform: perspective(1000px) rotateY(-20deg);
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes slide-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slide-in 1s ease-out forwards;
}

.animate-marquee {
  display: inline-block;
  animation: marquee 20s linear infinite;
}

@keyframes fadeInUp {
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

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

.delay-1 {
  animation-delay: 0.3s;
}

.delay-2 {
  animation-delay: 0.6s;
}

.delay-3 {
  animation-delay: 0.9s;
}

.delay-4 {
  animation-delay: 1.2s;
}



@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-border {

  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(233, 23, 23, 0.4);
  }

  50% {
    box-shadow: 0 0 0 20px rgba(233, 23, 23, 0);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-slide-up {
  animation: slideInUp 0.8s ease-out;
}

.animate-slide-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slide-right {
  animation: slideInRight 0.8s ease-out;
}

.animate-pulse-border {
  animation: pulse-border 2s infinite;
}

.glass-effect {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.hero-gradient {
  background: linear-gradient(135deg, rgba(233, 23, 23, 0.1) 0%, rgba(233, 23, 23, 0.05) 100%);
}

.card-hover {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card-hover:hover {
  transform: translateY(-20px) scale(1.03);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #E91717;
  border-radius: 4px;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-scale {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}

.animate-fade-up {
  animation: fadeInUp 0.8s ease-out;
}

.animate-slide-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slide-right {
  animation: slideInRight 0.8s ease-out;
}

.animate-pulse-scale {
  animation: pulse-scale 2s ease-in-out infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.timeline-item {
  position: relative;
  transition: all 0.3s ease;
}

.timeline-item:hover {
  transform: translateX(8px);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -2px;
  top: 50px;
  bottom: -20px;
  width: 2px;
  background: linear-gradient(to bottom, #C1CF35, transparent);
}

.timeline-item:last-child::before {
  display: none;
}

.date-badge {
  background: linear-gradient(135deg, #000 0%, #333 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.number-circle {
  background: linear-gradient(135deg, #000 0%, #333 100%);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* Custom scrollbar for mobile */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #C1CF35;
  border-radius: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .timeline-container {
    padding: 1.5rem 1rem;
  }

  .timeline-item {
    margin-bottom: 2rem;
  }

  .timeline-item::before {
    left: 15px;
    top: 40px;
  }
}
</style>

<style scoped>
#horizontal-wrapper {
  backface-visibility: hidden;
  perspective: 1000px;
}

button,
.cursor-pointer {
  transition: all 0.2s ease;
}

.select-none {
  user-select: none;
}

.z-10 {
  z-index: 10;
}

/* Custom animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

/* Transition styles */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Custom scrollbar for mobile */
@media (max-width: 768px) {
  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #dc2626;
    border-radius: 2px;
  }
}

@media (max-width: 640px) {
  .grid-responsive {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 640px) and (max-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Enhanced Float Animation */
@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  25% {
    transform: translateY(-8px) rotate(1deg);
  }

  50% {
    transform: translateY(-15px) rotate(0deg);
  }

  75% {
    transform: translateY(-8px) rotate(-1deg);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Staggered Animation Delays */
.delay-1 {
  animation-delay: 0.5s;
}

.delay-2 {
  animation-delay: 1s;
}

.delay-3 {
  animation-delay: 1.5s;
}

.delay-4 {
  animation-delay: 2s;
}

.delay-5 {
  animation-delay: 2.5s;
}

.delay-6 {
  animation-delay: 3s;
}

.delay-7 {
  animation-delay: 3.5s;
}

/* Fade In Up Animation */
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-\[700ms\] {
  animation-delay: 700ms;
}

.animation-delay-\[900ms\] {
  animation-delay: 900ms;
}

/* Mobile Specific Styles */
@media (max-width: 768px) {

  /* Prevent horizontal scroll on mobile */
  section {
    overflow-x: hidden;
  }

  /* Ensure mascots don't interfere with content */
  .animate-float {
    animation-duration: 6s;
  }
}

/* Tablet Adjustments */
@media (min-width: 768px) and (max-width: 1024px) {

  /* Slightly reduce mascot sizes for tablets */
  img[class*="absolute"] {
    transform: scale(0.8);
  }
}
</style>