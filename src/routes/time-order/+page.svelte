<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,Input, InputAddon, ButtonGroup, Button, Modal, P } from "flowbite-svelte";
  import "../../app.css";

  let defaultModal = $state(false);

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
              <TableBodyCell>Apple MacBook Pro 17</TableBodyCell>
              <TableBodyCell>Lorem ipsum dolor sit amet </TableBodyCell>
              <TableBodyCell>1</TableBodyCell>
              <TableBodyCell>00:00</TableBodyCell>
              <!-- <TableBodyCell>$2999</TableBodyCell> -->
              <TableBodyCell>
                <Button onclick={() => (defaultModal = true)} class="text-primary-600 dark:text-yellow-500 font-medium hover:underline p-2 rounded-full bg-yellow500/10 border border-yellow-500">LIHAT</Button>

              </TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
    </div>
</div>

<Modal title="Terms of Service" form bind:open={defaultModal} onaction={({ action }) => alert(`Handle "${action}"`)}>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</P>

  {#snippet footer()}
    <Button type="submit" value="success">I accept</Button>
    <Button type="submit" value="decline" color="alternative">Decline</Button>
  {/snippet}
</Modal>