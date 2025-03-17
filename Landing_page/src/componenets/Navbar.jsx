import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const navItems = [
    {
      title: 'HOME',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Home Page 1', link: '/home1' },
        { title: 'Home Page 2', link: '/home2' },
      ]
    },
    {
      title: 'ABOUT',
      hasDropdown: true,
      dropdownItems: [
        { title: 'About Us', link: '/about-us' },
        { title: 'Our Aim', link: '/our-aim' },
        { title: 'Accreditation', link: '/accreditation' },
        { title: 'Refund & Cancellation Policy', link: '/refund-policy' },
        { title: 'Public Note', link: '/public-note' },
      ]
    },
    {
      title: 'STUDENT ZONE',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Student Zone', link: '/dashboard' },
        { title: 'Book for Student', link: '/results' },
        { title: 'Login Panel', link: '/resources' },
        { title: 'Student Enquiry Form', link: '/resources' },
      ]
    },
    {
      title: 'COURSES',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Computer Software', link: '/programming' },
        { title: 'Computer Hardware', link: '/web-development' },
        { title: 'Vocational Course', link: '/data-science' },
        { title: 'Nursery Teacher Traning', link: '/data-science' },
        { title: 'Top Job oriented classes courses', link: '/data-science' },
      ]
    },
    {
      title: 'AFFILIATION PROCESS',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Affiliation Process for registration', link: '/how-to-affiliate' },
        { title: 'Reason Partners', link: '/benefits' },
        { title: 'How To Get Franchise (Affiliation)', link: '/benefits' },
        { title: 'How to Register Institute', link: '/benefits' },
        { title: 'NTT Franchise Process', link: '/benefits' },
        { title: 'Institute List in India', link: '/benefits' },
        { title: 'Live: Top Center List', link: '/benefits' },
      ]
    },
    {
      title: 'GALLERY',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Photo Gallery', link: '/photo-gallery' },
        { title: 'Video Gallery', link: '/video-gallery' },
      ]
    },
    {
      title: 'DOWNLOAD',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Download ', link: '/brochures' },
        { title: 'Admission Form', link: '/study-materials' },
        { title: 'Franchise Form', link: '/study-materials' },
      ]
    },
    {
      title: 'CONTACT',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Contact Us', link: '/contact-us' },
        { title: 'Career', link: '/career' },
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Track if user has scrolled at all
      if (window.scrollY > 10) {
        setHasScrolled(true);
      }
      
      // Track if user has scrolled beyond threshold
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);   

  return (
    <div>
      {/* Static navbar that's always visible at the top of the page on initial load */}

      {
      // !hasScrolled ||window.screenY==0&& 
      // !hasScrolled && 

      (
        <div className="top-0 left-0 w-full z-20 flex gap-15 shadow-md items-center bg-white">
          {/* Logo */}
          <div className="py-4 w-44 ml-15">
            <img src='/public/assets/Logo.jpg' alt="Logo"/>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex">
            <ul className="flex">
              {navItems.map((item, index) => (
                <li 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a 
                    href="#" 
                    className={`flex items-center px-4 py-6 text-sm font-medium transition-colors duration-300 ${
                      activeDropdown === index ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                    }`}
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <svg 
                        className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    )}
                  </a>

                  {/* Dropdown menu */}
                  {item.hasDropdown && (
                    <div 
                      className={`absolute left-0 w-52 z-10 bg-white shadow-lg py-2 rounded-b-lg transform transition-all duration-300 ease-in-out origin-top ${
                        activeDropdown === index 
                          ? 'opacity-100 scale-y-100' 
                          : 'opacity-0 scale-y-0 invisible'
                      }`}
                    >
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <a 
                          key={idx} 
                          href={dropdownItem.link} 
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-300"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button className='bg-transparent hover:bg-[#003366] text-[#003366] font-semibold text-xl hover:text-white py-2 px-8 m border border-[#003366] hover:border-transparent rounded-md duration-300'>
            Login
          </button>

          {/* Mobile navigation button */}
          <div className="lg:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Scrolling navbar that appears/disappears based on scroll position */}
      <div 
        className={`fixed top-0 left-0 w-full z-20 flex gap-15 shadow-md items-center transition-transform duration-400 ${
          isScrolled ? "translate-y-0 bg-white shadow-lg" : "-translate-y-full"
        }`}
        style={{ display: hasScrolled ? 'flex' : 'none' }}
      >
        {/* Logo */}
        <div className="py-4 w-44 ml-15">
          <img src='/public/assets/Logo.jpg' alt="Logo"/>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex">
            {navItems.map((item, index) => (
              <li 
                key={index} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href="#" 
                  className={`flex items-center px-4 py-6 text-sm font-medium transition-colors duration-300 ${
                    activeDropdown === index ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
                  }`}
                >
                  {item.title}
                  {item.hasDropdown && (
                    <svg 
                      className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                </a>
                
                
                {/* Dropdown menu */}
                {item.hasDropdown && window.scrollY && (
                  <div 
                    className={`absolute left-0 w-52 z-10 bg-white shadow-lg py-2 rounded-b-lg transform transition-all duration-300 ease-in-out origin-top ${
                      activeDropdown === index 
                        ? 'opacity-100 scale-y-100' 
                        : 'opacity-0 scale-y-0 invisible'
                    }`}
                  >
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <a 
                        key={idx} 
                        href={dropdownItem.link} 
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-300"
                      >
                        {dropdownItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button className='bg-transparent hover:bg-[#003366] text-[#003366] font-semibold text-xl hover:text-white py-2 px-8 m border border-[#003366] hover:border-transparent rounded-md duration-300'>
          Login
        </button>

        {/* Mobile navigation button */}
        <div className="lg:hidden">
          <button className="p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



// // Tushar ka bnaya navbar
// import React, { useState, useEffect } from 'react';

// const Navbart = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const navItems = [
//     {
//       title: 'HOME',
//       hasDropdown: true,
//       dropdownItems: [
//         { title: 'Home Page 1', link: '/home1' },
//         { title: 'Home Page 2', link: '/home2' },
//       ]
//     },
//     {
//       title: 'ABOUT',
//       hasDropdown: true,
//       dropdownItems: [
//         { title: 'About Us', link: '/about-us' },
//         { title: 'Our Aim', link: '/our-aim' },
//         { title: 'Accreditation', link: '/accreditation' },
//         { title: 'Refund & Cancellation Policy', link: '/refund-policy' },
//         { title: 'Public Note', link: '/public-note' },
//       ]
//     },
//     {
//       title: 'STUDENT ZONE',
//       hasDropdown: true,
//       dropdownItems: [
//         { title: 'Student Zone', link: '/dashboard' },
//         { title: 'Book for Student', link: '/results' },
//         { title: 'Login Panel', link: '/resources' },
//         { title: 'Student Enquiry Form', link: '/resources' },
//       ]
//     },
//     {
//       title: 'COURSES',
//       hasDropdown: true,
//       dropdownItems: [
//         { title: 'Computer Software', link: '/programming' },
//         { title: 'Computer Hardware', link: '/web-development' },
//         { title: 'Vocational Course', link: '/data-science' },
//         { title: 'Nursery Teacher Traning', link: '/data-science' },
//         { title: 'Top Job oriented classes courses', link: '/data-science' },
//       ]
//     },
//     {
//       title: 'AFFILIATION PROCESS',
//       hasDropdown: true,
//       dropdownItems: [
//         { title: 'Affiliation Process for registration', link: '/how-to-affiliate' },
//         { title: 'Reason Partners', link: '/benefits' },
//         { title: 'How To Get Franchise (Affiliation)', link: '/benefits' },
//         { title: 'How to Register Institute', link: '/benefits' },
//         { title: 'NTT Franchise Process', link: '/benefits' },
//         { title: 'Institute List in India', link: '/benefits' },
//         { title: 'Live: Top Center List', link: '/benefits' },
//       ]
//     },
//     {
//       title: 'GALLERY',
//       hasDropdown: true,
//       dropdownItems: [
//         { title: 'Photo Gallery', link: '/photo-gallery' },
//         { title: 'Video Gallery', link: '/video-gallery' },
//       ]
//     },
//     {
//       title: 'DOWNLOAD',
//       hasDropdown: true,
//       dropdownItems: [
//         { title: 'Download ', link: '/brochures' },
//         { title: 'Admission Form', link: '/study-materials' },
//         { title: 'Franchise Form', link: '/study-materials' },
//       ]
//     },
//     {
//       title: 'CONTACT',
//       hasDropdown: true,
//       dropdownItems: [
//         { title: 'Contact Us', link: '/contact-us' },
//         { title: 'Career', link: '/career' },
//       ]
//     },
//   ];



//   return (
//     <div 
//    >
//         <div 
//         className="fixed top-0 left-0 right-0 flex  gap-15 p-1 shadow-md items-center z-20 w-full bg-white"
//         // className={`fixed top-0 left-0 w-full z-20 flex gap-15 shadow-md items-center transition-transform duration-400 ${
//           // isScrolled ? "translate-y-0 bg-white shadow-lg" : "-translate-y-full"
//         // }`}
//         >

//           {/* Logo */}
//           <div className="py-4 w-44 ml-15 ">
//            <img src='/public/assets/Logo.jpg'/>
//           </div>

//           {/* Navigation */}
//           <nav className="hidden lg:flex ">
//             <ul className="flex">
//               {navItems.map((item, index) => (
//                 <li 
//                   key={index} 
//                   className="relative group"
//                   onMouseEnter={() => setActiveDropdown(index)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <a 
//                     href="#" 
//                     className={`flex items-center px-4 py-6 text-sm font-medium transition-colors duration-300 ${
//                       activeDropdown === index ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500'
//                     }`}
//                   >
//                     {item.title}
//                     {item.hasDropdown && (
//                       <svg 
//                         className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
//                           activeDropdown === index ? 'rotate-180' : ''
//                         }`} 
//                         fill="none" 
//                         stroke="currentColor" 
//                         viewBox="0 0 24 24" 
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                       </svg>
//                     )}
//                   </a>

//                   {/* Dropdown menu */}
//                   {item.hasDropdown && (
//                     <div 
//                       className={`absolute left-0 w-52 z-10 bg-white shadow-lg py-2 rounded-b-lg transform transition-all duration-300 ease-in-out origin-top ${
//                         activeDropdown === index 
//                           ? 'opacity-100 scale-y-100' 
//                           : 'opacity-0 scale-y-0 invisible'
//                       }`}
//                     >
//                       {item.dropdownItems.map((dropdownItem, idx) => (
//                         <a 
//                           key={idx} 
//                           href={dropdownItem.link} 
//                           className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-300"
//                         >
//                           {dropdownItem.title}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </nav>

//           <button className='bg-transparent hover:bg-[#003366] text-[#003366] font-semibold text-xl hover:text-white py-2 px-8 m border border-[#003366] hover:border-transparent rounded-md duration-300'>
//             Login
//           </button>

//           {/* Mobile navigation button */}
//           <div className="lg:hidden">
//             <button className="p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//               </svg>
//             </button>
//           </div>
//         </div>
      
//     </div>
//   );
// };

// export default Navbart;