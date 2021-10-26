import React from 'react';
import { rawMarkup } from '../../utils/helpers';

export default function FriendDescription({ description }) {
	return description ? (
		<div className="about mb-38">
			<h2 className="flex justify-center md:justify-start text-mineshaft -70 text-27 font-normal mb-20">
				About
			</h2>
			<div
				className="mb-14"
				dangerouslySetInnerHTML={rawMarkup(description)}
			/>
		</div>
	) : (
		''
	);
}
