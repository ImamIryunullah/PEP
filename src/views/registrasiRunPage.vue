<template>
  <NavbarDashboard />
  <section class="min-h-screen bg-[#F7F7F7] flex flex-col items-center py-8 sm:py-12 px-4 relative">
    
    <!-- Background decorations -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full h-full object-cover opacity-5" />
      <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full h-full object-cover opacity-5" />
      
      <div class="hidden lg:block">
        <h1 class="absolute top-16 md:top-20 left-4 md:left-20 text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold">REGIS</h1>
        <h1 class="absolute top-32 md:top-52 left-4 md:left-20 text-gray-600 opacity-5 text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold">TRASI</h1>
      </div>
    </div>

    <!-- T-shirt image -->
    <img src="/registrasi/baju.png" alt="Baju Funrun"   
         class="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96 mb-6 sm:mb-8 md:mb-12 z-10" />
    
    <!-- Loading overlay -->
    <div v-if="isLoading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        <span class="text-gray-800 font-medium">{{ loadingMessage }}</span>
      </div>
    </div>

    <!-- Success/Error Messages -->
    <div v-if="successMessage" class="w-full max-w-5xl mb-4">
      <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative">
        <strong class="font-bold">Berhasil!</strong>
        <span class="block sm:inline ml-2">{{ successMessage }}</span>
        <button @click="successMessage = ''" class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <span class="sr-only">Tutup</span>
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <div v-if="errorMessage" class="w-full max-w-5xl mb-4">
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative">
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline ml-2">{{ errorMessage }}</span>
        <button @click="errorMessage = ''" class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <span class="sr-only">Tutup</span>
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    
    <!-- Main form -->
    <div class="w-full max-w-5xl bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl shadow-lg z-10">
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
        Form Registrasi Peserta Funrun
      </h2>

      <form @submit.prevent="submitForm" class="space-y-4 sm:space-y-6">  
        <transition-group name="fade-slide" tag="div" class="space-y-4 sm:space-y-6">
          <div v-for="(peserta, index) in pesertaList" :key="peserta.id"
               class="relative border border-gray-200 rounded-xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm space-y-3 sm:space-y-4">

            <!-- Delete button -->
            <button v-if="pesertaList.length > 1" @click.prevent="hapusPeserta(index)"
                    class="absolute top-2 sm:top-3 right-2 sm:right-3 text-red-500 hover:text-red-700 text-base sm:text-lg transform transition-transform duration-200 hover:scale-125 p-1">
              <i class="fas fa-trash"></i>
            </button>

            <!-- Participant header -->
            <div class="mb-3 sm:mb-4">
              <h3 class="text-base sm:text-lg font-semibold text-gray-700 border-b border-gray-300 pb-2">
                Peserta {{ index + 1 }}
              </h3>
            </div>

            <!-- Form fields -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
              
              <div class="lg:col-span-1">
                <label class="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                  Nama Peserta <span class="text-red-500">*</span>
                </label>
                <input v-model="peserta.nama" 
                       type="text" 
                       placeholder="Nama lengkap"
                       :class="getInputClass(peserta.nama)"
                       class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition" />
                <span v-if="errors[`peserta_${index}_nama`]" class="text-red-500 text-xs mt-1">
                  {{ errors[`peserta_${index}_nama`] }}
                </span>
              </div>

              <div class="lg:col-span-1">
                <label class="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                   Alamat Email <span class="text-red-500">*</span>
                </label>
                <input v-model="peserta.email" 
                       type="email" 
                       placeholder="contoh@email.com"
                       :class="getInputClass(peserta.email)"
                       class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition" />
                <span v-if="errors[`peserta_${index}_email`]" class="text-red-500 text-xs mt-1">
                  {{ errors[`peserta_${index}_email`] }}
                </span>
              </div>

              <div class="lg:col-span-1">
                <label class="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                  Kontingen <span class="text-red-500">*</span>
                </label>
                <select v-model="peserta.kontingen"
                        :class="getInputClass(peserta.kontingen)"
                        class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition">
                  <option disabled value="">- pilih kontingen -</option>
                  <option>Head Office PEP</option>
                  <option>Aset 1</option>
                  <option>Aset 2</option>
                  <option>Aset 3</option>
                  <option>Aset 4</option>
                  <option>Aset 5</option>
                </select>
                <span v-if="errors[`peserta_${index}_kontingen`]" class="text-red-500 text-xs mt-1">
                  {{ errors[`peserta_${index}_kontingen`] }}
                </span>
              </div>

              <div class="lg:col-span-1">
                <label class="block text-sm sm:text-base text-gray-700 font-medium mb-1 sm:mb-2">
                  Ukuran Baju <span class="text-red-500">*</span>
                </label>
                <select v-model="peserta.size"
                        :class="getInputClass(peserta.size)"
                        class="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition">
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
                <span v-if="errors[`peserta_${index}_size`]" class="text-red-500 text-xs mt-1">
                  {{ errors[`peserta_${index}_size`] }}
                </span>
              </div>
            </div>
          </div>
        </transition-group>

        <!-- Add participant button -->
        <div class="flex justify-center pt-4 sm:pt-6">
          <button type="button" @click="tambahPeserta" :disabled="isLoading"
                  class="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full shadow-md transition transform hover:scale-105 duration-300 flex items-center gap-2">
            <i class="fas fa-plus text-xs sm:text-sm"></i>
            <span>Tambah Peserta</span>
          </button>
        </div>

        <!-- Submit button -->
        <div class="flex justify-center pt-4 sm:pt-6">
          <button type="submit" :disabled="isLoading"
                  class="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 text-sm sm:text-base rounded-full shadow-lg transition duration-300 transform hover:scale-105 w-full sm:w-auto max-w-xs flex items-center justify-center gap-2">
            <i v-if="isLoading" class="fas fa-spinner fa-spin"></i>
            <span>{{ isLoading ? 'MENYIMPAN...' : 'SUBMIT REGISTRASI' }}</span>
          </button>
        </div>
      </form>

      <!-- Participant summary -->
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

    <div class="h-8 sm:h-12 md:h-16"></div>
  </section>
  <FooterDashboard />
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
import FooterDashboard from '@/components/FooterDashboard.vue'
import API from "@/service/api.js"; 

export default {
  components: {
    NavbarDashboard,
    FooterDashboard
  },
  data() {
    return {
      pesertaList: [
        { id: 1, nama: '', email: '', kontingen: '', size: '' }
      ],
      nextId: 2,
      isLoading: false,
      loadingMessage: 'Memproses registrasi...',
      successMessage: '',
      errorMessage: '',
      errors: {}
    }
  },
  methods: {
    tambahPeserta() {
      this.pesertaList.push({ 
        id: this.nextId++, 
        nama: '', 
        email: '',
        kontingen: '', 
        size: '' 
      });
      this.clearErrors();
    },

    hapusPeserta(index) {
      if (this.pesertaList.length > 1) {
        this.pesertaList.splice(index, 1);
        this.clearErrors();
      }
    },

    validateForm() {
      this.errors = {};
      let isValid = true;

      this.pesertaList.forEach((peserta, index) => {
        // Validate nama
        if (!peserta.nama || !peserta.nama.trim()) {
          this.errors[`peserta_${index}_nama`] = 'Nama wajib diisi';
          isValid = false;
        } else if (peserta.nama.trim().length < 2) {
          this.errors[`peserta_${index}_nama`] = 'Nama minimal 2 karakter';
          isValid = false;
        }

        // Validate email
        if (!peserta.email || !peserta.email.trim()) {
          this.errors[`peserta_${index}_email`] = 'Email wajib diisi';
          isValid = false;
        } else if (!this.isValidEmail(peserta.email)) {
          this.errors[`peserta_${index}_email`] = 'Format email tidak valid';
          isValid = false;
        }

        // Validate kontingen
        if (!peserta.kontingen) {
          this.errors[`peserta_${index}_kontingen`] = 'Kontingen wajib dipilih';
          isValid = false;
        }

        // Validate size
        if (!peserta.size) {
          this.errors[`peserta_${index}_size`] = 'Ukuran baju wajib dipilih';
          isValid = false;
        }
      });

      return isValid;
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },

    getInputClass(value) {
      if (!value || (typeof value === 'string' && !value.trim())) {
        return 'border-gray-300';
      }
      return 'border-green-300';
    },

    clearErrors() {
      this.errors = {};
      this.errorMessage = '';
    },

    clearMessages() {
      this.successMessage = '';
      this.errorMessage = '';
    },

    async submitForm() {
      this.clearMessages();

      // Validate form
      if (!this.validateForm()) {
        this.errorMessage = 'Mohon lengkapi semua data yang wajib diisi!';
        this.scrollToFirstError();
        return;
      }

      this.isLoading = true;
      this.loadingMessage = 'Menyimpan data registrasi...';

      try {
        // Prepare data for API
        const registrationData = {
          peserta: this.pesertaList.map(peserta => ({
            nama: peserta.nama.trim(),
            email: peserta.email.trim().toLowerCase(),
            kontingen: peserta.kontingen,
            size: peserta.size,
            status: 'active' // Default status
          }))
        };

        // Call API to create participants
        const promises = registrationData.peserta.map(peserta => 
          API.createPesertaFunrun(peserta)
        );

        await Promise.all(promises);

        // Success
        this.successMessage = `Registrasi berhasil untuk ${this.pesertaList.length} peserta! Data telah tersimpan di sistem.`;
        
        // Reset form
        this.resetForm();

        // Scroll to top to show success message
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

      } catch (error) {
        console.error('Registration error:', error);
        
        // Handle different types of errors
        if (error.response) {
          // Server responded with error status
          const status = error.response.status;
          const message = error.response.data?.message || error.response.data?.error;
          
          if (status === 400) {
            this.errorMessage = message || 'Data yang dikirim tidak valid. Periksa kembali form Anda.';
          } else if (status === 409) {
            this.errorMessage = message || 'Email sudah terdaftar. Gunakan email lain.';
          } else if (status === 500) {
            this.errorMessage = 'Terjadi kesalahan pada server. Silakan coba lagi nanti.';
          } else {
            this.errorMessage = message || `Terjadi kesalahan (${status}). Silakan coba lagi.`;
          }
        } else if (error.request) {
          // Network error
          this.errorMessage = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
        } else {
          // Other error
          this.errorMessage = 'Terjadi kesalahan tidak terduga. Silakan coba lagi.';
        }

        // Scroll to error message
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

      } finally {
        this.isLoading = false;
      }
    },

    resetForm() {
      this.pesertaList = [
        { id: 1, nama: '', email: '', kontingen: '', size: '' }
      ];
      this.nextId = 2;
      this.clearErrors();
    },

    scrollToFirstError() {
      this.$nextTick(() => {
        const firstErrorElement = document.querySelector('.text-red-500');
        if (firstErrorElement) {
          firstErrorElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      });
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
button:hover:not(:disabled) {
  transform: translateY(-1px);
}

button:active:not(:disabled) {
  transform: translateY(0);
}

/* Form Validation States */
.border-red-300 {
  border-color: #fca5a5;
}

.border-green-300 {
  border-color: #86efac;
}

/* Disabled state */
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>