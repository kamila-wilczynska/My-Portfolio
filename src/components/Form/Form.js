import React, { useState } from "react";
import "./Form.css";

function Form() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	// State to track loading
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form);

		setIsLoading(true);

		try {
			const response = await fetch('https://formsubmit.co/ajax/d7ef65ab4e67c80a7b67db67e3833f97', {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			});

			if (response.ok) {
				// Update state to show thank you message
				setIsSubmitted(true);
			} else {
				console.error('Error submitting form:', response.statusText);
			}
		} catch (error) {
			console.error('Error!', error);
		} finally {
			// Set loading to false when form submission ends
			setIsLoading(false);
		}
	};

	return (
		<div className="form">
			{isSubmitted ? (
				<div className="thank-you-message">
					<h1>Thank You!</h1>
					<p>Your form has been submitted successfully.</p>
					<iframe
						src="https://giphy.com/embed/3ohryiYkE0DVwdLAys"
						width="480"
						height="480"
						style={{ border: 'none' }}
						frameBorder="0"
						className="giphy-embed"
						allowFullScreen
						title="Thank You"
					></iframe>
					<p>
						<a href="https://giphy.com/gifs/computer-done-typing-3ohryiYkE0DVwdLAys">via GIPHY</a>
					</p>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Your Name</label>
						<input id="name" name="name" type="text" placeholder="Your name" aria-label="Your name" required />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input id="email" name="email" type="email" placeholder="Your email" aria-label="Your email" required />
					</div>
					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<input id="subject" name="subject" type="text" placeholder="Subject" aria-label="Subject" required />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea id="message" name="message" rows="6" placeholder="Type your message" aria-label="Type your message" required></textarea>
					</div>
					<button className="btn" type="submit" disabled={isLoading}>
						{isLoading ? <span className="spinner"></span> : "Submit"}
					</button>
				</form>
			)}
		</div>
	);
}

export default Form;
