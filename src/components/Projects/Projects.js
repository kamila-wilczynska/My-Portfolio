import React from "react";
import Navbar from "../../reusableComponents/Navbar/Navbar";
import Hero from "../../reusableComponents/Hero/Hero";
import Footer from "../../reusableComponents/Footer/Footer";
// import ProjectCard from "../ProjectCard/ProjectCard"
import Work from "../Work/Work";
import heroImage2 from "../../components/assets/images/heroprojects.png";

function Projects() {
  return (
    <div>
      <Navbar />
      <Hero
        heroImage={heroImage2}
        heading="PROJECTS"
        text="see my most recent projects"
        showButtons={false}
        showIntro={false}
      />
      <Work />
      <Footer />
    </div>
  );
}

export default Projects;
