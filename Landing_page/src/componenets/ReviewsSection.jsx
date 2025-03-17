import { useEffect, useState } from "react";
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Sample API data - replace with actual API fetch
  const allReviews = [
    {
      name: "John Doe",
      rating: 4,
      comment: "The charms of pleasure of the moment so blinded by.",
      date: "2024-12-01",
      code: "STU2024-01",
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment:
        "The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue.",
      date: "2024-11-15",
      code: "STU2024-02",
    },
    {
      name: "Sam Wilson",
      rating: 3,
      comment:
        "The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue.",
      date: "2024-10-30",
      code: "STU2024-03",
    },
    {
      name: "Emily Davis",
      rating: 5,
      comment:
        "Excellent teaching methods and supportive staff. I've learned so much in a short time.",
      date: "2024-11-05",
      code: "STU2024-04",
    },
    {
      name: "Michael Brown",
      rating: 4,
      comment: "The course content is very comprehensive and relevant.",
      date: "2024-11-20",
      code: "STU2024-05",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "The practical approach to teaching helped me secure a job.",
      date: "2024-10-25",
      code: "STU2024-06",
    },
  ];

  useEffect(() => {
    setReviews(allReviews);
  }, []);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? Math.max(0, reviews.length - 3) : prevIndex - 3
    );
  };

  const handleViewAll = () => {
    navigate("all-reviews");
  };

  // Get current visible reviews (3 at a time)
  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  if (visibleReviews.length < 3 && reviews.length > 3) {
    const remaining = 3 - visibleReviews.length;
    visibleReviews.push(...reviews.slice(0, remaining));
  }

  return (
    <div className="bg-[#FCEEE3] py-14">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Students Say
      </h2>
      <div className="border-t-4 border-black w-20 mx-auto mb-8"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {visibleReviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
              <h3 className="text-lg font-bold text-orange-500">
                {review.name}
              </h3>

              {/* Star Rating */}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-700 mt-2">{review.comment}</p>

              {/* Student Code Field
              <div className="text-center text-gray-800 font-semibold bg-gray-200 rounded-lg py-2 my-4">
                Code: {review.code}
              </div> */}

              {/* Date */}
              <p className="text-sm text-gray-500 mt-auto text-right">
                Center: {review.code}
                </p>

              <p className="text-sm text-gray-500  text-right">

                Posted on: {review.date}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-end  mt-8 gap-4">
          {/* Previous Arrow */}
          <button
            onClick={handlePrevSlide}
            className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition duration-300"
            aria-label="Previous reviews"
          >
            <FaArrowLeft />
          </button>


          {/* Next Arrow */}
          <button
            onClick={handleNextSlide}
            className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition duration-300"
            aria-label="Next reviews"
          >
            <FaArrowRight />
          </button>

          {/* View All Button */}
          <button
            onClick={handleViewAll}
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;



// import { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const ReviewsSection = () => {
//   const [reviews, setReviews] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();

//   // Sample reviews data - replace with your API data when ready
//   const allReviews = [
//     {
//       "name": "John Doe",
//       "rating": 4,
//       "comment": "The charms of pleasure of the moment so blinded by.",
//       "date": "2024-12-01"
//     },
//     {
//       "name": "Jane Smith",
//       "rating": 5,
//       "comment": "The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.",
//       "date": "2024-11-15"
//     },
//     {
//       "name": "Sam Wilson",
//       "rating": 3,
//       "comment": "The charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound ensue and equal blame belongs to those who fail in their duty.",
//       "date": "2024-10-30"
//     },
//     {
//       "name": "Emily Davis",
//       "rating": 5,
//       "comment": "Excellent teaching methods and supportive staff. I've learned so much in a short time.",
//       "date": "2024-11-05"
//     },
//     {
//       "name": "Michael Brown",
//       "rating": 4,
//       "comment": "The course content is very comprehensive and relevant to industry standards.",
//       "date": "2024-11-20"
//     },
//     {
//       "name": "Priya Sharma",
//       "rating": 5,
//       "comment": "The practical approach to teaching has helped me secure a job quickly after finishing my course.",
//       "date": "2024-10-25"
//     }
//   ];

//   useEffect(() => {
//     // In a real implementation, you would fetch from API
//     // For now, we'll use the sample data
//     setReviews(allReviews);
//   }, []);

//   const handleNextSlide = () => {
//     const newIndex = (currentIndex + 3) % reviews.length;
//     // If we would loop back to the beginning, stay at the end
//     setCurrentIndex(newIndex === 0 ? Math.max(0, reviews.length - 3) : newIndex);
//   };

//   const handleViewAll = () => {
//     // Navigate to all reviews page
//     navigate("all-reviews");
//     // Or alternatively, you could implement a modal here
//   };

//   // Get current visible reviews (3 at a time)
//   const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
//   // If we don't have enough reviews to fill the slice, take from the beginning
//   if (visibleReviews.length < 3 && reviews.length > 3) {
//     const remaining = 3 - visibleReviews.length;
//     visibleReviews.push(...reviews.slice(0, remaining));
//   }

//   return (
//     <div className="bg-[#FCEEE3] py-14">
//       <h2 className="text-3xl font-bold text-center mb-6">
//         What Our Students Say 
//       </h2>
//       <div className="border-t-4 border-black w-20 mx-auto mb-8"></div>
      
//       <div className="container mx-auto px-4 relative">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {visibleReviews.map((review, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-lg font-bold text-orange-500">{review.name}</h3>
              
//               {/* Star Rating */}
//               <div className="flex items-center mt-2">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar
//                     key={i}
//                     className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
//                   />
//                 ))}
//               </div>

//               <p className="text-gray-700 mt-2">{review.comment}</p>
//               <p className="text-sm text-gray-500 mt-4">
//                 Posted on: {review.date}
//               </p>
//             </div>
//           ))}
//         </div>
        
//         {/* Navigation Controls */}
//         <div className="flex justify-end items-center mt-8 gap-4">
//           {/* Next Arrow */}
//           <button 
//             onClick={handleNextSlide}
//             className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition duration-300"
//             aria-label="Next reviews"
//           >
//             <FaArrowRight />
//           </button>
          
//           {/* View All Button */}
//           <button 
//             onClick={handleViewAll}
//             className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
//           >
//             View All
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewsSection;

