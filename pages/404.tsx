import Link from "next/link";

export default function Err404() {
	return (
		<div>
			<h1>Ooops...</h1>
			<h3>We could not find the page you are looking for!</h3>
			<p>Return to the <Link href="/"><a>Homepage</a></Link>.</p>
		</div>
	);
}
