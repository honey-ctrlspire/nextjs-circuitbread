import React from 'react';

import PerkDescription from './PerkDescription';
import PerkIcon from './PerkIcon';
import PerkTitle from './PerkTitle';

export default function FriendPerk({ description, label, link, perk, slug }) {
	let { title, icon, slug: perkSlug } = Array.isArray(perk) ? perk[0] : perk;

	icon = Array.isArray(icon) ? (icon.length ? icon[0].url : '') : icon;

	return (
		<div className="w-full h-full friend-perk">
			<div className="flex bg-white items-center rounded-10 shadow-sm w-full h-full px-20 py-15 lg:py-18 hover:shadow-md cursor-pointer">
				<PerkIcon
					className={`h-full w-1/5 flex justify-start ${
						!description ? 'items-center' : ''
					}`}
					icon={icon}
					iconClass="h-48 w-48"
				/>
				<div className="w-4/5 pl-3">
					<PerkTitle
						className="font-medium text-mineshaft text-18 mb-3 inline"
						title={label ?? title}
						link={link ?? '#'}
						friendSlug={slug}
						perkSlug={perkSlug}
					/>
					<PerkDescription
						className="text-12 text-dustygray m-0"
						description={description}
					/>
				</div>
			</div>
		</div>
	);
}
