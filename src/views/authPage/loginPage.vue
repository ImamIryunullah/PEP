<template>
  <NavbarDashboard />
  <section class="min-h-screen relative bg-[#F7F7F7] w-full overflow-hidden">

    <div class="absolute inset-0 z-0 pointer-events-none">
      <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full h-auto opacity-80" />
      <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full h-auto opacity-80" />

      <div class="hidden lg:block">
        <h1 class="absolute top-16 xl:top-20 left-12 xl:left-20 text-gray-600 opacity-5 text-7xl xl:text-9xl font-bold">
          LOG</h1>
        <h1 class="absolute top-40 xl:top-52 left-12 xl:left-20 text-gray-600 opacity-5 text-7xl xl:text-9xl font-bold">
          IN</h1>
      </div>

      <div class="block lg:hidden">
        <h1 class="absolute top-8 left-4 text-gray-600 opacity-5 text-4xl sm:text-5xl font-bold">LOG IN</h1>
      </div>
    </div>

    <div class="relative z-10 min-h-screen flex items-center justify-center">
      <div class="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div class="max-w-md mx-auto">

          <div class="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 backdrop-blur-sm bg-opacity-95">

            <div class="text-center mb-6 sm:mb-8">
              <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Masuk ke Akun Anda
              </h2>
              <p class="text-sm sm:text-base text-gray-600">
                Silakan masuk untuk melanjutkan
              </p>
            </div>

            <form class="space-y-4 sm:space-y-6" @submit.prevent="submitLogin">

              <div>
                <label class="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Email
                </label>
                <div class="relative">
                  <div
                    class="flex items-center bg-[#a60000] text-white px-3 sm:px-4 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="/registrasi/bunga.png" alt="Email Icon"
                      class="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                    <input v-model="email" type="email" placeholder="Masukkan email Anda"
                      class="bg-transparent w-full focus:outline-none placeholder-white placeholder-opacity-80 text-sm sm:text-base"
                      required />
                  </div>
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Password
                </label>
                <div class="relative">
                  <div
                    class="flex items-center bg-[#a60000] text-white px-3 sm:px-4 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img src="/registrasi/bunga.png" alt="Password Icon"
                      class="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0" />
                    <input v-model="password" type="password" placeholder="Masukkan password"
                      class="bg-transparent w-full focus:outline-none placeholder-white placeholder-opacity-80 text-sm sm:text-base"
                      required />
                  </div>
                </div>
              </div>

              <div v-if="message" :class="messageClass" class="p-3 rounded mb-3 text-center">
                {{ message }}
              </div>

              <div class="pt-2 sm:pt-4">
                <button type="submit" :disabled="loading"
                  class="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3 sm:py-4 px-6 rounded-full shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-in-out text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed">
                  <span class="flex items-center justify-center">
                    <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                      </path>
                    </svg>
                    {{ loading ? 'Loading...' : 'LOGIN' }}
                  </span>
                </button>
              </div>

              <div class="relative my-6">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">atau</span>
                </div>
              </div>

              <div class="text-center text-xs sm:text-sm text-gray-600 pt-4">
                Belum punya akun?
                <a href="/registrasi"
                  class="text-red-600 hover:text-red-700 hover:underline font-medium ml-1 transition-colors duration-200">
                  Daftar sekarang
                </a>
              </div>
            </form>
          </div>
          <div class="mt-6 text-center">
            <p class="text-xs sm:text-sm text-gray-500">
              Dengan masuk, Anda menyetujui
              <a href="#" class="text-red-600 hover:underline">Syarat & Ketentuan</a>
              dan
              <a href="#" class="text-red-600 hover:underline">Kebijakan Privasi</a>
            </p>
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
  name: 'LoginPage',
  components: {
    NavbarDashboard,
    FooterDashboard
  },
  data() {
    return {
      email: '',
      password: '',
      message: '',
      success: false,
      loading: false,
    }
  },
  computed: {
    messageClass() {
      return {
        'bg-green-100 text-green-800 border border-green-300': this.success,
        'bg-red-100 text-red-800 border border-red-300': !this.success
      };
    }
  },
  methods: {
    async submitLogin() {
  if (this.loading) return;
  this.message = '';
  this.success = false;
  this.loading = true;

  try {
    const response = await API.login({
      email: this.email,
      password: this.password,
    });

    console.log('Login berhasil:', response.data);
    this.success = true;
    this.message = 'Login berhasil! Mengarahkan...';

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    if (response.data.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    const redirectPath = response.data.redirect_to || '/peserta/dashboard';
    setTimeout(() => {
      this.$router.push(redirectPath);
    }, 1000);

  } catch (error) {
    this.success = false;
    if (error.response) {
      if (error.response.status === 401) {
        this.message = 'Email atau password salah.';
      } else {
        this.message = error.response.data.message || 'Terjadi kesalahan saat login.';
      }
    } else if (error.request) {
      this.message = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
    } else {
      this.message = 'Terjadi kesalahan yang tidak terduga.';
    }
  } finally {
    this.loading = false;
  }
}

  },
  mounted() {
    const card = document.querySelector('.bg-white');
    if (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'all 0.6s ease-out';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    }
  }
}
</script>


<style scoped>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #a60000;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: #8B0000;
}

.bg-\[\#a60000\]:focus-within {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(166, 0, 0, 0.2);
}

@media (max-width: 1024px) {
  .absolute img {
    opacity: 0.6;
  }
}

@media (max-width: 640px) {
  .absolute img {
    opacity: 0.4;
  }
}
</style>