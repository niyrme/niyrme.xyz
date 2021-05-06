import styles from "../styles/Home.module.scss";
import stylesAbout from "../styles/About.module.scss";

export default function About() {
	return (
		<div>
			<h1 className={styles.title}>About</h1>
			<div className={stylesAbout.about}></div>
		</div>
	);
}
