import {
    FaApple,
    FaCheckCircle,
    FaFileSignature,
    FaFolderPlus,
    FaGraduationCap,
  } from "react-icons/fa";
  import { FaBuilding } from "react-icons/fa";
  
  // import { FontAwesomeIcon } from "react";
  
  const LoginBoxes = () => {
    return (
      // Parent div which contains 5 divs inside
      <div className="  flex justify-center gap-10 p-4 mx-12 mb-10">
        {/* Single div which contains two div: icon and text */}
  
        <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
          <div className="flex items-center">
            <div className="px-1 mr-4 ">
              {/* Graduation Cap Icon with group-hover effect */}
              <FaGraduationCap
                className="text-[#003366] group-hover:text-white transition duration-300"
                size={50}
              />
            </div>
            <div className="text-xl group-hover:text-white transition duration-300">
              Student <br />
              Login
            </div>
          </div>
        </div>
  
        <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
          <div className="flex items-center">
            <div className="px-1 mr-4">
              {/* Graduation Cap Icon with group-hover effect */}
              <FaBuilding
                className="text-[#003366] group-hover:text-white transition duration-300"
                size={50}
              />
            </div>
            <div className="text-xl group-hover:text-white transition duration-300">
              Center <br />
              Login
            </div>
          </div>
        </div>
  
        <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
          <div className="flex items-center">
            <div className="px-1 mr-4">
              {/* Graduation Cap Icon with group-hover effect */}
              <FaFileSignature
                className="text-[#003366] group-hover:text-white transition duration-300"
                size={50}
              />
            </div>
            <div className="text-xl group-hover:text-white transition duration-300">
              Certificate <br />
              Verification
            </div>
          </div>
        </div>
  
        <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
          <div className="flex items-center">
            <div className="px-1 mr-4">
              {/* Graduation Cap Icon with group-hover effect */}
              <FaCheckCircle
                className="text-[#003366] group-hover:text-white transition duration-300"
                size={50}
              />
            </div>
            <div className="text-xl group-hover:text-white transition duration-300">
              Center <br />
              Verification
            </div>
          </div>
        </div>
  
        <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
          <div className="flex items-center">
            <div className="px-1 mr-4">
              {/* Graduation Cap Icon with group-hover effect */}
              <FaFolderPlus
                className="text-[#003366] group-hover:text-white transition duration-300"
                size={50}
              />
            </div>
            <div className="text-xl group-hover:text-white transition duration-300">
              Apply for <br />
              Franchise
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default LoginBoxes;
  