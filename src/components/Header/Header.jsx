import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import styles from "../../styles/components/Header.module.scss";
import { FaBars } from "react-icons/fa";
import { navLinks } from "../../utils/nav-links";
import logo from "../../assets/krystian-logo.png";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleOpen = () => setIsMenuOpen(true);
	const handleClose = () => setIsMenuOpen(false);

	useEffect(() => {
		const onScroll = () =>
			window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
			<div className={styles.header__center}>
				<div>
					<a href="#">
						<img
							className={styles.header__logo}
							src={logo}
							alt="Me on the picture"
						/>
					</a>
				</div>

				<nav className={styles.header__list}>
					{navLinks.map((link) => (
						<a href={link.address} key={link.id}>
							{link.text}
						</a>
					))}
				</nav>

				<button className={styles.header__hamburger} onClick={handleOpen}>
					<FaBars />
				</button>

				{/* mobile only*/}
				<MobileNav onClose={handleClose} isMenuOpen={isMenuOpen} />
			</div>
		</header>
	);
};

export default Header;
