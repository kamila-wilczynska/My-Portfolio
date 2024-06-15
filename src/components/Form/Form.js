import "./Form.css";

function Form() {
	return (
		<div className="form">
			<form action="https://formsubmit.co/d7ef65ab4e67c80a7b67db67e3833f97 " method="POST">

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
				<button className="btn" type="submit">Submit</button>
				{/* <input type="hidden" name="_next" value="http://localhost:3000/thankyou/thanks.html"></input> */}

			</form>
		</div>
	);
}

export default Form;
