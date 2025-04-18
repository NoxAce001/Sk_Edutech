// import React, { useState } from "react";

// const achievers = [
//   { name: "SANIKA", achievement: "96% in 10th Boards", year: "2024", img: "/assets/img5.jpg" },
//   { name: "POOJA RANI", achievement: "MS Office DTP Topper", year: "2024", img: "/assets/img2.png" },
//   { name: "Anil Kumar", achievement: "Full Stack Developer", year: "2024", img: "/assets/img1.jpg" },
//   { name: "JULIE", achievement: "District Topper", year: "2024", img: "/assets/img4.jpg" },
//   { name: "RAHUL", achievement: "Accountant in TCS", year: "2024", img: "/assets/img3.jpg" },
//   { name: "PRIYA", achievement: "Software Engineer at Google", year: "2024", img: "/assets/img2.png" },
//   { name: "MOHIT", achievement: "B.Tech Topper", year: "2024", img: "https://img.freepik.com/free-photo/cheerful-young-woman-taking-notes-while-sitting-steps-street_1153-8613.jpg?semt=ais_hybrid" },
//   { name: "ANJALI", achievement: "10th Board District Ranker", year: "2024", img: "https://img.freepik.com/free-photo/portrait-asian-college-student-campus_231208-1944.jpg?semt=ais_hybrid" },
//   { name: "RAJ", achievement: "Placed in Infosys", year: "2024", img: "https://img.freepik.com/free-photo/front-view-boy-holding-comics-library_23-2150347283.jpg?ga=GA1.1.1574527532.1732859002&semt=ais_hybrid" },
//   { name: "NEHA", achievement: "Full Stack Developer at Microsoft", year: "2024", img: "https://img.freepik.com/free-photo/portrait-student-boy_23-2147668972.jpg?semt=ais_hybrid" },
// ];

// const AchieverSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardsToShow = 5;
//   const [isSliding, setIsSliding] = useState(false);

//   const translateValue = () => `-${currentIndex * (100 / cardsToShow)}%`;

//   const handleTransitionEnd = () => {
//     setIsSliding(false);
//   };

//   const prevAchievers = () => {
//     if (!isSliding) {
//       setIsSliding(true);
//       setCurrentIndex((prevIndex) => (prevIndex === 0 ? achievers.length - cardsToShow : prevIndex - cardsToShow));
//     }
//   };

//   const nextAchievers = () => {
//     if (!isSliding) {
//       setIsSliding(true);
//       setCurrentIndex((prevIndex) => (prevIndex + cardsToShow >= achievers.length ? 0 : prevIndex + cardsToShow));
//     }
//   };

//   return (
//     <div className="relative bg-white py-10">
//       <div className="text-center mb-8">
//         <h2 className="text-2xl font-bold relative inline-block">
//           Our Achievers
//           <div className="absolute left-[22%] right-[22%] bottom-[-8px] h-[3px] bg-black"></div>
//         </h2>
//       </div>

//       <div className="overflow-hidden rounded-md h-72">
//         <div
//           className="flex transition-transform duration-[1500ms] ease-in-out"
//           style={{ transform: `translateX(${translateValue()})` }}
//           onTransitionEnd={handleTransitionEnd}
//         >
//           {achievers.map((achiever, index) => (
//             <div key={index} className="flex-shrink-0  md:w-1/2 lg:w-1/5 px-2 ">
//               <div className="relative group  overflow-hidden shadow-lg w-full h-44 md:h-80 lg:h-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
//                 <img
//                   src={achiever.img}
//                   alt={achiever.name}
//                   className="w-80 h-56 object-cover"
//                 />
//                 <div className="absolute mb-40 bottom-[-50%] left-0 w-full h-1/3 bg-black bg-opacity-50 text-center text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-70 group-hover:bottom-0 transition-all duration-500 ease-in-out shadow-md">
//                   <p className="text-sm font-bold">{achiever.name}</p>
//                   <p className="text-yellow-400 text-xs">{achiever.achievement}</p>
//                   <p className="font-bold text-gray-200 text-xs">{achiever.year}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={prevAchievers}
//           className="absolute mt-6 left-2 top-1/2 transform -translate-y-1/2 bg-black text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-700 transition z-10"
//         >
//           &#x276E;
//         </button>

//         <button
//           onClick={nextAchievers}
//           className="absolute mt-6 right-2 top-1/2 transform -translate-y-1/2 bg-black text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-700 transition z-10"
//         >
//           &#x276F;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AchieverSlider;


import React, { useState, useEffect } from "react";

const achievers = [
  { name: "SANIKA", achievement: "96% in 10th Boards", year: "2024", img: "/assets/img5.jpg" },
  { name: "POOJA RANI", achievement: "MS Office DTP Topper", year: "2024", img: "/assets/img2.png" },
  { name: "ANIL KUMAR", achievement: "Full Stack Developer", year: "2024", img: "/assets/img1.jpg" },
  { name: "JULIE", achievement: "District Topper", year: "2024", img: "/assets/img4.jpg" },
  { name: "RAHUL", achievement: "Accountant in TCS", year: "2024", img: "/assets/img3.jpg" },
  { name: "PRIYA", achievement: "Software Engineer at Google", year: "2024", img: "/assets/img2.png" },
  { name: "MOHIT", achievement: "B.Tech Topper", year: "2024", img: "https://img.freepik.com/free-photo/cheerful-young-woman-taking-notes-while-sitting-steps-street_1153-8613.jpg?semt=ais_hybrid" },
  { name: "ANJALI", achievement: "10th Board District Ranker", year: "2024", img: "https://img.freepik.com/free-photo/portrait-asian-college-student-campus_231208-1944.jpg?semt=ais_hybrid" },
  { name: "RAJ", achievement: "Placed in Infosys", year: "2024", img: "https://img.freepik.com/free-photo/front-view-boy-holding-comics-library_23-2150347283.jpg?ga=GA1.1.1574527532.1732859002&semt=ais_hybrid" },
  { name: "NEHA", achievement: "Full Stack Developer at Microsoft", year: "2024", img: "https://img.freepik.com/free-photo/portrait-student-boy_23-2147668972.jpg?semt=ais_hybrid" },
];

const AchieverSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardsToShow = { mobile: 1, tablet: 2, desktop: 4 };

  // Determine how many cards to display based on screen size
  const [displayCount, setDisplayCount] = useState(cardsToShow.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayCount(cardsToShow.mobile);
      } else if (window.innerWidth < 1024) {
        setDisplayCount(cardsToShow.tablet);
      } else {
        setDisplayCount(cardsToShow.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        handleNext();
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? achievers.length - displayCount : prevIndex - 1;
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1 >= achievers.length ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-white py-8 px-4">
      {/* <div className="text-center mb-10">
        <h2 className="text-3xl font-bold relative inline-block">
          Our Achievers
          <div className="absolute left-1/4 right-1/4 bottom-[-10px] h-[3px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Celebrating excellence and outstanding accomplishments of our students
        </p>
      </div> */}

      <div 
        className="relative overflow-hidden px-8 py-4"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / displayCount)}%)` }}
        >
          {achievers.map((achiever, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/4"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${hoveredCard === index ? 'scale-105 shadow-xl' : ''}`}>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={achiever.img}
                    alt={achiever.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="text-yellow-300 text-sm font-medium">{achiever.year}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{achiever.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{achiever.achievement}</p>
                </div>
                <div className={`h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-300 ${hoveredCard === index ? 'scale-x-100' : ''}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons with improved styles */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: Math.ceil(achievers.length / displayCount) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx * displayCount)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex >= idx * displayCount && currentIndex < (idx + 1) * displayCount
                ? 'w-6 bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AchieverSlider;