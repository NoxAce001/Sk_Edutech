

import Navbar from "../componenets/Navbar";
// import Navbart2 from "../componenets/Navbart2";
import ImageSlider from "../componenets/ImageSlider";

import Marquee from "../componenets/MarqueeLine";
import LoginBoxes from "../componenets/LoginBoxes";
import EducationSection from "../componenets/EducationSection";
import OurAchievers from "../componenets/OurAchievers";
import ContactUsSection from "../componenets/ContactUsSection";
import ReviewsSection from "../componenets/ReviewsSection";
import Footer from "../componenets/Footer";


function HomePage() {
    return (
      <div>
        {/* fix or static navbar k liye Navbart2 hai , jisme top pr ye fix rhega site niche scroll hogi  */}
        {/* <Navbart2/>   */}
        <Navbar/>
       
        <ImageSlider />
        <Marquee />
        <LoginBoxes />
        <EducationSection/>
        <OurAchievers/>
        <ReviewsSection/>
        <ContactUsSection />
        <Footer />
  
      </div>
    );
  }
  
  export default HomePage;