import React, { useState, useEffect, useRef, useCallback } from "react";

const ImageCarousel = ({ autoPlayInterval = 3000 }) => {
  const images = [
    "https://images.unsplash.com/photo-1581349437894-d8c8c6181c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + images.length - 1) % images.length
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(intervalRef.current);
  }, [goToNext, autoPlayInterval]);

  return (
    <div>
      <button onClick={goToPrev}>Previous</button>
      <div style={{ width: "400px", height: "300px", overflow: "hidden" }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default ImageCarousel;
