import Link from "next/link";

export default function Navbar(): JSX.Element {
	return (
		<nav>
			<Link href="/"><a>Home</a></Link>
			<Link href="/about"><a>About</a></Link>
		</nav>
	);
}
