import logoImg from "../assets/Awazelogo.png";
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
      
      <span className="mr-5">Back To Home page</span>
    </div>
  );
};

export default Header;
