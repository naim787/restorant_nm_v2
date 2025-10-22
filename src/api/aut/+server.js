import { json } from '@sveltejs/kit'
export async function POST({request, cookies}) {
    const {description} = await request.json()


    console.log(description)
    return json({
		// get a specific field's value
		name: body.get('name') ?? 'world'
	});
}