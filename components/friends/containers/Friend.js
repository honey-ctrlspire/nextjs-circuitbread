import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import Spinner from '../components/Spinner';
import { FriendEntry } from '../queries/friends';

export default function Friend({
	children,
	dispatch,
	friend,
	match: {
		params: { slug },
	},
}) {
	const { data, loading } = useQuery(FriendEntry, {
		variables: { slug },
	});

	useEffect(() => {
		if (data && !friend) {
			dispatch({
				type: 'UPDATE',
				payload: {
					friend: data.entry,
				},
			});
		}
	});

	if (!friend) {
		if (loading) return <Spinner />;
	}

	return children;
}
