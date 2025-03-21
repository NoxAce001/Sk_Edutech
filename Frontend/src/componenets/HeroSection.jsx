import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
// import { FaSearch } from "react-icons/fa";
// import "./styles/featuresSection.css"

const HeroSection = () => {
  return (
    <div className="relative w-full h-svh  mt-8 hero-section">
      {/* Slider */} 
      <Swiper
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full h-5/6"
      >
        {/* Swiper Slides */}
        <SwiperSlide>
          <div
            className="w-screen filter brightness-50 h-svh bg-cover bg-center"
            style={{
              backgroundImage: "url('https://th.bing.com/th/id/R.48c60b5051614cf538bb8eaa57511cc5?rik=Czu%2bFhmCsjYwqg&riu=http%3a%2f%2fperpetualstudent.net%2fwp-content%2fuploads%2f2015%2f03%2fIndian-students.jpg&ehk=vqfvl%2bN9gaJg0zKHdcvsthe91EzcURS1fhhe3Ac%2bCyg%3d&risl=&pid=ImgRaw&r=0')",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-screen filter brightness-50 h-svh bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/slider2.jpg')",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-screen filter brightness-50 h-svh bg-cover bg-center"
            style={{
              // backgroundImage: "url('')",
              backgroundImage: "url('/assets/slider2.jpg')",

            }}
          ></div>
        </SwiperSlide>
      </Swiper>

      {/* Static Search Bar */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full z-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 mt-20 text-white">
            Welcome to SK Edutech
          </h1>
          {/* <div className="flex justify-center items-center bg-white rounded-full shadow-lg pl-2 pr-1 py-1 w-3/6 mx-auto">
          <FaSearch className="ml-2 text-lg text-gray-400" />
            <input
              type="text"
              placeholder="Search Available Courses"
              className="flex-grow px-4  text-gray-700 outline-none"
            />
            <button className="bg-[#003366] text-white px-4 py-3  rounded-full   hover:bg-[#001932]">
              Search Courses
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
