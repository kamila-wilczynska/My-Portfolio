import Home from "../Home/Home";
// import About from "../About/About";
import Contact from "../Contact/Contact"
import Projects from "../Projects/Projects"
import React from "react";
import { Route, Routes } from "react-router-dom";
import ThabkYou from "../ThankYou/ThankYou"








function Root() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/thankyou" element={<ThabkYou />} />

		</Routes>
	);
}

export default Root;