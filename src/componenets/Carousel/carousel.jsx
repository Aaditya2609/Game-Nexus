import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 8000);

    return () => clearInterval(interval);
  }, []); // empty dependency array ensures that the effect runs only once

  return (
    <div className="carousel">
      <button className="carousel-button previous" onClick={previousImage}>
      <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="image-container">
        <img
          className="carousel-image"
          src={images[currentImageIndex]?.url}
          alt={`Image ${currentImageIndex}`}
        />
        <div className="image-overlay">
          <h2>{images[currentImageIndex]?.name}</h2>
          <p>{images[currentImageIndex]?.description}</p>
        </div>
      </div>
      <button className="carousel-button next" onClick={nextImage}>
      <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Carousel;
