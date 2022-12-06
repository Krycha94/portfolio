import React from "react";
import styles from "../../styles/components/Modal.module.scss";
import { FaTimes } from "react-icons/fa";

const Modal = ({ onCloseModal }) => {
	return (
		<>
			<div className={styles.backdrop} onClick={onCloseModal}></div>
			<div className={styles.modal}>
				<button className={styles.modal__closeBtn} onClick={onCloseModal}>
					<FaTimes />
				</button>
				<p className={styles.modal__text}>Email sent, thanks for contact!</p>
			</div>
		</>
	);
};

export default Modal;
