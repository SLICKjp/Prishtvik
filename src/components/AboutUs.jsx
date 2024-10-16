import Aboutimg from "../assets/Aboutimg.png";
import { forwardRef } from "react";
import "../styles/Aboutus.css";


const AboutUs = forwardRef((props, ref) => (
  <div className="aboutus-main-container" ref={ref}>
    <div className="aboutus-content-container">
      <img className="aboutus-img" src={Aboutimg} alt="" />

      <div className="text-[#ffffff] py-14">
        <div className="aboutUsSectionHeading mb-5 flex flex-row justify-start items-center">
          <div className="aboutUsSectionBullet mr-5"></div> <p className="text-4xl font-semibold">About Us</p>{" "}
          <div className="aboutUsSectionBullet ml-5"></div>
        </div>
       

        <p className="aboutus-text">
         Founded in 2015 as A1 Services, we established ourselves as an authorized service partner for F1 Info Solutions Private Limited, dedicated to providing exceptional IT support and solutions for leading OEM products, including Asus, BenQ, ViewSonic, HP, Dell, Lenovo, AOC, and more.

In 2024, we are proud to reintroduce ourselves as Prishtvik Info Solutions Pvt Ltd. With this new identity, we are expanding our offerings to serve as a trusted sales partner for corporate clients. Our expertise spans comprehensive solutions for active and passive networks, servers, online and offline UPS systems, surveillance, and IT infrastructure products.

At Prishtvik Info Solutions, we are committed to empowering your technology experience. Join us on this journey to enhance your IT capabilities and drive your business forward!
        </p>
      </div>
    </div>
  </div>
));
AboutUs.displayName = "AboutUs";
export default AboutUs;
