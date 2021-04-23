import Link from "next/link";

export default function Footer(): JSX.Element {
	return (
		<footer>
			<Link href="/siteInfo"><a>Site Information</a></Link>
			<Link href="https://gitlab.com/Niyrme/niyrme-website"><a>Website Source</a></Link>
		</footer>
	);
}
