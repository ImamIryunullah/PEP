<template>
    <div class="min-h-screen">
        <NavbarDashboard />

        <!-- Knockout Stage -->
        <section class="relative py-8 md:py-16 px-4 bg-[#f5f5ed] overflow-hidden">
            <div class="absolute inset-0">
                <img src="/jadwaldanhasil/bg.png" alt="Background" class="w-full h-full object-cover opacity-5" />
            </div>
            <div class="max-w-7xl mx-auto z-10">
                <h2 class="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">Knockout Stage</h2>
                <h3 class="text-lg md:text-xl font-semibold text-center mb-6 md:mb-10 text-gray-600">
                    {{ getCurrentCategory().name }} ({{ getCurrentCategory().fullName }})
                </h3>
                
                <!-- Mobile View - Stacked -->
                <div class="md:hidden space-y-8">
                    <!-- Round of 16 Mobile -->
                    <div>
                        <h4 class="font-bold text-gray-600 mb-4 text-center">Round of 16</h4>
                        <div class="grid grid-cols-2 gap-3">
                            <div v-for="match in getCurrentMatches().round16" :key="match.id" class="bg-white p-3 rounded shadow">
                                <div class="text-xs text-gray-500 mb-1">{{ match.date }}</div>
                                <div class="font-semibold text-xs mb-1">{{ match.player1 }}</div>
                                <div class="font-semibold text-xs">{{ match.player2 }}</div>
                                <div class="mt-2 font-bold text-sm">
                                    {{ match.score1 }} - {{ match.score2 }}
                                    <span v-if="match.sets" class="text-xs text-gray-500 block">({{ match.sets }})</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Quarter Finals Mobile -->
                    <div>
                        <h4 class="font-bold text-gray-600 mb-4 text-center">Quarter Finals</h4>
                        <div class="grid grid-cols-2 gap-3">
                            <div v-for="match in getCurrentMatches().quarterFinals" :key="match.id" class="bg-white p-3 rounded shadow">
                                <div class="text-xs text-gray-500 mb-1">{{ match.date }}</div>
                                <div class="font-semibold text-xs mb-1">{{ match.player1 }}</div>
                                <div class="font-semibold text-xs">{{ match.player2 }}</div>
                                <div class="mt-2 font-bold text-sm">
                                    {{ match.score1 }} - {{ match.score2 }}
                                    <span v-if="match.sets" class="text-xs text-gray-500 block">({{ match.sets }})</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Semi Finals Mobile -->
                    <div>
                        <h4 class="font-bold text-gray-600 mb-4 text-center">Semi Finals</h4>
                        <div class="space-y-3">
                            <div v-for="match in getCurrentMatches().semiFinals" :key="match.id" class="bg-white p-4 rounded shadow">
                                <div class="text-xs text-gray-500 mb-1">{{ match.date }}</div>
                                <div class="font-semibold text-sm mb-1">{{ match.player1 }}</div>
                                <div class="font-semibold text-sm">{{ match.player2 }}</div>
                                <div class="mt-2 font-bold text-lg">
                                    {{ match.score1 }} - {{ match.score2 }}
                                    <span v-if="match.sets" class="text-xs text-gray-500 block">({{ match.sets }})</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Finals Mobile -->
                    <div>
                        <h4 class="font-bold text-gray-600 mb-4 text-center">Finals</h4>
                        <div class="space-y-4">
                            <div class="bg-blue-600 text-white p-4 rounded shadow font-bold">
                                <div class="text-sm mb-2 text-center">Final</div>
                                <div class="text-xs mb-2">{{ getCurrentMatches().final.date }}</div>
                                <div class="text-sm mb-1">{{ getCurrentMatches().final.player1 }}</div>
                                <div class="text-sm mb-2">{{ getCurrentMatches().final.player2 }}</div>
                                <div class="text-lg text-center">
                                    {{ getCurrentMatches().final.score1 }} - {{ getCurrentMatches().final.score2 }}
                                    <span v-if="getCurrentMatches().final.sets" class="text-xs block">({{ getCurrentMatches().final.sets }})</span>
                                </div>
                            </div>
                            <div class="bg-green-500 text-white p-4 rounded shadow font-bold">
                                <div class="text-sm mb-2 text-center">3rd Place</div>
                                <div class="text-xs mb-2">{{ getCurrentMatches().thirdPlace.date }}</div>
                                <div class="text-sm mb-1">{{ getCurrentMatches().thirdPlace.player1 }}</div>
                                <div class="text-sm mb-2">{{ getCurrentMatches().thirdPlace.player2 }}</div>
                                <div class="text-lg text-center">
                                    {{ getCurrentMatches().thirdPlace.score1 }} - {{ getCurrentMatches().thirdPlace.score2 }}
                                    <span v-if="getCurrentMatches().thirdPlace.sets" class="text-xs block">({{ getCurrentMatches().thirdPlace.sets }})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Desktop View - Tournament Bracket -->
                <div class="hidden md:block overflow-x-auto">
                    <div class="flex justify-center gap-6 lg:gap-12 text-sm text-center text-gray-800 min-w-[800px] lg:min-w-[1200px]">
                        <!-- Round of 16 -->
                        <div class="space-y-4 lg:space-y-6">
                            <h4 class="font-bold text-gray-600 mb-4">Round of 16</h4>
                            <div v-for="match in getCurrentMatches().round16" :key="match.id" class="bg-white p-3 rounded shadow w-32 lg:w-36">
                                <div class="text-xs text-gray-500 mb-1">{{ match.date }}</div>
                                <div class="font-semibold text-xs mb-1">{{ match.player1 }}</div>
                                <div class="font-semibold text-xs">{{ match.player2 }}</div>
                                <div class="mt-2 font-bold">
                                    {{ match.score1 }} - {{ match.score2 }}
                                    <span v-if="match.sets" class="text-xs text-gray-500 block">({{ match.sets }})</span>
                                </div>
                            </div>
                        </div>

                        <!-- Quarter Finals -->
                        <div class="space-y-8 lg:space-y-12 pt-8 lg:pt-16">
                            <h4 class="font-bold text-gray-600 mb-4 -mt-8 lg:-mt-12">Quarter Finals</h4>
                            <div v-for="match in getCurrentMatches().quarterFinals" :key="match.id" class="bg-white p-3 rounded shadow w-32 lg:w-36">
                                <div class="text-xs text-gray-500 mb-1">{{ match.date }}</div>
                                <div class="font-semibold text-xs mb-1">{{ match.player1 }}</div>
                                <div class="font-semibold text-xs">{{ match.player2 }}</div>
                                <div class="mt-2 font-bold">
                                    {{ match.score1 }} - {{ match.score2 }}
                                    <span v-if="match.sets" class="text-xs text-gray-500 block">({{ match.sets }})</span>
                                </div>
                            </div>
                        </div>

                        <!-- Semi Finals -->
                        <div class="space-y-16 lg:space-y-24 pt-16 lg:pt-32">
                            <h4 class="font-bold text-gray-600 mb-4 -mt-16 lg:-mt-28">Semi Finals</h4>
                            <div v-for="match in getCurrentMatches().semiFinals" :key="match.id" class="bg-white p-3 rounded shadow w-32 lg:w-36">
                                <div class="text-xs text-gray-500 mb-1">{{ match.date }}</div>
                                <div class="font-semibold text-xs mb-1">{{ match.player1 }}</div>
                                <div class="font-semibold text-xs">{{ match.player2 }}</div>
                                <div class="mt-2 font-bold">
                                    {{ match.score1 }} - {{ match.score2 }}
                                    <span v-if="match.sets" class="text-xs text-gray-500 block">({{ match.sets }})</span>
                                </div>
                            </div>
                        </div>

                        <!-- Finals -->
                        <div class="space-y-8 lg:space-y-12 pt-8 lg:pt-16">
                            <h4 class="font-bold text-gray-600 mb-4 -mt-8 lg:-mt-12">Finals</h4>
                            <div class="bg-blue-600 text-white p-4 rounded shadow w-36 lg:w-40 font-bold">
                                <div class="text-xs mb-1">Final</div>
                                <div class="text-xs mb-1">{{ getCurrentMatches().final.date }}</div>
                                <div class="text-xs mb-1">{{ getCurrentMatches().final.player1 }}</div>
                                <div class="text-xs mb-2">{{ getCurrentMatches().final.player2 }}</div>
                                <div class="text-sm">
                                    {{ getCurrentMatches().final.score1 }} - {{ getCurrentMatches().final.score2 }}
                                    <span v-if="getCurrentMatches().final.sets" class="text-xs block">({{ getCurrentMatches().final.sets }})</span>
                                </div>
                            </div>
                            <div class="bg-green-500 text-white p-4 rounded shadow w-36 lg:w-40 font-bold">
                                <div class="text-xs mb-1">3rd Place</div>
                                <div class="text-xs mb-1">{{ getCurrentMatches().thirdPlace.date }}</div>
                                <div class="text-xs mb-1">{{ getCurrentMatches().thirdPlace.player1 }}</div>
                                <div class="text-xs mb-2">{{ getCurrentMatches().thirdPlace.player2 }}</div>
                                <div class="text-sm">
                                    {{ getCurrentMatches().thirdPlace.score1 }} - {{ getCurrentMatches().thirdPlace.score2 }}
                                    <span v-if="getCurrentMatches().thirdPlace.sets" class="text-xs block">({{ getCurrentMatches().thirdPlace.sets }})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Category Selection Tabs -->
        <section class="bg-white py-4 px-4 border-b">
            <div class="max-w-7xl mx-auto">
                <!-- Mobile: Dropdown -->
                <div class="md:hidden">
                    <select 
                        v-model="activeCategory"
                        class="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white"
                    >
                        <option v-for="category in categories" :key="category.id" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
                
                <!-- Desktop: Tabs -->
                <div class="hidden md:flex justify-center space-x-2 lg:space-x-4">
                    <button 
                        v-for="category in categories" 
                        :key="category.id"
                        @click="activeCategory = category.id"
                        :class="[
                            'px-4 lg:px-6 py-2 rounded-lg font-semibold transition-colors text-sm lg:text-base',
                            activeCategory === category.id 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        ]"
                    >
                        {{ category.name }}
                    </button>
                </div>
            </div>
        </section>

        <!-- Results Section -->
        <section class="bg-[#F7f7f7] py-8 md:py-12 px-4 relative">
            <!-- Background Text - Hidden on mobile -->
            <h1 class="hidden lg:block absolute top-[15%] left-1/2 transform -translate-x-1/2 text-gray-600 opacity-5 text-6xl xl:text-8xl font-bold whitespace-nowrap">
                TENIS MEJA
            </h1>
            <div class="max-w-6xl mx-auto">
                <h2 class="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-gray-800">Tournament Results</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                    <div v-for="category in categories" :key="category.id" class="bg-white border rounded-lg shadow p-4 md:p-6">
                        <h3 class="text-base md:text-lg font-bold text-gray-800 mb-4">{{ category.name }} - {{ category.fullName }}</h3>
                        
                        <!-- Final Result -->
                        <div class="border-b pb-3 mb-3">
                            <div class="text-xs md:text-sm text-gray-500 mb-1">Final · {{ matchData[category.id].final.date }}</div>
                            <div class="font-bold text-gray-800 flex justify-between items-center mb-1">
                                <span class="text-sm md:text-base">{{ matchData[category.id].final.player1 }}</span>
                                <span class="text-lg md:text-xl">{{ matchData[category.id].final.score1 }}</span>
                            </div>
                            <div class="font-bold text-gray-800 flex justify-between items-center">
                                <span class="text-sm md:text-base">{{ matchData[category.id].final.player2 }}</span>
                                <span class="text-lg md:text-xl">{{ matchData[category.id].final.score2 }}</span>
                            </div>
                            <div class="text-xs text-gray-500 mt-1 text-center">
                                Sets: {{ matchData[category.id].final.sets }}
                            </div>
                        </div>

                        <!-- Third Place -->
                        <div>
                            <div class="text-xs md:text-sm text-gray-500 mb-1">3rd Place · {{ matchData[category.id].thirdPlace.date }}</div>
                            <div class="font-bold text-gray-800 flex justify-between items-center mb-1">
                                <span class="text-sm md:text-base">{{ matchData[category.id].thirdPlace.player1 }}</span>
                                <span class="text-base md:text-lg">{{ matchData[category.id].thirdPlace.score1 }}</span>
                            </div>
                            <div class="font-bold text-gray-800 flex justify-between items-center">
                                <span class="text-sm md:text-base">{{ matchData[category.id].thirdPlace.player2 }}</span>
                                <span class="text-base md:text-lg">{{ matchData[category.id].thirdPlace.score2 }}</span>
                            </div>
                            <div class="text-xs text-gray-500 mt-1 text-center">
                                Sets: {{ matchData[category.id].thirdPlace.sets }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <FooterDashboard />
    </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue';
import FooterDashboard from '@/components/FooterDashboard.vue';

export default {
    components: {
        NavbarDashboard,
        FooterDashboard
    },
    data() {
        return {
            activeCategory: 'ms',
            categories: [
                { id: 'ms', name: 'MS', fullName: 'Men\'s Singles' },
                { id: 'ws', name: 'WS', fullName: 'Women\'s Singles' },
                { id: 'md', name: 'MD', fullName: 'Men\'s Doubles' },
                { id: 'wd', name: 'WD', fullName: 'Women\'s Doubles' },
                { id: 'xd', name: 'XD', fullName: 'Mixed Doubles' }
            ],
            matchData: {
                ms: {
                    round16: [
                        { id: 1, player1: 'A. Rahman', player2: 'B. Santoso', score1: 4, score2: 1, sets: '11-8, 9-11, 11-6, 11-4, 11-9', date: '15 Des' },
                        { id: 2, player1: 'C. Wijaya', player2: 'D. Pratama', score1: 4, score2: 2, sets: '11-9, 8-11, 11-7, 9-11, 11-6, 11-8', date: '15 Des' },
                        { id: 3, player1: 'E. Kurniawan', player2: 'F. Hidayat', score1: 4, score2: 0, sets: '11-5, 11-7, 11-9, 11-6', date: '15 Des' },
                        { id: 4, player1: 'G. Susanto', player2: 'H. Gunawan', score1: 4, score2: 3, sets: '11-9, 9-11, 11-8, 8-11, 11-6, 9-11, 11-7', date: '15 Des' },
                        { id: 5, player1: 'I. Setiawan', player2: 'J. Permana', score1: 4, score2: 1, sets: '11-6, 11-9, 9-11, 11-7, 11-5', date: '15 Des' },
                        { id: 6, player1: 'K. Utomo', player2: 'L. Nugroho', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-4, 9-11, 11-9', date: '15 Des' },
                        { id: 7, player1: 'M. Hartono', player2: 'N. Suryadi', score1: 4, score2: 0, sets: '11-4, 11-6, 11-8, 11-5', date: '15 Des' },
                        { id: 8, player1: 'O. Kusuma', player2: 'P. Wibowo', score1: 4, score2: 1, sets: '11-7, 9-11, 11-6, 11-8, 11-9', date: '15 Des' }
                    ],
                    quarterFinals: [
                        { id: 9, player1: 'A. Rahman', player2: 'C. Wijaya', score1: 4, score2: 2, sets: '11-9, 9-11, 11-7, 11-6, 8-11, 11-8', date: '16 Des' },
                        { id: 10, player1: 'E. Kurniawan', player2: 'G. Susanto', score1: 4, score2: 1, sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '16 Des' },
                        { id: 11, player1: 'I. Setiawan', player2: 'K. Utomo', score1: 4, score2: 3, sets: '11-9, 9-11, 11-8, 8-11, 11-6, 9-11, 11-7', date: '16 Des' },
                        { id: 12, player1: 'M. Hartono', player2: 'O. Kusuma', score1: 4, score2: 0, sets: '11-5, 11-7, 11-6, 11-8', date: '16 Des' }
                    ],
                    semiFinals: [
                        { id: 13, player1: 'A. Rahman', player2: 'E. Kurniawan', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-9, 8-11, 11-7', date: '17 Des' },
                        { id: 14, player1: 'I. Setiawan', player2: 'M. Hartono', score1: 4, score2: 1, sets: '11-7, 11-9, 9-11, 11-6, 11-8', date: '17 Des' }
                    ],
                    final: {
                        player1: 'A. Rahman', player2: 'I. Setiawan', score1: 4, score2: 2, 
                        sets: '11-9, 9-11, 11-7, 11-6, 8-11, 11-8', date: '18 Des'
                    },
                    thirdPlace: {
                        player1: 'E. Kurniawan', player2: 'M. Hartono', score1: 4, score2: 1, 
                        sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '17 Des'
                    }
                },
                ws: {
                    round16: [
                        { id: 1, player1: 'S. Dewi', player2: 'T. Sari', score1: 4, score2: 0, sets: '11-6, 11-8, 11-5, 11-7', date: '15 Des' },
                        { id: 2, player1: 'U. Putri', player2: 'V. Lestari', score1: 4, score2: 3, sets: '11-9, 8-11, 11-7, 9-11, 11-6, 8-11, 11-9', date: '15 Des' },
                        { id: 3, player1: 'W. Indah', player2: 'X. Maya', score1: 4, score2: 1, sets: '11-8, 9-11, 11-6, 11-4, 11-9', date: '15 Des' },
                        { id: 4, player1: 'Y. Rina', player2: 'Z. Fitri', score1: 4, score2: 2, sets: '11-7, 11-9, 9-11, 11-6, 8-11, 11-8', date: '15 Des' },
                        { id: 5, player1: 'A. Sinta', player2: 'B. Dian', score1: 4, score2: 0, sets: '11-5, 11-7, 11-6, 11-8', date: '15 Des' },
                        { id: 6, player1: 'C. Ratna', player2: 'D. Wati', score1: 4, score2: 1, sets: '11-6, 11-9, 9-11, 11-7, 11-5', date: '15 Des' },
                        { id: 7, player1: 'E. Yuni', player2: 'F. Tika', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-4, 9-11, 11-9', date: '15 Des' },
                        { id: 8, player1: 'G. Nina', player2: 'H. Lisa', score1: 4, score2: 0, sets: '11-4, 11-6, 11-8, 11-5', date: '15 Des' }
                    ],
                    quarterFinals: [
                        { id: 9, player1: 'S. Dewi', player2: 'U. Putri', score1: 4, score2: 1, sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '16 Des' },
                        { id: 10, player1: 'W. Indah', player2: 'Y. Rina', score1: 4, score2: 2, sets: '11-9, 9-11, 11-7, 11-6, 8-11, 11-8', date: '16 Des' },
                        { id: 11, player1: 'A. Sinta', player2: 'C. Ratna', score1: 4, score2: 0, sets: '11-5, 11-7, 11-6, 11-8', date: '16 Des' },
                        { id: 12, player1: 'E. Yuni', player2: 'G. Nina', score1: 4, score2: 3, sets: '11-9, 9-11, 11-8, 8-11, 11-6, 9-11, 11-7', date: '16 Des' }
                    ],
                    semiFinals: [
                        { id: 13, player1: 'S. Dewi', player2: 'W. Indah', score1: 4, score2: 1, sets: '11-7, 11-9, 9-11, 11-6, 11-8', date: '17 Des' },
                        { id: 14, player1: 'A. Sinta', player2: 'E. Yuni', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-9, 8-11, 11-7', date: '17 Des' }
                    ],
                    final: {
                        player1: 'S. Dewi', player2: 'A. Sinta', score1: 4, score2: 1, 
                        sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '18 Des'
                    },
                    thirdPlace: {
                        player1: 'W. Indah', player2: 'E. Yuni', score1: 4, score2: 0, 
                        sets: '11-5, 11-7, 11-6, 11-8', date: '17 Des'
                    }
                },
                md: {
                    round16: [
                        { id: 1, player1: 'Rahman/Santoso', player2: 'Wijaya/Pratama', score1: 4, score2: 1, sets: '11-8, 9-11, 11-6, 11-4, 11-9', date: '15 Des' },
                        { id: 2, player1: 'Kurniawan/Hidayat', player2: 'Susanto/Gunawan', score1: 4, score2: 2, sets: '11-9, 8-11, 11-7, 9-11, 11-6, 11-8', date: '15 Des' },
                        { id: 3, player1: 'Setiawan/Permana', player2: 'Utomo/Nugroho', score1: 4, score2: 0, sets: '11-5, 11-7, 11-9, 11-6', date: '15 Des' },
                        { id: 4, player1: 'Hartono/Suryadi', player2: 'Kusuma/Wibowo', score1: 4, score2: 3, sets: '11-9, 9-11, 11-8, 8-11, 11-6, 9-11, 11-7', date: '15 Des' },
                        { id: 5, player1: 'Indra/Bayu', player2: 'Fajar/Eka', score1: 4, score2: 1, sets: '11-6, 11-9, 9-11, 11-7, 11-5', date: '15 Des' },
                        { id: 6, player1: 'Galih/Hadi', player2: 'Irwan/Joko', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-4, 9-11, 11-9', date: '15 Des' },
                        { id: 7, player1: 'Kevin/Luki', player2: 'Miko/Nando', score1: 4, score2: 0, sets: '11-4, 11-6, 11-8, 11-5', date: '15 Des' },
                        { id: 8, player1: 'Oki/Putra', player2: 'Qori/Reza', score1: 4, score2: 1, sets: '11-7, 9-11, 11-6, 11-8, 11-9', date: '15 Des' }
                    ],
                    quarterFinals: [
                        { id: 9, player1: 'Rahman/Santoso', player2: 'Kurniawan/Hidayat', score1: 4, score2: 2, sets: '11-9, 9-11, 11-7, 11-6, 8-11, 11-8', date: '16 Des' },
                        { id: 10, player1: 'Setiawan/Permana', player2: 'Hartono/Suryadi', score1: 4, score2: 1, sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '16 Des' },
                        { id: 11, player1: 'Indra/Bayu', player2: 'Galih/Hadi', score1: 4, score2: 3, sets: '11-9, 9-11, 11-8, 8-11, 11-6, 9-11, 11-7', date: '16 Des' },
                        { id: 12, player1: 'Kevin/Luki', player2: 'Oki/Putra', score1: 4, score2: 0, sets: '11-5, 11-7, 11-6, 11-8', date: '16 Des' }
                    ],
                    semiFinals: [
                        { id: 13, player1: 'Rahman/Santoso', player2: 'Setiawan/Permana', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-9, 8-11, 11-7', date: '17 Des' },
                        { id: 14, player1: 'Indra/Bayu', player2: 'Kevin/Luki', score1: 4, score2: 1, sets: '11-7, 11-9, 9-11, 11-6, 11-8', date: '17 Des' }
                    ],
                    final: {
                        player1: 'Rahman/Santoso', player2: 'Indra/Bayu', score1: 4, score2: 2, 
                        sets: '11-9, 9-11, 11-7, 11-6, 8-11, 11-8', date: '18 Des'
                    },
                    thirdPlace: {
                        player1: 'Setiawan/Permana', player2: 'Kevin/Luki', score1: 4, score2: 1, 
                        sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '17 Des'
                    }
                },
                wd: {
                    round16: [
                        { id: 1, player1: 'Dewi/Sari', player2: 'Putri/Lestari', score1: 4, score2: 0, sets: '11-6, 11-8, 11-5, 11-7', date: '15 Des' },
                        { id: 2, player1: 'Indah/Maya', player2: 'Rina/Fitri', score1: 4, score2: 3, sets: '11-9, 8-11, 11-7, 9-11, 11-6, 8-11, 11-9', date: '15 Des' },
                        { id: 3, player1: 'Sinta/Dian', player2: 'Ratna/Wati', score1: 4, score2: 1, sets: '11-8, 9-11, 11-6, 11-4, 11-9', date: '15 Des' },
                        { id: 4, player1: 'Yuni/Tika', player2: 'Nina/Lisa', score1: 4, score2: 2, sets: '11-7, 11-9, 9-11, 11-6, 8-11, 11-8', date: '15 Des' },
                        { id: 5, player1: 'Ayu/Bella', player2: 'Citra/Desi', score1: 4, score2: 0, sets: '11-5, 11-7, 11-6, 11-8', date: '15 Des' },
                        { id: 6, player1: 'Eka/Fira', player2: 'Gita/Hani', score1: 4, score2: 1, sets: '11-6, 11-9, 9-11, 11-7, 11-5', date: '15 Des' },
                        { id: 7, player1: 'Intan/Jeni', player2: 'Kiki/Lina', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-4, 9-11, 11-9', date: '15 Des' },
                        { id: 8, player1: 'Mega/Nita', player2: 'Olla/Pipi', score1: 4, score2: 0, sets: '11-4, 11-6, 11-8, 11-5', date: '15 Des' }
                    ],
                    quarterFinals: [
                        { id: 9, player1: 'Dewi/Sari', player2: 'Indah/Maya', score1: 4, score2: 1, sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '16 Des' },
                        { id: 10, player1: 'Sinta/Dian', player2: 'Yuni/Tika', score1: 4, score2: 2, sets: '11-9, 9-11, 11-7, 11-6, 8-11, 11-8', date: '16 Des' },
                        { id: 11, player1: 'Ayu/Bella', player2: 'Eka/Fira', score1: 4, score2: 0, sets: '11-5, 11-7, 11-6, 11-8', date: '16 Des' },
                        { id: 12, player1: 'Intan/Jeni', player2: 'Mega/Nita', score1: 4, score2: 3, sets: '11-9, 9-11, 11-8, 8-11, 11-6, 9-11, 11-7', date: '16 Des' }
                    ],
                    semiFinals: [
                        { id: 13, player1: 'Dewi/Sari', player2: 'Sinta/Dian', score1: 4, score2: 1, sets: '11-7, 11-9, 9-11, 11-6, 11-8', date: '17 Des' },
                        { id: 14, player1: 'Ayu/Bella', player2: 'Intan/Jeni', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-9, 8-11, 11-7', date: '17 Des' }
                    ],
                    final: {
                        player1: 'Dewi/Sari', player2: 'Ayu/Bella', score1: 4, score2: 1, 
                        sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '18 Des'
                    },
                    thirdPlace: {
                        player1: 'Sinta/Dian', player2: 'Intan/Jeni', score1: 4, score2: 0, 
                        sets: '11-5, 11-7, 11-6, 11-8', date: '17 Des'
                    }
                },
                xd: {
                    round16: [
                        { id: 1, player1: 'Rahman/Dewi', player2: 'Santoso/Sari', score1: 4, score2: 1, sets: '11-8, 9-11, 11-6, 11-4, 11-9', date: '15 Des' },
                        { id: 2, player1: 'Wijaya/Putri', player2: 'Pratama/Lestari', score1: 4, score2: 2, sets: '11-9, 8-11, 11-7, 9-11, 11-6, 11-8', date: '15 Des' },
                        { id: 3, player1: 'Kurniawan/Indah', player2: 'Hidayat/Maya', score1: 4, score2: 0, sets: '11-5, 11-7, 11-9, 11-6', date: '15 Des' },
                        { id: 4, player1: 'Susanto/Rina', player2: 'Gunawan/Fitri', score1: 4, score2: 3, sets: '11-9, 9-11, 11-8, 8-11, 11-6, 9-11, 11-7', date: '15 Des' },
                        { id: 5, player1: 'Setiawan/Sinta', player2: 'Permana/Dian', score1: 4, score2: 1, sets: '11-6, 11-9, 9-11, 11-7, 11-5', date: '15 Des' },
                        { id: 6, player1: 'Utomo/Ratna', player2: 'Nugroho/Wati', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-4, 9-11, 11-9', date: '15 Des' },
                        { id: 7, player1: 'Hartono/Yuni', player2: 'Suryadi/Tika', score1: 4, score2: 0, sets: '11-4, 11-6, 11-8, 11-5', date: '15 Des' },
                        { id: 8, player1: 'Kusuma/Nina', player2: 'Wibowo/Lisa', score1: 4, score2: 1, sets: '11-7, 9-11, 11-6, 11-8, 11-9', date: '15 Des' }
                    ],
                    quarterFinals: [
                        { id: 9, player1: 'Rahman/Dewi', player2: 'Wijaya/Putri', score1: 4, score2: 2, sets: '11-9, 9-11, 11-7, 11-6, 8-11, 11-8', date: '16 Des' },
                        { id: 10, player1: 'Kurniawan/Indah', player2: 'Susanto/Rina', score1: 4, score2: 1, sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '16 Des' },
                        { id: 11, player1: 'Setiawan/Sinta', player2: 'Utomo/Ratna', score1: 4, score2: 3, sets: '11-9, 9-11, 11-8, 8-11, 11-6, 9-11, 11-7', date: '16 Des' },
                        { id: 12, player1: 'Hartono/Yuni', player2: 'Kusuma/Nina', score1: 4, score2: 0, sets: '11-5, 11-7, 11-6, 11-8', date: '16 Des' }
                    ],
                    semiFinals: [
                        { id: 13, player1: 'Rahman/Dewi', player2: 'Kurniawan/Indah', score1: 4, score2: 2, sets: '11-8, 9-11, 11-6, 11-9, 8-11, 11-7', date: '17 Des' },
                        { id: 14, player1: 'Setiawan/Sinta', player2: 'Hartono/Yuni', score1: 4, score2: 1, sets: '11-7, 11-9, 9-11, 11-6, 11-8', date: '17 Des' }
                    ],
                    final: {
                        player1: 'Rahman/Dewi', player2: 'Setiawan/Sinta', score1: 4, score2: 2, 
                        sets: '11-9, 9-11, 11-7, 11-6, 8-11, 11-8', date: '18 Des'
                    },
                    thirdPlace: {
                        player1: 'Kurniawan/Indah', player2: 'Hartono/Yuni', score1: 4, score2: 1, 
                        sets: '11-8, 11-6, 9-11, 11-7, 11-9', date: '17 Des'
                    }
                }
            }
        }
    },
    methods: {
        getCurrentCategory() {
            return this.categories.find(cat => cat.id === this.activeCategory);
        },
        getCurrentMatches() {
            return this.matchData[this.activeCategory];
        }
    }
}

</script>