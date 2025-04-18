import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-blue-700 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">About SK EDUTECH</h1>
          <p className="text-xl text-center mt-2">The Best Computer Institute in India</p>
        </div>
      </header>

      {/* History Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="SK EDUTECH Campus" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">SK EDUTECH History</h2>
              <p className="text-gray-700 mb-4">
                SK EDUTECH is the best computer institute of India. Established in 2018, we are certified from ISO 9001:2015, Govt. of India as well as Govt. of Haryana and Private firm companies.
              </p>
              <p className="text-gray-700 mb-4">
                We have broader focus on delivering scalable solutions to maintain consistency in providing quality training and placement solution. We are competent and professionally proficient training & development company.
              </p>
              <p className="text-gray-700">
                Having an expert trainer with an unmatched professionalism and expertise in providing quality training, we have proven best to our words. Many students have achieve excellence in the domains they were trying to reach through our quality training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Administration Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="SK EDUTECH Administration" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">ADMINISTRATION</h2>
              <p className="text-gray-700 mb-4">
                SK EDUTECH will be a world leader in preparing professionals who provide exemplary educational and related services to improve the lives of individuals in a changing and complex global society.
              </p>
              <p className="text-gray-700 mb-4">
                We are working for Rural development program Organizing for Rural area to improve his education Initiating a program in Rural Elementary School aimed to improve environmental knowledge and awareness.
              </p>
              <p className="text-gray-700">
                Development works for the target groups to be carried out with the direct involvement of Tribal Peoples themselves. Development through coordination, collective efforts and networking. Right-based advocacy. Adoption of new working approaches based on situational study and analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="SK EDUTECH Mission" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">SK EDUTECH MISSION</h2>
              <p className="text-gray-700 mb-4">
                To represent the Computer Center Franchise opportunities for various state in India. Like: Andhra Pradesh Hyderabad, Amaravati, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jammu and Kashmir, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal.
              </p>
              <p className="text-gray-700 font-bold text-lg">
                No.1 Education Brand in India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="/api/placeholder/600/400" 
                alt="SK EDUTECH Vision" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">VISION</h2>
              <p className="text-gray-700 mb-4">
                To promote excellence and growth in franchising while serving the interests of its members at the same time.
              </p>
              <p className="text-gray-700">
                To be the premier source for quality education, training, and professional certification, serving the needs and advancing the excellence of hospitality and schools worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join SK EDUTECH Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start your journey to excellence with India's best computer institute. Discover our courses and franchise opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors">
              Explore Courses
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-blue-600 font-bold py-3 px-6 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">SK EDUTECH</h3>
              <p>ISO 9001:2015 Certified</p>
              <p>Govt. of India & Haryana Certified</p>
            </div>
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-bold mb-2">Quick Links</h4>
              <ul>
                <li className="mb-1"><a href="#" className="hover:text-white">Home</a></li>
                <li className="mb-1"><a href="#" className="hover:text-white">Courses</a></li>
                <li className="mb-1"><a href="#" className="hover:text-white">Franchising</a></li>
                <li className="mb-1"><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Connect With Us</h4>
              <p className="mb-1">Email: info@skedutech.com</p>
              <p className="mb-1">Phone: +91 XXXXX XXXXX</p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} SK EDUTECH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}