<script>
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  // import Modal from "./Modal.svelte";

  import {Modal, P } from "flowbite-svelte";

  let defaultModal = $state(false);

  let data = [
    "nasi ayam isi bulu.webp",
    "nasi ayam rempah.webp",
    "nasi campur nusantara.webp",
    "nasi goreg ayam.webp",
    "nasi goreg cakalag.webp",
    "nasi_ayam_goreg_mentega.webp",
    "New Project.webp",
    "rawon.webp",
    "soto ayam.webp",
    "tinutuan.webp"]
</script>


<Modal title="Nama Menu" form bind:open={defaultModal} onaction={({ action }) => alert(`Handle "${action}"`)}>
  {#each data as da}
    <img src={da} alt="" class="rounded-md">
    <p class="font-bold">* list makanan</p>
    <p class="">. sapi</p>
    <p class="">. ayam</p>
    <p class="">. rendag</p>
    {#snippet footer()}
      <Button type="submit" value="success" class="text-black bg-green-400/50 border-none">Pesan</Button>
      <Button type="submit" value="decline" color="alternative">Batal</Button>
    {/snippet}
  {/each}
</Modal>


<div class="space-y-4 m-2">
  {#each data as da }
    <Card img={da}>
      <div class="m-6">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">porsi : 12</p>
        <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">tendo : 15</p>
        <Button onclick={() => (defaultModal = true)} class="w-full bg-amber-600">
          Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
        </Button>
      </div>
    </Card>
  {/each}
</div>