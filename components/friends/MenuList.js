import Link from 'next/link';
import { useRouter } from 'next/router';

import useFriendPerks from '../../hooks/useFriendPerks';

export default function MenuList({ onClick }) {
	const router = useRouter();
	const currentPath = router.pathname;

	const { perks } = useFriendPerks();

	return (
		<>
			<div className="border-b border-athensgray mb-20">
				<div className="px-20">
					<ul>
						<li className="my-11 text-14">
							<Link
								href="/friends"
								className={`hover:no-underline ${
									currentPath == '/friends'
										? 'text-crusta font-medium'
										: 'text-gray-3'
								}`}
								onClick={onClick ? () => onClick() : null}
							>
								All Friends
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="px-20">
				<div className="uppercase text-13 text-mineshaft-50 mb-10">
					Browse by Perk
				</div>
				<ul className="">
					<li className="my-11 text-mineshaft-80 text-14">
						<Link
							href="/friends/perks"
							className={`hover:no-underline ${
								currentPath == '/friends/perks'
									? 'text-crusta font-medium'
									: 'text-gray-3'
							}`}
							onClick={onClick ? () => onClick() : null}
						>
							All Perks
						</Link>
					</li>
					{perks.map((perk) => {
						return (
							<li
								key={perk.id}
								className="my-11 text-mineshaft-8 text-14"
							>
								<Link
									href={`/${perk.uri}`}
									className={`hover:no-underline ${
										currentPath == `/${perk.uri}`
											? 'text-crusta font-medium'
											: 'text-gray-3'
									}`}
									onClick={onClick ? () => onClick() : null}
								>
									{perk.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
