import Asus from "../assets/asus.png";
import Lenovo from "../assets/Lenovo.png";
import HPE from "../assets/HPE.png";
import HP from "../assets/HP.png";
import Microsoft from "../assets/Microsoft.png";
import sophos from "../assets/Sophos.png";
import viewSonic from "../assets/viewsonic.png";
import Apc from "../assets/APC.png";
import Matrix from "../assets/matrixConsec.jpg";
import "../styles/Partners.css";
const Partners = () => {
	return (
		<div className="partnerSection flex flex-col justify-center items-center">
			<div className="text-2xl font-bold mb-10 ">Our Partners</div>
			<div className="logos flex">
				<div className="logos-slider">
					<img src={Asus} />
					<img src={Lenovo} />
					<img src={HPE} />
					<img src={HP} />
					<img src={Microsoft} />
					<img src={sophos} />
					<img src={viewSonic} />
					<img src={Apc} />
					<img src={Matrix} />
				</div>

				<div className="logos-slider">
					<img src={Asus} />
					<img src={Lenovo} />
					<img src={HPE} />
					<img src={HP} />
					<img src={Microsoft} />
					<img src={sophos} />
					<img src={viewSonic} />
					<img src={Apc} />
					<img src={Matrix} />
				</div>
			</div>
		</div>
	);
};

export default Partners;
