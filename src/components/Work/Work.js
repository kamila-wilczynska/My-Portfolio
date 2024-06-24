import React from "react";
import styles from "./Work.module.css";
import ProjectCardData from "../ProjectCardData";
import ProjectCard from "../ProjectCard/ProjectCard";

function Work() {
  // Filtruj dane na podstawie kategorii
  const groupProjects = ProjectCardData.filter(
    (project) => project.category === "Group Projects"
  );
  const reactProjects = ProjectCardData.filter(
    (project) => project.category === "React Projects"
  );
  const backendProjects = ProjectCardData.filter(
    (project) => project.category === "Back-end Projects"
  );
  const otherProjects = ProjectCardData.filter(
    (project) => project.category === "Other Projects"
  );

  return (
    <div className={styles.work_container}>
      {/* Group Projects Section */}
      <h2>Group Projects</h2>
      <div className={styles.project_container}>
        {groupProjects.map((value, index) => (
          <ProjectCard
            key={index}
            imgsrc={value.imgsrc}
            title={value.title}
            text={value.text}
            view={value.view}
            live={value.live}
          />
        ))}
      </div>

      {/* React Projects Section */}
      <h2>React Projects</h2>
      <div className={styles.project_container}>
        {reactProjects.map((value, index) => (
          <ProjectCard
            key={index}
            imgsrc={value.imgsrc}
            title={value.title}
            text={value.text}
            view={value.view}
            live={value.live}
          />
        ))}
      </div>

      {/* Back-end Projects Section */}
      <h2>Back-end Projects</h2>
      <div className={styles.project_container}>
        {backendProjects.map((value, index) => (
          <ProjectCard
            key={index}
            imgsrc={value.imgsrc}
            title={value.title}
            text={value.text}
            view={value.view}
            live={value.live}
          />
        ))}
      </div>

      {/* Other Projects Section */}
      <h2>Other Projects</h2>
      <div className={styles.project_container}>
        {otherProjects.map((value, index) => (
          <ProjectCard
            key={index}
            imgsrc={value.imgsrc}
            title={value.title}
            text={value.text}
            view={value.view}
            live={value.live}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
