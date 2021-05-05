import React from 'react';
import Image from 'next/image'

export default function Chevron({ className }) {
	return (
		<Image
			src="/img/common/icon-chevron.svg"
			className={className}
			height={5}
			width={10}
			alt='Chevron Right Icon'
		/>
	)
}