/* eslint-disable no-mixed-spaces-and-tabs */
import "../styles/Contactus.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";
import { useState } from "react";
import { forwardRef } from "react";
import Prishtvik_logo from "../assets/prishtvik_logo.png";

const ContactUs = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_lx1a1lk", // Replace with your Service ID
        "template_j9uo4sv", // Replace with your Template ID
        {
          from_name: formData.firstName,
          from_lastname: formData.lastName,
          to_name: "Jathin",
          from_email: formData.email,
          to_email: "jathinprakash33@gmail.com",
          message: formData.message,
          phoneNo: formData.phoneNo,
        },
        "8D3b-_Zz6NRPMQHHb" // Replace with your User ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again later.");
      });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      message: "",
    });
  };
  return (
    <div
      className="contactUsSection flex flex-col justify-center items-center"
      ref={ref}
    >
      <p className="text-4xl font-semibold mb-3">Let's Get in Touch</p>
      <p className="mb-20 text-[#929292]">
        We are here to help.Just message us and we’ll get back to you
      </p>

      
      <div className="contactUs flex flex-row">
        <div
          className="contactCard flex flex-col justify-evenly items-center"
          style={{ height: "100%" }}
        >
        {/*<p className="font-bold text-3xl font-outfit">Perfect Solutions For Your Business</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         */} 
          <div
            className="flex flex-col justify-evenly items-center text-center"
            style={{ height: "80%", marginTop: "-32%" }}
          >
           
          
          </div>
        </div>





        <div className="contactForm flex flex-col justify-evenly">
          <form
            className="flex flex-col justify-evenly items-center"
            style={{ height: "80%" }}
            onSubmit={handleSubmit}
          >
            <div className="formDiv">
              <div
                className="flex flex-row justify-between"
                style={{ width: "80%" }}
              >
                <div className="form-element flex flex-col">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    
                  ></input>
                </div>
                <div className="form-element flex flex-col">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    
                  ></input>
                </div>
              </div>
            </div>
            <div className="formDiv">
              <div
                className="flex flex-row justify-between"
                style={{ width: "80%" }}
              >
                <div className="form-element flex flex-col">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
                <div className="form-element flex flex-col">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div className="formDiv">
              <div className="flex flex-col" style={{ width: "80%" }}>
                <label>Message</label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></input>
              </div>
            </div>
            <div className="formDiv">
              <button className="submit-button" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});
ContactUs.displayName = "ContactUs";
export default ContactUs;
