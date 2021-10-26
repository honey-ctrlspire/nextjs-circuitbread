import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useRouter } from 'next/router';
import Link from 'next/link';

import FetchAPI from '../../utils/FetchAPI';
import FriendDescription from 'components/friends/FriendDescription';
import FriendDisplayPicture from 'components/friends/FriendDisplayPicture';
import FriendInfoPane from 'components/friends/FriendInfoPane';
import FriendPerks from 'components/friends/FriendPerks';
import Layout from 'components/friends/Layout';
import { GetFriendEntry } from '../../queries/friends.js';

export async function getServerSideProps({ params }) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(params.slug, () =>
		FetchAPI.getByParams(GetFriendEntry, { slug: params.slug })
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

	const { data, isLoading } = useQuery(slug, () =>
		FetchAPI.getByParams(GetFriendEntry, { slug })
	);

	const friend = data ? data.data.entry : null;

	return (
		<Layout title={friend && friend.title} isLoading={false}>
			{friend && (
				<div className="container lg:max-w-960 mx-auto px-15 lg:px-40 lg:py-28">
					<div className="flex items-center mb-25">
						<Link href="/friends">
							<a href="/friends" className="hover:no-underline">
								<img
									src="/img/common/icon-left-arrow.svg"
									className="mr-13 inline"
								/>
								<span className="text-14 text-gray-9">
									All Friends
								</span>
							</a>
						</Link>
					</div>
					<div className="lg:flex">
						<div className="lg:max-w-730 w-full lg:mr-45">
							<div className="w-full">
								<FriendDisplayPicture {...friend} />
								<FriendDescription {...friend} />
								<FriendPerks {...friend} />
								{/* <FriendProducts
									products={friend.products}
									title={friend.title}
									slug={friend.slug}
								/> */}
							</div>
						</div>
						<FriendInfoPane {...friend} />
					</div>
				</div>
			)}
		</Layout>
	);
}
