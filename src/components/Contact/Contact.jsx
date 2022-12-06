import React from "react";
import styles from "../../styles/components/Contact.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { sectionVariants } from "../../utils/variants";

const Contact = ({ onOpenModal }) => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(2, "Must be 2 characters or more")
				.max(15, "Must be 15 characters or less")
				.required("Name is Required"),
			email: Yup.string().required("Email is Required").email(),
			subject: Yup.string()
				.min(4, "Must be 4 characters or more")
				.max(30, "Must be 30 characters or less")
				.required("Subject is Required"),
			message: Yup.string()
				.min(4, "Must be 4 characters or more")
				.max(400, "Must be 400 characters or less")
				.required("Message is Required"),
		}),
		onSubmit: (values, { resetForm }) => {
			onOpenModal();
			resetForm();
		},
	});

	return (
		<motion.section
			id="contact"
			className={styles.contact}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
		>
			<h3>Contact with me</h3>
			<form className={styles.contact__form} onSubmit={formik.handleSubmit}>
				{/* name */}
				<div className={styles.contact__control}>
					<label htmlFor="name">Your Name</label>
					<input id="name" type="text" {...formik.getFieldProps("name")} />
					{formik.touched.name && formik.errors.name ? (
						<p>{formik.errors.name}</p>
					) : null}
				</div>
				{/* email */}
				<div className={styles.contact__control}>
					<label htmlFor="email">Email</label>
					<input id="email" type="email" {...formik.getFieldProps("email")} />
					{formik.touched.email && formik.errors.email ? (
						<p>{formik.errors.email}</p>
					) : null}
				</div>
				{/* subject */}
				<div className={styles.contact__control}>
					<label htmlFor="subject">Subject</label>
					<input
						id="subject"
						type="text"
						{...formik.getFieldProps("subject")}
					/>
					{formik.touched.subject && formik.errors.subject ? (
						<p>{formik.errors.subject}</p>
					) : null}
				</div>
				{/* message */}
				<div className={styles.contact__control}>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						rows={10}
						cols={50}
						{...formik.getFieldProps("message")}
					/>
					{formik.touched.message && formik.errors.message ? (
						<p>{formik.errors.message}</p>
					) : null}
				</div>

				<button type="submit" className={styles.contact__button}>
					Submit
				</button>
			</form>
		</motion.section>
	);
};

export default Contact;
