import Aboutimg from "../assets/Aboutimg.png";
import { forwardRef } from "react";
import "../styles/Aboutus.css";


const AboutUs = forwardRef((props, ref) => (
  <div className="aboutus-main-container" ref={ref}>
    <div className="aboutus-content-container">
      <img className="aboutus-img" src={Aboutimg} alt="" />

      <div className="text-[#ffffff] my-9">
        <div className="aboutUsSectionHeading mb-5 flex flex-row justify-start items-center">
          <div className="aboutUsSectionBullet mr-5"></div> <p>About Us</p>{" "}
          <div className="aboutUsSectionBullet ml-5"></div>
        </div>
        <h3 className="aboutus-heading">We are Leading IT Service Solution.</h3>

        <p className="aboutus-text">
        Founded in 2015 as A1 Services, we became an authorized service partner for F1 Info Solutions Private Limited, dedicated to delivering top-notch IT support and solutions for leading OEM products, including Asus, BenQ, ViewSonic, HP, Dell, Lenovo, AOC, and more. Over the years, we have proudly served over 5,000 satisfied customers across Central Gujarat, providing reliable onsite support within a 150 km radius. With more than 30,000 service calls successfully attended too, we have built a strong reputation for trust and quality across various brands.

In 2024, we are excited to reintroduce ourselves as Prishtvik Info Solutions Pvt Ltd, expanding our offerings as a sales partner for corporate houses. We provide comprehensive solutions for active and passive networks, servers, online/offline UPS systems, surveillance, and IT infrastructure products.

Our commitment to excellence drives us to continually innovate and enhance our services, ensuring that our customers receive the best possible support and tailored solutions to meet their needs. Join us in our mission to empower your technology experience!
        </p>
      </div>
    </div>
  </div>
));
AboutUs.displayName = "AboutUs";
export default AboutUs;
