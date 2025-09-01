<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,Input, InputAddon, ButtonGroup } from "flowbite-svelte";
  import "../../app.css"
</script>

<div class="w-[100vw] h-[100vh] flex flex-col items-center justify-start p-4 bg-black">
    <div class="">
        <ButtonGroup class="w-full">
            <InputAddon>
            <!-- <UserCircleSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" /> -->
             Search
            </InputAddon>
            <Input id="website-admin" placeholder="johndoe" class="w-100"/>
        </ButtonGroup>
    </div>
    <div class="w-full">
        <Table hoverable={true}>
          <TableHead class="bg-gray-900">
            <TableHeadCell>Product</TableHeadCell>
            <TableHeadCell>Name-Waiters</TableHeadCell>
            <TableHeadCell>description</TableHeadCell>
            <TableHeadCell>No</TableHeadCell>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
            <TableHeadCell>
            <span class="sr-only">Edit</span>
            </TableHeadCell>
          </TableHead>
          <TableBody>
            <TableBodyRow class="">
              <TableBodyCell>Apple MacBook Pro 17</TableBodyCell>
              <TableBodyCell>Rahel</TableBodyCell>
              <TableBodyCell>Lorem ipsum dolor sit amet </TableBodyCell>
              <TableBodyCell>Sliver</TableBodyCell>
              <TableBodyCell>Laptop</TableBodyCell>
              <TableBodyCell>$2999</TableBodyCell>
              <TableBodyCell>
                <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
              </TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
    </div>
</div>