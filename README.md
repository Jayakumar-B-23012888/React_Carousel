# Ex05 Image Carousel
## Date: 27/08/2026
## Name: Jayakumar B
## Reg N0.: 212223040073

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM
### Imagecarousel.jsx
```javascript
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

  // Next image
  function nextImage() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  // Previous image
  function previousImage() {
    setCurrentIndex(
      (currentIndex - 1 + images.length) % images.length
    );
  }

  // Automatic rotation
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

        {/* Previous Arrow */}
        <button
          className="arrow left"
          onClick={previousImage}
        >
          &#10094;
        </button>

        {/* Image */}
        <img
          src={images[currentIndex]}
          alt="Carousel"
        />

        {/* Next Arrow */}
        <button
          className="arrow right"
          onClick={nextImage}
        >
          &#10095;
        </button>

      </div>

      {/* Dots */}
      <div className="dots">

        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
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
```
### Imagecarousel.css
```css
.carousel-container {
  text-align: center;
  margin-top: 40px;
}

.carousel-container h1 {
  font-size: 32px;
  margin-bottom: 25px;
}

.carousel {
  width: 900px;
  height: 500px;
  margin: auto;
  position: relative;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

/* Arrow buttons */

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 50px;
  height: 50px;

  border: none;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.6);
  color: white;

  font-size: 30px;
  cursor: pointer;

  z-index: 2;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.9);
}

.left {
  left: 15px;
}

.right {
  right: 15px;
}

/* Dots */

.dots {
  margin-top: 20px;
}

.dot {
  display: inline-block;

  width: 10px;
  height: 10px;

  margin: 0 6px;

  background: #bbb;
  border-radius: 50%;

  cursor: pointer;
}

.dot.active {
  background: #333;
  transform: scale(1.3);
}

.carousel-container p {
  font-size: 16px;
}
```

## OUTPUT
<img width="1920" height="967" alt="image" src="https://github.com/user-attachments/assets/b8df3693-8d39-4b40-a84e-142125c1a131" />
<img width="1917" height="946" alt="image" src="https://github.com/user-attachments/assets/a31418f9-f5a9-4869-816e-8d7086984e56" />
<img width="1920" height="965" alt="image" src="https://github.com/user-attachments/assets/af388698-0020-4d26-8d0b-dddc86abde21" />
<img width="1920" height="957" alt="image" src="https://github.com/user-attachments/assets/99da7213-fa98-4fec-9909-5022a513b8a7" />




## RESULT
The program for creating Image Carousel using React is executed successfully.
