import HeroImage from "../assets/HeroImage.png";


const HeroSection = ({onContactClick}) => {
	
	return (
		<div
			className="mb-20 mt-20 font-poppins  flex flex-col items-center md:flex-row lg:flex-row xl:flex-row"
			style={{ height: "65vh" }}
		>
			<div
				className="px-3 py-6 text-center md:text-start"
				style={{ width: "60%" }}
			>
				<h2 className="font-extrabold text-5xl my-5 leading-snug">
					Your
					<span className="text-[#2674FF]"> Trusted </span>
					Partner for
					<span className="text-[#2674FF]"> Reliable </span>
					IT Solutions
				</h2>
				<p className="text-xl"> </p>
				<input
					type="button"
					onClick={onContactClick}
					className="text-white bg-[#2674FF] hover:bg-blue-800 focus:ring-4 font-bold rounded-lg  text-sm px-5 py-2.5 me-2 mb-2 my-7"
					value="Contact Us"
				/>
			</div>
			<div className="" style={{ width: "40%" }}>
				<img style={{ width: "100%" }} src={HeroImage} alt="" />
			</div>
		</div>
	);
};



export default HeroSection;
