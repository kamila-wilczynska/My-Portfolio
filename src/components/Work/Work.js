// import React from "react";
// import "./Work.css"
// import ProjectCardData from "../ProjectCardData";
// import ProjectCard from "../ProjectCard/ProjectCard";



// function Work() {
// 	return (
// 		<div className="work-container">
// 			<h1 className="project-heading"> Projects</h1>
// 			<div className="project-container">

// 				{ProjectCardData.map((value, index) =>{
// 					return(
// 						<ProjectCard
// 						key={index}
// 						imgsrc = {value.imgsrc}
// 						title= {value.title}
// 						text= {value.text}
// 						view= {value.view}


// 						/>
// 					)
// 				})}


// 			</div>
// 		</div>
// 	)
// }

// export default Work;


import React from "react";
import "./Work.css";
import ProjectCardData from "../ProjectCardData";
import ProjectCard from "../ProjectCard/ProjectCard";

function Work() {
	// Filtruj dane na podstawie kategorii
	const groupProjects = ProjectCardData.filter(project => project.category === "Group Projects");
	const reactProjects = ProjectCardData.filter(project => project.category === "React Projects");
	const otherProjects = ProjectCardData.filter(project => project.category === "Other Projects");

	return (
		<div className="work-container">

			{/* Group Projects Section */}
			<h2>Group Projects</h2>
			<div className="project-container">
				{groupProjects.map((value, index) => (
					<ProjectCard
						key={index}
						imgsrc={value.imgsrc}
						title={value.title}
						text={value.text}
						view={value.view}
					/>
				))}
			</div>

			{/* React Projects Section */}
			<h2>React Projects</h2>
			<div className="project-container">
				{reactProjects.map((value, index) => (
					<ProjectCard
						key={index}
						imgsrc={value.imgsrc}
						title={value.title}
						text={value.text}
						view={value.view}
					/>
				))}
			</div>

			{/* Other Projects Section */}
			<h2>React Projects</h2>
			<div className="project-container">
				{otherProjects.map((value, index) => (
					<ProjectCard
						key={index}
						imgsrc={value.imgsrc}
						title={value.title}
						text={value.text}
						view={value.view}
					/>
				))}
			</div>
		</div>
	);
}

export default Work;
