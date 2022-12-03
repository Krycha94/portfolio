import styles from "../../styles/components/MobileNav.module.scss";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { navLinks } from "../../utils/nav-links";
import { navVariants } from "../../utils/variants";

const MobileNav = ({ onClose, isMenuOpen }) => {
	return (
		<>
			<motion.div
				variants={navVariants}
				initial="hidden"
				animate={isMenuOpen ? "visible" : ""}
				className={styles.backdrop}
				onClick={onClose}
			></motion.div>
			<motion.aside
				variants={navVariants}
				initial="hidden"
				animate={isMenuOpen ? "visible" : ""}
				className={styles.sidebar}
			>
				<button className={styles.sidebar__button} onClick={onClose}>
					<FaTimes />
				</button>
				<nav className={styles.sidebar__list}>
					{navLinks.map((link) => (
						<a href={link.address} key={link.id} onClick={onClose}>
							{link.text}
						</a>
					))}
				</nav>
			</motion.aside>
		</>
	);
};

export default MobileNav;
