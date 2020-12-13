import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./hero.module.css";

function HeroSection() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <header className={classnames("hero hero--primary", styles.heroBanner)} id='top'>
      <div className={classnames("container", styles.heroContent)}>
        <img src='img/scala.png' />
        <h1 className={classnames("hero__title", styles.hero_title)}>{siteConfig.title}</h1>
        <p className={classnames("hero__subtitle", styles.hero_subtitle)}>
          A guide to building applications and microservices using <span className={styles.heighlightSub}>Scala</span>.
        </p>
        <div className={styles.startBtn}>
          <Link className={styles.getStarted} to={useBaseUrl("docs/")}>
            🚀 Start Building
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
