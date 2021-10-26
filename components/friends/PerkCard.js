import React from 'react';
import Link from 'next/link';

import Card from './Card';
import PerkCardContent from './PerkCardContent';

export default function PerkCard({
	friend: { id, perks, siteLogo, uri, slug },
}) {
	siteLogo = Array.isArray(siteLogo)
		? siteLogo.length
			? siteLogo[0].url
			: ''
		: siteLogo;

	perks = Array.isArray(perks) ? perks : perks.data;

	return (
		<Card key={id} className="w-full mb-15">
			<div className="lg:flex w-full items-center border-solid border border-mercury rounded-10 pb-20 pt-0 lg:py-26 px-15 lg:px-35 bg-white hover:shadow-md">
				<Link
					href={`/${uri}`}
					className={`gtm-${uri.replace(
						'/',
						'-'
					)} flex justify-center w-full lg:max-w-250 py-22 hover:no-underline`}
				>
					<img src={siteLogo} className="mr-16 max-h-60 max-w-250" />
				</Link>
				<div className="border-solid border-t lg:border-t-0 lg:border-l border-gray-15 pt-20 lg:py-9 w-full pl-32 ml-auto">
					{perks.map((perk, idx) => (
						<PerkCardContent
							className={`${
								perks.length != idx + 1 ? 'mb-20' : ''
							}`}
							content={perk}
							key={perk.id}
							slug={slug}
						/>
					))}
				</div>
			</div>
		</Card>
	);
}
