import React from "react";
import "../styles/Cards.css";

const Cards = ({ imageSrc, heading, text }) => {
  return (
    <div className="main-services-container">
      <img src={imageSrc} alt="" className="service-img" />
      <h3 className="service-card-heading">{heading}</h3>
      <p className="service-text">
       {text}
      </p>
    </div>
  );
};

export default Cards;
