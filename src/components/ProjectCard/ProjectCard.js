import React from "react";
import "./ProjectCard.css"
// import project1 from "../assets/images/project1.png"
import { NavLink } from "react-router-dom"
import "../ProjectCardData"


function ProjectCard(props) {
	return (
		<div className="project-card">
			<img src={props.imgsrc} alt="project" />
			<h2 className="project-title">{props.title}</h2>
			<div className="project-details">
				<p>{props.text}t</p>
				<NavLink to={props.view} className="project-button" >Source</NavLink>

			</div>
		</div>
	)
}

export default ProjectCard;