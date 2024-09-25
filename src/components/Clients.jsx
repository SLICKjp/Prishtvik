import Matrix from "../assets/matrixConsec.jpg";
import AMS from "../assets/customers/ams.png";
import ATT from "../assets/customers/Color-ATT-Logo.jpg";
import snail from "../assets/customers/cool_snail.png";
import Deepak from "../assets/customers/deepak_nitrite.png";
import Econ from "../assets/customers/Econ.png";
import eec from "../assets/customers/eec.jpg";
import FG from "../assets/customers/financial_guardian.png";
import Garuda from "../assets/customers/garuda_mart_india_private_limited_logo.jpg";
import ihb from "../assets/customers/ihb_technology_logo.jpg";
import Manavkendra from "../assets/customers/manav_kendra.jpg";
import Margen from "../assets/customers/margen_impex.png";
import MSU from "../assets/customers/msu.jpg";
import Nttf from "../assets/customers/nttf.png";
import Parul from "../assets/customers/parul_u.png";
import phaseon from "../assets/customers/phaseon.jpg";
import Podar from "../assets/customers/podar.jpg";
import rehau from "../assets/customers/Rehau.png";
import Schneider from "../assets/customers/Schneider.png";
import SeventhSky from "../assets/customers/seventh_sky_academy.png";
import sandeep from "../assets/customers/sumandeep_vidyapeeth.png";
import sgicare from "../assets/customers/surgicare_icu.jpg";
import Thnoprism from "../assets/customers/technoprism.png";
import WdWizard from "../assets/customers/ward_wizard.png";
import WdWizardFoundation from "../assets/customers/ward_wizard_foundation.png";
import WdWizardMedicare from "../assets/customers/ward_wizard_medicare.png";
import Bell from "../assets/customers/blue_bell.png";
import Joy from "../assets/customers/joy.png";

import "../styles/Partners.css";
import "../styles/Clients.css";

const Clients = () => {
  return (
    <div className="clientSection flex flex-col justify-center items-center my-10">
      <div className="sectionHeading mb-5 flex flex-row justify-center items-center">
        <div className="sectionBullet mr-5"></div> <p>Our Happy Customers</p>{" "}
        <div className="sectionBullet ml-5"></div>
      </div>
      <h2 className="text-2xl  mb-10">
        Trusted by the most discerning clients for unparalleled excellence.
      </h2>
      <div className="clientLogoSection flex flex-col justify-evenly items-center">
        <div className="clientLogo flex flex-row justify-evenly items-center">
          <img className="clients" src={Matrix} alt="" />
          <img className="clients" src={Schneider} alt="" />
          <img className="clients" src={AMS} alt="" />
          <img className="clients" src={Econ} alt="" />
          <img className="clients" src={rehau} alt="" />
        </div>

        <div className="clientLogo flex flex-row justify-evenly items-center">
          <img className="clients" src={WdWizard} alt="" />
          <img className="clients" src={WdWizardFoundation} alt="" />
          <img className="clients" src={WdWizardMedicare} alt="" />
          <img className="clients" src={Bell} alt="" />
          <img className="clients" src={Joy} alt="" />
        </div>
      </div>
    </div>
    //<div className="partnerSection flex flex-col justify-center items-center">
    //<div className="text-2xl font-bold mb-10 ">Our Happy Customers</div>
    //<div className="logos flex">
    //<div className="logos-slider">
    //	<img className="clients" src={Matrix} alt="" />
    //	<img className="clients" src={AMS} alt="" />
    //	<img className="clients" src={ATT} alt="" />
    //	<img className="clients" src={snail} alt="" />
    //	<img className="clients" src={Deepak} alt="" />
    //	<img className="clients" src={Econ} alt="" />
    //	<img className="clients" src={eec} alt="" />
    //	<img className="clients" src={FG} alt="" />
    //	<img className="clients" src={Garuda} alt="" />
    //	<img className="clients" src={ihb} alt="" />
    //	<img className="clients" src={Manavkendra} alt="" />
    //	<img className="clients" src={Margen} alt="" />
    //	<img className="clients" src={MSU} alt="" />
    //	<img className="clients" src={Nttf} alt="" />
    //	<img className="clients" src={Parul} alt="" />
    //	<img className="clients" src={phaseon} alt="" />
    //	<img className="clients" src={Podar} alt="" />
    //	<img className="clients" src={rehau} alt="" />
    //	<img className="clients" src={Schneider} alt="" />
    //	<img className="clients" src={SeventhSky} alt="" />
    //	<img className="clients" src={sumandeep} alt="" />
    //	<img className="clients" src={surgicare} alt="" />
    //	<img className="clients" src={Technoprism} alt="" />
    //	<img className="clients" src={WardWizard} alt="" />
    //</div>

    //<div className="logos-slider">
    //	<img className="clients" src={Matrix} alt="" />
    //	<img className="clients" src={AMS} alt="" />
    //	<img className="clients" src={ATT} alt="" />
    //	<img className="clients" src={snail} alt="" />
    //	<img className="clients" src={Deepak} alt="" />
    //	<img className="clients" src={Econ} alt="" />
    //	<img className="clients" src={eec} alt="" />
    //	<img className="clients" src={FG} alt="" />
    //	<img className="clients" src={Garuda} alt="" />
    //	<img className="clients" src={ihb} alt="" />
    //	<img className="clients" src={Manavkendra} alt="" />
    //	<img className="clients" src={Margen} alt="" />
    //	<img className="clients" src={MSU} alt="" />
    //	<img className="clients" src={Nttf} alt="" />
    //	<img className="clients" src={Parul} alt="" />
    //	<img className="clients" src={phaseon} alt="" />
    //	<img className="clients" src={Podar} alt="" />
    //	<img className="clients" src={rehau} alt="" />
    //	<img className="clients" src={Schneider} alt="" />
    //	<img className="clients" src={SeventhSky} alt="" />
    //	<img className="clients" src={sumandeep} alt="" />
    //	<img className="clients" src={surgicare} alt="" />
    //	<img className="clients" src={Technoprism} alt="" />
    //	<img className="clients" src={WardWizard} alt="" />
    //	</div>
    //</div>
    //</div>
  );
};

export default Clients;
