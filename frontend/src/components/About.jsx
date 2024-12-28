import aboutImg from "../assets/about.png";
import { BiCheckDouble } from "react-icons/bi";

const About = () => {
  return (
    <div
      id="about"
      className="font-serif min-h-screen flex flex-col md:flex-row items-center md:justify-evenly gap-20  w-screen pt-20 text-white"
    >
      <div className="w-3/4 md:w-2/5">
        <h1 className="text-4xl text-red-700 font-bold">Awaze Restaurant</h1>
        <br />
        <p style={{ lineHeight: "2.5rem" }} className=" md:text-xl">
          Awaze Restaurant is a dining establishment in Addis Ababa, Ethiopia.{" "}
          <br />
          &nbsp; &nbsp; &nbsp;
          <span className="inline-block">
            <BiCheckDouble />
          </span>
          Our restaurant is a place where you can enjoy authentic Ethiopian
          cuisine in a warm and friendly atmosphere.
          <br /> &nbsp; &nbsp; &nbsp;
          <span className="inline-block">
            <BiCheckDouble />
          </span>
          Our menu features a wide selection of dishes that are made with the
          freshest ingredients and prepared with care by our talented chefs.{" "}
          <br /> &nbsp; &nbsp; &nbsp;
          <span className="inline-block">
            <BiCheckDouble />
          </span>
          We also offer a selection of wines and beers to complement your meal.
          So come in and enjoy a delicious meal with us today!
        </p>
      </div>
      <img className="h-2/6" src={aboutImg} alt="inside of awaze restaurant" />
    </div>
  );
};

export default About;
