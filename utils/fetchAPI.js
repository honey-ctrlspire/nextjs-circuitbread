// eslint-disable-next-line no-undef
const graphQLApiUrl = process.env.NEXT_PUBLIC_GRAPHQL_API_URL;
// eslint-disable-next-line no-undef
const token = process.env.NEXT_PUBLIC_GRAPHQL_TOKEN;

export default class FetchAPI {
	static getAll(query) {
		return fetch(graphQLApiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(query),
		}).then((res) => res.json());
		//   .then((result) => console.log(result));
	}

	static getBySlug({ query }, slug) {
		return fetch(graphQLApiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				query,
				variables: { slug },
			}),
		}).then((res) => res.json());
	}
}