import React, { useState } from "react";
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Link from 'next/link'

import { GetStudyGuideSubjects } from '../../../queries/studyGuides.js';
import FetchAPI from '../../../utils/FetchAPI';
import Accordion from './Accordion';
import NavbarMobile from './SliderPanel';

export async function getStaticProps() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery('subjects', () =>
		FetchAPI.getAll(GetStudyGuideSubjects)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default function Navbar() {
	const [openSlider, setOpenSlider] = useState(false);

	const { data: guides } = useQuery('subjects', () =>
		FetchAPI.getAll(GetStudyGuideSubjects)
	);

	const layout = 'block';

	return (
		<div className="bg-white shadow-md">
			{/* start Desktop view */}
			<div className="w-222 hidden lg:block top-0 sticky">
				<div className="accordion accordion-pane" id="cardContents">
					<div className="px-20 py-16 text-22 border-b border-athensgrayer">
						<Link href='/study-guides'>
							<a className="text-mineshaft">Study Guides</a>
						</Link>
					</div>
					{/* <Accordion subjects={subjects} handleNavigation={onHandleNavigation} currentPath={currentPath} subjectSlug={subjectSlug} selector="card" /> */}
					<Accordion selector="card" guides={guides ? guides.data.entries : []} />
				</div>
			</div>
			{/* end Desktop view */}

			<div className="lg:hidden">
				<div className="px-22 py-15">
					<button className="flex items-center" onClick={() => setOpenSlider(true)}>
						<img src="/img/common/icon-list.svg" className="mr-10" />
						<span className="font-size-16 text-mine-shaft">Study Guides</span>
					</button>
				</div>
				<NavbarMobile openSlider={openSlider} setOpenSlider={setOpenSlider} />
			</div>
		</div>
	)
}