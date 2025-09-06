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
                <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline p-2 rounded-full bg-red-500/10 border border-red-500">Delete</a>
                
              </TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
    </div>
</div>