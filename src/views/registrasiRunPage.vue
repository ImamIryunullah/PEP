<template>
  <NavbarDashboard />
  <section class="min-h-screen bg-[#F7F7F7] flex flex-col items-center py-8 sm:py-12 px-4 relative">
    <!-- Background Images and Text -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover opacity-5" />
      <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full h-full object-cover opacity-5" />
      
      <!-- Background Text - Hidden on small screens -->
      <div class="hidden lg:block">
        <h1 class="absolute top-16 md:top-20 left-4 md:left-20 text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold">REGIS</h1>
        <h1 class="absolute top-32 md:top-52 left-4 md:left-20 text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold">TRASI</h1>
      </div>
    </div>

    <!-- T-shirt Image -->
    <img src="/registrasi/baju.png" alt="Baju Funrun" 
         class="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 mb-6 sm:mb-8 md:mb-12 z-10" />
    
    <!-- Main Form Container -->
    <div class="w-full max-w-5xl bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg z-10">
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
        Form Registrasi Peserta Funrun
      </h2>

      <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">
        <transition-group name="fade-slide" tag="div" class="space-y-4 sm:space-y-6">
          <div v-for="(peserta, index) in pesertaList" :key="peserta.id"
               class="relative border border-gray-200 rounded-xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm space-y-3 sm:space-y-4">

            <!-- Delete Button -->
            <button v-if="pesertaList.length > 1" @click.prevent="hapusPeserta(index)"
                    class="absolute top-2 sm:top-3 right-2 sm:right-3 text-red-500 hover:text-red-700 text-base sm:text-lg transform transition-transform duration-200 hover:scale-125 p-1">
              <i class="fas fa-trash"></i>
            </button>

            <!-- Participant Number Header -->
            <div class="mb-3 sm:mb-4">
              <h3 class="text-base sm:text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2">
                Peserta {{ index + 1 }}
              </h3>
            </div>

            <!-- Form Fields Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
              <!-- Nama Field -->
              <div class="lg:col-span-1">
                <label class="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                  Nama Peserta
                </label>
                <input v-model="peserta.nama" 
                       type="text" 
                       placeholder="Nama lengkap"
                       class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition" />
              </div>

              <!-- Kontingen Field -->
              <div class="lg:col-span-1">
                <label class="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                  Kontingen
                </label>
                <select v-model="peserta.kontingen"
                        class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                  <option disabled value="">- pilih kontingen -</option>
                  <option>Head Office PEP</option>
                  <option>Aset 1</option>
                  <option>Aset 2</option>
                  <option>Aset 3</option>
                  <option>Aset 4</option>
                  <option>Aset 5</option>
                </select>
              </div>

              <!-- Size Field -->
              <div class="lg:col-span-1">
                <label class="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                  Ukuran Baju
                </label>
                <select v-model="peserta.size"
                        class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                  <option disabled value="">- pilih size -</option>
                  <option>2XS</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>XXXL</option>
                </select>
              </div>
            </div>
          </div>
        </transition-group>

        <!-- Add Participant Button -->
        <div class="flex justify-center pt-4 sm:pt-6">
          <button type="button" @click="tambahPeserta"
                  class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full shadow-md transition transform hover:scale-105 duration-300 flex items-center gap-2">
            <i class="fas fa-plus text-xs sm:text-sm"></i>
            <span>Tambah Peserta</span>
          </button>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center pt-4 sm:pt-6">
          <button type="submit"
                  class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 text-sm sm:text-base rounded-full shadow-lg transition duration-300 transform hover:scale-105 w-full sm:w-auto max-w-xs">
            SUBMIT REGISTRASI
          </button>
        </div>
      </form>

      <!-- Summary Info -->
      <div class="mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
        <div class="text-center">
          <p class="text-sm sm:text-base text-blue-800 font-medium">
            Total Peserta: <span class="font-bold">{{ pesertaList.length }}</span>
          </p>
          <p class="text-xs sm:text-sm text-blue-600 mt-1">
            Pastikan semua data telah diisi dengan benar sebelum submit
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Spacing -->
    <div class="h-8 sm:h-12 md:h-16"></div>
  </section>
  <FooterDashboard />
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import FooterDashboard from '@/components/FooterDashboard.vue'

export default {
components: {
  NavbarDashboard,
  FooterDashboard
},
data() {
  return {
    pesertaList: [
      { id: 1, nama: '', kontingen: '', size: '' }
    ],
    nextId: 2
  }
},
methods: {
  tambahPeserta() {
    this.pesertaList.push({ 
      id: this.nextId++, 
      nama: '', 
      kontingen: '', 
      size: '' 
    });
  },
  hapusPeserta(index) {
    if (this.pesertaList.length > 1) {
      this.pesertaList.splice(index, 1);
    }
  },
  submitForm() {
    // Validate form
    const isValid = this.pesertaList.every(peserta => 
      peserta.nama.trim() && peserta.kontingen && peserta.size
    );
    
    if (!isValid) {
      alert('Mohon lengkapi semua data peserta!');
      return;
    }
    
    console.log('Data Peserta:', this.pesertaList);
    alert(`Registrasi berhasil untuk ${this.pesertaList.length} peserta!`);
  }
}
}
</script>

<style scoped>
/* Transition Effects */
.fade-slide-enter-active,
.fade-slide-leave-active {
transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
opacity: 0;
transform: translateY(15px);
}

.fade-slide-move {
transition: transform 0.4s ease;
}

/* Focus Animation */
input:focus, select:focus {
animation: pulseRing 1s ease;
}

@keyframes pulseRing {
0% {
  box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
}
50% {
  box-shadow: 0 0 8px 4px rgba(220, 38, 38, 0.4);
}
100% {
  box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
}
}

/* Mobile Optimizations */
@media (max-width: 640px) {
.grid {
  gap: 0.75rem;
}

select, input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}
}

/* Tablet and Desktop Optimizations */
@media (min-width: 1024px) {
.grid-cols-1.lg\\:grid-cols-3 {
  grid-template-columns: 2fr 1.5fr 1fr;
}
}

/* Enhanced Focus States */
input:focus, select:focus {
border-color: #dc2626;
box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

/* Button Hover Effects */
button:hover {
transform: translateY(-1px);
}

button:active {
transform: translateY(0);
}

/* Form Validation States */
input:invalid, select:invalid {
border-color: #ef4444;
}

input:valid, select:valid {
border-color: #10b981;
}
</style>