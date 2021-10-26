import React, { useState } from 'react';
// import { connect } from 'react-redux';

// import MobilePane from './MobilePane';

export default function MobileMenu(props) {
	const [openPane, setOpenPane] = useState(false);

	return (
		<div className="lg:hidden py-16 flex items-center mb-50 border-b border-gray-16">
			<div className="container mx-auto sm:px-0">
				<button
					className="border-none p-0 flex items-center"
					onClick={() => setOpenPane(!openPane)}
				>
					<img
						src="/img/textbooks/icon-selector.svg"
						alt="Textbook Selector"
					/>
					<span className="ml-10 text-16 text-gray-3">Menu</span>
				</button>
			</div>
			{/* <MobilePane
				{...props}
				open={openPane}
				onSetOpenPane={() => setOpenPane(!openPane)}
			/> */}
		</div>
	);
}

// const mapStateToProps = (state) => ({
// 	currentPath: state.currentPath,
// 	perks: state.perks,
// });

// export default connect(mapStateToProps)(MobileMenu);
