import "../styles/Services.css";
import services_key from "../assets/services_key.png";
import network from "../assets/Network_Service.png";
import video from "../assets/Video_Service.png";
import theatre from "../assets/HomeTheater_Service.png";
import surveillance from "../assets/Sureveillance_Service.png";
import security from "../assets/Security_Service.png";
import Cards from "./Cards";
import { forwardRef } from "react";
const Services = forwardRef((props,ref) => {
	return (
		<div className="service-container mb-20" ref={ref}>
			<div className="sectionHeading mb-5 flex flex-row justify-center items-center">
				<div className="sectionBullet mr-5"></div> <p>Our Services</p>{" "}
				<div className="sectionBullet ml-5"></div>
			</div>
			<div className="service-heading mb-20">
				<span className="service-heading">
					Elevate Your Experience with Our Premium Services
				</span>
			</div>

			<div className="card-container">
				<Cards
					imageSrc={services_key}
					heading="Turnkey IT Solutions"
					text=" Comprehensive & customizable technology services designed to meet the
        unique needs of small and medium-sized businesses."
				/>
				<Cards
					imageSrc={network}
					heading="Network Solutions"
					text="Too provides a variety of internet-related services tailored primarily for small to medium-sized businesses."
				/>
				<Cards
					imageSrc={video}
					heading="Video Conferencing "
					text="Real-time communication & collaboration through video, audio, and often chat functions, connecting people regardless."
				/>
				<Cards
					imageSrc={theatre}
					heading="Custom Home Theater"
					text="To personalized cinematic experience right in the comfort of your home. We design and install state-of-the-art audio."
				/>
				<Cards
					imageSrc={surveillance}
					heading="Surveillance Solution"
					text="This service typically includes the installation and maintenance of CCTV cameras, motion detectors, alarm systems."
				/>
				<Cards
					imageSrc={security}
					heading="Security & Communications"
					text="To encompass a range of solutions designed to ensure the safety, privacy, and efficient info exchange within organizations."
				/>
			</div>
		</div>
	);
});

export default Services;
