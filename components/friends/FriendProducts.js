import React from 'react';

import Card from '../components/Card';
import Cards from '../components/Cards';
import FriendProductCarousel from '../components/FriendProductCarousel';
import { toKebabCase } from '../utilities/helpers';

export default function FriendProducts({ products, title, slug }) {
	products = Array.isArray(products) ? products : products.data;

	if (!products.length) return '';

	let content = products.map((item) => {
		let product = Array.isArray(item.product)
			? item.product[0]
			: item.product;

		return (
			<Card key={item.id} className="w-1/3 flex-basis-1/3 mb-15 px-7">
				<a
					href={item.link ?? '#'}
					target={item.link ? '_blank' : ''}
					className="w-full hover:no-underline"
					id={`gtm-friend-${slug}-product-${toKebabCase(
						product.title
					)}`}
				>
					<div className="bg-white rounded-md shadow-sm h-160 flex justify-center items-center mb-20 hover:shadow-md">
						<div className="flex h-full p-20">
							<img
								src={product.url}
								className="object-contain max-h-130"
							/>
						</div>
					</div>
					<h3 className="font-medium uppercase text-mineshaft text-18 mb-3 ml-3">
						{product.title}
					</h3>
					<p className="text-12 text-dustygray m-0 ml-3">{title}</p>
				</a>
			</Card>
		);
	});

	return (
		<>
			<h2 className="text-mineshaft -70 text-27 text-center md:text-left font-normal mb-20">
				Featured Products
			</h2>
			<FriendProductCarousel
				carousel={products}
				friend={title}
				slug={slug}
			/>
			<Cards className="mb-30 items-start hidden md:flex -mx-7">
				{content}
			</Cards>
		</>
	);
}
