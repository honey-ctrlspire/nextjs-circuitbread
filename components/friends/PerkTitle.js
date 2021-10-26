export default function PerkTitle({
	className = '',
	link,
	title,
	friendSlug,
	perkSlug,
}) {
	return (
		<a
			className="cursor-pointer hover:text-gray-3"
			href={link}
			target="_blank"
			id={`gtm-friend-${friendSlug}-perk-${perkSlug}`}
		>
			<h3 className={className}>
				{title}
				<img
					src="/img/common/icon-external-link.svg"
					className="ml-5 w-9 inline"
				/>
			</h3>
		</a>
	);
}
