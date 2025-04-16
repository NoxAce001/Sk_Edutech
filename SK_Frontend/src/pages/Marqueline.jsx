import React, { useEffect, useState } from "react";
import axios from "axios";

const MarqueeManager = () => {
  const [marqueeText, setMarqueeText] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch existing marquee text
  useEffect(() => {
    const fetchMarquee = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/marquee");
        setMarqueeText(res.data?.text || "");
      } catch (error) {
        console.error("Error fetching marquee text:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMarquee();
  }, []);

  // Handle update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/v1/marquee", { text: marqueeText });
      alert("Marquee text updated successfully!");
    } catch (error) {
      console.error("Error updating marquee:", error);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">📰 Marquee Manager</h1>

      {/* Live Preview */}
      <div className="bg-yellow-100 text-yellow-800 font-semibold py-2 px-4 rounded mb-4 shadow animate-marquee whitespace-nowrap overflow-hidden">
        <marquee behavior="scroll" direction="left">
          {loading ? "Loading..." : marqueeText}
        </marquee>
      </div>

      {/* Edit Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded w-full max-w-2xl">
        <label className="block text-gray-700 mb-2 font-medium">Update Marquee Text</label>
        <textarea
          className="w-full p-3 border rounded mb-4"
          rows={3}
          value={marqueeText}
          onChange={(e) => setMarqueeText(e.target.value)}
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2 rounded"
        >
          Save Marquee
        </button>
      </form>
    </div>
  );
};

export default MarqueeManager;
