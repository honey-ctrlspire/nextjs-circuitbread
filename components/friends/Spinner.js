import React from 'react';

export default function Spinner() {
	return (
		<div className="flex justify-center items-center flex-col lg:flex-row w-full min-h-screen">
			<img
				src="/img/common/icon-spinner.svg"
				className="block mx-auto"
				alt="Loading..."
			/>
		</div>
	);
}
