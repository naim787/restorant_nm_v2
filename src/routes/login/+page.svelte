<!-- +page.svelte (Login Page) -->
<script>
	import "../app.css"
	let email = '';
	let password = '';

	const login = async () => {
		const res = await fetch('http://127.0.0.1:3000/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});

		const result = await res.json();
		alert(result.message || result.error);
		if (res.ok) {
			window.location.href = '/dashboard'; // redirect setelah login
		}
	};
</script>


<div class="w-[100vw] h-[100vh] flex justify-center items-center">
	<div class="w-[50vw] h-auto bg-black rounded shadow p-6">
		<h2 class="text-2xl font-bold mb-4 text-center">Login</h2>
<form on:submit|preventDefault={login} class="space-y-4">
	<div>
		<input
			bind:value={email}
			type="email"
			placeholder="Email"
			class="input input-bordered w-full"
			required />
	</div>
	<div>
		<input
			bind:value={password}
			type="password"
			placeholder="Password"
			class="input input-bordered w-full"
			required />
	</div>
	<button type="submit" class="btn btn-primary w-full">Login</button>
</form>
 </div>
</div>