import React from "react";
import Navbar from "../../reusableCoponents/Navbar/Navbar";
import HeroImage from "../../reusableCoponents/HeroImage/HeroImage";
import Footer from "../../reusableCoponents/Footer/Footer";
import AboutContent from "../AboutContent/AboutContent";

function About() {
  return (
    <div>
      <Navbar />
      <HeroImage
        heading="ABOUT"
        text="I am Kamila, please check out more about me"
      />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default About;
