<template>
    <NavbarDashboard />
    <section class="min-h-screen bg-[#F7F7F7] flex flex-col items-center py-12 px-4 relative">
      <div class="absolute inset-0 z-0 pointer-events-none">
        <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full" />
        <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full" />
        <h1 class="absolute top-20 left-20 text-gray-600 opacity-5 text-9xl font-bold">REGIS</h1>
        <h1 class="absolute top-52 left-20 text-gray-600 opacity-5 text-9xl font-bold">TRASI</h1>
      </div>
  
      <img src="/registrasi/baju.png" alt="Baju Funrun" class="w-72 md:w-96 mb-12" />
      <div class="w-full max-w-5xl bg-white p-10 rounded-xl shadow-lg z-10">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">Form Registrasi Peserta Funrun</h2>
  
        <form @submit.prevent="submitForm" class="space-y-6">
          <transition-group name="fade-slide" tag="div" class="space-y-6">
            <div v-for="(peserta, index) in pesertaList" :key="peserta.id"
                 class="relative border border-gray-200 rounded-xl p-6 bg-gray-50 shadow-sm space-y-4">
  
              <button v-if="pesertaList.length > 1" @click.prevent="hapusPeserta(index)"
                      class="absolute top-3 right-3 text-red-500 hover:text-red-700 text-lg transform transition-transform duration-200 hover:scale-125">
                <i class="fas fa-trash"></i>
              </button>
  
              <div>
                <label class="block text-gray-700 font-medium mb-2">Nama Peserta {{ index + 1 }}</label>
                <input v-model="peserta.nama" type="text" placeholder="Nama lengkap"
                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition" />
              </div>
  
              <div>
                <label class="block text-gray-700 font-medium mb-2">Kontingen {{ index + 1 }}</label>
                <select v-model="peserta.kontingen"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                  <option disabled value="">- pilih kontingen -</option>
                  <option>Head Office PEP</option>
                  <option>Aset 1</option>
                  <option>Aset 2</option>
                  <option>Aset 3</option>
                  <option>Aset 4</option>
                  <option>Aset 5</option>
                </select>
              </div>
  
              <div>
                <label class="block text-gray-700 font-medium mb-2">Size {{ index + 1 }}</label>
                <select v-model="peserta.size"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                  <option disabled value="">- pilih size -</option>
                  <option>2XS</option>
                  <option>XS</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>XXXL</option>
                </select>
              </div>
            </div>
          </transition-group>
  
          <div class="flex justify-center">
            <button type="button" @click="tambahPeserta"
                    class="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-full shadow-md transition transform hover:scale-105 duration-300">
              + Tambah Peserta
            </button>
          </div>
  
          <div class="flex justify-center">
            <button type="submit"
                    class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-12 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
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
        this.pesertaList.push({ id: this.nextId++, nama: '', kontingen: '', size: '' });
      },
      hapusPeserta(index) {
        this.pesertaList.splice(index, 1);
      },
      submitForm() {
        console.log('Data Peserta:', this.pesertaList);
        alert('Form submitted! Cek console untuk data.');
      }
    }
  }
  </script>
  
  <style scoped>

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.4s ease;
  }
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(15px);
  }
  
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
  </style>
  