import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-[url('./assets/hero3.png')] font-serif 
     text-white bg-cover min-h-screen  w-screen flex pt-24 md:p-0 md:items-center"
    >
      <div className="ml-5 md:ml-24 flex flex-col gap-3">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-red-700">Awaze</span>{" "}
        </h1>
        <h2 className="text-xl md:text-2xl leading-loose">
          The best Ethiopian restaurant in town
        </h2>
        <div className="flex gap-5">
          <Link
            to="menu"
            smooth={true}
            duration={900}
            offset={-70}
            className="border-red-700 border-2 text-xl p-2 rounded-xl hover:bg-red-700 transition-all"
          >
            Our menu
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={900}
            offset={-70}
            className="border-red-700 border-2 text-xl p-2 rounded-xl hover:bg-red-700 transition-all"
          >
            Contact us
          </Link>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
};

export default Home;
