import Hero from "../components/hero";
import About from "../components/About";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";
import Menu from "../components/theMenu";
import Header from "../components/Header";
import Contact from "../components/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once:true });
  }, []);
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="pt-20 md:pt-24">
        <Hero />
        <About />
        <WhyUs />
        <Menu />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
