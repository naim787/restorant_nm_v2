<script>
	import favicon from '$lib/assets/favicon.svg';
    import { onMount } from 'svelte';
	import "../app.css";

	onMount(() => {
		fetch("https://localhost:3001/ferify")
	})

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
