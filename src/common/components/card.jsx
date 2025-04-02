import React from "react";
import styles from "./card.module.css";

const Card = ({ title, text, image, backgroundColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardText}>{text}</p>
      </div>
    </div>
  );
};

export default Card;
