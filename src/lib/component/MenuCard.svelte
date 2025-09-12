<script>
  import "../../app.css";
  import { Card, Button, Toggle } from "flowbite-svelte";

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

  <Card img={`http://${base}/${item.image_url}`} >
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <Button class="w-40">
        Read more
      </Button>
    </div>
  </Card>
