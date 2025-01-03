import logoImg from "../assets/Awazelogo.png";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="fixed  bg-stone-950 w-screen h-20 md:h-24 text-white flex justify-between items-center z-10">
        <Link
        to="home"
        smooth={true}
        duration={900}
        offset={-70} 
        className="object-contain h-24 ml-2 md:h-36 md:ml-10"
      >
        <img
          className="object-contain h-24 cursor-pointer ml-2 md:h-36 md:ml-10"
          src={logoImg}
          alt="Awaze restaurant logo"
        />
      </Link>
      

      <div className="hidden md:flex justify-between w-1/2 text-base font-sans  mr-10">
         <Link
          to="home"
          smooth={true}
          duration={900}
          offset={-70} // Adjust this based on the header height
          className="cursor-pointer hover:text-red-700 transition-all"
          activeClass="text-red-700" // Active link color
        >
          HOME
        </Link>
       
         <Link
          to="about"
          smooth={true}
          duration={900}
          offset={-70}
          className="cursor-pointer hover:text-red-700 transition-all"
          activeClass="text-red-700"
        >
          ABOUT
        </Link>
       
         <Link
          to="menu"
          smooth={true}
          duration={900}
          offset={-70}
          className="cursor-pointer hover:text-red-700 transition-all"
          activeClass="text-red-700"
        >
          MENU
        </Link>
       
        <Link
          to="contact"
          smooth={true}
          duration={900}
          offset={-70}
          className="cursor-pointer hover:text-red-700 transition-all"
          activeClass="text-red-700"
        >
          CONTACT
        </Link>
        
      </div>
      <span className="md:hidden mr-10">
        <IoMdMenu size={30} />
      </span>
    </div>
  );
};

export default Header;
