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

        <div class="flex justify-between items-center w-[80%]">
          <div class="p-2 bg-gray-900 rounded-full flex justify-center items-center w-auto">
                  <button type="button" class="py-1 px-3 bg-red-500 rounded-full"
                    on:click={() => onValueChange(Math.max(1, Value - 1))}>-</button>
        
                  <div class="flex justify-center items-center w-20">
                    <input class="text-2xl font-bold w-full text-center bg-transparent border-none" type="number" bind:value={Value} min="1"
                      on:input={e => onValueChange(Math.max(1, +e.target.value))} />
                  </div>
        
                  <button type="button" class="py-1 px-3 bg-green-500 rounded-full"
                    on:click={() => onValueChange(Value + 1)}>+</button>
          </div>
            <button class="text-[5vw] font-bold py-2 px-4 rounded-md bg-linear-to-r from-cyan-500 to-blue-500" on:click={onCheckout}><ShoppingCart /></button>
        </div>
    </article>
  </div>
{/if}
