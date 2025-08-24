<script>
  import { ArrowLeft, CircleX, ShoppingBasket } from "@lucide/svelte";
  import { onMount, unmount } from "svelte";
  export let checkoutData = [];
  export let removeCheckout;
  export let onCheckout; // <- callback function dari page.svelte
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();


  const base = import.meta.env.VITE_API_BASE || '';
  let total = 0;

  $: total = checkoutData.length >= 1
    ? checkoutData.reduce((acc, item) => acc + item.subtotal, 0)
    : 0;
    
    // kirim total ke parent setiap kali berubah
  $: dispatch("totalChange", total);

  let users;
  let namaWaiters;
    onMount(async () => {
      const res = await fetch(`http://${base}/users`);
      let result = await res.json();
      
      users = result.data
    });

  $: dispatch("waitersChange", namaWaiters);
</script>

{#if checkoutData.length >= 1}
  <div class="drawer drawer-end ml-10">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <label for="my-drawer-4" class="drawer-button btn btn-primary indicator">
        <span class="indicator-item badge badge-secondary">{checkoutData.length}</span>
        <ShoppingBasket />
      </label>
    </div>

    <div class="drawer-side backdrop-blur">
      <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content h-auto w-[90vw] md:w-[30vw] mt-15 flex flex-col justify-center items-center">

        <!-- tombol keluar -->
        <div class="w-full flex justify-between items-center">
          <button class="py-2 px-4 font-bold bg-orange-500 rounded-full" on:click={() => {
            const drawer = document.getElementById('my-drawer-4'); if (drawer) drawer.checked = false;}}>
            <ArrowLeft />
          </button>
          <h1 class="m-auto text-3xl">CheckOut</h1>
      </div>

        <!-- list pesanan -->
        <div class="w-full md:w-[30vw] h-[50vh] flex flex-col justify-start items-center overflow-scroll">
          {#each checkoutData.slice().reverse() as item, index}
            <div class="w-[100%] h-15 border border-red-500 bg-black flex justify-between items-center rounded-full m-1 ">
              <img src={`http://${base}/${item.products.image_url}`} alt="" class="w-16 h-16 object-cover rounded-full">
                <div class="w-full px-2">
                  <h1>{item.products.name}</h1>
                </div>
                <div class="w-full text-cyan-400">
                  <h1>{item.subtotal}</h1>
                </div>
                <div class="w-full">
                  <h1 class="text-green-500 font-bold">{item.value}</h1>
                </div>
              <button type="submit" class="btn bg-transparent border-none" on:click={() => removeCheckout(index)}>
                <CircleX size={30} class="text-red-500" />
              </button>
            </div>
          {/each}
        </div>

        <div class="w-70 md:w-full bg-black rounded-2xl p-3 m-1 md:text-2xl">Total Rp: <span class="text-green-500">{total}</span></div>
        <div class="w-70 md:w-full bg-black rounded-2xl p-3 m-1 md:text-2xl flex">
            <label class="select w-[50%]">
              <span class="label bg-black">Name</span>
              <select bind:value={namaWaiters}>
                {#each users as d}
                <option value={d.name}>{d.name}</option>
                {/each}
              </select>
            </label>
            <label class="select w-[50%]">
              <span class="label bg-black">NO</span>
              <select>
                {#each Array.from({ length: 100 }) as _, i}
  <option>{String(i + 1).padStart(2, '0')}</option>
{/each}

              </select>
            </label>
        </div>
        <div class="w-70 md:w-full bg-black rounded-2xl p-3">
          <p class="">Keterangan :</p>
          <textarea class="bg-white w-full h-30 text-black rounded-2xl p-2" name="" id="">kete</textarea>
        </div>

        <button
          class="btn bg-yellow-500 mt-3 w-80 md:w-full h-15"
          on:click={onCheckout}
        >
          Checkout
        </button>
      </ul>
    </div>
  </div>
{/if}
