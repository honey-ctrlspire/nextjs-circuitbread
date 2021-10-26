import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useRouter } from 'next/router';

import Cards from 'components/friends/Cards';
import Layout from 'components/friends/Layout';
import PerkCard from 'components/friends/PerkCard';
import FetchAPI from '../../../utils/FetchAPI';
import { GetFriendEntriesByPerks } from '../../../queries/friends.js';

export async function getServerSideProps({ params: { slug } }) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(`perks-${slug}`, () =>
		FetchAPI.getByParams(GetFriendEntriesByPerks, { slug })
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default function Friend() {
	const router = useRouter();
	const { slug } = router.query;

	const { data, isLoading } = useQuery(`perks-${slug}`, () =>
		FetchAPI.getByParams(GetFriendEntriesByPerks, { slug })
	);

	console.log(data);
	const friends = [];

	// const friends =
	// 	data && data.data
	// 		? [...data.data.alwaysVisibleFriends, ...data.data.friends]
	// 		: [];

	// const title = perk ? perk.title : 'All Perks';
	const title = 'All Perks';

	return (
		<Layout title={title} isLoading={false}>
			<div className="container lg:max-w-960 mx-auto sm:px-0 lg:px-40 lg:py-28">
				<h1 className="text-27 text-gray-3 font-normal opacity-70 mb-20">
					{title}
				</h1>
				<Cards className="py-20">
					{friends.map((friend) => (
						<PerkCard {...friend} key={friend.id} />
					))}
				</Cards>
			</div>
		</Layout>
	);
}
