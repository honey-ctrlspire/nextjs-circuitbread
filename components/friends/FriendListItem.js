import Link from 'next/link';

export default function FriendListItem({ friend }) {
	let { badge, uri = '', perks } = friend;

	perks = Array.isArray(perks) ? perks : perks.data;

	const imgUrl = Array.isArray(friend.siteLogo)
		? friend.siteLogo.length
			? friend.siteLogo[0].url
			: ''
		: friend.siteLogo;

	return (
		<div className="w-full h-full border-solid border border-mercury overflow-hidden hover:shadow-md bg-white rounded-10 min-h-80 h-full">
			<Link
				href={`/${uri}`}
				className={`gtm-${uri.replace(
					'/',
					'-'
				)} w-full h-full flex flex-col items-center justify-center hover:no-underline`}
			>
				<div className="flex flex-col justify-center my-auto  lg:p-20x w-full h-full">
					<div className="flex justify-center w-full h-full min-h-65 max-h-80 items-center">
						<div className="max-h-80 py-15 px-40">
							<img src={imgUrl} className="max-h-50" />
						</div>
					</div>
					{badge && (
						<div className="mt-auto w-full bg-athensgray text-center py-8 -mb-1">
							<p className="text-12 text-boulder font-medium capitalize mx-10">
								{badge}
								{perks.length > 1 && (
									<span className="ml-5 text-10 text-dustygray m-0">
										{`+ ${perks.length - 1} Perk${
											perks.length - 1 > 1 ? 's' : ''
										}`}
									</span>
								)}
							</p>
						</div>
					)}
				</div>
			</Link>
		</div>
	);
}
