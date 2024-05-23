import Laptop from "../assets/Laptop.png";

const Stats = () => {
  return (
     <div>
      <h2 className="text-center font-bold text-3xl">Why Choose Us?</h2>
    <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row my-20 justify-between">
    
    <div className="flex justify-center md:justify-start" style={{width:"30%"}}>
        <img src={Laptop} className="" alt="Laptop" />
    </div>
    

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={{width:"50%"}}>
            <div>
                <h2 className="text-[#2674FF] font-bold text-2xl">598</h2>
                <h3 className="font-bold text-xl">Easy Solutions</h3>
                <p className="w-full ">Carlio brand is the most reliable motor oil manufacturer.</p>
            </div>
            <div className="">
              <div className="">
                <h2 className="text-[#2674FF] font-bold text-2xl">200</h2>
                <h3 className="font-bold text-xl">Easy Solutions</h3>
                <p className="w-full ">We provide comprehensive automotive solutions.</p>
                </div>
            </div>
            <div className="">
                <h2 className="text-[#2674FF] font-bold text-2xl">462</h2>
                <h3 className="font-bold text-xl">Easy Solutions</h3>
                <p className="w-full ">Our products are trusted worldwide.</p>
            </div>
            <div>
                <h2 className="text-[#2674FF] font-bold text-2xl">396</h2>
                <h3 className="font-bold text-xl">Easy Solutions</h3>
                <p className="w-full ">Quality and reliability are our top priorities.</p>
            </div>
        </div>
    </div>
    </div>

  );
};

export default Stats;
