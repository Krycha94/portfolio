import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Modal from "./components/UI/Modal";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Projects />
				<Contact onOpenModal={handleOpen} />
			</main>
			<Footer />
			{isOpen && <Modal onCloseModal={handleClose} />}
		</>
	);
}

export default App;
