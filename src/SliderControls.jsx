import React from 'react';
import styles from './SliderControls.module.scss';

function SliderControls({ nextSlide, prevSlide, autoplay, setAutoplay }) {
  return (
    <div className={styles['slider-controls']}>
      <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button>
      <button onClick={() => setAutoplay(!autoplay)}>
        {autoplay ? 'Auto on' : 'Auto off'}
      </button>
    </div>
  );
}

export default SliderControls;
