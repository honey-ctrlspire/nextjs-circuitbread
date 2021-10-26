import React, { useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import Carousel from './Carousel';
import { toKebabCase } from '../utilities/helpers';

export default function FriendProductCarousel({
	friend,
	slideCss = '',
	carousel = [],
	slug,
}) {
	const [currentSlide, setCurrentSlide] = useState(carousel[0]);

	function handleSlideChange({ realIndex }) {
		setCurrentSlide(carousel[realIndex]);
	}

	let currentProduct = Array.isArray(currentSlide.product)
		? currentSlide.product[0]
		: currentSlide.product;

	let slides = carousel.map((slide) => {
		let product = Array.isArray(slide.product)
			? slide.product[0]
			: slide.product;

		return (
			<SwiperSlide className={slideCss} key={slide.id}>
				<a
					href={slide.link ?? '#'}
					target={slide.link ? '_blank' : ''}
					className="w-full hover:no-underline"
					id={`gtm-friend-${slug}-product-${toKebabCase(
						product.title
					)}`}
				>
					<div className="bg-white h-240 rounded-md shadow-sm h-160 flex justify-center items-center mb-20">
						<div className="m-auto h-full w-full px-15 pt-38 pb-56">
							<img
								src={product.url}
								className="h-full w-full object-contain"
							/>
						</div>
					</div>
				</a>
			</SwiperSlide>
		);
	});

	return (
		<div className="md:hidden">
			<Carousel
				className="rounded-xl"
				onSlideChange={(e) => handleSlideChange(e)}
				indicatorClass="swiper-pagination-gray px-30 py-15 flex items-center justify-center md:justify-start"
			>
				{slides}
			</Carousel>
			<div className="text-center mb-30">
				<h4 className="font-medium uppercase text-mineshaft text-18 mb-3">
					{currentProduct.title}
				</h4>
				<p className="text-12 text-dustygray m-0 ml-3">{friend}</p>
			</div>
		</div>
	);
}
