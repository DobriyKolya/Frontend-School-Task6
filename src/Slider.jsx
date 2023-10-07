
import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import SliderControls from './SliderControls';
import SliderIndicator from './SliderIndicator';
import styles from './style.module.scss';

const slidesData = [
  {
    imageUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg',
    title: 'крутой кот 1',
    description: 'в описании не нуждается',
  },
  {
    imageUrl: 'https://s1.bloknot-voronezh.ru/thumb/850x0xcut/upload/iblock/509/0d1587dc21_7605080_8213488.jpg',
    title: 'смешной кот 2',
    description: 'рыжий',
  },

];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1));
  };
  

  const prevSlide = () => {
    const prev = (currentSlide - 1 + slidesData.length) % slidesData.length;
    setCurrentSlide(prev);
  };

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(nextSlide, 3000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay]);

  return (
    <div className={styles.slider}>
      <Slide
        imageUrl={slidesData[currentSlide].imageUrl}
        title={slidesData[currentSlide].title}
        description={slidesData[currentSlide].description}
      />
      <SliderControls
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        autoplay={autoplay}
        setAutoplay={setAutoplay}
      />
      <SliderIndicator currentSlide={currentSlide} totalSlides={slidesData.length} />
    </div>
  );
}

export default Slider;
