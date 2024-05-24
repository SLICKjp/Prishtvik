import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-[#2674FF] h-[225px] flex flex-col items-center justify-evenly">
      <h2 className="text-[#ffffff] font-bold text-4xl">Prishtvik</h2>
      <div className="flex flex-row gap-14">
        <AiFillFacebook size={30} color="white" />
        <AiFillInstagram size={30} color="white" />
        <AiFillTwitterCircle size={30} color="white" />
      </div>
      <h3 className="text-[#ffffff] ">© 2024 Prishtvik Info Private Limited. All Rights Reserved.</h3>
    </footer>
  );
};

export default Footer;
