import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./course.module.css";

const courseIntro = [
  {
    src: "/img/ic_videos.svg",
    des: <>2+ hours of video classes</>,
  },
  {
    src: "/img/ic_handson.svg",
    des: <>Carefully designed hands-on</>,
  },
  {
    src: "/img/ic_zero_cost.svg",
    des: <>Completely free of cost</>,
  },
];

const CourseInfo = ({ src, des }) => {
  return (
    <div className={classnames("", styles.course_list)}>
      <img src={src} />
      <p className={styles.course_text}>{des}</p>
    </div>
  );
};

const AboutCourse = () => {
  return (
    <section className={styles.course_details}>
      <div className='container'>
        <div className={classnames("row", styles.course_Info)}>
          {courseIntro.map((props, i) => (
            <CourseInfo key={i} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
