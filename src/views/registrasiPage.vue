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
                                <label class="block text-gray-700 font-medium mb-1">Email</label>
                                <div class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-msd">
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
                                    <label class="block text-gray-700 font-medium mb-1">Aset</label>
                                    <div
                                        class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative">
                                        <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                        <select v-model="form.aset" @change="onAssetChange" required
                                            class="bg-transparent w-full focus:outline-none text-white appearance-none">
                                            <option disabled value="" class="bg-gray-800 text-white">Pilih Jenis Aset
                                            </option>
                                            <option value="HeadOfficePEP" class="bg-gray-800 text-white">HO Regional 2
                                            </option>
                                            <option value="Aset1" class="bg-gray-800 text-white">Asset 1</option>
                                            <option value="Aset2" class="bg-gray-800 text-white">Asset 2</option>
                                            <option value="Aset3" class="bg-gray-800 text-white">Asset 3</option>
                                            <option value="Aset4" class="bg-gray-800 text-white">Asset 4</option>
                                            <option value="Aset5" class="bg-gray-800 text-white">Asset 5</option>
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
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-gray-700 font-medium mb-1">Lokasi</label>
                                    <div
                                        class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative">
                                        <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                        <select v-model="form.provinsi" required :disabled="!form.aset"
                                            class="bg-transparent w-full focus:outline-none text-white appearance-none">
                                            <option disabled value="" class="bg-gray-800 text-white">
                                                {{ form.aset ? 'Pilih Lokasi' : 'Pilih Aset terlebih dahulu' }}
                                            </option>
                                            <option v-for="provinsi in availableProvinces" :key="provinsi.value" 
                                                :value="provinsi.value" class="bg-gray-800 text-white">
                                                {{ provinsi.label }}
                                            </option>
                                        </select>
                                        <svg class="w-4 h-4 absolute right-4 pointer-events-none" fill="none"
                                            stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
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
                email: '',
                password: '',
                provinsi: '',
                aset: '',
            },
            fotoFile: null,
            conditionalFiles: {},
            message: '',
            success: false,
            loading: false,
            fileError: '',
            assetLocationMapping: {
                'HeadOfficePEP': [
                    { value: 'ho_regional_2', label: 'HO Regional 2' }
                ],
                'Aset1': [
                    { value: 'jambi_ho', label: 'Jambi HO' },
                    { value: 'pangkalan_susu', label: 'Pangkalan Susu' },
                    { value: 'rantau', label: 'Rantau' },
                    { value: 'lirik', label: 'Lirik' },
                    { value: 'jambi_field', label: 'Jambi Field' }
                ],
                'Aset2': [
                    { value: 'prabumulih_ho', label: 'Prabumulih HO' },
                    { value: 'ramba', label: 'Ramba' },
                    { value: 'limau', label: 'Limau' },
                    { value: 'pendopo', label: 'Pendopo' },
                    { value: 'adera', label: 'Adera' },
                    { value: 'prabumulih_field', label: 'Prabumulih Field' }
                ],
                'Aset3': [
                    { value: 'cirebon_ho', label: 'Cirebon HO' },
                    { value: 'tambun', label: 'Tambun' },
                    { value: 'subang', label: 'Subang' },
                    { value: 'jatibarang_field', label: 'Jatibarang Field' }
                ],
                'Aset4': [
                    { value: 'surabaya_ho', label: 'Surabaya HO' },
                    { value: 'cepu', label: 'Cepu' },
                    { value: 'poleng', label: 'Poleng' },
                    { value: 'sukowati', label: 'Sukowati' },
                    { value: 'donggi_matindok', label: 'Donggi Matindok' },
                    { value: 'papua_field', label: 'Papua Field' }
                ],
                'Aset5': [
                    { value: 'balikpapan_ho', label: 'Balikpapan HO' },
                    { value: 'tarakan', label: 'Tarakan' },
                    { value: 'sangata', label: 'Sangata' },
                    { value: 'sanga_sanga', label: 'Sanga-sanga' },
                    { value: 'bunyu', label: 'Bunyu' },
                    { value: 'tanjung_field', label: 'Tanjung Field' }
                ]
            }
        }
    },
    computed: {
        messageClass() {
            return {
                'bg-green-100 text-green-800 border border-green-300': this.success,
                'bg-red-100 text-red-800 border border-red-300': !this.success
            }
        },
        availableProvinces() {
            if (!this.form.aset) return [];
            return this.assetLocationMapping[this.form.aset] || [];
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


        async submitFormData() {
            try {
                const formData = new FormData();

                formData.append('email', this.form.email.trim());
                formData.append('password', this.form.password);
                formData.append('provinsi', this.form.provinsi);
                formData.append('aset', this.form.aset);

                if (this.fotoFile) {
                    formData.append('foto', this.fotoFile);
                }

                for (let [key, value] of formData.entries()) {
                    console.log(key, value);
                }

                const response = await API.registerPeserta(formData);
                console.log('Registration successful:', response.data);

                this.success = true;
                this.message = response.data.message || 'Pendaftaran berhasil! Silakan login dengan akun Anda.';

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

                    console.log('Error response:', data); // Debug

                    switch (status) {
                        case 400:
                            this.message = data.message || 'Data yang Anda masukkan tidak valid. Periksa kembali form.';
                            // Tampilkan error detail jika ada
                            if (data.errors) {
                                this.message += ` Detail: ${data.errors}`;
                            }
                            break;
                        case 409:
                            this.message = 'Email sudah terdaftar. Gunakan email lain atau coba login.';
                            break;
                        case 500:
                            this.message = 'Terjadi kesalahan server. Silakan coba lagi nanti.';
                            break;
                        default:
                            this.message = data.message || 'Terjadi kesalahan saat pendaftaran. Silakan coba lagi.';
                    }
                } else if (error.request) {
                    this.message = 'Tidak dapat terhubung ke server. Periksa koneksi internet Anda.';
                    console.log('Request error:', error.request);
                } else {
                    this.message = 'Terjadi kesalahan yang tidak terduga. Silakan coba lagi.';
                    console.log('Error:', error.message);
                }
            }
        },

        // Fixed validation method
        validateForm() {
            if (!this.form.email.trim()) {
                this.message = 'Email harus diisi';
                this.success = false;
                return false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.form.email)) {
                this.message = 'Format email tidak valid';
                this.success = false;
                return false;
            }

            if (this.form.password.length < 8) {
                this.message = 'Password minimal 8 karakter';
                this.success = false;
                return false;
            }

            if (!this.form.provinsi) {
                this.message = 'Provinsi harus dipilih';
                this.success = false;
                return false;
            }
            
            if (!this.form.aset) {
                this.message = 'Aset harus dipilih';
                this.success = false;
                return false;
            }
            
            if (!this.fotoFile) {
                this.message = 'Foto harus diupload';
                this.success = false;
                return false;
            }

            return true;
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
                email: '',
                password: '',
                provinsi: '',
                aset: '',
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