import React from 'react';
import styles from './SliderIndicator.module.scss';

function SliderIndicator({ currentSlide, totalSlides }) {
  return (
    <div className={styles['slider-indicator']}>
      <p>
        Слайд {currentSlide + 1} из {totalSlides}
      </p>
    </div>
  );
}

export default SliderIndicator;
