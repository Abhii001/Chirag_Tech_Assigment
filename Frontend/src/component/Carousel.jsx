import { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = items[currentIndex];

  return (
    <div className="relative h-[600px]">
      {/* Background Image */}
      <img
        src={currentItem.src}
        alt={currentItem.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          {currentItem.heading}
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">{currentItem.subtext}</p>

        <button
          onClick={() => alert("Start Selling Now!")}
          className="absolute bottom-20 left-8 bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Start Sell Now <i className="fa-solid fa-arrow-right" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex gap-3">
        <button
          onClick={handlePrev}
          className="bg-white text-blue-500 w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-50 transition"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-blue-500 w-12 h-12 flex items-center justify-center rounded-full hover:bg-opacity-50 transition"
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
