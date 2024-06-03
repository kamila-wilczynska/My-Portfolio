import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact"
import Projects from "../Projects/Projects"
import React from "react";
import { Route, Routes } from "react-router-dom";








function Root() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default Root;