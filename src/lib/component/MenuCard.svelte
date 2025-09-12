<script>
  import "../../app.css";
  import { Card, Button, Rating, Badge } from "flowbite-svelte";

  export let item;
  export let onClick;
  const base = import.meta.env.VITE_API_BASE || '';
</script>

<div class="card bg-base-100 w-70 shadow-sm h-auto">
  <figure>
    <img class="w-full h-60 object-cover" src={`http://${base}/${item.image_url}`} alt={item.name} loading="lazy" />
  </figure>
  <div class="p-5 bg-gray-900 rounded-b-xl">
    <div class="flex items-start h-20">
      <h2 class="card-title text-3xl uppercase">{item.name}</h2>
    </div>
    <div class="w-full flex justify-between items-center">
      <p class="text-2xl">Rp: <span class="text-yellow-400">{item.price}</span></p>
      <div class="card-actions justify-end">
        <button class="btn bg-green-500 text-black uppercase" on:click={onClick}>pesan</button>
      </div>
    </div>
  </div>
</div>

  <Card class="p-0 bg-gray-900 text-white">
    <a href="/" class="w-full h-50">
      <img class="rounded-t-lg w-full h-50 object-cover" src={`http://${base}/${item.image_url}`} alt="product 1" />
    </a>
  <div class="px-5 pb-5">
    <h5 class="text-3xl font-bold font-semibold tracking-tight dark:text-white mt-8">{item.name}
    <Rating rating={5} size={24} class="mb-5">
      {#snippet text()}
        <Badge class="ms-3">5</Badge>
      {/snippet}
    </Rating>
    <div class="flex items-center justify-between bg-green-500 p-2">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      <button class="btntext-[25px] bg-green-900 text-white p-2 rounded-xl" on:click={onClick}>pesan</button>
    </div>
  </div>
</Card>
