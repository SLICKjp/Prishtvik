import { useState, useEffect } from "react";
import sophos from "../assets/firewall.jpg";
import HPE from "../assets/hpe-server.jpg";
import UPS from "../assets/apc.jpg";
import HPESERVERRACK from "../assets/hpeserverrack.jpg";
import Camera from "../assets/surv_cam.jpg";
import Desktop from "../assets/DesktopSetup.jpg";
import Epabx from "../assets/epabx_ipbx.png";
import HomeTheatre from "../assets/hometheatre.jpg";
import LaserJetPrinter from "../assets/laserJetPrinter.jpg";
import Monitor from "../assets/monitor.jpg";
import Scanjet from "../assets/scanjet.jpg";
import VideoConferencing from "../assets/video_conferencing.jpg";
import "../styles/Portfolio.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Portfolio = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [opacity, setOpacity] = useState(1);
	const images = [
		{ img: sophos, text: "Firewall"},
		{ img: HPE, text: "HPE server Setup"},
		{ img: UPS, text: "uninterruptible power supply"},
		{ img: HPESERVERRACK, text: "HPE server"},
		{ img: Camera, text: "Survellience"},
		{ img: Desktop, text: "Desktop Setup"},
		{img: Epabx, text: "EPABX"},
		{img: HomeTheatre, text: "Home Theatre"},
		{img: LaserJetPrinter, text: "Laser Jet Printer"},
		{img: Monitor, text: "Monitor"},
		{img: Scanjet, text: "Scanjet Printer"},
		{img: VideoConferencing, text: "Video Conferencing"}
	];
	//const [caption, setCaption] = useState("");
	const interval = 100000;
    
	useEffect(() => {
		const timer = setInterval(() => {
			setOpacity(0);

			setTimeout(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
				setOpacity(1);
			}, 500);
		}, interval);

		return () => clearInterval(timer);
	}, [images.length, interval]);

	const goToNext = () => {
		setOpacity(0);

		setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
			setOpacity(1);
		}, 500);
	};

	const goToPrevious = () => {
		setOpacity(0);
		setTimeout(() => {
			setCurrentIndex(
				(prevIndex) => (prevIndex - 1 + images.length) % images.length
			);
			setOpacity(1);
		}, 500);
	};

	return (
		<div className="portfolio flex flex-col justify-evenly items-center mt-10">
			<h2 className="text-2xl font-bold">Our Portfolio</h2>
			<div className="carousel flex flex-row justify-evenly items-center">
				<button className="carousel-controls" onClick={goToPrevious}>
					<MdKeyboardArrowLeft size={30} />
				</button>
				<div className="flex flex-col justify-between items-center">
					<img
						className="carousel-img mb-5"
						src={images[currentIndex].img}
						alt={`Image ${currentIndex + 1}`}
						style={{ opacity: opacity }}
						onTransitionEnd={() => setOpacity(1)}
					/>
					<div className="text-xl font-semibold">
						{images[currentIndex].text}
					</div>
				</div>
				<button className="carousel-controls" onClick={goToNext}>
					<MdKeyboardArrowRight size={30} />
				</button>
			</div>
		</div>
	);
};

export default Portfolio;
