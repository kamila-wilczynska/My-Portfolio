import React from "react";
import "./Hero.css";
import heroImage from "../../components/assets/images/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {


	return (
		<div className="hero">
			<div className="mask">
				<img className="image" alt="heroImage" src={heroImage} />
				<div className="content">
					<p>Hi, I am Kamila</p>
					<h1>Web Developer</h1>
					<div>
						<Link to="/projects" className="btn">Projects</Link>
						<Link to="/contact" className=" btn btn-light">Contact</Link>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Hero;