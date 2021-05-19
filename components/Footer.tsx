import Link from "next/link";

export default function Footer(): JSX.Element {
	return (
		<footer>
			<Link href="/siteInfo"><a>Site Information</a></Link>
			<Link href="https://github.com/niyrme/niyrme.xyz"><a>Website Source</a></Link>
		</footer>
	);
}
