<template>
    <section class="min-h-screen bg-gray-100 px-6 py-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Dashboard Admin</h1>
  
      <!-- Stat Boxes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div class="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div class="bg-red-100 text-[#D71E28] p-3 rounded-full">
            <i class="fas fa-users text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-gray-500">Total Peserta</p>
            <p class="text-2xl font-semibold">218</p>
          </div>
        </div>
  
        <div class="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div class="bg-red-100 text-[#D71E28] p-3 rounded-full">
            <i class="fas fa-dumbbell text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-gray-500">Cabang Olahraga</p>
            <p class="text-2xl font-semibold">9</p>
          </div>
        </div>
  
        <div class="bg-white rounded-xl shadow p-6 flex items-center gap-4">
          <div class="bg-red-100 text-[#D71E28] p-3 rounded-full">
            <i class="fas fa-running text-xl"></i>
          </div>
          <div>
            <p class="text-sm text-gray-500">Fun Run Registrasi</p>
            <p class="text-2xl font-semibold">64</p>
          </div>
        </div>
      </div>
  
      <!-- Verifikasi Chart -->
      <div class="bg-white rounded-xl shadow p-6 mb-10">
        <h2 class="text-lg font-bold text-gray-800 mb-4">Status Verifikasi</h2>
        <div class="flex gap-6">
          <div class="w-full h-48 bg-red-50 rounded-lg flex items-center justify-center text-[#D71E28] text-sm font-medium">
            [Placeholder untuk Chart/Diagram]
          </div>
        </div>
      </div>
  
      <!-- Tabel Kontingen Terbaru -->
      <div class="bg-white rounded-xl shadow p-6">
        <h2 class="text-lg font-bold text-gray-800 mb-4">Kontingen Terbaru</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto text-sm text-gray-700">
            <thead class="bg-[#D71E28] text-white">
              <tr>
                <th class="px-4 py-2 text-left">Kontingen</th>
                <th class="px-4 py-2 text-left">Jumlah Peserta</th>
                <th class="px-4 py-2 text-left">Terverifikasi</th>
                <th class="px-4 py-2 text-left">Terakhir Update</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="item in kontingen" :key="item.nama">
                <td class="px-4 py-2">{{ item.nama }}</td>
                <td class="px-4 py-2">{{ item.peserta }}</td>
                <td class="px-4 py-2">{{ item.verifikasi }}</td>
                <td class="px-4 py-2">{{ item.updated }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AdminDashboard",
    data() {
      return {
        kontingen: [
          { nama: "RU IV Cilacap", peserta: 24, verifikasi: "20", updated: "30 Mei 2025" },
          { nama: "Pertamina Hulu Rokan", peserta: 18, verifikasi: "18", updated: "29 Mei 2025" },
          { nama: "PT KPI", peserta: 21, verifikasi: "21", updated: "29 Mei 2025" }
        ]
      };
    }
  };
  </script>
  