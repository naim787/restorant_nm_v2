<script>
  import "../../app.css"
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Initialize Lucide icons after component mounts
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });
</script>

<!-- <svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CryptoLearn Academy - Master Digital Finance</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <script src="https://unpkg.com/lucide@latest"></script>
</svelte:head> -->

<style>
  .animate-fade-in { 
    animation: fadeIn 0.8s ease-out forwards; 
    opacity: 0; 
  }
  
  .animate-slide-up { 
    animation: slideUp 0.8s ease-out forwards; 
    opacity: 0; 
    transform: translateY(20px); 
  }
  
  .animate-delay-200 { animation-delay: 0.2s; }
  .animate-delay-400 { animation-delay: 0.4s; }
  .animate-delay-600 { animation-delay: 0.6s; }
  .animate-delay-800 { animation-delay: 0.8s; }
  
  @keyframes fadeIn { 
    to { opacity: 1; } 
  }
  
  @keyframes slideUp { 
    to { opacity: 1; transform: translateY(0); } 
  }
</style>

<div class="bg-[radial-gradient(#000_1px,transparent_0)] [background-size:20px_20px] text-[#0f0f0f] antialiased">
  <div class="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style="background-image: url('https://cdn.midjourney.com/a55c302e-35a2-40d2-8ae8-1f2bc7f74192/0_0.png?w=800&q=80');"></div>
  
  <header class="py-6 animate-fade-in">
    <div class="mx-auto max-w-7xl px-6 flex items-center justify-between">
      <a href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div class="w-8 h-8 bg-gradient-to-br rounded-full flex items-center justify-center from-black to-gray-700">
          <i data-lucide="trending-up" class="w-4 h-4 text-white"></i>
        </div>
        <span class="font-semibold text-lg tracking-tight font-sans">CryptoLearn</span>
      </a>
      <nav class="hidden md:flex items-center gap-10 text-sm font-medium">
        <a href="/" class="transition-colors flex items-center gap-2 font-sans hover:text-black text-gray-700">
          About
        </a>
        <a href="/" class="transition-colors flex items-center gap-2 hover:text-black text-gray-700">
          Pricing
        </a>
        <a href="/" class="transition-colors flex items-center gap-2 font-sans hover:text-black text-gray-700">
          Curriculum
        </a>
        <a href="/" class="transition-colors flex items-center gap-2 font-sans hover:text-black text-gray-700">
          Reviews
        </a>
      </nav>
      <button class="hidden sm:inline-flex transition-all hover:shadow-md hover:bg-gray-100 text-sm font-medium text-black bg-white rounded-full pt-2 pr-6 pb-2 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center justify-center">
        CONTACT US
      </button>
      <button class="md:hidden p-2 rounded-lg transition-colors hover:bg-white/20">
        <i data-lucide="menu" class="w-6 h-6"></i>
      </button>
    </div>
  </header>

  <main>
    <section class="mx-auto max-w-7xl px-6 pb-20">
      <div class="md:rounded-3xl md:p-16 lg:p-24 overflow-hidden bg-white/50 rounded-b-3xl pt-8 pr-8 pb-8 pl-8 shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] backdrop-blur-md">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center bg-[#f1f2f3] rounded-full pl-4 pr-6 py-2 w-max mb-8 animate-slide-up">
              <div class="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320&q=80" class="w-8 h-8 rounded-full border-2 object-cover border-white" alt="Student" />
                <img src="https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?w=320&q=80" class="w-8 h-8 rounded-full border-2 object-cover border-white" alt="Student" />
                <img src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=320&q=80" class="w-8 h-8 rounded-full border-2 object-cover border-white" alt="Student" />
                <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&q=80" class="w-8 h-8 rounded-full border-2 object-cover border-white" alt="Student" />
                <img src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=320&q=80" class="w-8 h-8 rounded-full border-2 object-cover border-white" alt="Student" />
              </div>
              <span class="ml-4 text-sm font-medium font-sans">
                <span class="font-semibold font-sans">12.5k</span> students mastered crypto
              </span>
            </div>

            <h1 class="sm:text-5xl lg:text-7xl leading-tight animate-slide-up animate-delay-200 text-4xl font-medium tracking-tight font-manrope mt-2 mr-2 mb-2 ml-2">
              Master Crypto Trading Academy<br class="hidden sm:block" />
            </h1>

            <p class="sm:text-lg max-w-xl animate-slide-up animate-delay-400 text-base mt-6 font-sans text-gray-600">
              From Bitcoin basics to DeFi strategies, unlock the secrets of digital finance with our comprehensive learning platform. Join thousands who've transformed their crypto knowledge.
            </p>

            <div class="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-600">
              <a href="#" class="inline-flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg hover:bg-gray-900 font-medium text-white bg-black rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                <i data-lucide="play-circle" class="w-5 h-5"></i>
                Start Learning Free
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <a href="#" class="inline-flex items-center justify-center gap-2 font-medium px-8 py-4 rounded-full border transition-all hover:shadow-md font-sans bg-white hover:bg-gray-100 text-black border-gray-200">
                <i data-lucide="users" class="w-4 h-4"></i>
                Meet Our Team
              </a>
            </div>

            <div class="mt-12 flex items-center gap-8 animate-slide-up animate-delay-800">
              <div class="flex items-center gap-2">
                <div class="flex text-yellow-400">
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                  <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                </div>
                <span class="text-sm font-medium font-sans">4.9/5 Rating</span>
              </div>
              <div class="flex items-center gap-2">
                <i data-lucide="award" class="w-4 h-4 text-blue-600"></i>
                <span class="text-sm font-medium font-sans">Industry Certified</span>
              </div>
            </div>
          </div>

          <div class="relative animate-slide-up animate-delay-400">
            <div class="relative rounded-3xl overflow-hidden h-80 sm:h-[28rem] shadow-2xl">
              <img src="https://cdn.midjourney.com/bb972d04-5615-480a-bdd9-75cf76f6bec5/0_0.png?w=800&q=80" alt="Crypto trading dashboard" class="absolute inset-0 w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/60"></div>
              
              <div class="absolute top-4 left-4 text-white">
                <div class="flex items-center gap-2 mb-2">
                  <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=320&q=80" class="w-6 h-6 rounded-full border-2 object-cover border-white" alt="Instructor" />
                  <span class="text-xs font-medium font-sans">Sarah Chen, Lead Instructor</span>
                </div>
                <p class="text-xs leading-4 max-w-[200px] backdrop-blur-sm rounded-lg p-2 font-sans bg-black/20">
                  "From zero to crypto hero in 8 weeks. I'll guide you through every step of your blockchain journey!"
                </p>
              </div>
              
              <div class="absolute top-4 right-4 flex gap-2">
                <button class="backdrop-blur-sm rounded-full p-2 transition-colors bg-white/20 hover:bg-white/30">
                  <i data-lucide="play" class="w-4 h-4 text-white"></i>
                </button>
                <button class="backdrop-blur-sm rounded-full p-2 transition-colors bg-white/20 hover:bg-white/30">
                  <i data-lucide="bookmark" class="w-4 h-4 text-white"></i>
                </button>
              </div>

              <div class="absolute bottom-4 left-4 right-4">
                <div class="backdrop-blur-sm rounded-lg p-3 bg-white/10">
                  <div class="flex items-center justify-between text-sm text-white">
                    <span class="font-sans">Current Module: DeFi Fundamentals</span>
                    <span class="flex items-center gap-1 font-sans">
                      <i data-lucide="clock" class="w-3 h-3"></i>
                      24 min
                    </span>
                  </div>
                  <div class="mt-2 rounded-full h-1 bg-white/20">
                    <div class="rounded-full h-1 w-2/3 bg-white"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="absolute -bottom-4 -right-4 bg-white border-gray-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                  <i data-lucide="trending-up" class="w-5 h-5 text-green-600"></i>
                </div>
                <div>
                  <p class="text-sm font-semibold font-sans">Portfolio Growth</p>
                  <p class="text-xs font-sans text-gray-600">+247% avg student gain</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="flex flex-col items-center bg-gradient-to-br border rounded-2xl px-6 py-8 hover:shadow-lg transition-all animate-slide-up animate-delay-200 from-blue-50 to-white border-blue-100">
            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-blue-100">
              <i data-lucide="calendar" class="w-6 h-6 text-blue-600"></i>
            </div>
            <span class="text-sm mb-1 font-sans text-gray-600">Duration</span>
            <span class="font-semibold text-lg font-sans">8 Weeks</span>
            <span class="text-xs text-gray-500 mt-1 font-sans">Self-paced</span>
          </div>
          
          <div class="flex flex-col items-center bg-gradient-to-br border rounded-2xl px-6 py-8 hover:shadow-lg transition-all animate-slide-up animate-delay-400 from-purple-50 to-white border-purple-100">
            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-purple-100">
              <i data-lucide="bar-chart-3" class="w-6 h-6 text-purple-600"></i>
            </div>
            <span class="text-sm mb-1 font-sans text-gray-600">Level</span>
            <span class="font-semibold text-lg font-sans">Beginner+</span>
            <span class="text-xs text-gray-500 mt-1 font-sans">No prior experience</span>
          </div>
          
          <div class="flex flex-col hover:shadow-lg transition-all animate-slide-up animate-delay-600 bg-gradient-to-br from-orange-50 to-white border-orange-100 border rounded-2xl pt-8 pr-6 pb-8 pl-6 items-center">
            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-orange-100">
              <i data-lucide="monitor" class="w-6 h-6 text-orange-600"></i>
            </div>
            <span class="text-sm mb-1 font-sans text-gray-600">Format</span>
            <span class="font-semibold text-lg font-sans">Online</span>
            <span class="text-xs text-gray-500 mt-1 font-sans">Live + recorded</span>
          </div>
          
          <div class="flex flex-col items-center bg-gradient-to-br border rounded-2xl px-6 py-8 hover:shadow-lg transition-all animate-slide-up animate-delay-800 from-green-50 to-white border-green-100">
            <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-green-100">
              <i data-lucide="shield-check" class="w-6 h-6 text-green-600"></i>
            </div>
            <span class="text-sm mb-1 font-sans text-gray-600">Certification</span>
            <span class="font-semibold text-lg font-sans">Verified</span>
            <span class="text-xs text-gray-500 mt-1 font-sans">Industry recognized</span>
          </div>
        </div>

        <div class="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="rounded-2xl p-6 transition-colors animate-slide-up animate-delay-200 bg-gray-50 hover:bg-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
                <i data-lucide="bitcoin" class="w-5 h-5 text-blue-600"></i>
              </div>
              <h3 class="font-semibold font-sans">Bitcoin &amp; Blockchain</h3>
            </div>
            <p class="text-sm font-sans text-gray-600">Master the fundamentals of Bitcoin, blockchain technology, and decentralized systems.</p>
          </div>
          
          <div class="rounded-2xl p-6 transition-colors animate-slide-up animate-delay-400 bg-gray-50 hover:bg-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100">
                <i data-lucide="coins" class="w-5 h-5 text-purple-600"></i>
              </div>
              <h3 class="font-semibold font-sans">Altcoins &amp; Tokens</h3>
            </div>
            <p class="text-sm font-sans text-gray-600">Explore Ethereum, smart contracts, and the diverse world of alternative cryptocurrencies.</p>
          </div>
          
          <div class="rounded-2xl p-6 transition-colors animate-slide-up animate-delay-600 bg-gray-50 hover:bg-gray-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full flex items-center justify-center bg-green-100">
                <i data-lucide="trending-up" class="w-5 h-5 text-green-600"></i>
              </div>
              <h3 class="font-semibold font-sans">Trading Strategies</h3>
            </div>
            <p class="text-sm font-sans text-gray-600">Learn technical analysis, risk management, and proven trading strategies for crypto markets.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>