import React from 'react';
import Link from 'next/link'
import {  Dialog, Disclosure, Transition } from "@headlessui/react";
import IconChevron from './Chevron';

export default function Accordion({ guides, selector }) {
	let currentPath = '';
	let subjectSlug = '';

	function handleNavigation(obj) {
		// console.log({ obj })
	}

	const getContent = () => {
		let accordions = guides.map(guide => {

			let isCurrentCategory = guide.slug == subjectSlug ? true : false;
			let categoryUri = `/study-guides/${guide.slug}`;

			let lessonId = [];
			let topicUri, textColor;
			let lessons = guide.lessons.map(lesson => {

				lessonId.push(lesson.id);

				topicUri = `${categoryUri}/${lesson.slug}`;
				textColor = currentPath == topicUri ? 'text-crusta font-weight-500' : 'text-boulder';

				return (
					<Link key={lesson.id} href={topicUri}>
						<a className={`block hover:no-underline d-block mb-20 text-13 ${textColor}`} onClick={() => handleNavigation({ lessonId: lesson.id, title: `${guide.title} | ${lesson.title}` })}>{lesson.title}</a>
					</Link>
				)
			});

			return (
				<div className="px-20 border-b border-athensgrayer" key={`accordion-${selector}-${guide.slug}`}>
					<Disclosure>
						{({ open }) => (
							<>
								<Disclosure.Button className={`py-14 uppercase text-mineshaft text-left text-14 focus:outline-none flex items-center w-full ${isCurrentCategory ? 'font-weight-500' : 'collapsed'}`}>
									<span className="mr-auto">{`${guide.title} (${guide.lessons.length})`}</span>
									<IconChevron className={`${open ? "transform rotate-180" : ""}`} />
								</Disclosure.Button>

								<Transition
									show={open}
									enter="transition-all duration-500 ease-in-out"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="transition-all ease-in-out duration-300 transform"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>

									<Disclosure.Panel className={`hover:no-underline d-block mb-20 font-size-13 text-boulder`}>
										{lessons}
									</Disclosure.Panel>
								</Transition>
							</>
						)}
					</Disclosure>
				</div>
			);
		});

		return accordions;
	}

	return getContent();
}