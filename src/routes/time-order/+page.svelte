<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
  import "../../app.css"
</script>

<div class="w-[100vw] flex justify-center">
    <div class=""></div>
    <div class="w-[60%]">
        <Table hoverable={true}>
          <TableHead class="bg-black">
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
            <TableBodyRow>
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