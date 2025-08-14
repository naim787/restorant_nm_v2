<script>
  import Nav from "$lib/component/Nav_Panel.svelte";
  import "../../app.css";

  import { onMount } from "svelte";
  const base = import.meta.env.VITE_API_BASE || '';
  
  let menu = [];
  let users = [];

  onMount(async () => {
    await loadMenu();
    await loadUsers();
  });

  async function loadMenu() {
    try {
      const res = await fetch(`http://${base}/menu`);
      if (!res.ok) throw new Error("Failed to fetch menu");
      let data = await res.json();
      menu = data.data;
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  }

  async function loadUsers() {
    try {
      const res = await fetch(`http://${base}/users`);
      if (!res.ok) throw new Error("Failed to fetch users");
      let data = await res.json();
      users = data.data;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function deleteItem(id, route) {
    if (!confirm('Yakin ingin menghapus item ini?')) return;

    try {
      const res = await fetch(`${base}/${route}/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error(`Gagal menghapus ${route}`);

      // Hapus dari array menu di frontend
      menu = menu.filter(item => item.id !== id);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
</script>



<Nav />
<div class="bg-gray-950 text-white w-full h-screen flex flex-col xl:flex-row items-center xl:items-start xl:justify-evenly justify-center">

  <div class="w-1/2 bg-black shadow-lg md:rounded-lg overflow-x-auto">
    <div class="w-1/2 mt-20 mb-5"><a href="/create-products" class="p-2 bg-green-500 rounded-md text-black">Buat Produk Baru</a></div>
    <table class="w-full divide-gray-700 text-sm">
      <thead class="">
        <tr class="text-left bg-black">
          <th class="h-10 w-[10px] relative border-4 border-transparent" ><p class="absolute left-0 top-0">NO</p></th>
          <th class="h-10 w-[10px] relative border-4 border-transparent bg-transparent hidden md:table-cell" ><p class="absolute left-0 top-0">Imge</p></th>
          <th class="h-10 w-[20px] relative border-4 border-transparent bg-transparent" ><p class="absolute left-0 top-0">Name</p></th>
          <th class="h-10 w-[20px] relative border-4 border-transparent bg-transparent" ><p class="absolute left-0 top-0">ID</p></th>
          <th class="h-10 w-[20px] relative border-4 border-transparent bg-transparent hidden md:table-cell" ><p class="absolute left-0 top-0">Type</p></th>
          <th class="h-10 w-[20px] relative border-4 border-transparent bg-transparent" ><p class="absolute left-0 top-0">Stock</p></th>
          <th class="h-10 w-[10px] relative border-4 border-transparent bg-transparent" ><p class="absolute left-0 top-0">Edit</p></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-800 bg-gray-900">
        {#each menu as item, index}
          <tr class="odd:bg-gray-800 even:bg-gray-900">
            <td class="px-4 py-4">{index + 1}</td>
            <td class="hidden md:table-cell">
              <img src={`http://${base}/${item.image_url}`} alt={item.name} class="w-[45px] h-[45px] object-cover rounded-full" />
            </td>
            <td class="px-4 py-4">{item.name}</td>
            <td class="px-4 py-4">{item.id}</td>
            <td class="px-4 py-4 hidden md:table-cell">makanan</td>
            <td class="px-4 py-4">{item.stock}</td>
            <td class="px-4 py-4 flex gap-2">
              <button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded ">Edit</button>
              <button class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded" on:click={() => deleteItem(item.id, "products")}>Delete</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>


  <!-- USERS TABLE -->
<div class="w-1/2 bg-black shadow-lg md:rounded-lg overflow-x-auto">
  <div class="w-1/2 mt-20 mb-5">
    <a href="/create-user" class="p-2 bg-green-500 rounded-md text-black">Buat User Baru</a>
  </div>

  <table class="w-full divide-gray-700 text-sm">
    <thead>
      <tr class="text-left bg-black">
        <th class="h-10 px-4">NO</th>
        <th class="h-10 px-4">ID</th>
        <th class="h-10 px-4">Name</th>
        <th class="h-10 px-4">Email</th>
        <th class="h-10 px-4">Password</th>
        <th class="h-10 px-4">Bis. Lokasi</th>
        <th class="h-10 px-4">Tgl Lokasi</th>
        <th class="h-10 px-4">Tahun</th>
        <th class="h-10 px-4">Role</th>
        <th class="h-10 px-4">Aksi</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-800 bg-gray-900">
      {#each users as user, index}
        <tr class="odd:bg-gray-800 even:bg-gray-900">
          <td class="px-4 py-2">{index + 1}</td>
          <td class="px-4 py-2">{user.id}</td>
          <td class="px-4 py-2">{user.name}</td>
          <td class="px-4 py-2">{user.email}</td>
          <td class="px-4 py-2">{user.password}</td>
          <td class="px-4 py-2">{user.bis_loc}</td>
          <td class="px-4 py-2">{user.date_loc}</td>
          <td class="px-4 py-2">{user.year}</td>
          <td class="px-4 py-2">{user.role}</td>
          <td class="px-4 py-2 flex gap-2">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Edit</button>
            <button class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded" on:click={() => deleteItem(user.id, "delete-user")}>Delete</button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

</div>
