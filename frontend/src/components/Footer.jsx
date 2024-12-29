import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="bg-stone-950 h-fit text-white py-10">
      <div className="bg-stone-950 h-fit text-white flex justify-around py-10">
        <div className="leading-8">
          <h3 className="font-bold">Awaze restaurant</h3>
          <div className="text-red-700">
            <p>Addis Ababa</p>
            <p>
              <strong>Phone:</strong> 0000000000
            </p>
          </div>
        </div>

        <div className="leading-8">
          <h3 className="font-bold">Usefull links</h3>
          <div className="text-red-700">
            <Link to="home" smooth={true} duration={900} offset={-70}>
              <a href="#home">Home</a>
            </Link>
            <br />

            <Link to="about" smooth={true} duration={900} offset={-70}>
              <a href="#about">About</a>
            </Link>
            <br />

            <Link to="menu" smooth={true} duration={900} offset={-70}>
              <a href="#menu">Menu</a>
            </Link>
            <br />
            <Link to="contact" smooth={true} duration={900} offset={-70}>
              <a href="#contact">Contact</a>
            </Link>
          </div>
        </div>

        <div className="leading-8">
          <h3 className="font-bold">Our services</h3>
          <div className="text-red-700">
            <p>Ethiopian cuisine</p>
            <p>Quality Food</p>
            <p>Great Atmosphere</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
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
