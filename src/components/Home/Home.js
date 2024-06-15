import React from "react";
import Navbar from "../../reusableCoponents/Navbar/Navbar";
import Hero from "../../reusableCoponents/Hero/Hero"
import Footer from "../../reusableCoponents/Footer/Footer"
import AboutContent from "../AboutContent/AboutContent"


function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutContent/>
			<Footer />
		</div>
	)
}

export default Home;