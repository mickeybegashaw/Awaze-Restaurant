import scrl1 from "../assets/scrl1.png";
import scl3 from "../assets/scl3.png";
import scl4 from "../assets/scl4.png";
import scl5 from "../assets/scl5.png";
import scl6 from "../assets/scl6.png";
import scl7 from "../assets/scl7.png";
import scl2 from "../assets/scl2.png";

const WhyUs = () => {
  return (
    <div className="font-serif bg-stone-800 h-3/4 w-screen px-14 md:px-20 pb-20 flex flex-col  ">
      <div>
      <div className="marquee-container mb-24">
          <div className="marquee w-screen gap-10 md:gap-20">
            <img src={scl3} alt="Image 2" />
            <img src={scl4} alt="Image 3" />
            <img src={scl2} alt="Image 1" />
            <img src={scl5} alt="Image 4" />
            <img src={scl6} alt="Image 5" />
            <img src={scl5} alt="Image 4" />
            <img src={scl4} alt="Image 3" />
            <img src={scl2} alt="Image 1" />
            <img src={scl7} alt="Image 6" />
            <img src={scrl1} alt="Image 7" />
            <img src={scl6} alt="Image 5" />
            <img src={scrl1} alt="Image 7" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-cursive text-red-700 font-bold ">
          Why Choose Our Restaurant
        </h2>
        <div className="flex flex-col md:flex-row gap-10 pt-16 text-white">
          <div
            data-aos="fade-right"
            className="bg-stone-950 p-8 py-14 rounded-lg hover:bg-red-700 transition-all group"
          >
            <div className="group-hover:-translate-y-7 transition-transform">
              <h3 className="text-3xl mb-3 font-cursive text-red-700 font-bold group-hover:text-stone-900 transition-all">
                Quality Food
              </h3>
              <p className="text-lg leading-loose">
                Our restaurant is a place where you can enjoy authentic
                Ethiopian cuisine in a warm and friendly atmosphere.
              </p>
            </div>
          </div>

          <div
            data-aos="fade"
            className="bg-stone-950 p-8 py-14 rounded-lg hover:bg-red-700 transition-all group"
          >
            <div className="group-hover:-translate-y-7 transition-transform">
              <h3 className="text-3xl mb-3 font-cursive text-red-700 font-bold group-hover:text-stone-900">
                Friendly Staff
              </h3>
              <p className="text-lg leading-loose">
                Our staff is dedicated to providing you with the best dining
                experience possible.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="bg-stone-950 p-8 py-14 rounded-lg hover:bg-red-700 transition-all group"
          >
            <div className="group-hover:-translate-y-7 transition-transform">
              <h3 className="text-3xl mb-3 font-cursive text-red-700 font-bold group-hover:text-stone-900">
                Great Atmosphere
              </h3>
              <p className="text-lg leading-loose">
                Our restaurant has a cozy and inviting atmosphere that is
                perfect for any occasion.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default WhyUs;
