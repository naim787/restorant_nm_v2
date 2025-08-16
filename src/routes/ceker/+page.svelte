<script>
    import "../../app.css";
    import NavPanel from '$lib/component/Nav_Panel.svelte';
    import { onMount } from "svelte";
    import { Search, Clock, ClockAlert, Check, UtensilsCrossed } from "@lucide/svelte";

    let search = "";
    let audioEl;

    let orders = [
        {
            product_orders: [
                { products_id: '5115', products_name: 'dagig wahyu', product_price: '5000', value: 5, total: 25000 , status : "pending"},
                { products_id: '4550', products_name: 'pop ice', product_price: '9000', value: 2, total: 18000, status : "pending" }
            ],
            table_id: 1,
            waiter_name: 'tony',
            time: '16/8/2025/15:20:50', // format dd/mm/yyyy/HH:MM:SS
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
                if (diff > 2) {
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

    <!-- Audio Alert -->
    {#if playAlert}
        <audio bind:this={audioEl} src="/alert.mp3"></audio>
    {/if}

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

    <!-- Daftar Pesanan -->
    <div class="grid grid-cols-3 gap-6">
        {#each orders as data}
            <div class="bg-gray-950 rounded-2xl p-6 shadow-md">
                <h2 class="text-xl font-bold flex items-center gap-2 mb-3">
                    <UtensilsCrossed size={22}/> Meja {data.table_id}
                </h2>
                {#each data.product_orders as d}
                <div class="flex justify-between p-2 border-b border-white/10">
                    <p>{d.products_name}</p>
                    <p>{d.value}</p>
                </div>
                {/each}
            </div>
        {/each}
    </div>
</div>
