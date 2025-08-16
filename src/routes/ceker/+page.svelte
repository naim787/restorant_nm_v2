<script>
    import "../../app.css";
    import NavPanel from '$lib/component/Nav_Panel.svelte';
    import { Search, Clock, ClockAlert, CircleAlert, UtensilsCrossed, Check } from "@lucide/svelte";

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
        time: '16/8/2025/15:58:40',
        total: 1000175100
        }
    ];

    // Fungsi untuk ubah status 1 produk
    function updateStatus(orderIndex, productIndex, newStatus) {
        orders[orderIndex].product_orders[productIndex].status = newStatus;
        orders = [...orders]; // trigger reactivity di Svelte
    }
</script>

<NavPanel />

<div class="w-[100vw] h-[100vh] pt-20 px-10 bg-gray-900 text-white overflow-y-auto">

    <!-- Daftar Pesanan -->
    <div class="grid grid-cols-3 gap-6">
        {#each orders as data, orderIndex}
            <div class="bg-gray-800 rounded-2xl p-6 shadow-md hover:scale-[1.02] transition">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-xl font-bold flex items-center gap-2">
                        <UtensilsCrossed size={22}/> Meja {data.table_id}
                    </h2>
                </div>

                <!-- Produk per meja -->
                {#each data.product_orders as d, productIndex}
                <div class="flex justify-between items-center bg-gray-900 p-3 rounded-xl mb-2">
                  <div>
                    <p class="text-lg font-semibold">{d.products_name}</p>
                    <p class="text-sm text-gray-400">Jumlah: {d.value}</p>
                  </div>

                  <div class="flex gap-2 items-center">
                    <!-- Badge status -->
                    <p class="px-3 py-1 text-xs rounded-full
                        {d.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                         d.status === 'check' ? 'bg-blue-500/20 text-blue-400' :
                         'bg-green-500/20 text-green-400'}">
                        {d.status}
                    </p>

                    <!-- Tombol ubah status -->
                    {#if d.status === "pending"}
                        <button class="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm"
                            on:click={() => updateStatus(orderIndex, productIndex, "check")}>
                            Check
                        </button>
                    {:else if d.status === "check"}
                        <button class="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-lg text-sm"
                            on:click={() => updateStatus(orderIndex, productIndex, "selesai")}>
                            Selesai
                        </button>
                    {/if}
                  </div>
                </div>
                {/each}
            </div>
        {/each}
    </div>
</div>
