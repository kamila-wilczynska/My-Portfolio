import React from "react";
import Navbar from "../../reusableCoponents/Navbar/Navbar";
import HeroImage from "../../reusableCoponents/HeroImage/HeroImage"
import Footer from "../../reusableCoponents/Footer/Footer"
import Form from "../Form/Form"

function Contact() {
	return (

		<div>
			<Navbar />
			<HeroImage heading="CONTACT ME" text="lets talk!" />
			<Form />
			<Footer />
		</div>


	)
}

export default Contact;