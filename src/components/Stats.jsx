import Laptop from "../assets/Laptop.png";

const Stats = () => {
	return (
		<div>
			<h2 className="text-center font-bold text-3xl">Why Choose Us?</h2>
			<div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row my-20 justify-between">
				<div
					className="flex justify-center md:justify-start"
					style={{ width: "30%" }}
				>
					<img src={Laptop} className="" alt="Laptop" />
				</div>

				<div
					className="grid grid-cols-1 md:grid-cols-2 gap-10"
					style={{ width: "50%" }}
				>
					<div>
						<h2 className="text-[#2674FF] font-bold text-2xl">5000 *</h2>
						<h3 className="font-bold text-xl mb-5">Happy Customers</h3>
						<p className="w-full ">
							We have served customer across the central Gujarat within radius
							of 150Km onsite support
						</p>
					</div>
					<div className="">
						<div className="">
							<h2 className="text-[#2674FF] font-bold text-2xl">30000 *</h2>
							<h3 className="font-bold text-xl mb-5">Service Calls</h3>
							<p className="w-full ">
								Attended more than 30k service calls and developed trust and
								value of various brands.
							</p>
						</div>
					</div>
					<div className="">
						<h2 className="text-[#2674FF] font-bold text-2xl">20</h2>
						<h3 className="font-bold text-xl mb-5">Corporate Houses</h3>
						<p className="w-full ">
							Since 2019, Reaching 300 end customers and working with more than
							20 well-known corporate houses.
						</p>
					</div>
					<div>
						<h2 className="text-[#2674FF] font-bold text-2xl">10</h2>
						<h3 className="font-bold text-xl mb-5">Business partners</h3>
						<p className="w-full ">
							Collaborating with world class business partners.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
