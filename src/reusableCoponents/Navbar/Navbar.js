import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"

function Navbar() {


	const [click, setClick] = useState(false);

	function handleclick() {
		setClick(!click)
	}

	const [color, setColor] = useState()

	const changeColor = () => {
		if (window.scrollY > 100) {
			setColor(true)
		} else {
			setColor(false)
		}
	}

	window.addEventListener("scroll", changeColor);

	return (
		<div className={color ? "header header-bg" : "header"}>
			<Link to="/">
				<h1>Portfolio</h1>
			</Link>
			<ul className={click ? "nav--menu active" : "nav--menu"}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div className="hamburger" onClick={handleclick}>
				{click ? <FaTimes size={50} style={{ color: 'white' }} /> : <GiHamburgerMenu size={50} style={{ color: 'white' }} />}


			</div>

		</div>
	)
}

export default Navbar;