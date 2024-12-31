import { Link } from "react-scroll";
import logoImg from "../assets/Awazelogo.png";

const Footer = () => {
  return (
    <section className="bg-stone-950 h-fit w-screen text-white py-10">
    
      <div className="flex flex-col items-center">
        <img src={logoImg} alt="the awaze restaurant logo" className="h-44 w-52" />
        <p>
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
