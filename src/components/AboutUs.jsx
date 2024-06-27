import Aboutimg from "../assets/Aboutimg.png";
import { forwardRef} from "react";



const AboutUs = forwardRef((props, ref) => (

	
    <div className="bg-[#4E6FF8]" ref={ref}>
      <div
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row max-w-[1240px] mx-auto items-center"
        style={{ minHeight: "550px" }}
      >
        <div className="flex-shrink-0 ">
          <img className="w-full md:w-9/12" src={Aboutimg} alt="" />
        </div>
        <div className="text-[#ffffff] my-9">
          <h3 className="font-bold text-3xl text-center md:text-start">
            About Us
          </h3>
          <p className="my-4 text-justify mx-4 md:mx-0 leading-7 text-xl">
            Prishtvik Services is founded with the motive to give services for
            IT products of OEM like, Asus, Benq, Viewsonic, HP , Dell, Lenovo,
            AOC etc. We have severed more than 5k Happy customer across the
            central Gujarat within radius of 150Km onsite support. Attended more
            than 30k service calls and developed trust and value of various
            brands. In 2019 we have introduced our firm in to sales for products
            like Laptop, Desktop, AIO, UPS / battery solutions, Network
            solutions,Integration solutions,Software solutions.
          </p>
        </div>
      </div>
    </div>
));
AboutUs.displayName='AboutUs';
export default AboutUs;
