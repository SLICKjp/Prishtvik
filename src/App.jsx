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

function App() {
  return (
    <>
      <div className="max-w-[1240px] mx-auto font-poppins">
      <Navbar/>
      <HeroSection/>
      <Stats/>
      </div>
      <AboutUs/>
      
     {
       /* <Stats/>
      <AboutUs/>
      <Services/>
      <Partners/>
      <Portfolio/>
      <Clients/>
      <ContactUs/>
      <Footer/>
     */}
    </>
  );
}

export default App;
