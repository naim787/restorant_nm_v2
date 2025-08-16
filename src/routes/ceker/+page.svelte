<script>
  import { onMount } from "svelte";

  let table_id = 1;
  let waiter_name = "";
  let product_orders = [];
  let product_name = "";
  let product_price = "";
  let value = 1;
  let total = 0;

  // hitung total per produk
  $: total = Number(product_price || 0) * Number(value || 0);

  function addProduct() {
    if (product_name && product_price && value > 0) {
      product_orders = [
        ...product_orders,
        {
          products_id: Date.now().toString(), // sementara pakai timestamp
          products_name: product_name,
          product_price: product_price,
          value,
          total,
          status: "pending"
        }
      ];
      // reset input
      product_name = "";
      product_price = "";
      value = 1;
    }
  }

  async function submitOrder() {
    if (!waiter_name || product_orders.length === 0) {
      alert("Nama waiter dan pesanan tidak boleh kosong!");
      return;
    }

    const now = new Date();
    let time = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}/${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    const order = {
      table_id,
      waiter_name,
      time,
      total: product_orders.reduce((a, b) => a + b.total, 0),
      product_orders
    };

    console.log("📤 Order dikirim:", order);

    // kalau mau dikirim via fetch POST ke backend
    // await fetch("http://localhost:3000/orders", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(order)
    // });

    alert("Pesanan berhasil dicatat ✅");
    product_orders = [];
  }
</script>

<div class="min-h-screen bg-gray-100 flex flex-col items-center p-6">
  <h1 class="text-3xl font-bold mb-6">📝 Ceker (Input Pesanan)</h1>

  <!-- Form utama -->
  <div class="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">No Meja</label>
      <input type="number" bind:value={table_id} class="mt-1 block w-full rounded-xl border-gray-300 shadow-sm p-2" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Nama Waiter</label>
      <input type="text" bind:value={waiter_name} class="mt-1 block w-full rounded-xl border-gray-300 shadow-sm p-2" />
    </div>

    <!-- Input produk -->
    <div class="border-t pt-4 space-y-3">
      <h2 class="font-semibold">Tambah Produk</h2>
      <input type="text" placeholder="Nama Produk" bind:value={product_name} class="block w-full rounded-xl border-gray-300 shadow-sm p-2" />
      <input type="number" placeholder="Harga Produk" bind:value={product_price} class="block w-full rounded-xl border-gray-300 shadow-sm p-2" />
      <input type="number" min="1" placeholder="Jumlah" bind:value={value} class="block w-full rounded-xl border-gray-300 shadow-sm p-2" />

      <p class="text-gray-600">Subtotal: <span class="font-bold">Rp {total}</span></p>

      <button type="button" on:click={addProduct} class="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
        ➕ Tambah ke Pesanan
      </button>
    </div>

    <!-- List produk -->
    {#if product_orders.length > 0}
      <div class="mt-4">
        <h2 class="font-semibold mb-2">Daftar Pesanan</h2>
        <ul class="space-y-2">
          {#each product_orders as p, i}
            <li class="flex justify-between items-center bg-gray-50 p-3 rounded-xl shadow-sm">
              <span>{p.products_name} x {p.value} = Rp {p.total}</span>
              <button on:click={() => (product_orders = product_orders.filter((_, idx) => idx !== i))} class="text-red-500 hover:underline">Hapus</button>
            </li>
          {/each}
        </ul>
      </div>
    {/if}

    <!-- Submit -->
    <button on:click={submitOrder} class="w-full mt-4 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700">
      ✅ Simpan Pesanan
    </button>
  </div>
</div>
