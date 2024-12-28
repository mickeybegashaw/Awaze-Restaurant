import logoImg from "../assets/Awazelogo.png";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="fixed bg-stone-950 w-screen h-20 md:h-28 text-white  flex justify-between items-center ">
      <a href="#home"  className="cursor-pointer">
        <img
          className="object-contain h-24 ml-2  md:h-36 md:ml-10"
          src={logoImg}
          alt="Awaze restaurant logo"
        />
      </a>
      <div className="hidden md:flex justify-between w-1/2 mr-10">
        <a href="#home" className="cursor-pointer">
          Home
        </a>
        <a href="#about" className="cursor-pointer">
          About
        </a>
        <a href="#menu" className="cursor-pointer">
          Menu
        </a>
        <a href="#contact" className="cursor-pointer">
          Contact
        </a>
      </div>
      <span className="md:hidden mr-5"><IoMdMenu size={30} /></span>
      

    </div>
  );
};

export default Header;
