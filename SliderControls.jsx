import React from 'react';

function SliderControls({ nextSlide, prevSlide, autoplay, setAutoplay }) {
  return (
    <div className="slider-controls">
      <button onClick={prevSlide}>Предыдущий</button>
      <button onClick={nextSlide}>Следующий</button>
      <button onClick={() => setAutoplay(!autoplay)}>
        {autoplay ? 'Выключить автопроигрывание' : 'Включить автопроигрывание'}
      </button>
    </div>
  );
}

export default SliderControls;
