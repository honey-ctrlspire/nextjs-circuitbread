import { default as Layout } from '../../common/layouts/Base';
import Navbar from './_partials/Navbar';
import Spinner from '../../common/Spinner';

export default function StudyGuide({ pageTitle, isLoading, children }) {
	return (
		<Layout title={pageTitle}>
			<div className="container-vh w-full flex flex-col lg:flex-row bg-athensgray">
				<Navbar />
				{isLoading ?
					<Spinner />
					: children
				}
			</div>
		</Layout>
	)
}