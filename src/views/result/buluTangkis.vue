<template>
    <div class="min-h-screen">
        <NavbarDashboard />
        
        <!-- Tournament Bracket Section -->
        <section class="relative py-8 md:py-16 px-4 bg-[#f5f5ed] overflow-hidden">
            <div class="absolute inset-0">
                <img src="/jadwaldanhasil/bg.webp" alt="Background" class="w-full h-full object-cover opacity-5" />
            </div>
            <div class="max-w-full mx-auto relative z-10">
                <h2 class="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-gray-800">
                    Knockout Stage - Men's Singles Championship
                </h2>
                
                <!-- Desktop Bracket View -->
                <div class="hidden lg:block overflow-x-auto">
                    <div class="flex justify-center gap-6 xl:gap-12 text-sm text-center text-gray-800 min-w-[1200px] mx-auto">
                        <!-- Round of 16 -->
                        <div class="flex flex-col justify-center space-y-4">
                            <h4 class="font-semibold text-gray-600 mb-4">Round of 16</h4>
                            <div class="space-y-6">
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-blue-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">Match 1</div>
                                    <div class="font-medium">Player A</div>
                                    <div class="text-xs text-green-600 font-bold">21-15, 21-18</div>
                                    <div class="text-xs text-gray-500">vs Player B</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-blue-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">Match 2</div>
                                    <div class="font-medium">Player C</div>
                                    <div class="text-xs text-green-600 font-bold">21-12, 21-16</div>
                                    <div class="text-xs text-gray-500">vs Player D</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-blue-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">Match 3</div>
                                    <div class="font-medium">Player E</div>
                                    <div class="text-xs text-green-600 font-bold">18-21, 21-19, 21-17</div>
                                    <div class="text-xs text-gray-500">vs Player F</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-blue-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">Match 4</div>
                                    <div class="font-medium">Player G</div>
                                    <div class="text-xs text-green-600 font-bold">21-8, 21-14</div>
                                    <div class="text-xs text-gray-500">vs Player H</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Quarterfinals -->
                        <div class="flex flex-col justify-center space-y-4">
                            <h4 class="font-semibold text-gray-600 mb-4">Quarterfinals</h4>
                            <div class="space-y-16">
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-orange-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">QF1</div>
                                    <div class="font-medium">Player A</div>
                                    <div class="text-xs text-green-600 font-bold">21-19, 15-21, 21-16</div>
                                    <div class="text-xs text-gray-500">vs Player C</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-orange-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">QF2</div>
                                    <div class="font-medium">Player E</div>
                                    <div class="text-xs text-green-600 font-bold">21-14, 21-18</div>
                                    <div class="text-xs text-gray-500">vs Player G</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Semifinals -->
                        <div class="flex flex-col justify-center space-y-4">
                            <h4 class="font-semibold text-gray-600 mb-4">Semifinals</h4>
                            <div class="space-y-32">
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-red-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">SF1</div>
                                    <div class="font-medium">Player A</div>
                                    <div class="text-xs text-green-600 font-bold">21-17, 19-21, 21-15</div>
                                    <div class="text-xs text-gray-500">vs Player E</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Finals & Bronze Medal -->
                        <div class="flex flex-col justify-center space-y-4">
                            <h4 class="font-semibold text-gray-600 mb-4">Finals</h4>
                            <div class="space-y-8">
                                <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-4 rounded-lg shadow-lg w-40 border-2 border-yellow-600">
                                    <div class="text-xs font-bold mb-1">🏆 FINAL</div>
                                    <div class="font-bold">Player A</div>
                                    <div class="text-xs font-bold">21-18, 21-16</div>
                                    <div class="text-xs opacity-90">vs Player I</div>
                                </div>
                                <div class="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 rounded-lg shadow-lg w-40 border-2 border-orange-600">
                                    <div class="text-xs font-bold mb-1">🥉 BRONZE</div>
                                    <div class="font-bold">Player E</div>
                                    <div class="text-xs font-bold">21-14, 21-19</div>
                                    <div class="text-xs opacity-90">vs Player J</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Semifinals (Right) -->
                        <div class="flex flex-col justify-center space-y-4">
                            <h4 class="font-semibold text-gray-600 mb-4">Semifinals</h4>
                            <div class="space-y-32">
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-red-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">SF2</div>
                                    <div class="font-medium">Player I</div>
                                    <div class="text-xs text-green-600 font-bold">21-13, 21-17</div>
                                    <div class="text-xs text-gray-500">vs Player J</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Quarterfinals (Right) -->
                        <div class="flex flex-col justify-center space-y-4">
                            <h4 class="font-semibold text-gray-600 mb-4">Quarterfinals</h4>
                            <div class="space-y-16">
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-orange-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">QF3</div>
                                    <div class="font-medium">Player I</div>
                                    <div class="text-xs text-green-600 font-bold">16-21, 21-18, 21-12</div>
                                    <div class="text-xs text-gray-500">vs Player K</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-orange-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">QF4</div>
                                    <div class="font-medium">Player J</div>
                                    <div class="text-xs text-green-600 font-bold">21-9, 21-15</div>
                                    <div class="text-xs text-gray-500">vs Player L</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Round of 16 (Right) -->
                        <div class="flex flex-col justify-center space-y-4">
                            <h4 class="font-semibold text-gray-600 mb-4">Round of 16</h4>
                            <div class="space-y-6">
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-blue-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">Match 5</div>
                                    <div class="font-medium">Player I</div>
                                    <div class="text-xs text-green-600 font-bold">21-11, 21-16</div>
                                    <div class="text-xs text-gray-500">vs Player M</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-blue-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">Match 6</div>
                                    <div class="font-medium">Player K</div>
                                    <div class="text-xs text-green-600 font-bold">19-21, 21-17, 21-19</div>
                                    <div class="text-xs text-gray-500">vs Player N</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-blue-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">Match 7</div>
                                    <div class="font-medium">Player J</div>
                                    <div class="text-xs text-green-600 font-bold">21-7, 21-13</div>
                                    <div class="text-xs text-gray-500">vs Player O</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md w-36 border-l-4 border-blue-500">
                                    <div class="text-xs font-medium text-gray-600 mb-1">Match 8</div>
                                    <div class="font-medium">Player L</div>
                                    <div class="text-xs text-green-600 font-bold">21-15, 18-21, 21-16</div>
                                    <div class="text-xs text-gray-500">vs Player P</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mobile Bracket View -->
                <div class="lg:hidden">
                    <div class="space-y-6">
                        <!-- Round Selection Buttons -->
                        <div class="flex flex-wrap justify-center gap-2 mb-6">
                            <button @click="selectedRound = 'round16'" 
                                    :class="selectedRound === 'round16' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'"
                                    class="px-4 py-2 rounded-lg border font-medium text-sm transition-colors">
                                Round of 16
                            </button>
                            <button @click="selectedRound = 'quarters'" 
                                    :class="selectedRound === 'quarters' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'"
                                    class="px-4 py-2 rounded-lg border font-medium text-sm transition-colors">
                                Quarterfinals
                            </button>
                            <button @click="selectedRound = 'semis'" 
                                    :class="selectedRound === 'semis' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'"
                                    class="px-4 py-2 rounded-lg border font-medium text-sm transition-colors">
                                Semifinals
                            </button>
                            <button @click="selectedRound = 'finals'" 
                                    :class="selectedRound === 'finals' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'"
                                    class="px-4 py-2 rounded-lg border font-medium text-sm transition-colors">
                                Finals
                            </button>
                        </div>

                        <div v-show="selectedRound === 'round16'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div v-for="(match, index) in round16Matches" :key="index" 
                                 class="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                                <div class="text-sm font-medium text-gray-600 mb-2">{{ match.title }}</div>
                                <div class="font-bold text-gray-800">{{ match.winner }}</div>
                                <div class="text-sm text-green-600 font-bold">{{ match.score }}</div>
                                <div class="text-sm text-gray-500">vs {{ match.loser }}</div>
                            </div>
                        </div>
                        <div v-show="selectedRound === 'quarters'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div v-for="(match, index) in quarterMatches" :key="index" 
                                 class="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
                                <div class="text-sm font-medium text-gray-600 mb-2">{{ match.title }}</div>
                                <div class="font-bold text-gray-800">{{ match.winner }}</div>
                                <div class="text-sm text-green-600 font-bold">{{ match.score }}</div>
                                <div class="text-sm text-gray-500">vs {{ match.loser }}</div>
                            </div>
                        </div>

                        <div v-show="selectedRound === 'semis'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div v-for="(match, index) in semiMatches" :key="index" 
                                 class="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
                                <div class="text-sm font-medium text-gray-600 mb-2">{{ match.title }}</div>
                                <div class="font-bold text-gray-800">{{ match.winner }}</div>
                                <div class="text-sm text-green-600 font-bold">{{ match.score }}</div>
                                <div class="text-sm text-gray-500">vs {{ match.loser }}</div>
                            </div>
                        </div>

                        <div v-show="selectedRound === 'finals'" class="space-y-4">
                            <div class="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-6 rounded-lg shadow-lg border-2 border-yellow-600">
                                <div class="text-sm font-bold mb-2">🏆 FINAL</div>
                                <div class="font-bold text-lg">Player A</div>
                                <div class="text-sm font-bold">21-18, 21-16</div>
                                <div class="text-sm opacity-90">vs Player I</div>
                            </div>
                            <div class="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-6 rounded-lg shadow-lg border-2 border-orange-600">
                                <div class="text-sm font-bold mb-2">🥉 BRONZE MEDAL MATCH</div>
                                <div class="font-bold text-lg">Player E</div>
                                <div class="text-sm font-bold">21-14, 21-19</div>
                                <div class="text-sm opacity-90">vs Player J</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-[#F7f7f7] py-8 md:py-12 px-4 relative">
            <h1 class="absolute top-[15%] md:top-[20%] left-1/2 transform -translate-x-1/2 text-gray-600 opacity-5 text-6xl md:text-9xl font-bold whitespace-nowrap">
                TOURNAMENT
            </h1>
            <h1 class="absolute top-[25%] md:top-[35%] left-1/2 transform -translate-x-1/2 text-gray-600 opacity-5 text-6xl md:text-9xl font-bold whitespace-nowrap">
                RESULTS
            </h1>
            <div class="max-w-7xl mx-auto relative z-10">
                <h2 class="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">Championship Results</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-12">

                    <div class="space-y-4 md:space-y-6">
                        <h3 class="text-lg md:text-xl font-bold text-gray-800 text-center mb-4">Men's Singles</h3>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Final · December 18, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800">PLAYER A 🏆</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800">PLAYER I</div>
                                <div class="text-xl md:text-2xl font-bold text-gray-400">0</div>
                            </div>
                            <div class="text-xs text-gray-500">(21-18, 21-16)</div>
                        </div>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Bronze Medal · December 17, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800">PLAYER E 🥉</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800">PLAYER J</div>
                                <div class="text-xl md:text-2xl font-bold text-gray-400">0</div>
                            </div>
                            <div class="text-xs text-gray-500">(21-14, 21-19)</div>
                        </div>
                    </div>
                    
                    <!-- Women's Singles -->
                    <div class="space-y-4 md:space-y-6">
                        <h3 class="text-lg md:text-xl font-bold text-gray-800 text-center mb-4">Women's Singles</h3>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Final · December 18, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800">CHEN Wei Ming 🏆</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800">SARI Indah</div>
                                <div class="text-xl md:text-2xl font-bold text-red-600">1</div>
                            </div>
                            <div class="text-xs text-gray-500">(21-17, 19-21, 21-15)</div>
                        </div>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Bronze Medal · December 17, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800">YAMAMOTO Yuki 🥉</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800">LEE So Young</div>
                                <div class="text-xl md:text-2xl font-bold text-gray-400">0</div>
                            </div>
                            <div class="text-xs text-gray-500">(21-12, 21-16)</div>
                        </div>
                    </div>
                    
                    <!-- Mixed Doubles -->
                    <div class="space-y-4 md:space-y-6">
                        <h3 class="text-lg md:text-xl font-bold text-gray-800 text-center mb-4">Mixed Doubles</h3>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Final · December 18, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800 text-sm">WANG/ZHANG 🏆</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800 text-sm">TANAKA/SATO</div>
                                <div class="text-xl md:text-2xl font-bold text-gray-400">0</div>
                            </div>
                            <div class="text-xs text-gray-500">(21-15, 21-18)</div>
                        </div>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Bronze Medal · December 17, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800 text-sm">GINTING/LESTARI 🥉</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800 text-sm">KIM/PARK</div>
                                <div class="text-xl md:text-2xl font-bold text-red-600">1</div>
                            </div>
                            <div class="text-xs text-gray-500">(21-19, 18-21, 21-17)</div>
                        </div>
                    </div>
                </div>
                
                <!-- Men's & Women's Doubles -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <!-- Men's Doubles -->
                    <div class="space-y-4 md:space-y-6">
                        <h3 class="text-lg md:text-xl font-bold text-gray-800 text-center mb-4">Men's Doubles</h3>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Final · December 18, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800 text-sm">AHSAN/SETIAWAN 🏆</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800 text-sm">LEE/WANG</div>
                                <div class="text-xl md:text-2xl font-bold text-red-600">1</div>
                            </div>
                            <div class="text-xs text-gray-500">(18-21, 21-16, 21-14)</div>
                        </div>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Bronze Medal · December 17, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800 text-sm">GIDEON/SUKAMULJO 🥉</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800 text-sm">CHEN/LIU</div>
                                <div class="text-xl md:text-2xl font-bold text-gray-400">0</div>
                            </div>
                            <div class="text-xs text-gray-500">(21-13, 21-17)</div>
                        </div>
                    </div>
                    
                    <!-- Women's Doubles -->
                    <div class="space-y-4 md:space-y-6">
                        <h3 class="text-lg md:text-xl font-bold text-gray-800 text-center mb-4">Women's Doubles</h3>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Final · December 18, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800 text-sm">POLII/RAHAYU 🏆</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800 text-small">MATSUMOTO/NAGAHARA</div>
                                <div class="text-xl md:text-2xl font-bold text-gray-400">0</div>
                            </div>
                            <div class="text-xs text-gray-500">(21-11, 21-16)</div>
                        </div>
                        <div class="bg-white border rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-shadow">
                            <div class="text-sm text-gray-500 mb-2">Bronze Medal · December 17, 2024</div>
                            <div class="flex justify-between items-center mb-1">
                                <div class="font-bold text-gray-800 text-sm">KIM/KONG 🥉</div>
                                <div class="text-xl md:text-2xl font-bold text-green-600">2</div>
                            </div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="font-bold text-gray-800 text-sm">CHEN/DU</div>
                                <div class="text-xl md:text-2xl font-bold text-red-600">1</div>
                            </div>
                            <div class="text-xs text-gray-500">(21-18, 17-21, 21-15)</div>
                        </div>
                    </div>
                </div>

                <!-- Medal Standings -->
                <div class="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
                    <h3 class="text-xl md:text-2xl font-bold text-center mb-6 text-gray-800">Final Medal Standings</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="text-center">
                            <div class="text-4xl md:text-6xl mb-2">🏆</div>
                            <h4 class="text-lg font-bold text-yellow-600 mb-2">Gold Medals</h4>
                            <div class="space-y-1 text-sm">
                                <div>Men's Singles: Player A</div>
                                <div>Women's Singles: Chen Wei Ming</div>
                                <div>Men's Doubles: Ahsan/Setiawan</div>
                                <div>Women's Doubles: Polii/Rahayu</div>
                                <div>Mixed Doubles: Wang/Zhang</div>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl md:text-6xl mb-2">🥈</div>
                            <h4 class="text-lg font-bold text-gray-500 mb-2">Silver Medals</h4>
                            <div class="space-y-1 text-sm">
                                <div>Men's Singles: Player I</div>
                                <div>Women's Singles: Sari Indah</div>
                                <div>Men's Doubles: Lee/Wang</div>
                                <div>Women's Doubles: Matsumoto/Nagahara</div>
                                <div>Mixed Doubles: Tanaka/Sato</div>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl md:text-6xl mb-2">🥉</div>
                            <h4 class="text-lg font-bold text-orange-600 mb-2">Bronze Medals</h4>
                            <div class="space-y-1 text-sm">
                                <div>Men's Singles: Player E</div>
                                <div>Women's Singles: Yamamoto Yuki</div>
                                <div>Men's Doubles: Gideon/Sukamuljo</div>
                                <div>Women's Doubles: Kim/Kong</div>
                                <div>Mixed Doubles: Ginting/Lestari</div>
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
            selectedRound: 'round16',
            round16Matches: [
                { title: 'Match 1', winner: 'Player A', loser: 'Player B', score: '21-15, 21-18' },
                { title: 'Match 2', winner: 'Player C', loser: 'Player D', score: '21-12, 21-16' },
                { title: 'Match 3', winner: 'Player E', loser: 'Player F', score: '18-21, 21-19, 21-17' },
                { title: 'Match 4', winner: 'Player G', loser: 'Player H', score: '21-8, 21-14' },
                { title: 'Match 5', winner: 'Player I', loser: 'Player M', score: '21-11, 21-16' },
                { title: 'Match 6', winner: 'Player K', loser: 'Player N', score: '19-21, 21-17, 21-19' },
                { title: 'Match 7', winner: 'Player J', loser: 'Player O', score: '21-7, 21-13' },
                { title: 'Match 8', winner: 'Player L', loser: 'Player P', score: '21-15, 18-21, 21-16' }
            ],
            quarterMatches: [
                { title: 'Quarterfinal 1', winner: 'Player A', loser: 'Player C', score: '21-19, 15-21, 21-16' },
                { title: 'Quarterfinal 2', winner: 'Player E', loser: 'Player G', score: '21-14, 21-18' },
                { title: 'Quarterfinal 3', winner: 'Player I', loser: 'Player K', score: '16-21, 21-18, 21-12' },
                { title: 'Quarterfinal 4', winner: 'Player J', loser: 'Player L', score: '21-9, 21-15' }
            ],
            semiMatches: [
                { title: 'Semifinal 1', winner: 'Player A', loser: 'Player E', score: '21-17, 19-21, 21-15' },
                { title: 'Semifinal 2', winner: 'Player I', loser: 'Player J', score: '21-13, 21-17' }
            ]
        }
    }
}
</script>

<style scoped>
.transition-colors {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.hover\:shadow-xl:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

@media (max-width: 640px) {
    .text-small {
        font-size: 0.8rem;
    }
}
</style>