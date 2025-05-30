<template>
    <div class="min-h-screen flex bg-gray-100 relative">
      
      <Sidebar :isOpen="isSidebarOpen" />
  
      
      <div
        v-if="isSidebarOpen"
        @click="isSidebarOpen = false"
        class="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
      ></div>
  
      
      <div :class="[
        'flex-1 flex flex-col transition-margin duration-300 ease-in-out min-h-screen',
        isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
      ]">
        <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
          <button @click="toggleSidebar" class="text-gray-700 text-2xl focus:outline-none">
            <i class="fas fa-bars"></i>
          </button>
          <h1 class="text-lg font-semibold text-[#D71E28]">Kelola Berita</h1>
        </header>
  
        <main class="px-12 py-8 max-w-36xl mx-auto">
          <h1 class="text-3xl font-bold text-gray-800 mb-6 hidden md:block">Kelola Berita</h1>
  
          
          <form @submit.prevent="submitBerita" class="bg-white rounded-xl shadow p-6 space-y-4 mb-8">
            <div>
              <label for="judul" class="block font-semibold mb-1 text-gray-700">Judul Berita</label>
              <input
                id="judul"
                v-model="form.judul"
                type="text"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D71E28]"
                required
              />
            </div>
  
            <div>
              <label for="subtitle" class="block font-semibold mb-1 text-gray-700">Sub Judul</label>
              <input
                id="subtitle"
                v-model="form.subtitle"
                type="text"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D71E28]"
              />
            </div>
  
            <div>
              <label for="tanggal" class="block font-semibold mb-1 text-gray-700">Tanggal</label>
              <input
                id="tanggal"
                v-model="form.tanggal"
                type="date"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D71E28]"
                required
              />
            </div>
  
            <div>
              <label for="penulis" class="block font-semibold mb-1 text-gray-700">Penulis</label>
              <input
                id="penulis"
                v-model="form.penulis"
                type="text"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D71E28]"
                required
              />
            </div>
  
            <div>
              <label for="isi" class="block font-semibold mb-1 text-gray-700">Isi Berita</label>
              <textarea
                id="isi"
                v-model="form.isi"
                rows="5"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D71E28]"
                required
              ></textarea>
            </div>
  
            
            <div>
              <label class="block font-semibold mb-1 text-gray-700">Foto Berita (opsional)</label>
              <input type="file" @change="onFileChange" accept="image/*" />
              <div v-if="form.foto" class="mt-3">
                <img :src="form.foto" alt="Preview Foto" class="max-w-xs max-h-48 rounded-md shadow" />
                <button
                  type="button"
                  @click="removeFoto"
                  class="mt-2 text-red-600 underline hover:text-red-800"
                >
                  Hapus Foto
                </button>
              </div>
            </div>
  
            <div class="flex justify-end gap-4">
              <button
                type="button"
                @click="resetForm"
                class="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
              >
                Reset
              </button>
              <button
                type="submit"
                class="bg-[#D71E28] text-white px-6 py-2 rounded font-semibold hover:bg-red-700"
              >
                {{ editingIndex === null ? "Tambah Berita" : "Update Berita" }}
              </button>
            </div>
          </form>
  
          
          <div class="bg-white rounded-xl shadow p-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Daftar Berita</h2>
            <div v-if="beritaList.length === 0" class="text-gray-500 italic text-center py-10">
              Belum ada berita.
            </div>
            <ul>
              <li
                v-for="(berita, index) in beritaList"
                :key="index"
                class="border-b last:border-b-0 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div class="flex gap-4 items-center">
                  <img
                    v-if="berita.foto"
                    :src="berita.foto"
                    alt="Foto Berita"
                    class="w-20 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 class="font-semibold text-lg">{{ berita.judul }}</h3>
                    <p class="text-sm text-gray-600">
                      {{ berita.subtitle }} &middot; {{ formatDate(berita.tanggal) }} &middot; {{ berita.penulis }}
                    </p>
                    <p class="mt-1 text-gray-700 line-clamp-2 max-w-md">{{ berita.isi }}</p>
                  </div>
                </div>
  
                <div class="flex gap-3">
                  <button
                    @click="editBerita(index)"
                    class="text-blue-600 hover:underline"
                    title="Edit"
                  >
                    Edit
                  </button>
                  <button
                    @click="hapusBerita(index)"
                    class="text-red-600 hover:underline"
                    title="Hapus"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "@/components/Sidebar.vue";
  
  export default {
    name: "KelolaBerita",
    components: { Sidebar },
    data() {
      return {
        isSidebarOpen: false,
        beritaList: [
          {
            judul: "Peluncuran Twibbon Mini Olympic",
            subtitle: "BeritaTwibbon",
            tanggal: "2024-07-12",
            penulis: "Admin PEP",
            isi:
              "Mini Olympic telah resmi diluncurkan dengan berbagai kegiatan seru dan lomba antar kontingen. Saksikan info lengkapnya di sini!",
            foto: null,
          },
        ],
        form: {
          judul: "",
          subtitle: "",
          tanggal: "",
          penulis: "",
          isi: "",
          foto: null,
        },
        editingIndex: null,
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      submitBerita() {
        if (this.editingIndex === null) {
          // Tambah berita baru
          this.beritaList.push({ ...this.form });
        } else {
          // Update berita
          this.beritaList.splice(this.editingIndex, 1, { ...this.form });
        }
        this.resetForm();
      },
      resetForm() {
        this.form = {
          judul: "",
          subtitle: "",
          tanggal: "",
          penulis: "",
          isi: "",
          foto: null,
        };
        this.editingIndex = null;
      },
      editBerita(index) {
        this.form = { ...this.beritaList[index] };
        this.editingIndex = index;
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      hapusBerita(index) {
        if (confirm("Yakin ingin menghapus berita ini?")) {
          this.beritaList.splice(index, 1);
        }
      },
      formatDate(dateStr) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateStr).toLocaleDateString("id-ID", options);
      },
      onFileChange(event) {
        const file = event.target.files[0];
        if (!file) return;
  
        const reader = new FileReader();
        reader.onload = e => {
          this.form.foto = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      removeFoto() {
        this.form.foto = null;
        // Reset input file element
        this.$refs.fileInput.value = null;
      },
    },
  };
  </script>
  
  <style>
  /* Membatasi isi berita hanya 2 baris dengan ... */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  