import { json } from '@sveltejs/kit'
export async function POST({request, cookies}) {
    const {body} = await request.json()


    console.log(body.password)
    return json({
		// get a specific field's value
		name: body
	});
}