<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { CircleX, ShoppingCart} from "@lucide/svelte";

  export let showModal = false;
  export let showData = {};
  // export let pajak = 0;
  export let Value = 1;
  export let onClose;
  export let onCheckout;
  export let onValueChange;

  const base = import.meta.env.VITE_API_BASE || '';
  let subtotal = 0;

  // $: {
  //   const price = parseFloat(showData.price) || 0;
  //   const discount = parseFloat(showData.discount) || 0;
  //   const qty = parseInt(Value) || 1;

  //   const totalMakanan = price * qty;
  //   const totalPajak = (pajak / 100) * totalMakanan;
  //   const totalDiscount = (discount / 100) * totalMakanan;

  //   subtotal = Math.round(totalMakanan + totalPajak - totalDiscount);

  //   dispatch("subtotalChange", subtotal); // 👈 ini dia!
  // }

  $: {
  const price = parseFloat(showData.price) || 0;
  const qty = parseInt(Value) || 1;

  subtotal = Math.round(price * qty); // harga normal tanpa pajak/diskon

  dispatch("subtotalChange", subtotal);
}

</script>

{#if showModal}
  <div class="modal modal-open backdrop-blur-3xl" role="dialog">
      
      <!-- <button class="absolute top-0 right-0 bg-transparent text-red-500" on:click={onClose}>
        <CircleX size={40}/>
      </button>

      <img class="w-[100%] absolute top-0 h-60 object-cover z-[-5]" src={`${base}${showData.image_url}`} alt={showData.name} loading="lazy" />

      <div class="shadow-[0_-50px_40px_-0px_rgba(255,255,255,100)]">
        <div class="p-3 border-b-2 border-dashed border-white mt-[45%]">
          <h3 class="font-bold text-3xl">{showData.name}</h3>
          <h1>pajak : <span class="text-green-500">{pajak}%</span></h1>
          <h1>discount : <span class="text-green-500">{showData.discount}%</span></h1>
          <h1>product : Rp <span class="text-green-500">{showData.price}</span></h1>
        </div>
  
        <h1 class="text-2xl p-3 my-2 border-b-2 border-dashed border-white">Rp: <span class="text-green-500">{subtotal}</span></h1>
  
        <div class="w-full h-20 flex justify-center items-center">
          <div class="p-2 bg-gray-900 rounded-full flex justify-center items-center">
            <button type="button" class="py-2 px-4 bg-red-500 rounded-full"
              on:click={() => onValueChange(Math.max(1, Value - 1))}>-</button>
  
            <div class="mx-2 py-2 px-5">
              <input class="w-15 text-center" type="number" bind:value={Value} min="1"
                on:input={e => onValueChange(Math.max(1, +e.target.value))} />
            </div>
  
            <button type="button" class="py-2 px-4 bg-green-500 rounded-full"
              on:click={() => onValueChange(Value + 1)}>+</button>
          </div>
        </div>
  
        <div class="w-full h-20 flex justify-center items-center">
          <button class="w-60 h-12 rounded-md bg-green-500 flex" on:click={onCheckout}>
            <h1 class="text-2xl m-auto">Checkout</h1>
          </button>
        </div>
      </div> -->

      <article class="rounded-xl bg-black shadow shadow-white/20 modal-box ">
        <button class="absolute top-0 right-0 bg-transparent text-red-500" on:click={onClose}>
          <CircleX size={40}/>
        </button>
      <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <img
            alt=""
            src={`http://${base}/${showData.image_url}`}
            class="size-14 rounded-lg object-cover"
          />

        <div>
          <h3 class="font-medium sm:text-lg">{showData.name}</h3>

          <p class="line-clamp-2 text-sm text-gray-400">{showData.description}</p>

          <div class="mt-2 sm:flex sm:items-center sm:gap-2">
            <div class="flex items-center gap-1 text-gray-500">
              <p class="text-xs">type : {showData.category}</p>
            </div>
          </div>
        </div>
      </div>

        <div class="flex justify-between items-center w-1">
          <div class="p-2 bg-gray-900 rounded-full flex justify-center items-center w-auto">
                  <button type="button" class="py-1 px-3 bg-red-500 rounded-full"
                    on:click={() => onValueChange(Math.max(1, Value - 1))}>-</button>
        
                  <div class="flex justify-center items-center w-[20vw]">
                    <input class="text-2xl font-bold w-full text-center" type="number" bind:value={Value} min="1"
                      on:input={e => onValueChange(Math.max(1, +e.target.value))} />
                  </div>
        
                  <button type="button" class="py-1 px-3 bg-green-500 rounded-full"
                    on:click={() => onValueChange(Value + 1)}>+</button>
          </div>
            <button class="text-[5vw] font-bold py-2 px-4 bg-blue-500 rounded-md" on:click={onCheckout}><ShoppingCart /></button>
        </div>
    </article>
  </div>
{/if}
