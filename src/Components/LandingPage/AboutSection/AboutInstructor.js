import React from "react";
import styles from "./about.module.css";
import { AboutHexagon } from "../Hexagon/Hexagon";

const AboutInstuctor = () => {
  return (
    <section className={styles.about_instructor}>
      <div className={styles.about_header}>
        <div>
          <AboutHexagon />
          <h1>About the Author</h1>
          <div className={styles.about_details}>
            <p>Lorem Ipsum is simply dummy text of the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
            <h2>Shad Amez, Co-founder of Gigahex</h2>
          </div>
        </div>
        <div className={styles.about_img}>
          <img src='/img/Instructor_Pic.png' />
        </div>
      </div>
      <div className={styles.about_content}></div>
    </section>
  );
};

export default AboutInstuctor;
