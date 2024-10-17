import "../styles/Contactus.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { forwardRef } from "react";


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
          to_name: "Bhavesh",
          from_email: formData.email,
          to_email: "bhavesh.m@pisplindia.com",
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
    <div className="contactUsSection " ref={ref}>
      <div className="contactUsContainer flex flex-col justify-start items-center">
        <div className="contactBg flex flex-col justify-start items-center">
          <div className="mb-5 flex flex-row justify-start items-center mt-5">
            <div className="contactBullets mr-5"></div>{" "}
            <p style={{ fontSize: "25px" }}>Contact Us</p>
            <div className="contactBullets ml-5"></div>
          </div>
          <p className="text-4xl font-semibold mb-3 mt-3 subtext">
            Connect for Excellence
          </p>
          <p className="mb-20 text-2xl text-[#cccccc] subtext_2">
            Drop us a message and we’ll respond with prompt professionalism and
            tailored solutions.
          </p>
        </div>

        <div className="contactUs flex flex-row">
          <div
            className="contactCard flex flex-col justify-evenly items-center"
            style={{ height: "100%" }}
          >
            <div
              className="contactCardWriteUp flex flex-col justify-evenly"
              style={{ height: "80%", width: "80%" }}
            >
              <p className="font-bold text-3xl font-outfit">
                Perfect Solutions For Your Business
              </p>
              <p>
                Choose us for unparalleled expertise and exceptional quality.
                Our commitment to excellence ensures tailored solutions that
                exceed your expectations
              </p>
              <div>
                IT solutions are driven by cutting-edge technology and deep
                industry expertise.
              </div>
              <div>
                Harness our extensive experience to transform your IT challenges
                into opportunities.
              </div>
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
                      placeholder="Enter First Name"
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
                      placeholder="Enter Last Name"
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
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email Address"
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
                      placeholder="Enter Phone Number"
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
                    id="messageInput"
                    type="text"
                    name="message"
                    placeholder="Enter the Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="formDiv flex flex-col justify-center items-center">
                <button className="submit-button" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});
ContactUs.displayName = "ContactUs";
export default ContactUs;
