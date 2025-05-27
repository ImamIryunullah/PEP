<template>
  <footer ref="footerRef"
    :class="['transition-opacity duration-1000 ease-out', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6']"
    class="bg-[#D71E28] text-white py-8 px-4 md:px-16">
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-start border-b border-white/40 pb-6 gap-10">

      <!-- MINI OLYMPIC -->
      <div class="max-w-md">
        <h2 class="text-lg font-semibold mb-2">Mini Olympic Pertamina EP</h2>
        <p class="text-sm text-white/90 mb-2">
          Sebagai acara yang dinamis dan penuh semangat, Mini Olympic Pertamina EP didedikasikan untuk memupuk
          kebersamaan,
          mempromosikan kesehatan, dan merayakan semangat sportivitas di antara Pekerja dan Mitra Kerja.
        </p>
        <p class="text-sm text-white/90">
          Mini Olympics PEP bertujuan memperkuat ikatan dalam keluarga besar Pertamina EP sekaligus sebagai sarana
          internalisasi nilai-nilai inti AKHLAK (Amanah, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif).
        </p>
      </div>

      <!-- PORTAL INDONESIA -->
      <div class="max-w-md">
        <h2 class="text-lg font-semibold mb-2">Portal Indonesia</h2>
        <ul class="text-sm space-y-1">
          <li><strong>PT. PORTAL INDONESIA GROUP</strong></li>
          <li>Jl. Proklamasi Blok K29 Ilir Barat I Lorok Pakjo, Palembang</li>
          <li>South Sumatera – Indonesia</li>
          <li>Phone & Fax: +62 711-5730572</li>
          <li>Contact Person: +62 813-6700-7240 (Angie)</li>
          <li>Email: <a href="mailto:portalindonesiagroup@gmail.com"
              class="underline">portalindonesiagroup@gmail.com</a></li>
          <li>Website: <a href="http://www.portalindonesiagroup.com" class="underline">www.portalindonesiagroup.com</a>
          </li>
        </ul>
      </div>

      <!-- MENU + SOSMED -->
      <div class="flex flex-col md:items-end w-full md:w-auto">
        <ul class="flex flex-wrap gap-6 text-sm font-medium mb-4 md:mb-2">
          <li><a href="#">JADWAL & HASIL</a></li>
          <li><a href="#">REGISTRASI</a></li>
          <li><a href="#">LIST PESERTA</a></li>
          <li><a href="#">BERITA</a></li>
        </ul>

        <div class="flex gap-4 mt-6 flex-wrap">
          <a href="#" class="bg-black rounded-full p-1.5 hover:opacity-80"><i
              class="fab fa-linkedin-in text-white"></i></a>
          <a href="#" class="bg-black rounded-full p-1.5"><i class="fab fa-telegram-plane text-white"></i></a>
          <a href="#" class="bg-black rounded-full p-1.5"><i class="fab fa-spotify text-white"></i></a>
          <a href="#" class="bg-black rounded-full p-1.5"><i class="fab fa-x-twitter text-white"></i></a>
          <a href="#" class="bg-black rounded-full p-1.5"><i class="fab fa-youtube text-white"></i></a>
          <a href="#" class="bg-black rounded-full p-1.5"><i class="fab fa-tiktok text-white"></i></a>
          <a href="#" class="bg-black rounded-full p-1.5"><i class="fab fa-pinterest text-white"></i></a>
          <a href="#" class="bg-black rounded-full p-1.5"><i class="fab fa-instagram text-white"></i></a>
        </div>
      </div>
    </div>

    <div class="text-sm text-white/80 mt-6 text-center">
      ©2025, Tim IT MINI OLYMPIC 2025 — Let the games begin!
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        observer.disconnect(); // animasi hanya muncul sekali
      }
    });
    observer.observe(this.$refs.footerRef);
  }
}
</script>


<style scoped>
footer {
  transform: translateY(24px);
}
footer.opacity-100 {
  transform: translateY(0);
}
a:hover {
  transition: all 0.3s ease;
  opacity: 0.85;
  transform: scale(1.05);
}
</style>
