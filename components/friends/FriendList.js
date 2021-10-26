import Cards from './Cards';

export default function FriendList({ children }) {
	return (
		<>
			<h2 className="text-center md:text-left capitalize text-27 font-normal text-mineshaft -70 mb-18">
				Friends Of CircuitBread
			</h2>
			<Cards className="mb-30 -mx-7 items-stretch">{children}</Cards>
		</>
	);
}
