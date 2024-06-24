import React from "react";
import { Link, useNavigate } from "react-router-dom";
import myPicture from "../assets/images/photoCV-copy.jpg";
import project1 from "../assets/images/chaos.png";
import project2 from "../assets/images/trello.png";
import project3 from "../assets/images/group-project.jpg";
import contact from "../assets/images/contact.jpg";
import hobbies from "../assets/images/hobbies.jpg";
import styles from "./AboutContent.module.css";
import "../../index.css";

function AboutContent() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.about}>
      <div className={styles.section}>
        <div className={styles.text_left}>
          <h2>Who Am I?</h2>
          <p className={styles.about_content_paragraph}>
            Hello! I'm Kamila Wilczyńska, a versatile and dedicated full stack
            web developer based in London. I bring a solid foundation in both
            front-end and back-end technologies, sharpened through comprehensive
            training at TechNative Digital's Full Stack Engineer Bootcamp.
          </p>
        </div>
        <div className={styles.image_right}>
          <img src={myPicture} alt="Kamila" className={styles.img} />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.image_left}>
          <div className={styles.img_container}>
            <img
              src={project3}
              alt="Project Experience"
              className={`${styles.img} ${styles.img1}`}
            />
            <img
              src={project2}
              alt="Agile Practices"
              className={`${styles.img} ${styles.img2}`}
            />
            <img
              src={project1}
              alt="Project Experience"
              className={`${styles.img} ${styles.img3}`}
            />
          </div>
        </div>
        <div className={styles.text_right}>
          <h2>About me</h2>
          <p className={styles.about_content_paragraph}>
            <span>Technical Skillset:</span> At TechNative Digital, I mastered
            HTML, CSS, JavaScript, React, Node.js and PostgreSQL through
            hands-on experience. I tackled real-world coding challenges,
            debugged complex issues, and actively used tools like Git and GitHub
            for efficient version control.
            <br />
            <span>Project Experience:</span> During the bootcamp, I participated
            in three group projects where we self-organized using Trello to
            manage our tasks effectively. This experience taught me the
            importance of clear communication and coordination in a development
            environment.
            <br />
            <span>Agile Practices:</span> We adopted Agile methodologies,
            holding daily standups to keep our projects on track and conducting
            retrospectives to continuously improve our processes and outcomes.
            These practices helped me understand the dynamic nature of web
            development and the importance of adapting to changes swiftly.
            <br />
            <span>Exposure to Industry Experts:</span> Each week, we had the
            opportunity to learn from guest speakers from the web development
            industry. These sessions provided invaluable insights into
            professional practices and emerging trends, enriching my
            understanding and enthusiasm for the field.
            <br />
            <span>Adaptability and Problem Solving:</span> My diverse
            background, spanning from paramedicine to customer service, has
            equipped me with exceptional problem-solving skills and the ability
            to stay composed under pressure—traits that are invaluable in tech.
            <br />
            <span>Team Collaboration:</span> The bootcamp emphasized teamwork
            and peer learning, where I engaged in code reviews and provided
            feedback, fostering a collaborative learning environment. This has
            prepared me to thrive in team settings, contributing to and learning
            from collective knowledge.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.text_left}>
          <h2>Outside of coding</h2>
          <p className={styles.about_content_paragraph}>
            My hobbies include traveling, which enriches my creativity;
            recording and editing videos, photography, and painting, which allow
            me to express my artistic side; and maintaining an active lifestyle
            through biking, skiing, and jogging or scuba diving. I'm also an
            avid reader of biographical and popular science literature, seeking
            insights into the minds and achievements of pioneering figures,
            which inspires me to undertake the challenges. How did I start
            coding? You can find the answer{" "}
            <strong
              className={styles.yellow}
              onClick={() => handleClick("/mystory")}
            >
              here
            </strong>
            .
          </p>
        </div>
        <div className={styles.image_right}>
          <img src={hobbies} alt="Hobbies" className={styles.img} />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.image_left}>
          <img src={contact} alt="Contact" className={styles.img} />
        </div>
        <div className={styles.text_right}>
          <h2>Let's Connect!</h2>
          <p>
            I'm excited to bring my technical skills, creative thinking, and
            ability to work well with others to your team. As a junior
            developer, I'm ready to help out and learn a lot along the way.
            While I recognize there's much more for me to learn, my relentless
            curiosity and enthusiasm for discovery make this journey not just a
            goal but an exciting adventure. Together, let's innovate and create
            something truly exceptional!
          </p>
          <Link to="/contact">
            <button className="btn btn-primary">CONTACT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
