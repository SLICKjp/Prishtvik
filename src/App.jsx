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
import { useRef } from "react";
function App() {
	const aboutUsRef = useRef(null);
	const contactRef = useRef(null);
    const serviceRef = useRef(null);



	const scrollToAboutUs = () => {
		if (aboutUsRef.current) {
			aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	const scrollToContactUs = () => {
		if (contactRef.current) {
			contactRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	const scrollToServices = () => {
		if (serviceRef.current) {
			serviceRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<>
			<div className="max-w-[1240px] mx-auto font-outfit">
				<div className="heroSection">
					<Navbar
						onAboutClick={scrollToAboutUs}
						onContactClick={scrollToContactUs}
					/>
					<HeroSection onContactClick={scrollToContactUs} />
				</div>
				<Partners />
				<Services ref={serviceRef}/>
				<Portfolio />
			</div>
			<AboutUs ref={aboutUsRef} />

			<ContactUs ref={contactRef} />

			<div className="max-w-[1240px] mx-auto font-outfit">
			<Stats />
			<Clients />
			</div>
			

			{/* <AboutUs ref={aboutUsRef}
<Stats />
	<Clients />
			<div className="max-w-[1240px] mx-auto font-poppins">
				
				<Services />
			</div>
			<Clients />
			<div className="max-w-[1240px] mx-auto font-poppins">
				<Portfolio />
			</div>
			<Partners />
			<Footer />
			<ContactUs ref={contactRef} />
} */}
			<Footer onAboutClick={scrollToAboutUs} onContactClick={scrollToContactUs} onServiceClick={scrollToServices} />
		</>
	);
}

export default App;
