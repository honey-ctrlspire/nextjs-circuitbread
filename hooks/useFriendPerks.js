import { QueryClient, useQuery } from 'react-query';

import FetchAPI from '../utils/FetchAPI';
import { GetPerks } from '../queries/friends.js';

export async function getServerSideProps() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery('perks', () =>
		FetchAPI.getAll(GetPerks, { relatedTo: null })
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default function useFriendPerks() {
	const { data } = useQuery('perks', () =>
		FetchAPI.getAll(GetPerks, { relatedTo: null })
	);

	const perks = data && data.data ? data.data.category.perks : [];

	return {
		perks,
	};
}
