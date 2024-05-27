import { useState, useEffect } from "react";
import sophos from "../assets/sophos.jpg";
import HPE from "../assets/hpe-server.jpg";
import UPS from "../assets/upssolutionservices.png";
import "../styles/Portfolio.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Portfolio = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [opacity, setOpacity] = useState(1);
	const images = [sophos, HPE, UPS];
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
		<div className="portfolio flex flex-col justify-evenly items-center mt-20">
			<h2 className="text-2xl font-bold">Our Portfolio</h2>
			<div className="carousel flex flex-row justify-evenly items-center">
				<button className="carousel-controls" onClick={goToPrevious}>
					<MdKeyboardArrowLeft size={30} />
				</button>
				<img
					className="carousel-img"
					src={images[currentIndex]}
					alt={`Image ${currentIndex + 1}`}
					style={{ opacity: opacity }}
					onTransitionEnd={() => setOpacity(1)}
				/>

				<button className="carousel-controls" onClick={goToNext}>
					<MdKeyboardArrowRight size={30} />
				</button>
			</div>
		</div>
	);
};

export default Portfolio;
