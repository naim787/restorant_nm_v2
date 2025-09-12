<script>
  import { Search } from "@lucide/svelte";
  export let searchTerm;
  export let loadingMenu;
  export let onInput;
</script>

{#if loadingMenu}
  <div class="skeleton w-100 h-10 rounded-md"></div>
{:else}
  <div class="w-92 h-10 rounded-md flex justify-between items-center">
    <input
      type="text"
      class="bg-white w-80 h-10 text-black rounded-md p-2"
      placeholder="Search Menu"
      bind:value={searchTerm}
      on:input={onInput}
    />z
    <Search class="p-2 rounded-r-md bg-yellow-500 text-black" size={40}/>
  </div>
{/if}