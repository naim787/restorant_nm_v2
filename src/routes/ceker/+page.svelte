<script>
  import NavPanel from '$lib/component/Nav_Panel.svelte';
  import { Search, UtensilsCrossed, Check, AlarmClock, ConciergeBell , X} from "@lucide/svelte";
  import { onMount } from "svelte";

  // fugsi play dan pause audio
  function togglePlay() {
  if (!isPlaying) {
    audioEl.play().then(() => {
      isPlaying = true;
    }).catch(()=>{});
  } else {
    audioEl.pause();
    audioEl.currentTime = 0;
    isPlaying = false;
  }
}


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
      if (order.status === "diantar") return; // skip kalau sudah selesai
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
    // orders[index].done = true;
    const order = orders[index];
    orders[index].status = "diantar";
    socket.send(JSON.stringify(order));
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
        let newOrder = data.saved;
        
        // kalau status masih pending -> update/insert
        if (newOrder.status.includes("p")) {
          // tambahkan data baru di depan
            orders = [newOrder, ...orders];
          } else {
          console.log("aman bro💚");
          // kalau status bukan pending -> hapus dari list
          orders = orders.filter(o => o.id !== newOrder.id);
        }
        
      }
    }

    // socket.onmessage = (event) => {
    // const data = JSON.parse(event.data);
    //   console.log("✅ WebSocket response:", data);

    //   if (data.success && data.saved) {
    //     // tambahkan order baru ke list
    //     orders = [data.saved, ...orders];
    //   }
    // };
    socket.onerror = (e) => console.error('❌ WebSocket error', e);
    socket.onclose = () => console.log('🔌 WebSocket closed');


    const interval = setInterval(checkOrders, 1000);
    return () => clearInterval(interval);
  });
</script>

<NavPanel />

<div class="w-[100vw] h-[100vh] pt-15 px-2 bg-gray-900 text-white overflow-y-auto">
  <!-- Aktifkan notifikasi manual -->
  <!-- <button on:click={togglePlay} class="mb-4 text-black">
    {#if isPlaying}
    <VolumeOff size={40} class="p-2 bg-blue-300 rounded-full"/>
    {:else}
    <Volume2 size={40} class="p-2 bg-blue-300 rounded-full"/>
    {/if}
  </button> -->

  <audio bind:this={audioEl} src="./out.mp3" class="hidden"></audio>

  <!-- filter -->
   <div class="w-full flex justify-evenly items-center gap-2 fixed left-0 bg-gray-900 p-2">
    <div class="font-bold w-[90px] h-[80px] p-2 rounded-md xl:rounded-2xl bg-black border-gray-400 flex items-center text-1xl"><AlarmClock class="text-blue-500"/> : 0</div>
    <div class="font-bold w-[90px] h-[80px] p-2 rounded-md xl:rounded-2xl bg-black border-gray-400 flex items-center text-1xl"><ConciergeBell class="text-orange-500"/> : 0</div>
    <div class="font-bold w-[90px] h-[80px] p-2 rounded-md xl:rounded-2xl bg-black border-gray-400 flex items-center text-1xl"><Check class="text-green-500"/> : 0</div>
    <div class="font-bold w-[90px] h-[80px] p-2 rounded-md xl:rounded-2xl bg-black border-gray-400 flex items-center text-1xl"><X class="text-red-500"/> : 0</div>
   </div>

  <div class="flex flex-col gap-2 justify-center items-start mt-22">
    {#each orders as data, index}
      <div class="bg-gray-950 rounded-2xl p-2 shadow-md hover:scale-[1.02] transition w-auto">
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <UtensilsCrossed size={22}/> Meja : (<span class="">{data.table_id}</span>) <span class="font-thin text-lg">12:30:00</span>
          </h2>
        </div>
        {#each data.product_orders as d}
        <div class="flex w-auto justify-between items-center p-1 border-b border-white/10 text-2xl">
          <div class="text-lg w-[300px] h-auto">
            {d.products_name}
          </div>
          <p class="text-3xl text-green-400">
            {d.value}
          </p>  
        </div>
        {/each}
        <div class="flex gap-3 mt-4">

          {#if data.status !== "diantar"}
            <button on:click={() => finishOrder(index)} class="flex-1 bg-green-600 hover:bg-green-700 rounded-xl py-2 text-sm">Selesai</button>
          {/if}

        </div>
      </div>
    {/each}
  </div>
</div>
