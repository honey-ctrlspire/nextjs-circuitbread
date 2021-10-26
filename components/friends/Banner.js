import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { SwiperSlide } from 'swiper/react';

import Carousel from './Carousel';
import FetchAPI from '../../utils/FetchAPI';
import { GetCarousel } from '../../queries/friends.js';
import { rawMarkup } from '../../utils/helpers';

export async function getServerSideProps() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery('friendBanners', () =>
		FetchAPI.getAll(GetCarousel)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default function Banner() {
	const { data } = useQuery('friendBanners', () =>
		FetchAPI.getAll(GetCarousel)
	);

	const carousel = data && data.carousel ? data.carousel.friendCarousel : [];

	let content = carousel.map((slide) => {
		let backgroundImage = Array.isArray(slide.backgroundImage)
			? slide.backgroundImage.length
				? slide.backgroundImage[0].url
				: ''
			: slide.backgroundImage;

		return (
			<SwiperSlide key={slide.id} className="w-full">
				<div className="relative w-full h-258">
					<img
						src={backgroundImage}
						className="rounded-xl object-cover w-full h-full"
					/>
					<div className="absolute top-0 text-white h-full w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center px-2 md:px-30 items-center md:items-start">
						<h1 className="text-30 px-18 md:px-0">{slide.title}</h1>
						<div
							className="text-15 opacity-70 px-18 md:pl-0  md:pr-35 text-center md:text-left"
							dangerouslySetInnerHTML={rawMarkup(
								slide.description
							)}
						/>
					</div>
				</div>
			</SwiperSlide>
		);
	});

	return (
		<Carousel
			className="rounded-xl mb-15"
			indicatorClass="swiper-pagination-white px-30 py-15 flex items-center justify-center md:justify-start"
		>
			{content}
		</Carousel>
	);
}
