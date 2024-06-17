import "./Footer.css"
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<IoHomeOutline size={25} className="icon-footer" />
						<div>
							<p>Ealing Broadway, London</p>
						</div>
					</div>
					<div className="email">
						<GoMail size={25} className="icon-footer" />
						<p>kamila.wilczynska92@gmail.com</p>
					</div>
					<div className="social">
						<div >
							<a href="https://www.linkedin.com/in/kamila-wilczynska-7590141ab/"><CiLinkedin size={25} className="icon-footer" /></a>
						</div>
						<div >
							<a href="https://github.com/kamila-wilczynska" className="social-left"><FaGithub size={25} className="icon-footer" /></a>
						</div>
					</div>
				</div>
				<div className="right">
					<h4>About me</h4>
					<p>Here is Kamila, junior web developer, career-changer. I enjoy discussing projects and design.</p>
				</div>
			</div>
		</div>
	)
}

export default Footer;
