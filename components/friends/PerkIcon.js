import React from 'react';

export default function PerkIcon({ className, icon, iconClass = '' }) {
	return (
		icon && (
			<div className={className}>
				<img src={icon} className={iconClass} />
			</div>
		)
	);
}
