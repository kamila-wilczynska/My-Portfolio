import React from "react";
import Navbar from "../../reusableCoponents/Navbar/Navbar";
import Hero from "../../reusableCoponents/Hero/Hero";
import Footer from "../../reusableCoponents/Footer/Footer";
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
