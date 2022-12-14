import styles from "../../styles/components/Hero.module.scss";
import image from "../../assets/krystian-pic.png";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";
import { heroVariants } from "../../utils/variants";

const Hero = () => {
	return (
		<motion.section
			id="home"
			className={styles.hero}
			variants={heroVariants}
			initial="hidden"
			whileInView={"visible"}
		>
			<div className={styles.hero__text}>
				<h1>
					Hi, <span>I'm Krystian</span>
				</h1>
				<h2>Front-End Developer</h2>
				<p>
					Experienced in building responsive and accessible websites with React.
				</p>
				<div className={styles.hero__links}>
					<SocialLinks />
				</div>
			</div>
			<div className={styles.hero__image}>
				<img src={image} alt="photo shows me" />
			</div>
		</motion.section>
	);
};

export default Hero;
