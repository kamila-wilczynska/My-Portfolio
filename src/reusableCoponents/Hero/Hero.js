// Hero.js
import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero({ heroImage, heading, text, showButtons = true, showIntro = true }) {
	return (
		<div className="hero">
			<div className="mask">
				<img className="image" alt="hero" src={heroImage} />
				<div className="content">
					{showIntro && <p>Hi, I am Kamila</p>}
					<h1>{heading}</h1>
					<p>{text}</p>
					{showButtons && (
						<div>
							<Link to="/projects" className="btn">Projects</Link>
							<Link to="/contact" className="btn btn-light">Contact</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Hero;
