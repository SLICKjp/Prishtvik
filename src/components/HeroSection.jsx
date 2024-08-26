import HeroImage from "../assets/heroimg.png";
import "../styles/Herosection.css";

const HeroSection = ({ onContactClick }) => {
  return (
    <div
      className="mb-20 mt-20 flex flex-col items-center md:flex-row lg:flex-row xl:flex-row"
      style={{ height:"60%"}}
    >
      <div
        className=" text-center md:text-start"
        style={{ width:"60%"}}
      >
        <h2 className="font-bold text-6xl leading-snug hero-title">
          Your
           Trusted
          Partner for
           Reliable 
          IT Solutions
        </h2>
        <p className="text-xl my-7 font-normal text-[#a8a8a8] w-[90%]">Converting your ideas into products
        with engaging designs and scalable technology.</p>
        <input
          type="button"
          onClick={onContactClick}
          className="text-white bg-[#2674FF] hover:bg-blue-800 focus:ring-4 font-bold rounded-lg  text-sm px-5 py-2.5 me-2 mb-2 my-5"
          value="Contact Us"
        />
      </div>
      <div className="" style={{ width:"40%"}}>
        <img className style={{ width: "94%"}} src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
