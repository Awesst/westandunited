import React from "react";
import styles from "./CardComponent.module.css";

export const CardComponent = ({ image, text }) => {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.cardImage} />
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};
