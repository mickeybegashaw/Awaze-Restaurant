import aboutImg from "../assets/about.png";
import aboutImg2 from "../assets/hero1.png";
import { BiCheckDouble } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <div className="font-sans min-h-screen flex flex-col lg:flex-row items-center md:justify-evenly gap-1 md:gap-20 w-screen  text-white">
        <div data-aos="fade-right" className="w-5/6 md:w-2/5 pt-10">
          <h1 className="text-5xl text-red-700 font-bold font-cursive">
            Awaze Restaurant
          </h1>
          <br />

          <p style={{ lineHeight: "3rem" }} className=" md:text-xl">
            Awaze Restaurant is a dining establishment in Addis Ababa, Ethiopia.{" "}
            <br />
            &nbsp; &nbsp; &nbsp;
            <span className="inline-block">
              <BiCheckDouble />
            </span>
            Our restaurant is a place where you can enjoy authentic Ethiopian
            cuisine in a warm and friendly atmosphere.
            <br /> <br />
            <br />
          </p>
        </div>
        <img
          data-aos="fade-left"
          className="h-2/6 border-8 border-stone-300"
          src={aboutImg}
          alt="inside of awaze restaurant"
        />
      </div>

      <div className="font-serif min-h-screen flex flex-col lg:flex-row items-center md:justify-evenly gap-1 md:gap-20 w-screen pt-10 text-white">
        <div data-aos="fade-right" className="w-5/6 md:w-2/5">
          <br />
          <p style={{ lineHeight: "3rem" }} className=" md:text-xl">
            &nbsp; &nbsp; &nbsp;
            <span className="inline-block">
              <BiCheckDouble />
            </span>
            Our menu features a wide selection of dishes that are made with the
            freshest ingredients and prepared with care by our talented chefs.{" "}
            <br /> &nbsp; &nbsp; &nbsp;
            <span className="inline-block">
              <BiCheckDouble />
            </span>
            We also offer a selection of wines and beers to complement your
            meal. <br />
            <br />
            <br />
          </p>
        </div>
        <img
          data-aos="fade-left"
          className="md:w-2/5 w-full border-8 border-stone-300"
          src={aboutImg2}
          alt="inside of awaze restaurant"
        />
      </div>
    </section>
  );
};

export default About;
