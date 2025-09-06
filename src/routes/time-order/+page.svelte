<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,Input, InputAddon, ButtonGroup, Button, Modal, P } from "flowbite-svelte";
  import "../../app.css";
  import { onMount } from "svelte";


  // ✅ Perbaiki format base URL
  const base = import.meta.env.VITE_API_BASE || 'localhost';
  const cleanBase = base.replace(/^https?:\/\//, '');

  let defaultModal = $state(false);


  // data orderan
  let data;

  onMount(async () => {
     try {
      // ✅ Perbaiki URL fetch
      const res = await fetch(`http://${cleanBase}/menu`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      let result = await res.json();
      data = result.data;
    } catch (error) {
      console.error("❌ Error fetching menu:", error);
    }
  });
</script>

<div class="w-[100vw] h-[100vh] flex flex-col items-center justify-start p-4 bg-black">
    <div class="">
        <ButtonGroup class="w-full">
            <InputAddon class="">
            <!-- <UserCircleSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" /> -->
             Search
            </InputAddon>
            <Input id="website-admin" placeholder="johndoe" class="w-80 bg-gray-900 text-white"/>
        </ButtonGroup>
    </div>
    <div class="w-full p-2">
        <Table hoverable={true} >
          <TableHead class="bg-gray-900 text-white">
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Product</TableHeadCell>
            <TableHeadCell>description</TableHeadCell>
            <TableHeadCell>Table</TableHeadCell>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
            <!-- <TableHeadCell>
            <span class="sr-only">Edit</span>
            </TableHeadCell> -->
          </TableHead>
          <TableBody>
            <TableBodyRow class="bg-gray-600 text-white hover:bg-tranparent">
              <TableBodyCell>Rahel</TableBodyCell>
              <TableBodyCell>
                <Button onclick={() => (defaultModal = true)} class="text-yellow-600 dark:text-yellow-500 font-medium p-2 rounded-full bg-yellow-500/10 border border-yellow-500 hover:bg-yellow-500/20">LIHAT</Button>

              </TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
    </div>
</div>

<Modal form bind:open={defaultModal} onaction={({ action }) => alert(`berhasil men ${action}`)} class="bg-black text-white">

  <h1 class="text-2xl mb-[2vh]">Lorem ipsum dolor sit amet.</h1>
  

  <p class="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus dolor quia dolorum neque aliquid, magnam at fuga. Aspernatur quidem dicta cumque libero ad ducimus distinctio odit ipsam minus vel obcaecati perspiciatis quod, necessitatibus numquam minima laborum qui exercitationem ea, voluptas blanditiis. Sed, tempore. Non recusandae nulla nobis quia eum similique labore quo assumenda sint ex. Nisi aliquam nemo voluptatibus expedita?</p>
  {#snippet footer()}
    <Button type="submit" value="hapus">Hapus</Button>
  {/snippet}
</Modal>