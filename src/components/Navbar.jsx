import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import prishtvik_logo from "../assets/prishtvik_logo.png";
import {useRef} from "react";
import PropTypes from 'prop-types';
const Navbar = ({ onAboutClick,onContactClick}) => {
 
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    
    setToggle(!toggle);
  };

 
  return (
    <div>
      <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white px-4 font-poppins">
        <img className="h-10" src={prishtvik_logo} alt="" />
        <ul className="hidden md:flex">
          <li className="p-4 text-[#000000] hover:text-[#2674FF] cursor-pointer">Home</li>
        <li onClick={onAboutClick}  className="p-4 text-[#000000] hover:text-[#2674FF] cursor-pointer">About</li>
          <li  onClick={onContactClick} className="p-4 text-[#000000] hover:text-[#2674FF] cursor-pointer">Contact</li>
        </ul>
        <div onClick={handleClick} className="md:hidden">
          {toggle ? <AiOutlineClose size={20} color="black" /> : <AiOutlineMenu size={20} color="black" />}
        </div>
      </nav>
      <ul
        className={
          toggle
            ? "md:hidden fixed left-1 h-full ease-in-out duration-500"
            : "md:hidden ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <li className="p-4 text-[#000000] hover:text-[#2674FF] cursor-pointer">Home</li>
       <li className="p-4 text-[#000000] hover:text-[#2674FF] cursor-pointer">About</li>
        <li className="p-4 text-[#000000] hover:text-[#2674FF] cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  onAboutClick: PropTypes.func.isRequired,
};
export default Navbar;
