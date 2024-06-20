/* eslint-disable no-mixed-spaces-and-tabs */
import "../styles/Contactus.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import emailjs from 'emailjs-com';
import { useState } from "react";
const ContactUs = () => {
	const [formData,setFormData] = useState({
		firstName: "",
		lastName : "",
		email:"",
		phoneNo  : "",
		message:""
	})
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		...formData,[name]: value
		});
		console.log(formData);
  };
	const handleSubmit = (e) =>{
		e.preventDefault();
        emailjs.send('service_lx1a1lk',  // Replace with your Service ID
'template_j9uo4sv', // Replace with your Template ID
			{
               from_name : formData.firstName+formData.lastName,
			   to_name: 'Jathin',
			   from_email:formData.email,
			   to_email:"jathinprakash33@gmail.com",
			   message:formData.message,
			   phoneNo:formData.phoneNo
			},
			'8D3b-_Zz6NRPMQHHb'      // Replace with your User ID
  ).then((response) => {
			console.log('SUCCESS!', response.status, response.text);
			alert('Message sent successfully!')
		  }).catch((error) => {
			console.log('FAILED...', error);
			alert('Failed to send message. Please try again later.');
		  });


		setFormData({
		firstName: "",
		lastName : "",
		email:"",
		phoneNo  : "",
		message:""
 });
	}
	return (
		<div className="contactUsSection flex flex-col justify-center items-center ">
			<p className="text-4xl font-semibold mb-3">Let's Get in Touch</p>
			<p className="mb-20 text-[#929292]">We are here to help.Just message us and we’ll get back to you</p>
			<div className="contactUs flex flex-row">
				<div
					className="contactCard flex flex-col justify-evenly items-center"
					style={{ height: "100%" }}
				>
					<div
						className="flex flex-col justify-evenly items-center text-center"
						style={{ height: "80%", marginTop: "-40%" }}
					>
						<h2>
							<BiSolidPhoneCall
								className="mr-3"
								size={20}
								style={{ float: "left" }}
							/>
							+91-9601651845
						</h2>
						<h2>
							<MdEmail className="mr-3" size={20} style={{ float: "left" }} />{" "}
							Bhavesh.m@a1service.in
						</h2>
						<h2>
							<MdLocationOn
								className="mr-3"
								size={20}
								style={{ float: "left" }}
							/>
							FF-23,D-Tower,Avishkar complex <br /> OP road,Vadodara,390001
						</h2>
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
									<input type="text" name="firstName" value={formData.firstName} onChange={handleChange}></input>
								</div>
								<div className="form-element flex flex-col">
									<label>Last Name</label>
									<input type="text" name="lastName" value={formData.lastName} onChange={handleChange}></input>
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
									<input type="email" name="email" value={formData.email} onChange={handleChange}></input>
								</div>
								<div className="form-element flex flex-col">
									<label>Phone Number</label>
									<input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange}></input>
								</div>
							</div>
						</div>
						<div className="formDiv">
							<div className="flex flex-col" style={{ width: "80%" }}>
								<label>Message</label>
								<input type="text" name="message" value={formData.message} onChange={handleChange}></input>
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
};

export default ContactUs;
