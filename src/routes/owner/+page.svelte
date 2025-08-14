<!-- ✅ INI BUAT CONFIG SSR -->
<script context="module">
  export const ssr = false;
</script>

<!-- ✅ INI UNTUK KODE JAVASCRIPT BIASA -->
<script>
  import { House, Store, LayoutDashboard, ChartLine,  Users, ShoppingCart, MessageSquareDot, Book , Siren, Settings, Grid3x3, Search, PiggyBank, BadgeCent, BadgeIndianRupee} from "@lucide/svelte";
  import "../../app.css";
  import Footer from "$lib/component/Footer.svelte";

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
				vertLines: { color: '#eeee' },
				horzLines: { color: 'transparent' }
			},
			timeScale: {
				timeVisible: true,
			}
		});

		const lineSeries = chart.addLineSeries({
			color: '#2196f3',       // biru ombak
			lineWidth: 2,
			lineStyle: 0,           // 0 = solid
			priceLineVisible: false,
			smooth: true            // penting untuk efek "ombak"
		});

		// Data dummy
		lineSeries.setData([
			{ time: '2024-07-01', value: 1000},
			{ time: '2024-07-02', value: 1020},
			{ time: '2024-07-03', value: 1030},
			{ time: '2024-07-04', value: 1040},
			{ time: '2024-07-05', value: 1050},
			{ time: '2024-07-06', value: 1060},
			{ time: '2024-07-08', value: 1070},
			{ time: '2024-07-09', value: 1070},
			{ time: '2024-07-10', value: 1070},
			{ time: '2024-07-11', value: 1070},
			{ time: '2024-07-12', value: 1070},
			{ time: '2024-07-13', value: 1070},
			{ time: '2024-07-14', value: 1070},
			{ time: '2024-07-15', value: 1070},
			{ time: '2024-07-16', value: 1080},
			{ time: '2024-07-17', value: 1081},
			{ time: '2024-07-18', value: 1070}
		]);
	});
</script>


<div class="w-[100vw] h-[100vh] flex bg-black p-4 pr-5">

  <!-- navigasi owner -->
  <div class="w-1/7 h-full bg-black">
    <div class="w-full h-20 flex justify-start items-center px-4">
      <h1 class="text-3xl font-bold text-orange-500 flex gap-2"><Grid3x3 />RESTORANT</h1>
    </div>
    <ul class="w-full h-[90%] flex flex-col justify-between items-start px-4">
      <div class="w-full">
        <div class="w-full">MAIN MANU</div>
        <li class="w-full h-20 my-2 flex justify-start items-center hover:text-white text-gray-500"><a href="/home" class="flex"><House class="mx-2"/>home</a></li>
        <li class="w-full h-20 my-2 flex justify-start items-center hover:text-white text-gray-500"><a href="/dashbord" class="flex"><Store class="mx-2"/>dashbord</a></li>
        <li class="w-full h-20 my-2 flex justify-start items-center hover:text-white text-gray-500"><a href="/layout_home" class="flex"><LayoutDashboard class="mx-2"/>home layout</a></li>
        <li class="w-full h-20 my-2 flex justify-start items-center hover:text-white text-gray-500"><a href="/analisis" class="flex"><ChartLine class="mx-2"/>analisis</a></li>
        <li class="w-full h-20 my-2 flex justify-start items-center hover:text-white text-gray-500"><a href="/users" class="flex"><Users class="mx-2"/>users</a></li>
        <li class="w-full h-20 my-2 flex justify-start items-center hover:text-white text-gray-500"><a href="/products" class="flex"><ShoppingCart class="mx-2"/>products</a></li>
        <li class="w-full h-20 my-2 flex justify-start items-center hover:text-white text-gray-500"><a href="/notification" class="flex"><MessageSquareDot class="mx-2"/>notification</a></li>
        <li class="w-full h-20 my-2 flex justify-start items-center hover:text-white text-gray-500"><a href="/sop" class="flex"><Book class="mx-2"/>sop</a></li>
      </div>
      <div class="w-full gap-2">
       <div class="w-full">SETTINGS</div>
       <li class="w-full my-1 h-20 flex justify-start items-center hover:text-white text-gray-500"><a href="/police" class="flex"><Siren class="mx-2"/>police</a></li>
       <li class="w-full my-1 h-20 flex justify-start items-center hover:text-white text-gray-500"><a href="/settings" class="flex"><Settings class="mx-2"/>settings</a></li>
     </div>
    </ul>
  </div>


  <!-- contet owner -->
   <div class="w-full h-full bg-white text-black rounded-3xl p-2">
    <!-- layer 1 -->
    <div class="w-full h-20 flex justify-between items-center">
      <h1 class="text-4xl font-bold">Dashbord</h1>
      <div class="w-100 h-20 flex justify-evenly items-center">
        <div class="h-15 bg- rounded-full flex justify-start items-center px-2">
          <Search />
          <input type="text" class="w-full h-full outline-0 px-2" placeholder="Search...">
        </div>
        <img src="./favicon.svg" alt="" class="w-15 h-15 object-cover bg-black rounded-full p-1">
      </div>
    </div>

    <!-- layer 2 -->
     <div class="w-full h-52 flex justify-evenly items-center">
      
        <div class="card bg-gray-300 w-96 p-2">
          <div class="card-body flex flex-row">
            <div class="w-20 h-20 bg-black flex rounded-xl">
              <ShoppingCart size={40} class="m-auto text-blue-500"/>
            </div>
            <div class="flex flex-col justify-center items-start">
              <div class="">
                <h1 class="text-2xl">Total Terjual</h1>
                <p class="text-3xl font-bold">Rp:1.000.000.000</p>
              </div>
            </div>
          </div>
          <p class="">total penjuallan hari ini</p>
        </div>
      
        <div class="card bg-gray-300 w-96 p-2">
          <div class="card-body flex flex-row">
            <div class="w-20 h-20 bg-black flex rounded-xl">
              <BadgeCent size={40} class="m-auto text-green-500"/>
            </div>
            <div class="flex flex-col justify-center items-start">
              <div class="">
                <h1 class="text-2xl">Total Terjual</h1>
                <p class="text-3xl font-bold">Rp:1.000.000.000</p>
              </div>
            </div>
          </div>
          <p class="">Rata" penjuallan per hari</p>
        </div>
        
        <div class="card bg-gray-300 w-96 p-2">
          <div class="card-body flex flex-row">
            <div class="w-20 h-20 bg-black flex rounded-xl">
              <BadgeIndianRupee size={40} class="m-auto text-red-500"/>
            </div>
            <div class="flex flex-col justify-center items-start">
              <div class="">
                <h1 class="text-2xl">Total Terjual</h1>
                <p class="text-3xl font-bold">Rp:1.000.000.000</p>
              </div>
            </div>
          </div>
          <p class="">total penjuallan miggu</p>
        </div>
        
          <div class="card bg-gray-300 w-96 p-2">
            <div class="card-body flex flex-row">
              <div class="w-20 h-20 bg-black flex rounded-xl">
                <PiggyBank size={40} class="m-auto text-yellow-500"/>
              </div>
              <div class="flex flex-col justify-center items-start">
                <div class="">
                  <h1 class="text-2xl">Total Terjual</h1>
                  <p class="text-3xl font-bold">Rp:1.000.000.000</p>
                </div>
              </div>
            </div>
            <p class="">total penjuallan per bulan</p>
          </div>

     </div>

     <!-- cart -->
     <div class="w-[95%] h-[75%] bg-black rounded-3xl m-auto" bind:this={chartContainer}></div>

     <!-- pembugkus content -->
   </div>


<!-- pembugkus -->
</div>
<Footer />