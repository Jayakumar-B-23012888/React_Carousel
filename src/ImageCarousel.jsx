
import { useEffect, useState } from "react";
import "./ImageCarousel.css";

function ImageCarousel() {
  const images = [
    "https://picsum.photos/id/1015/900/500",
    "https://picsum.photos/id/1016/900/500",
    "https://picsum.photos/id/1018/900/500",
    "https://picsum.photos/id/1025/900/500",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % images.length
    );
  }

  function previousImage() {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.length) % images.length
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <h1>Image Carousel</h1>

      <div className="carousel">
        <button
          className="arrow left"
          onClick={previousImage}
          aria-label="Previous image"
        >
          &#10094;
        </button>

        <img
          src={images[currentIndex]}
          alt={`Carousel ${currentIndex + 1}`}
        />

        <button
          className="arrow right"
          onClick={nextImage}
          aria-label="Next image"
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
            role="button"
            tabIndex="0"
            aria-label={`Go to image ${index + 1}`}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setCurrentIndex(index);
              }
            }}
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
