import "../styles/globals.scss";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Niyrme Website</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
