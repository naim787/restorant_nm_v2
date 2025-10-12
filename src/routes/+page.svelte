<script>
	import LockSolid from './../../node_modules/flowbite-svelte-icons/dist/LockSolid.svelte';
    import { Label, Input, InputAddon, ButtonGroup } from "flowbite-svelte";

    let ps = '';
    
    async function Verivication() {
     	try {
			const res = await fetch("http://localhost:3001/passwordResto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password: ps })
        
      });
      const data = await res.json();
      console.log("Server response:", data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
</script>


<div class="w-[100vw] h-[100vh] bg-gray-200 flex justify-center items-center flex-col">
    <div class="w-[400px] h-auto bg-white mb-6 p-3 rounded-md shadow-2xl">
      <Label for="website-admin" class="mb-2 block text-2xl font-bold">PASSWORD</Label>
      <ButtonGroup class="w-full">
        <InputAddon>
         <LockSolid class="shrink-0 h-6 w-6" />
        </InputAddon>
        <Input id="website-admin" placeholder="password" bind:value={ps} />
      </ButtonGroup>
      <button type="button" class="my-2 w-full h-12 bg-amber-400 rounded-md font-bold" on:click={Verivication}>kirim</button>
    </div>
</div>