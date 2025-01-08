import { Link } from "react-scroll";

const SideBarr = ({ onClose }) => {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center "
      ></div>{" "}
      <div
        data-aos="fade-left"
        className="bg-black bg-opacity-90 w-4/5 text-black flex flex-col  items-center h-screen fixed top-0 right-0 z-50"
      >
        <div className="flex flex-col gap-10 mt-32 text-xl font-serif text-white font-old">
          <Link
            to="home"
            smooth={true}
            duration={900}
            offset={-70}
            onClick={onClose}
            className="cursor-pointer hover:text-red-700 transition-all"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={900}
            offset={-70}
            onClick={onClose}
            className="cursor-pointer hover:text-red-700 transition-all"
          >
            About
          </Link>
          <Link
            to="menu"
            smooth={true}
            duration={900}
            offset={-70}
            onClick={onClose}
            className="cursor-pointer hover:text-red-700 transition-all"
          >
            Menu
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={900}
            offset={-70}
            onClick={onClose}
            className="cursor-pointer hover:text-red-700 transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBarr;
