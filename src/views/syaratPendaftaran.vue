<template>
    <div>
      <NavbarDashboard />
      <section class="min-h-screen bg-[#F7F7F7] py-12 px-6">
        <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-8">
          <h1 class="text-3xl font-bold text-center text-gray-800">Persyaratan Pendaftaran</h1>
  
          <div class="space-y-6">
            <h2 class="text-xl font-semibold text-[#a60000]">📌 Komposisi Peserta</h2>
            <p class="text-gray-700">
              Jumlah pemain pekerja dan mitra kerja disesuaikan dengan peraturan cabornya masing-masing.
            </p>
  
            <div>
              <h2 class="text-xl font-semibold text-[#a60000]">📄 Persyaratan Dokumen (Pekerja)</h2>
              <ul class="list-decimal list-inside text-gray-700 space-y-1 mt-2">
                <li>Scan ID card pekerja berlaku, KTP, Kartu Medika Plaza dan BPJS (Aplikasi JMO)</li>
                <li>Pas Foto Digital & Email pekerja</li>
                <li>Surat pernyataan keabsahan data yang ditandatangani ketua kontingen masing-masing asset atau HO yang ber-Materai</li>
                <li>Surat layak bertanding dari dokter Perusahaan di WK tersebut</li>
                <li>Form PRQ dengan hasil MCU</li>
                <li>Peserta adalah Pekerja Nopek PEP dan Non PEP yang ditugaskan di WK PEP, HO Zona yang memiliki WK PEP dan HO Reg 2</li>
              </ul>
            </div>
  
            <div>
              <h2 class="text-xl font-semibold text-[#a60000]">📄 Persyaratan Dokumen (Mitra Kerja)</h2>
              <ul class="list-decimal list-inside text-gray-700 space-y-1 mt-2">
                <li>Scan ID card mitra kerja yang masih berlaku di Pertamina dan KTP</li>
                <li>Rekam layar kartu digital BPJS (aplikasi JMO) (untuk nama dan lama bekerja)</li>
                <li>Surat Keterangan Kerja di WK PEP selama minimal 6 bulan (status aktif) dengan kontrak kerja berdurasi minimal 1 tahun sebagai lampiran bukti pendukung</li>
                <li>Sertifikat BST/HSSE Passport/SIML</li>
                <li>Pas Foto Digital</li>
                <li>Surat pernyataan keabsahan data yang ditandatangani ketua kontingen masing-masing asset atau HO yang ber-Materai</li>
                <li>Surat layak bertanding dari dokter Perusahaan di WK tersebut</li>
                <li>Form PRQ dengan hasil MCU</li>
                <li>Media sosial aktif</li>
                <li><strong>*</strong>Jika PKWT yang aktif di bawah 1 tahun, maka dapat melampirkan PKWT sebelumnya di WK tersebut</li>
                <li><strong>**</strong>Jika tidak tercantum pada persyaratan masing-masing cabor</li>
              </ul>
            </div>
          </div>
  
          <div class="text-center">
            <RouterLink to="/regitsrasi" class="inline-block mt-6 bg-[#a60000] hover:bg-[#880000] text-white px-6 py-2 rounded-full shadow-md transition duration-300">
              Kembali ke Formulir Pendaftaran
            </RouterLink>
          </div>
        </div>
      </section>
      <FooterDashboard />
    </div>
  </template>
  
  <script>
  import NavbarDashboard from '@/components/NavbarDashboard.vue'
  import FooterDashboard from '@/components/FooterDashboard.vue'

export default {
    components:{
        NavbarDashboard,
        FooterDashboard
    }
}

  </script>
  