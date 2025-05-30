<template>
    <NavbarDashboard />
    <section class="min-h-screen relative bg-[#F7F7F7] w-full overflow-hidden">
  
      <!-- Background & Decoration -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full" />
        <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full" />
        <h1 class="absolute top-20 left-20 text-gray-600 opacity-5 text-9xl font-bold">LOG</h1>
        <h1 class="absolute top-52 left-20 text-gray-600 opacity-5 text-9xl font-bold">IN</h1>
      </div>
  
      <div class="relative z-10">
        <div class="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
          <div class="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-gray-800">Masuk ke Akun Anda</h2>
  
            <form class="space-y-6">
              <div>
                <label class="block text-gray-700 font-medium mb-1">Email</label>
                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                  <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                  <input type="email" placeholder="Email Anda"
                    class="bg-transparent w-full focus:outline-none placeholder-white" required />
                </div>
              </div>

              <div>
                <label class="block text-gray-700 font-medium mb-1">Password</label>
                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                  <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                  <input type="password" placeholder="Password"
                    class="bg-transparent w-full focus:outline-none placeholder-white" required />
                </div>
              </div>
  
              <div class="flex justify-center pt-4">
                <button type="submit"
                  class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full shadow-md transition duration-300 ease-in-out">
                  LOGIN
                </button>
              </div>
  
              <div class="text-center text-sm text-gray-600 mt-4">
                Belum punya akun?
                <a href="/registrasi" class="text-red-600 hover:underline font-medium">Daftar sekarang</a>
              </div>
            </form>
          </div>
        </div>
      </div>
  
    </section>
    <FooterDashboard />
  </template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import FooterDashboard from '@/components/FooterDashboard.vue';
export default{
    components:{
        NavbarDashboard,
        FooterDashboard
    }
}

</script>
  