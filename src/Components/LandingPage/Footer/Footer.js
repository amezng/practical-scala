import React from "react";
import classnames from "classnames";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className='container'>
        <div className={classnames("row", styles.footer_links)}>
          <div className={styles.footer_link}>
            <h4 className={styles.footer_title}>Terms</h4>
            <ul className={styles.footer_items}>
              <li className={styles.footer_item}>Terms of Service</li>
              <li className={styles.footer_item}>Privacy Policy</li>
            </ul>
          </div>
          <div className={styles.footer_link}>
            <h4 className={styles.footer_title}>Community</h4>
            <ul className={styles.footer_items}>
              <li className={styles.footer_item}>Feedback</li>
            </ul>
          </div>
          <div className={styles.footer_link}>
            <h4 className={styles.footer_title}>Profile</h4>
            <ul className={styles.footer_items}>
              <li className={styles.footer_item}>Github</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.arrow_up_btn}>
        <a href='#top'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='arrow-up'
            className={styles.fa_arrow_up}
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'>
            <path
              fill='currentColor'
              d='M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z'></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Footer;
