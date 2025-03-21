import {
  FaGraduationCap,
  FaBuilding,
  FaFileSignature,
  FaCheckCircle,
  FaFolderPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginBoxes = () => {
  const navigate = useNavigate();
  const ApplyFranchise = () => {
    navigate("/Apply for Franchise");
  };

  return (
    // Parent div - Responsive grid layout
    <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 gap-6 p-4 mx-4 md:mx-12 mb-10">
      {/* Student Login */}
      <div className="group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-6 py-8 flex items-center justify-center flex-col lg:flex-row gap-4 transition duration-500 hover:bg-sky-950 cursor-pointer">
        <FaGraduationCap className="text-[#003366] group-hover:text-white transition duration-300" size={50} />
        <div className="text-xl group-hover:text-white transition duration-300 text-center lg:text-left mt-2">
          Student <br /> Login
        </div>
      </div>

      {/* Center Login */}
      <div className="group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-6 py-8 flex items-center justify-center flex-col lg:flex-row gap-4 transition duration-500 hover:bg-sky-950 cursor-pointer">
        <FaBuilding className="text-[#003366] group-hover:text-white transition duration-300" size={50} />
        <div className="text-xl group-hover:text-white transition duration-300 text-center lg:text-left mt-2">
          Center <br /> Login
        </div>
      </div>

      {/* Certificate Verification */}
      <div className="group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-6 py-8 flex items-center justify-center flex-col  lg:flex-row gap-4 transition duration-500 hover:bg-sky-950 cursor-pointer">
        <FaFileSignature className="text-[#003366] group-hover:text-white transition duration-300" size={50} />
        <div className="text-xl group-hover:text-white transition duration-300 text-center lg:text-left mt-2">
          Certificate <br /> Verification
        </div>
      </div>

      {/* Center Verification */}
      <div className="group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-6 py-8 flex items-center justify-center flex-col  lg:flex-row gap-4 transition duration-500 hover:bg-sky-950 cursor-pointer">
        <FaCheckCircle className="text-[#003366] group-hover:text-white transition duration-300" size={50} />
        <div className="text-xl group-hover:text-white transition duration-300 text-center lg:text-left mt-2">
          Center <br /> Verification
        </div>
      </div>

      {/* Apply for Franchise */}
      <div
        onClick={ApplyFranchise}
        className="group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-6 py-8 flex items-center justify-center flex-col  lg:flex-row gap-2 transition duration-500 hover:bg-sky-950 cursor-pointer"
      >
        <FaFolderPlus className="text-[#003366] group-hover:text-white transition duration-300" size={50} />
        <div className="text-xl group-hover:text-white transition duration-300 text-left lg:text-center mt-2">
          Apply for <br /> Franchise
        </div>
      </div>
    </div>
  );
};

export default LoginBoxes;




// import {
//     FaApple,
//     FaCheckCircle,
//     FaFileSignature,
//     FaFolderPlus,
//     FaGraduationCap,
//   } from "react-icons/fa";
//   import { FaBuilding } from "react-icons/fa";
  
//   // import { FontAwesomeIcon } from "react";
  
//   const LoginBoxes = () => {
//     return (
//       // Parent div responsive which contains 5 divs inside
//       <div 
      
//       className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 p-4 mx-4 md:mx-12 mb-10"
      
//       >
//         {/* Single div which contains two div: icon and text */}
  
//         <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
//           <div className="flex items-center">
//             <div className="px-1 mr-4 ">
//               {/* Graduation Cap Icon with group-hover effect */}
//               <FaGraduationCap
//                 className="text-[#003366] group-hover:text-white transition duration-300"
//                 size={50}
//               />
//             </div>
//             <div className="text-xl group-hover:text-white transition duration-300">
//               Student <br />
//               Login
//             </div>
//           </div>
//         </div>
  
//         <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
//           <div className="flex items-center">
//             <div className="px-1 mr-4">
//               {/* Graduation Cap Icon with group-hover effect */}
//               <FaBuilding
//                 className="text-[#003366] group-hover:text-white transition duration-300"
//                 size={50}
//               />
//             </div>
//             <div className="text-xl group-hover:text-white transition duration-300">
//               Center <br />
//               Login
//             </div>
//           </div>
//         </div>
  
//         <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
//           <div className="flex items-center">
//             <div className="px-1 mr-4">
//               {/* Graduation Cap Icon with group-hover effect */}
//               <FaFileSignature
//                 className="text-[#003366] group-hover:text-white transition duration-300"
//                 size={50}
//               />
//             </div>
//             <div className="text-xl group-hover:text-white transition duration-300">
//               Certificate <br />
//               Verification
//             </div>
//           </div>
//         </div>
  
//         <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
//           <div className="flex items-center">
//             <div className="px-1 mr-4">
//               {/* Graduation Cap Icon with group-hover effect */}
//               <FaCheckCircle
//                 className="text-[#003366] group-hover:text-white transition duration-300"
//                 size={50}
//               />
//             </div>
//             <div className="text-xl group-hover:text-white transition duration-300">
//               Center <br />
//               Verification
//             </div>
//           </div>
//         </div>
  
//         <div className="flex-1 group border-2 border-[#003366] rounded-3xl font-bold text-regal-blue px-10 py-10 transition duration-500 hover:bg-sky-950">
//           <div className="flex items-center">
//             <div className="px-1 mr-4">
//               {/* Graduation Cap Icon with group-hover effect */}
//               <FaFolderPlus
//                 className="text-[#003366] group-hover:text-white transition duration-300"
//                 size={50}
//               />
//             </div>
//             <div className="text-xl group-hover:text-white transition duration-300">
//               Apply for <br />
//               Franchise
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
//   export default LoginBoxes;
  


