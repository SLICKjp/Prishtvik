import Computer from "../assets/computer.png";
import SurveyCamera from "../assets/survey_camera.png";
import Globe from "../assets/icon_globe.png";
import Projector from "../assets/icon_projector.png";
import Support from "../assets/icon_tech_support.png"
import Security from "../assets/icon_cyber_security.png"

//import Robot from "../assets/robot.png";
//import Service from "../assets/service.png";
//import Tech from "../assets/tech.png";
//import Server from "../assets/server.png";
//import handshake from "../assets/handshake.png";
//import icon_laptop from "../assets/icon_laptop.png";

import "../styles/Services.css";

const Services = () => {
  return (
    <div
      className="servicesSection flex flex-col justify-center items-center mb-20 mt-24"
      style={{ width: "100%" }}
    >
      <h2 className="text-2xl font-bold mt-10 mb-10">How We Can Help </h2>
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
              Turnkey IT Solutions <br />
            </h2>
          </div>
          <div className="service">
            <img src={Globe} className="mb-4" />
            <h2 className="text-xl text-center font-semibold">
            Network Solutions
              <br />
            </h2>
          </div>
          <div className="service">
            <img src={Support} className="mb-4" />
            <h2 className="text-xl text-center font-semibold">
               Video Conferencing Solution
            </h2>
          </div>
        </div>
        <div
          className="flex flex-row justify-evenly mt-10 mb-10"
          style={{ width: "100%"}}
        >
          <div className="service">
            <img src={Projector} className="mb-4" />
            <h2 className="text-xl text-center font-semibold">
              Customized Home Theater
            </h2>
          </div>
          <div className="service">
            <img src={SurveyCamera} className="mb-4" />
            <h2 className="text-xl text-center font-semibold">
            Surveillance
            </h2>
          </div>
          <div className="service">
            <img src={Security} className="mb-4" />
            <h2 className="text-xl text-center font-semibold">
              Communication and Security
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
