const apiUrl = 'http://localhost:4000'

export const postLogin = async (email, password) => {
	try {
		const url = `${apiUrl}/v1/login`
		const body = JSON.stringify({
			email,
			password
		})
		const headers = {
			'content-type': 'application/json'
		}
		const method = 'POST'

		const result = await fetch(url, {
			body,
			headers,
			method,
		})

		if (result.ok) {
			return { error: null }
		}

		const err = await result.text()

		return { error: err || "unknown error"}
	} catch (err) {
		return { error: 'Bad connection' }
	}
}
