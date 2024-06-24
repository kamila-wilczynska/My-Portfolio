import React from "react";
import Navbar from "../../reusableComponents/Navbar/Navbar";
import Hero from "../../reusableComponents/Hero/Hero";
import Footer from "../../reusableComponents/Footer/Footer";
import AboutContent from "../AboutContent/AboutContent";
import heroImage from "../../components/assets/images/herohome.png";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero heading="FULL STACK WEB DEVELOPER " heroImage={heroImage} />
      <AboutContent />
      <Footer />
    </div>
  );
}

export default Home;
