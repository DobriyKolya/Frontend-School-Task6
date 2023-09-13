import React from 'react';

function Slide({ imageUrl, title, description }) {
  return (
    <div className="slide">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Slide;
