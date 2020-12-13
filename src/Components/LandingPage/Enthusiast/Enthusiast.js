import React from "react";
import classnames from "classnames";
import styles from "./enthusiast.module.css";
import { EnthuHexaSmall, HexagonWithPic, LargeHexagon } from "../Hexagon/Hexagon";

const Enthusiast = () => {
  return (
    <section className={styles.section_Intro}>
      <div className='container'>
        <div className={classnames("row", styles.box_center)}>
          <div className={styles.intro_header}>
            <EnthuHexaSmall />
            <h1 className={styles.intro_head}>What the learners' community are saying...</h1>
          </div>
        </div>
        <div className={classnames("row", styles.box_center)}>
          <div className={classnames("col col--3", styles.instr_intro)}>
            <h2 style={{ marginTop: "1rem" }}>Very easy to follow and exercise based learning</h2>
            <p>Very easy to follow and exercise based learning.Real world problem statement wan fun to solve.</p>
            <div className={styles.profileContainer}>
              <img
                className={styles.instr_pic}
                src='https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=f05c14dd4db49f08a789e6449604c490'
              />
              <div>
                <h2 style={{ marginTop: "40px" }}>Joe</h2>
                <p>Senior Software Engineer, ABC Corp</p>
              </div>
            </div>
          </div>
          <div className={classnames("col col--3", styles.instr_intro)}>
            <h2 style={{ marginTop: "1rem" }}>Very easy to follow and exercise based learning</h2>
            <p>Very easy to follow and exercise based learning.Real world problem statement wan fun to solve.</p>
            <div className={styles.profileContainer}>
              <img className={styles.instr_pic} src='https://randomuser.me/api/portraits/men/36.jpg' />
              <div>
                <h2 style={{ marginTop: "40px" }}>Danny</h2>
                <p>Senior Software Engineer, XYZ Corp</p>
              </div>
            </div>

            <LargeHexagon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enthusiast;
