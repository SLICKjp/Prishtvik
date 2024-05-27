import "../styles/Contactus.css";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
const ContactUs = () => {
	return (
		<div className="contactUsSection flex flex-col justify-center items-center ">
			<h2 className="text-2xl font-bold mb-20">Let's Get in touch</h2>
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
					>
						<div className="formDiv">
							<div
								className="flex flex-row justify-between"
								style={{ width: "80%" }}
							>
								<div className="form-element flex flex-col">
									<label>First Name</label>
									<input type="text"></input>
								</div>
								<div className="form-element flex flex-col">
									<label>Last Name</label>
									<input type="text"></input>
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
									<input type="email"></input>
								</div>
								<div className="form-element flex flex-col">
									<label>Phone Number</label>
									<input type="text"></input>
								</div>
							</div>
						</div>
						<div className="formDiv">
							<div className="flex flex-col" style={{ width: "80%" }}>
								<label>Message</label>
								<input type="text"></input>
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
