import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Sample images - replace with your API fetched images
  const images = [
    "https://th.bing.com/th/id/R.48c60b5051614cf538bb8eaa57511cc5?rik=Czu%2bFhmCsjYwqg&riu=http%3a%2f%2fperpetualstudent.net%2fwp-content%2fuploads%2f2015%2f03%2fIndian-students.jpg&ehk=vqfvl%2bN9gaJg0zKHdcvsthe91EzcURS1fhhe3Ac%2bCyg%3d&risl=&pid=ImgRaw&r=0",
    
    "https://th.bing.com/th/id/R.48c60b5051614cf538bb8eaa57511cc5?rik=Czu%2bFhmCsjYwqg&riu=http%3a%2f%2fperpetualstudent.net%2fwp-content%2fuploads%2f2015%2f03%2fIndian-students.jpg&ehk=vqfvl%2bN9gaJg0zKHdcvsthe91EzcURS1fhhe3Ac%2bCyg%3d&risl=&pid=ImgRaw&r=0",

    "https://th.bing.com/th/id/R.48c60b5051614cf538bb8eaa57511cc5?rik=Czu%2bFhmCsjYwqg&riu=http%3a%2f%2fperpetualstudent.net%2fwp-content%2fuploads%2f2015%2f03%2fIndian-students.jpg&ehk=vqfvl%2bN9gaJg0zKHdcvsthe91EzcURS1fhhe3Ac%2bCyg%3d&risl=&pid=ImgRaw&r=0",

    "https://th.bing.com/th/id/R.48c60b5051614cf538bb8eaa57511cc5?rik=Czu%2bFhmCsjYwqg&riu=http%3a%2f%2fperpetualstudent.net%2fwp-content%2fuploads%2f2015%2f03%2fIndian-students.jpg&ehk=vqfvl%2bN9gaJg0zKHdcvsthe91EzcURS1fhhe3Ac%2bCyg%3d&risl=&pid=ImgRaw&r=0",
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mb-5 relative w-full h-[500px] overflow-hidden ">
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious} 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={goToNext} 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;