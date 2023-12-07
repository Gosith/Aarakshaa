import React, { useState, useEffect } from 'react';
import "./slideshow.css";
import img1 from "../assets/1.1.jpg";
import img2 from "../assets/1.1.jpg";
import img3 from "../assets/1.1.jpg";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const showSlides = () => {
    const slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    setSlideIndex(prevIndex => {
      let newIndex = prevIndex + 1;

      if (newIndex > slides.length) {
        newIndex = 1;
      }

      slides[newIndex - 1].style.display = "block";
      return newIndex;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(showSlides, 10000);

    return () => {
      // Cleanup function to clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className="slideshow-container">
      <div className="slide fade">
        <img src={img1} alt="Slide 1" />
      </div>
      <div className="slide fade">
        <img src={img2} alt="Slide 2" />
      </div>
      <div className="slide fade">
        <img src={img3} alt="Slide 3" />
      </div>
    </div>
  );
};

export default Slideshow;