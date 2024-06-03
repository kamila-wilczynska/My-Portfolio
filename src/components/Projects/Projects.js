import React from "react";
import Navbar from "../../reusableCoponents/Navbar/Navbar";
import HeroImage from "../../reusableCoponents/HeroImage/HeroImage"
import Footer from "../../reusableCoponents/Footer/Footer"
// import ProjectCard from "../ProjectCard/ProjectCard"
import Work from "../Work/Work"


function Projects() {
	return (
		<div>
			<Navbar />
			<HeroImage heading="PROJECTS" text="see my most recents projects" />
			<Work />
			<Footer />
		</div>
	)
}

export default Projects;