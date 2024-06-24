import React from "react";
import styles from "./ProjectCard.module.css";
import { NavLink } from "react-router-dom";

function ProjectCard(props) {
  return (
    <div className={styles.project_card}>
      <img src={props.imgsrc} alt="project" />
      <h2 className={styles.project_title}>{props.title}</h2>
      <div className={styles.project_details}>
        <p>{props.text}</p>
        <NavLink to={props.view} className={styles.project_button}>
          Source
        </NavLink>
      </div>
    </div>
  );
}

export default ProjectCard;
