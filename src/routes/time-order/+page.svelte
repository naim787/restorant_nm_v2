<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
  import "../../app.css"
</script>

<div class="w-[100vw] flex justify-center">
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
              <TableBodyCell>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellendus explicabo error corrupti eius architecto necessitatibus officiis. Ipsum odit assumenda aspernatur omnis aliquam! Quam quidem labore iusto modi explicabo quis ad ipsam? Quod nulla magnam recusandae accusantium consequuntur animi laudantium dicta cumque repellat reiciendis velit ipsa, veritatis excepturi ea necessitatibus, repellendus commodi ipsum aut dignissimos labore iste fuga quis. Alias in, reiciendis delectus recusandae quo explicabo placeat accusamus quibusdam, dolores facilis magni aperiam iure quisquam sed. Neque impedit, vero et quasi expedita voluptas laborum sed omnis consequatur libero reprehenderit quidem velit optio, animi totam, excepturi quam accusantium. Deserunt, adipisci? Soluta!</TableBodyCell>
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