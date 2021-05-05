import { rawMarkup } from '../../utils/Helpers';

export default function StudyGuideTopic({ label, title, content }) {
	return (
		<div className="w-full break-avoid bg-white text-mineshaft px-26 py-14 mb-20 guide-content text-15">
			{label ? <span className="uppercase text-11 font-medium text-dustygray">{label}</span> : ''}
			<h2 className="text-mineshaft font-medium text-15 mt-8 mb-16">{title}</h2>
			<div className="text-15" dangerouslySetInnerHTML={rawMarkup(content)} />
		</div>
	)
}