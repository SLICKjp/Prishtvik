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
		<div className="partnerSection flex flex-col justify-center items-center mb-20">
			<div className="text-2xl mb-10 ">Partnered with the best in Industry</div>
			<div className="logos flex">
				<div className="logos-slider">
					<img className="partnerLogo" id="asus" src={Asus} />
					{/*<img className="partnerLogo" id="lenovo" src={Lenovo} /> */}
					<img className="partnerLogo" id="hpe" src={HPE} />
					<img className="partnerLogo" id="hp" src={HP} />
					<img className="partnerLogo" id="microsoft" src={Microsoft} />
					<img className="partnerLogo" id="sophos" src={sophos} />
					<img className="partnerLogo" id="viewSonic" src={viewSonic} />
					<img className="partnerLogo" id="apc" src={Apc} />
					<img className="partnerLogo" id="matrix" src={Matrix} />
				</div>

				<div className="logos-slider">
					<img className="partnerLogo" id="asus" src={Asus} />
				  {/*<img className="partnerLogo" id="lenovo" src={Lenovo} /> */}
					<img className="partnerLogo" id="hpe" src={HPE} />
					<img className="partnerLogo" id="hp" src={HP} />
					<img className="partnerLogo" id="microsoft" src={Microsoft} />
					<img className="partnerLogo" id="sophos" src={sophos} />
					<img className="partnerLogo" id="viewSonic" src={viewSonic} />
					<img className="partnerLogo" id="apc" src={Apc} />
					<img className="partnerLogo" id="matrix" src={Matrix} />
				</div>
			</div>
		</div>
	);
};

export default Partners;
