import "../styles/Footer.css";
import prishtvik_logo from "../assets/prishtvik_logo.png";
import { IoCallSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { forwardRef } from "react";
const Footer = ({onAboutClick,onContactClick,onServiceClick}) => {
	return (
		<footer className="footer flex flex-row justify-center items-center">
			<div
				className="footerSubsection flex flex-col justify items-center"
				style={{ width: "30%", textAlign: "left", height: "80%" }}
			>
				<div
					className="flex flex-row justify-start items-center my-3"
					style={{ width: "100%" }}
				>
					<img className="h-10" src={prishtvik_logo} alt="" />
				</div>
				<div className="flex flex-row justify-start items-center my-3">
					<p style={{ width: "90%" }}>
						Prishtvik is  a boutique digital transformation consultancy &
						software development company that provides IT solutions.
					</p>
				</div>

				<div
					className="flex flex-row justify-between items-center my-3"
					style={{ width: "100%" }}
				>
					<div
						className="flex flex-row justify-start items-center"
						style={{ width: "45%" }}
					>
						<IoCallSharp className="mr-3" size={"25px"} />
						<h3>+91 9601651845</h3>
					</div>
					<div
						className="flex flex-row justify-start items-center"
						style={{ }}
					>
						<SiMinutemailer className="mr-3" size={"25px"} />
						<h3>bhavesh.m@pisplindia.com</h3>
					</div>
				</div>
			</div>

			<div className="footerSubsection" style={{ width: "20%", height: "80%" }}>
				<h3 className="my-3 text-2xl" style={{ color: "white" }} >
					Quick Links
				</h3>
				<div
					className="flex flex-col items-center justify-evenly "
					style={{ height: "60%" }}
				>
					<p className=" main-links" onClick={onAboutClick}>About Us</p>
					
					<p className=" main-links" onClick={onContactClick}>Contact</p>

					<p className=" main-links" onClick={onContactClick}>Career</p>
				</div>
			</div>
			<div
				className="footerSubsection flex flex-col
         justify-start
          items-center"
				style={{ width: "30%", height: "80%" }}
			>
				<h3
					className="my-3 text-2xl"
					style={{
						color: "white",
						textAlign: "left",
						width: "100%",
						marginLeft:"20%",
					}}
				>
					Services
				</h3>
				<div
					className="flex flex-row justify-evenly items-center text-center "
					style={{ height: "60%", width: "100%" }}
				>
					<div
						className="flex flex-col justify-evenly items-center service-links-1"
						style={{ height: "100%", width: "40%"}}
					>
						<p onClick={onServiceClick}>Turnkey IT Solutions</p>
						<p onClick={onServiceClick}>Network Solutions</p>
						<p onClick={onServiceClick}>Video Conferencing</p>
					</div>
					<div
						className="flex flex-col justify-evenly items-center service-links-2"
						style={{ height: "100%", width: "40%" }}
					>
						<p onClick={onServiceClick}>Custom Home Theatre</p>
						<p onClick={onServiceClick}>Survelliance Solutions</p>
						<p onClick={onServiceClick}>Security Solutions</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
