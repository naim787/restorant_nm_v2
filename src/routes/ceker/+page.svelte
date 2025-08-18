<script>
  import NavPanel from '$lib/component/Nav_Panel.svelte';
  import { Search, Clock, ClockAlert, UtensilsCrossed, Check, Volume2, VolumeOff } from "@lucide/svelte";
  import { onMount } from "svelte";

  // paused & play
  let isPlaying = false;

  // ✅ Perbaiki format base URL
  const base = import.meta.env.VITE_API_BASE || 'localhost:3001';
  // Remove http:// or https:// if present
  const cleanBase = base.replace(/^https?:\/\//, '');
  let socket;

  let audioEl;
  let search = "";

  let orders = [];

  function parseTime(timeStr) {
    let [day, month, year, hms] = timeStr.split("/");
    let [h, m, s] = hms.split(":");
    return new Date(year, month - 1, day, h, m, s);
  }

  // fungsi untuk cek semua order
  function checkOrders() {
    let now = new Date();
    let anyExpired = false;

    orders.forEach(order => {
      if (order.done) return; // skip kalau sudah selesai
      let orderTime = parseTime(order.time);
      let diff = (now - orderTime) / 1000;
      if (diff > 10) { // batas waktu 10 detik
        anyExpired = true;
      }
    });

    if (anyExpired) {
      if (audioEl.paused) {
        audioEl.loop = true;   // alarm bunyi terus
        audioEl.play().catch(() => {});
      }
    } else {
      if (!audioEl.paused) {
        audioEl.pause();
        audioEl.currentTime = 0;
      }
    }
  }

  // fungsi untuk menandai order selesai
  function finishOrder(index) {
    orders[index].done = true;
  }

  onMount(() => {

    // ✅ Perbaiki WebSocket connection
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    socket = new WebSocket(`${protocol}://${cleanBase}/ws/orders`);

    socket.onopen = () => console.log('✅ WebSocket connected');
    socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
      console.log("✅ WebSocket response:", data);

      if (data.success && data.saved) {
        // tambahkan order baru ke list
        orders = [data.saved, ...orders];
      }
    };
    socket.onerror = (e) => console.error('❌ WebSocket error', e);
    socket.onclose = () => console.log('🔌 WebSocket closed');


    const interval = setInterval(checkOrders, 1000);
    return () => clearInterval(interval);
  });
</script>

<NavPanel />

<div class="w-[100vw] h-[100vh] pt-20 px-10 bg-gray-900 text-white overflow-y-auto">
  <!-- Aktifkan notifikasi manual -->
  <button on:click={() => {audioEl.play().catch(()=>{}); isPlaying ? }} class="bg-green-500 px-4 py-2 rounded mb-4 flex text-black">
    {#if audioEl?.paused}
      <Volume2 class="mx-2"/>
    {:else}
      <VolumeOff />
    {/if}
    Aktifkan Notifikasi
  </button>

  <audio bind:this={audioEl} src="./out.mp3"></audio>

  <div class="grid grid-cols-3 gap-6">
    {#each orders as data, index}
      <div class="bg-gray-950 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <UtensilsCrossed size={22}/> Meja : <span class="text-4xl">{data.table_id}</span>
          </h2>
        </div>
        {#each data.product_orders as d}
        <div class="flex w-[50%] justify-between p-2 border-b border-white/10 text-2xl">
          <p class="text-lg">{d.products_name}</p>
          <p class="text-3xl">{d.value}</p>  
        </div>
        {/each}
        <div class="flex gap-3 mt-4">
          {#if !data.done}
            <button on:click={() => finishOrder(index)} class="flex-1 bg-green-600 hover:bg-green-700 rounded-xl py-2 text-sm">Selesai</button>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>
