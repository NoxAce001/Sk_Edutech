import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactUsSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-6">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold relative inline-block text-gray-900">
          Contact Us
          <div className="absolute left-0 right-0 bottom-[-6px] w-24 mx-auto h-[3px] bg-black"></div>
        </h2>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {/* Address Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 hover:shadow-lg">
          <FaMapMarkerAlt className="text-blue-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
          <p className="text-gray-700">First floor, Link Road NH-48, Narsinghpur, Gurgaon HR</p>
        </div>

        {/* Call Us Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 hover:shadow-lg">
          <FaPhoneAlt className="text-green-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us On</h3>
          <p className="text-gray-700">+91 8700810876</p>
          <p className="text-gray-700">+91 8860836811</p>
        </div>

        {/* Email Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition duration-300 hover:shadow-lg">
          <FaEnvelope className="text-red-600 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-700">skcoachingclasses722@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
