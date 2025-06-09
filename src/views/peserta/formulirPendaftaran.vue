<template>
    <div class="min-h-screen flex bg-gray-100 relative font-sans">
        
        <SidebarUser :isOpen="isSidebarOpen" @logout="handleLogout" />
        
        <div v-if="isSidebarOpen" @click="isSidebarOpen = false"
            class="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"></div>
      
        <div :class="[
            'flex-1 flex flex-col transition-margin duration-300 ease-in-out min-h-screen',
            isSidebarOpen ? 'md:ml-64' : 'md:ml-16'
        ]">
            <header class="bg-white shadow-md px-4 py-3 flex justify-between items-center md:hidden">
                <button @click="toggleSidebar" class="text-gray-700 text-2xl focus:outline-none">
                    <i class="fas fa-bars"></i>
                </button>
                <h1 class="text-lg font-semibold text-[#D71E28]">Formulir Pendaftaran</h1>
            </header>
            
            <main class="px-6 py-8">
                <section class="min-h-screen p-6 bg-gray-100">
                    <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">
                            Formulir Pendaftaran Peserta
                        </h2>

                        
                        <div v-if="loading" class="text-center py-8">
                            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#D71E28]"></div>
                            <p class="mt-4 text-gray-600">Sedang memproses pendaftaran...</p>
                        </div>

                        
                        <form @submit.prevent="submitForm" 
                              class="space-y-6" 
                              enctype="multipart/form-data"
                              :class="{ 'opacity-50 pointer-events-none': loading }">

                            
                            <div class="bg-gray-50 p-6 rounded-lg">
                                <h3 class="text-lg font-semibold text-gray-800 mb-4">Informasi Dasar</h3>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">Nama Lengkap *</label>
                                        <input type="text" 
                                               v-model="form.nama_lengkap" 
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                               placeholder="Masukkan nama lengkap">
                                    </div>

                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">Email *</label>
                                        <input type="email" 
                                               v-model="form.email" 
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                               placeholder="email@example.com">
                                    </div>

                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">No. Telepon *</label>
                                        <input type="tel" 
                                               v-model="form.no_telepon" 
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                               placeholder="Nomor Telepon 08xxxxxxxxxx">
                                    </div>

                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">Jenis Peserta *</label>
                                        <select v-model="form.jenis_peserta" 
                                                @change="resetConditionalFields"
                                                required
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                            <option value="">Pilih Jenis Peserta</option>
                                            <option value="Pekerja">Pekerja</option>
                                            <option value="Mitra">Mitra Kerja</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <div v-if="form.jenis_peserta" class="bg-gray-50 p-6 rounded-lg">
                                <h3 class="text-lg font-semibold text-gray-800 mb-4">
                                    Dokumen yang Diperlukan - {{ form.jenis_peserta }}
                                </h3>
 
                                <div class="space-y-6">       
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">
                                            Scan KTP *
                                            <span class="text-sm text-gray-500">(Format: JPG, PNG, PDF - Max 5MB)</span>
                                        </label>
                                        <input type="file" 
                                               @change="handleFileUpload('ktp', $event)"
                                               accept="image/*,.pdf"
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                        <p v-if="fileErrors.ktp" class="text-red-500 text-sm mt-1">{{ fileErrors.ktp }}</p>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">
                                            Scan ID Card {{ form.jenis_peserta === 'Pekerja' ? 'Pekerja' : 'Mitra Kerja' }} *
                                            <span class="text-sm text-gray-500">(Yang masih berlaku)</span>
                                        </label>
                                        <input type="file" 
                                               @change="handleFileUpload('id_card', $event)"
                                               accept="image/*,.pdf"
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                        <p v-if="fileErrors.id_card" class="text-red-500 text-sm mt-1">{{ fileErrors.id_card }}</p>
                                    </div>
     
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">
                                            {{ form.jenis_peserta === 'Pekerja' ? 'Kartu Medika Plaza dan BPJS' : 'Rekam Layar Kartu Digital BPJS' }} *
                                            <span class="text-sm text-gray-500">(Aplikasi JMO)</span>
                                        </label>
                                        <input type="file" 
                                               @change="handleFileUpload('bpjs', $event)"
                                               accept="image/*,.pdf"
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                        <p v-if="fileErrors.bpjs" class="text-red-500 text-sm mt-1">{{ fileErrors.bpjs }}</p>
                                    </div>
     
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">
                                            Pas Foto Digital *
                                            <span class="text-sm text-gray-500">(Format: JPG, PNG - Max 2MB)</span>
                                        </label>
                                        <input type="file" 
                                               @change="handleFileUpload('pas_foto', $event)"
                                               accept="image/*"
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                        <p v-if="fileErrors.pas_foto" class="text-red-500 text-sm mt-1">{{ fileErrors.pas_foto }}</p>
                                    </div>
     
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">
                                            Surat Pernyataan Keabsahan Data *
                                            <span class="text-sm text-gray-500">(Ditandatangani ketua kontingen + bermaterai)</span>
                                        </label>
                                        <input type="file" 
                                               @change="handleFileUpload('surat_pernyataan', $event)"
                                               accept="image/*,.pdf"
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                        <p v-if="fileErrors.surat_pernyataan" class="text-red-500 text-sm mt-1">{{ fileErrors.surat_pernyataan }}</p>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">
                                            Surat Layak Bertanding *
                                            <span class="text-sm text-gray-500">(Dari dokter Perusahaan di WK)</span>
                                        </label>
                                        <input type="file" 
                                               @change="handleFileUpload('surat_layak_bertanding', $event)"
                                               accept="image/*,.pdf"
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                        <p v-if="fileErrors.surat_layak_bertanding" class="text-red-500 text-sm mt-1">{{ fileErrors.surat_layak_bertanding }}</p>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">
                                            Form PRQ dengan Hasil MCU *
                                        </label>
                                        <input type="file" 
                                               @change="handleFileUpload('form_prq', $event)"
                                               accept="image/*,.pdf"
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                        <p v-if="fileErrors.form_prq" class="text-red-500 text-sm mt-1">{{ fileErrors.form_prq }}</p>
                                    </div>
                                    
                                    <template v-if="form.jenis_peserta === 'Mitra'">
                                        
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-2">
                                                Surat Keterangan Kerja di WK PEP *
                                                <span class="text-sm text-gray-500">(Minimal 6 bulan, status aktif)</span>
                                            </label>
                                            <input type="file" 
                                                   @change="handleFileUpload('surat_keterangan_kerja', $event)"
                                                   accept="image/*,.pdf"
                                                   required
                                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                            <p v-if="fileErrors.surat_keterangan_kerja" class="text-red-500 text-sm mt-1">{{ fileErrors.surat_keterangan_kerja }}</p>
                                        </div>
                                        
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-2">
                                                Kontrak Kerja *
                                                <span class="text-sm text-gray-500">(Minimal 1 tahun atau PKWT sebelumnya jika kurang dari 1 tahun)</span>
                                            </label>
                                            <input type="file" 
                                                   @change="handleFileUpload('kontrak_kerja', $event)"
                                                   accept="image/*,.pdf"
                                                   required
                                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                            <p v-if="fileErrors.kontrak_kerja" class="text-red-500 text-sm mt-1">{{ fileErrors.kontrak_kerja }}</p>
                                        </div>
                                       
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-2">
                                                Sertifikat BST/HSSE Passport/SIML *
                                            </label>
                                            <input type="file" 
                                                   @change="handleFileUpload('sertifikat_bst', $event)"
                                                   accept="image/*,.pdf"
                                                   required
                                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                            <p v-if="fileErrors.sertifikat_bst" class="text-red-500 text-sm mt-1">{{ fileErrors.sertifikat_bst }}</p>
                                        </div>

                                        
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-2">
                                                Link Media Sosial Aktif *
                                                <span class="text-sm text-gray-500">(Instagram, Facebook, dll)</span>
                                            </label>
                                            <input type="url" 
                                                   v-model="form.media_sosial" 
                                                   required
                                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                                   placeholder="https://instagram.com/username">
                                        </div>
                                    </template>
                                </div>
                            </div>

                            
                            <div class="bg-gray-50 p-6 rounded-lg">
                                <h3 class="text-lg font-semibold text-gray-800 mb-4">Informasi Tambahan</h3>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">Cabang Olahraga *</label>
                                        <select v-model="form.cabang_olahraga" 
                                                required
                                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent">
                                            <option value="">Pilih Cabang Olahraga</option>
                                            <option value="Sepak Bola">Sepak Bola</option>
                                            <option value="Badminton">Badminton</option>
                                            <option value="Basket">Basket</option>
                                            <option value="Voli">Voli</option>
                                            <option value="Tenis Meja">Tenis Meja</option>
                                            <option value="Catur">Catur</option>
                                            <option value="Atletik">Atletik</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label class="block text-gray-700 font-medium mb-2">Wilayah Kerja *</label>
                                        <input type="text" 
                                               v-model="form.wilayah_kerja" 
                                               required
                                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                               placeholder="Contoh: WK Jakarta, HO Zona, dll">
                                    </div>
                                </div>

                                <div class="mt-6">
                                    <label class="block text-gray-700 font-medium mb-2">Catatan Tambahan</label>
                                    <textarea v-model="form.catatan"
                                              rows="4"
                                              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D71E28] focus:border-transparent"
                                              placeholder="Informasi tambahan yang perlu disampaikan (opsional)"></textarea>
                                </div>
                            </div>

                            
                            <div class="flex justify-center pt-6">
                                <button type="submit" 
                                        :disabled="loading"
                                        class="bg-[#D71E28] hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-3 px-12 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                                    {{ loading ? 'MEMPROSES...' : 'SUBMIT PENDAFTARAN' }}
                                </button>
                            </div>

                            
                            <div v-if="message" 
                                 :class="messageClass"
                                 class="mt-6 p-4 rounded-lg text-center font-semibold">
                                {{ message }}
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    </div>
</template>

<script>
import SidebarUser from '@/components/SidebarUser.vue';
import API from "@/service/api";

export default {
    components: { SidebarUser },
    data() {
        return {
            isSidebarOpen: false,
            loading: false,
            message: '',
            success: false,
            form: {
                nama_lengkap: '',
                email: '',
                no_telepon: '',
                jenis_peserta: '',
                cabang_olahraga: '',
                wilayah_kerja: '',
                media_sosial: '',
                catatan: ''
            },
            uploadedFiles: {},
            fileErrors: {}
        };
    },
    computed: {
        messageClass() {
            return {
                'bg-green-100 text-green-800 border border-green-300': this.success,
                'bg-red-100 text-red-800 border border-red-300': !this.success
            }
        }
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },

        handleLogout() {

            localStorage.removeItem('token');
            this.$router.push('/login');
        },

        handleFileUpload(fieldName, event) {
            const file = event.target.files[0];
            this.fileErrors[fieldName] = '';

            if (!file) {
                delete this.uploadedFiles[fieldName];
                return;
            }

            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'];
            if (!allowedTypes.includes(file.type)) {
                this.fileErrors[fieldName] = 'File harus berupa gambar (JPEG, PNG, GIF) atau PDF';
                event.target.value = '';
                return;
            }

            const maxSize = fieldName === 'pas_foto' ? 2 * 1024 * 1024 : 5 * 1024 * 1024; 
            if (file.size > maxSize) {
                this.fileErrors[fieldName] = `Ukuran file tidak boleh lebih dari ${fieldName === 'pas_foto' ? '2MB' : '5MB'}`;
                event.target.value = '';
                return;
            }

            this.uploadedFiles[fieldName] = file;
        },

        resetConditionalFields() {
            const fieldsToKeep = ['ktp', 'id_card', 'bpjs', 'pas_foto', 'surat_pernyataan', 'surat_layak_bertanding', 'form_prq'];
            
            Object.keys(this.uploadedFiles).forEach(key => {
                if (!fieldsToKeep.includes(key)) {
                    delete this.uploadedFiles[key];
                }
            });

            Object.keys(this.fileErrors).forEach(key => {
                if (!fieldsToKeep.includes(key)) {
                    delete this.fileErrors[key];
                }
            });

            this.form.media_sosial = '';
            this.message = '';
        },

        validateForm() {

            if (!this.form.nama_lengkap.trim()) {
                this.message = 'Nama lengkap harus diisi';
                return false;
            }

            if (!this.form.email.trim()) {
                this.message = 'Email harus diisi';
                return false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.form.email)) {
                this.message = 'Format email tidak valid';
                return false;
            }

            if (!this.form.no_telepon.trim()) {
                this.message = 'No. telepon harus diisi';
                return false;
            }

            if (!this.form.jenis_peserta) {
                this.message = 'Jenis peserta harus dipilih';
                return false;
            }

            if (!this.form.cabang_olahraga) {
                this.message = 'Cabang olahraga harus dipilih';
                return false;
            }

            if (!this.form.wilayah_kerja.trim()) {
                this.message = 'Wilayah kerja harus diisi';
                return false;
            }

            const requiredDocs = ['ktp', 'id_card', 'bpjs', 'pas_foto', 'surat_pernyataan', 'surat_layak_bertanding', 'form_prq'];
            
            if (this.form.jenis_peserta === 'Mitra') {
                requiredDocs.push('surat_keterangan_kerja', 'kontrak_kerja', 'sertifikat_bst');
                
                if (!this.form.media_sosial.trim()) {
                    this.message = 'Link media sosial harus diisi untuk mitra kerja';
                    return false;
                }
            }

            for (const doc of requiredDocs) {
                if (!this.uploadedFiles[doc]) {
                    this.message = `Dokumen ${doc.replace(/_/g, ' ')} harus diupload`;
                    return false;
                }
            }

            return true;
        },

        async submitFormData() {
            try {
                const formData = new FormData();

                Object.keys(this.form).forEach(key => {
                    if (this.form[key]) {
                        formData.append(key, this.form[key]);
                    }
                });

                Object.keys(this.uploadedFiles).forEach(key => {
                    formData.append(key, this.uploadedFiles[key]);
                });

                const response = await API.submitParticipantRegistration(formData);
                console.log('Registration successful:', response.data);

                this.success = true;
                this.message = 'Pendaftaran berhasil! Data Anda telah diterima dan akan diproses.';
                
                this.resetForm();

            } catch (error) {
                console.error('Registration error:', error);
                this.success = false;

                if (error.response) {
                    const status = error.response.status;
                    const data = error.response.data;

                    if (status === 400) {
                        this.message = data.message || 'Data yang Anda masukkan tidak valid. Periksa kembali form.';
                    } else if (status === 409) {
                        this.message = 'Data peserta sudah terdaftar sebelumnya.';
                    } else if (status === 500) {
                        this.message = 'Terjadi kesalahan server. Silakan coba lagi nanti.';
                    } else {
                        this.message = data.message || 'Terjadi kesalahan saat pendaftaran. Silakan coba lagi.';
                    }
                } else if (error.request) {
                    this.message = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
                } else {
                    this.message = 'Terjadi kesalahan yang tidak terduga. Silakan coba lagi.';
                }
            }
        },

        async submitForm() {
            if (this.loading) return;
            
            this.message = '';
            this.success = false;
            this.loading = true;

            if (!this.validateForm()) {
                this.loading = false;
                return;
            }

            await this.submitFormData();
            this.loading = false;
        },

        resetForm() {
            this.form = {
                nama_lengkap: '',
                email: '',
                no_telepon: '',
                jenis_peserta: '',
                cabang_olahraga: '',
                wilayah_kerja: '',
                media_sosial: '',
                catatan: ''
            };
            
            this.uploadedFiles = {};
            this.fileErrors = {};

            const fileInputs = this.$el.querySelectorAll('input[type="file"]');
            fileInputs.forEach(input => {
                input.value = '';
            });
        }
    }
};
</script>

<style scoped>

.overflow-y-auto::-webkit-scrollbar {
    width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
    background: #D71E28;
    border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: #b71c1c;
}
</style>