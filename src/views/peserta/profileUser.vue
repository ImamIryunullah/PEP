<!-- src/views/user/ProfilPeserta.vue -->
<template>
    <section class="min-h-screen bg-gray-100 p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Profil Saya</h1>
      <div class="bg-white rounded-xl shadow p-6">
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="font-medium text-gray-700">Nama Lengkap</label>
            <input v-model="profil.nama" class="w-full p-2 border rounded mt-1" disabled />
          </div>
          <div>
            <label class="font-medium text-gray-700">Email</label>
            <input v-model="profil.email" class="w-full p-2 border rounded mt-1" disabled />
          </div>
          <div>
            <label class="font-medium text-gray-700">Cabang Olahraga</label>
            <input v-model="profil.cabang" class="w-full p-2 border rounded mt-1" disabled />
          </div>
          <div>
            <label class="font-medium text-gray-700">Status Verifikasi</label>
            <input v-model="profil.verifikasi" class="w-full p-2 border rounded mt-1" disabled />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProfilPeserta',
    data() {
      return {
        profil: {
          nama: 'Andi Wijaya',
          email: 'andi@example.com',
          cabang: 'Badminton',
          verifikasi: 'Terverifikasi',
        },
      };
    },
  };
  </script>
  