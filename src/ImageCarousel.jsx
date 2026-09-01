import { useState, useEffect } from "react";
import "./ImageCarousel.css";

function ImageCarousel() {
  const images = [
    "https://picsum.photos/id/1015/900/500",
    "https://picsum.photos/id/1016/900/500",
    "https://picsum.photos/id/1018/900/500",
    "https://picsum.photos/id/1025/900/500"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  function previousImage() {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <h1>Image Carousel</h1>

      <div className="carousel">
        <button
          className="arrow left"
          onClick={previousImage}
        >
          &#10094;
        </button>

        <img
          src={images[currentIndex]}
          alt="Carousel"
        />

        <button
          className="arrow right"
          onClick={nextImage}
        >
          &#10095;
        </button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={
              index === currentIndex ? "dot active" : "dot"
            }
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      <p>
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}

export default ImageCarousel;