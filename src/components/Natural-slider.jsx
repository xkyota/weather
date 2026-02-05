import '../styles/Natural-slider.css';
import { useEffect, useState } from "react";

const API_URL =
  "https://pixabay.com/api/?key=54185859-340dedf3718e4a11a502b364c&q=nature&image_type=photo&per_page=7";

const NaturalSlider = () => {
   const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setImages(data.hits))
      .catch((err) => console.error(err));
  }, []);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  
  return (
    <div className="natural-slider-container">
      <h2 className="natural-slider-title">Beautiful nature</h2>
      <div className="slider-wrapper">
      <button className="nav left" onClick={prev}>‹</button>

      <div className="slider">
        {images.map((img, index) => {
          const offset = index - activeIndex;

          return (
            <img
              key={img.id}
              src={img.largeImageURL}
              alt=""
              className="slide"
              style={{
                transform: `
                  translateX(${offset * 220}px)
                  scale(${index === activeIndex ? 1 : 0.75})
                `,
                opacity: index === activeIndex ? 1 : 0.5,
                zIndex: index === activeIndex ? 10 : 1,
              }}
            />
          );
        })}
      </div>

      <button className="nav right" onClick={next}>›</button>
    </div>
    </div>
  );
};

export default NaturalSlider;
