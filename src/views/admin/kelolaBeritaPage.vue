<template>
    <div class="min-h-screen flex bg-gradient-to-br from-gray-50 to-gray-100 relative">
      
      <Sidebar :isOpen="isSidebarOpen" />
  
      <!-- Mobile overlay -->
      <div
        v-if="isSidebarOpen"
        @click="isSidebarOpen = false"
        class="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden transition-opacity duration-300"
      ></div>
  
      <!-- Main content -->
      <div :class="[
        'flex-1 flex flex-col transition-all duration-300 ease-in-out min-h-screen',
        isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
      ]">
        <!-- Mobile header -->
        <header class="bg-white shadow-sm px-4 py-4 flex justify-between items-center lg:hidden border-b">
          <button 
            @click="toggleSidebar" 
            class="text-gray-700 text-xl focus:outline-none hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200"
          >
            <i class="fas fa-bars"></i>
          </button>
          <h1 class="text-lg font-bold text-[#D71E28]">Kelola Berita</h1>
          <div class="w-10"></div> <!-- Spacer for centering -->
        </header>
  
        <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto w-full">
          <!-- Desktop title -->
          <div class="hidden lg:block mb-8">
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Kelola Berita</h1>
            <p class="text-gray-600">Tambah, edit, dan kelola berita untuk website Anda</p>
          </div>
  
          <!-- Success/Error Messages -->
          <transition name="slide-down">
            <div v-if="showMessage" class="mb-6">
              <div :class="[
                'px-4 py-3 rounded-lg shadow-sm border-l-4 flex items-center gap-3',
                messageType === 'success' ? 'bg-green-50 border-green-400 text-green-800' : 'bg-red-50 border-red-400 text-red-800'
              ]">
                <i :class="messageType === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'"></i>
                <span class="font-medium">{{ messageText }}</span>
              </div>
            </div>
          </transition>
  
          <!-- Form Section -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8 mb-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-2 bg-[#D71E28] rounded-lg">
                <i class="fas fa-plus text-white"></i>
              </div>
              <h2 class="text-xl lg:text-2xl font-bold text-gray-900">
                {{ editingIndex === null ? "Tambah Berita Baru" : "Edit Berita" }}
              </h2>
            </div>
  
            <form @submit.prevent="submitBerita" class="space-y-6">
              <!-- Judul Berita -->
              <div class="space-y-2">
                <label for="judul" class="block text-sm font-semibold text-gray-700">
                  Judul Berita <span class="text-red-500">*</span>
                </label>
                <input
                  id="judul"
                  v-model="form.judul"
                  type="text"
                  placeholder="Masukkan judul berita yang menarik..."
                  class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  required
                />
              </div>
  
              <!-- Sub Judul -->
              <div class="space-y-2">
                <label for="subtitle" class="block text-sm font-semibold text-gray-700">Sub Judul</label>
                <input
                  id="subtitle"
                  v-model="form.subtitle"
                  type="text"
                  placeholder="Sub judul atau kategori berita..."
                  class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent transition-all duration-200 hover:border-gray-400"
                />
              </div>
  
              <!-- Row for Date and Author -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="tanggal" class="block text-sm font-semibold text-gray-700">
                    Tanggal <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="tanggal"
                    v-model="form.tanggal"
                    type="date"
                    class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    required
                  />
                </div>
  
                <div class="space-y-2">
                  <label for="penulis" class="block text-sm font-semibold text-gray-700">
                    Penulis <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="penulis"
                    v-model="form.penulis"
                    type="text"
                    placeholder="Nama penulis berita..."
                    class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    required
                  />
                </div>
              </div>
  
              <!-- Isi Berita -->
              <div class="space-y-2">
                <label for="isi" class="block text-sm font-semibold text-gray-700">
                  Isi Berita <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="isi"
                  v-model="form.isi"
                  rows="6"
                  placeholder="Tulis isi berita lengkap di sini..."
                  class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-y"
                  required
                ></textarea>
                <div class="text-sm text-gray-500">{{ form.isi.length }} karakter</div>
              </div>
  
              <!-- Upload Foto -->
              <div class="space-y-3">
                <label class="block text-sm font-semibold text-gray-700">Foto Berita</label>
                
                <div v-if="!form.foto" class="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-gray-400 transition-colors duration-200">
                  <div class="space-y-3">
                    <div class="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <i class="fas fa-camera text-gray-400 text-xl"></i>
                    </div>
                    <div>
                      <label class="cursor-pointer">
                        <span class="text-sm font-medium text-[#D71E28] hover:text-red-700">Pilih foto</span>
                        <input 
                          ref="fileInput"
                          type="file" 
                          @change="onFileChange" 
                          accept="image/*" 
                          class="hidden"
                        />
                      </label>
                      <p class="text-sm text-gray-500 mt-1">atau drag & drop foto di sini</p>
                    </div>
                    <p class="text-xs text-gray-400">PNG, JPG, JPEG hingga 5MB</p>
                  </div>
                </div>
  
                <div v-else class="relative">
                  <div class="relative rounded-xl overflow-hidden bg-gray-100">
                    <img 
                      :src="form.foto" 
                      alt="Preview Foto" 
                      class="w-full h-48 sm:h-64 object-cover"
                    />
                    <div class="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                      <button
                        type="button"
                        @click="removeFoto"
                        class="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors duration-200 opacity-0 hover:opacity-100 transform translate-y-2 hover:translate-y-0"
                      >
                        <i class="fas fa-trash-alt mr-2"></i>
                        Hapus Foto
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Action Buttons -->
              <div class="flex flex-col sm:flex-row gap-3 sm:justify-end pt-4 border-t border-gray-200">
                <button
                  type="button"
                  @click="resetForm"
                  class="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 order-2 sm:order-1"
                >
                  <i class="fas fa-undo mr-2"></i>
                  Reset Form
                </button>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full sm:w-auto bg-[#D71E28] text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 order-1 sm:order-2"
                >
                  <i v-if="isSubmitting" class="fas fa-spinner fa-spin mr-2"></i>
                  <i v-else :class="editingIndex === null ? 'fas fa-plus' : 'fas fa-save'" class="mr-2"></i>
                  {{ editingIndex === null ? "Tambah Berita" : "Update Berita" }}
                </button>
              </div>
            </form>
          </div>
  
          <!-- News List Section -->
          <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-blue-500 rounded-lg">
                  <i class="fas fa-newspaper text-white"></i>
                </div>
                <div>
                  <h2 class="text-xl lg:text-2xl font-bold text-gray-900">Daftar Berita</h2>
                  <p class="text-sm text-gray-600">{{ beritaList.length }} berita tersimpan</p>
                </div>
              </div>
              
              <!-- Search and Filter -->
              <div class="flex flex-col sm:flex-row gap-3">
                <div class="relative">
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Cari berita..."
                    class="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                  />
                  <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>
            </div>
  
            <!-- Empty State -->
            <div v-if="filteredBerita.length === 0 && searchQuery === ''" class="text-center py-12">
              <div class="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <i class="fas fa-newspaper text-gray-400 text-3xl"></i>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Belum ada berita</h3>
              <p class="text-gray-600 mb-4">Mulai dengan menambahkan berita pertama Anda</p>
            </div>
  
            <!-- No Search Results -->
            <div v-else-if="filteredBerita.length === 0 && searchQuery !== ''" class="text-center py-12">
              <div class="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <i class="fas fa-search text-gray-400 text-3xl"></i>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Tidak ada hasil</h3>
              <p class="text-gray-600">Coba kata kunci lain untuk pencarian</p>
            </div>
  
            <!-- News List -->
            <div v-else class="space-y-4">
              <transition-group name="list" tag="div">
                <div
                  v-for="(berita, index) in filteredBerita"
                  :key="berita.id || index"
                  class="border border-gray-200 rounded-xl p-4 lg:p-6 hover:shadow-md transition-all duration-200 bg-gradient-to-r from-white to-gray-50"
                >
                  <div class="flex flex-col lg:flex-row gap-4">
                    <!-- Image -->
                    <div class="flex-shrink-0">
                      <div class="w-full lg:w-32 h-32 lg:h-24 bg-gray-200 rounded-xl overflow-hidden">
                        <img
                          v-if="berita.foto"
                          :src="berita.foto"
                          :alt="berita.judul"
                          class="w-full h-full object-cover"
                        />
                        <div v-else class="w-full h-full flex items-center justify-center">
                          <i class="fas fa-image text-gray-400 text-2xl"></i>
                        </div>
                      </div>
                    </div>
  
                    <!-- Content -->
                    <div class="flex-1 min-w-0">
                      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div class="flex-1 min-w-0">
                          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                            {{ berita.judul }}
                          </h3>
                          
                          <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                            <span class="flex items-center gap-1">
                              <i class="fas fa-tag"></i>
                              {{ berita.subtitle || 'Tanpa kategori' }}
                            </span>
                            <span class="flex items-center gap-1">
                              <i class="fas fa-calendar"></i>
                              {{ formatDate(berita.tanggal) }}
                            </span>
                            <span class="flex items-center gap-1">
                              <i class="fas fa-user"></i>
                              {{ berita.penulis }}
                            </span>
                          </div>
                          
                          <p class="text-gray-700 line-clamp-3 leading-relaxed">
                            {{ berita.isi }}
                          </p>
                        </div>
  
                        <!-- Actions -->
                        <div class="flex gap-2 flex-shrink-0">
                          <button
                            @click="editBerita(getOriginalIndex(berita, index))"
                            class="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium"
                            title="Edit berita"
                          >
                            <i class="fas fa-edit"></i>
                            <span class="hidden sm:inline">Edit</span>
                          </button>
                          <button
                            @click="hapusBerita(getOriginalIndex(berita, index))"
                            class="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 font-medium"
                            title="Hapus berita"
                          >
                            <i class="fas fa-trash"></i>
                            <span class="hidden sm:inline">Hapus</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </main>
      </div>
  
      <!-- Confirmation Modal -->
      <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
          <div class="text-center">
            <div class="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <i class="fas fa-exclamation-triangle text-red-500 text-2xl"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Hapus Berita</h3>
            <p class="text-gray-600 mb-6">Apakah Anda yakin ingin menghapus berita ini? Tindakan ini tidak dapat dibatalkan.</p>
            
            <div class="flex gap-3">
              <button
                @click="showDeleteModal = false"
                class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Batal
              </button>
              <button
                @click="confirmDelete"
                class="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
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
        isSubmitting: false,
        showMessage: false,
        messageType: 'success',
        messageText: '',
        showDeleteModal: false,
        deleteIndex: null,
        searchQuery: '',
        beritaList: [
          {
            id: 1,
            judul: "Peluncuran Twibbon Mini Olympic 2025",
            subtitle: "Berita Twibbon",
            tanggal: "2024-07-12",
            penulis: "Admin PEP",
            isi: "Mini Olympic 2025 telah resmi diluncurkan dengan berbagai kegiatan seru dan lomba antar kontingen. Event ini akan menampilkan berbagai cabang olahraga mulai dari sepak bola, basket, volley, badminton, tenis meja, hingga e-sport. Saksikan info lengkapnya di website resmi kami!",
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
    computed: {
      filteredBerita() {
        if (!this.searchQuery) return this.beritaList;
        
        const query = this.searchQuery.toLowerCase();
        return this.beritaList.filter(berita => 
          berita.judul.toLowerCase().includes(query) ||
          berita.subtitle.toLowerCase().includes(query) ||
          berita.penulis.toLowerCase().includes(query) ||
          berita.isi.toLowerCase().includes(query)
        );
      }
    },
    mounted() {
      // Set default date to today
      const today = new Date().toISOString().split('T')[0];
      this.form.tanggal = today;
    },
    methods: {
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
      
      async submitBerita() {
        this.isSubmitting = true;
        
        try {
          // Simulate API call delay
          await new Promise(resolve => setTimeout(resolve, 500));
          
          const beritaData = {
            ...this.form,
            id: this.editingIndex !== null ? this.beritaList[this.editingIndex].id : Date.now()
          };
  
          if (this.editingIndex === null) {
            // Add new news
            this.beritaList.unshift(beritaData);
            this.showSuccessMessage('Berita berhasil ditambahkan!');
          } else {
            // Update existing news
            this.beritaList.splice(this.editingIndex, 1, beritaData);
            this.showSuccessMessage('Berita berhasil diperbarui!');
          }
          
          this.resetForm();
        } catch (error) {
          this.showErrorMessage('Gagal menyimpan berita. Silakan coba lagi.');
        } finally {
          this.isSubmitting = false;
        }
      },
      
      resetForm() {
        this.form = {
          judul: "",
          subtitle: "",
          tanggal: new Date().toISOString().split('T')[0],
          penulis: "",
          isi: "",
          foto: null,
        };
        this.editingIndex = null;
        
        // Reset file input
        if (this.$refs.fileInput) {
          this.$refs.fileInput.value = '';
        }
      },
      
      editBerita(index) {
        this.form = { ...this.beritaList[index] };
        this.editingIndex = index;
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
      
      hapusBerita(index) {
        this.deleteIndex = index;
        this.showDeleteModal = true;
      },
      
      confirmDelete() {
        if (this.deleteIndex !== null) {
          this.beritaList.splice(this.deleteIndex, 1);
          this.showSuccessMessage('Berita berhasil dihapus!');
          this.showDeleteModal = false;
          this.deleteIndex = null;
          
          // Reset form if editing deleted item
          if (this.editingIndex === this.deleteIndex) {
            this.resetForm();
          }
        }
      },
      
      formatDate(dateStr) {
        const options = { 
          year: "numeric", 
          month: "long", 
          day: "numeric",
          timeZone: "Asia/Jakarta"
        };
        return new Date(dateStr).toLocaleDateString("id-ID", options);
      },
      
      onFileChange(event) {
        const file = event.target.files[0];
        if (!file) return;
  
        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
          this.showErrorMessage('Ukuran file terlalu besar. Maksimal 5MB.');
          return;
        }
  
        // Validate file type
        if (!file.type.startsWith('image/')) {
          this.showErrorMessage('File harus berupa gambar.');
          return;
        }
  
        const reader = new FileReader();
        reader.onload = e => {
          this.form.foto = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      
      removeFoto() {
        this.form.foto = null;
        if (this.$refs.fileInput) {
          this.$refs.fileInput.value = '';
        }
      },
      
      getOriginalIndex(berita) {
        return this.beritaList.findIndex(item => item.id === berita.id);
      },
      
      showSuccessMessage(message) {
        this.messageType = 'success';
        this.messageText = message;
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 5000);
      },
      
      showErrorMessage(message) {
        this.messageType = 'error';
        this.messageText = message;
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 5000);
      }
    },
  };
  </script>
  
  <style scoped>
  /* Line clamp utilities */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Smooth transitions */
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: all 0.3s ease;
  }
  
  .slide-down-enter-from {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  .slide-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  /* List transitions */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.3s ease;
  }
  
  .list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }
  
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  
  .list-move {
    transition: transform 0.3s ease;
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
  
  /* Focus styles */
  input:focus,
  textarea:focus {
    box-shadow: 0 0 0 3px rgba(215, 30, 40, 0.1);
  }
  
  /* Button hover effects */
  button {
    transition: all 0.2s ease;
  }
  
  button:hover {
    transform: translateY(-1px);
  }
  
  button:active {
    transform: translateY(0);
  }
  
  /* Mobile responsive adjustments */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  </style>