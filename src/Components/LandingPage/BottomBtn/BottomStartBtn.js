import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./bottombtn.module.css";

const StartBtn = () => {
  return (
    <section className={styles.botm_btn_section}>
      <div className='container'>
        <div className={classnames("row", styles.btn_center)}>
          <Link className={styles.start_btn} to={useBaseUrl("docs/")}>
            Let's begin mastering scala 🏄‍♀️
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartBtn;
