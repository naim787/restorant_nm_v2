<script>
  import MenuCard from "./MenuCard.svelte";
  export let filteredData = [];
  export let loadingMenu;
  export let onCardClick;
</script>

{#if loadingMenu}
  {#each Array(7) as _, i}
    <div class="card bg-black w-58 md:w-96 h-40 shadow-sm m-1 flex skeleton"></div>
  {/each}
{:else}
  {#each filteredData as item}
    <MenuCard {item} on:click={() => onCardClick(item)} />
  {/each}
{/if}