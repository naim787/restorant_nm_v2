<script>
    import "../../app.css";
	const base = import.meta.env.VITE_API_BASE || '';
	let formData = {
		name: 'tony',
		email: 'naimmmmab@gmail.com',
		password: '123',
		bis_loc: 'jl.matugkas',
		date_loc: '12/07/2025',
		year: '2004'
	};

	let success = '';
	let error = '';

	async function handleSubmit() {
			success = '';
			error = '';

		const res = await fetch(`http://${base}/create-users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(formData)
		});

		const data = await res.json();

		if (res.ok) {
			success = data.message;
			// formData = {
			// 	name: '',
			// 	email: '',
			// 	password: '',
			// 	bis_loc: '',
			// 	date_loc: '',
			// 	year: ''
			// };
			// window.location.href = "/dashbord";
		} else {
			error = data.error || 'Terjadi kesalahan';
		}
	}
</script>

<div class="flex justify-center items-center min-h-screen bg-base-200">
	<div class="card w-full max-w-lg bg-base-100 shadow-xl p-6">
		<h2 class="text-2xl font-bold mb-4 text-center">Create User</h2>

		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<input type="text" class="input input-bordered w-full" bind:value={formData.name} placeholder="Name" required />
			<input type="email" class="input input-bordered w-full" bind:value={formData.email} placeholder="Email" required />
			<input type="text" class="input input-bordered w-full" bind:value={formData.password} placeholder="Password" required />
			<input type="text" class="input input-bordered w-full" bind:value={formData.bis_loc} placeholder="Lokasi Bisnis" />
			<input type="text" class="input input-bordered w-full" bind:value={formData.date_loc} placeholder="Tanggal Lokasi" />
			<input type="text" class="input input-bordered w-full" bind:value={formData.year} placeholder="Tahun" />

			<button type="submit" class="btn btn-primary w-full">Submit</button>
		</form>

		{#if success}
			<div class="alert alert-success mt-4">{success}</div>
		{/if}

		{#if error}
			<div class="alert alert-error mt-4">{error}</div>
		{/if}
	</div>
</div>
