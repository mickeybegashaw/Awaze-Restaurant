const Home = () => {
  return (
    <div
      id="home"
      
      className="bg-[url('./assets/hero3.png')] font-serif 
     text-white bg-cover min-h-screen  w-screen flex pt-32 md:p-0 md:items-center"
    >
      <div className="ml-5 md:ml-24 flex flex-col gap-3">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to <span className="text-red-700">Awaze</span>{" "}
        </h1>
        <h2 className="text-xl md:text-2xl leading-loose">
          The best Ethiopian restaurant in town
        </h2>
        <div className="flex gap-5">
          <a
            href="#menu"
            className="border-red-700 border-4 text-xl p-2 rounded-xl hover:bg-red-700 transition-all"
          >
            Our menu
          </a>
          <a
            href="#contact"
            className="border-red-700 border-4 text-xl p-2 rounded-xl hover:bg-red-700 transition-all"
          >
            Contact us
          </a>
        </div><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
  );
};

export default Home;
