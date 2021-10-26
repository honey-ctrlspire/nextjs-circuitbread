import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Spinner from '../components/Spinner';
import { FriendEntries } from '../queries/friends';

export default function Friends({ children, dispatch, friends }) {
	const { data, loading } = useQuery(FriendEntries);

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
