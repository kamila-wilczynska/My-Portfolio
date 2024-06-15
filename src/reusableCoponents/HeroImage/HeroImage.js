import React from "react";
import "./HeroImage.css"
import backgroundImage from "../../components/assets/images/project.png"; 

function HeroImage(props) {
	return (
		<div className="hero-img" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="heading2">
				<h1>{props.heading}</h1>
				<p>{props.text}</p>
			</div>


		</div>
	)
}

export default HeroImage;