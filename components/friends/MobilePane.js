import React from 'react';
import { connect } from 'react-redux';

import MenuList from './MenuList';

export default function MobilePane(props) {
	const { open, onSetOpenPane } = props;

	return (
		<div
			className={`bg-white slider-pane absolute ${open ? 'opened' : ''}`}
		>
			<div className="py-16 mb-20">
				<div className="flex justify-end items-center mr-15">
					<button
						className="border-none bg-transparent"
						onClick={() => onSetOpenPane()}
					>
						<img
							src="/img/textbooks/icon-back.svg"
							style={{ width: '14px', height: '14px' }}
						/>
					</button>
				</div>
				<div className="container">
					<MenuList {...props} onClick={() => onSetOpenPane()} />
				</div>
			</div>
		</div>
	);
}
