import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
	return (
		<nav className="bg-ebonyclay h-70 flex items-center">
			<div className="container mx-auto h-full">
				<div className="flex justify-between h-full">
					<div className="flex items-center">
						<Link href="/">
							<a>
								<Image
									src="/img/common/logo-circuitbread.png"
									alt="CircuitBread logo"
									width={183}
									height={40}
								/>
							</a>
						</Link>
						<ul className="flex items-center ml-48 h-full">
							<li className="text-15 text-white uppercase h-full mx-24">
								<Link href="/tutorials">
									<a className="h-full flex items-center">Tutorials</a>
								</Link>
							</li>
							<li className="text-15 text-white uppercase h-full mx-24">
								<Link href="/references">
									<a className="h-full flex items-center">Reference</a>
								</Link>
							</li>
							<li className="text-15 text-white uppercase h-full mx-24">
								<Link href="/textbooks">
									<a className="h-full flex items-center">Textbooks</a>
								</Link>
							</li>
							<li className="text-15 text-white uppercase h-full mx-24">
								<Link href="/tools">
									<a className="h-full flex items-center">Tools</a>
								</Link>
							</li>
							<li className="text-15 text-white uppercase h-full mx-24">
								<Link href="/equations">
									<a className="h-full flex items-center">Equations</a>
								</Link>
							</li>
							<li className="text-15 text-white uppercase h-full mx-24">
								<Link href="/extras">
									<a className="h-full flex items-center">Extras</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex">
						<ul className="flex h-full items-center">
							<li className="h-full">
								<a href="#" className="h-full flex items-center mx-20">
									<Image
										src="/img/common/icon-search.svg"
										alt="Search Icon"
										width={22}
										height={23}
									/>
								</a>
							</li>
							<li className="text-15 text-white uppercase h-full mr-10">
								<a href="#" className="h-full flex items-center">
									Login
                </a>
							</li>
							<li className="text-white">/</li>
							<li className="text-15 text-white uppercase h-full ml-10">
								<a href="#" className="h-full flex items-center">
									Sign Up
                </a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;