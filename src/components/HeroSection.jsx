import HeroImage from "../assets/HeroImage.png";

const HeroSection = () => {
  return (
    <div className="font-poppins flex max-w-[1240px] mx-auto">
      <div className="px-3 py-6">
        <h2 className="font-bold text-5xl my-5 leading-snug">Visualize Your <span className="text-[#2674FF]">Colors</span> And <span className="text-[#2674FF]">Font</span> In One Place</h2>
        <p className="text-xl"> Easy Solutions For All IT Problems</p>
        <input type="button" className="text-white bg-[#2674FF] hover:bg-blue-800 focus:ring-4 font-bold rounded-lg  text-sm px-5 py-2.5 me-2 mb-2 my-7" value="Contact Us"/>
      </div>
      <div>
        <img className="h-auto max-w-full" src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
