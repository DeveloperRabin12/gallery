import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="image-slider">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <div className="slider-controls">
        <button onClick={prevImage}>&#10094;</button>
        <button onClick={nextImage}>&#10095;</button>
      </div>
    </div>
  );
};

export default ImageSlider;
