import styles from "../../styles/components/About.module.scss";
import Technologies from "./Technologies"
import { motion } from "framer-motion";
import { sectionVariants } from "../../utils/variants";

const About = () => {
	return (
		<motion.section id="about" className={styles.about} variants={sectionVariants} initial="hidden" whileInView="visible">
			<h3>About me</h3>
			<p>
				Hi, my name is Krystian, I live in Bydgoszcz and I want to become a
				Front-End Developer. I graduated from the IT technical school. I have
				been programming for over 1,5 year in JavaScript mainly in react, but I
				also have some knowledge of how the backend works by working with
				Firebase and headless CMS like Strapi. I am looking forward to gaining
				my first commercial experience in a real-life job as Front-End
				Developer.
			</p>
			<h3>Technologies I Use</h3>
			<Technologies />
		</motion.section>
	);
};

export default About;
