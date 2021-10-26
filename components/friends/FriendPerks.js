import React from 'react';

import Card from './Card';
import Cards from './Cards';
import FriendPerk from './FriendPerk';

export default function FriendPerks({ perks, slug }) {
	perks = Array.isArray(perks) ? perks : perks.data;

	return perks.length ? (
		<>
			<h2 className="text-center md:text-left text-mineshaft -70 text-27 font-normal mb-20">
				Perks for CircuitBread Users
			</h2>
			<Cards className="mb-30 -mx-7 items-stretch">
				{perks.map((perk) => {
					return (
						<Card
							key={perk.id}
							className="w-full md:w-1/2 md:flex-basis-1/2 px-7 mb-15 min-h-104x"
						>
							<FriendPerk {...perk} slug={slug} />
						</Card>
					);
				})}
			</Cards>
		</>
	) : (
		''
	);
}
