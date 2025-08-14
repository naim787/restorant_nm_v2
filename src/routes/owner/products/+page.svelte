<script context="module">
  export const ssr = false;
</script>

<script>
    import {Search} from "@lucide/svelte"
    import DashborCustom from "$lib/component/DashborCustom.svelte";
    import "../../../app.css"

    const base = import.meta.env.VITE_API_BASE || '';
    let menu = [];

    onMount(async () => {
        await loadMenu();
    });

    async function loadMenu() {
        try {
        const res = await fetch(`${base}/menu`);
        if (!res.ok) throw new Error("Failed to fetch menu");

        let data = await res.json();
        menu = data.data;
        } catch (error) {
        console.error("Error fetching menu:", error);
        }
    }

    async function deleteProduct(id) {
        if (!confirm('Yakin ingin menghapus item ini?')) return;

        try {
        const res = await fetch(`${base}/products/${id}`, {
            method: 'DELETE',
        });

        if (!res.ok) throw new Error("Gagal menghapus produk");

        // Hapus dari array menu di frontend
        menu = menu.filter(item => item.id !== id);
        } catch (error) {
        console.error("Error deleting product:", error);
        }
    }

    //   cart statistik
    import { onMount } from 'svelte';
    import { createChart } from 'lightweight-charts';

    let chartContainer;

    onMount(() => {
        const chart = createChart(chartContainer, {
            width: chartContainer.clientWidth,
            height: chartContainer.clientHeight,
            layout: {
                background: { color: 'transparent' },
                textColor: '#eeee'
            },
            grid: {
                vertLines: { color: 'transparent' },
                horzLines: { color: 'transparent' }
            },
            timeScale: {
                timeVisible: true,
            }
        });

        const lineSeries = chart.addAreaSeries({
            color: '#eeee',       // biru ombak
            lineWidth: 2,
            lineStyle: 0,           // 0 = solid
            priceLineVisible: false,
            smooth: true            // penting untuk efek "ombak"
        });

        // Data dummy
        lineSeries.setData([
            { time: '2024-01-01', value: 1000},
            { time: '2024-01-02', value: 1020},
            { time: '2024-01-03', value: 1030},
            { time: '2024-01-04', value: 1040},
            { time: '2024-01-05', value: 1050},
            { time: '2024-01-06', value: 1060},
            { time: '2024-01-08', value: 1070},
            { time: '2024-01-09', value: 1070},
            { time: '2024-01-10', value: 1070},
            { time: '2024-01-11', value: 1070},
            { time: '2024-01-12', value: 1070},
            { time: '2024-01-13', value: 1070},
            { time: '2024-01-14', value: 1070},
            { time: '2024-01-15', value: 1070},
            { time: '2024-01-16', value: 1080},
            { time: '2024-01-17', value: 1081},
            { time: '2024-01-18', value: 10},
            { time: '2024-01-19', value: 15},
            { time: '2024-01-20', value: 15}
        ]);

        chart.timeScale().fitContent();
    });
</script>

<DashborCustom>
    <div slot="a" class="flex justify-between items-center w-full h-full p-2">
        <h1 class="text-2xl font-bold">Products</h1>
        <div class="w-150 h-20 flex flex-row justify-evenly items-center">
            <div class="h-15 w-100 bg-black text-white rounded-full flex justify-start items-center px-2">
            <Search />
            <input type="text" class="w-full h-full outline-0 px-2" placeholder="Search...">
            </div>
            <div class=""><a href="/create-products" class="p-2 bg-green-500 rounded-md  font-bold">Buat Produk Baru</a></div>
        </div>
    </div>

    <div slot="b" class="w-full h-full flex flex-row p-4 gap-3">
       <div class="w-[50%] h-[100%] rounded-3xl">
         <div class="bg-black text-white w-full h-[100%] flex flex-col items-center justify-start">
            <div class="w-full bg-black shadow-lg md:rounded-lg overflow-x-auto ">
                <table class="w-full divide-gray-700 text-sm">
                <thead class="">
                    <tr class="text-left bg-black">
                    <th class="h-10 w-[10px] relative border-4 border-transparent" ><p class="absolute left-0 top-0">NO</p></th>
                    <th class="h-10 w-[30px] relative border-4 border-transparent bg-transparent hidden md:table-cell" ><p class="absolute left-0 top-0">Imge</p></th>
                    <th class="h-10 w-[20px] relative border-4 border-transparent bg-transparent" ><p class="absolute left-0 top-0">Name</p></th>
                    <th class="h-10 w-[20px] relative border-4 border-transparent bg-transparent" ><p class="absolute left-0 top-0">ID</p></th>
                    <th class="h-10 w-[20px] relative border-4 border-transparent bg-transparent hidden md:table-cell" ><p class="absolute left-0 top-0">Type</p></th>
                    <th class="h-10 w-[20px] relative border-4 border-transparent bg-transparent" ><p class="absolute left-0 top-0">Stock</p></th>
                    <th class="h-10 w-[10px] relative border-4 border-transparent bg-transparent" ><p class="absolute left-0 top-0">Edit</p></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-800 bg-gray-900">
                    {#each menu as item, index}
                    <tr class="odd:bg-gray-800 even:bg-gray-900">
                        <td class="px-4 py-4">{index + 1}</td>
                        <td class="hidden md:table-cell">
                        <img src={`${base}${item.image_url}`} alt={item.name} class="w-[50px] h-[50px] object-cover rounded-full" />
                        </td>
                        <td class="px-4 py-4">{item.name}</td>
                        <td class="px-4 py-4">{item.id}</td>
                        <td class="px-4 py-4 hidden md:table-cell">makanan</td>
                        <td class="px-4 py-4">{item.stock}</td>
                        <td class="px-4 py-4 flex gap-2">
                        <button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded ">Edit</button>
                        <button class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded" on:click={() => deleteProduct(item.id)}>Delete</button>
                        </td>
                    </tr>
                    {/each}
                </tbody>
                </table>
            </div>
         </div>
       </div>
       <div class="w-[50%] h-full flex-wrap">
         <div class="w-full h-full bg-black/50 rounded-3xl" bind:this={chartContainer}></div>
       </div>
    </div>

</DashborCustom>