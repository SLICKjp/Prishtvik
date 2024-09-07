import Aboutimg from "../assets/Aboutimg.png";
import { forwardRef } from "react";
import "../styles/Aboutus.css";
import Circle from "../assets/circle.png";

const AboutUs = forwardRef((props, ref) => (
	<div className="aboutus-main-container" ref={ref}>
		<div className="aboutus-content-container">
			<img className="aboutus-img" src={Aboutimg} alt="" />

			<div className="text-[#ffffff] my-9">
				{/* <div className="aboutus-title">
        <img src={Circle} alt="" />
          <p>
            About Us 
          </p>
          <img src={Circle} alt="" />
        </div>
      */}
				<div className="aboutUsSectionHeading mb-5 flex flex-row justify-start items-center">
					<div className="aboutUsSectionBullet mr-5"></div> <p>About Us</p>{" "}
					<div className="aboutUsSectionBullet ml-5"></div>
				</div>
				<h3 className="aboutus-heading">We are Leading IT Service Solution.</h3>

				<p className="aboutus-text">
					Prishtvik Services is founded with the motive to give services for IT
					products of OEM like, Asus, Benq, Viewsonic, HP , Dell, Lenovo, AOC
					etc. We have severed more than 5k Happy customer across the central
					Gujarat within radius of 150Km onsite support. Attended more than 30k
					service calls and developed trust and value of various brands. In 2019
					we have introduced our firm in to sales for products like Laptop,
					Desktop, AIO, UPS / battery solutions, Network solutions,Integration
					solutions,Software solutions.
				</p>
			</div>
		</div>
	</div>
));
AboutUs.displayName = "AboutUs";
export default AboutUs;
