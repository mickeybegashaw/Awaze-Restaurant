import logoImg from "../assets/Awazelogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed  bg-stone-950 w-screen h-20 md:h-24 text-white flex justify-between items-center z-10">
      <Link to={"/"}>
        <img
          className="object-contain h-24 cursor-pointer ml-2 md:h-36 md:ml-10"
          src={logoImg}
          alt="Awaze restaurant logo"
        />
      </Link>

      <Link to={"/"}>
        <span className="mr-10 text-red-700">Back To Home page</span>
      </Link>
    </div>
  );
};

export default Header;
