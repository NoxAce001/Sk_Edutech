import React, { useState } from "react";

const achievers = [
  { name: "SANIKA", achievement: "96% in 10th Boards", year: "2024", img: "/assets/img5.jpg" },
  { name: "POOJA RANI", achievement: "MS Office DTP Topper", year: "2024", img: "/assets/img2.png" },
  { name: "Anil Kumar", achievement: "Full Stack Developer", year: "2024", img: "/assets/img1.jpg" },
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
  const cardsToShow = 5;
  const [isSliding, setIsSliding] = useState(false);

  const translateValue = () => `-${currentIndex * (100 / cardsToShow)}%`;

  const handleTransitionEnd = () => {
    setIsSliding(false);
  };

  const prevAchievers = () => {
    if (!isSliding) {
      setIsSliding(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? achievers.length - cardsToShow : prevIndex - cardsToShow));
    }
  };

  const nextAchievers = () => {
    if (!isSliding) {
      setIsSliding(true);
      setCurrentIndex((prevIndex) => (prevIndex + cardsToShow >= achievers.length ? 0 : prevIndex + cardsToShow));
    }
  };

  return (
    <div className="relative bg-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold relative inline-block">
          Our Achievers
          <div className="absolute left-[22%] right-[22%] bottom-[-8px] h-[3px] bg-black"></div>
        </h2>
      </div>

      <div className="overflow-hidden rounded-md h-72">
        <div
          className="flex transition-transform duration-[1500ms] ease-in-out"
          style={{ transform: `translateX(${translateValue()})` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {achievers.map((achiever, index) => (
            <div key={index} className="flex-shrink-0  md:w-1/2 lg:w-1/5 px-2 ">
              <div className="relative group  overflow-hidden shadow-lg w-full h-44 md:h-80 lg:h-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <img
                  src={achiever.img}
                  alt={achiever.name}
                  className="w-80 h-56 object-cover"
                />
                <div className="absolute mb-40 bottom-[-50%] left-0 w-full h-1/3 bg-black bg-opacity-50 text-center text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-70 group-hover:bottom-0 transition-all duration-500 ease-in-out shadow-md">
                  <p className="text-sm font-bold">{achiever.name}</p>
                  <p className="text-yellow-400 text-xs">{achiever.achievement}</p>
                  <p className="font-bold text-gray-200 text-xs">{achiever.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevAchievers}
          className="absolute mt-6 left-2 top-1/2 transform -translate-y-1/2 bg-black text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-700 transition z-10"
        >
          &#x276E;
        </button>

        <button
          onClick={nextAchievers}
          className="absolute mt-6 right-2 top-1/2 transform -translate-y-1/2 bg-black text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full hover:bg-gray-700 transition z-10"
        >
          &#x276F;
        </button>
      </div>
    </div>
  );
};

export default AchieverSlider;