<script>
  import "../../../app.css"
  import SearchBar from "$lib/component/SearchBar.svelte";
  import MenuCard from "$lib/component/MenuCard.svelte";
  import CheckoutDrawer from "$lib/component/CheckoutDrawer.svelte";
  import { onMount } from "svelte";
  import MenuModal from "$lib/component/MenuModal.svelte";
  import Footer from '$lib/component/Footer.svelte';
  import NavPanel from '$lib/component/Nav_Panel.svelte';
  import { page } from '$app/stores';

  // form drawer checkout
  let namaWaiters = "";
  let totalFromDrawer;
  let formNo;
  let formOpsi;

  // ✅ Perbaiki format base URL
  const base = import.meta.env.VITE_API_BASE || 'localhost';
  // Remove http:// or https:// if present
  const cleanBase = base.replace(/^https?:\/\//, '');
  
  // meyimpan subtotal saat ini
  let currentSubtotal = 0;

  // pajak yang akan dikenakan
  const pajak = 10;

  let searchTerm = '';
  let data = [];
  let loadingMenu = true;
  let showModal = false;
  let Value = 1;
  let checkoutData = [];
  let showData = {};
  let socket;

  // ambil data menu saat komponent dimuat pertama kali
  onMount(async () => {
    await loadMenu();

    // ✅ Perbaiki WebSocket connection
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    socket = new WebSocket(`${protocol}://${cleanBase}/ws/orders`);
    
    socket.onopen = () => console.log('✅ WebSocket connected');
    socket.onmessage = (event) => {
      console.log("✅ WebSocket response:", JSON.parse(event.data));
    };
    socket.onerror = (e) => console.error('❌ WebSocket error', e);
    socket.onclose = () => console.log('🔌 WebSocket closed');
  });

  async function loadMenu() {
    try {
      // ✅ Perbaiki URL fetch
      const res = await fetch(`http://${cleanBase}/menu`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      let result = await res.json();
      data = result.data;
    } catch (error) {
      console.error("❌ Error fetching menu:", error);
    } finally {
      loadingMenu = false;
    }
  }

  $: filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // fungsi pesanan
  function Checkout() {
    if (Value >= 1) {
      const checkoutItem = {
        products: showData,
        value: Value,
        subtotal: currentSubtotal,
      };

      checkoutData = [...checkoutData, checkoutItem];
    } else {
      alert("❌ Mohon Pilih Menu Terlebih Dahulu");
    }
    
    showModal = false;
    Value = 1;
  }
  
  // ✅ Perbaiki fungsi checkout - kirim array langsung
  function sendCheckoutData() {
    const now = new Date();
    let tanggal = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    
    // Pakai jam:menit:detik (format 2 digit biar rapi)
    let waktu = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    if (socket && socket.readyState === WebSocket.OPEN && checkoutData.length > 0 ) {
      if ( namaWaiters == "") {
        alert("❌ mohon masukan dulu nama waiters!!")
      } else if(formNo == "" && formOpsi == "RESERVASI" || fo) {

      }
      else {
        // Masukkan total ke setiap objek ordersArray
        const orderArray = checkoutData.map(item => ({
            products_id: item.products.id,
            products_name: item.products.name,
            product_price: item.products.price,
            value : item.value,
            total : item.subtotal,
          }));
          
          // object pembugkus pesanan websoket
          const ordersDone = {
            product_orders : orderArray,
            table_id: formNo,
            waiter_name: namaWaiters,
            time: tanggal +"/"+ waktu,
            status: "pendig",
            total: totalFromDrawer,
          }
  
        
        socket.send(JSON.stringify(ordersDone));
        checkoutData = [];
        // console.log("📤 Sent orders:", ordersDone);
      }
    } else {
      if (!socket || socket.readyState !== WebSocket.OPEN) {
        console.warn("⚠️ WebSocket belum siap. ReadyState:", socket?.readyState);
      }
      if (checkoutData.length === 0) {
        console.warn("⚠️ Tidak ada data untuk dikirim");
      }
    }
  }


  function removeCheckout(i) {
    checkoutData = checkoutData.filter((_, index) => index !== i);
  }

  function handleCloseModal() {
    showModal = false;
    Value = 1;
  }

  function handleValueChange(val) {
    Value = val;
  }
</script>

<NavPanel />

<div class="w-[100vw] h-[100vh] pt-15 bg-linear-to-r from-black to-gray-950">
  <div class="w-full h-20 flex justify-around items-center p-2 bg-black">
    <SearchBar {searchTerm} {loadingMenu} onInput={e => searchTerm = e.target.value} />
    <!-- menu checkout ketika selesai klik tombol menu -->
    <CheckoutDrawer
      {checkoutData}
      {removeCheckout}
      onCheckout={sendCheckoutData}
      on:totalChange={(e) => totalFromDrawer = e.detail}
      on:formName={(e) => namaWaiters = e.detail}
      on:formNo={(e) => formNo = e.detail}
      on:formOpsi={(e) => formOpsi = e.detail}
      />
  </div>

  <div class="w-full h-[80vh] flex flex-wrap justify-evenly items-center overflow-auto gap-2">
    {#if loadingMenu}
      {#each Array(7) as _, i}
        <div class="card bg-black w-58 md:w-96 h-40 shadow-sm m-1 flex skeleton"></div>
      {/each}
    {:else}
    <!-- list menu -->
      {#each filteredData as item (item.id)}
        <MenuCard {item} onClick={() => { showModal = true; showData = item; }} />
      {/each}
    {/if}
  </div>
  
  <!-- highlight product -->
  <MenuModal
    {showModal}
    {showData}
    {pajak}
    {Value}
    onClose={handleCloseModal}
    onCheckout={Checkout}
    onValueChange={handleValueChange}
    on:subtotalChange={(e) => currentSubtotal = e.detail}
  />

  <Footer />
</div>