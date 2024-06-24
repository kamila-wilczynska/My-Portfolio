import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.left}>
          <div className={styles.location}>
            <IoHomeOutline size={25} className={styles.icon_footer} />
            <div>
              <p>Ealing Broadway, London</p>
            </div>
          </div>
          <div className={styles.email}>
            <GoMail size={25} className={styles.icon_footer} />
            <p>kamila.wilczynska92@gmail.com</p>
          </div>
          <div className={styles.social}>
            <div>
              <a href="https://www.linkedin.com/in/kamila-wilczynska-7590141ab/">
                <CiLinkedin size={25} className={styles.icon_footer} />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/kamila-wilczynska"
                className={styles.social_left}
              >
                <FaGithub size={25} className={styles.icon_footer} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h4>About me</h4>
          <p>
            Hi, I'm Kamila, junior web developer, career-changer. I enjoy
            discussing projects and design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
