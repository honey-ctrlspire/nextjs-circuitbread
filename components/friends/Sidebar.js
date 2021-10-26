import MenuList from './MenuList';

export default function Sidebar() {
	return (
		<div className="bg-white shadow-md py-30">
			<div className="w-222 hidden lg:block top-30 sticky">
				<MenuList />
			</div>
		</div>
	);
}
