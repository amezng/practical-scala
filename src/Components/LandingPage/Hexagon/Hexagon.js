import React from "react";
import styles from "./hexagon.module.css";

export const HexagonWithIcon = ({ iconSrc }) => {
  return (
    <div className={styles.hexaicon}>
      <div className={styles.hexagon}>
        <div className={styles.hexagon_shape}>
          <div className={styles.hexagon_shape_inner}>
            <div className={styles.hexagon_shape_inner_2}></div>
          </div>
        </div>
        <div className={styles.hexagon_content}>
          <img className={styles.features_icon} src={iconSrc} />
        </div>
      </div>
    </div>
  );
};

export const AboutHexagon = () => {
  return (
    <>
      <div className={styles.about_outer_hex}></div>
      <div className={styles.about_inner_hexagon}></div>
    </>
  );
};

export const EnthuHexaSmall = () => {
  return (
    <div className={styles.intro_hexagon}>
      <div className={styles.intro_inner_hexagon}></div>
      <div className={styles.intro_outer_hexagon}></div>
    </div>
  );
};

export const HexagonWithPic = () => {
  return (
    <div className={styles.hexapic}>
      <div className={styles.hexagon}>
        <div className={styles.hexagon_shape}>
          <div className={styles.hexagon_shape_inner}>
            <div className={styles.hexagon_shape_inner_2}></div>
          </div>
        </div>
        <div className={styles.hexagon_content}>
          <div className={styles.content_title}>
            <img className={styles.instr_pic} src='/img/Instructor_Pic.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export const LargeHexagon = () => {
  return <div className={styles.hex}></div>;
};
