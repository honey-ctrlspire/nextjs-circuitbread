import Link from 'next/link';

export default function PerkCards({ perk }) {
	const numberOfCompanies = perk.ownerIds ? Number(perk.ownerIds.length) : 0;

	return (
		<Link href={`/${perk.uri}`}>
			<a
				href={`/${perk.uri}`}
				className={`gtm-${perk.uri.replace(
					'/',
					'-'
				)} flex w-full items-center border-solid border border-gray-20 rounded-md shadow-sm px-20 py-15 h-full hover:no-underline hover:shadow cursor-pointer`}
			>
				<img
					src={perk.friendIcons.length ? perk.friendIcons[0].url : ''}
					className="mr-16 max-h-30"
				/>
				<div>
					<h2 className="font-medium text-mineshaft text-14 m-0">
						{perk.title}
					</h2>
					<p className="text-12 text-dustygray m-0">{`${numberOfCompanies} compan${
						numberOfCompanies > 1 ? 'ies' : 'y'
					}`}</p>
				</div>
			</a>
		</Link>
	);
}
