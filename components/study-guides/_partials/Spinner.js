import React from 'react';

export default function Spinner() {
	return (
		<div className="flex content-center items-center flex-col lg:flex-row w-full" style={{ minHeight: 'inherit' }}>
			<img src="/img/common/icon-spinner.svg" className="mx-auto" alt="Loading..." />
		</div>
	)
}