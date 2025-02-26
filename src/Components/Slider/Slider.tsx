import { FC, useEffect, useState, useRef } from "react";
import "./Slider.scss";

interface SliderProps {
  slides: string[];
}

const Slider: FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    resetTimer();
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(nextSlide, 3000);
  };

  useEffect(() => {
    resetTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Длительность анимации

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="slider">
      <button className="sliderLeft" onClick={prevSlide}>{"<"}</button>
      {slides.map((slide, index) => (
        <img
          key={index++}
          src={`/job-cases/${slide}`}
          alt=""
          className={`${index === currentIndex ? 'visible' : 'hidden'} ${isTransitioning ? 'hidden' : ''}`}
        />
      ))}
      <button className="sliderRight" onClick={nextSlide}>{">"}</button>
    </div>
  );
};

export default Slider;
