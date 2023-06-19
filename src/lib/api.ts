type method = 'GET' | 'POST' | 'PUT' | 'OPTION' | 'DELETE'

const URL = 'http://localhost/PVA'

export const f = async (path: string, method: method, data: Record<string, string>, headers?: { [key: string]: string }, autoRouting: boolean = true) => {
	var formData = new FormData()
	for (const [key, value] of Object.entries(data)) {
		formData.append(key, value)
	}

	const options = {
		method,
		body: formData,
	}
	const response = await fetch(`${URL}${path}`, options)

	return response.json()
}
