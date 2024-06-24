// Contact.js
import React from "react";
import Navbar from "../../reusableCoponents/Navbar/Navbar";
import Hero from "../../reusableCoponents/Hero/Hero";
import Footer from "../../reusableCoponents/Footer/Footer";
import Form from "../Form/Form";
import heroImage3 from "../../components/assets/images/contact.png";

function Contact() {
	return (
		<div>
			<Navbar />
			<Hero
				heroImage={heroImage3}
				heading="CONTACT ME"
				text="Get in touch with me"
				showButtons={false}
				showIntro={false}
			/>
			<Form />
			<Footer />
		</div>
	);
}

export default Contact;
