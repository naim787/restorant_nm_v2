<script>
  import { onMount } from 'svelte';
  const base = import.meta.env.VITE_API_BASE || '';
  let socket;
  let orders = [];

  onMount(() => {
    socket = new WebSocket('ws://10.10.9.27:3001/ws/orders');

    socket.onopen = () => console.log('✅ WebSocket connected');

    socket.onmessage = (event) => {
      console.log("📥 Raw data from WS:", event.data);

      try {
        const data = JSON.parse(event.data);
        console.log("📦 Parsed:", data);

        if (Array.isArray(data)) {
          pushOrders(data);
        } else if (data.orders) {
          pushOrders(Array.isArray(data.orders) ? data.orders : [data.orders]);
        } else if (data.payload) {
          pushOrders(Array.isArray(data.payload) ? data.payload : [data.payload]);
        } else {
          console.log("ℹ️ Unrecognized format:", data);
        }
      } catch (e) {
        console.error("❌ JSON parse error:", e);
      }
    };

    socket.onerror = (e) => console.error('🛑 WebSocket error', e);
    socket.onclose = () => console.log('🔌 WebSocket closed');
  });

  function pushOrders(newOrders) {
    for (const order of newOrders) {
      const parsedProducts = safeParseProduct(order.products);
      orders = [...orders, { ...order, products: parsedProducts }];
    }
    console.log("📋 Total Orders:", orders.length);
  }

  function safeParseProduct(productStr) {
    try {
      return typeof productStr === 'string' ? JSON.parse(productStr) : productStr;
    } catch (e) {
      console.warn("⚠️ Gagal parsing products:", productStr);
      return [];
    }
  }
</script>
<div class="min-h-screen bg-base-100 p-4">
  <h1 class="text-3xl font-bold mb-4">📋 Daftar Pesanan Masuk</h1>

  {#if orders.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each orders as order}
        <div class="card bg-white shadow-md p-4 border border-gray-200">
          <h2 class="text-lg font-semibold mb-2">🧾 Pesanan Baru</h2>

          {#each order.products as item}
            <div class="flex items-center gap-4 mb-2">
              <img src={`${base}${item.image_url}`} alt={item.name} class="w-16 h-16 rounded object-cover" />
              <div>
                <h3 class="text-base font-semibold">{item.name}</h3>
                <p class="text-sm text-gray-500">Harga: Rp {item.price}</p>
                <p class="text-sm text-gray-500">Diskon: {item.discount}%</p>
              </div>
            </div>
          {/each}

          <div class="mt-2 text-sm text-gray-700 border-t pt-2">
            <p><span class="font-medium">Waktu:</span> {order.time || '-'}</p>
            <p><span class="font-medium">Meja:</span> {order.table_id || '-'}</p>
            <p><span class="font-medium">Waiter:</span> {order.waiter_id || '-'}</p>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-gray-500">Belum ada pesanan masuk...</p>
  {/if}
</div>
