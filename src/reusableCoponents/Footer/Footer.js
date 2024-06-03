import "./Footer.css"
import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSettingsPhone } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";

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
					<div className="phone">
						<MdOutlineSettingsPhone size={25} className="icon-footer" />
						<p>07902-176-308</p>
					</div>
					<div className="email">
						<GoMail size={25} className="icon-footer" />
						<p>kamila.wilczynska92@gmail.com</p>
					</div>
				</div>
				<div className="right">
					<h4>About me</h4>
					<p>Here is Kamila, junior web developer, career-changer. I enjoy discussing projects and design.</p>
					<div className="social">
						<CiLinkedin size={25} className="icon-footer" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;
