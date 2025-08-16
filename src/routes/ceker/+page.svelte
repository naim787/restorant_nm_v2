<script>
    import "../../app.css"
    import NavPanel from '$lib/component/Nav_Panel.svelte';
    import { Search } from "@lucide/svelte";
</script>

<NavPanel />

<div class="w-[100vw] h-[100vh] pt-15">

    <div class="w-full h-30 flex items-center justify-evenly">
       <div class="w-[50%] h-20 shadow bg-gray-950 rounded-xl flex items-center justify-around">
        <div class=""></div>
        <Search />
        <input type="text" name="" id="" class="w-[30%]" />
       </div>
    </div>

</div>