import React from 'react';

export default function FriendDisplayPicture({
	banner = '',
	title = '',
	subheading = '',
}) {
	banner = Array.isArray(banner)
		? banner.length
			? banner[0].url
			: ''
		: banner;

	return (
		<div
			className={`rounded-xl relative mb-30 h-220 overflow-hidden ${
				!banner ? 'bg-gray-14' : ''
			}`}
		>
			{banner && (
				<img
					src={banner}
					className="rounded-xl object-cover w-full h-full"
				/>
			)}
			<div className="absolute top-0 text-white h-full w-full md:w-3/5 flex flex-col justify-center px-30 items-center md:items-start">
				<h1 className="text-30 md:text-40 mb-8">{title}</h1>
				<p className="font-light uppercase text-15 mb-0">
					{subheading}
				</p>
			</div>
		</div>
	);
}
