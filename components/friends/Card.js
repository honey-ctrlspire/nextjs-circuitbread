import React from 'react';

export default function Card({ className, children }) {
	return (
		<li
			className={`flex items-center flex-grow-0 flex-shrink ${className}`}
		>
			{children}
		</li>
	);
}
