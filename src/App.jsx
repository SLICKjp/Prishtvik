import "./App.css";
import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Stats from "./components/Stats";
import {useRef} from "react";
function App() {
  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContactUs = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
    
        <div className="max-w-[1240px] mx-auto font-poppins">
          <Navbar onAboutClick={scrollToAboutUs} onContactClick={scrollToContactUs}/>
          <HeroSection onContactClick={scrollToContactUs} />
          <Stats />
        </div>
        <AboutUs  ref={aboutUsRef} />
        <div className="max-w-[1240px] mx-auto font-poppins">
          <Services />
          <Clients />
          <Portfolio />
        </div>
        <Partners />
        <ContactUs ref={contactRef} />
        <Footer />
     
    </>
  );
}

export default App;
