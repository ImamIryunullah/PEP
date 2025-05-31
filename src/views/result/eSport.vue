<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <!-- Navbar -->
      <NavbarDashboard />
      
      <!-- Gaming Background Effect -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 text-purple-500/10 text-8xl font-bold transform -rotate-12">ESPORT</div>
        <div class="absolute bottom-10 right-10 text-cyan-500/10 text-8xl font-bold transform rotate-12">GAMING</div>
      </div>
  
      <!-- Category Selection -->
      <section class="relative py-8 px-4">  
        <div class="max-w-7xl mx-auto">
          <h1 class="text-4xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            ESPORT KNOCKOUT STAGE
          </h1>
          
          <!-- Game Category Tabs -->
          <div class="flex flex-wrap justify-center gap-3 mb-8">
            <button 
              v-for="game in games" 
              :key="game.id"
              @click="selectGame(game.id, $event)"
              :class="[
                'px-6 py-3 rounded-xl font-bold border-2 transition-all duration-300 transform hover:scale-105 relative overflow-hidden shadow-lg',
                selectedGame === game.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-500 shadow-purple-500/50'
                  : 'bg-slate-800/80 text-gray-300 border-slate-600 hover:bg-slate-700/80 hover:border-purple-400 hover:text-white'
              ]"
            >
              <div class="flex items-center gap-2">
                <i :class="game.icon + ' text-lg'"></i>
                <span class="text-sm lg:text-base">{{ game.name }}</span>
              </div>
              <div v-if="selectedGame === game.id" 
                   class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse rounded-xl"></div>
            </button>
          </div>
        </div>
      </section>
  
      <!-- Knockout Bracket -->
      <section class="relative py-8 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="bg-slate-800/40 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 shadow-2xl">
            <h2 class="text-2xl lg:text-3xl font-bold text-center mb-8 text-white">
              {{ currentGame.name }} Tournament Bracket
            </h2>
            
            <!-- Desktop Bracket View -->
            <div class="hidden lg:block overflow-x-auto">
              <div class="flex justify-center gap-16 text-sm text-center min-w-[1200px] py-8">
                
                <!-- Round of 16 -->
                <div class="space-y-6">
                  <h3 class="text-purple-400 font-bold mb-4">Round of 16</h3>
                  <div v-for="(match, index) in bracket.round16" :key="'r16-' + index" 
                       class="match-card bg-slate-700/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-600/50 w-36 hover:shadow-purple-500/20 transition-all duration-300">
                    <div class="text-xs text-gray-400 mb-2">{{ match.time }}</div>
                    <div class="space-y-2">
                      <div :class="['flex justify-between items-center p-2 rounded', match.winner === 1 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-semibold truncate">{{ match.team1 }}</span>
                        <span class="font-bold">{{ match.score1 }}</span>
                      </div>
                      <div :class="['flex justify-between items-center p-2 rounded', match.winner === 2 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-semibold truncate">{{ match.team2 }}</span>
                        <span class="font-bold">{{ match.score2 }}</span>
                      </div>
                    </div>
                    <div class="text-xs text-purple-400 mt-2 font-medium">{{ match.status }}</div>
                  </div>
                </div>
  
                <!-- Quarterfinals -->
                <div class="space-y-12 pt-6">
                  <h3 class="text-purple-400 font-bold mb-4">Quarterfinals</h3>
                  <div v-for="(match, index) in bracket.quarterfinals" :key="'qf-' + index" 
                       class="match-card bg-slate-700/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-600/50 w-36 hover:shadow-purple-500/20 transition-all duration-300">
                    <div class="text-xs text-gray-400 mb-2">{{ match.time }}</div>
                    <div class="space-y-2">
                      <div :class="['flex justify-between items-center p-2 rounded', match.winner === 1 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-semibold truncate">{{ match.team1 }}</span>
                        <span class="font-bold">{{ match.score1 }}</span>
                      </div>
                      <div :class="['flex justify-between items-center p-2 rounded', match.winner === 2 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-semibold truncate">{{ match.team2 }}</span>
                        <span class="font-bold">{{ match.score2 }}</span>
                      </div>
                    </div>
                    <div class="text-xs text-purple-400 mt-2 font-medium">{{ match.status }}</div>
                  </div>
                </div>
  
                <!-- Semifinals -->
                <div class="space-y-24 pt-12">
                  <h3 class="text-purple-400 font-bold mb-4">Semifinals</h3>
                  <div v-for="(match, index) in bracket.semifinals" :key="'sf-' + index" 
                       class="match-card bg-slate-700/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-600/50 w-36 hover:shadow-purple-500/20 transition-all duration-300">
                    <div class="text-xs text-gray-400 mb-2">{{ match.time }}</div>
                    <div class="space-y-2">
                      <div :class="['flex justify-between items-center p-2 rounded', match.winner === 1 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-semibold truncate">{{ match.team1 }}</span>
                        <span class="font-bold">{{ match.score1 }}</span>
                      </div>
                      <div :class="['flex justify-between items-center p-2 rounded', match.winner === 2 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-semibold truncate">{{ match.team2 }}</span>
                        <span class="font-bold">{{ match.score2 }}</span>
                      </div>
                    </div>
                    <div class="text-xs text-purple-400 mt-2 font-medium">{{ match.status }}</div>
                  </div>
                </div>
  
                <!-- Finals -->
                <div class="space-y-8 pt-16">
                  <h3 class="text-purple-400 font-bold mb-4">Finals</h3>
                  <div class="match-card bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm p-6 rounded-xl shadow-xl border-2 border-yellow-500/50 w-40 transform hover:scale-105 transition-all duration-300">
                    <div class="text-xs text-yellow-400 mb-2 font-bold">🏆 GRAND FINAL</div>
                    <div class="text-xs text-gray-400 mb-2">{{ bracket.final.time }}</div>
                    <div class="space-y-2">
                      <div :class="['flex justify-between items-center p-2 rounded', bracket.final.winner === 1 ? 'bg-yellow-600/30 text-yellow-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-bold truncate">{{ bracket.final.team1 }}</span>
                        <span class="font-bold text-lg">{{ bracket.final.score1 }}</span>
                      </div>
                      <div :class="['flex justify-between items-center p-2 rounded', bracket.final.winner === 2 ? 'bg-yellow-600/30 text-yellow-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-bold truncate">{{ bracket.final.team2 }}</span>
                        <span class="font-bold text-lg">{{ bracket.final.score2 }}</span>
                      </div>
                    </div>
                    <div class="text-xs text-yellow-400 mt-2 font-bold">{{ bracket.final.status }}</div>
                  </div>
  
                  <!-- Third Place -->
                  <div class="match-card bg-gradient-to-br from-bronze-600/20 to-amber-600/20 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-amber-500/50 w-40">
                    <div class="text-xs text-amber-400 mb-2 font-bold">🥉 3rd Place</div>
                    <div class="text-xs text-gray-400 mb-2">{{ bracket.thirdPlace.time }}</div>
                    <div class="space-y-2">
                      <div :class="['flex justify-between items-center p-2 rounded', bracket.thirdPlace.winner === 1 ? 'bg-amber-600/30 text-amber-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-semibold truncate">{{ bracket.thirdPlace.team1 }}</span>
                        <span class="font-bold">{{ bracket.thirdPlace.score1 }}</span>
                      </div>
                      <div :class="['flex justify-between items-center p-2 rounded', bracket.thirdPlace.winner === 2 ? 'bg-amber-600/30 text-amber-300' : 'bg-slate-600/30']">
                        <span class="text-xs font-semibold truncate">{{ bracket.thirdPlace.team2 }}</span>
                        <span class="font-bold">{{ bracket.thirdPlace.score2 }}</span>
                      </div>
                    </div>
                    <div class="text-xs text-amber-400 mt-2 font-medium">{{ bracket.thirdPlace.status }}</div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Mobile Bracket View -->
            <div class="lg:hidden">
              <div class="space-y-8">
                <!-- Finals Mobile -->
                <div class="text-center">
                  <h3 class="text-xl font-bold text-purple-400 mb-4">🏆 GRAND FINAL</h3>
                  <div class="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm p-6 rounded-xl shadow-xl border-2 border-yellow-500/50 max-w-sm mx-auto">
                    <div class="text-sm text-gray-400 mb-3">{{ bracket.final.time }}</div>
                    <div class="space-y-3">
                      <div :class="['flex justify-between items-center p-3 rounded-lg', bracket.final.winner === 1 ? 'bg-yellow-600/30 text-yellow-300' : 'bg-slate-600/30']">
                        <span class="font-bold">{{ bracket.final.team1 }}</span>
                        <span class="font-bold text-xl">{{ bracket.final.score1 }}</span>
                      </div>
                      <div :class="['flex justify-between items-center p-3 rounded-lg', bracket.final.winner === 2 ? 'bg-yellow-600/30 text-yellow-300' : 'bg-slate-600/30']">
                        <span class="font-bold">{{ bracket.final.team2 }}</span>
                        <span class="font-bold text-xl">{{ bracket.final.score2 }}</span>
                      </div>
                    </div>
                    <div class="text-sm text-yellow-400 mt-3 font-bold">{{ bracket.final.status }}</div>
                  </div>
                </div>
  
                <!-- Semifinals Mobile -->
                <div>
                  <h3 class="text-xl font-bold text-purple-400 mb-4 text-center">Semifinals</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div v-for="(match, index) in bracket.semifinals" :key="'sf-mobile-' + index" 
                         class="bg-slate-700/60 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-600/50">
                      <div class="text-xs text-gray-400 mb-2">{{ match.time }}</div>
                      <div class="space-y-2">
                        <div :class="['flex justify-between items-center p-2 rounded', match.winner === 1 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                          <span class="font-semibold">{{ match.team1 }}</span>
                          <span class="font-bold">{{ match.score1 }}</span>
                        </div>
                        <div :class="['flex justify-between items-center p-2 rounded', match.winner === 2 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                          <span class="font-semibold">{{ match.team2 }}</span>
                          <span class="font-bold">{{ match.score2 }}</span>
                        </div>
                      </div>
                      <div class="text-xs text-purple-400 mt-2 font-medium">{{ match.status }}</div>
                    </div>
                  </div>
                </div>
  
                <!-- Other Rounds Mobile -->
                <div v-for="(round, roundName) in { 'Quarterfinals': bracket.quarterfinals, 'Round of 16': bracket.round16 }" :key="roundName">
                  <h3 class="text-lg font-bold text-purple-400 mb-4 text-center">{{ roundName }}</h3>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div v-for="(match, index) in round" :key="`${roundName}-mobile-${index}`" 
                         class="bg-slate-700/60 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-slate-600/50">
                      <div class="text-xs text-gray-400 mb-2">{{ match.time }}</div>
                      <div class="space-y-1">
                        <div :class="['flex justify-between items-center p-2 rounded text-sm', match.winner === 1 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                          <span class="font-semibold truncate">{{ match.team1 }}</span>
                          <span class="font-bold">{{ match.score1 }}</span>
                        </div>
                        <div :class="['flex justify-between items-center p-2 rounded text-sm', match.winner === 2 ? 'bg-green-600/30 text-green-300' : 'bg-slate-600/30']">
                          <span class="font-semibold truncate">{{ match.team2 }}</span>
                          <span class="font-bold">{{ match.score2 }}</span>
                        </div>
                      </div>
                      <div class="text-xs text-purple-400 mt-2 font-medium">{{ match.status }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Tournament Results Summary -->
      <section class="bg-slate-800/30 py-12 px-4 relative backdrop-blur-sm">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tournament Results
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Champions -->
            <div class="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border-2 border-yellow-500/50 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div class="text-6xl mb-4">🏆</div>
              <h3 class="text-xl font-bold text-yellow-400 mb-2">CHAMPION</h3>
              <p class="text-2xl font-bold text-white mb-2">{{ getWinner(bracket.final) }}</p>
              <p class="text-sm text-gray-300">{{ currentGame.name }} Tournament Winner</p>
            </div>
  
            <!-- Runner Up -->
            <div class="bg-gradient-to-br from-gray-400/20 to-slate-500/20 backdrop-blur-sm border-2 border-gray-400/50 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div class="text-6xl mb-4">🥈</div>
              <h3 class="text-xl font-bold text-gray-400 mb-2">RUNNER UP</h3>
              <p class="text-2xl font-bold text-white mb-2">{{ getRunnerUp(bracket.final) }}</p>
              <p class="text-sm text-gray-300">Second Place</p>
            </div>
  
            <!-- Third Place -->
            <div class="bg-gradient-to-br from-amber-600/20 to-yellow-600/20 backdrop-blur-sm border-2 border-amber-500/50 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <div class="text-6xl mb-4">🥉</div>
              <h3 class="text-xl font-bold text-amber-400 mb-2">THIRD PLACE</h3>
              <p class="text-2xl font-bold text-white mb-2">{{ getWinner(bracket.thirdPlace) }}</p>
              <p class="text-sm text-gray-300">Bronze Medal</p>
            </div>
          </div>
        </div>
      </section>
  
      <FooterDashboard />
    </div>
  </template>
  
  <script>
  import NavbarDashboard from '@/components/NavbarDashboard.vue'
  import FooterDashboard from '@/components/FooterDashboard.vue'
  
  export default {
    name: "EsportKnockoutStage",
    components: {
      NavbarDashboard,
      FooterDashboard
    },
    data() {
      return {
        selectedGame: 'mobile-legends',
        games: [
          { id: 'mobile-legends', name: 'Mobile Legends', icon: 'fas fa-mobile-alt' },
          { id: 'pubg-mobile', name: 'PUBG Mobile', icon: 'fas fa-crosshairs' },
          { id: 'free-fire', name: 'Free Fire', icon: 'fas fa-fire' },
          { id: 'valorant', name: 'Valorant', icon: 'fas fa-bullseye' },
          { id: 'fifa', name: 'FIFA', icon: 'fas fa-futbol' }
        ],
        brackets: {
          'mobile-legends': {
            round16: [
              { team1: 'RRQ Hoshi', team2: 'EVOS Legends', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '10:00' },
              { team1: 'ONIC Esports', team2: 'Bigetron Alpha', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '11:00' },
              { team1: 'Alter Ego', team2: 'Geek Slate', score1: 0, score2: 2, winner: 2, status: 'FINISHED', time: '12:00' },
              { team1: 'Aura Fire', team2: 'GPX Basreng', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '13:00' },
              { team1: 'Rebellion Zion', team2: 'Team SMG', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '14:00' },
              { team1: 'NXPE', team2: 'Dewa United', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '15:00' },
              { team1: 'Genflix Aerowolf', team2: 'Burn X Flash', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '16:00' },
              { team1: 'Team Liquid', team2: 'Orange Louvre', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '17:00' }
            ],
            quarterfinals: [
              { team1: 'RRQ Hoshi', team2: 'ONIC Esports', score1: 3, score2: 1, winner: 1, status: 'FINISHED', time: 'QF 1' },
              { team1: 'Geek Slate', team2: 'Aura Fire', score1: 1, score2: 3, winner: 2, status: 'FINISHED', time: 'QF 2' },
              { team1: 'Team SMG', team2: 'NXPE', score1: 2, score2: 3, winner: 2, status: 'FINISHED', time: 'QF 3' },
              { team1: 'Genflix Aerowolf', team2: 'Orange Louvre', score1: 3, score2: 2, winner: 1, status: 'FINISHED', time: 'QF 4' }
            ],
            semifinals: [
              { team1: 'RRQ Hoshi', team2: 'Aura Fire', score1: 3, score2: 2, winner: 1, status: 'FINISHED', time: 'SF 1' },
              { team1: 'NXPE', team2: 'Genflix Aerowolf', score1: 1, score2: 3, winner: 2, status: 'FINISHED', time: 'SF 2' }
            ],
            final: {
              team1: 'RRQ Hoshi', team2: 'Genflix Aerowolf', score1: 4, score2: 2, winner: 1, status: 'CHAMPION', time: 'Grand Final'
            },
            thirdPlace: {
              team1: 'Aura Fire', team2: 'NXPE', score1: 3, score2: 1, winner: 1, status: 'BRONZE', time: '3rd Place'
            }
          },
          'free-fire': {
            round16: [
              { team1: 'EVOS Phoenix', team2: 'Bigetron Red Aliens', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '10:00' },
              { team1: 'Alter Ego Limax', team2: 'RRQ Endeavour', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '11:00' },
              { team1: 'Genflix Aerowolf', team2: 'ONIC G', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '12:00' },
              { team1: 'Dewa United Fire', team2: 'Team Flash', score1: 0, score2: 2, winner: 2, status: 'FINISHED', time: '13:00' },
              { team1: 'Morph Team', team2: 'Nightfall', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '14:00' },
              { team1: 'Geek Slate ID', team2: 'Boom Esports', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '15:00' },
              { team1: 'Aura Esports', team2: 'Team Secret', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '16:00' },
              { team1: 'Made In Thailand', team2: 'Todak', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '17:00' }
            ],
            quarterfinals: [
              { team1: 'Bigetron Red Aliens', team2: 'Alter Ego Limax', score1: 2, score2: 3, winner: 2, status: 'FINISHED', time: 'QF 1' },
              { team1: 'Genflix Aerowolf', team2: 'Team Flash', score1: 3, score2: 1, winner: 1, status: 'FINISHED', time: 'QF 2' },
              { team1: 'Morph Team', team2: 'Boom Esports', score1: 3, score2: 2, winner: 1, status: 'FINISHED', time: 'QF 3' },
              { team1: 'Aura Esports', team2: 'Todak', score1: 1, score2: 3, winner: 2, status: 'FINISHED', time: 'QF 4' }
            ],
            semifinals: [
              { team1: 'Alter Ego Limax', team2: 'Genflix Aerowolf', score1: 2, score2: 3, winner: 2, status: 'FINISHED', time: 'SF 1' },
              { team1: 'Morph Team', team2: 'Todak', score1: 3, score2: 1, winner: 1, status: 'FINISHED', time: 'SF 2' }
            ],
            final: {
              team1: 'Genflix Aerowolf', team2: 'Morph Team', score1: 4, score2: 3, winner: 1, status: 'CHAMPION', time: 'Grand Final'
            },
            thirdPlace: {
              team1: 'Alter Ego Limax', team2: 'Todak', score1: 2, score2: 1, winner: 1, status: 'BRONZE', time: '3rd Place'
            }
          },
          'pubg-mobile': {
            round16: [
              { team1: 'BOOM Esports', team2: 'Bigetron Red Aliens', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '10:00' },
              { team1: 'RRQ Athena', team2: 'EVOS Devine', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '11:00' },
              { team1: 'Alter Ego Axis', team2: 'ONIC Prodigy', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '12:00' },
              { team1: 'Geek Slate', team2: 'Team Secret', score1: 0, score2: 2, winner: 2, status: 'FINISHED', time: '13:00' },
              { team1: 'Aura Fire', team2: 'Dewa United', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '14:00' },
              { team1: 'Morph Team', team2: 'Orange Louvre', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '15:00' },
              { team1: 'Genflix Aerowolf', team2: 'Team Flash', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '16:00' },
              { team1: 'Made In Thailand', team2: 'Vampire Esports', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '17:00' }
            ],
            quarterfinals: [
            { team1: 'BOOM Esports', team2: 'EVOS Devine', score1: 3, score2: 1, winner: 1, status: 'FINISHED', time: 'QF 1' },
            { team1: 'Alter Ego Axis', team2: 'Team Secret', score1: 2, score2: 3, winner: 2, status: 'FINISHED', time: 'QF 2' },
            { team1: 'Aura Fire', team2: 'Orange Louvre', score1: 3, score2: 2, winner: 1, status: 'FINISHED', time: 'QF 3' },
            { team1: 'Genflix Aerowolf', team2: 'Made In Thailand', score1: 1, score2: 3, winner: 2, status: 'FINISHED', time: 'QF 4' }
          ],
          semifinals: [
            { team1: 'BOOM Esports', team2: 'Team Secret', score1: 3, score2: 2, winner: 1, status: 'FINISHED', time: 'SF 1' },
            { team1: 'Aura Fire', team2: 'Made In Thailand', score1: 2, score2: 3, winner: 2, status: 'FINISHED', time: 'SF 2' }
          ],
          final: {
            team1: 'BOOM Esports', team2: 'Made In Thailand', score1: 4, score2: 1, winner: 1, status: 'CHAMPION', time: 'Grand Final'
          },
          thirdPlace: {
            team1: 'Team Secret', team2: 'Aura Fire', score1: 3, score2: 2, winner: 1, status: 'BRONZE', time: '3rd Place'
          }
        },
        'valorant': {
          round16: [
            { team1: 'Paper Rex', team2: 'Team Secret', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '10:00' },
            { team1: 'BOOM Esports', team2: 'RRQ', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '11:00' },
            { team1: 'XERXIA', team2: 'Alter Ego', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '12:00' },
            { team1: 'ONIC G', team2: 'Bigetron Astro', score1: 0, score2: 2, winner: 2, status: 'FINISHED', time: '13:00' },
            { team1: 'Full Sense', team2: 'Fancy United', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '14:00' },
            { team1: 'Sengoku Gaming', team2: 'Northeption', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '15:00' },
            { team1: 'DetonationFM', team2: 'ORDER', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '16:00' },
            { team1: 'Global Esports', team2: 'T1 Korea', score1: 0, score2: 2, winner: 2, status: 'FINISHED', time: '17:00' }
          ],
          quarterfinals: [
            { team1: 'Paper Rex', team2: 'RRQ', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: 'QF 1' },
            { team1: 'XERXIA', team2: 'Bigetron Astro', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: 'QF 2' },
            { team1: 'Full Sense', team2: 'Northeption', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: 'QF 3' },
            { team1: 'DetonationFM', team2: 'T1 Korea', score1: 0, score2: 2, winner: 2, status: 'FINISHED', time: 'QF 4' }
          ],
          semifinals: [
            { team1: 'Paper Rex', team2: 'XERXIA', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: 'SF 1' },
            { team1: 'Northeption', team2: 'T1 Korea', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: 'SF 2' }
          ],
          final: {
            team1: 'Paper Rex', team2: 'T1 Korea', score1: 3, score2: 2, winner: 1, status: 'CHAMPION', time: 'Grand Final'
          },
          thirdPlace: {
            team1: 'XERXIA', team2: 'Northeption', score1: 2, score2: 1, winner: 1, status: 'BRONZE', time: '3rd Place'
          }
        },
        'fifa': {
          round16: [
            { team1: 'Indonesia', team2: 'Thailand', score1: 3, score2: 1, winner: 1, status: 'FINISHED', time: '10:00' },
            { team1: 'Malaysia', team2: 'Singapore', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: '11:00' },
            { team1: 'Vietnam', team2: 'Philippines', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: '12:00' },
            { team1: 'Cambodia', team2: 'Laos', score1: 4, score2: 0, winner: 1, status: 'FINISHED', time: '13:00' },
            { team1: 'Myanmar', team2: 'Brunei', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '14:00' },
            { team1: 'Timor Leste', team2: 'Australia', score1: 0, score2: 3, winner: 2, status: 'FINISHED', time: '15:00' },
            { team1: 'Japan', team2: 'South Korea', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: '16:00' },
            { team1: 'China', team2: 'Hong Kong', score1: 1, score2: 0, winner: 1, status: 'FINISHED', time: '17:00' }
          ],
          quarterfinals: [
            { team1: 'Indonesia', team2: 'Malaysia', score1: 2, score2: 1, winner: 1, status: 'FINISHED', time: 'QF 1' },
            { team1: 'Philippines', team2: 'Cambodia', score1: 1, score2: 3, winner: 2, status: 'FINISHED', time: 'QF 2' },
            { team1: 'Myanmar', team2: 'Australia', score1: 0, score2: 2, winner: 2, status: 'FINISHED', time: 'QF 3' },
            { team1: 'Japan', team2: 'China', score1: 3, score2: 1, winner: 1, status: 'FINISHED', time: 'QF 4' }
          ],
          semifinals: [
            { team1: 'Indonesia', team2: 'Cambodia', score1: 2, score2: 0, winner: 1, status: 'FINISHED', time: 'SF 1' },
            { team1: 'Australia', team2: 'Japan', score1: 1, score2: 2, winner: 2, status: 'FINISHED', time: 'SF 2' }
          ],
          final: {
            team1: 'Indonesia', team2: 'Japan', score1: 2, score2: 1, winner: 1, status: 'CHAMPION', time: 'Grand Final'
          },
          thirdPlace: {
            team1: 'Cambodia', team2: 'Australia', score1: 1, score2: 2, winner: 2, status: 'BRONZE', time: '3rd Place'
          }
        }
      }
    }
  },
  computed: {
    currentGame() {
      return this.games.find(game => game.id === this.selectedGame)
    },
    bracket() {
      return this.brackets[this.selectedGame]
    }
  },
  methods: {
    selectGame(gameId, event) {
      this.selectedGame = gameId
      
      // Add click effect
      const button = event.currentTarget
      button.style.transform = 'scale(0.95)'
      setTimeout(() => {
        button.style.transform = 'scale(1.05)'
      }, 100)
      setTimeout(() => {
        button.style.transform = 'scale(1)'
      }, 200)
    },
    getWinner(match) {
      if (match.winner === 1) return match.team1
      if (match.winner === 2) return match.team2
      return 'TBD'
    },
    getRunnerUp(match) {
      if (match.winner === 1) return match.team2
      if (match.winner === 2) return match.team1
      return 'TBD'
    }
  },
  mounted() {
    // Add some entrance animations
    const elements = document.querySelectorAll('.match-card')
    elements.forEach((el, index) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, index * 100)
    })
  }
}
</script>

<style scoped>
.match-card {
  transition: all 0.3s ease;
}

.match-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
}

/* Custom scrollbar for bracket */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: rgba(51, 65, 85, 0.3);
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.6);
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.8);
}

/* Gradient animation for background text */
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
</style>