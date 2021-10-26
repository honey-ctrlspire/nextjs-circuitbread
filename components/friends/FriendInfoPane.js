import React from 'react';

export default function FriendInfoPane({
	siteLogo,
	website,
	socialMedia,
	contactInfo,
	usefulLinks,
	slug,
}) {
	socialMedia = Array.isArray(socialMedia) ? socialMedia : socialMedia.data;
	siteLogo = Array.isArray(siteLogo)
		? siteLogo.length
			? siteLogo[0].url
			: ''
		: siteLogo;

	return (
		<div className="w-full lg:w-195">
			<div className="bg-white py-20 min-h-108 rounded-md flex justify-center items-center shadow-sm mb-15 px-15">
				<img src={siteLogo} className="max-h-60" />
			</div>
			<a
				href={website ?? '#'}
				target="_blank"
				className="bg-blue-1 uppercase text-white text-14 flex w-full justify-center rounded-3 py-10 mb-30 hover:no-underline hover:text-white hover:bg-blue-2"
				id={`gtm-friend-${slug}-website`}
			>
				Visit website
			</a>

			{contactInfo && (
				<div className="pb-18 friend-info-card">
					<h4 className="uppercase text-15 text-gray-11-50 mb-11">
						Contact Info
					</h4>
					<p className="text-15 text-gray-12 leading-8 m-0">
						{contactInfo}
					</p>
				</div>
			)}

			{usefulLinks && usefulLinks.length
				? usefulLinks[0].label && (
						<div className="pb-18 friend-info-card">
							<h4 className="uppercase text-15 text-gray-11-50 mb-11">
								Useful Links
							</h4>
							<ul className="text-15 leading-8">
								{usefulLinks.map((link, idx) => {
									return (
										<li key={`usefulLink${idx}`}>
											<a
												href={link.link}
												target="_blank"
												className="flex items-baseline text-gray-12 hover:no-underline hover:text-gray-12"
												id={`gtm-friend-${slug}-useful-link-${
													idx + 1
												}`}
											>
												<span className="hover:dotted-underline">
													{link.label}
												</span>
												<img
													src="/img/common/icon-external-link.svg"
													className="ml-6 w-9"
												/>
											</a>
										</li>
									);
								})}
							</ul>
						</div>
				  )
				: ''}

			{socialMedia.length != 0 && (
				<div className="pb-18 friend-info-card">
					<h4 className="uppercase text-15 text-gray-11-50 mb-20">
						Social Media
					</h4>
					<ul className="m-0 flex items-center">
						{socialMedia.map((media, idx) => {
							return (
								<li
									key={media.id}
									className={`${idx != 0 ? 'ml-17' : ''}`}
								>
									<a
										href={media.socialMediaLink}
										target="_blank"
										id={`gtm-friend-${slug}-social-link-${media.socialMedia}`}
									>
										<img
											className="opacity-45 hover:opacity-80"
											src={`/img/common/icon-${media.socialMedia}.svg`}
										/>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
}
