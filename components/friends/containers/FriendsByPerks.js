import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Spinner from '../components/Spinner';
import { FriendEntriesByPerks } from '../queries/friends';

export default function FriendsByPerks({
	children,
	dispatch,
	friends,
	ownerIds,
	perkId,
}) {
	const { data, loading } = useQuery(FriendEntriesByPerks, {
		variables: { id: ownerIds, relatedTo: perkId },
	});

	useEffect(() => {
		if (data && !friends.length) {
			dispatch({
				type: 'UPDATE',
				payload: {
					friends: [...data.alwaysVisibleFriends, ...data.friends],
				},
			});
		}
	});

	if (!friends.length) {
		if (loading) return <Spinner />;
	}

	return children;
}
