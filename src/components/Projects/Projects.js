import React from "react";
import Navbar from "../../reusableCoponents/Navbar/Navbar";
import Hero from "../../reusableCoponents/Hero/Hero"
import Footer from "../../reusableCoponents/Footer/Footer"
// import ProjectCard from "../ProjectCard/ProjectCard"
import Work from "../Work/Work"
import heroImage2 from "../../components/assets/images/heroprojects.png"


function Projects() {
	return (
		<div>
			<Navbar />
			<Hero heroImage={heroImage2} heading="PROJECTS" text="see my most recents projects" />
			<Work />
			<Footer />
		</div>
	)
}

export default Projects;