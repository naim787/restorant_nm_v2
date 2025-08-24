<script>
  export let item;
  export let onClick;
  const base = import.meta.env.VITE_API_BASE || '';
</script>
<!-- 
<div class="card bg-base-100 image-full w-72 h-42 shadow-sm m-2">
  <figure>
    <img src={`${base}${item.image_url}`} alt={item.name} loading="lazy" class="w-full h-full object-cover">
  </figure>
  <div class="card-body">
    <h2 class="card-title text-2xl">{item.name}</h2>
    <p>{item.description}</p>
    <div class="card-actions justify-end">
       <div class="card-actions justify-end">
      <button class="btn bg-green-500 text-black" on:click={onClick}>
        Rp: <span>{item.price}</span>
      </button>
    </div>
    </div>
  </div>
</div> -->

<div class="card bg-base-100 w-90 shadow-sm h-auto">
  <figure>
    <img class="w-full h-60 object-cover" src={`http://${base}/${item.image_url}`} alt={item.name} loading="lazy" />
  </figure>
  <div class="p-5">
    <h2 class="card-title text-3xl uppercase">{item.name}</h2>
    <div class="rating">
      <div class="mask mask-star" aria-label="1 star"></div>
      <div class="mask mask-star" aria-label="2 star"></div>
      <div class="mask mask-star" aria-label="3 star" aria-current="true"></div>
      <div class="mask mask-star" aria-label="4 star"></div>
      <div class="mask mask-star" aria-label="5 star"></div>
    </div>
    <div class="w-full flex justify-between items-center">
      <p class="text-1xl">Rp: {item.price}</p>
      <div class="card-actions justify-end">
        <button class="btn bg-green-500 text-black uppercase" on:click={onClick}>pesan</button>
      </div>
    </div>
  </div>
</div>
