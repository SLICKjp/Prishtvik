import Laptop from "../assets/Laptop.png";
import Computer from "../assets/computer.png";
import Robot from "../assets/robot.png";
import Service from "../assets/service.png";
import Tech from "../assets/tech.png";
import Server from "../assets/server.png";
import handshake from "../assets/handshake.png";
import "../styles/Services.css";

const Services = () => {
	return (
		<div
			className="servicesSection flex flex-col justify-center items-center mb-20 mt-10"
			style={{ width: "100%" }}
		>
			<h2 className="text-2xl font-bold mt-10 mb-10">What We Offer</h2>
			<div
				className="servicesSubsection flex flex-col justify-center items-center"
				style={{ width: "100%" }}
			>
				<div
					className="flex flex-row justify-evenly mb-10 mt-10"
					style={{ width: "100%" }}
				>
					<div className="service">
						<img src={Computer} className="mb-4" />
						<h2 className="text-xl text-center font-semibold">
							Hardware and Software <br />
							 Support
						</h2>
					</div>
					<div className="service">
						<img src={Robot} className="mb-4" />
						<h2 className="text-xl text-center font-semibold">
							Network Setup and
							<br /> Maintenance
						</h2>
					</div>
					<div className="service">
						<img src={Service} className="mb-4" />
						<h2 className="text-xl text-center font-semibold">
							Hardware Procurement
						</h2>
					</div>
				</div>
				<div
					className="flex flex-row justify-evenly mt-10 mb-10"
					style={{ width: "100%" }}
				>
					<div className="service">
						<img src={Tech} className="mb-4" />
						<h2 className="text-xl text-center font-semibold">IT Consulting</h2>
					</div>
					<div className="service">
						<img src={Server} className="mb-4" />
						<h2 className="text-xl text-center font-semibold">
							Data Backup and Recovery
						</h2>
					</div>
					<div className="service">
						<img src={handshake} className="mb-4" />
						<h2 className="text-xl text-center font-semibold">
							Custom Solutions
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
