<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
  import "../../app.css"
</script>

<div class="w-[100vw] flex justify-center">
    <div class="w-[60%]">
        <Table hoverable={true}>
          <TableHead class="bg-black">
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>No</TableHeadCell>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
            <TableHeadCell>
              <span class="sr-only">Edit</span>
            </TableHeadCell>
          </TableHead>
          <TableBody>
            <TableBodyRow>
              <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
              <TableBodyCell>Sliver</TableBodyCell>
              <TableBodyCell>Laptop</TableBodyCell>
              <TableBodyCell>$2999</TableBodyCell>
              <TableBodyCell>
                <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
              <TableBodyCell>White</TableBodyCell>
              <TableBodyCell>Laptop PC</TableBodyCell>
              <TableBodyCell>$1999</TableBodyCell>
              <TableBodyCell>
                <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
              </TableBodyCell>
            </TableBodyRow>
            <TableBodyRow>
              <TableBodyCell>Magic Mouse 2</TableBodyCell>
              <TableBodyCell>Black</TableBodyCell>
              <TableBodyCell>Accessories</TableBodyCell>
              <TableBodyCell>$99</TableBodyCell>
              <TableBodyCell>
                <a href="/tables" class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a>
              </TableBodyCell>
            </TableBodyRow>
          </TableBody>
        </Table>
    </div>
</div>