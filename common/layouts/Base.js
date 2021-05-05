import Head from 'next/head';
import Navbar from './Navbar';

function Base({ children, title }) {
	return (
		<div className="containerx">
			<Head>
				<title>{title ?? `A BETTER way to learn electronics`} | CircuitBread</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<main className="">{children}</main>
		</div>
	);
}

export default Base;