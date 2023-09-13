import React from 'react';

function SliderIndicator({ currentSlide, totalSlides }) {
  return (
    <div className="slider-indicator">
      <p>
        Слайд {currentSlide + 1} из {totalSlides}
      </p>
    </div>
  );
}

export default SliderIndicator;
