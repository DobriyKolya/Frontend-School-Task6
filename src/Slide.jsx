import React from 'react';
import styles from './slide.module.scss';

function Slide({ imageUrl, title, description }) {
  return (
    <div className={styles.slide}>
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Slide;
