import React from "react";
import Navbar from "../../reusableComponents/Navbar/Navbar";
import Hero from "../../reusableComponents/Hero/Hero";
import Footer from "../../reusableComponents/Footer/Footer";
import { Link } from "react-router-dom";
import myStoryBackgroundImage2 from "../../components/assets/images/Bez nazwy-1.jpg";
import styles from "./MyStory.module.css";

function MyStory() {
  return (
    <div>
      <Navbar />
      <Hero heroImage={myStoryBackgroundImage2} />
      <div className={styles.section}>
        <div className={styles.mystory}>
          <h2>My Journey to Web Development</h2>
          <p className={styles.mystoryContentParagraph}>
            My path to web development has been a winding but incredibly
            fulfilling journey. My background might be unconventional for a web
            developer, but it's filled with experiences that make me a unique
            and valuable addition to the tech world.
          </p>
          <p className={styles.mystoryContentParagraph}>
            I graduated in International Security and Paramedicine. As a child,
            I didn't like foreign languages because I never thought I'd leave my
            country. But as I grew older, my curiosity blossomed. I believe
            everyone has a superpower, and mine are curiosity and persistence.
            This superpower allowed me to finish two degrees, volunteer with a
            mountain rescue team, volunteering in couple of different projects
            (teaching first aid in primary schools or organizing time for kids
            in orphanage in DRC) my curiosity led me to hitchhike, travel, meet
            fascinating people, scuba diving, skiing, paragliging, run
            halfmaraton or dive into creative projects like painting, soap
            making or cooking. These experiences made me appreciate different
            cultures and even sparked a love for foreign languages.
          </p>
          <p className={styles.mystoryContentParagraph}>
            After graduating, I worked as a paramedic, helping people recover
            from accidents. This job required not only medical skills but also
            empathy and mental resilience. During winters, I also worked as a
            paramedic on ski slopes. These roles were challenging but rewarding.
          </p>

          <p className={styles.mystoryContentParagraph}>
            Craving new experiences, I decided to move abroad. Initially, I
            didn't have the confidence to take on a highly qualified job. But as
            I got used to different English accents and cultures, I landed a job
            at a pharmaceutical company as a drug compounder. This role improved
            my English and introduced me to the life-saving industry. However,
            the repetitive tasks made me realize that I needed a more dynamic
            role.
          </p>
          <p className={styles.mystoryContentParagraph}>
            I transitioned to a company specializing in bespoke glass designs, a
            field entirely new to me but free from repetitive tasks. During this
            period, I took the Gallup CliftonStrengths test, which highlighted
            my top strengths: Input, Empathy, Connectedness, Ideation, and
            Intellection. These insights made me realize my passion for
            collaboration, project influence, and seeing tangible outcomes of my
            work. I also spent my free time learning creative software like
            Adobe and DaVinci, thoroughly enjoying creating visually appealing
            projects. These experiences collectively nudged me towards the tech
            world, where I could combine my strengths and passions.
          </p>
          <p className={styles.mystoryContentParagraph}>
            Later on, I undertook some onlline courses, balancing a full-time
            job, and began teaching myself HTML, CSS, JavaScript, and WordPress.
            It was tough, and I was often exhausted, but I was determined. My
            hard work paid off when I was selected to participate in the
            TechNative Digital Bootcamp in Brighton in March 2024—a competitive
            program, where I could focus just on gaining technical knowledge and
            developing soft skills.
          </p>

          <h2>What makes me an outstanding Junior Web Developer</h2>

          <p className={styles.mystoryContentParagraph}>
            <strong>Passion and Curiosity:</strong> My life is driven by a
            passion for learning and discovering new things.
            <br />
            <strong>Empathy and Communication:</strong> Working with patients
            has honed my ability to listen, empathize, and communicate
            effectively—skills essential for teamwork and user-focused design.
            <br />
            <strong>Strategic Thinking and Ideation:</strong> My strategic
            thinking and ideation skills help me approach problems creatively
            and find effective solutions.
            <br />
            <strong>Connectedness:</strong> My ability to see the big picture
            and understand how different elements connect makes me a thoughtful
            and considerate team member.
            <br />
            <strong>Input and Intellection: </strong>My love for gathering
            information and deep thinking allows me to contribute valuable
            insights and innovative ideas.
            <br />
            <strong>Adaptability: </strong>My journey shows that I can adapt to
            new environments and challenges, thriving under pressure.
            <br />
            <strong>Dedication to Tech:</strong> Despite a full-time job, I
            dedicated myself to learning web development, showing my commitment
            and passion for the field. <br />
          </p>
          <p className={styles.mystoryContentParagraph}>
            I'm excited to bring my unique experiences, energy, and passion for
            technology to a junior web developer role. I'm eager to learn, grow,
            and contribute to projects that make a difference.
          </p>
          <p className={styles.mystoryContentParagraph}>
            <Link to="/" className={styles.backToHome}>
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyStory;
