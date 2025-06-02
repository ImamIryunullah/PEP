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
                    <div class="w-full max-w-3xl space-y-6 bg-white p-8 rounded-lg shadow-md">
                        <h2 class="text-2xl font-bold text-center text-gray-800">Formulir Pendaftaran</h2>
                        <form @submit.prevent="submitForm" class="space-y-6" enctype="multipart/form-data">
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
                                    <label class="block text-gray-700 font-medium mb-1">Jenis Peserta</label>
                                    <div
                                        class="flex items-center bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative">
                                        <img src="/registrasi/bunga.png" alt="Icon" class="w-5 h-5 mr-2" />
                                        <select v-model="form.jenis_peserta" required
                                            class="bg-transparent w-full focus:outline-none text-white placeholder-white appearance-none">
                                            <option disabled value="" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Pilih Jenis Peserta</option>
                                            <option value="Mitra" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Mitra</option>
                                            <option value="Peserta" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Peserta</option>
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
                                            class="bg-transparent w-full focus:outline-none text-white placeholder-white appearance-none">
                                            <option disabled value="" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Pilih Cabang Olahraga</option>
                                            <option value="Volley" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Volley</option>
                                            <option value="Sepak Bola" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Sepak Bola</option>
                                            <option value="Tenis Meja" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Tenis Meja</option>
                                            <option value="Badminton" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Badminton</option>
                                            <option value="Lari" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Lari</option>
                                            <option value="Senam" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Senam</option>
                                            <option value="Tenis Lapangan" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Tenis Lapangan</option>
                                            <option value="Basket" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Basket</option>
                                            <option value="Esport" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Esport</option>
                                        </select>
                                        <!-- Optional: Tambahkan ikon panah bawah -->
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
                                            class="bg-transparent w-full focus:outline-none text-white placeholder-white appearance-none">
                                            <option disabled value="" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Pilih Jenis Aset</option>
                                            <option value="HeadOfficePEP" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Head Office PEP</option>
                                            <option value="Aset1" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Aset 1</option>
                                            <option value="Aset2" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Aset2</option>
                                            <option value="Aset3" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Aset3</option>
                                            <option value="Aset4" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Aset4</option>
                                            <option value="Aset5" class="bg-[#a60000] text-white px-4 py-3 rounded-lg shadow-md relative ">Aset5</option>
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
                                        <input type="file" @change="handleFileUpload" required
                                            class="text-white file:bg-white file:text-[#a60000] file:rounded-full file:px-4 file:py-1 file:border-0 file:mr-2 bg-transparent w-full focus:outline-none" />
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-center pt-6">
                                <button type="submit"
                                    class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-full shadow-md transition duration-300 ease-in-out">
                                    SUBMIT
                                </button>
                            </div>

                            <div class="text-center text-sm text-gray-600 mt-4">
                                Sudah terdaftar?
                                <a href="/login" class="text-red-600 hover:underline font-medium">Coba login</a>
                            </div>

                            <div v-if="message" :class="{ 'text-green-600': success, 'text-red-600': !success }"
                                class="mt-4 text-center font-semibold">
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
import API from "@/service/api.js";

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
                jenis_peserta: '',
                cabang_olahraga: '',
                aset: ''
            },
            fotoFile: null,
            message: '',
            success: false,
        }
    },
    methods: {
        handleFileUpload(event) {
            this.fotoFile = event.target.files[0];
        },
        async submitForm() {
            const formData = new FormData();
            formData.append('nama_lengkap', this.form.nama_lengkap);
            formData.append('email', this.form.email);
            formData.append('password', this.form.password);
            formData.append('jenis_peserta', this.form.jenis_peserta);
            formData.append('cabang_olahraga', this.form.cabang_olahraga);
            formData.append('aset', this.form.aset);
            formData.append('foto', this.fotoFile);

            try {
                const response = await API.registerPeserta(formData);
                console.log(response.data);
                // Tampilkan pesan sukses, reset form, dll.
            } catch (error) {
                console.error(error.response?.data || error.message);
                // Tampilkan pesan error
            }
        }
    },
    resetForm() {
        this.form = {
            nama_lengkap: '',
            email: '',
            password: '',
            jenis_peserta: '',
            cabang_olahraga: '',
            aset: ''
        };
        this.fotoFile = null;
        // Reset file input element manually
        this.$el.querySelector('input[type="file"]').value = null;
    }
}
</script>

<style scoped></style>