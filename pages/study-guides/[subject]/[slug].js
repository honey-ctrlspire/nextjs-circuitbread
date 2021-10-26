import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { useRouter } from 'next/router';

import FetchAPI from '../../../utils/FetchAPI';
import { GetStudyGuideLesson } from '../../../queries/studyGuides.js';

import StudyGuide from '../../../components/study-guides/StudyGuide';
import StudyGuideLesson from '../../../components/study-guides/StudyGuideLesson';

export async function getServerSideProps({ params }) {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(params.slug, () =>
		FetchAPI.getByParams(GetStudyGuideLesson, { slug: params.slug })
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default function Lesson() {
	const router = useRouter();
	const { slug } = router.query;

	const { data, isLoading } = useQuery(slug, () =>
		FetchAPI.getByParams(GetStudyGuideLesson, { slug })
	);

	const lesson = data ? data.data.entry : null;
	let pageTitle = 'Study Guides';

	pageTitle = lesson
		? `${lesson.title} | ${lesson.subject.title} - ${pageTitle}`
		: pageTitle;

	return (
		<StudyGuide isLoading={isLoading} pageTitle={pageTitle}>
			{!lesson ? 'No lesson' : <StudyGuideLesson lesson={lesson} />}
		</StudyGuide>
	);
}
