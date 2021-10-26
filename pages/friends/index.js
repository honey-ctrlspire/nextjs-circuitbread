import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import FetchAPI from '../../utils/FetchAPI';
import { GetFriendEntries } from '../../queries/friends.js';

// import Banner from 'components/friends/Banner';
import Cards from 'components/friends/Cards';
import Card from 'components/friends/Card';
import FriendList from 'components/friends/FriendList';
import FriendListItem from 'components/friends/FriendListItem';
import Layout from 'components/friends/Layout';
import PerkSumCard from 'components/friends/PerkSumCard';

import useFriendPerks from '../../hooks/useFriendPerks';

export async function getServerSideProps() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery('friends', () =>
		FetchAPI.getAll(GetFriendEntries)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export const useFriendsQuery = () =>
	useQuery('friends', () => FetchAPI.getAll(GetFriendEntries));

export default function Friends(props) {
	const { perks } = useFriendPerks();
	const { data, isFetching } = useFriendsQuery();

	const friends =
		data && data.data
			? [...data.data.alwaysVisibleFriends, ...data.data.friends]
			: [];

	return (
		<Layout title={'Friends'} isLoading={false}>
			<div className="container lg:max-w-960 mx-auto sm:px-0 lg:px-40 lg:py-28">
				{/* <Banner /> */}

				<Cards className="mb-32 -mx-7 items-stretch">
					{perks.map((perk) => (
						<Card
							key={perk.id}
							className="w-full sm:w-1/2 md:w-1/4 sm:flex-basis-1/2 md:flex-basis-1/4 px-7 md:max-w-228x h-auto mb-15"
						>
							<PerkSumCard perk={perk} />
						</Card>
					))}
				</Cards>

				<FriendList>
					{friends.map((friend) => (
						<Card
							key={friend.id}
							className="w-full md:w-1/3 md:flex-basis-1/3 mb-15 px-7"
						>
							<FriendListItem friend={friend} />
						</Card>
					))}
				</FriendList>
			</div>
		</Layout>
	);
}
