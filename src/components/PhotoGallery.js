import React from 'react';
import './PhotoGallery.css';

const PhotoGallery = ({ images }) => {
  return (
    <div className="photo-gallery-container">
      <h1>Photo Gallery</h1>
      <div className="photo-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
