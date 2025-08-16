<script>
    import "../../app.css";
    import NavPanel from '$lib/component/Nav_Panel.svelte';
    import { Search, Clock, ClockAlert, CircleAlert, UtensilsCrossed } from "@lucide/svelte";

    let search = "";
    let orders = [
        { id: 1, meja: "1", jumlah: 2, status: "Menunggu" },
        { id: 2, meja: "3", jumlah: 1, status: "Check" },
        { id: 3, meja: "2", jumlah: 4, status: "Check" },
    ];
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
            <CircleAlert class="p-2 text-red-500 bg-red-500/20 rounded-xl mr-3" size={40}/>
            <div class="flex flex-col">
                <h1 class="text-3xl font-bold">1</h1>
                <p class="text-sm">Butuh Perhatian</p>
            </div>
        </div>
    </div>

    <!-- Bagian Cari Pesanan -->
    <div class="flex items-center mt-10 mb-6">
        <div class="flex items-center bg-gray-800 rounded-xl px-4 py-2 w-[30vw]">
            <Search class="text-gray-400 mr-2" size={20}/>
            <input
                type="text"
                bind:value={search}
                placeholder="Cari pesanan..."
                class="bg-transparent outline-none w-full text-sm"
            />
        </div>
    </div>

    <!-- Daftar Pesanan -->
    <div class="grid grid-cols-3 gap-6">
        {#each orders.filter(o => o.meja.toLowerCase().includes(search.toLowerCase())) as order}
            <div class="bg-gray-800 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-xl font-bold flex items-center gap-2">
                        <UtensilsCrossed size={22}/> Meja {order.meja}
                    </h2>
                    <span class="text-sm px-3 py-1 rounded-full
                        {order.status === 'Menunggu' ? 'bg-yellow-500/20 text-yellow-400' :
                        order.status === 'Check' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-red-500/20 text-red-400'}">
                        {order.status}
                    </span>
                </div>
                <p class="text-lg">🍗 Ceker</p>
                <p class="mt-2 text-gray-400">Jumlah: <span class="font-semibold">{order.jumlah}</span></p>

                <div class="flex gap-3 mt-4">
                    <button class="flex-1 bg-green-600 hover:bg-green-700 rounded-xl py-2 text-sm">Sajikan</button>
                    <button class="flex-1 bg-red-600 hover:bg-red-700 rounded-xl py-2 text-sm">Batal</button>
                </div>
            </div>
        {/each}
    </div>
</div>
