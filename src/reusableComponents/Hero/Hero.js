import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero({ heroImage, heading, text, showButtons = true, showIntro = true }) {
  return (
    <div className={styles.hero}>
      <div className={styles.mask}>
        <img className={styles.image} alt="hero" src={heroImage} />
        <div className={styles.content}>
          {showIntro && <p>Hi, I am Kamila</p>}
          <h1>{heading}</h1>
          <p>{text}</p>
          {showButtons && (
            <div>
              <Link to="/projects" className={styles.btn}>Projects</Link>
              <Link to="/contact" className={`${styles.btn} ${styles.btn_light}`}>Contact</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
