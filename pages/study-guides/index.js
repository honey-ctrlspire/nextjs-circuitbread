import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Link from 'next/link';

import FetchAPI from '../../utils/FetchAPI';
import { rawMarkup } from '../../utils/Helpers';
import { GetStudyGuideLessons } from '../../queries/studyGuides.js';
import StudyGuide from '../../components/study-guides/StudyGuide';

export async function getServerSideProps() {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery('guides', () =>
		FetchAPI.getAll(GetStudyGuideLessons)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default function StudyGuides() {
	const { data, isLoading } = useQuery('guides', () =>
		FetchAPI.getAll(GetStudyGuideLessons)
	);

	const category = data ? data.data.category : null;
	const lessons = data ? data.data.entries : null;

	return (
		<StudyGuide pageTitle="Study Guides" isLoading={isLoading}>
			<div className="w-full px-0 px-sm-15 px-lg-40 py-30 mb-md-30">
				<div className="container mx-auto w-3/5 my-30 my-md-20">
					<div className="shadow-sm bg-white px-34 pt-27 pb-30">
						<h1 className="text-mineshaft font-medium text-30 flex items-center">
							<img
								src="/img/common/icon-study-guides.svg"
								className="mr-15"
							/>
							<span>Study Guides</span>
						</h1>
						{category ? (
							<div
								className="mt-14 text-boulder text-14"
								dangerouslySetInnerHTML={rawMarkup(
									category.shortDescription
								)}
							/>
						) : (
							''
						)}
					</div>
				</div>
				<div className="container mx-auto w-3/5 ">
					<h2 className="text-center md:text-left mb-22 text-mineshaft opacity-70 text-27">
						Latest Guides
					</h2>
					<div className="relative shadow-sm bg-white">
						<ul className="px-15 px-md-25">
							{lessons
								? lessons.map((lesson, idx) => {
										return (
											<li
												key={`entry-${lesson.title}`}
												className={`style-type-none py-11 text-14 ${
													idx != lessons.length - 1
														? 'border-b border-athensgrayer'
														: ''
												}`}
											>
												<Link href={lesson.uri}>
													<a className="flex content-start items-center text-mineshaft font-medium hover:underline">
														{lesson.title}
													</a>
												</Link>
												<div className="text-mineshaft-50">
													{lesson.subject.title}
												</div>
											</li>
										);
								  })
								: null}
						</ul>
						<img
							src="/img/common/study-guide-mentor.svg"
							className="absolute bottom-42 -right-22"
							alt="Study Guide Mentor"
							title="Study Guide Mentor"
						/>
					</div>
				</div>
			</div>
		</StudyGuide>
	);
}
