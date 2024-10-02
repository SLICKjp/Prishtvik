import sophos from "../assets/firewall.jpg";
import UPS from "../assets/apc.jpg";
import Camera from "../assets/surv_cam.jpg";
import Desktop from "../assets/DesktopSetup.jpg";
import VideoConferencing from "../assets/video_conferencing.jpg";
import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio mt-10 mb-20">
      <div className="sectionHeading mb-5 flex flex-row justify-center items-center">
        <div className="sectionBullet mr-5"></div> <p>Product Portfolio</p>{" "}
        <div className="sectionBullet ml-5"></div>
      </div>
      <div className="service-heading mb-5">
        <span className="service-heading">
          Where Creativity Meets Function: Explore Our Work
        </span>
      </div>
      <div
        className="portfolioImgSection flex flex-row justify-evenly items-center"
        style={{ width: "100%" }}
      >
        <div
          className="portfolioImgContainer flex flex-col justify-evenly items-center"
          style={{ height: "80%", width: "40%" }}
        >
          <div className="portfolioImg" style={{ height: "60%" }}>
            <img src={UPS} />
            <p className="portfolioItem">UPS Server Setup</p>
          </div>
          <div className="portfolioImg" style={{ height: "40%" }}>
            <img src={VideoConferencing} />
            <p className="portfolioItem">Video Conferencing</p>
          </div>
        </div>
        <div
          className="portfolioImgContainer flex flex-col justify-evenly items-center"
          style={{ height: "80%", width: "25%" }}
        >
          <div className="portfolioImg" style={{ height: "70%" }}>
            <img src={Desktop} />
            <p className="portfolioItem">Custom Desktop Setup</p>
          </div>
          <div className="portfolioImg" style={{ height: "30%" }}>
            <img src={sophos} />
            <p className="portfolioItem" style={{ height: "35%" }}>
              Firewall Setup
            </p>
          </div>
        </div>
        <div
          className="portfolioImgContainer flex flex-col justify-evenly items-center"
          style={{ height: "80%", width: "35%" }}
        >
          <div className="portfolioImg" style={{ height: "100%" }}>
            <img src={Camera} />
            <p className="portfolioItem">Surveillance System Setup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
