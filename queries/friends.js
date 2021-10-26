export const GetFriendEntries = {
	query: `
		query FriendEntries {
			alwaysVisibleFriends: entries(
				section: "friends"
				type: "friend"
				alwaysVisible: true
				orderBy: "title asc"
			) {
				id
				slug
				uri
				title
				... on friends_friend_Entry {
					website: friendWebsite
					subheading: friendSubheading
					description: friendDescription
					banner: friendBanner {
						url
					}
					siteLogo: friendSiteLogo {
						url
					}
					perks: friendPerks {
						... on friendPerks_BlockType {
							id
							label
							description
							link: freebieLink
							perk(level: 2) {
								id
								title
								slug
								... on friends_Category {
									icon: friendIcons {
										url
									}
								}
							}
						}
					}
					products: friendProducts {
						... on friendProducts_BlockType {
							id
							productLink
							product {
								title
								url
							}
						}
					}
					contactInfo: friendContactInfo
					badge: friendBadgeOverview
					socialMedia: friendSocialMedia {
						... on friendSocialMedia_BlockType {
							id
							socialMedia
							socialMediaLink
						}
					}
					usefulLinks: friendUsefulLinks {
						label
						link
					}
				}
			}
			friends: entries(
				section: "friends"
				type: "friend"
				alwaysVisible: false
				orderBy: "title asc"
			) {
				id
				slug
				uri
				title
				... on friends_friend_Entry {
					website: friendWebsite
					subheading: friendSubheading
					description: friendDescription
					banner: friendBanner {
						url
					}
					siteLogo: friendSiteLogo {
						url
					}
					perks: friendPerks {
						... on friendPerks_BlockType {
							id
							label
							description
							link: freebieLink
							perk(level: 2) {
								id
								title
								slug
								... on friends_Category {
									icon: friendIcons {
										url
									}
								}
							}
						}
					}
					products: friendProducts {
						... on friendProducts_BlockType {
							id
							productLink
							product {
								title
								url
							}
						}
					}
					contactInfo: friendContactInfo
					badge: friendBadgeOverview
					socialMedia: friendSocialMedia {
						... on friendSocialMedia_BlockType {
							id
							socialMedia
							socialMediaLink
						}
					}
					usefulLinks: friendUsefulLinks {
						label
						link
					}
				}
			}
		}
	`,
};

export const GetFriendEntry = {
	query: `
		query FriendEntry($slug: [String]) {
			entry(section: "friends", type: "friend", slug: $slug) {
				id
				slug
				uri
				title
				... on friends_friend_Entry {
					website: friendWebsite
					subheading: friendSubheading
					description: friendDescription
					banner: friendBanner {
						url
					}
					siteLogo: friendSiteLogo {
						url
					}
					perks: friendPerks {
						... on friendPerks_BlockType {
							id
							label
							description
							link: freebieLink
							perk(level: 2) {
								id
								title
								slug
								... on friends_Category {
									icon: friendIcons {
										url
									}
								}
							}
						}
					}
					products: friendProducts {
						... on friendProducts_BlockType {
							id
							link: productLink
							product {
								title
								url
							}
						}
					}
					contactInfo: friendContactInfo
					socialMedia: friendSocialMedia {
						... on friendSocialMedia_BlockType {
							id
							socialMedia
							socialMediaLink
						}
					}
					usefulLinks: friendUsefulLinks {
						label
						link
					}
				}
			}
		}
	`,
};

export const GetPerks = {
	query: `
		query Perk {
			category(
				group: "friends"
				slug: "perks"
			) {
				id
				title
				perks:children {
					id
					slug
					title
					uri
					url
					...on friends_Category {
						friendIcons {
							url
						}
					}
				}
			}
		}
	`,
};

export const GetFriendEntriesByPerks = {
	query: `
		query FriendEntriesByPerks(
			$id: [QueryArgument]
			$relatedTo: [QueryArgument]
		) {
			alwaysVisibleFriends: entries(
				id: $id
				section: "friends"
				type: "friend"
				alwaysVisible: true
				orderBy: "title asc"
			) {
				id
				slug
				uri
				title
				... on friends_friend_Entry {
					website: friendWebsite
					subheading: friendSubheading
					description: friendDescription
					banner: friendBanner {
						url
					}
					siteLogo: friendSiteLogo {
						url
					}
					perks: friendPerks(relatedTo: $relatedTo) {
						... on friendPerks_BlockType {
							id
							label
							description
							link: freebieLink
							perk(level: 2) {
								id
								title
								slug
								... on friends_Category {
									icon: friendIcons {
										url
									}
								}
							}
						}
					}
					products: friendProducts {
						... on friendProducts_BlockType {
							id
							link: productLink
							product {
								title
								url
							}
						}
					}
					contactInfo: friendContactInfo
					socialMedia: friendSocialMedia {
						... on friendSocialMedia_BlockType {
							id
							socialMedia
							socialMediaLink
						}
					}
					usefulLinks: friendUsefulLinks {
						label
						link
					}
				}
			}
			friends: entries(
				id: $id
				section: "friends"
				type: "friend"
				alwaysVisible: false
				orderBy: "title asc"
			) {
				id
				slug
				uri
				title
				... on friends_friend_Entry {
					website: friendWebsite
					subheading: friendSubheading
					description: friendDescription
					banner: friendBanner {
						url
					}
					siteLogo: friendSiteLogo {
						url
					}
					perks: friendPerks(relatedTo: $relatedTo) {
						... on friendPerks_BlockType {
							id
							label
							description
							link: freebieLink
							perk(level: 2) {
								id
								title
								slug
								... on friends_Category {
									icon: friendIcons {
										url
									}
								}
							}
						}
					}
					products: friendProducts {
						... on friendProducts_BlockType {
							id
							link: productLink
							product {
								title
								url
							}
						}
					}
					contactInfo: friendContactInfo
					socialMedia: friendSocialMedia {
						... on friendSocialMedia_BlockType {
							id
							socialMedia
							socialMediaLink
						}
					}
					usefulLinks: friendUsefulLinks {
						label
						link
					}
				}
			}
		}
	`,
};

export const GetCarousel = {
	query: `
		query Carousel {
			carousel: entry(section: "friends", type: "carousel") {
				... on friends_carousel_Entry {
					friendCarousel {
						... on friendCarousel_BlockType {
							id
							title: carouselTitle
							description
							backgroundImage {
								url
							}
						}
					}
				}
			}
		}
	`,
};
