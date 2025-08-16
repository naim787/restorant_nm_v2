<script>
    import "../../app.css";
    import NavPanel from '$lib/component/Nav_Panel.svelte';
    import { Search, Clock, ClockAlert, CircleAlert, UtensilsCrossed, Check } from "@lucide/svelte";
     import { onMount, tick } from "svelte";

    let audioEl;
    let search = "";

    let orders = [
        {
        product_orders: [
            { products_id: '5115', products_name: 'dagig wahyu', product_price: '5000', value: 5, total: 25000 , status : "pending"},
            { products_id: '4550', products_name: 'pop ice', product_price: '9000', value: 2, total: 18000, status : "pending" },
            { products_id: '7501', products_name: 'sapo tahu', product_price: '16000', value: 8, total: 128000, status : "pending" },
            { products_id: '6059', products_name: 'rahel', product_price: '600', value: 7, total: 4200, status : "pending" },
            { products_id: '8140', products_name: 'CHAIRUN NAIM ABDULLAH', product_price: '9999999', value: 100, total: 999999900, status : "pending"}
        ],
        table_id: 1,
        waiter_name: 'tony',
        time: '16/8/2025/20:21:19',
        total: 1000175100
        }
    ];

    let playAlert = false;

    function parseTime(timeStr) {
        let [day, month, year, hms] = timeStr.split("/");
        let [h, m, s] = hms.split(":");
        return new Date(year, month - 1, day, h, m, s);
    }

    onMount(() => {
        const interval = setInterval(() => {
            let now = new Date();
            orders.forEach(order => {
                let orderTime = parseTime(order.time);
                let diff = (now - orderTime) / 1000; // dalam detik
                if (diff > 5) {
                    playAlert = true;
                    if (audioEl) {
                        audioEl.play();
                    }
                }
            });
        }, 1000); // cek tiap 5 detik

        return () => clearInterval(interval);
    });
</script>

<NavPanel />

<div class="w-[100vw] h-[100vh] pt-20 px-10 bg-gray-900 text-white overflow-y-auto">
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
            <input
            type="text"
            bind:value={search}
            placeholder="Cari pesanan..."
            class="bg-transparent outline-none w-full text-sm"
            />
        </div>
        <div class="text-6xl font-bold ">12:30</div>
    </div>

    <!-- Daftar Pesanan -->
      {#if playAlert}
        <video bind:this={audioEl} src="./ayu_bagun.mp4a" controls width="500" autoplay loop></video>
      {/if}
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
