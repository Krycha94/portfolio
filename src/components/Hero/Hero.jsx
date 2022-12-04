import styles from "../../styles/components/Hero.module.scss";
import image from "../../assets/krystian-pic.png";
import { socialLinks } from "../../utils/social-links";

const Hero = () => {
	return (
		<section className={styles.hero} id="home">
			<div className={styles.hero__text}>
				<h1>
					Hi, <span>I'm Krystian</span>
				</h1>
				<h2>Front-End Developer</h2>
				<p>
					Experienced in building responsive and accessible websites with React.
				</p>
				<div className={styles.hero__links}>
					<ul>
						{socialLinks.map((link) => (
							<li key={link.id}>
								<a target="_blank" href={link.address}>
									{link.icon}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.hero__image}>
				<img src={image} alt="photo shows me" />
			</div>
		</section>
	);
};

export default Hero;
