import React from 'react';

import { rawMarkup } from '../../utils/helpers';

export default function PerkDescription({ className = '', description }) {
	return (
		<div
			className={className}
			dangerouslySetInnerHTML={rawMarkup(description)}
		/>
	);
}
