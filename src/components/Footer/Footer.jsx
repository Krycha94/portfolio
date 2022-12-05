import styles from "../../styles/components/Footer.module.scss";
import SocialLinks from "../Hero/SocialLinks";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__center}>
				<div className={styles.footer__links}>
					<SocialLinks />
				</div>
				<p>
					&copy; {new Date().getFullYear()} All rights reserved Krystian
					Kowalski
				</p>
			</div>
		</footer>
	);
};

export default Footer;
