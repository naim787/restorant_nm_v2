<script>
  import NavPanel from '$lib/component/Nav_Panel.svelte';
  import { Search, UtensilsCrossed, Check, AlarmClock, ConciergeBell , X} from "@lucide/svelte";
  import { onMount } from "svelte";
  
  const base = import.meta.env.VITE_API_BASE || 'localhost:3001';
  const cleanBase = base.replace(/^https?:\/\//, '');
  let socket;
  const EXPIRED_LIMIT = 10; // detik


  let isPlaying = false;

  // meggecek waktu
  function isExpired(order) {
    if (!order?.time) return false;
    const orderTime = parseTime(order.time);
    const now = new Date();
    const diff = (now - orderTime) / 1000;
    return diff > EXPIRED_LIMIT;
  }

  // audio
  let audioEl;

  // orderan
  let orders = [];

  // filtered order

  $: orderExpired = orders.filter(o => o.status.startsWith("p") && isExpired(o));
  $: orderPend = orders.filter(o => o.status.startsWith("p"));
  $: orderDone = orders.filter(o => o.status.startsWith("d"));
  $: orderCancel = orders.filter(o => o.status.startsWith("c"));



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

  // fungsi untuk menandai orderan
  function actionOrder(index, status) {
    // orders[index].done = true;
    const order = orders[index];
    orders[index].status = status;
    socket.send(JSON.stringify(order));
  }

  // fugsi untuk meggambil order 
  async function allOders() {
    try {
      const res = await fetch(`http://${cleanBase}/orders`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const result = await res.json();

      // Filter hanya order yang status-nya "pending"
      orders = result.data.filter(order => order.status === "pendig");

    } catch (error) {
      console.error("❌ Error fetching orders:", error);
    }
}


  onMount(async () => {
    await allOders()
    // ✅ Perbaiki WebSocket connection
    const protocol = await window.location.protocol === 'https:' ? 'wss' : 'ws';
    socket = await new WebSocket(`${protocol}://${cleanBase}/ws/orders`);

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

    socket.onerror = (e) => console.error('❌ WebSocket error', e);
    socket.onclose = () => console.log('🔌 WebSocket closed');


    const interval = setInterval(checkOrders, 1000);
    return () => clearInterval(interval);
  });
</script>

<NavPanel />

<div class="w-[100vw] h-[100vh] pt-15 px-2 bg-gray-900 text-white overflow-y-auto">

  <audio bind:this={audioEl} src="./out.mp3" class="hidden"></audio>

  <!-- filter -->
   <div class="w-full flex justify-evenly items-center gap-2 fixed left-0 bg-gray-900 p-2">
    <div class="font-bold w-[90px] h-[70px] p-2 rounded-md xl:rounded-2xl bg-black border-gray-400 flex items-center text-1xl"><AlarmClock class="text-blue-500"/> : {orderPend.length}</div>
    <div class="font-bold w-[90px] h-[70px] p-2 rounded-md xl:rounded-2xl bg-black border-gray-400 flex items-center text-1xl"><ConciergeBell class="text-orange-500"/> : {orderExpired.length}</div>
    <div class="font-bold w-[90px] h-[70px] p-2 rounded-md xl:rounded-2xl bg-black border-gray-400 flex items-center text-1xl"><Check class="text-green-500"/> : {orderDone.length}</div>
    <div class="font-bold w-[90px] h-[70px] p-2 rounded-md xl:rounded-2xl bg-black border-gray-400 flex items-center text-1xl"><X class="text-red-500"/> : {orderCancel.length}</div>
   </div>

  <div class="flex flex-wrap gap-2 justify-start items-start mt-22 md:mt-30">
    {#each orders as data, index}
     <!-- {#each orders.filter(o => o.status === "pending") as data, index} -->

      <div class="bg-black rounded-2xl p-3 shadow-md hover:scale-[1.02] transition w-[340px] h-auto">
        <div class="flex justify-between items-center mb-3">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <UtensilsCrossed size={22}/> Meja : (<span class="">{data.table_id}</span>) <span class="font-thin text-lg">12:30:00</span>
          </h2>
        </div>
        {#each data.product_orders as d}
        <div class="flex w-[150px] justify-between items-center p-1 border-b border-white/10 text-2xl">
          <div class="text-lg w-auto h-auto">
            {d.products_name}
          </div>
          <p class="text-3xl text-green-400">
            {d.value}
          </p>  
        </div>
        {/each}
        <div class="flex gap-3 mt-4">

          {#if data.status !== "diantar"}
            <button on:click={() => actionOrder(index, "diantar")} class="flex-2 bg-green-600 hover:bg-green-700 rounded-xl py-2 text-sm">Selesai</button>
            <button on:click={() => actionOrder(index, "cancel")} class="flex-1 bg-red-600 hover:bg-red-700 rounded-xl py-2 text-sm">Cencel</button>
          {/if}

        </div>
      </div>
    {/each}
  </div>
</div>
