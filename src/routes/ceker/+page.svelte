<script>
  import { onMount } from "svelte";

  let audioEl;
  let allowPlay = false; // awalnya belum boleh play
  let notified = false; // biar gak play berulang

  // contoh data order (real nanti dari API)
  let order = {
    products_name: "Ceker Mercon",
    orderTime: new Date().getTime(), // simpan timestamp pesanan dibuat
  };

  // aktifkan izin audio saat user klik 1x
  function enableSound() {
    allowPlay = true;
    if (audioEl) {
      audioEl.play().catch(() => {});
    }
  }

  onMount(() => {
    const interval = setInterval(() => {
      if (!allowPlay || notified) return;

      const now = new Date().getTime();
      const diff = (now - order.orderTime) / 1000; // dalam detik

      // disini ganti threshold sesuai kebutuhan (2 detik untuk testing, 1800 detik = 30 menit real)
      if (diff > 2) {
        audioEl.play().catch(() => {});
        notified = true;
        alert(`Pesanan ${order.products_name} sudah waktunya diantar!`);
      }
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<NavPanel />
<div class="w-[100vw] h-[100vh] pt-20 px-10 bg-gray-900 text-white overflow-y-auto">
    <!-- Tombol aktifkan sound -->
    <button on:click={enableSound} class="bg-green-500 text-white px-4 py-2 rounded mb-4">
      Aktifkan Notifikasi
    </button>
    <!-- Bagian Atas: Statistik -->
    <div class="w-full flex items-center justify-evenly mt-5">
        <div class="w-[13vw] h-[5vw] bg-gray-950 rounded-3xl flex justify-start items-center p-4 shadow-md">
            <Clock class="p-2 text-yellow-500 bg-yellow-500/20 rounded-xl mr-3" size={40}/>
            <div class="flex flex-col">
                <h1 class="text-3xl font-bold">1</h1>
                <p class="text-sm">Menunggu...</p>
            </div>
        </div>
        <div class="w-[13vw] h-[5vw] bg-gray-950 rounded-3xl flex justify-start items-center p-4 shadow-md">
            <ClockAlert class="p-2 text-red-500 bg-red-500/20 rounded-xl mr-3" size={40}/>
            <div class="flex flex-col">
                <h1 class="text-3xl font-bold">1</h1>
                <p class="text-sm">Pesanan Check</p>
            </div>
        </div>
        <div class="w-[13vw] h-[5vw] bg-gray-950 rounded-3xl flex justify-start items-center p-4 shadow-md">
            <Check class="p-2 text-green-500 bg-green-500/20 rounded-xl mr-3" size={40}/>
            <div class="flex flex-col">
                <h1 class="text-3xl font-bold">1</h1>
                <p class="text-sm">Selesai</p>
            </div>
        </div>
    </div>

    
    <!-- Bagian Cari Pesanan -->
    <div class="flex items-center mt-10 mb-6 w-full justify-between">
        <div class="flex items-center bg-gray-800 rounded-xl px-4 py-2 w-[30vw]">
            <Search class="text-gray-400 mr-2" size={20}/>
            <input type="text" placeholder="Cari pesanan..." class="bg-transparent outline-none w-full text-sm" />
        </div>
        <div class="text-6xl font-bold ">12:30</div>
    </div>

    <!-- Daftar Pesanan -->
      {#if playAlert}
        <audio bind:this={audioEl} src="./out.mp3" class="" controls width="500" autoplay></audio>
    <div class="grid grid-cols-3 gap-6">
        <!-- <audio src="musik.mp3" controls></audio> -->


        {#each orders as data, index}
            <div class="bg-gray-950 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-xl font-bold flex items-center gap-2">
                        <UtensilsCrossed size={22}/> Meja : <span class="text-4xl">{data.table_id}</span>
                    </h2>
                    <div class="flex items-center justify-center">
                        <span class="text-sm px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400"><Clock /></span>
                        <h1 class="">15:30</h1>
                    </div>
                </div>
                {#each data.product_orders as d, i}
                <div class="flex w-[50%] justify-between p-2 border-b border-white/10 text-2xl">
                  <p class="text-lg">{d.products_name}</p>
                  <p class="text-3xl">{d.value}</p>  
                </div>
                {/each}
                <div class="flex gap-3 mt-4">
                    <button class="flex-1 bg-green-600 hover:bg-green-700 rounded-xl py-2 text-sm">Selesai</button>
                    <button class="flex-1 bg-red-600 hover:bg-red-700 rounded-xl py-2 text-sm">Batal</button>
                </div>
            </div>
        {/each}

    </div>

</div>
