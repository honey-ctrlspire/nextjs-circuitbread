import React, { useEffect } from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper } from 'swiper/react';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function Carousels({
	className = '',
	onSlideChange = null,
	children,
	indicatorClass,
}) {
	const [swiper, setSwiper] = React.useState(null);

	useEffect(() => {
		if (swiper) {
			swiper.slideTo(1);
		}
	}, [swiper]);

	return (
		<>
			<Swiper
				loop={true}
				spaceBetween={15}
				slidesPerView={1}
				pagination={{
					el: '.swiper-pagination',
					clickable: true,
				}}
				onSlideChange={onSlideChange ?? (() => {})}
				className={className}
				onSwiper={(s) => setSwiper(s)}
			>
				{children}
				<div className={`swiper-pagination ${indicatorClass}`}></div>
			</Swiper>
		</>
	);
}
