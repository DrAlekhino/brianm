import { useState } from 'react';
import '../../src/App.css';
import "../../src/global.css";

export default function ImageCarousel({ items = [], pageType = 'graphic-design' }) {
  // Default items for different page types
  const defaultItems = {
    'graphic-design': [
      { title: "Branding", image: "Branding.jpg" },
      { title: "Digital Marketing", image: "Digital Marketing.jpg" },
      { title: "Posters & Banners", image: "Posters & Banners.jpg" },
    ],
    'web-development': [
      { title: "BrianM", image: "brianm-project.jpg" },
      { title: "Fagito", image: "fagito-project.jpg" },
      { title: "Coming Soon", image: "web-default.jpg" }
    ]
  };

  const carouselItems = items.length > 0 ? items : defaultItems[pageType];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const leftIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  const rightIndex = (currentIndex + 1) % carouselItems.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="carousel-container p-6">
      <div className="flex items-center justify-center relative">
        {/* Previous button */}
        <button 
          onClick={prevSlide}
          className="carousel-button text-accent hover:text-accent-dark rounded-full p-2 mr-4 transition-colors"
          aria-label="Previous slide"
        >
          <span className="text-4xl">{String.fromCharCode(8249)}</span>
        </button>

        {/* Left item */}
        <div 
          className="carousel-side-item w-24 h-32 rounded-lg  border-2 shadow-md transition-all transform -rotate-3 hover:scale-105 cursor-pointer"
          onClick={prevSlide}
          style={{ 
            backgroundImage: `url("../images/${carouselItems[leftIndex].image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="carousel-label">
            <span className="text-xs font-medium text-white bg-accent bg-opacity-80 px-1 rounded">{carouselItems[leftIndex].title}</span>
          </div>
        </div>

        {/* Center item */}
        <div 
          className="carousel-main-item w-40 h-48 mx-4 rounded-lg border-2  shadow-lg z-10 transition-all hover:scale-105"
          style={{ 
            backgroundImage: `url("../images/${carouselItems[currentIndex].image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="carousel-label-main">
            <span className="text-sm font-semibold text-white bg-accent bg-opacity-80 px-2 rounded">{carouselItems[currentIndex].title}</span>
          </div>
        </div>

        {/* Right item */}
        <div 
          className="carousel-side-item w-24 h-32 rounded-lg border-2  shadow-md transition-all transform rotate-3 hover:scale-105 cursor-pointer"
          onClick={nextSlide}
          style={{ 
            backgroundImage: `url("../images/${carouselItems[rightIndex].image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="carousel-label">
            <span className="text-xs font-medium text-white bg-accent bg-opacity-80 px-1 rounded">{carouselItems[rightIndex].title}</span>
          </div>
        </div>

        {/* Next button */}
        <button 
          onClick={nextSlide}
          className="carousel-button text-accent hover:text-accent-dark rounded-full p-2 ml-4 transition-colors"
          aria-label="Next slide"
        >
          <span className="text-4xl">{String.fromCharCode(8250)}</span>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? 'bg-accent w-4' : 'bg-accent bg-opacity-30'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}