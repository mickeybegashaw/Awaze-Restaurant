import { Link } from "react-scroll";
import logoImg from "../assets/Awazelogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="bg-stone-950 h-fit w-screen text-white py-10">
      <div className="flex flex-col items-center">
        <img
          src={logoImg}
          alt="the awaze restaurant logo"
          className="h-44 w-52"
        />
        <div className="flex gap-5">
          <a href="https://www.instagram.com/chef_.z/?hl=en">
            <FaInstagram size={20} />
          </a>
          <a href="tel:+251">
            {" "}
            <FaSquarePhone size={20} />
          </a>
        </div>

        <p className="mt-10">
          &copy; {new Date().getFullYear()} | Developed by{" "}
          <a className="text-red-700" href="https://github.com/mickeybegashaw">
            Mikiyas Begashaw
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
