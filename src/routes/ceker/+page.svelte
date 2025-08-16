<script>
    import "../../app.css"
    import NavPanel from '$lib/component/Nav_Panel.svelte';
    import { Search, Clock } from "@lucide/svelte";
</script>

<NavPanel />

<div class="w-[100vw] h-[100vh] pt-15">

    <div class="w-full h-30 flex items-center justify-evenly mt-5">
        <div class="w-[13vw] h-[5vw] bg-gray-950 rounded-3xl flex justify-start items-center">
            <Clock class="p-2 bg-yellow-500/30" size={20}/>
        </div>
    </div>

</div>