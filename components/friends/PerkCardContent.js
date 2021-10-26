import React from 'react';

import PerkDescription from './PerkDescription';
import PerkIcon from './PerkIcon';
import PerkTitle from './PerkTitle';

export default function PerkCardContent({ className, content, slug }) {
	let {
		icon,
		title,
		slug: perkSlug,
	} = Array.isArray(content.perk) ? content.perk[0] : content.perk;

	icon = Array.isArray(icon) ? (icon.length ? icon[0].url : '') : icon;

	return (
		<div className={`flex items-start justify-start ${className}`}>
			<PerkIcon
				className="flex justify-center mr-16 w-full min-w-30 max-w-30"
				icon={icon}
				iconClass="h-30"
			/>
			<div>
				<PerkTitle
					className="mb-2 font-medium text-mineshaft text-14"
					title={content.label ?? title}
					link={content.link}
					friendSlug={slug}
					perkSlug={perkSlug}
				/>
				<PerkDescription
					className="text-boulder text-14"
					description={content.description}
				/>
			</div>
		</div>
	);
}
