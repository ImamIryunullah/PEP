<template>
    <div class="min-h-screen">
        <NavbarDashboard />
        <section class="relative py-8 md:py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50 overflow-hidden">
            <div class="absolute inset-0">
                <img src="/jadwaldanhasil/basketball-bg.png" alt="Basketball Background" class="w-full h-full object-cover opacity-5" />
            </div>
            <div class="max-w-7xl mx-auto z-10 relative">
                <h2 class="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-orange-800">Basketball Knockout Stage</h2>
                <div class="block lg:hidden">
                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-semibold mb-4 text-orange-700 text-center">Round of 16</h3>
                            <div class="grid grid-cols-2 gap-3">
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-400">
                                    <div class="text-sm font-medium">Lakers vs Warriors</div>
                                    <div class="text-lg font-bold text-orange-600">78 - 65</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-400">
                                    <div class="text-sm font-medium">Bulls vs Celtics</div>
                                    <div class="text-lg font-bold text-orange-600">92 - 88</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-400">
                                    <div class="text-sm font-medium">Heat vs Spurs</div>
                                    <div class="text-lg font-bold text-orange-600">85 - 79</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-400">
                                    <div class="text-sm font-medium">Nets vs Mavs</div>
                                    <div class="text-lg font-bold text-orange-600">98 - 95</div>
                                    <div class="text-xs text-gray-500">OT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-400">
                                    <div class="text-sm font-medium">Sixers vs Knicks</div>
                                    <div class="text-lg font-bold text-orange-600">89 - 84</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-400">
                                    <div class="text-sm font-medium">Bucks vs Suns</div>
                                    <div class="text-lg font-bold text-orange-600">105 - 99</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-400">
                                    <div class="text-sm font-medium">Nuggets vs Jazz</div>
                                    <div class="text-lg font-bold text-orange-600">112 - 95</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-400">
                                    <div class="text-sm font-medium">Clippers vs Kings</div>
                                    <div class="text-lg font-bold text-orange-600">87 - 91</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4 text-orange-700 text-center">Quarter Finals</h3>
                            <div class="grid grid-cols-2 gap-3 max-w-md mx-auto">
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-500">
                                    <div class="text-sm font-medium">Lakers vs Bulls</div>
                                    <div class="text-lg font-bold text-orange-600">96 - 89</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-500">
                                    <div class="text-sm font-medium">Heat vs Nets</div>
                                    <div class="text-lg font-bold text-orange-600">82 - 78</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-500">
                                    <div class="text-sm font-medium">Sixers vs Bucks</div>
                                    <div class="text-lg font-bold text-orange-600">93 - 101</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-500">
                                    <div class="text-sm font-medium">Nuggets vs Kings</div>
                                    <div class="text-lg font-bold text-orange-600">108 - 95</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 class="text-lg font-semibold mb-4 text-orange-700 text-center">Semi Finals</h3>
                            <div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-600">
                                    <div class="text-sm font-medium">Lakers vs Heat</div>
                                    <div class="text-lg font-bold text-orange-600">104 - 88</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                                <div class="bg-white p-3 rounded-lg shadow-md text-center border-l-4 border-orange-600">
                                    <div class="text-sm font-medium">Bucks vs Nuggets</div>
                                    <div class="text-lg font-bold text-orange-600">97 - 102</div>
                                    <div class="text-xs text-gray-500">FT</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold mb-4 text-orange-700 text-center">Finals</h3>
                            <div class="space-y-3 max-w-xs mx-auto">
                                <div class="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-lg shadow-lg text-center font-bold">
                                    <div class="text-xs mb-1">Championship Final</div>
                                    <div class="text-sm font-medium">Lakers vs Nuggets</div>
                                    <div class="text-xl font-bold">108 - 112</div>
                                    <div class="text-xs">FT</div>
                                </div>
                                <div class="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-4 rounded-lg shadow-lg text-center font-bold">
                                    <div class="text-xs mb-1">3rd Place Game</div>
                                    <div class="text-sm font-medium">Heat vs Bucks</div>
                                    <div class="text-xl font-bold">95 - 92</div>
                                    <div class="text-xs">FT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hidden lg:block overflow-x-auto">
                    <div class="flex justify-center gap-8 xl:gap-12 text-sm text-center text-gray-800 min-w-[1200px]">
                        <div class="space-y-8">
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-400">
                                <div class="text-xs font-medium mb-1">Lakers vs Warriors</div>
                                <div class="font-bold text-orange-600">78 - 65</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-400">
                                <div class="text-xs font-medium mb-1">Heat vs Spurs</div>
                                <div class="font-bold text-orange-600">85 - 79</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-400">
                                <div class="text-xs font-medium mb-1">Sixers vs Knicks</div>
                                <div class="font-bold text-orange-600">89 - 84</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-400">
                                <div class="text-xs font-medium mb-1">Nuggets vs Jazz</div>
                                <div class="font-bold text-orange-600">112 - 95</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                        </div>

                        <div class="space-y-16 md:space-y-24 pt-12">
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-500">
                                <div class="text-xs font-medium mb-1">Lakers vs Bulls</div>
                                <div class="font-bold text-orange-600">96 - 89</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-500">
                                <div class="text-xs font-medium mb-1">Sixers vs Bucks</div>
                                <div class="font-bold text-orange-600">93 - 101</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                        </div>

                        <div class="space-y-24 md:space-y-36 pt-24">
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-600">
                                <div class="text-xs font-medium mb-1">Lakers vs Heat</div>
                                <div class="font-bold text-orange-600">104 - 88</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                        </div>

                        <div class="space-y-8 pt-12">
                            <div class="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-lg shadow-lg w-40 font-bold">
                                <div class="text-xs mb-1">Championship</div>
                                <div class="text-xs font-medium mb-1">Lakers vs Nuggets</div>
                                <div class="font-bold">108 - 112</div>
                                <div class="text-xs">FT</div>
                            </div>
                            <div class="bg-gradient-to-r from-amber-500 to-yellow-500 text-white p-4 rounded-lg shadow-lg w-40 font-bold">
                                <div class="text-xs mb-1">3rd Place</div>
                                <div class="text-xs font-medium mb-1">Heat vs Bucks</div>
                                <div class="font-bold">95 - 92</div>
                                <div class="text-xs">FT</div>
                            </div>
                        </div>

                        <div class="space-y-24 md:space-y-36 pt-24">
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-600">
                                <div class="text-xs font-medium mb-1">Bucks vs Nuggets</div>
                                <div class="font-bold text-orange-600">97 - 102</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                        </div>
                        
                        <div class="space-y-16 md:space-y-24 pt-12">
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-500">
                                <div class="text-xs font-medium mb-1">Heat vs Nets</div>
                                <div class="font-bold text-orange-600">82 - 78</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-500">
                                <div class="text-xs font-medium mb-1">Nuggets vs Kings</div>
                                <div class="font-bold text-orange-600">108 - 95</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                        </div>
                        
                        <div class="space-y-8">
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-400">
                                <div class="text-xs font-medium mb-1">Bulls vs Celtics</div>
                                <div class="font-bold text-orange-600">92 - 88</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-400">
                                <div class="text-xs font-medium mb-1">Nets vs Mavs</div>
                                <div class="font-bold text-orange-600">98 - 95</div>
                                <div class="text-xs text-gray-500">OT</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-400">
                                <div class="text-xs font-medium mb-1">Bucks vs Suns</div>
                                <div class="font-bold text-orange-600">105 - 99</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                            <div class="bg-white p-4 rounded-lg shadow-md w-36 border-l-4 border-orange-400">
                                <div class="text-xs font-medium mb-1">Clippers vs Kings</div>
                                <div class="font-bold text-orange-600">87 - 91</div>
                                <div class="text-xs text-gray-500">FT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gradient-to-br from-gray-50 to-orange-50 py-8 md:py-12 px-4 relative">
            <h1 class="absolute top-[15%] md:top-[20%] left-1/2 transform -translate-x-1/2 text-orange-200 opacity-20 text-6xl md:text-9xl font-bold whitespace-nowrap">
                RESULTS
            </h1>
            <div class="max-w-6xl mx-auto relative z-10">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
                    <div class="space-y-6 w-full max-w-sm">
                        <div class="bg-white border border-orange-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
                            <div class="text-xs md:text-sm text-orange-600 mb-2 font-medium">Championship Final · 15 Jun 2024</div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="flex items-center space-x-2">
                                    <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">L</span>
                                    </div>
                                    <span class="font-bold text-gray-800 text-sm md:text-base">Lakers</span>
                                </div>
                                <span class="text-lg md:text-xl font-bold text-orange-600">108</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center space-x-2">
                                    <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">N</span>
                                    </div>
                                    <span class="font-bold text-gray-800 text-sm md:text-base">Nuggets</span>
                                </div>
                                <span class="text-lg md:text-xl font-bold text-orange-600">112</span>
                            </div>
                            <div class="mt-3 pt-3 border-t border-orange-100">
                                <span class="text-xs text-gray-500">🏆 Champion: Denver Nuggets</span>
                            </div>
                        </div>
                        
                        <div class="bg-white border border-amber-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
                            <div class="text-xs md:text-sm text-amber-600 mb-2 font-medium">3rd Place Game · 14 Jun 2024</div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="flex items-center space-x-2">
                                    <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">H</span>
                                    </div>
                                    <span class="font-bold text-gray-800 text-sm md:text-base">Heat</span>
                                </div>
                                <span class="text-lg md:text-xl font-bold text-amber-600">95</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center space-x-2">
                                    <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">B</span>
                                    </div>
                                    <span class="font-bold text-gray-800 text-sm md:text-base">Bucks</span>
                                </div>
                                <span class="text-lg md:text-xl font-bold text-amber-600">92</span>
                            </div>
                            <div class="mt-3 pt-3 border-t border-amber-100">
                                <span class="text-xs text-gray-500">🥉 3rd Place: Miami Heat</span>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-6 w-full max-w-sm">
                        <div class="bg-white border border-orange-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
                            <div class="text-xs md:text-sm text-orange-600 mb-2 font-medium">Semi Final 1 · 12 Jun 2024</div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="flex items-center space-x-2">
                                    <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">L</span>
                                    </div>
                                    <span class="font-bold text-gray-800 text-sm md:text-base">Lakers</span>
                                </div>
                                <span class="text-lg md:text-xl font-bold text-orange-600">104</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center space-x-2">
                                    <div class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">H</span>
                                    </div>
                                    <span class="font-bold text-gray-800 text-sm md:text-base">Heat</span>
                                </div>
                                <span class="text-lg md:text-xl font-bold text-orange-600">88</span>
                            </div>
                        </div>
                        
                        <div class="bg-white border border-orange-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
                            <div class="text-xs md:text-sm text-orange-600 mb-2 font-medium">Semi Final 2 · 12 Jun 2024</div>
                            <div class="flex justify-between items-center mb-2">
                                <div class="flex items-center space-x-2">
                                    <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">B</span>
                                    </div>
                                    <span class="font-bold text-gray-800 text-sm md:text-base">Bucks</span>
                                </div>
                                <span class="text-lg md:text-xl font-bold text-orange-600">97</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center space-x-2">
                                    <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                        <span class="text-white text-xs font-bold">N</span>
                                    </div>
                                    <span class="font-bold text-gray-800 text-sm md:text-base">Nuggets</span>
                                </div>
                                <span class="text-lg md:text-xl font-bold text-orange-600">102</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Quarter Finals Highlights -->
                    <div class="space-y-6 w-full max-w-sm md:col-span-2 lg:col-span-1">
                        <div class="bg-white border border-orange-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
                            <div class="text-xs md:text-sm text-orange-600 mb-2 font-medium">Quarter Final Highlights</div>
                            <div class="space-y-2 text-xs text-gray-600">
                                <div class="flex justify-between">
                                    <span>Lakers def. Bulls</span>
                                    <span class="font-semibold">96-89</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Heat def. Nets</span>
                                    <span class="font-semibold">82-78</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Bucks def. Sixers</span>
                                    <span class="font-semibold">101-93</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Nuggets def. Kings</span>
                                    <span class="font-semibold">108-95</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-lg shadow-lg p-4">
                            <div class="text-xs md:text-sm text-orange-700 mb-2 font-medium">Tournament Stats</div>
                            <div class="space-y-2 text-xs text-gray-700">
                                <div class="flex justify-between">
                                    <span>Highest Score</span>
                                    <span class="font-semibold">Nuggets 112</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Closest Game</span>
                                    <span class="font-semibold">Heat 95-92</span>
                                </div>
                                <div class="flex justify-between">
                                    <span>Total Games</span>
                                    <span class="font-semibold">15 Games</span>
                                </div>
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

</script>


<style scoped>
</style>