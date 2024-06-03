import React from "react";
import "./Work.css"
import ProjectCardData from "../ProjectCardData";
import ProjectCard from "../ProjectCard/ProjectCard";



function Work() {
	return (
		<div className="work-container">
			<h1 className="project-heading"> Projects</h1>
			<div className="project-container">

				{ProjectCardData.map((value, index) =>{
					return(
						<ProjectCard
						key={index}
						imgsrc = {value.imgsrc}
						title= {value.title}
						text= {value.text}
						view= {value.view}


						/>
					)
				})}


			</div>
		</div>
	)
}

export default Work;