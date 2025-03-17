import React from "react";
import AchieverSlider from "./AchieverSlider";

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState,useEffect } from "react";

const OurAchievers = () => {
  // Sample data for achievers
  const achievers = [
    { id: 1, name: "Satish Kumar", image: "/api/placeholder/150/150" },
    { id: 2, name: "Rajesh", image: "/api/placeholder/150/150" },
    { id: 3, name: "Satbir Kumar", image: "/api/placeholder/150/150" },
  ];

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
    <div className="mx-10 my-6 justify-center p-8 flex flex-col lg:flex-row gap-8 ">
      {/* Left div for images from API */}
      <div className="w-[550px] h-[500px] relative rounded-3xl overflow-hidden bg-gray-100">
        

        {/* <ImageSlider/> */}

        <div className="relative w-full h-[500px] overflow-hidden ">
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

          {/* Navigation Arrows
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
          </button> */}

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              />
            ))}
          </div>
        </div>
       
      </div>

      {/* Right content div */}
      <div className="lg:w-2/3">
        {/* Text content */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Achievers
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our people make empowering great cultures possible. We know what it
            takes to drive greater engagement because we live it every day — and
            we're passionate about sharing our know-how with your organization.
          </p>
        </div>

        {/* Profile icons grid */}
        <div className="">
          {/* {achievers.map((achiever) => (
            <div key={achiever.id} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-cyan-100 mb-2">
                <img 
                  src={achiever.image} 
                  alt={achiever.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-800 text-center">{achiever.name}</h3>
            </div>
          ))} */}
          <AchieverSlider />
        </div>
      </div>
    </div>
  );
};

export default OurAchievers;
