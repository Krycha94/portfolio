import styles from "../../styles/components/Contact.module.scss";

const Contact = () => {
	return (
		<section className={styles.contact}>
			<h3>Contact with me</h3>
			<form className={styles.contact__form}>
				{/* name */}
				<div className={styles.contact__control}>
					<label htmlFor="name">Your Name</label>
					<input type="text" id="name" />
					<p>Error name</p>
				</div>
				{/* email */}
				<div className={styles.contact__control}>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" />
					<p>Error email</p>
				</div>
				{/* subject */}
				<div className={styles.contact__control}>
					<label htmlFor="subject">Subject</label>
					<input type="text" id="subject" />
					<p>Error subject</p>
				</div>
				{/* message */}
				<div className={styles.contact__control}>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						rows={10}
						cols={50}
						// name="description"
						// onChange={formik.handleChange}
						// onBlur={formik.handleBlur}
						// value={formik.values.description}
						// {...formik.getFieldProps("description")}
					/>
					<p>Error message</p>
				</div>

				<button type="submit" className={styles.contact__button}>Submit</button>
			</form>
		</section>
	);
};

export default Contact;
