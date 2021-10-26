// import { gsap } from 'gsap';
// import { ScrollToPlugin } from 'gsap/all';

import { default as Layout } from '@/common/layouts/Base';

import MobileMenu from './MobileMenu';
import Sidebar from './Sidebar';
import Spinner from './Spinner';

// gsap.registerPlugin(ScrollToPlugin);

export default function FriendsLayout({ title, children, isLoading }) {
	// useEffect(() => {
	// 	gsap.to(window, { duration: 0.5, scrollTo: 0 });
	// });

	return (
		<Layout title={title}>
			<div className="min-h-screen w-full flex flex-col lg:flex-row bg-athensgray ">
				{/* <MobileMenu /> */}
				<div className="flex w-full">
					<Sidebar />
					{isLoading ? <Spinner /> : children}
				</div>
			</div>
		</Layout>
	);
}
