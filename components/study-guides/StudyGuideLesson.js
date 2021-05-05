import Topic from './StudyGuideTopic';

export default function StudyGuideLesson({ lesson }) {
	return (
		<div className={`container px-15 lg:px-40 py-30 mb-30`}>
			{/* <div className={`${layout == 'block' ? 'container' : 'container-fluid'} px-15 px-lg-40 py-30 mb-30`}> */}
			<span className="text-16 uppercase text-dustygray">Study Guide</span>
			<div className="block md:flex mb-22">
				<h1 className="mr-auto text-20 md:text-30 text-mineshaft font-normal">{lesson.title}</h1>
				{/* {entries.length ?
					<div className="d-flex align-items-end">
						<Download {...props} />
						<button className="pl-0 align-items-center bg-transparent border-none text-tundora font-size-13 btn-single-view" onClick={() => onSetLayout('block')}>
							<img src={layout == 'block' ? '/img/icon-single-box-dark.svg' : '/img/icon-single-box-gray.svg'} />
						</button>
						<button className="px-0 align-items-center bg-transparent border-none text-tundora font-size-13 btn-mosaic-view" onClick={() => onSetLayout('mosaic')}>
							<img src={layout == 'mosaic' ? '/img/icon-multiple-box-dark.svg' : '/img/icon-multiple-box-gray.svg'} />
						</button>
					</div> : ''} */}
			</div>
			{ lesson.topics.length ?
				<div className="flex">
					<div className={`flex-grow cols-auto cols-gap-24 cols-w-320`}>
						{lesson.topics.map(topic => <Topic key={topic.id} {...topic} />)}
					</div>
				</div>
				: <div className="d-flex flex-column align-items-center justify-content-center w-100" style={{ height: '70%' }}>
					<img src="/img/icon-empty-box.svg" className="mb-30" />
					<h3 className="text-dusty-gray text-28 mb-15 font-weight-normal">No study guides found.</h3>
				</div>}
		</div>
	)
}