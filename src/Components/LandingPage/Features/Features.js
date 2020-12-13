import React from "react";
import classnames from "classnames";
import styles from "./features.module.css";
import { HexagonWithIcon } from "../Hexagon/Hexagon";

const features = [
  {
    iconSrc: "/img/ic_no_signup.svg",
    title: <>No Sign-ups required by you</>,
    description: <>On the click of the button, access all the resources.</>,
  },
  {
    iconSrc: "/img/ic_github.svg",
    title: <>Contribut to open source</>,
    description: <>As part of the learning, contribute to a real open source project.</>,
  },
  {
    iconSrc: "/img/ic_real_world.svg",
    title: <>Real-world problem statements</>,
    description: <>Get you hands soiled on solving real world problems so that you feel @home when you hit them in the industry</>,
  },
  {
    iconSrc: "/img/ic_industry_professional.svg",
    title: <>Designed by experienced developers</>,
    description: <>The content is carefully designed by developers for developers.</>,
  },
];

function Feature({ title, description, iconSrc }) {
  return (
    <div className={styles.feature}>
      <HexagonWithIcon iconSrc={iconSrc} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={classnames("container", styles.features_container)}>
        <h1 className={styles.featuresHeader}>🤷‍♂️ Why another guide ?</h1>
        <div className={classnames("row", styles.centered)}>
          {features.map((props, i) => (
            <Feature key={i} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
