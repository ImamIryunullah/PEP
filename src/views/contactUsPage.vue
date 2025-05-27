<template>
    <div class="min-h-screen w-full bg-gray-50 relative">
      <!-- Navbar -->
      <NavbarDashboard />
  
      <!-- Top Wave Transition -->
      <div class="overflow-hidden leading-none -mb-1 rotate-180">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" class="w-full h-24 fill-gray-100">
          <path d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,101.3C672,85,768,107,864,138.7C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96V320H0Z"></path>
        </svg>
      </div>
  
      <!-- Contact Section -->
      <section class="py-12 px-4 sm:px-8">
        <div class="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
          <!-- Header -->
          <div class="bg-red-600 p-6 sm:p-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-white text-center">Contact Us</h2>
          </div>
  
          <!-- Contact Info -->
          <div class="p-6 sm:p-8 space-y-6 text-gray-800">
            <div class="text-center">
              <p class="text-lg font-semibold">PORTAL INDONESIA</p>
              <p class="text-sm sm:text-base">PT. PORTAL INDONESIA GROUP</p>
            </div>
  
            <div class="grid gap-6 sm:gap-4 sm:grid-cols-2">
              <ContactItem iconColor="text-blue-500" title="Office Center" :lines="[
                'Jl. Proklamasi Blok K29',
                'Ilir Barat I, Lorok Pakjo, Palembang',
                'South Sumatera – Indonesia'
              ]" iconPath="M17 9V7a4 4 0 00-8 0v2M5 12h14M12 17v2m-6-6a6 6 0 1112 0 6 6 0 01-12 0z" />
  
              <ContactItem iconColor="text-green-500" title="Phone & Fax" :lines="['+62 711-5730572']"
                iconPath="M3 5h12M9 3v2m0 4v2m0 4v2m0 4v2m6-12h6M15 5v14" />
  
              <ContactItem iconColor="text-purple-500" title="Contact Person"
                :lines="['+62 813-6700-7240 (Angie)']" iconPath="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v1.5a2.5 2.5 0 01-5 0V12" />
  
              <ContactItem iconColor="text-red-500" title="Email" :lines="[
                '<a href=\'mailto:portalindonesiagroup@gmail.com\' class=\'text-blue-600 underline\'>portalindonesiagroup@gmail.com</a>'
              ]" iconPath="M16 12H8m0 0l4-4m-4 4l4 4" />
  
              <ContactItem iconColor="text-yellow-500" title="Website" :lines="[
                '<a href=\'https://www.portalindonesiagroup.com\' target=\'_blank\' class=\'text-blue-600 underline\'>www.portalindonesiagroup.com</a>'
              ]" iconPath="M12 4v16m8-8H4" />
            </div>
  
            <!-- Additional Text Contact Person Info -->
            <div class="mt-10 text-gray-700 text-center space-y-2 text-sm sm:text-base leading-relaxed">
              <p><strong>Contact Person:</strong></p>
              <p>PORTAL INDONESIA<br>PT. PORTAL INDONESIA GROUP</p>
              <p><strong>Office Center :</strong><br>
                Jl. Proklamasi Blok K29 Ilir Barat I Lorok Pakjo Palembang<br>
                South Sumatera – Indonesia
              </p>
              <p><strong>Phone & Fax :</strong> +62 711-5730572</p>
              <p><strong>Contact Person :</strong> +62 813-6700-7240 (Angie)</p>
              <p><strong>Email :</strong> <a href="mailto:portalindonesiagroup@gmail.com" class="text-blue-600 underline">portalindonesiagroup@gmail.com</a></p>
              <p><strong>Website :</strong> <a href="https://www.portalindonesiagroup.com" target="_blank" class="text-blue-600 underline">www.portalindonesiagroup.com</a></p>
            </div>
          </div>
        </div>
    </section>
    </div>
    <FooterDashboard />
  </template>

  
  <script>
  import NavbarDashboard from '@/components/NavbarDashboard.vue';
  import FooterDashboard from '@/components/FooterDashboard.vue'
  
  export default {
    components: {
      NavbarDashboard,
      FooterDashboard,
      ContactItem: {
        props: {
          iconPath: String,
          iconColor: String,
          title: String,
          lines: Array
        },
        template: `
          <div class="flex items-start gap-4">
            <svg :class="'w-6 h-6 mt-1 ' + iconColor" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" :d="iconPath" />
            </svg>
            <div class="text-sm sm:text-base space-y-1">
              <strong>{{ title }}:</strong>
              <div v-for="(line, index) in lines" :key="index" v-html="line"></div>
            </div>
          </div>
        `
      }
    }
  }
  </script>
  
  <style scoped>
  /* Animasi ringan jika dibutuhkan */
  .fade-in {
    animation: fadeIn 0.6s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  