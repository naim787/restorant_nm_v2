<script>
    import "../../app.css"
    import NavPanel from '$lib/component/Nav_Panel.svelte';
    import { Search } from "@lucide/svelte";
</script>

<NavPanel />

<div class="w-[100vw] h-[100vh] pt-15">

    <div class="w-full h-30 flex items-center justify-evenly">
       <div class="w-[50%] h-20 shadow bg-gray-950 rounded-xl flex items-center justify-between p-2">
        <div class="w-[0%] h-13 bg-gray-900 flex items-center p-3 rounded-xl">
            <Search />
            <input type="text" name="" id="" class="w-full px-1 outline-0" placeholder="Cari Pesanan"/>
        </div>
        <select class="select">
            <option disabled selected>Pick a color</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
        </select>
       </div>
    </div>

</div>