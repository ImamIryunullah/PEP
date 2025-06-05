<template>
    <div>
        <NavbarDashboard />
        <section class="min-h-screen relative bg-[#F7F7F7] w-full overflow-hidden">

            <div class="absolute inset-0 z-0 pointer-events-none">
                <img src="/registrasi/hijau.png" alt="" class="absolute top-0 left-0 w-full" />
                <img src="/registrasi/biru.png" alt="" class="absolute bottom-0 right-0 w-full" />
                <h1 class="absolute top-20 left-20 text-gray-600 opacity-5 text-9xl font-bold">REGIS</h1>
                <h1 class="absolute top-52 left-20 text-gray-600 opacity-5 text-9xl font-bold">TRASI</h1>
            </div>
            <div class="relative z-10">
                <div class="flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
                    <div class="w-full max-w-4xl space-y-6 bg-white p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-center text-gray-800">Formulir Pendaftaran</h2>
                        <div v-if="loading" class="text-center py-4">
                            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                            <p class="mt-2 text-gray-600">Sedang memproses...</p>
                        </div>
                        <form @submit.prevent="submitForm" class="space-y-6" enctype="multipart/form-data"
                            :class="{ 'opacity-50 pointer-events-none': loading }">

                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Nama Lengkap</label>
                                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                    <input type="text" placeholder="Nama Lengkap" v-model="form.nama_lengkap" required
                                        class="bg-transparent w-full focus:outline-none placeholder-white" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Email</label>
                                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                    <input type="email" placeholder="Email (harus valid)" v-model="form.email" required
                                        class="bg-transparent w-full focus:outline-none placeholder-white" />
                                </div>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-medium mb-1">Password</label>
                                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                    <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                    <input type="password" placeholder="Minimal 8 karakter" v-model="form.password"
                                        required minlength="8"
                                        class="bg-transparent w-full focus:outline-none placeholder-white" />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-gray-700 font-medium mb-1">Jenis Pekerja</label>
                                    <div
                                        class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative">
                                        <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                        <select v-model="form.jenis_pekerja" @change="resetConditionalFields" required
                                            class="bg-transparent w-full focus:outline-none text-white appearance-none">
                                            <option disabled value="" class="bg-gray-800 text-white">Pilih Jenis Pekerja
                                            </option>
                                            <option value="Mitra" class="bg-gray-800 text-white">Mitra</option>
                                            <option value="Pekerja" class="bg-gray-800 text-white">Pekerja</option>
                                        </select>
                                        <svg class="w-4 h-4 absolute right-4 pointer-events-none" fill="none"
                                            stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-gray-700 font-medium mb-1">Cabang Olahraga</label>
                                    <div
                                        class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative">
                                        <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                        <select v-model="form.cabang_olahraga" required
                                            class="bg-transparent w-full focus:outline-none text-white appearance-none">
                                            <option disabled value="" class="bg-gray-800 text-white">Pilih Cabang
                                                Olahraga</option>
                                            <option value="Volley" class="bg-gray-800 text-white">Volley</option>
                                            <option value="Sepak Bola" class="bg-gray-800 text-white">Sepak Bola
                                            </option>
                                            <option value="Tenis Meja" class="bg-gray-800 text-white">Tenis Meja
                                            </option>
                                            <option value="Badminton" class="bg-gray-800 text-white">Badminton</option>
                                            <option value="Lari" class="bg-gray-800 text-white">Lari</option>
                                            <option value="Senam" class="bg-gray-800 text-white">Senam</option>
                                            <option value="Tenis Lapangan" class="bg-gray-800 text-white">Tenis Lapangan
                                            </option>
                                            <option value="Basket" class="bg-gray-800 text-white">Basket</option>
                                            <option value="Esport" class="bg-gray-800 text-white">Esport</option>
                                        </select>
                                        <svg class="w-4 h-4 absolute right-4 pointer-events-none" fill="none"
                                            stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-gray-700 font-medium mb-1">Aset</label>
                                    <div
                                        class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative">
                                        <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                        <select v-model="form.aset" required
                                            class="bg-transparent w-full focus:outline-none text-white appearance-none">
                                            <option disabled value="" class="bg-gray-800 text-white">Pilih Jenis Aset
                                            </option>
                                            <option value="HeadOfficePEP" class="bg-gray-800 text-white">Head Office PEP
                                            </option>
                                            <option value="Aset1" class="bg-gray-800 text-white">Aset 1</option>
                                            <option value="Aset2" class="bg-gray-800 text-white">Aset2</option>
                                            <option value="Aset3" class="bg-gray-800 text-white">Aset3</option>
                                            <option value="Aset4" class="bg-gray-800 text-white">Aset4</option>
                                            <option value="Aset5" class="bg-gray-800 text-white">Aset5</option>
                                        </select>
                                        <svg class="w-4 h-4 absolute right-4 pointer-events-none" fill="none"
                                            stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-gray-700 font-medium mb-1">Upload Foto</label>
                                    <div
                                        class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md">
                                        <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                        <input type="file" @change="handleFileUpload" accept="image/*" required
                                            ref="fileInput"
                                            class="text-white file:bg-white file:text-[#a60000] file:rounded-full file:px-4 file:py-1 file:border-0 file:mr-2 bg-transparent w-full focus:outline-none" />
                                    </div>
                                    <p v-if="fileError" class="text-red-500 text-sm mt-1">{{ fileError }}</p>
                                </div>
                            </div>
                            <div v-if="form.jenis_pekerja" class="border-t pt-6">
                                <h3 class="text-xl font-bold text-gray-800 mb-4">
                                    📄 Persyaratan Dokumen {{ form.jenis_pekerja === 'Pekerja' ? '(Pekerja)' : '(Mitra Kerja)' }}
                                </h3>

                                <div v-if="form.jenis_pekerja === 'Pekerja'" class="space-y-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Scan ID Card Pekerja</label>
                                            <input type="file" @change="handleConditionalFileUpload('id_card_pekerja', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Scan KTP</label>
                                            <input type="file" @change="handleConditionalFileUpload('ktp', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                    </div>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Kartu Medika Plaza</label>
                                            <input type="file" @change="handleConditionalFileUpload('kartu_medika', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">BPJS (Screenshot Aplikasi JMO)</label>
                                            <input type="file" @change="handleConditionalFileUpload('bpjs', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                    </div>                                   
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Surat Pernyataan Keabsahan Data (Bermaterai)</label>
                                            <input type="file" @change="handleConditionalFileUpload('surat_pernyataan', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Surat Layak Bertanding dari Dokter</label>
                                            <input type="file" @change="handleConditionalFileUpload('surat_layak_bertanding', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-gray-700 font-medium mb-1">Form PRQ dengan Hasil MCU</label>
                                        <input type="file" @change="handleConditionalFileUpload('form_prq', $event)" 
                                            accept=".pdf,.jpg,.jpeg,.png" required
                                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                    </div>
                                </div>

                                
                                <div v-if="form.jenis_pekerja === 'Mitra'" class="space-y-4">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Scan ID Card Mitra Kerja</label>
                                            <input type="file" @change="handleConditionalFileUpload('id_card_mitra', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Scan KTP</label>
                                            <input type="file" @change="handleConditionalFileUpload('ktp_mitra', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                    </div>                                  
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">BPJS Digital (Screenshot Aplikasi JMO)</label>
                                            <input type="file" @change="handleConditionalFileUpload('bpjs_mitra', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Surat Keterangan Kerja (Min. 6 Bulan)</label>
                                            <input type="file" @change="handleConditionalFileUpload('surat_kerja', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                    </div>                                 
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Kontrak Kerja (Min. 1 Tahun)</label>
                                            <input type="file" @change="handleConditionalFileUpload('kontrak_kerja', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Sertifikat BST/HSSE/SIML</label>
                                            <input type="file" @change="handleConditionalFileUpload('sertifikat', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                    </div>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Surat Pernyataan Keabsahan Data (Bermaterai)</label>
                                            <input type="file" @change="handleConditionalFileUpload('surat_pernyataan_mitra', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Surat Layak Bertanding dari Dokter</label>
                                            <input type="file" @change="handleConditionalFileUpload('surat_layak_bertanding_mitra', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                    </div>                                   
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Form PRQ dengan Hasil MCU</label>
                                            <input type="file" @change="handleConditionalFileUpload('form_prq_mitra', $event)" 
                                                accept=".pdf,.jpg,.jpeg,.png" required
                                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" />
                                        </div>
                                        <div>
                                            <label class="block text-gray-700 font-medium mb-1">Link Media Sosial Aktif</label>
                                            <div class="flex items-center bg-gray-100 px-4 py-3 rounded-lg">
                                                <input type="url" placeholder="https://instagram.com/username atau https://facebook.com/username" 
                                                    v-model="form.media_sosial" required
                                                    class="bg-transparent w-full focus:outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-center pt-6">
                                <button type="submit" :disabled="loading"
                                    class="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold py-2 px-10 rounded-full shadow-md transition duration-300 ease-in-out">
                                    {{ loading ? 'MEMPROSES...' : 'SUBMIT' }}
                                </button>
                            </div>
                            <div class="text-center text-sm text-gray-600 mt-4">
                                <span>Belum tahu persyaratan?</span>
                                <a href="/syarat-pendaftaran" class="text-red-600 hover:underline font-medium">Lihat
                                    persyaratan pendaftaran</a>
                            </div>

                            <div class="text-center text-sm text-gray-600 mt-4">
                                Sudah terdaftar?
                                <a href="/login" class="text-red-600 hover:underline font-medium">Coba login</a>
                            </div>

                            
                            <div v-if="message" :class="messageClass"
                                class="mt-4 p-4 rounded-lg text-center font-semibold">
                                {{ message }}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <FooterDashboard />
    </div>
</template>
<script>
import FooterDashboard from '@/components/FooterDashboard.vue'
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import API from "@/service/api";

export default {
    components: {
        FooterDashboard,
        NavbarDashboard
    },
    data() {
        return {
            form: {
                nama_lengkap: '',
                email: '',
                password: '',
                jenis_pekerja: '',
                cabang_olahraga: '',
                aset: '',
                media_sosial: ''
            },
            fotoFile: null,
            conditionalFiles: {},
            message: '',
            success: false,
            loading: false,
            fileError: ''
        }
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
        handleFileUpload(event) {
            const file = event.target.files[0];
            this.fileError = '';

            if (file) {
                const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
                if (!allowedTypes.includes(file.type)) {
                    this.fileError = 'File harus berupa gambar (JPEG, PNG, GIF)';
                    this.fotoFile = null;
                    return;
                }

                const maxSize = 5 * 1024 * 1024;
                if (file.size > maxSize) {
                    this.fileError = 'Ukuran file tidak boleh lebih dari 5MB';
                    this.fotoFile = null;
                    return;
                }

                this.fotoFile = file;
            }
        },

        handleConditionalFileUpload(fieldName, event) {
            const file = event.target.files[0];
            if (file) {
                const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
                if (!allowedTypes.includes(file.type)) {
                    this.message = `File ${fieldName} harus berupa PDF atau gambar (JPEG, PNG)`;
                    this.success = false;
                    event.target.value = '';
                    return;
                }

                const maxSize = 10 * 1024 * 1024;
                if (file.size > maxSize) {
                    this.message = `Ukuran file ${fieldName} tidak boleh lebih dari 10MB`;
                    this.success = false;
                    event.target.value = '';
                    return;
                }

                this.conditionalFiles[fieldName] = file;
            }
        },

        resetConditionalFields() {
            this.conditionalFiles = {};
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

            if (this.form.password.length < 8) {
                this.message = 'Password minimal 8 karakter';
                return false;
            }

            if (!this.form.jenis_pekerja) {
                this.message = 'Jenis Pekerja harus dipilih';
                return false;
            }
            if (!this.form.cabang_olahraga) {
                this.message = 'Cabang olahraga harus dipilih';
                return false;
            }
            if (!this.form.aset) {
                this.message = 'Aset harus dipilih';
                return false;
            }
            if (!this.fotoFile) {
                this.message = 'Foto harus diupload';
                return false;
            }
            if (this.form.jenis_pekerja === 'Pekerja') {
                const requiredPekerjaFields = [
                    'id_card_pekerja', 'ktp', 'kartu_medika', 'bpjs', 
                    'surat_pernyataan', 'surat_layak_bertanding', 'form_prq'
                ];
                
                for (let field of requiredPekerjaFields) {
                    if (!this.conditionalFiles[field]) {
                        this.message = `Dokumen ${field.replace(/_/g, ' ')} harus diupload`;
                        return false;
                    }
                }
            } else if (this.form.jenis_pekerja === 'Mitra') {
                const requiredMitraFields = [
                    'id_card_mitra', 'ktp_mitra', 'bpjs_mitra', 'surat_kerja',
                    'kontrak_kerja', 'sertifikat', 'surat_pernyataan_mitra',
                    'surat_layak_bertanding_mitra', 'form_prq_mitra'
                ];
                
                for (let field of requiredMitraFields) {
                    if (!this.conditionalFiles[field]) {
                        this.message = `Dokumen ${field.replace(/_/g, ' ')} harus diupload`;
                        return false;
                    }
                }

                if (!this.form.media_sosial.trim()) {
                    this.message = 'Link media sosial harus diisi untuk Mitra Kerja';
                    return false;
                }

                const urlRegex = /^https?:\/\/.+/;
                if (!urlRegex.test(this.form.media_sosial)) {
                    this.message = 'Format link media sosial tidak valid (harus dimulai dengan http:// atau https://)';
                    return false;
                }
            }

            return true;
        },

        async submitFormData() {
            try {
                const formData = new FormData();

                formData.append('nama_lengkap', this.form.nama_lengkap);
                formData.append('email', this.form.email);
                formData.append('password', this.form.password);
                formData.append('jenis_pekerja', this.form.jenis_pekerja);
                formData.append('cabang_olahraga', this.form.cabang_olahraga);
                formData.append('aset', this.form.aset);

                if (this.fotoFile) {
                    formData.append('foto', this.fotoFile);
                }

                Object.keys(this.conditionalFiles).forEach(key => {
                    formData.append(key, this.conditionalFiles[key]);
                });

                if (this.form.jenis_pekerja === 'Mitra' && this.form.media_sosial) {
                    formData.append('media_sosial', this.form.media_sosial);
                }

                const response = await API.registerPekerja(formData);
                console.log('Registration successful:', response.data);

                this.success = true;
                this.message = 'Pendaftaran berhasil! Silakan login dengan akun Anda.';

                this.resetForm();

                setTimeout(() => {
                    this.$router.push('/login');
                }, 2000);

            } catch (error) {
                console.error('Registration error:', error);

                this.success = false;

                if (error.response) {
                    const status = error.response.status;
                    const data = error.response.data;

                    if (status === 400) {
                        this.message = data.message || 'Data yang Anda masukkan tidak valid. Periksa kembali form.';
                    } else if (status === 409) {
                        this.message = 'Email sudah terdaftar. Gunakan email lain atau coba login.';
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
                password: '',
                jenis_pekerja: '',
                cabang_olahraga: '',
                aset: '',
                media_sosial: ''
            };
            this.fotoFile = null;
            this.conditionalFiles = {};
            this.fileError = '';

            if (this.$refs.fileInput) {
                this.$refs.fileInput.value = '';
            }


            const fileInputs = this.$el.querySelectorAll('input[type="file"]');
            fileInputs.forEach(input => {
                if (input !== this.$refs.fileInput) {
                    input.value = '';
                }
            });
        }
    }
}
</script>

<style scoped>

.bg-\[#a60000\] {
    background-color: #a60000;
}

.text-\[#a60000\] {
    color: #a60000;
}

.border-\[#a60000\] {
    border-color: #a60000;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.animate-spin {
    animation: spin 1s linear infinite;
}

input[type="file"]::-webkit-file-upload-button {
    background: white;
    color: #a60000;
    border: none;
    border-radius: 9999px;
    padding: 0.25rem 1rem;
    margin-right: 0.5rem;
    font-weight: 500;
    cursor: pointer;
}

input[type="file"]::-webkit-file-upload-button:hover {
    background: #f3f4f6;
}

select {
    background-image: none;
}

@media (max-width: 768px) {
    .grid-cols-1.md\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
    
    .text-9xl {
        font-size: 4rem;
    }
    
    .top-20 {
        top: 2rem;
    }
    
    .left-20 {
        left: 2rem;
    }
}

.text-red-500 {
    color: #ef4444;
}

.bg-green-100 {
    background-color: #dcfce7;
}

.text-green-800 {
    color: #166534;
}

.border-green-300 {
    border-color: #86efac;
}

.bg-red-100 {
    background-color: #fee2e2;
}

.text-red-800 {
    color: #991b1b;
}

.border-red-300 {
    border-color: #fca5a5;
}

input:focus, select:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(166, 0, 0, 0.3);
}

.disabled\:bg-gray-400:disabled {
    background-color: #9ca3af;
}   

.opacity-50 {
    opacity: 0.5;
}

.pointer-events-none {
    pointer-events: none;
}
</style>