import styles from "../styles/Home.module.scss";

export default function SiteInfo() {
	return (
		<div>
			<h1 className={styles.title}>site info</h1>
			<div>
				<h3><b>Fonts Used</b></h3>
				<ul>
					<li>
						<p>Majör Mono Display</p>
						<p>(SOURCE : <a href="https://github.com/googlefonts/majormono">GitHub</a>)</p>
						<p>(LICENSE: <a href="https://scripts.sil.org/cms/scripts/page.php?item_id=OFL_web">SIL Open Font License v1.1</a>)</p>
					</li>
					<li>
						<p>Roboto Mono</p>
						<p>(SOURCE : <a href="https://fonts.google.com/specimen/Roboto+Mono?category=Monospace">Google Fonts</a>)</p>
						<p>(LICENSE: <a href="https://www.apache.org/licenses/LICENSE-2.0.html">Apache License, Version 2.0</a>)</p>
					</li>
				</ul>
			</div>
		</div>
	);
}
