import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AllReviewsPage = () => {
//   const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCode, setFilterCode] = useState("all");
  const [reviewType, setReviewType] = useState("all"); // all, positive, negative
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  const reviews = [
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
    // Fetch reviews from API (replace with actual API call)
    const fetchReviews = async () => {
      const response = await fetch("https://api.example.com/reviews");
      const data = await response.json();
      setReviews(data);
      setFilteredReviews(data);
    };
    fetchReviews();
  }, []);

  // Filter & Search Logic
  useEffect(() => {
    let filtered = reviews;

    // Filter by Center Code
    if (filterCode !== "all") {
      filtered = filtered.filter((review) => review.code === filterCode);
    }

    // Filter by Review Type
    if (reviewType === "positive") {
      filtered = filtered.filter((review) => review.rating >= 4);
    } else if (reviewType === "negative") {
      filtered = filtered.filter((review) => review.rating < 4);
    }

    // Search by Name
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter((review) =>
        review.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredReviews(filtered);
    setCurrentPage(1);
  }, [filterCode, reviewType, searchQuery, reviews]);

  // Pagination Logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">All Reviews</h2>
        <div className="border-t-4 border-black w-20 mx-auto mb-8"></div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-4 rounded-lg mb-6">
          <input
            type="text"
            placeholder="Search by Student Name..."
            className="border rounded-lg px-4 py-2 w-full md:w-1/3 mb-4 md:mb-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            className="border rounded-lg px-4 py-2 w-full md:w-1/4 mb-4 md:mb-0"
            value={filterCode}
            onChange={(e) => setFilterCode(e.target.value)}
          >
            <option value="all">All Center Codes</option>
            <option value="STU2024-01">STU2024-01</option>
            <option value="STU2024-02">STU2024-02</option>
            <option value="STU2024-03">STU2024-03</option>
          </select>

          <select
            className="border rounded-lg px-4 py-2 w-full md:w-1/4"
            value={reviewType}
            onChange={(e) => setReviewType(e.target.value)}
          >
            <option value="all">All Reviews</option>
            <option value="positive">Positive Reviews</option>
            <option value="negative">Negative Reviews</option>
          </select>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 gap-6">
          {currentReviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
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

              {/* Student Code */}
              <p className="text-sm text-gray-500 mt-auto text-right">
                Code: {review.code}
              </p>

              {/* Date */}
              <p className="text-sm text-gray-500 text-right">
                Posted on: {review.date}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {Array.from(
            { length: Math.ceil(filteredReviews.length / reviewsPerPage) },
            (_, i) => (
              <button
                key={i}
                className={`mx-1 px-4 py-2 rounded-lg ${
                  currentPage === i + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AllReviewsPage;
