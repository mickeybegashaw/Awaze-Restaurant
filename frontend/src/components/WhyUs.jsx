const WhyUs = () => {
  return (
    <div className="font-serif bg-stone-800 h-3/4 w-screen p-14 md:p-20 flex flex-col  ">
      <div>
        <h2 className="text-3xl text-red-700 font-bold ">
          Why Choose our Restaurant
        </h2>
        <div className="flex flex-col md:flex-row gap-10 pt-16 text-white">
        <div className="bg-stone-950 p-8 py-14 rounded-lg hover:bg-red-700 transition-all group">
        <div className="group-hover:-translate-y-7 transition-transform">
              <h3 className="text-xl text-red-700 font-bold group-hover:text-stone-900 transition-all">
                Quality Food
              </h3>
              <p className="text-lg leading-loose">
                Our restaurant is a place where you can enjoy authentic
                Ethiopian cuisine in a warm and friendly atmosphere.
              </p>
            </div>
          </div>

          <div className="bg-stone-950 p-8 py-14 rounded-lg hover:bg-red-700 transition-all group">
            <div className="group-hover:-translate-y-7 transition-transform">
              <h3 className="text-xl text-red-700 font-bold group-hover:text-stone-900">
                Friendly Staff
              </h3>
              <p className="text-lg leading-loose">
                Our staff is dedicated to providing you with the best dining
                experience possible.
              </p>
            </div>
          </div>

          <div className="bg-stone-950 p-8 py-14 rounded-lg hover:bg-red-700 transition-all group">
            <div className="group-hover:-translate-y-7 transition-transform">
              <h3 className="text-xl text-red-700 font-bold group-hover:text-stone-900">
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