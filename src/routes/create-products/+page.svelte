<script>
  import { ArrowLeft } from "@lucide/svelte";
  import "../../app.css";
  import { onMount } from "svelte";
  import { goto } from '$app/navigation';

  const base = import.meta.env.VITE_API_BASE || '';
 
  let formEl;
  let ResponBe;

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(formEl); // otomatis ambil semua input (termasuk file)
    
    
    try {
      const res = await fetch(`http://${base}/create-products`, {
        method: "POST",
        body: formData
      });

      console.log("Status:", res.status); // Debug
      const responseText = await res.text(); // Baca sebagai text dulu
      console.log("Response Text:", JSON.parse(responseText).error); // Debug
      ResponBe = JSON.parse(responseText).error

      if (!res.ok) {
        throw new Error("Gagal kirim data ke server");
      }

      const result = JSON.parse(responseText); // Karena udah baca text
      alert("Produk berhasil dibuat!");
      console.log("result : ",result);

      formEl.reset();
      window.location.href = "/dashbord";
    } catch (err) {
      console.error("ERROR SAAT SUBMIT:", err);
    }

  }

</script>

<div class="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-gray-900">
  <a href="/dashbord" class=""><ArrowLeft size={40} class="p-2 rounded-md bg-gray-400 text-black absolute top-5 left-5"/></a>
  <h1 class="text-3xl mb-5 text-white">Buat Menu Baru</h1>

  <form bind:this={formEl} on:submit={handleSubmit} class="p-4 bg-gray-950 text-white w-full md:w-[50vw] h-[70vh] rounded-3xl flex flex-col justify-evenly items-center">
    
    <input name="name" type="text" class="w-full bg-gray-900 rounded-xl p-2 m-1 md:h-14" placeholder="nama menu" required>
    
    <select name="category" class="w-full select bg-gray-900 md:h-14" required>
      <option value="" disabled selected>Category</option>
      <option value="makanan">Makanan</option>
      <option value="minuman">Minuman</option>
      <option value="lainnya">Lainnya..</option>
    </select>

    <input name="price" type="number" class="w-full bg-gray-900 rounded-xl p-2 m-1 md:h-14" placeholder="Price" required>
    
    <input name="stock" type="number" class="w-full bg-gray-900 rounded-xl p-2 m-1 md:h-14" placeholder="Stock" required>
    
    <input name="image_url" type="file" class="w-full bg-gray-900 rounded-xl p-2 m-1 md:h-14 file-input" required>

    <div class="w-full">
      <label for="description"># Description</label>
    </div>
    <textarea name="description" id="description" class="w-full h-52 bg-gray-900 rounded-xl p-2" required></textarea>

    <input type="hidden" name="admin_id" value="1233">

    <button type="submit" class="w-full h-14 bg-green-500 rounded-xl font-bold text-2xl">Buat</button>
  </form>
</div>

{#if ResponBe}
<div class="w-[100vw] h-20 absolute top-0 flex justify-center items-center">
  <h1 class="bg-red-500/20 text-red-500 m-auto p-2 rounded-xl">{ResponBe}</h1>
</div>
{/if}
